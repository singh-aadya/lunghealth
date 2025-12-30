import { Home, Activity, FileText, User } from 'lucide-react';
import type { ScreenType } from '../../App';
import { useState } from 'react';

interface HistoryScreenProps {
  onNavigate: (screen: ScreenType) => void;
}

const historyData = [
  { id: 1, date: 'Dec 29, 2024', time: '09:30 AM', score: 87, aqi: 42, status: 'Good' },
  { id: 2, date: 'Dec 28, 2024', time: '10:15 AM', score: 85, aqi: 38, status: 'Good' },
  { id: 3, date: 'Dec 27, 2024', time: '08:45 AM', score: 82, aqi: 45, status: 'Good' },
  { id: 4, date: 'Dec 26, 2024', time: '11:00 AM', score: 78, aqi: 52, status: 'Moderate' },
  { id: 5, date: 'Dec 25, 2024', time: '09:20 AM', score: 81, aqi: 41, status: 'Good' },
];

export default function HistoryScreen({ onNavigate }: HistoryScreenProps) {
  const [filter, setFilter] = useState<'daily' | 'weekly' | 'monthly'>('daily');

  return (
    <div className="w-full h-full flex flex-col">
      {/* Header */}
      <div className="h-14 px-4 flex items-center justify-center">
        <div className="text-[#111827]">History</div>
      </div>
      
      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto px-4 pb-20">
        {/* Filters */}
        <div className="mt-4 flex gap-2">
          <button
            onClick={() => setFilter('daily')}
            className={`flex-1 h-10 rounded-[999px] ${
              filter === 'daily'
                ? 'bg-[#2563EB] text-white'
                : 'bg-white text-[#6B7280] border border-[#D1D5DB]'
            }`}
          >
            Daily
          </button>
          <button
            onClick={() => setFilter('weekly')}
            className={`flex-1 h-10 rounded-[999px] ${
              filter === 'weekly'
                ? 'bg-[#2563EB] text-white'
                : 'bg-white text-[#6B7280] border border-[#D1D5DB]'
            }`}
          >
            Weekly
          </button>
          <button
            onClick={() => setFilter('monthly')}
            className={`flex-1 h-10 rounded-[999px] ${
              filter === 'monthly'
                ? 'bg-[#2563EB] text-white'
                : 'bg-white text-[#6B7280] border border-[#D1D5DB]'
            }`}
          >
            Monthly
          </button>
        </div>
        
        {/* Graph placeholder */}
        <div className="mt-6 w-full h-[200px] bg-white rounded-xl p-4">
          <svg className="w-full h-full" viewBox="0 0 300 160">
            {/* Grid lines */}
            {[0, 1, 2, 3, 4].map((i) => (
              <line
                key={i}
                x1="0"
                y1={i * 40}
                x2="300"
                y2={i * 40}
                stroke="#E5E7EB"
                strokeWidth="1"
              />
            ))}
            
            {/* Line chart */}
            <polyline
              points="0,80 60,60 120,70 180,100 240,85 300,65"
              fill="none"
              stroke="#2563EB"
              strokeWidth="2"
            />
            
            {/* Data points */}
            {[0, 60, 120, 180, 240, 300].map((x, i) => {
              const y = [80, 60, 70, 100, 85, 65][i];
              return (
                <circle
                  key={i}
                  cx={x}
                  cy={y}
                  r="4"
                  fill="#2563EB"
                />
              );
            })}
          </svg>
        </div>
        
        {/* Record list */}
        <div className="mt-6 space-y-3">
          {historyData.map((record) => (
            <div key={record.id} className="p-4 bg-white rounded-xl">
              <div className="flex items-center justify-between mb-2">
                <div className="text-[#111827]">{record.date}</div>
                <div className={`px-3 py-1 rounded-[999px] ${
                  record.status === 'Good'
                    ? 'bg-[#D1FAE5] text-[#10B981]'
                    : 'bg-[#FEF3C7] text-[#F59E0B]'
                }`}>
                  {record.status}
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-[#6B7280]">
                <span>{record.time}</span>
                <span>Score: {record.score}</span>
                <span>AQI: {record.aqi}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Bottom Navigation */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white border-t border-[#E5E7EB]">
        <div className="h-full flex items-center justify-around px-4">
          <button onClick={() => onNavigate('home')} className="flex flex-col items-center gap-1">
            <Home className="w-6 h-6 text-[#6B7280]" />
            <span className="text-[#6B7280]">Home</span>
          </button>
          
          <button onClick={() => onNavigate('history')} className="flex flex-col items-center gap-1">
            <Activity className="w-6 h-6 text-[#2563EB]" />
            <span className="text-[#2563EB]">History</span>
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
