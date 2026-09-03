# 🩺 Sehat Awaaz (صحت آواز) — AI Clinical Labeler & Audio Prescription Engine

> **Built for Alibaba Cloud AI Hackathon Pakistan 2026**  
> *Bridging healthcare literacy in Pakistan through Generative AI, Urdu phonetics, and smart thermal dispensary labeling.*

---

##  Problem Statement
Pakistan ke clinics aur pharmacies mein rozana lakho prescriptions issue hoti hain. Complex medical abbreviations aur English dosage instructions aam marizon ke liye parhna aur samajhna mushkil hota hai, jis ki wajah se medication errors aur incorrect dosage ke risks barh jatay hain. Overburdened doctors ke paas har mariz ko detail mein samjhane ka waqt nahi hota.

##  The Solution
**Sehat Awaaz** ek end-to-end intelligent prescription assistant hai jo real-time clinic workflows mein fit hota hai:
1. Doctor ya dispenser medicine name search karta hai ya select karta hai.
2. Core AI engine generic formulation ko process karke standard clinical dosage aur purpose deduce karta hai.
3. System instant culturally accurate Urdu instructions aur audio cues generate karta hai.
4. Output ko direct compact thermal sticker format mein render kiya jata hai QR code ke sath, jo patient ke phone par audio guide chala deta hai.

---

##  The AI Core (Powered by Alibaba Cloud Qwen)
Sehat Awaaz sirf AI ka wrapper nahi hai; Generative AI is platform ka primary clinical intelligence engine hai:

* **Engine:** Alibaba Cloud Qwen LLM (`qwen/qwen3.8-27b` via Groq Cloud execution engine).
* **Clinical Parsing:** Complex medicine names (e.g., `Augmentin 1g`, `Panadol 500mg`, `Risek 20mg`) se clinical target aur standardized frequency nikaalna.
* **Urdu Script Synthesis:** Simple Roman prompts ko clear Nastaliq-standard Urdu text mein convert karna jo anparh ya kam parhay-likhay marizon ke liye bilkul wazeh ho.
* **Low-Latency Edge Architecture:**
  * **Static Fallback DB:** Common local Pakistani medicines ka offline dataset.
  * **Zero-Latency Cache:** Local browser storage caching jo repeat medicines ko $0\text{ ms}$ mein load karti hai.
  * **API Fallback:** Unlisted medicines ke liye sub-second cloud generation.

---

##  Architecture & Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Frontend Framework** | React.js (Vite) |
| **Styling & Design System** | Tailwind CSS |
| **AI / Model Inference** | Alibaba Cloud Qwen Model (`qwen3.8-27b`) via Groq API |
| **Label & QR Generation** | Dynamic SVG/Canvas QR Engine (Thermal Standard) |
| **Deployment & Hosting** | Vercel CI/CD |

---

##  Project Structure

```text
Sehat-Awaaz/
├── public/              # Favicon, local assets, thermal mockups
├── src/
│   ├── components/      # UI components (Navbar, Presets, StickerPreview)
│   ├── data/            # Static Pakistani medicine database
│   ├── services/        # AI orchestration & Groq Qwen integration
│   ├── App.jsx          # Main application dashboard
│   ├── index.css        # Tailwind core layers
│   └── main.jsx         # App entry point
├── .env.example         # Environment template for keys
├── package.json         # Scripts & project dependencies
└── vite.config.js       # Vite bundler configuration


