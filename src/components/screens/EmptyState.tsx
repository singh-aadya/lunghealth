import { Inbox, ArrowLeft } from 'lucide-react';

interface EmptyStateProps {
  onBack: () => void;
}

export default function EmptyState({ onBack }: EmptyStateProps) {
  return (
    <div className="w-full h-full flex flex-col">
      {/* Header */}
      <div className="h-14 px-4 flex items-center">
        <button onClick={onBack}>
          <ArrowLeft className="w-6 h-6 text-[#111827]" />
        </button>
      </div>
      
      {/* Center content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4">
        {/* Illustration placeholder */}
        <div className="w-32 h-32 rounded-full bg-[#E5E7EB] flex items-center justify-center mb-6">
          <Inbox className="w-16 h-16 text-[#9CA3AF]" />
        </div>
        
        {/* Text */}
        <div className="text-[#111827] mb-2">No data yet</div>
        <p className="text-center text-[#6B7280] max-w-[280px] mb-8">
          Start recording your breathing to track your lung health and get personalized insights.
        </p>
        
        {/* CTA button */}
        <button
          onClick={onBack}
          className="w-[calc(100%-32px)] h-12 bg-[#2563EB] text-white rounded-[10px]"
        >
          Start Recording
        </button>
      </div>
    </div>
  );
}
