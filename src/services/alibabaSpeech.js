// src/services/alibabaSpeech.js

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

let activeUtterance = null;

export function stopAudio() {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
}

export function playAlibabaTTS(urduText, onStart, onEnd) {
  if (!('speechSynthesis' in window)) {
    alert("Speech synthesis is not supported on this browser.");
    onEnd?.();
    return;
  }

  // 1. Force Reset Mobile Chrome Freeze
  window.speechSynthesis.cancel();
  window.speechSynthesis.resume();

  const cleanUrdu = (urduText || '').trim();
  const voices = window.speechSynthesis.getVoices();
  const subcontinentalVoice = voices.find(
    (v) =>
      v.lang.includes('ur') ||
      v.lang.includes('hi') ||
      v.name.includes('India') ||
      v.name.includes('Urdu') ||
      v.name.includes('Hindi')
  );

  const spokenText = subcontinentalVoice && subcontinentalVoice.lang.includes('ur')
    ? cleanUrdu
    : (PHONETIC_MAP[cleanUrdu] || cleanUrdu);

  // Store in outer reference to prevent Android Garbage Collection bug
  activeUtterance = new SpeechSynthesisUtterance(spokenText);
  activeUtterance.rate = 0.88;
  activeUtterance.pitch = 1.0;

  if (subcontinentalVoice) {
    activeUtterance.voice = subcontinentalVoice;
    activeUtterance.lang = subcontinentalVoice.lang;
  } else {
    activeUtterance.lang = 'hi-IN';
  }

  // 2. Failsafe Safety Timeout for Mobile Android Chrome
  let safetyTimeout = setTimeout(() => {
    onEnd?.();
  }, 9000);

  activeUtterance.onstart = () => {
    onStart?.();
  };

  activeUtterance.onend = () => {
    clearTimeout(safetyTimeout);
    onEnd?.();
  };

  activeUtterance.onerror = () => {
    clearTimeout(safetyTimeout);
    onEnd?.();
  };

  // 3. Trigger Play
  window.speechSynthesis.speak(activeUtterance);
}

export function startVoiceRecognition(onResult, onError) {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    onError?.("Not Supported");
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = "en-US";
  recognition.interimResults = false;

  recognition.onresult = (event) => onResult(event.results[0][0].transcript);
  recognition.onerror = (err) => onError?.(err);
  recognition.start();
}