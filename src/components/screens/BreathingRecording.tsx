import { Mic, ArrowLeft } from 'lucide-react';
import { useState, useEffect } from 'react';

interface BreathingRecordingProps {
  onNext: () => void;
  onBack: () => void;
}

export default function BreathingRecording({ onNext, onBack }: BreathingRecordingProps) {
  const [isRecording, setIsRecording] = useState(false);
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    if (isRecording && timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            setIsRecording(false);
            setTimeout(onNext, 500);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isRecording, timer, onNext]);

  const handleToggleRecording = () => {
    if (!isRecording) {
      setIsRecording(true);
      setTimer(30);
    } else {
      setIsRecording(false);
      setTimer(30);
    }
  };

  return (
    <div className="w-full h-full flex flex-col">
      {/* Header */}
      <div className="h-14 px-4 flex items-center">
        <button onClick={onBack}>
          <ArrowLeft className="w-6 h-6 text-[#111827]" />
        </button>
        <div className="flex-1 text-center text-[#111827]">Record Breathing</div>
        <div className="w-6" />
      </div>
      
      {/* Center content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4">
        {/* Microphone icon */}
        <div className={`w-16 h-16 rounded-full ${isRecording ? 'bg-[#EF4444]' : 'bg-[#E5E7EB]'} flex items-center justify-center transition-colors`}>
          <Mic className={`w-8 h-8 ${isRecording ? 'text-white' : 'text-[#6B7280]'}`} />
        </div>
        
        {/* Waveform placeholder */}
        <div className="mt-8 w-[300px] h-[60px] bg-[#E5E7EB] rounded-lg relative overflow-hidden">
          {isRecording && (
            <div className="absolute inset-0 flex items-center justify-center gap-1">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="w-1 bg-[#2563EB] rounded-full animate-pulse"
                  style={{
                    height: `${Math.random() * 80 + 20}%`,
                    animationDelay: `${i * 0.1}s`,
                  }}
                />
              ))}
            </div>
          )}
        </div>
        
        {/* Instruction text */}
        <p className="mt-6 text-center text-[#6B7280] max-w-[280px]">
          Breathe normally for 30 seconds
        </p>
        
        {/* Timer text */}
        <div className="mt-2 text-[#111827]">{timer}s</div>
        
        {/* Control button */}
        <button
          onClick={handleToggleRecording}
          className={`mt-8 w-[72px] h-[72px] rounded-full ${
            isRecording ? 'bg-[#EF4444]' : 'bg-[#2563EB]'
          } text-white flex items-center justify-center`}
        >
          {isRecording ? 'Stop' : 'Start'}
        </button>
      </div>
    </div>
  );
}
