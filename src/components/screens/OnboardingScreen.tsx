import { ImageWithFallback } from '../figma/ImageWithFallback';

interface OnboardingScreenProps {
  step: number;
  title: string;
  description: string;
  onNext: () => void;
  isLast?: boolean;
}

const images = [
  'https://images.unsplash.com/photo-1763198302243-51142ba5b24a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGglMjB0ZWNobm9sb2d5JTIwaWxsdXN0cmF0aW9ufGVufDF8fHx8MTc2NzAyOTcxM3ww&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1716284129276-c84a6b77325f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVhdGhpbmclMjBtZWRpdGF0aW9ufGVufDF8fHx8MTc2Njk1MDU1Nnww&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1763070282912-08b63e2eb427?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZGV2aWNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjcwMjk3MTR8MA&ixlib=rb-4.1.0&q=80&w=1080'
];

export default function OnboardingScreen({ step, title, description, onNext, isLast }: OnboardingScreenProps) {
  return (
    <div className="w-full h-full flex flex-col">
      {/* Illustration block - 60% of screen */}
      <div className="relative h-[60%] bg-[#E5E7EB] overflow-hidden">
        <ImageWithFallback
          src={images[step - 1]}
          alt={`Onboarding ${step}`}
          className="w-full h-full object-cover opacity-50"
        />
      </div>
      
      {/* Content block */}
      <div className="flex-1 px-4 flex flex-col items-center justify-center">
        {/* Heading */}
        <div className="text-center text-[#111827] mb-2">{title}</div>
        
        {/* Description */}
        <p className="text-center text-[#6B7280] max-w-[320px] px-4">
          {description}
        </p>
        
        {/* Progress dots */}
        <div className="flex gap-2 mt-8">
          {[1, 2, 3].map((dot) => (
            <div
              key={dot}
              className={`w-2 h-2 rounded-full ${
                dot === step ? 'bg-[#2563EB]' : 'bg-[#D1D5DB]'
              }`}
            />
          ))}
        </div>
        
        {/* CTA button - only on last screen */}
        {isLast && (
          <button
            onClick={onNext}
            className="mt-8 w-[calc(100%-32px)] h-12 bg-[#2563EB] text-white rounded-[10px]"
          >
            Get Started
          </button>
        )}
        
        {/* Next button for non-last screens */}
        {!isLast && (
          <button
            onClick={onNext}
            className="mt-8 text-[#2563EB]"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}
