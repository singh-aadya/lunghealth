import { Home, Activity, FileText, User, Bell, Database, Shield, Bluetooth, Battery } from 'lucide-react';
import type { ScreenType } from '../../App';

interface ProfileScreenProps {
  onNavigate: (screen: ScreenType) => void;
}

export default function ProfileScreen({ onNavigate }: ProfileScreenProps) {
  return (
    <div className="w-full h-full flex flex-col">
      {/* Header */}
      <div className="h-14 px-4 flex items-center justify-center">
        <div className="text-[#111827]">Profile</div>
      </div>
      
      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto px-4 pb-20">
        {/* User info card */}
        <div className="mt-4 p-4 bg-white rounded-xl flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-[#E5E7EB] flex items-center justify-center">
            <User className="w-8 h-8 text-[#6B7280]" />
          </div>
          
          <div className="flex-1">
            <div className="text-[#111827]">Aadya Sharma</div>
            <div className="text-[#6B7280]">aadya.sharma@email.com</div>
          </div>
        </div>
        
        {/* Device card */}
        <div className="mt-6">
          <div className="text-[#111827] mb-3">Connected Device</div>
          
          <div className="p-4 bg-white rounded-xl">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#DBEAFE] flex items-center justify-center">
                  <Bluetooth className="w-5 h-5 text-[#2563EB]" />
                </div>
                <div>
                  <div className="text-[#111827]">ESP32 Device</div>
                  <div className="text-[#10B981]">Connected</div>
                </div>
              </div>
              
              <div className="flex items-center gap-1">
                <Battery className="w-5 h-5 text-[#10B981]" />
                <span className="text-[#6B7280]">87%</span>
              </div>
            </div>
            
            <div className="pt-3 border-t border-[#E5E7EB]">
              <div className="flex justify-between text-[#6B7280]">
                <span>Last Sync:</span>
                <span className="text-[#111827]">2 mins ago</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Settings list */}
        <div className="mt-6">
          <div className="text-[#111827] mb-3">Settings</div>
          
          <div className="space-y-3">
            {/* Notifications */}
            <div className="p-4 bg-white rounded-xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FEF3C7] flex items-center justify-center">
                  <Bell className="w-5 h-5 text-[#F59E0B]" />
                </div>
                <div>
                  <div className="text-[#111827]">Notifications</div>
                  <div className="text-[#6B7280]">Manage alerts & reminders</div>
                </div>
              </div>
              
              <div className="w-10 h-6 bg-[#2563EB] rounded-full flex items-center justify-end px-1">
                <div className="w-4 h-4 bg-white rounded-full" />
              </div>
            </div>
            
            {/* Data */}
            <div className="p-4 bg-white rounded-xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#DBEAFE] flex items-center justify-center">
                  <Database className="w-5 h-5 text-[#2563EB]" />
                </div>
                <div>
                  <div className="text-[#111827]">Data Management</div>
                  <div className="text-[#6B7280]">Export or delete your data</div>
                </div>
              </div>
            </div>
            
            {/* Consent */}
            <div className="p-4 bg-white rounded-xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#D1FAE5] flex items-center justify-center">
                  <Shield className="w-5 h-5 text-[#10B981]" />
                </div>
                <div>
                  <div className="text-[#111827]">Privacy & Consent</div>
                  <div className="text-[#6B7280]">Review privacy settings</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Logout button */}
        <button className="mt-6 w-full h-12 bg-white border border-[#EF4444] text-[#EF4444] rounded-[10px]">
          Log Out
        </button>
      </div>
      
      {/* Bottom Navigation */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white border-t border-[#E5E7EB]">
        <div className="h-full flex items-center justify-around px-4">
          <button onClick={() => onNavigate('home')} className="flex flex-col items-center gap-1">
            <Home className="w-6 h-6 text-[#6B7280]" />
            <span className="text-[#6B7280]">Home</span>
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
            <User className="w-6 h-6 text-[#2563EB]" />
            <span className="text-[#2563EB]">Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
}
