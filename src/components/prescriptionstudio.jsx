import React, { useState } from 'react';

export default function PrescriptionStudio({
  searchTerm,
  setSearchTerm,
  dosage,
  setDosage,
  purpose, // 👈 Naya Prop
  urduPrompt,
  setUrduPrompt,
  timing,
  setTiming,
  onVoiceListen,
  isPlayingAudio,
  onVoiceSearch,
  isListening
}) {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <section className="col-center glass-card no-print">
      <h3 className="card-title">AI PRESCRIPTION STUDIO</h3>

      {/* Search Input Bar */}
      <div className="search-bar-container">
        <svg className="search-icon" width="18" height="18" fill="none" stroke="#64748b" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        
        <div className="sehat-dropdown-container">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setShowDropdown(true);
            }}
            onClick={() => setShowDropdown(true)} // 👈 DROPDOWN CLICK FIX! Ab hamesha click pe khulega
            onFocus={() => setShowDropdown(true)}
            onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
            placeholder="Search Medicine (e.g. Panadol)"
            className="w-full text-lg p-3 px-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          />

          {/* Clean Dropdown */}
          {showDropdown && (
            <ul className="sehat-dropdown-list" style={{ zIndex: 999 }}>
              {[
                "Panadol 500mg", "Panadol Extra", "Brufen 400mg", "Augmentin 625mg",
                "Risek 40mg", "Flagyl 400mg", "Novidat 500mg", "Calamox 625mg",
                "Ponstan Forte", "Arinac", "Rigix 10mg", "Softin", "Gaviscon Syrup",
                "Ciproxin 500mg", "Amoxil 500mg", "Disprin 300mg", "Glucophage 500mg",
                "Gravinate", "Surbex Z", "Evion 400mg", "Synflex", "Calpol Syrup"
              ]
                .filter((med) => med.toLowerCase().includes(searchTerm.toLowerCase()))
                .map((med, index) => (
                  <li
                    key={index}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      setSearchTerm(med);
                      setShowDropdown(false);
                    }}
                    className="sehat-dropdown-item"
                  >
                    {med}
                  </li>
                ))}
            </ul>
          )}
        </div> 

        <button 
          className={`search-arrow-btn ${isListening ? 'listening' : ''}`} 
          onClick={onVoiceSearch} 
          title="Search Medicine"
        >
          {isListening ? '🎙️' : '➔'}
        </button>
      </div>

      {/* 🚨 NAYA HISSA: Medicine Purpose Box */}
      <div className="form-group" style={{ marginTop: '10px' }}>
        <label className="section-label">Medicine Purpose (یہ دوا کس لیے ہے؟)</label>
        <input
          type="text"
          className="glass-input"
          value={purpose || 'Fetching purpose...'}
          readOnly
          style={{ backgroundColor: '#f8fafc', color: '#0f172a', fontWeight: '500' }}
        />
      </div>

      {/* Suggested Dosage */}
      <div className="form-group">
        <label className="section-label">AI Suggested Dosage</label>
        <input
          type="text"
          className="glass-input"
          value={dosage}
          onChange={(e) => setDosage(e.target.value)}
        />
      </div>

      {/* Timing Schedule */}
      <div className="form-group">
        <label className="section-label">Modern Timing/Frequency</label>
        <div className="timing-pills-row">
          <button
            className={`timing-pill ${timing.morning ? 'active' : ''}`}
            onClick={() => setTiming((prev) => ({ ...prev, morning: !prev.morning }))}
          >
            ☀️ Morning
          </button>
          <button
            className={`timing-pill ${timing.night ? 'active' : ''}`}
            onClick={() => setTiming((prev) => ({ ...prev, night: !prev.night }))}
          >
            🌙 Night
          </button>
        </div>
      </div>

      {/* Urdu Audio Script Box (Pehle jesa hi hai) */}
      <div className="form-group">
        <label className="section-label">Urdu Audio Prompt Preview</label>
        <div className="urdu-prompt-card">
          <p className="urdu-text">{urduPrompt}</p>
          <div className="urdu-bottom-bar">
            <span className="speaker-icon">🔊</span>
            <button
              className="listen-voice-btn"
              onClick={onVoiceListen}
              disabled={isPlayingAudio}
            >
              {isPlayingAudio ? 'Speaking...' : 'Listen Voice'}
            </button>
          </div>
        </div>
      </div>

    </section>
  );
}