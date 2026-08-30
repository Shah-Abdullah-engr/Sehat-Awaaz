// src/components/stickerpreview.jsx
export default function StickerPreview({ 
  patientName = "S. Khan", 
  selectedMed = "Panadol", 
  timing = { morning: true, noon: false, night: true }, 
  qrCanvasRef, 
  onPrint 
}) {
  const safeTiming = timing || { morning: false, noon: false, night: false };

  return (
    <section className="col-right">
      <div className="glass-card preview-card">
        <h3 className="card-title preview-heading no-print">LIVE STICKER PREVIEW</h3>

        {/* Physical Thermal Sticker */}
        <div className="thermal-paper">
          <div className="inner-label-border">
            <h4 className="label-header">SEHAT AWAAZ</h4>
            <p className="label-sub">AUDIO LABEL</p>

            <div className="patient-meta">
              <div><strong>Patient:</strong> {patientName}</div>
              <div><strong>Med:</strong> {selectedMed}</div>
              <div><strong>Dose:</strong> 1 Tab (2x Day)</div>
              <div>
                <strong>Visual Cues: </strong> 
                ☀️[{safeTiming?.morning ? '✓' : ' '}] 
                🌤️[{safeTiming?.noon ? '✓' : ' '}] 
                🌙[{safeTiming?.night ? '✓' : ' '}]
              </div>
            </div>

            <div className="qr-wrapper">
              <canvas ref={qrCanvasRef}></canvas>
            </div>
          </div>
        </div>

        {onPrint && (
          <button 
            type="button" 
            onClick={onPrint} 
            className="btn btn-primary no-print" 
            style={{ marginTop: '1rem', width: '100%' }}
          >
            🖨️ Print Label Sticker
          </button>
        )}
      </div>
    </section>
  );
}