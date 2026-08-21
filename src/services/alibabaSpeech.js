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

export function stopAudio() {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    window._currentUtterance = null;
  }
}

export function playAlibabaTTS(urduText, onStart, onEnd) {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    alert("Speech synthesis is not supported on this browser.");
    onEnd?.();
    return;
  }

  // 1. Complete reset of previous state
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

  // 2. Global attachment prevents Android garbage collection freeze
  window._currentUtterance = utterance;

  let hasEnded = false;
  const finishCallback = () => {
    if (!hasEnded) {
      hasEnded = true;
      window._currentUtterance = null;
      onEnd?.();
    }
  };

  utterance.onstart = () => {
    onStart?.();
  };

  utterance.onend = finishCallback;
  utterance.onerror = finishCallback;

  // 3. Fallback timer if mobile drops end event
  setTimeout(finishCallback, 7000);

  // 4. Critical mobile fix: 60ms delay after cancel before speaking
  setTimeout(() => {
    try {
      window.speechSynthesis.resume();
      window.speechSynthesis.speak(utterance);
    } catch (err) {
      console.error("Speech trigger error:", err);
      finishCallback();
    }
  }, 60);
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