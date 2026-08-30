// src/components/prescriptionstudio.jsx
import React, { useState, useRef, useEffect } from 'react';
import { AI_DRUG_DATABASE } from '../data/medicinedatabase';

export default function PrescriptionStudio({
  searchTerm = "",
  setSearchTerm = () => {},
  isListening = false,
  onVoiceSearch,
  purpose = "General Medication",
  dosage = "1 Tablet twice daily",
  urduPrompt = "یہ دوا ڈاکٹر کی ہدایت کے مطابق استعمال کریں۔",
  timing = { morning: true, noon: false, night: true },
  setTiming = () => {},
  onPlayAudio = () => {}
}) {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const safeTiming = timing || { morning: false, noon: false, night: false };

  // Database keys for dropdown filter
  const allMedicines = Object.keys(AI_DRUG_DATABASE || {});
  const filteredMedicines = allMedicines.filter((med) =>
    med.toLowerCase().includes(searchTerm.toLowerCase().trim())
  );

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelectMed = (medName) => {
    setSearchTerm(medName);
    setShowDropdown(false);
  };

  return (
    <section className="col-center" style={{ flex: 1 }}>
      <div className="glass-card studio-card" style={{ padding: '1.5rem', borderRadius: '16px' }}>
        <h3 className="card-title" style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a', marginBottom: '1.25rem', letterSpacing: '0.5px' }}>
          AI PRESCRIPTION STUDIO
        </h3>

        {/* 1. Search Bar with Autocomplete Dropdown */}
        <div ref={dropdownRef} style={{ position: 'relative', marginBottom: '1.25rem' }}>
          <div style={{ display: 'flex', gap: '8px' }}>
            <div style={{ position: 'relative', flex: 1 }}>
              <input
                type="text"
                placeholder="Search Medicine (e.g. Panadol, Risek, Duphalac)..."
                value={searchTerm}
                onFocus={() => setShowDropdown(true)}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setShowDropdown(true);
                }}
                style={{
                  width: '100%',
                  boxSizing: 'border-box',
                  padding: '0.75rem 1rem 0.75rem 2.5rem',
                  borderRadius: '10px',
                  border: '1.5px solid #cbd5e1',
                  fontSize: '0.95rem',
                  outline: 'none',
                  background: '#ffffff',
                  color: '#0f172a'
                }}
              />
              <span style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', opacity: 0.5, pointerEvents: 'none' }}>
                🔍
              </span>
            </div>

            {onVoiceSearch && (
              <button
                type="button"
                onClick={onVoiceSearch}
                title="Voice Search"
                style={{
                  padding: '0 1.25rem',
                  borderRadius: '10px',
                  border: 'none',
                  background: isListening ? '#ef4444' : '#2563eb',
                  color: '#ffffff',
                  cursor: 'pointer',
                  fontSize: '1.1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {isListening ? '🎙️...' : '🎙️'}
              </button>
            )}
          </div>

          {/* Medicine Suggestions Dropdown Menu */}
          {showDropdown && filteredMedicines.length > 0 && (
            <ul
              style={{
                position: 'absolute',
                top: 'calc(100% + 4px)',
                left: 0,
                right: onVoiceSearch ? '56px' : 0,
                background: '#ffffff',
                border: '1.5px solid #cbd5e1',
                borderRadius: '10px',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                listStyle: 'none',
                padding: '6px 0',
                margin: 0,
                zIndex: 50,
                maxHeight: '200px',
                overflowY: 'auto'
              }}
            >
              {filteredMedicines.map((med) => (
                <li
                  key={med}
                  onClick={() => handleSelectMed(med)}
                  style={{
                    padding: '8px 14px',
                    fontSize: '0.9rem',
                    color: '#1e293b',
                    cursor: 'pointer',
                    textTransform: 'capitalize',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderBottom: '1px solid #f1f5f9'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = '#f0f9ff')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = '#ffffff')}
                >
                  <span style={{ fontWeight: 600 }}>💊 {med}</span>
                  <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Select</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* 2. Medicine Purpose */}
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#475569', marginBottom: '6px' }}>
            Medicine Purpose (یہ دوا کس لیے ہے؟)
          </label>
          <input
            type="text"
            readOnly
            value={purpose}
            style={{
              width: '100%',
              boxSizing: 'border-box',
              padding: '0.7rem 0.9rem',
              borderRadius: '8px',
              border: '1px solid #e2e8f0',
              background: '#f8fafc',
              fontSize: '0.92rem',
              fontWeight: 500,
              color: '#1e293b'
            }}
          />
        </div>

        {/* 3. Suggested Dosage */}
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#475569', marginBottom: '6px' }}>
            AI Suggested Dosage
          </label>
          <input
            type="text"
            readOnly
            value={dosage}
            style={{
              width: '100%',
              boxSizing: 'border-box',
              padding: '0.7rem 0.9rem',
              borderRadius: '8px',
              border: '1px solid #e2e8f0',
              background: '#f8fafc',
              fontSize: '0.92rem',
              fontWeight: 500,
              color: '#1e293b'
            }}
          />
        </div>

        {/* 4. Timing Buttons / Chips */}
        <div style={{ marginBottom: '1.25rem' }}>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              type="button"
              onClick={() => setTiming(prev => ({ ...(prev || {}), morning: !prev?.morning }))}
              style={{
                flex: 1,
                padding: '0.6rem 0.75rem',
                borderRadius: '8px',
                border: safeTiming.morning ? '1.5px solid #f59e0b' : '1px solid #e2e8f0',
                background: safeTiming.morning ? '#fef3c7' : '#ffffff',
                color: safeTiming.morning ? '#92400e' : '#64748b',
                fontWeight: 600,
                fontSize: '0.88rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '4px'
              }}
            >
              ☀️ Morning {safeTiming.morning ? '✓' : ''}
            </button>

            <button
              type="button"
              onClick={() => setTiming(prev => ({ ...(prev || {}), noon: !prev?.noon }))}
              style={{
                flex: 1,
                padding: '0.6rem 0.75rem',
                borderRadius: '8px',
                border: safeTiming.noon ? '1.5px solid #f97316' : '1px solid #e2e8f0',
                background: safeTiming.noon ? '#ffedd5' : '#ffffff',
                color: safeTiming.noon ? '#9a3412' : '#64748b',
                fontWeight: 600,
                fontSize: '0.88rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '4px'
              }}
            >
              🌤️ Noon {safeTiming.noon ? '✓' : ''}
            </button>

            <button
              type="button"
              onClick={() => setTiming(prev => ({ ...(prev || {}), night: !prev?.night }))}
              style={{
                flex: 1,
                padding: '0.6rem 0.75rem',
                borderRadius: '8px',
                border: safeTiming.night ? '1.5px solid #6366f1' : '1px solid #e2e8f0',
                background: safeTiming.night ? '#e0e7ff' : '#ffffff',
                color: safeTiming.night ? '#3730a3' : '#64748b',
                fontWeight: 600,
                fontSize: '0.88rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '4px'
              }}
            >
              🌙 Night {safeTiming.night ? '✓' : ''}
            </button>
          </div>
        </div>

        {/* 5. Urdu Audio Prompt Preview Box */}
        <div>
          <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#475569', marginBottom: '6px' }}>
            Urdu Audio Prompt Preview
          </label>
          <div
            style={{
              padding: '1.1rem',
              borderRadius: '12px',
              border: '1.5px solid #bae6fd',
              background: '#f0f9ff',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px'
            }}
          >
            <p
              dir="rtl"
              style={{
                fontFamily: "'Noto Nastaliq Urdu', 'Jameel Noori Nastaleeq', 'Urdu Typesetting', serif, Tahoma",
                fontSize: '1.25rem',
                lineHeight: '2.1rem',
                color: '#0f172a',
                textAlign: 'right',
                margin: 0
              }}
            >
              {urduPrompt}
            </p>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button
                type="button"
                onClick={onPlayAudio}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '0.5rem 1rem',
                  borderRadius: '8px',
                  border: 'none',
                  background: '#0284c7',
                  color: '#ffffff',
                  fontWeight: 600,
                  fontSize: '0.88rem',
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