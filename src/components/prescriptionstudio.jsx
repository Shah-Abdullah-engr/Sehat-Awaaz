import React from 'react';

export default function PrescriptionStudio({
  searchTerm,
  setSearchTerm,
  dosage,
  setDosage,
  urduPrompt,
  setUrduPrompt,
  timing,
  setTiming,
  onVoiceListen,
  isPlayingAudio,
  onVoiceSearch,
  isListening
}) {
  return (
    <section className="col-center glass-card no-print">
      <h3 className="card-title">AI PRESCRIPTION STUDIO</h3>

      {/* Search Input Bar */}
      <div className="search-bar-container">
        <svg className="search-icon" width="18" height="18" fill="none" stroke="#64748b" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <input
          type="text"
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Augmentin 625mg"
        />
        <button 
          className={`search-arrow-btn ${isListening ? 'listening' : ''}`} 
          onClick={onVoiceSearch} 
          title="Search Medicine"
        >
          {isListening ? '🎙️' : '➔'}
        </button>
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

      {/* Urdu Audio Script Box */}
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

      {/* Workflow Indicator */}
      <div className="workflow-pipeline">
        <div className="pipeline-step">
          <span className="pipe-icon">🤖</span>
          <span>AI Diagnosis</span>
        </div>
        <span className="pipe-arrow">➔</span>
        <div className="pipeline-step">
          <span className="pipe-icon">👤</span>
          <span>Human Validation</span>
        </div>
        <span className="pipe-arrow">➔</span>
        <div className="pipeline-step">
          <span className="pipe-icon">📝</span>
          <span>Label Generation</span>
        </div>
      </div>
    </section>
  );
}