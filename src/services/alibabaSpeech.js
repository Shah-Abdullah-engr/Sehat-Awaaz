

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

let currentAudio = null;

export function stopAudio() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = null;
  }
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
}

export function playAlibabaTTS(text, onStart, onEnd) {

  stopAudio();

  const cleanText = (text || '').trim();
  if (!cleanText) {
    onEnd?.();
    return;
  }

  const spokenText = PHONETIC_MAP[cleanText] || cleanText;

  // 2. Solid Solution: HTML5 Audio Stream (Mobile par kabhi freeze nahi hota)
  const isUrduScript = /[\u0600-\u06FF]/.test(cleanText);
  const lang = isUrduScript ? 'ur' : 'hi';
  const audioUrl = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(spokenText)}&tl=${lang}&client=tw-ob`;

  try {
    currentAudio = new Audio(audioUrl);

    currentAudio.onplay = () => {
      onStart?.();
    };

    currentAudio.onended = () => {
      currentAudio = null;
      onEnd?.();
    };

    currentAudio.onerror = () => {
      currentAudio = null;
      playBrowserFallback(spokenText, onStart, onEnd);
    };

    // Mobile Audio Trigger
    const playPromise = currentAudio.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        playBrowserFallback(spokenText, onStart, onEnd);
      });
    }

  } catch (err) {
    playBrowserFallback(spokenText, onStart, onEnd);
  }
}

function playBrowserFallback(spokenText, onStart, onEnd) {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    onEnd?.();
    return;
  }

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(spokenText);
  utterance.lang = 'hi-IN';
  utterance.rate = 0.88;

  utterance.onstart = () => onStart?.();
  utterance.onend = () => onEnd?.();
  utterance.onerror = () => onEnd?.();

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