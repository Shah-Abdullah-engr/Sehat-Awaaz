// src/App.jsx
import React, { useState, useEffect, useRef } from 'react';
import QRCode from 'qrcode';
import { AI_DRUG_DATABASE } from './data/medicinedatabase';
import { playAlibabaTTS, stopAudio, startVoiceRecognition } from './services/alibabaSpeech';

import Navbar from './components/navbar';
import PresetsPanel from './components/presetpanel';
import PrescriptionStudio from './components/prescriptionstudio';
import StickerPreview from './components/stickerpreview';
import './App.css';

export default function App() {
  const urlParams = new URLSearchParams(window.location.search);
  const scanMedKey = (urlParams.get('med') || '').toLowerCase().trim();
  const isPatientView = Boolean(scanMedKey);

  const scannedData = AI_DRUG_DATABASE[scanMedKey] || {
    name: urlParams.get('med') || 'Prescribed Medicine',
    dosage: '1 Tablet every 12 Hours (Twice Daily) for 5 Days',
    urduPrompt: 'یہ گولی صبح اور شام کھانا کھانے کے بعد لیں، کورس پورا کریں',
    schedule: { morning: true, night: true }
  };

  const [selectedPreset, setSelectedPreset] = useState('Augmentin 1g');
  const [searchTerm, setSearchTerm] = useState('Augmentin 625mg');
  const [dosage, setDosage] = useState('1 Tablet every 12 Hours (Twice Daily) for 5 Days');
  const [urduPrompt, setUrduPrompt] = useState('یہ گولی صبح اور شام کھانا کھانے کے بعد لیں، کورس پورا کریں');
  const [timing, setTiming] = useState({ morning: true, night: true });
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const qrCanvasRef = useRef(null);

  const handlePresetSelect = (presetName) => {
    setSelectedPreset(presetName);
    const key = presetName.toLowerCase();
    if (AI_DRUG_DATABASE[key]) {
      const entry = AI_DRUG_DATABASE[key];
      setSearchTerm(entry.name);
      setDosage(entry.dosage);
      setUrduPrompt(entry.urduPrompt);
      setTiming(entry.schedule);
    } else {
      setSearchTerm(presetName);
    }
  };

  useEffect(() => {
    const key = searchTerm.toLowerCase().trim();
    if (AI_DRUG_DATABASE[key]) {
      const entry = AI_DRUG_DATABASE[key];
      setDosage(entry.dosage);
      setUrduPrompt(entry.urduPrompt);
      setTiming(entry.schedule);
    }
  }, [searchTerm]);

  useEffect(() => {
    if (qrCanvasRef.current && !isPatientView) {
      const baseUrl = window.location.origin;
      const cleanUrl = `${baseUrl}/?med=${encodeURIComponent(searchTerm.toLowerCase().trim())}`;

      QRCode.toCanvas(qrCanvasRef.current, cleanUrl, {
        width: 140,
        margin: 0,
        color: { dark: '#0f172a', light: '#ffffff' }
      });
    }
  }, [searchTerm, isPatientView]);

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

  // -------------------------------------------------------------
  // PATIENT MOBILE AUDIO PLAYER (Rendered on QR Scan)
  // -------------------------------------------------------------
  if (isPatientView) {
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
            <span className={`chip ${scannedData.schedule?.morning ? 'active' : ''}`}>
              ☀️ صبح (Morning)
            </span>
            <span className={`chip ${scannedData.schedule?.night ? 'active' : ''}`}>
              🌙 رات (Night)
            </span>
          </div>

          <div className="patient-urdu-box">
            <p className="patient-urdu-text">{scannedData.urduPrompt}</p>
          </div>

          {/* Sound Wave Animation */}
          {isPlayingAudio && (
            <div className="sound-wave">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          )}

          <button
            className={`patient-play-btn ${isPlayingAudio ? 'playing' : ''}`}
            onClick={() => toggleAudio(scannedData.urduPrompt)}
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

  // -------------------------------------------------------------
  // PHARMACIST DESKTOP DASHBOARD
  // -------------------------------------------------------------
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
          dosage={dosage}
          setDosage={setDosage}
          urduPrompt={urduPrompt}
          setUrduPrompt={setUrduPrompt}
          timing={timing}
          setTiming={setTiming}
          onVoiceListen={() => toggleAudio(urduPrompt)}
          isPlayingAudio={isPlayingAudio}
          onVoiceSearch={handleVoiceSearch}
          isListening={isListening}
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