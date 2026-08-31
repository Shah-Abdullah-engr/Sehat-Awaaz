import { AI_DRUG_DATABASE } from '../data/medicinedatabase';

const GROQ_API_KEY = "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";

export const fetchMedicineFromAI = async (medicineName) => {
  const cleanKey = (medicineName || '').toLowerCase().trim();
  if (!cleanKey) return null;

  // 1. Local Database Check (0ms)
  if (AI_DRUG_DATABASE[cleanKey]) {
    console.log("📁 Loaded from Pre-set Database:", cleanKey);
    return AI_DRUG_DATABASE[cleanKey];
  }

  // 2. LocalStorage Cache Check (0ms)
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

  // 3. Groq API Call with Alibaba Qwen Model
  const prompt = `
    Act as a medical data formatting tool for Pakistan.
    The user entered: "${medicineName}".
    
    CRITICAL INSTRUCTION:
    Both "urduPrompt" and "phoneticPrompt" MUST clearly explain what the medicine is used for at the start, followed by how to take it.
    
    Respond strictly in valid JSON format matching this schema:
    {
      "dosage": "1 Tablet twice daily",
      "purpose": "General Medication",
      "urduPrompt": "یہ دوا بیماری کے لیے ہے۔ ہدایت کے مطابق استعمال کریں۔",
      "phoneticPrompt": "Yeh dawa beemari ke liye hai. Hidayat ke mutabiq lein.",
      "timing": {
        "morning": true,
        "noon": false,
        "night": true
      }
    }
  `;

  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${GROQ_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "qwen/qwen3.8-27b",
        messages: [
          {
            role: "user",
            content: prompt
          }
        ],
        temperature: 0.2
      })
    });

    if (!response.ok) {
      const errBody = await response.text();
      console.error("Groq Raw Error:", errBody);
      throw new Error(`Groq HTTP error! status: ${response.status}`);
    }

    const resData = await response.json();
    const rawContent = resData.choices[0].message.content;
    const cleanJson = rawContent.replace(/```json/gi, '').replace(/```/g, '').trim();
    const data = JSON.parse(cleanJson);

    localStorage.setItem(cacheKey, JSON.stringify(data));
    console.log(`✅ Success with Qwen AI for:`, cleanKey);
    return data;
  } catch (err) {
    console.warn("AI API call failed, using safe fallback...", err);
  }

  // 4. Safe Fallback
  return {
    dosage: "1 Application / Tablet as directed",
    purpose: "Skincare / General Medication",
    urduPrompt: "یہ دوا معالج کی تجویز کردہ بیماری کے لیے ہے۔ ہدایت کے مطابق استعمال کریں۔",
    phoneticPrompt: "Yeh dawa doctor ki tajweez karda beemari ke liye hai. Hidayat ke mutabiq lein.",
    timing: { morning: true, noon: false, night: true }
  };
};