import { useEffect } from 'react';
import { Loader2 } from 'lucide-react';

interface ProcessingScreenProps {
  onNext: () => void;
}

export default function ProcessingScreen({ onNext }: ProcessingScreenProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onNext();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onNext]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-4">
      {/* Loader circle */}
      <Loader2 className="w-12 h-12 text-[#2563EB] animate-spin" />
      
      {/* Main text */}
      <div className="mt-6 text-[#111827]">Analyzing breathing patterns</div>
      
      {/* Subtext */}
      <p className="mt-2 text-center text-[#6B7280] max-w-[280px]">
        Our AI is processing your data to provide personalized insights
      </p>
    </div>
  );
}
