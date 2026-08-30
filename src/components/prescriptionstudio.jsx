// src/components/prescriptionstudio.jsx
import React from 'react';

export default function PrescriptionStudio({
  searchTerm,
  setSearchTerm,
  onSearch,
  isListening,
  onVoiceSearch,
  purpose,
  dosage,
  urduPrompt,
  timing = { morning: true, noon: false, night: true },
  setTiming,
  onPlayAudio
}) {
  const safeTiming = timing || { morning: false, noon: false, night: false };

  return (
    <section className="col-center">
      <div className="glass-card studio-card">
        <h3 className="card-title">AI PRESCRIPTION STUDIO</h3>

        {/* 1. Search Bar with Mic & Search Action */}
        <div className="search-bar-container" style={{ display: 'flex', gap: '8px', marginBottom: '1.25rem' }}>
          <div style={{ position: 'relative', flex: 1 }}>
            <input
              type="text"
              placeholder="Search Medicine (e.g. Panadol, Risek, Duphalac)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem 1rem 0.75rem 2.5rem',
                borderRadius: '8px',
                border: '1px solid #cbd5e1',
                fontSize: '0.95rem'
              }}
            />
            <span style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', opacity: 0.5 }}>
              🔍
            </span>
          </div>

          <button
            type="button"
            onClick={onVoiceSearch}
            title="Voice Search"
            style={{
              padding: '0 1rem',
              borderRadius: '8px',
              border: 'none',
              background: isListening ? '#ef4444' : '#2563eb',
              color: '#fff',
              cursor: 'pointer',
              fontSize: '1.1rem'
            }}
          >
            {isListening ? '🎙️...' : '🎙️'}
          </button>
        </div>

        {/* 2. Medicine Purpose */}
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#475569', marginBottom: '4px' }}>
            Medicine Purpose (یہ دوا کس لیے ہے؟)
          </label>
          <input
            type="text"
            readOnly
            value={purpose || "General Medication"}
            style={{
              width: '100%',
              padding: '0.65rem 0.75rem',
              borderRadius: '6px',
              border: '1px solid #e2e8f0',
              background: '#f8fafc',
              fontWeight: 500
            }}
          />
        </div>

        {/* 3. Suggested Dosage */}
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#475569', marginBottom: '4px' }}>
            AI Suggested Dosage
          </label>
          <input
            type="text"
            readOnly
            value={dosage || "1 Tablet twice daily"}
            style={{
              width: '100%',
              padding: '0.65rem 0.75rem',
              borderRadius: '6px',
              border: '1px solid #e2e8f0',
              background: '#f8fafc',
              fontWeight: 500
            }}
          />
        </div>

        {/* 4. Interactive Timing Chips */}
        <div style={{ marginBottom: '1.25rem' }}>
          <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#475569', marginBottom: '6px' }}>
            Dosage Schedule (اوقات)
          </label>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              type="button"
              onClick={() => setTiming && setTiming(prev => ({ ...(prev || {}), morning: !prev?.morning }))}
              style={{
                flex: 1,
                padding: '0.5rem 0.75rem',
                borderRadius: '6px',
                border: safeTiming.morning ? '1.5px solid #eab308' : '1px solid #cbd5e1',
                background: safeTiming.morning ? '#fef9c3' : '#fff',
                color: safeTiming.morning ? '#854d0e' : '#64748b',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              ☀️ Morning {safeTiming.morning ? '✓' : ''}
            </button>

            <button
              type="button"
              onClick={() => setTiming && setTiming(prev => ({ ...(prev || {}), noon: !prev?.noon }))}
              style={{
                flex: 1,
                padding: '0.5rem 0.75rem',
                borderRadius: '6px',
                border: safeTiming.noon ? '1.5px solid #f97316' : '1px solid #cbd5e1',
                background: safeTiming.noon ? '#ffedd5' : '#fff',
                color: safeTiming.noon ? '#9a3412' : '#64748b',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              🌤️ Noon {safeTiming.noon ? '✓' : ''}
            </button>

            <button
              type="button"
              onClick={() => setTiming && setTiming(prev => ({ ...(prev || {}), night: !prev?.night }))}
              style={{
                flex: 1,
                padding: '0.5rem 0.75rem',
                borderRadius: '6px',
                border: safeTiming.night ? '1.5px solid #6366f1' : '1px solid #cbd5e1',
                background: safeTiming.night ? '#e0e7ff' : '#fff',
                color: safeTiming.night ? '#3730a3' : '#64748b',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              🌙 Night {safeTiming.night ? '✓' : ''}
            </button>
          </div>
        </div>

        {/* 5. Urdu Audio Prompt Preview */}
        <div>
          <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#475569', marginBottom: '6px' }}>
            Urdu Audio Prompt Preview
          </label>
          <div
            style={{
              padding: '1.25rem',
              borderRadius: '8px',
              border: '1.5px solid #93c5fd',
              background: '#f0f9ff',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}
          >
            <div
              dir="rtl"
              style={{
                fontFamily: "'Noto Nastaliq Urdu', serif, Tahoma",
                fontSize: '1.35rem',
                lineHeight: '2.2rem',
                color: '#0f172a',
                textAlign: 'right'
              }}
            >
              {urduPrompt || "یہ دوا ڈاکٹر کی ہدایت کے مطابق استعمال کریں۔"}
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button
                type="button"
                onClick={onPlayAudio}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '0.5rem 1rem',
                  borderRadius: '6px',
                  border: 'none',
                  background: '#0284c7',
                  color: '#fff',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                🔊 Listen Voice
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}