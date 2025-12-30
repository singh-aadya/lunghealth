import { ArrowLeft, TrendingUp, Lightbulb, Wind, Activity } from 'lucide-react';

interface ResultsScreenProps {
  onBack: () => void;
}

export default function ResultsScreen({ onBack }: ResultsScreenProps) {
  return (
    <div className="w-full h-full flex flex-col">
      {/* Header */}
      <div className="h-14 px-4 flex items-center">
        <button onClick={onBack}>
          <ArrowLeft className="w-6 h-6 text-[#111827]" />
        </button>
        <div className="flex-1 text-center text-[#111827]">Results</div>
        <div className="w-6" />
      </div>
      
      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto px-4 pb-6">
        {/* Result Summary Card */}
        <div className="mt-4 w-full h-[180px] bg-white rounded-xl flex flex-col items-center justify-center">
          <div className="w-24 h-24 rounded-full border-8 border-[#10B981] flex items-center justify-center">
            <div className="text-[#10B981]">87</div>
          </div>
          
          <div className="mt-2 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-[#10B981]" />
            <span className="text-[#6B7280]">+2 from last recording</span>
          </div>
        </div>
        
        {/* Explainable AI Section */}
        <div className="mt-6">
          <div className="text-[#111827] mb-3">Why this score?</div>
          
          {/* Waveform with highlight */}
          <div className="w-full h-24 bg-[#E5E7EB] rounded-lg relative overflow-hidden">
            <svg className="w-full h-full" viewBox="0 0 300 80">
              <path
                d="M 0 40 Q 30 20 60 40 T 120 40 T 180 40 T 240 40 T 300 40"
                stroke="#2563EB"
                strokeWidth="2"
                fill="none"
              />
              {/* Highlight overlay */}
              <rect x="100" y="10" width="100" height="60" fill="#FBBF24" opacity="0.2" />
            </svg>
          </div>
          
          {/* Explanation text */}
          <p className="mt-3 text-[#6B7280] p-3 bg-white rounded-lg">
            Your breathing pattern shows consistent rhythm with slight irregularities between 10-15 seconds. This is normal and indicates good respiratory health.
          </p>
        </div>
        
        {/* Recommendations */}
        <div className="mt-6">
          <div className="text-[#111827] mb-3">Recommendations</div>
          
          <div className="space-y-3">
            {/* Recommendation 1 */}
            <div className="p-4 bg-white rounded-xl flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-[#DBEAFE] flex items-center justify-center flex-shrink-0">
                <Wind className="w-5 h-5 text-[#2563EB]" />
              </div>
              <div>
                <div className="text-[#111827]">Check Air Quality</div>
                <p className="text-[#6B7280] mt-1">Current AQI is moderate. Consider indoor activities today.</p>
              </div>
            </div>
            
            {/* Recommendation 2 */}
            <div className="p-4 bg-white rounded-xl flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-[#D1FAE5] flex items-center justify-center flex-shrink-0">
                <Activity className="w-5 h-5 text-[#10B981]" />
              </div>
              <div>
                <div className="text-[#111827]">Practice Deep Breathing</div>
                <p className="text-[#6B7280] mt-1">15 minutes of breathing exercises can improve your score.</p>
              </div>
            </div>
            
            {/* Recommendation 3 */}
            <div className="p-4 bg-white rounded-xl flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-[#FEF3C7] flex items-center justify-center flex-shrink-0">
                <Lightbulb className="w-5 h-5 text-[#F59E0B]" />
              </div>
              <div>
                <div className="text-[#111827]">Stay Hydrated</div>
                <p className="text-[#6B7280] mt-1">Drinking water helps maintain healthy respiratory function.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
