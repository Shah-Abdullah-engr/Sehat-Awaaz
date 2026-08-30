// src/data/medicinedatabase.js

export const AI_DRUG_DATABASE = {
  // ==========================================
  // 1. POPULAR SYRUPS & SUSPENSIONS (شربت)
  // ==========================================
  "duphalac": {
    dosage: "15ml to 30ml (1-2 tablespoons) daily",
    purpose: "Constipation Relief and Stool Softener",
    urduPrompt: "یہ شربت قبض کشائی اور پیٹ صاف کرنے کے لیے ہے۔ روزانہ صبح ناشتے کے وقت یا رات کو نیم گرم پانی کے ساتھ پیئیں۔",
    phoneticPrompt: "Yeh syrup qabz kushaai aur pet saaf karne ke liye hai. Rozana subah naashtay ke waqt ya raat ko neem garam paani ke saath peeyein.",
    timing: { morning: true, noon: false, night: false }
  },
  "duphalac syrup": {
    dosage: "1 to 2 tablespoons daily with water",
    purpose: "Constipation Relief and Bowel Regularity",
    urduPrompt: "یہ شربت قبض کے علاج کے لیے ہے۔ روزانہ صبح ایک یا دو چمچ پانی یا دودھ کے ساتھ پیئیں۔",
    phoneticPrompt: "Yeh syrup qabz ke ilaaj ke liye hai. Rozana subah ek ya do chamach paani ya doodh ke saath peeyein.",
    timing: { morning: true, noon: false, night: false }
  },

  "gaviscon": {
    dosage: "10ml to 20ml (2 to 4 teaspoons) after meals and bedtime",
    purpose: "Heartburn, Acid Reflux and Chest Burning",
    urduPrompt: "یہ شربت سینے کی جلن اور معدے کی تیزابیت کے لیے ہے۔ کھانا کھانے کے بعد اور رات سونے سے پہلے لیں۔",
    phoneticPrompt: "Yeh syrup seenay ki jalan aur maiday ki tezaabiyat ke liye hai. Khaana khaane ke baad aur raat sonay se pehle lein.",
    timing: { morning: true, noon: true, night: true }
  },
  "gaviscon syrup": {
    dosage: "2 teaspoons after meals and at bedtime",
    purpose: "Fast Relief from Acidity and Indigestion",
    urduPrompt: "یہ شربت معدے اور سینے کی جلن دور کرنے کے لیے ہے۔ کھانا کھانے کے بعد استعمال کریں۔",
    phoneticPrompt: "Yeh syrup maiday aur seenay ki jalan door karne ke liye hai. Khaana khaane ke baad istemal karein.",
    timing: { morning: true, noon: true, night: true }
  },

  "hydryllin": {
    dosage: "1 to 2 teaspoons every 6 to 8 hours",
    purpose: "Dry Cough, Chest Congestion and Allergy",
    urduPrompt: "یہ کھانسی کا شربت خشک کھانسی اور سینے کی جکڑن کے لیے ہے۔ دن میں تین بار کھانے کے بعد لیں۔",
    phoneticPrompt: "Yeh khaansi ka syrup khushk khaansi aur seenay ki jakran ke liye hai. Din mein teen baar khaane ke baad lein.",
    timing: { morning: true, noon: true, night: true }
  },
  "hydryllin syrup": {
    dosage: "2 teaspoons three times daily",
    purpose: "Cough and Respiratory Allergy Relief",
    urduPrompt: "یہ شربت کھانسی اور گلے کی خراش کے لیے ہے۔ دن میں تین بار استعمال کریں۔",
    phoneticPrompt: "Yeh syrup khaansi aur galay ki kharaash ke liye hai. Din mein teen baar istemal karein.",
    timing: { morning: true, noon: true, night: true }
  },

  "corex-d": {
    dosage: "1 to 2 teaspoons every 8 hours",
    purpose: "Dry Cough Suppression and Throat Irritation",
    urduPrompt: "یہ شربت خشک کھanسی کو روکنے کے لیے ہے۔ دن میں دو سے تین بار استعمال کریں، استعمال کے بعد غنودگی ہو سکتی ہے۔",
    phoneticPrompt: "Yeh syrup khushk khaansi ko roknay ke liye hai. Din mein do se teen baar istemal karein.",
    timing: { morning: true, noon: false, night: true }
  },
  "acefyl": {
    dosage: "1 to 2 teaspoons three times daily",
    purpose: "Productive Cough and Asthma Relief",
    urduPrompt: "یہ شربت بلغم والی کھانسی اور سانس کی نالی کھولنے کے لیے ہے۔ دن میں تین بار کھانے کے بعد لیں۔",
    phoneticPrompt: "Yeh syrup balgham wali khaansi aur saans ki naali kholnay ke liye hai. Din mein teen baar khaane ke baad lein.",
    timing: { morning: true, noon: true, night: true }
  },
  "pulmonol": {
    dosage: "2 teaspoons three times a day",
    purpose: "Sore Throat, Cold and Cough Relief",
    urduPrompt: "یہ شربت گلے کے درد، نزلہ اور کھانسی کے لیے ہے۔ دن میں تین بار نیم گرم پانی کے بعد لیں۔",
    phoneticPrompt: "Yeh syrup galay ke dard, nazla aur khaansi ke liye hai. Din mein teen baar neem garam paani ke baad lein.",
    timing: { morning: true, noon: true, night: true }
  },

  "gravinate": {
    dosage: "1 Tablet or 2 teaspoons syrup every 8 hours",
    purpose: "Nausea, Vomiting and Motion Sickness",
    urduPrompt: "یہ دوا متلی، الٹی اور چکر آنے کے علاج کے لیے ہے۔ سفر سے آدھا گھنٹہ پہلے یا کھانا کھانے سے پہلے لیں۔",
    phoneticPrompt: "Yeh dawa matli, ulti aur chakkar aane ke ilaaj ke liye hai. Safar se aadha ghanta pehle ya khaana khaane se pehle lein.",
    timing: { morning: true, noon: true, night: true }
  },
  "gravinate syrup": {
    dosage: "1 to 2 teaspoons before travel or meals",
    purpose: "Vomiting and Dizziness Prevention",
    urduPrompt: "یہ شربت الٹی اور چکر روکنے کے لیے ہے۔ ضرورت کے وقت کھانا کھانے سے پہلے پیئیں۔",
    phoneticPrompt: "Yeh syrup ulti aur chakkar roknay ke liye hai. Zaroorat ke waqt khaana khaane se pehle peeyein.",
    timing: { morning: true, noon: false, night: true }
  },

  "brufen syrup": {
    dosage: "1 to 2 teaspoons every 8 hours after meals",
    purpose: "Fever and Pain Relief for Children",
    urduPrompt: "یہ شربت بچوں کے بخار اور جسم کے درد کے لیے ہے۔ کھانا یا دودھ پلانے کے بعد دیں۔",
    phoneticPrompt: "Yeh syrup bachon ke bukhaar aur jism ke dard ke liye hai. Khaana ya doodh pilanay ke baad dein.",
    timing: { morning: true, noon: true, night: true }
  },
  "panadol syrup": {
    dosage: "1 to 2 teaspoons every 6 hours for fever",
    purpose: "Fever and Teething Pain in Children",
    urduPrompt: "یہ شربت بچوں کے بخار اور دانت نکلنے کے درد کے لیے ہے۔ پانی کے ساتھ پلائیں۔",
    phoneticPrompt: "Yeh syrup bachon ke bukhaar aur daant nikalnay ke dard ke liye hai. Paani ke saath pilaayein.",
    timing: { morning: true, noon: true, night: true }
  },

  // ==========================================
  // 2. PAIN & FEVER TABLETS (درد اور بخار)
  // ==========================================
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
  "brufen": {
    dosage: "1 Tablet every 8 hours after meals",
    purpose: "Pain, Swelling and Inflammation",
    urduPrompt: "یہ دوا جوڑوں اور پٹھوں کے درد کے لیے ہے۔ کھانا کھانے کے بعد دودھ یا پانی کے ساتھ لیں۔",
    phoneticPrompt: "Yeh dawa joron aur patthon ke dard ke liye hai. Khaana khaane ke baad doodh ya paani ke saath lein.",
    timing: { morning: true, noon: true, night: true }
  },
  "brufen 400mg": {
    dosage: "1 Tablet three times a day after meals",
    purpose: "Body Ache and Dental Pain",
    urduPrompt: "یہ دوا دانت اور جسم کے درد کے لیے ہے۔ ہمیشہ کھانا کھانے کے بعد لیں۔",
    phoneticPrompt: "Yeh dawa daant aur jism ke dard ke liye hai. Hamesha khaana khaane ke baad lein.",
    timing: { morning: true, noon: true, night: true }
  },
  "ponstan": {
    dosage: "1 Tablet every 8 hours as needed",
    purpose: "Pain and Cramp Relief",
    urduPrompt: "یہ دوا دانت، سر یا عضلاتی درد کے لیے ہے۔ کھانا کھانے کے فوراً بعد لیں۔",
    phoneticPrompt: "Yeh dawa daant, sar ya uzlaati dard ke liye hai. Khaana khaane ke foran baad lein.",
    timing: { morning: true, noon: true, night: true }
  },
  "ponstan 500mg": {
    dosage: "1 Tablet three times daily after food",
    purpose: "Moderate to Severe Pain Relief",
    urduPrompt: "یہ دوا تیز درد کے خاتمے کے لیے ہے۔ کھانا کھانے کے بعد پانی کے ساتھ لیں۔",
    phoneticPrompt: "Yeh dawa taiz dard ke khaatmay ke liye hai. Khaana khaane ke baad paani ke saath lein.",
    timing: { morning: true, noon: true, night: true }
  },
  "disprin": {
    dosage: "1 to 2 Tablets dissolved in half glass of water",
    purpose: "Fast Headache and Pain Relief",
    urduPrompt: "یہ دوا سر درد اور خون کو پتلا رکھنے کے لیے ہے۔ آدھے گلاس پانی میں گھول کر پیئیں۔",
    phoneticPrompt: "Yeh dawa sar dard aur khoon ko patla rakhne ke liye hai. Aadhe glass paani mein ghol kar peeyein.",
    timing: { morning: true, noon: false, night: true }
  },
  "synflex": {
    dosage: "1 Tablet twice daily after meals",
    purpose: "Severe Joint Pain, Migraine and Swelling",
    urduPrompt: "یہ دوا جوڑوں کے درد اور آدھے سر کے درد کے لیے ہے۔ کھانا کھانے کے بعد لیں۔",
    phoneticPrompt: "Yeh dawa joron ke dard aur aadhe sar ke dard ke liye hai. Khaana khaane ke baad lein.",
    timing: { morning: true, noon: false, night: true }
  },

  // ==========================================
  // 3. STOMACH, GAS & ACIDITY (معدہ اور تیزابیت)
  // ==========================================
  "risek": {
    dosage: "1 Capsule daily before breakfast",
    purpose: "Stomach Acidity and GERD",
    urduPrompt: "یہ دوا معدے کی تیزابیت اور جلن کے لیے ہے۔ صبح ناشتے سے آدھا گھنٹہ پہلے خالی پیٹ لیں۔",
    phoneticPrompt: "Yeh dawa maiday ki tezaabiyat aur jalan ke liye hai. Subah naashtay se aadha ghanta pehle khaali pet lein.",
    timing: { morning: true, noon: false, night: false }
  },
  "risek 20mg": {
    dosage: "1 Capsule daily before breakfast",
    purpose: "Stomach Acidity and Ulcer Protection",
    urduPrompt: "یہ کیپسول معدے کے درد اور گیس کے لیے ہے۔ صبح نہار منہ ایک گلاس پانی کے ساتھ لیں۔",
    phoneticPrompt: "Yeh capsule maiday ke dard aur gas ke liye hai. Subah nihaar munh ek glass paani ke saath lein.",
    timing: { morning: true, noon: false, night: false }
  },
  "risek 40mg": {
    dosage: "1 Capsule daily in the morning",
    purpose: "Severe Acidity and Gastric Ulcer",
    urduPrompt: "یہ دوا معدے کے السر اور تیزابیت کے لیے ہے۔ صبح خالی پیٹ پانی کے ساتھ استعمال کریں۔",
    phoneticPrompt: "Yeh dawa maiday ke ulcer aur tezaabiyat ke liye hai. Subah khaali pet paani ke saath istemal karein.",
    timing: { morning: true, noon: false, night: false }
  },
  "no-spa": {
    dosage: "1 to 2 Tablets up to three times daily",
    purpose: "Stomach Cramps and Abdominal Spasms",
    urduPrompt: "یہ دوا پیٹ کے مروڑ اور درد کے لیے ہے۔ جب بھی پیٹ میں درد ہو کھانا کھانے کے بعد لیں۔",
    phoneticPrompt: "Yeh dawa pet ke maror aur dard ke liye hai. Jab bhi pet mein dard ho khaana khaane ke baad lein.",
    timing: { morning: true, noon: true, night: true }
  },
  "motilium": {
    dosage: "1 Tablet three times daily before meals",
    purpose: "Bloating, Nausea and Indigestion",
    urduPrompt: "یہ دوا پیٹ پھولنے، گیس اور بھاری پن کے لیے ہے۔ کھانا کھانے سے پندرہ منٹ پہلے لیں۔",
    phoneticPrompt: "Yeh dawa pet phoolnay, gas aur bhaari pan ke liye hai. Khaana khaane se pandrah minute pehle lein.",
    timing: { morning: true, noon: true, night: true }
  },

  // ==========================================
  // 4. ANTIBIOTICS & INFECTIONS (اینٹی بائیوٹک)
  // ==========================================
  "augmentin": {
    dosage: "1 Tablet every 12 hours (Twice Daily)",
    purpose: "Bacterial Infection Treatment",
    urduPrompt: "یہ اینٹی بائیوٹک دوا انفیکشن کے خاتمے کے لیے ہے۔ صبح اور شام کھانا کھانے کے دوران لیں اور کورس پورا کریں۔",
    phoneticPrompt: "Yeh antibiotic dawa infection ke khaatmay ke liye hai. Subah aur shaam khaana khaane ke dauran lein aur course poora karein.",
    timing: { morning: true, noon: false, night: true }
  },
  "augmentin 625mg": {
    dosage: "1 Tablet twice daily with meals for 5-7 days",
    purpose: "Bacterial Infection Treatment",
    urduPrompt: "یہ دوا گلے اور سینے کے انفیکشن کے لیے ہے۔ صبح اور شام کھانا کھانے کے دوران لیں۔",
    phoneticPrompt: "Yeh dawa galay aur seenay ke infection ke liye hai. Subah aur shaam khaana khaane ke dauran lein.",
    timing: { morning: true, noon: false, night: true }
  },
  "augmentin 1g": {
    dosage: "1 Tablet every 12 hours for 7 days",
    purpose: "Severe Bacterial Infection",
    urduPrompt: "یہ دوا شدید بیکٹیریل انفیکشن کے علاج کے لیے ہے۔ صبح اور شام باقاعدگی سے لیں۔",
    phoneticPrompt: "Yeh dawa shadeed bacterial infection ke ilaaj ke liye hai. Subah aur shaam baqaadgi se lein.",
    timing: { morning: true, noon: false, night: true }
  },
  "azomax": {
    dosage: "1 Capsule daily for 3 to 5 days",
    purpose: "Chest and Throat Infection",
    urduPrompt: "یہ اینٹی بائیوٹک دوا گلے اور سانس کے انفیکشن کے لیے ہے۔ روزانہ ایک بار کھانا کھانے سے پہلے یا بعد میں لیں۔",
    phoneticPrompt: "Yeh antibiotic dawa galay aur saans ke infection ke liye hai. Rozana ek baar khaana khaane se pehle ya baad mein lein.",
    timing: { morning: true, noon: false, night: false }
  },
  "flagyl": {
    dosage: "1 Tablet every 8 hours for 5 days",
    purpose: "Stomach Infection and Loose Motions",
    urduPrompt: "یہ اینٹی بائیوٹک دوا پیٹ کے انفیکشن اور موشن کے لیے ہے۔ کھانا کھانے کے بعد لیں۔",
    phoneticPrompt: "Yeh antibiotic dawa pet ke infection aur motion ke liye hai. Khaana khaane ke baad lein.",
    timing: { morning: true, noon: true, night: true }
  },
  "flagyl 400mg": {
    dosage: "1 Tablet three times daily with food",
    purpose: "Intestinal Bacterial & Parasitic Infection",
    urduPrompt: "یہ دوا پیٹ کی خرابی اور مروڑ کے لیے ہے۔ باقاعدگی سے کھانا کھانے کے بعد لیں۔",
    phoneticPrompt: "Yeh dawa pet ki kharaabi aur maror ke liye hai. Baqaadgi se khaana khaane ke baad lein.",
    timing: { morning: true, noon: true, night: true }
  },
  "entamizole": {
    dosage: "1 Tablet every 8 to 12 hours after meals",
    purpose: "Dysentery and Severe Stomach Infection",
    urduPrompt: "یہ دوا دست اور پیٹ کے شدید انفیکشن کے لیے ہے۔ کھانا کھانے کے بعد پانی کے ساتھ لیں۔",
    phoneticPrompt: "Yeh dawa dast aur pet ke shadeed infection ke liye hai. Khaana khaane ke baad paani ke saath lein.",
    timing: { morning: true, noon: true, night: true }
  },

  // ==========================================
  // 5. BLOOD PRESSURE, HEART & DIABETES (بلڈ پریشر اور شوگر)
  // ==========================================
  "concor": {
    dosage: "1 Tablet once daily in the morning",
    purpose: "High Blood Pressure and Heart Rate Control",
    urduPrompt: "یہ دوا ہائی بلڈ پریشر اور دل کی دھڑکن کنٹرول رکھنے کے لیے ہے۔ روزانہ صبح ایک ہی وقت پر ناشتے کے بعد لیں۔",
    phoneticPrompt: "Yeh dawa high blood pressure aur dil ki dharkan control rakhne ke liye hai. Rozana subah ek hi waqt par naashtay ke baad lein.",
    timing: { morning: true, noon: false, night: false }
  },
  "glucophage": {
    dosage: "1 Tablet twice daily with or after meals",
    purpose: "Type 2 Diabetes Blood Sugar Control",
    urduPrompt: "یہ دوا شوگر لیول کو کنٹرول رکھنے کے لیے ہے۔ صبح اور شام کھانا کھانے کے فوراً بعد لیں۔",
    phoneticPrompt: "Yeh dawa sugar level ko control rakhne ke liye hai. Subah aur shaam khaana khaane ke foran baad lein.",
    timing: { morning: true, noon: false, night: true }
  },
  "glucophage 500mg": {
    dosage: "1 Tablet twice daily with meals",
    purpose: "Diabetes Blood Glucose Regulation",
    urduPrompt: "یہ دوا خون میں شوگر کی مقدار نارمل رکھنے کے لیے ہے۔ کھانا کھانے کے ساتھ استعمال کریں۔",
    phoneticPrompt: "Yeh dawa khoon mein sugar ki miqdaar normal rakhne ke liye hai. Khaana khaane ke saath istemal karein.",
    timing: { morning: true, noon: false, night: true }
  },
  "loprin": {
    dosage: "1 Tablet daily after the main meal",
    purpose: "Blood Thinner for Heart Attack and Stroke Prevention",
    urduPrompt: "یہ دوا خون کو پتلا رکھنے اور دل کی حفاظت کے لیے ہے۔ روزانہ دوپہر کے کھانے کے بعد پانی کے ساتھ لیں۔",
    phoneticPrompt: "Yeh dawa khoon ko patla rakhne aur dil ki hifazat ke liye hai. Rozana dopehar ke khaane ke baad paani ke saath lein.",
    timing: { morning: false, noon: true, night: false }
  },
  "lipiget": {
    dosage: "1 Tablet once daily at night",
    purpose: "High Cholesterol and Heart Health",
    urduPrompt: "یہ دوا کولیسٹرول کو کم کرنے اور شریانوں کی حفاظت کے لیے ہے۔ روزانہ رات کو سونے سے پہلے لیں۔",
    phoneticPrompt: "Yeh dawa cholesterol ko kam karne aur sharyano ki hifazat ke liye hai. Rozana raat ko sonay se pehle lein.",
    timing: { morning: false, noon: false, night: true }
  },

  // ==========================================
  // 6. ALLERGY, COLD & SUPPLEMENTS
  // ==========================================
  "arinac": {
    dosage: "1 Tablet every 12 hours after food",
    purpose: "Severe Cold, Blocked Nose and Fever",
    urduPrompt: "یہ دوا بند ناک، نزلہ اور بخار کے لیے ہے۔ صبح اور شام کھانا کھانے کے بعد لیں۔",
    phoneticPrompt: "Yeh dawa band naak, nazla aur bukhaar ke liye hai. Subah aur shaam khaana khaane ke baad lein.",
    timing: { morning: true, noon: false, night: true }
  },
  "rigix": {
    dosage: "1 Tablet once daily at night",
    purpose: "Allergy, Sneezing and Skin Itching",
    urduPrompt: "یہ دوا ہر قسم کی الرجی، چھینکوں اور خارش کے لیے ہے۔ رات کو سونے سے پہلے لیں۔",
    phoneticPrompt: "Yeh dawa har qisam ki allergy, chheenko aur khaarish ke liye hai. Raat ko sonay se pehle lein.",
    timing: { morning: false, noon: false, night: true }
  },
  "softin": {
    dosage: "1 Tablet once daily",
    purpose: "Allergy and Runny Nose",
    urduPrompt: "یہ دوا الرجی اور ناک بہنے کے لیے ہے۔ دن میں ایک بار پانی کے ساتھ استعمال کریں۔",
    phoneticPrompt: "Yeh dawa allergy aur naak behnay ke liye hai. Din mein ek baar paani ke saath istemal karein.",
    timing: { morning: true, noon: false, night: false }
  },
  "surbex z": {
    dosage: "1 Tablet daily after lunch or breakfast",
    purpose: "Daily Multivitamin and Zinc Supplement",
    urduPrompt: "یہ وٹامنز اور زنک کی دوا جسمانی کمزوری دور کرنے کے لیے ہے۔ روزانہ دوپہر کے کھانے کے بعد لیں۔",
    phoneticPrompt: "Yeh vitamins aur zinc ki dawa jismani kamzori door karne ke liye hai. Rozana dopehar ke khaane ke baad lein.",
    timing: { morning: false, noon: true, night: false }
  },
  "cac 1000": {
    dosage: "1 Effervescent tablet dissolved in a glass of water daily",
    purpose: "Calcium and Vitamin C Booster",
    urduPrompt: "یہ کیلشیم اور وٹامن سی کی دوا ہڈیوں کی مضبوطی کے لیے ہے۔ ایک گلاس پانی میں حل کر کے پیئیں۔",
    phoneticPrompt: "Yeh calcium aur vitamin C ki dawa haddiyon ki mazbooti ke liye hai. Ek glass paani mein hal kar ke peeyein.",
    timing: { morning: true, noon: false, night: false }
  }
};