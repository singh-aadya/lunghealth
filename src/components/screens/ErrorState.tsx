import { AlertTriangle } from 'lucide-react';

interface ErrorStateProps {
  onRetry: () => void;
}

export default function ErrorState({ onRetry }: ErrorStateProps) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-4">
      {/* Warning icon */}
      <div className="w-20 h-20 rounded-full bg-[#FEE2E2] flex items-center justify-center mb-6">
        <AlertTriangle className="w-10 h-10 text-[#EF4444]" />
      </div>
      
      {/* Error message */}
      <div className="text-[#111827] mb-2">Something went wrong</div>
      <p className="text-center text-[#6B7280] max-w-[280px] mb-8">
        We couldn't complete your request. Please check your connection and try again.
      </p>
      
      {/* Retry button */}
      <button
        onClick={onRetry}
        className="w-[calc(100%-32px)] h-12 bg-[#2563EB] text-white rounded-[10px]"
      >
        Retry
      </button>
      
      {/* Secondary action */}
      <button
        onClick={onRetry}
        className="mt-3 text-[#6B7280]"
      >
        Go to Home
      </button>
    </div>
  );
}
