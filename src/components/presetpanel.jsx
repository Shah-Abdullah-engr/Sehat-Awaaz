import React from 'react';

export default function PresetsPanel({ selectedPreset, onSelectPreset }) {
  const presets = ['Panadol 500mg', 'Augmentin 1g', 'Risek 20mg'];

  return (
    <section className="col-left no-print">
   
      <div className="glass-card presets-card">
        <h3 className="card-title">Quick Prescriptions</h3>
        <div className="preset-stack">
          {presets.map((item) => (
            <button
              key={item}
              className={`pill-btn ${selectedPreset === item ? 'active' : ''}`}
              onClick={() => onSelectPreset(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

     
      <div className="metrics-stack">
        <div className="glass-card metric-card">
          <div className="metric-icon-box">
            <svg width="22" height="22" fill="none" stroke="#0284c7" strokeWidth="2" viewBox="0 0 24 24">
              <polyline points="6 9 6 2 18 2 18 9"></polyline>
              <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
              <rect x="6" y="14" width="12" height="8"></rect>
            </svg>
          </div>
          <div className="metric-info">
            <span className="metric-title">Today's Prints:</span>
            <span className="metric-val">58 Labels</span>
          </div>
        </div>

        <div className="glass-card metric-card">
          <div className="metric-icon-box">
            <svg width="22" height="22" fill="none" stroke="#0284c7" strokeWidth="2" viewBox="0 0 24 24">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
            </svg>
          </div>
          <div className="metric-info">
            <span className="metric-title">Audio Accuracy:</span>
            <span className="metric-val">100%</span>
          </div>
        </div>

        <div className="glass-card metric-card">
          <div className="metric-icon-box">
            <svg width="22" height="22" fill="none" stroke="#0284c7" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </div>
          <div className="metric-info">
            <span className="metric-title">Active Patients:</span>
            <span className="metric-val">34</span>
          </div>
        </div>
      </div>
    </section>
  );
}