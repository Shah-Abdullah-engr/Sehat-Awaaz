// src/components/stickerpreview.jsx
import React, { useEffect, useRef } from 'react';
import QRCode from 'qrcode';

export default function StickerPreview({ 
  patientName = "S. Khan", 
  selectedMed = "Panadol 500mg", 
  dosage = "1 to 2 Tablets every 6 to 8 hours",
  timing = { morning: true, noon: false, night: true }, 
  qrCanvasRef: externalRef, 
  onPrint = () => window.print()
}) {
  const localCanvasRef = useRef(null);
  const activeCanvasRef = externalRef || localCanvasRef;
  const safeTiming = timing || { morning: false, noon: false, night: false };

  // Guaranteed QR Code rendering on every change
  useEffect(() => {
    if (activeCanvasRef.current) {
      const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
      const cleanUrl = `${baseUrl}/?med=${encodeURIComponent((selectedMed || 'Panadol').trim())}`;

      QRCode.toCanvas(
        activeCanvasRef.current, 
        cleanUrl, 
        {
          width: 140,
          margin: 1,
          color: { dark: '#0f172a', light: '#ffffff' }
        }, 
        (error) => {
          if (error) console.error("QR Code Error:", error);
        }
      );
    }
  }, [selectedMed, activeCanvasRef]);

  return (
    <section className="col-right" style={{ flex: 1 }}>
      {/* Print Specific CSS (Popup Print Only Sticker) */}
      <style>{`
        @media print {
          body * {
            visibility: hidden !important;
          }
          .thermal-paper, .thermal-paper * {
            visibility: visible !important;
          }
          .thermal-paper {
            position: fixed !important;
            left: 50% !important;
            top: 50% !important;
            transform: translate(-50%, -50%) !important;
            width: 320px !important;
            border: 2px dashed #000 !important;
            padding: 16px !important;
            box-shadow: none !important;
          }
          .no-print {
            display: none !important;
          }
        }
      `}</style>

      <div 
        className="glass-card preview-card" 
        style={{ 
          padding: '1.5rem', 
          borderRadius: '16px', 
          display: 'flex', 
          flexDirection: 'column', 
          boxSizing: 'border-box' 
        }}
      >
        <h3 
          className="card-title no-print" 
          style={{ 
            fontSize: '1.1rem', 
            fontWeight: 700, 
            color: '#0f172a', 
            marginBottom: '1.25rem', 
            letterSpacing: '0.5px' 
          }}
        >
          LIVE STICKER PREVIEW
        </h3>

        {/* 1. Thermal Sticker Paper */}
        <div 
          className="thermal-paper" 
          style={{
            background: '#ffffff',
            border: '2px dashed #94a3b8',
            borderRadius: '12px',
            padding: '1.25rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.03)'
          }}
        >
          {/* Header */}
          <div style={{ textAlign: 'center', borderBottom: '1.5px solid #e2e8f0', paddingBottom: '8px' }}>
            <h4 style={{ margin: 0, fontSize: '1.15rem', fontWeight: 800, color: '#0284c7', letterSpacing: '1px' }}>
              SEHAT AWAAZ
            </h4>
            <p style={{ margin: 0, fontSize: '0.7rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>
              AUDIO LABEL
            </p>
          </div>

          {/* Patient Details */}
          <div style={{ fontSize: '0.86rem', color: '#1e293b', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <div><strong style={{ color: '#475569' }}>Patient:</strong> <span style={{ fontWeight: 600 }}>{patientName}</span></div>
            <div><strong style={{ color: '#475569' }}>Med:</strong> <span style={{ fontWeight: 700, color: '#0f172a' }}>{selectedMed}</span></div>
            <div><strong style={{ color: '#475569' }}>Dose:</strong> <span style={{ fontWeight: 500 }}>{dosage}</span></div>
            <div>
              <strong style={{ color: '#475569' }}>Visual Cues: </strong>
              <span>☀️[{safeTiming.morning ? '✓' : ' '}] </span>
              <span>🌤️[{safeTiming.noon ? '✓' : ' '}] </span>
              <span>🌙[{safeTiming.night ? '✓' : ' '}]</span>
            </div>
          </div>

          {/* 2. QR Code Canvas Box */}
          <div 
            className="qr-wrapper" 
            style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              justifyContent: 'center',
              paddingTop: '8px',
              borderTop: '1px solid #f1f5f9'
            }}
          >
            <div style={{ padding: '6px', background: '#ffffff', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
              <canvas ref={activeCanvasRef} width="140" height="140" style={{ display: 'block' }}></canvas>
            </div>
            <span style={{ fontSize: '0.72rem', fontWeight: 600, color: '#0284c7', marginTop: '6px' }}>
              📱 Scan with Phone for Urdu Audio
            </span>
          </div>
        </div>

        {/* 3. Print Button */}
        <div style={{ marginTop: '1.25rem' }}>
          <button 
            type="button" 
            onClick={onPrint} 
            className="print-btn no-print"
            style={{
              width: '100%',
              padding: '0.75rem 1rem',
              borderRadius: '10px',
              border: 'none',
              background: '#0284c7',
              color: '#ffffff',
              fontWeight: 700,
              fontSize: '0.92rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              boxShadow: '0 4px 10px rgba(2, 132, 199, 0.25)'
            }}
          >
            🖨️ Print Label Sticker
          </button>
        </div>

      </div>
    </section>
  );
}