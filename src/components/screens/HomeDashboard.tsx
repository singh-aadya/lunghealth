import { Bell, Home, Activity, FileText, User, Wind, Waves, Cough } from 'lucide-react';
import type { ScreenType } from '../../App';

interface HomeDashboardProps {
  onNavigate: (screen: ScreenType) => void;
  onRecordBreathing: () => void;
}

export default function HomeDashboard({ onNavigate, onRecordBreathing }: HomeDashboardProps) {
  return (
    <div className="w-full h-full flex flex-col">
      {/* Header */}
      <div className="h-14 px-4 flex items-center justify-between">
        <div className="text-[#111827]">Good Morning, Aadya</div>
        <div className="w-6 h-6 flex items-center justify-center">
          <Bell className="w-6 h-6 text-[#111827]" />
        </div>
      </div>
      
      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto px-4 pb-20">
        {/* Lung Health Score Card */}
        <div className="mt-4 w-full h-[180px] bg-white rounded-xl flex flex-col items-center justify-center">
          {/* Circular gauge placeholder */}
          <div className="w-24 h-24 rounded-full border-8 border-[#10B981] flex items-center justify-center">
            <div className="text-[#10B981]">85</div>
          </div>
          
          {/* Status text */}
          <div className="mt-1 text-[#10B981]">Good Health</div>
        </div>
        
        {/* Stats Row */}
        <div className="mt-4 flex gap-2">
          {/* AQI Card */}
          <div className="flex-1 h-20 bg-white rounded-xl p-3 flex flex-col justify-between">
            <div className="flex items-center gap-1">
              <Wind className="w-4 h-4 text-[#6B7280]" />
              <span className="text-[#6B7280]">AQI</span>
            </div>
            <div className="text-[#111827]">42</div>
          </div>
          
          {/* Breathing Card */}
          <div className="flex-1 h-20 bg-white rounded-xl p-3 flex flex-col justify-between">
            <div className="flex items-center gap-1">
              <Waves className="w-4 h-4 text-[#6B7280]" />
              <span className="text-[#6B7280]">Breathing</span>
            </div>
            <div className="text-[#111827]">16/min</div>
          </div>
          
          {/* Cough Card */}
          <div className="flex-1 h-20 bg-white rounded-xl p-3 flex flex-col justify-between">
            <div className="flex items-center gap-1">
              <Activity className="w-4 h-4 text-[#6B7280]" />
              <span className="text-[#6B7280]">Cough</span>
            </div>
            <div className="text-[#111827]">2</div>
          </div>
        </div>
        
        {/* Primary CTA */}
        <button
          onClick={onRecordBreathing}
          className="mt-6 w-full h-12 bg-[#2563EB] text-white rounded-[10px]"
        >
          Record Breathing
        </button>
        
        {/* Additional space for scrolling */}
        <div className="h-4" />
      </div>
      
      {/* Bottom Navigation */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white border-t border-[#E5E7EB]">
        <div className="h-full flex items-center justify-around px-4">
          <button onClick={() => onNavigate('home')} className="flex flex-col items-center gap-1">
            <Home className="w-6 h-6 text-[#2563EB]" />
            <span className="text-[#2563EB]">Home</span>
          </button>
          
          <button onClick={() => onNavigate('history')} className="flex flex-col items-center gap-1">
            <Activity className="w-6 h-6 text-[#6B7280]" />
            <span className="text-[#6B7280]">History</span>
          </button>
          
          <button onClick={() => onNavigate('report')} className="flex flex-col items-center gap-1">
            <FileText className="w-6 h-6 text-[#6B7280]" />
            <span className="text-[#6B7280]">Report</span>
          </button>
          
          <button onClick={() => onNavigate('profile')} className="flex flex-col items-center gap-1">
            <User className="w-6 h-6 text-[#6B7280]" />
            <span className="text-[#6B7280]">Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
}
