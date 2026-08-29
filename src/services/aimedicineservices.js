import { GoogleGenerativeAI } from "@google/generative-ai";
import { AI_DRUG_DATABASE } from '../data/medicinedatabase';

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

export const fetchMedicineFromAI = async (medicineName) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const prompt = `
      Act as a medical data formatting tool for Pakistan.
      The user entered: "${medicineName}".
      Provide standard dosage, purpose, simple Urdu instruction for display, and ROMAN URDU phonetic instruction for TTS speech.
      
      Respond strictly in this JSON format ONLY:
      {
        "dosage": "1 Tablet twice daily",
        "purpose": "Used for Fever and Pain relief",
        "urduPrompt": "یہ گولی صبح اور شام کھانا کھانے کے بعد لیں",
        "phoneticPrompt": "Yeh goli subah aur shaam khaana khaane ke baad lein",
        "timing": {
          "morning": true,
          "noon": false,
          "night": true
        }
      }
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const cleanText = response.text().replace(/```json/g, '').replace(/```/g, '').trim();
    return JSON.parse(cleanText);

  } catch (error) {
    console.warn("⚠️ Local fallback loading...");
    const key = medicineName.toLowerCase().trim();
    if (AI_DRUG_DATABASE[key]) {
      return AI_DRUG_DATABASE[key];
    }

    return {
      dosage: "1 Tablet twice daily",
      purpose: "General Medication",
      urduPrompt: "یہ دوا ڈاکٹر کی ہدایت کے مطابق استعمال کریں۔",
      phoneticPrompt: "Yeh dawa doctor ki hidayat ke mutabiq istemal karein.",
      timing: { morning: true, noon: false, night: true }
    };
  }
};