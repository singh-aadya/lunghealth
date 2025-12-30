import { useEffect } from 'react';

interface SplashScreenProps {
  onNext: () => void;
}

export default function SplashScreen({ onNext }: SplashScreenProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onNext();
    }, 2000);
    return () => clearTimeout(timer);
  }, [onNext]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      {/* Logo placeholder */}
      <div className="w-[72px] h-[72px] rounded-full bg-[#E5E7EB]" />
      
      {/* App name */}
      <div className="mt-4 text-[#111827]">LungHealth</div>
      
      {/* Tagline */}
      <div className="mt-2 text-[#6B7280]">Monitor. Analyze. Breathe Better.</div>
    </div>
  );
}
