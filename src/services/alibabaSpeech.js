// src/services/alibabaSpeech.js

// Roman Urdu mapping taake accent bilkul natural aur saaf aye
const PHONETIC_MAP = {
  "یہ گولی صبح اور شام کھانا کھانے کے بعد لیں، کورس پورا کریں":
    "Yeh goli subah aur shaam khaana khaane ke baad lein. Course poora karein.",
  "یہ گولی درد یا بخار ہونے پر پانی کے ساتھ لیں":
    "Yeh goli dard ya bukhaar hone par paani ke saath lein.",
  "یہ کیپسول صبح ناشتے سے آدھا گھنٹہ پہلے خالی پیٹ لیں":
    "Yeh capsule subah naashte se aadha ghanta pehle khaali pet paani ke saath lein.",
  "یہ گولی درد یا بخار ہونے پر پانی کے ساتھ لیں، دن میں تین بار سے زیادہ نہ لیں":
    "Yeh goli dard ya bukhaar hone par paani ke saath lein. Din mein teen baar se zyada na lein.",
  "یہ کیپسول صبح ناشتے سے آدھا گھنٹہ پہلے خالی پیٹ پانی کے ساتھ لیں":
    "Yeh capsule subah naashte se aadha ghanta pehle khaali pet paani ke saath lein."
};

let cachedVoices = [];

// Chrome voice engine initialization
function getAvailableVoices() {
  if (cachedVoices.length > 0) return cachedVoices;
  cachedVoices = window.speechSynthesis ? window.speechSynthesis.getVoices() : [];
  return cachedVoices;
}

if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = () => {
    cachedVoices = window.speechSynthesis.getVoices();
  };
}

export function playAlibabaTTS(urduText, onStart, onEnd) {
  if (!('speechSynthesis' in window)) {
    alert("Speech Synthesis browser mein support nahi hai.");
    onEnd?.();
    return;
  }

  // 1. Chrome freeze fix
  window.speechSynthesis.cancel();
  window.speechSynthesis.resume();

  // 2. Select authentic accent voice (Urdu / Hindi / Indian English)
  const voices = getAvailableVoices();
  const subcontinentalVoice = voices.find(
    (v) =>
      v.lang.includes('ur') ||
      v.lang.includes('hi') ||
      v.name.includes('India') ||
      v.name.includes('Urdu') ||
      v.name.includes('Hindi')
  );

  // 3. Prepare phonetic text
  const cleanUrdu = urduText.trim();
  const spokenText = subcontinentalVoice && subcontinentalVoice.lang.includes('ur')
    ? cleanUrdu
    : (PHONETIC_MAP[cleanUrdu] || cleanUrdu);

  const utterance = new SpeechSynthesisUtterance(spokenText);
  utterance.rate = 0.88; // Natural speaking tempo
  utterance.pitch = 1.0;

  if (subcontinentalVoice) {
    utterance.voice = subcontinentalVoice;
    utterance.lang = subcontinentalVoice.lang;
  } else {
    utterance.lang = 'hi-IN'; // Fallback to South Asian phonetic engine
  }

  // 4. Lifecycle Listeners
  utterance.onstart = () => {
    onStart?.();
  };

  utterance.onend = () => {
    onEnd?.();
  };

  utterance.onerror = (e) => {
    console.error("TTS Playback Error:", e);
    onEnd?.();
  };

  // 5. Play Audio
  window.speechSynthesis.speak(utterance);
}

export function startVoiceRecognition(onResult, onError) {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    alert("Google Chrome use karein microphone voice input ke liye.");
    onError?.("Not Supported");
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = "en-US";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    onResult(transcript);
  };

  recognition.onerror = (err) => {
    console.error("Mic Error:", err);
    onError?.(err);
  };

  recognition.start();
}