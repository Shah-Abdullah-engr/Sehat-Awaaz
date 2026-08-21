import React from 'react';

export default function StickerPreview({
  qrCanvasRef,
  patientName,
  selectedMed,
  dosage,
  timing,
  onPrint
}) {
  return (
    <section className="col-right">
      <div className="glass-card preview-card">
        <h3 className="card-title preview-heading no-print">LIVE STICKER PREVIEW</h3>

        {/* Physical Thermal Sticker with Serrated Jagged Edge */}
        <div className="thermal-paper">
          <div className="inner-label-border">
            <h4 className="label-header">SEHAT AWAAZ</h4>
            <p className="label-sub">AUDIO LABEL</p>

            <div className="patient-meta">
              <div><strong>Patient:</strong> {patientName}</div>
              <div><strong>Med:</strong> {selectedMed}</div>
              <div><strong>Dose:</strong> 1 Tab (2x Day)</div>
              <div>
                <strong>Visual Cues:</strong> ☀️[{timing.morning ? '✔' : ' '}] 🌙[{timing.night ? '✔' : ' '}]
              </div>
            </div>

            <div className="qr-wrapper">
              <canvas ref={qrCanvasRef}></canvas>
            </div>
          </div>
        </div>

        <button className="approve-print-btn no-print" onClick={onPrint}>
          APPROVE & 1-CLICK PRINT (5s)
        </button>
      </div>
    </section>
  );
}