// src/data/medicinedatabase.js
export const AI_DRUG_DATABASE = {
  "panadol": {
    dosage: "1 to 2 Tablets every 6 hours",
    purpose: "Pain and Fever Relief",
    urduPrompt: "یہ دوا درد اور بخار کے لیے ہے۔ پانی کے ساتھ لیں اور دن میں چار بار سے زیادہ نہ لیں۔",
    phoneticPrompt: "Yeh dawa dard aur bukhaar ke liye hai. Paani ke saath lein aur din mein chaar baar se zyada na lein.",
    timing: { morning: true, noon: true, night: true }
  },
  "panadol 500mg": {
    dosage: "1 to 2 Tablets every 6 to 8 hours",
    purpose: "Pain and Fever Relief",
    urduPrompt: "یہ دوا درد اور بخار اتارنے کے لیے ہے۔ پانی کے ساتھ لیں۔",
    phoneticPrompt: "Yeh dawa dard aur bukhaar utaarne ke liye hai. Paani ke saath lein.",
    timing: { morning: true, noon: true, night: true }
  },
  "panadol extra": {
    dosage: "1 to 2 Tablets every 8 hours",
    purpose: "Severe Headache and Body Pain",
    urduPrompt: "یہ دوا شدید سر درد اور جسم کے درد کے لیے ہے۔ کھانا کھانے کے بعد لیں۔",
    phoneticPrompt: "Yeh dawa shadeed sar dard aur jism ke dard ke liye hai. Khaana khaane ke baad lein.",
    timing: { morning: true, noon: false, night: true }
  },
  "panadol cf": {
    dosage: "1 Tablet every 8 hours",
    purpose: "Cold, Flu and Congestion",
    urduPrompt: "یہ دوا نزلہ، زکام اور فلو کے لیے ہے۔ پانی کے ساتھ استعمال کریں۔",
    phoneticPrompt: "Yeh dawa nazla, zukaam aur flu ke liye hai. Paani ke saath istemal karein.",
    timing: { morning: true, noon: true, night: true }
  },
  "panadol syrup": {
    dosage: "1 to 2 teaspoons every 6 hours",
    purpose: "Fever and Teething Pain in Children",
    urduPrompt: "یہ شربت بچوں کے بخار اور درد کے لیے ہے۔ پانی کے ساتھ پلائیں۔",
    phoneticPrompt: "Yeh syrup bachon ke bukhaar aur dard ke liye hai. Paani ke saath pilaayein.",
    timing: { morning: true, noon: true, night: true }
  },
  "duphalac": {
    dosage: "15ml to 30ml daily",
    purpose: "Constipation Relief",
    urduPrompt: "یہ شربت قبض کشائی کے لیے ہے۔ روزانہ صبح ناشتے کے وقت یا رات کو لیں۔",
    phoneticPrompt: "Yeh syrup qabz kushaai ke liye hai. Rozana subah naashtay ke waqt ya raat ko lein.",
    timing: { morning: true, noon: false, night: false }
  },
  "duphalac syrup": {
    dosage: "1 to 2 tablespoons daily",
    purpose: "Constipation Relief",
    urduPrompt: "یہ شربت قبض کشائی کے لیے ہے۔ روزانہ صبح پانی کے ساتھ لیں۔",
    phoneticPrompt: "Yeh syrup qabz kushaai ke liye hai. Rozana subah paani ke saath lein.",
    timing: { morning: true, noon: false, night: false }
  },
  "gaviscon": {
    dosage: "10ml to 20ml after meals",
    purpose: "Heartburn and Acidity",
    urduPrompt: "یہ شربت سینے کی جلن اور تیزابیت کے لیے ہے۔ کھانا کھانے کے بعد لیں۔",
    phoneticPrompt: "Yeh syrup seenay ki jalan aur tezaabiyat ke liye hai. Khaana khaane ke baad lein.",
    timing: { morning: true, noon: true, night: true }
  },
  "gaviscon syrup": {
    dosage: "2 teaspoons after meals",
    purpose: "Heartburn and Acidity",
    urduPrompt: "یہ شربت سینے کی جلن اور معدے کی تیزابیت کے لیے ہے۔ کھانا کھانے کے بعد استعمال کریں۔",
    phoneticPrompt: "Yeh syrup seenay ki jalan aur maiday ki tezaabiyat ke liye hai. Khaana khaane ke baad istemal karein.",
    timing: { morning: true, noon: true, night: true }
  },
  "hydryllin": {
    dosage: "1 to 2 teaspoons every 8 hours",
    purpose: "Dry Cough and Throat Irritation",
    urduPrompt: "یہ کھانسی کا شربت خشک کھانسی کے لیے ہے۔ دن میں تین بار کھانے کے بعد لیں۔",
    phoneticPrompt: "Yeh khaansi ka syrup khushk khaansi ke liye hai. Din mein teen baar khaane ke baad lein.",
    timing: { morning: true, noon: true, night: true }
  },
  "hydryllin syrup": {
    dosage: "2 teaspoons three times daily",
    purpose: "Cough and Chest Congestion",
    urduPrompt: "یہ شربت کھانسی اور سینے کی جکڑن کے لیے ہے۔ کھانے کے بعد لیں۔",
    phoneticPrompt: "Yeh syrup khaansi aur seenay ki jakran ke liye hai. Khaane ke baad lein.",
    timing: { morning: true, noon: true, night: true }
  },
  "augmentin": {
    dosage: "1 Tablet twice daily",
    purpose: "Bacterial Infection",
    urduPrompt: "یہ اینٹی بائیوٹک دوا انفیکشن کے خاتمے کے لیے ہے۔ صبح اور شام کھانا کھانے کے بعد لیں۔",
    phoneticPrompt: "Yeh antibiotic dawa infection ke khaatmay ke liye hai. Subah aur shaam khaana khaane ke baad lein.",
    timing: { morning: true, noon: false, night: true }
  },
  "augmentin 1g": {
    dosage: "1 Tablet every 12 hours",
    purpose: "Bacterial Infection",
    urduPrompt: "یہ دوا شدید بیکٹیریل انفیکشن کے لیے ہے۔ صبح اور شام باقاعدگی سے لیں۔",
    phoneticPrompt: "Yeh dawa shadeed bacterial infection ke liye hai. Subah aur shaam baqaadgi se lein.",
    timing: { morning: true, noon: false, night: true }
  },
  "augmentin 625mg": {
    dosage: "1 Tablet twice daily",
    purpose: "Bacterial Infection",
    urduPrompt: "یہ اینٹی بائیوٹک دوا انفیکشن کے لیے ہے۔ کھانا کھانے کے دوران لیں۔",
    phoneticPrompt: "Yeh antibiotic dawa infection ke liye hai. Khaana khaane ke dauran lein.",
    timing: { morning: true, noon: false, night: true }
  },
  "risek": {
    dosage: "1 Capsule daily before breakfast",
    purpose: "Stomach Acidity and GERD",
    urduPrompt: "یہ دوا معدے کی تیزابیت کے لیے ہے۔ صبح ناشتے سے پہلے خالی پیٹ لیں۔",
    phoneticPrompt: "Yeh dawa maiday ki tezaabiyat ke liye hai. Subah naashtay se pehle khaali pet lein.",
    timing: { morning: true, noon: false, night: false }
  },
  "risek 20mg": {
    dosage: "1 Capsule daily before breakfast",
    purpose: "Stomach Acidity and Gas",
    urduPrompt: "یہ کیپسول معدے کے درد اور گیس کے لیے ہے۔ صبح نہار منہ لیں۔",
    phoneticPrompt: "Yeh capsule maiday ke dard aur gas ke liye hai. Subah nihaar munh lein.",
    timing: { morning: true, noon: false, night: false }
  },
  "brufen": {
    dosage: "1 Tablet every 8 hours after meals",
    purpose: "Pain and Inflammation",
    urduPrompt: "یہ دوا درد اور سوجن کے لیے ہے۔ کھانا کھانے کے بعد لیں۔",
    phoneticPrompt: "Yeh dawa dard aur sojan ke liye hai. Khaana khaane ke baad lein.",
    timing: { morning: true, noon: true, night: true }
  },
  "brufen 400mg": {
    dosage: "1 Tablet three times daily",
    purpose: "Body Ache and Pain",
    urduPrompt: "یہ دوا جسم کے درد کے لیے ہے۔ ہمیشہ کھانا کھانے کے بعد لیں۔",
    phoneticPrompt: "Yeh dawa jism ke dard ke liye hai. Hamesha khaana khaane ke baad lein.",
    timing: { morning: true, noon: true, night: true }
  },
  "ponstan": {
    dosage: "1 Tablet every 8 hours",
    purpose: "Pain Relief",
    urduPrompt: "یہ دوا تیز درد کے خاتمے کے لیے ہے۔ کھانا کھانے کے بعد لیں۔",
    phoneticPrompt: "Yeh dawa taiz dard ke khaatmay ke liye hai. Khaana khaane ke baad lein.",
    timing: { morning: true, noon: true, night: true }
  },
  "flagyl": {
    dosage: "1 Tablet every 8 hours",
    purpose: "Stomach Infection and Diarrhea",
    urduPrompt: "یہ دوا پیٹ کے انفیکشن اور موشن کے لیے ہے۔ کھانا کھانے کے بعد لیں۔",
    phoneticPrompt: "Yeh dawa pet ke infection aur motion ke liye hai. Khaana khaane ke baad lein.",
    timing: { morning: true, noon: true, night: true }
  },
  "arinac": {
    dosage: "1 Tablet every 12 hours",
    purpose: "Cold, Flu and Congestion",
    urduPrompt: "یہ دوا بند ناک، نزلہ اور بخار کے لیے ہے۔ صبح اور شام کھانا کھانے کے بعد لیں۔",
    phoneticPrompt: "Yeh dawa band naak, nazla aur bukhaar ke liye hai. Subah aur shaam khaana khaane ke baad lein.",
    timing: { morning: true, noon: false, night: true }
  },
  "concor": {
    dosage: "1 Tablet once daily",
    purpose: "Blood Pressure Control",
    urduPrompt: "یہ دوا بلڈ پریشر کنٹرول رکھنے کے لیے ہے۔ روزانہ صبح ناشتے کے بعد لیں۔",
    phoneticPrompt: "Yeh dawa blood pressure control rakhne ke liye hai. Rozana subah naashtay ke baad lein.",
    timing: { morning: true, noon: false, night: false }
  },
  "glucophage": {
    dosage: "1 Tablet twice daily",
    purpose: "Diabetes Blood Sugar Control",
    urduPrompt: "یہ دوا شوگر لیول کو کنٹرول رکھنے کے لیے ہے۔ کھانا کھانے کے بعد لیں۔",
    phoneticPrompt: "Yeh dawa sugar level ko control rakhne ke liye hai. Khaana khaane ke baad lein.",
    timing: { morning: true, noon: false, night: true }
  }
};