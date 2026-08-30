// src/App.jsx
import React, { useState, useEffect, useRef } from 'react';
import QRCode from 'qrcode';
import { AI_DRUG_DATABASE } from './data/medicinedatabase';
import { playAlibabaTTS, stopAudio, startVoiceRecognition } from './services/alibabaSpeech';
import { fetchMedicineFromAI } from './services/aimedicineservices';

import Navbar from './components/navbar';
import PresetsPanel from './components/presetpanel';
import PrescriptionStudio from './components/prescriptionstudio';
import StickerPreview from './components/stickerpreview';
import './App.css';

export default function App() {
  const urlParams = new URLSearchParams(window.location.search);
  const scanMedKey = (urlParams.get('med') || '').toLowerCase().trim();
  const isPatientView = Boolean(scanMedKey);

  const [selectedPreset, setSelectedPreset] = useState('Augmentin 1g');
  const [searchTerm, setSearchTerm] = useState('Panadol 500mg');
  const [dosage, setDosage] = useState('1 to 2 Tablets every 6 to 8 hours');
  const [purpose, setPurpose] = useState('Pain and Fever Relief');
  const [urduPrompt, setUrduPrompt] = useState('یہ دوا درد اور بخار اتارنے کے لیے ہے۔ پانی کے ساتھ لیں۔');
  const [phoneticPrompt, setPhoneticPrompt] = useState('Yeh dawa dard aur bukhaar utaarne ke liye hai. Paani ke saath lein.');
  const [timing, setTiming] = useState({
    morning: true,
    noon: false,
    night: true
  });
  
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const qrCanvasRef = useRef(null);

  const [scannedData, setScannedData] = useState(() => {
    if (AI_DRUG_DATABASE[scanMedKey]) return AI_DRUG_DATABASE[scanMedKey];
    return {
      name: urlParams.get('med') || 'Prescribed Medicine',
      dosage: 'AI Data Load ho raha hai...',
      urduPrompt: 'ہدایات لوڈ ہو رہی ہیں...',
      phoneticPrompt: 'Hidayat load ho rahi hain...',
      timing: { morning: true, noon: false, night: true }
    };
  });

  // Patient Mobile View Logic
  useEffect(() => {
    if (isPatientView && scanMedKey && !AI_DRUG_DATABASE[scanMedKey]) {
      const getPatientAI = async () => {
        const aiResult = await fetchMedicineFromAI(scanMedKey);
        if (aiResult) {
          setScannedData({
            name: urlParams.get('med'),
            dosage: aiResult.dosage,
            urduPrompt: aiResult.urduPrompt,
            phoneticPrompt: aiResult.phoneticPrompt || aiResult.urduPrompt,
            timing: aiResult.timing || { morning: true, noon: false, night: true }
          });
        }
      };
      getPatientAI();
    }
  }, [isPatientView, scanMedKey]);

  // Preset Selection Logic
  const handlePresetSelect = (presetName) => {
    setSelectedPreset(presetName);
    const key = presetName.toLowerCase().trim();
    
    if (AI_DRUG_DATABASE[key]) {
      const entry = AI_DRUG_DATABASE[key];
      setSearchTerm(presetName);
      setDosage(entry.dosage);
      setPurpose(entry.purpose || "General Purpose");
      setUrduPrompt(entry.urduPrompt);
      setPhoneticPrompt(entry.phoneticPrompt || entry.urduPrompt);
      setTiming(entry.timing || entry.schedule || { morning: true, noon: false, night: true });
    } else {
      setSearchTerm(presetName);
    }
  };

  // Medicine Search & AI Fetching Logic
  useEffect(() => {
    const key = searchTerm.toLowerCase().trim();
    if (!key) return;

    // 1. Check Pre-saved Database
    if (AI_DRUG_DATABASE[key]) {
      const entry = AI_DRUG_DATABASE[key];
      setDosage(entry.dosage);
      setPurpose(entry.purpose || "General Purpose");
      setUrduPrompt(entry.urduPrompt);
      setPhoneticPrompt(entry.phoneticPrompt || entry.urduPrompt);
      setTiming(entry.timing || entry.schedule || { morning: true, noon: false, night: true });
      return;
    }

    // 2. Fetch from Gemini AI
    const fetchFromAI = async () => {
      setDosage("AI تجویز کر رہا ہے...");
      setPurpose("AI مقصد تلاش کر رہا ہے...");
      setUrduPrompt("AI ہدایات تیار کر رہا ہے...");

      const aiResult = await fetchMedicineFromAI(searchTerm);
      
      if (aiResult) {
        setDosage(aiResult.dosage);
        setPurpose(aiResult.purpose || "General Medication");
        setUrduPrompt(aiResult.urduPrompt);
        setPhoneticPrompt(aiResult.phoneticPrompt || aiResult.urduPrompt);
        setTiming(aiResult.timing || { morning: true, noon: false, night: true });
      } else {
        setDosage("1 Tablet twice daily");
        setPurpose("General Medication");
        setUrduPrompt("یہ دوا ڈاکٹر کی ہدایت کے مطابق استعمال کریں۔");
        setPhoneticPrompt("Yeh dawa doctor ki hidayat ke mutabiq istemal karein.");
      }
    };

    const timeoutId = setTimeout(() => {
      fetchFromAI();
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [searchTerm]);

  // QR Code Rendering
  useEffect(() => {
    if (qrCanvasRef.current && !isPatientView) {
      const baseUrl = window.location.origin;
      const cleanUrl = `${baseUrl}/?med=${encodeURIComponent(searchTerm.trim())}`;

      QRCode.toCanvas(qrCanvasRef.current, cleanUrl, {
        width: 140,
        margin: 0,
        color: { dark: '#0f172a', light: '#ffffff' }
      });
    }
  }, [searchTerm, isPatientView]);

  // Audio Play / Stop Handler
  const toggleAudio = (textToPlay) => {
    if (isPlayingAudio) {
      stopAudio();
      setIsPlayingAudio(false);
    } else {
      setIsPlayingAudio(true);
      playAlibabaTTS(
        textToPlay,
        () => setIsPlayingAudio(true),
        () => setIsPlayingAudio(false)
      );
    }
  };

  // Voice Search Handler
  const handleVoiceSearch = () => {
    setIsListening(true);
    startVoiceRecognition(
      (result) => {
        setIsListening(false);
        setSearchTerm(result);
      },
      () => setIsListening(false)
    );
  };

  // Patient Mobile View
  if (isPatientView) {
    const activeTiming = scannedData.timing || scannedData.schedule || { morning: true, noon: false, night: true };

    return (
      <div className="patient-mobile-wrapper">
        <div className="patient-card">
          <div className="patient-badge">
            <span className="pulse-dot"></span>
            SEHAT AWAAZ • آڈیو رہنمائی
          </div>

          <h1 className="patient-med-name">{scannedData.name}</h1>
          <div className="patient-dose-badge">{scannedData.dosage}</div>

          <div className="patient-schedule-chips">
            <span className={`chip ${activeTiming?.morning ? 'active' : ''}`}>☀️ صبح (Morning)</span>
            <span className={`chip ${activeTiming?.noon ? 'active' : ''}`}>☀️ دوپہر (Noon)</span>
            <span className={`chip ${activeTiming?.night ? 'active' : ''}`}>🌙 رات (Night)</span>
          </div>

          <div className="patient-urdu-box">
            <p className="patient-urdu-text">{scannedData.urduPrompt}</p>
          </div>

          {isPlayingAudio && (
            <div className="sound-wave">
              <span className="bar"></span><span className="bar"></span>
              <span className="bar"></span><span className="bar"></span>
              <span className="bar"></span>
            </div>
          )}

          <button
            className={`patient-play-btn ${isPlayingAudio ? 'playing' : ''}`}
            onClick={() => toggleAudio(scannedData.phoneticPrompt || scannedData.urduPrompt)}
          >
            {isPlayingAudio ? '⏹️ آواز بند کریں (Stop)' : '🔊 ہدایات سنیں (Play Audio)'}
          </button>

          <footer className="patient-footer-note">
            ⚠️ برائے مہربانی دوا اپنے معالج کی ہدایات کے مطابق استعمال کریں۔
          </footer>
        </div>
      </div>
    );
  }

  // Doctor Dashboard View
  return (
    <div className="app-wrapper">
      <Navbar />

      <main className="dashboard-grid">
        <PresetsPanel
          selectedPreset={selectedPreset}
          onSelectPreset={handlePresetSelect}
        />

        <PrescriptionStudio
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          isListening={isListening}
          onVoiceSearch={handleVoiceSearch}
          purpose={purpose}
          dosage={dosage}
          urduPrompt={urduPrompt}
          timing={timing}
          setTiming={setTiming}
          onPlayAudio={() => toggleAudio(phoneticPrompt || urduPrompt)}
        />

        <StickerPreview
          qrCanvasRef={qrCanvasRef}
          patientName="S. Khan"
          selectedMed={searchTerm}
          dosage={dosage}
          timing={timing}
          onPrint={() => window.print()}
        />
      </main>
    </div>
  );
}