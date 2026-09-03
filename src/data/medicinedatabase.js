
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
  },

  "synflex": {
    dosage: "1 Tablet after meals",
    purpose: "Migraine and Severe Headache",
    urduPrompt: "یہ گولی آدھے سر کے درد یا شدید درد میں کھانا کھانے کے بعد لیں۔",
    phoneticPrompt: "Yeh goli aadhe sar ke dard ya shadeed dard mein khaana khaane ke baad lein.",
    timing: { morning: true, noon: false, night: true }
  },
  "serc": {
    dosage: "1 Tablet Twice Daily",
    purpose: "Vertigo and Dizziness",
    urduPrompt: "یہ گولی چکر آنے کی صورت میں دن میں دو بار پانی کے ساتھ لیں۔",
    phoneticPrompt: "Yeh goli chakkar aane ki soorat mein din mein do baar paani ke saath lein.",
    timing: { morning: true, noon: false, night: true }
  },
  "nuberol forte": {
    dosage: "1 Tablet Twice Daily",
    purpose: "Muscle Spasms and Tension Headache",
    urduPrompt: "یہ گولی پٹھوں کے کھنچاؤ اور درد کے لیے دن میں دو بار لیں۔",
    phoneticPrompt: "Yeh goli pathon ke khinchao aur dard ke liye din mein do baar lein.",
    timing: { morning: true, noon: false, night: true }
  },

  // ================= 2. AANKH, KAAN, NAAK, GALA (ENT & Eyes) =================
  "betnesol-n": {
    dosage: "1 to 2 Drops 3 times daily",
    purpose: "Eye/Ear Infection and Allergies",
    urduPrompt: "یہ قطرے آنکھ یا کان کے انفیکشن کے لیے دن میں تین بار ڈالیں۔",
    phoneticPrompt: "Yeh qatray aankh ya kaan ke infection ke liye din mein teen baar daalein.",
    timing: { morning: true, noon: true, night: true }
  },
  "xylin": {
    dosage: "1 to 2 Sprays per nostril",
    purpose: "Nasal Congestion",
    urduPrompt: "یہ سپرے بند ناک کھولنے کے لیے استعمال کریں۔",
    phoneticPrompt: "Yeh spray band naak kholne ke liye istemal karein.",
    timing: { morning: true, noon: true, night: true }
  },
  "strepsils": {
    dosage: "1 Lozenge every 3 hours",
    purpose: "Sore Throat",
    urduPrompt: "یہ گولی گلے کی خراش دور کرنے کے لیے منہ میں رکھ کر چوسیں۔",
    phoneticPrompt: "Yeh goli galay ki kharaash door karne ke liye munh mein rakh kar choosein.",
    timing: { morning: true, noon: true, night: true }
  },

 
  "ventolin": {
    dosage: "1 to 2 Puffs when needed",
    purpose: "Asthma and Shortness of Breath",
    urduPrompt: "یہ انہیلر سانس پھولنے یا دمے کی صورت میں استعمال کریں۔",
    phoneticPrompt: "Yeh inhaler saans phoolne ya damay ki soorat mein istemal karein.",
    timing: { morning: true, noon: true, night: true }
  },
  "sancos": {
    dosage: "2 Teaspoons 3 times a day",
    purpose: "Dry Cough",
    urduPrompt: "یہ شربت خشک کھانسی کے لیے دن میں تین بار دو دو چمچ پیئیں۔",
    phoneticPrompt: "Yeh syrup khushk khaansi ke liye din mein teen baar do do chamach piyein.",
    timing: { morning: true, noon: true, night: true }
  },

  // ================= 4. PAIT, MAIDA AUR DAST (Gastrointestinal) =================
  "buscopan plus": {
    dosage: "1 Tablet when needed",
    purpose: "Abdominal Cramps",
    urduPrompt: "یہ گولی پیٹ میں درد یا مروڑ ہونے کی صورت میں لیں۔",
    phoneticPrompt: "Yeh goli pet mein dard ya maror hone ki soorat mein lein.",
    timing: { morning: true, noon: true, night: true }
  },
  "imodium": {
    dosage: "1 to 2 Capsules after first loose motion",
    purpose: "Acute Diarrhea",
    urduPrompt: "یہ کیپسول موشن فوری طور پر روکنے کے لیے پانی کے ساتھ لیں۔",
    phoneticPrompt: "Yeh capsule motion fori taur par rokne ke liye paani ke saath lein.",
    timing: { morning: true, noon: true, night: true }
  },
  "motilium": {
    dosage: "1 Tablet before meals",
    purpose: "Nausea and Vomiting",
    urduPrompt: "یہ گولی الٹی، متلی اور بدہضمی کے لیے کھانا کھانے سے پہلے لیں۔",
    phoneticPrompt: "Yeh goli ulti, matli aur badhazmi ke liye khaana khaane se pehle lein.",
    timing: { morning: true, noon: true, night: true }
  },
  "ors nimkol": {
    dosage: "1 Sachet in 1 Litre water",
    purpose: "Dehydration",
    urduPrompt: "یہ ساشے ایک لیٹر پانی میں حل کر کے وقفے وقفے سے پیتے رہیں۔",
    phoneticPrompt: "Yeh sachet ek litre paani mein hal kar ke waqfay waqfay se peetay rahein.",
    timing: { morning: true, noon: true, night: true }
  },


  "fucidin": {
    dosage: "Apply twice a day",
    purpose: "Skin infections and Boils",
    urduPrompt: "یہ کریم زخم یا دانوں پر دن میں دو بار لگائیں۔",
    phoneticPrompt: "Yeh cream zakham ya daanon par din mein do baar lagayein.",
    timing: { morning: true, noon: false, night: true }
  },
  "canesten": {
    dosage: "Apply 2 times a day",
    purpose: "Fungal Infection and Itching",
    urduPrompt: "یہ کریم خارش اور فنگس والی جگہ پر دن میں دو بار لگائیں۔",
    phoneticPrompt: "Yeh cream khaarish aur fungus wali jagah par din mein do baar lagayein.",
    timing: { morning: true, noon: false, night: true }
  },
  "burnol": {
    dosage: "Apply immediately on burn",
    purpose: "Minor Burns",
    urduPrompt: "یہ کریم جلی ہوئی جگہ پر فوری طور پر ٹھنڈک اور انفیکشن سے بچاؤ کے لیے لگائیں۔",
    phoneticPrompt: "Yeh cream jali hui jagah par fori taur par thandak aur infection se bachaao ke liye lagayein.",
    timing: { morning: true, noon: true, night: true }
  },
  "rigix": {
    dosage: "1 Tablet at night",
    purpose: "Skin Allergy and Sneezing",
    urduPrompt: "یہ گولی الرجی اور چھینکوں کے لیے رات کو سونے سے پہلے لیں۔",
    phoneticPrompt: "Yeh goli allergy aur chheenkain ke liye raat ko sone se pehle lein.",
    timing: { morning: false, noon: false, night: true }
  },

  "dicloran": {
    dosage: "1 Tablet after meals",
    purpose: "Joint Pain and Swelling",
    urduPrompt: "یہ گولی جوڑوں اور ہڈیوں کے درد کے لیے کھانے کے بعد لیں۔",
    phoneticPrompt: "Yeh goli joron aur haddiyon ke dard ke liye khaane ke baad lein.",
    timing: { morning: true, noon: false, night: true }
  },
  "cac 1000 plus": {
    dosage: "1 Effervescent Tablet daily",
    purpose: "Calcium Deficiency",
    urduPrompt: "یہ گولی ایک گلاس پانی میں حل کر کے روزانہ پیئیں۔",
    phoneticPrompt: "Yeh goli ek glass paani mein hal kar ke rozana piyein.",
    timing: { morning: true, noon: false, night: false }
  },
  "sunny d": {
    dosage: "1 Capsule as directed",
    purpose: "Vitamin D Deficiency",
    urduPrompt: "یہ وٹامن ڈی دودھ میں ملا کر یا ڈاکٹر کی ہدایت کے مطابق لیں۔",
    phoneticPrompt: "Yeh vitamin D doodh mein mila kar ya doctor ki hidayat ke mutabiq lein.",
    timing: { morning: true, noon: false, night: false }
  },
  "neurobion": {
    dosage: "1 Tablet Daily",
    purpose: "Nerve Pain and Fatigue",
    urduPrompt: "یہ گولی اعصابی کمزوری اور پٹھوں کی طاقت کے لیے روزانہ ایک بار لیں۔",
    phoneticPrompt: "Yeh goli asaabi kamzori aur pathon ki taaqat ke liye rozana ek baar lein.",
    timing: { morning: true, noon: false, night: false }
  },


  "ponstan forte": {
    dosage: "1 Tablet Twice Daily",
    purpose: "Period Cramps",
    urduPrompt: "یہ گولی ماہواری کے درد اور تکلیف میں کھانے کے بعد لیں۔",
    phoneticPrompt: "Yeh goli mahwaari ke dard aur takleef mein khaane ke baad lein.",
    timing: { morning: true, noon: false, night: true }
  },
  "iberet folic": {
    dosage: "1 Tablet Daily",
    purpose: "Pregnancy Anemia",
    urduPrompt: "یہ خون بنانے والی گولی ہے، اسے روزانہ ایک بار پانی کے ساتھ لیں۔",
    phoneticPrompt: "Yeh khoon banane wali goli hai, isay rozana ek baar paani ke saath lein.",
    timing: { morning: true, noon: false, night: false }
  },
  "gravinate": {
    dosage: "1 Tablet When Needed",
    purpose: "Morning Sickness",
    urduPrompt: "یہ گولی الٹی اور متلی کو روکنے کے لیے استعمال کریں۔",
    phoneticPrompt: "Yeh goli ulti aur matli ko rokne ke liye istemal karein.",
    timing: { morning: true, noon: true, night: true }
  },

  "cranmax": {
    dosage: "1 to 2 Sachets Daily",
    purpose: "UTI and Burning Micturition",
    urduPrompt: "یہ ساشے ایک گلاس پانی میں حل کر کے پیئیں، پیشاب کی جلن کے لیے۔",
    phoneticPrompt: "Yeh sachet ek glass paani mein hal kar ke piyein, peshaab ki jalan ke liye.",
    timing: { morning: true, noon: false, night: true }
  },
  "novidat": {
    dosage: "1 Tablet Twice Daily",
    purpose: "Urinary Tract Infection",
    urduPrompt: "یہ اینٹی بائیوٹک گولی پیشاب کے انفیکشن کے لیے ڈاکٹر کی ہدایت کے مطابق لیں۔",
    phoneticPrompt: "Yeh antibiotic goli peshaab ke infection ke liye doctor ki hidayat ke mutabiq lein.",
    timing: { morning: true, noon: false, night: true }
  },
  "rowatinex": {
    dosage: "1 to 2 Capsules 3 times daily",
    purpose: "Kidney Stones",
    urduPrompt: "یہ کیپسول گردے کی پتھری کے درد میں کھانے سے پہلے لیں۔",
    phoneticPrompt: "Yeh capsule gurday ki pathri ke dard mein khaane se pehle lein.",
    timing: { morning: true, noon: true, night: true }
  },


  "somogel": {
    dosage: "Apply small quantity",
    purpose: "Mouth Ulcers",
    urduPrompt: "یہ جیل منہ کے چھالوں اور زخم پر دن میں تین سے چار بار لگائیں۔",
    phoneticPrompt: "Yeh gel munh ke chhalon aur zakham par din mein teen se chaar baar lagayein.",
    timing: { morning: true, noon: true, night: true }
  },
  "sensodyne": {
    dosage: "Brush twice daily",
    purpose: "Teeth Sensitivity",
    urduPrompt: "یہ ٹوتھ پیسٹ دانتوں کی حساسیت دور کرنے کے لیے روزانہ دو بار استعمال کریں۔",
    phoneticPrompt: "Yeh toothpaste daanton ki hasasiyat door karne ke liye rozana do baar istemal karein.",
    timing: { morning: true, noon: false, night: true }
  },


  "melatonin": {
    dosage: "1 Tablet 30 mins before bedtime",
    purpose: "Insomnia",
    urduPrompt: "یہ گولی رات کو سونے سے آدھا گھنٹہ پہلے لیں تاکہ نیند پرسکون آئے۔",
    phoneticPrompt: "Yeh goli raat ko sone se aadha ghanta pehle lein taake neend pursukoon aaye.",
    timing: { morning: false, noon: false, night: true }
  },
  "surbex z": {
    dosage: "1 Tablet Daily",
    purpose: "Physical Weakness and Stress",
    urduPrompt: "یہ وٹامن کی گولی جسمانی اور اعصابی تھکاوٹ دور کرنے کے لیے روزانہ ایک بار لیں۔",
    phoneticPrompt: "Yeh vitamin ki goli jismaani aur asaabi thakawat door karne ke liye rozana ek baar lein.",
    timing: { morning: true, noon: false, night: false }
  }
};