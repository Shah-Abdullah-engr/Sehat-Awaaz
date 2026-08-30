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

if (typeof window !== 'undefined') {
  window._activeUtterances = [];
}

export function stopAudio() {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    window._activeUtterances = [];
  }
}

export function playAlibabaTTS(text, onStart, onEnd) {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    onEnd?.();
    return;
  }

  // 1. Purani audio kill karein aur audio buffer saaf karein
  stopAudio();

  const cleanText = (text || '').trim();
  if (!cleanText) {
    onEnd?.();
    return;
  }

  // 2. Mobile Audio Engine Wakeup
  if (window.speechSynthesis.paused) {
    window.speechSynthesis.resume();
  }

  // 3. Mobile Chrome Fix: 80ms delay taake mobile audio engine buffer free kar le
  setTimeout(() => {
    try {
      const spokenText = PHONETIC_MAP[cleanText] || cleanText;
      const utterance = new SpeechSynthesisUtterance(spokenText);
      
      utterance.rate = 0.88;
      utterance.pitch = 1.0;
      utterance.lang = 'hi-IN';

      const voices = window.speechSynthesis.getVoices() || [];
      
      const bestFemaleVoice = voices.find(v => 
        v.name.includes('Google हिन्दी') || 
        v.name.includes('Swara') || 
        v.name.includes('Heera') || 
        v.name.includes('Gul')
      ) || voices.find(v => 
        (v.lang.includes('hi') || v.lang.includes('ur') || v.lang.includes('IN')) && 
        !v.name.toLowerCase().includes('male') && 
        !v.name.toLowerCase().includes('david') && 
        !v.name.toLowerCase().includes('mark')
      );

      if (bestFemaleVoice) {
        utterance.voice = bestFemaleVoice;
        utterance.lang = bestFemaleVoice.lang;
      }

      let finished = false;
      const cleanup = () => {
        if (!finished) {
          finished = true;
          window._activeUtterances = window._activeUtterances.filter(u => u !== utterance);
          onEnd?.();
        }
      };

      utterance.onstart = () => onStart?.();
      utterance.onend = () => cleanup();
      utterance.onerror = (e) => {
        if (e.error !== 'interrupted' && e.error !== 'canceled') {
          console.warn("TTS Error:", e.error);
        }
        cleanup();
      };

      // Memory reference lock
      window._activeUtterances.push(utterance);
      
      // Speak
      window.speechSynthesis.speak(utterance);

    } catch (err) {
      console.error("TTS Execution Error:", err);
      onEnd?.();
    }
  }, 80);
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