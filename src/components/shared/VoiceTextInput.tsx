import React, { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, AlertCircle } from 'lucide-react';

interface VoiceTextInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
  multiline?: boolean;
  rows?: number;
  className?: string;
  required?: boolean;
  disabled?: boolean;
  id?: string;
  name?: string;
}

interface IWindow extends Window {
  SpeechRecognition?: any;
  webkitSpeechRecognition?: any;
}

export const VoiceTextInput: React.FC<VoiceTextInputProps> = ({
  value,
  onChange,
  placeholder = 'Digite ou clique no microfone para falar...',
  label,
  multiline = false,
  rows = 3,
  className = '',
  required = false,
  disabled = false,
  id,
  name,
}) => {
  const [isListening, setIsListening] = useState(false);
  const [isSupported, setIsSupported] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    const win = window as unknown as IWindow;
    const SpeechRecognition = win.SpeechRecognition || win.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setIsSupported(false);
    }
  }, []);

  const toggleListening = () => {
    if (disabled) return;
    setErrorMessage(null);

    const win = window as unknown as IWindow;
    const SpeechRecognition = win.SpeechRecognition || win.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setIsSupported(false);
      setErrorMessage('Reconhecimento de voz não suportado neste navegador.');
      setTimeout(() => setErrorMessage(null), 4000);
      return;
    }

    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
      return;
    }

    try {
      const recognition = new SpeechRecognition();
      recognition.lang = 'pt-BR';
      recognition.continuous = false;
      recognition.interimResults = false;

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        if (transcript) {
          const separator = value && value.trim().length > 0 ? ' ' : '';
          onChange(`${value}${separator}${transcript}`);
        }
      };

      recognition.onerror = (event: any) => {
        console.warn('SpeechRecognition error:', event.error);
        setIsListening(false);
        if (event.error === 'not-allowed') {
          setErrorMessage('Permissão de microfone negada.');
        } else {
          setErrorMessage('Não foi possível capturar o áudio. Tente novamente.');
        }
        setTimeout(() => setErrorMessage(null), 4000);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = recognition;
      recognition.start();
    } catch (err) {
      console.error('Falha ao iniciar SpeechRecognition:', err);
      setIsListening(false);
      setErrorMessage('Erro ao ativar microfone.');
      setTimeout(() => setErrorMessage(null), 4000);
    }
  };

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <div className="flex items-center justify-between mb-1.5">
          <label htmlFor={id} className="text-xs font-semibold text-gray-300 flex items-center gap-1">
            <span>{label}</span>
            {required && <span className="text-[#d4af37]">*</span>}
          </label>
          {isListening && (
            <span className="text-[10px] text-red-400 font-mono animate-pulse flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
              Ouvindo áudio...
            </span>
          )}
        </div>
      )}

      <div className="relative w-full">
        {multiline ? (
          <textarea
            id={id}
            name={name}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            rows={rows}
            required={required}
            disabled={disabled}
            className={`w-full bg-[#08090b] border ${
              isListening ? 'border-red-500 ring-2 ring-red-500/20' : 'border-[#d4af37]/30 focus:border-[#d4af37]'
            } rounded-xl px-3.5 py-2.5 pr-11 text-xs text-slate-100 placeholder-gray-500 outline-none transition-all disabled:opacity-50 resize-y`}
          />
        ) : (
          <input
            type="text"
            id={id}
            name={name}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            required={required}
            disabled={disabled}
            className={`w-full bg-[#08090b] border ${
              isListening ? 'border-red-500 ring-2 ring-red-500/20' : 'border-[#d4af37]/30 focus:border-[#d4af37]'
            } rounded-xl px-3.5 py-2.5 pr-11 text-xs text-slate-100 placeholder-gray-500 outline-none transition-all disabled:opacity-50`}
          />
        )}

        <button
          type="button"
          onClick={toggleListening}
          disabled={disabled}
          title={
            !isSupported
              ? 'Ditado por voz indisponível'
              : isListening
              ? 'Clique para parar gravação'
              : 'Clique e fale (ditado por voz)'
          }
          className={`absolute right-2.5 ${
            multiline ? 'top-2.5' : 'top-1/2 -translate-y-1/2'
          } p-1.5 rounded-lg transition-all cursor-pointer ${
            isListening
              ? 'bg-red-500 text-white animate-pulse shadow-lg shadow-red-500/50'
              : 'bg-[#14171e] text-[#d4af37] hover:bg-[#d4af37]/20 border border-[#d4af37]/40'
          } disabled:opacity-40 disabled:cursor-not-allowed`}
        >
          {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
        </button>
      </div>

      {errorMessage && (
        <div className="flex items-center gap-1.5 mt-1.5 text-[11px] text-red-400">
          <AlertCircle className="w-3 h-3 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}
    </div>
  );
};
