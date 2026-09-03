# 🩺 Sehat Awaaz (صحت آواز) — AI Clinical Labeler & Audio Prescription Engine

> **Built for Alibaba Cloud AI Hackathon Pakistan 2026**  
> *Bridging healthcare literacy gaps across Pakistan through Generative AI, native Urdu phonetics, and automated thermal dispensary labeling.*

---

##  Problem Statement: The Healthcare Literacy Crisis in Pakistan
In Pakistan, millions of prescriptions are dispensed daily across basic health units, public hospitals, and private clinics. However, over 40% of the population faces functional literacy challenges, and medical instructions remain almost exclusively written in complex English abbreviations (e.g., *BD*, *TDS*, *PRN*). 

This language barrier creates severe real-world hazards:
* **Medication Non-Compliance & Errors:** Patients frequently take incorrect dosages, mix up formulations, or miss critical schedules due to an inability to decipher English instructions.
* **Overburdened Clinical Staff:** High patient-to-doctor ratios leave healthcare professionals with seconds per consultation, making comprehensive verbal counseling difficult to maintain.
* **Lack of Accessible Guidance:** Without localized, spoken guidance, illiterate and elderly patients must rely on third-party interpretation, compromising patient privacy and treatment efficacy.

---

##  The Solution
**Sehat Awaaz** transforms standard pharmacy dispensing into an automated, accessible workflow designed specifically for Pakistan's clinical environment:
1. **Input & Search:** Dispensers or clinicians search or select prescribed medication.
2. **Clinical Parsing:** The AI evaluates generic compounds, extracting target indications, standardized timing, and safety precautions.
3. **Urdu Synthesis:** The platform automatically constructs culturally contextual, easy-to-understand Urdu instructions alongside spoken phonetic cues.
4. **Thermal Label Generation:** The output formats directly into a compact thermal adhesive label featuring an integrated QR code. Scanning the QR code plays the audio dosage guidance directly on the patient's mobile phone without requiring app installation.

---

##  Core AI Architecture (Powered by Alibaba Cloud Qwen)
Sehat Awaaz leverages Generative AI as the underlying clinical reasoning engine rather than a static wrapper:

* **Inference Model:** Alibaba Cloud Qwen LLM (`qwen/qwen3.8-27b`) deployed through high-speed Groq Cloud execution.
* **Clinical Knowledge Deduction:** Automatically interprets regional brand names popular in Pakistan (e.g., *Augmentin*, *Panadol*, *Risek*, *Brufen*) and extracts clinical indications and administration guidelines.
* **Contextual Urdu Translation:** Converts complex clinical guidelines into natural, conversational Urdu designed for maximum comprehension.
* **Zero-Latency Edge Optimization:**
  * **Local Formulations DB:** Built-in offline database for frequently prescribed national medicines.
  * **Client-Side Cache:** $0\text{ ms}$ retrieval via browser caching for repeated searches.
  * **Cloud Fallback:** High-speed cloud generation for unlisted brand queries.

---

##  Architecture & Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Frontend Framework** | React.js (Vite) |
| **Styling System** | Tailwind CSS |
| **AI Inference** | Alibaba Cloud Qwen (`qwen3.8-27b`) via Groq Cloud API |
| **Label & QR Engine** | Dynamic SVG/Canvas Thermal Label Engine |
| **Hosting & CI/CD** | Vercel Edge Network |

---

##  Project Structure

```text
Sehat-Awaaz/
├── public/              # Icons, thermal label templates, and assets
├── src/
│   ├── components/      # UI components (Navbar, PresetsPanel, StickerPreview)
│   ├── data/            # Localized Pakistani medicine directory
│   ├── services/        # AI orchestration and model inference pipelines
│   ├── App.jsx          # Primary clinical workspace
│   ├── index.css        # Tailwind style configurations
│   └── main.jsx         # React application entry point
├── .env.example         # Environment template for keys
├── package.json         # Project metadata and dependencies
└── vite.config.js       # Vite build tooling

 Live Application
Live Demo:https://sehat-awaaz.vercel.app/

 Developer
Lead Developer: Shah Abdullah

Event: Alibaba Cloud AI Hackathon Pakistan 2026