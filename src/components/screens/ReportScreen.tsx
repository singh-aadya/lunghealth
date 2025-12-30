import { ArrowLeft, Download, Share2, Home, Activity, FileText, User } from 'lucide-react';
import type { ScreenType } from '../../App';

interface ReportScreenProps {
  onBack: () => void;
}

export default function ReportScreen({ onBack }: ReportScreenProps) {
  return (
    <div className="w-full h-full flex flex-col">
      {/* Header */}
      <div className="h-14 px-4 flex items-center">
        <button onClick={onBack}>
          <ArrowLeft className="w-6 h-6 text-[#111827]" />
        </button>
        <div className="flex-1 text-center text-[#111827]">Health Report</div>
        <div className="w-6" />
      </div>
      
      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto px-4 pb-20">
        {/* Report preview */}
        <div className="mt-4 w-full h-[300px] bg-white rounded-xl p-4 border-2 border-[#E5E7EB]">
          <div className="text-center mb-4">
            <div className="text-[#111827]">Monthly Health Report</div>
            <div className="text-[#6B7280]">December 2024</div>
          </div>
          
          {/* Preview content */}
          <div className="space-y-3">
            <div className="h-2 bg-[#E5E7EB] rounded w-full" />
            <div className="h-2 bg-[#E5E7EB] rounded w-3/4" />
            <div className="h-2 bg-[#E5E7EB] rounded w-full" />
            <div className="h-2 bg-[#E5E7EB] rounded w-2/3" />
            
            <div className="mt-4 h-24 bg-[#F3F4F6] rounded flex items-center justify-center">
              <span className="text-[#9CA3AF]">Chart Preview</span>
            </div>
            
            <div className="h-2 bg-[#E5E7EB] rounded w-full" />
            <div className="h-2 bg-[#E5E7EB] rounded w-5/6" />
          </div>
        </div>
        
        {/* Patient info block */}
        <div className="mt-6 p-4 bg-white rounded-xl">
          <div className="text-[#111827] mb-3">Patient Information</div>
          
          <div className="space-y-2 text-[#6B7280]">
            <div className="flex justify-between">
              <span>Name:</span>
              <span className="text-[#111827]">Aadya Sharma</span>
            </div>
            <div className="flex justify-between">
              <span>Age:</span>
              <span className="text-[#111827]">28 years</span>
            </div>
            <div className="flex justify-between">
              <span>Report Period:</span>
              <span className="text-[#111827]">Dec 1-29, 2024</span>
            </div>
            <div className="flex justify-between">
              <span>Total Recordings:</span>
              <span className="text-[#111827]">24</span>
            </div>
          </div>
        </div>
        
        {/* Summary stats */}
        <div className="mt-6 grid grid-cols-2 gap-3">
          <div className="p-4 bg-white rounded-xl">
            <div className="text-[#6B7280]">Avg Score</div>
            <div className="text-[#111827] mt-1">84.5</div>
          </div>
          
          <div className="p-4 bg-white rounded-xl">
            <div className="text-[#6B7280]">Avg AQI</div>
            <div className="text-[#111827] mt-1">43.2</div>
          </div>
          
          <div className="p-4 bg-white rounded-xl">
            <div className="text-[#6B7280]">Best Score</div>
            <div className="text-[#10B981] mt-1">92</div>
          </div>
          
          <div className="p-4 bg-white rounded-xl">
            <div className="text-[#6B7280]">Trend</div>
            <div className="text-[#10B981] mt-1">+5.2%</div>
          </div>
        </div>
        
        {/* Action buttons */}
        <div className="mt-6 space-y-3">
          <button className="w-full h-12 bg-[#2563EB] text-white rounded-[10px] flex items-center justify-center gap-2">
            <Download className="w-5 h-5" />
            Download PDF
          </button>
          
          <button className="w-full h-12 bg-white border border-[#D1D5DB] text-[#111827] rounded-[10px] flex items-center justify-center gap-2">
            <Share2 className="w-5 h-5" />
            Share Report
          </button>
        </div>
      </div>
      
      {/* Bottom Navigation */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white border-t border-[#E5E7EB]">
        <div className="h-full flex items-center justify-around px-4">
          <button onClick={onBack} className="flex flex-col items-center gap-1">
            <Home className="w-6 h-6 text-[#6B7280]" />
            <span className="text-[#6B7280]">Home</span>
          </button>
          
          <button className="flex flex-col items-center gap-1">
            <Activity className="w-6 h-6 text-[#6B7280]" />
            <span className="text-[#6B7280]">History</span>
          </button>
          
          <button className="flex flex-col items-center gap-1">
            <FileText className="w-6 h-6 text-[#2563EB]" />
            <span className="text-[#2563EB]">Report</span>
          </button>
          
          <button className="flex flex-col items-center gap-1">
            <User className="w-6 h-6 text-[#6B7280]" />
            <span className="text-[#6B7280]">Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
}
