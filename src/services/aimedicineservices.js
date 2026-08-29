// src/services/aimedicineservices.js
import { GoogleGenerativeAI } from "@google/generative-ai";
import { AI_DRUG_DATABASE } from '../data/medicinedatabase';

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

export const fetchMedicineFromAI = async (medicineName) => {
  const cleanKey = (medicineName || '').toLowerCase().trim();
  if (!cleanKey) return null;

  // 1. Local Database Check
  if (AI_DRUG_DATABASE[cleanKey]) {
    console.log("📁 Loaded from Pre-set Database:", cleanKey);
    return AI_DRUG_DATABASE[cleanKey];
  }

  // 2. LocalStorage Cache Check
  const cacheKey = `sehat_med_${cleanKey}`;
  const cachedData = localStorage.getItem(cacheKey);
  if (cachedData) {
    try {
      console.log("⚡ Instant 0ms Load from LocalStorage Cache:", cleanKey);
      return JSON.parse(cachedData);
    } catch (e) {
      localStorage.removeItem(cacheKey);
    }
  }

  // 3. Supported Models
  const modelsToTry = [
    "gemini-2.5-flash",
    "gemini-3.6-flash",
    "gemini-flash-latest"
  ];

  const prompt = `
    Act as a medical data formatting tool for Pakistan.
    The user entered: "${medicineName}".
    
    CRITICAL INSTRUCTION:
    Both "urduPrompt" and "phoneticPrompt" MUST clearly explain what the medicine is used for (its purpose/disease) at the start, followed by how and when to take it.
    
    Example format:
    - Urdu: "یہ دوا درد اور بخار کے لیے ہے۔ صبح اور شام کھانا کھانے کے بعد لیں۔"
    - Roman Urdu: "Yeh dawa dard aur bukhaar ke liye hai. Subah aur shaam khaana khaane ke baad lein."

    Respond strictly in this JSON format ONLY. Do not wrap in markdown:
    {
      "dosage": "1 Tablet twice daily",
      "purpose": "Pain and Fever Relief",
      "urduPrompt": "یہ دوا درد اور بخار کے لیے ہے۔ صبح اور شام کھانا کھانے کے بعد لیں۔",
      "phoneticPrompt": "Yeh dawa dard aur bukhaar ke liye hai. Subah aur shaam khaana khaane ke baad lein.",
      "timing": {
        "morning": true,
        "noon": false,
        "night": true
      }
    }
  `;

  for (const modelName of modelsToTry) {
    try {
      const model = genAI.getGenerativeModel({ model: modelName });
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const rawText = response.text();
      
      const cleanJson = rawText.replace(/```json/gi, '').replace(/```/g, '').trim();
      const data = JSON.parse(cleanJson);

      localStorage.setItem(cacheKey, JSON.stringify(data));
      console.log(`✅ Success with [${modelName}] for:`, cleanKey);
      return data;
    } catch (err) {
      console.warn(`Model [${modelName}] failed, trying fallback model...`);
    }
  }

  // 4. Safe Fallback
  return {
    dosage: "1 Tablet twice daily",
    purpose: "General Medication",
    urduPrompt: "یہ دوا معالج کی تجویز کردہ بیماری کے لیے ہے۔ ہدایت کے مطابق استعمال کریں۔",
    phoneticPrompt: "Yeh dawa doctor ki tajweez karda beemari ke liye hai. Hidayat ke mutabiq istemal karein.",
    timing: { morning: true, noon: false, night: true }
  };
};