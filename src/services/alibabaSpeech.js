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

// Global array keeps speech objects in memory so Android doesn't destroy them
window._activeUtterances = [];

export function stopAudio() {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    window._activeUtterances = [];
  }
}

export function playAlibabaTTS(urduText, onStart, onEnd) {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    alert("Speech synthesis is not supported on this browser.");
    onEnd?.();
    return;
  }

  // 1. Instant Synchronous Reset
  window.speechSynthesis.cancel();
  window.speechSynthesis.resume();

  const cleanUrdu = (urduText || '').trim();
  const voices = window.speechSynthesis.getVoices() || [];
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

  const utterance = new SpeechSynthesisUtterance(spokenText);
  utterance.rate = 0.88;
  utterance.pitch = 1.0;

  if (subcontinentalVoice) {
    utterance.voice = subcontinentalVoice;
    utterance.lang = subcontinentalVoice.lang;
  } else {
    utterance.lang = 'hi-IN';
  }

  // Prevent Mobile Chrome Garbage Collection
  window._activeUtterances.push(utterance);

  let finished = false;
  const cleanup = () => {
    if (!finished) {
      finished = true;
      window._activeUtterances = window._activeUtterances.filter(u => u !== utterance);
      onEnd?.();
    }
  };

  utterance.onstart = () => {
    onStart?.();
  };

  utterance.onend = () => {
    cleanup();
  };

  utterance.onerror = () => {
    cleanup();
  };

  // 2. Android Watchdog (Keeps background engine active)
  const watchdog = setInterval(() => {
    if (!window.speechSynthesis.speaking) {
      clearInterval(watchdog);
      cleanup();
    } else {
      window.speechSynthesis.resume();
    }
  }, 400);

  // Safety cutoff
  setTimeout(() => {
    clearInterval(watchdog);
    cleanup();
  }, 8000);

  // 3. SYNCHRONOUS TRIGGER (Required for Mobile gesture authorization)
  window.speechSynthesis.speak(utterance);
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