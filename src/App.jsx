// src/App.jsx
import React, { useState, useEffect, useRef } from 'react';
import QRCode from 'qrcode';
import { AI_DRUG_DATABASE } from './data/medicinedatabase';
import { playAlibabaTTS, startVoiceRecognition } from './services/alibabaSpeech';

import Navbar from './components/navbar';
import PresetsPanel from './components/presetpanel';
import PrescriptionStudio from './components/prescriptionstudio';
import StickerPreview from './components/stickerpreview';
import './App.css';

export default function App() {
  // 1. Check if opened via QR Scan on Mobile
  const urlParams = new URLSearchParams(window.location.search);
  const scanMedKey = (urlParams.get('med') || '').toLowerCase().trim();
  const isPatientView = Boolean(scanMedKey);

  // Get data for scanned medicine from local database
  const scannedData = AI_DRUG_DATABASE[scanMedKey] || {
    name: urlParams.get('med') || 'Medicine',
    dosage: '1 Tablet twice daily after meals',
    urduPrompt: 'یہ دوا ڈاکٹر کی ہدایت کے مطابق استعمال کریں۔',
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

  // Sync state when Preset clicked
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

  // Sync Search
  useEffect(() => {
    const key = searchTerm.toLowerCase().trim();
    if (AI_DRUG_DATABASE[key]) {
      const entry = AI_DRUG_DATABASE[key];
      setDosage(entry.dosage);
      setUrduPrompt(entry.urduPrompt);
      setTiming(entry.schedule);
    }
  }, [searchTerm]);

  // Clean, Short Web Link for QR Code
  useEffect(() => {
    if (qrCanvasRef.current && !isPatientView) {
      const baseUrl = window.location.origin;
      // Ultra-clean short URL: http://192.168.0.9:5173/?med=augmentin+625mg
      const cleanUrl = `${baseUrl}/?med=${encodeURIComponent(searchTerm.toLowerCase().trim())}`;

      QRCode.toCanvas(qrCanvasRef.current, cleanUrl, {
        width: 140,
        margin: 0,
        color: { dark: '#0f172a', light: '#ffffff' }
      });
    }
  }, [searchTerm, isPatientView]);

  const handleVoiceListen = (textToPlay = urduPrompt) => {
    setIsPlayingAudio(true);
    playAlibabaTTS(
      textToPlay,
      () => setIsPlayingAudio(true),
      () => setIsPlayingAudio(false)
    );
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
      <div className="patient-screen">
        <div className="patient-card">
          <div className="patient-header">
            <span className="badge">صحت آواز • آڈیو رہنمائی</span>
            <h2>{scannedData.name}</h2>
            <p className="patient-dose">{scannedData.dosage}</p>
          </div>

          <div className="patient-urdu-box">
            <p>{scannedData.urduPrompt}</p>
          </div>

          <button
            className={`patient-play-btn ${isPlayingAudio ? 'pulse' : ''}`}
            onClick={() => handleVoiceListen(scannedData.urduPrompt)}
          >
            {isPlayingAudio ? '🔊 آواز چل رہی ہے...' : '▶️ ہدایات سنیں (Play Audio)'}
          </button>

          <p className="patient-footer">ڈاکٹر یا فارماسسٹ کی دی گئی ہدایات کے مطابق دوا استعمال کریں۔</p>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // PHARMACIST DASHBOARD (Default View)
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
          onVoiceListen={() => handleVoiceListen(urduPrompt)}
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