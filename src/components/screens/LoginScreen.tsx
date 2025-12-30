interface LoginScreenProps {
  onNext: () => void;
}

export default function LoginScreen({ onNext }: LoginScreenProps) {
  return (
    <div className="w-full h-full px-4">
      {/* App name at top */}
      <div className="mt-10 text-center text-[#111827]">LungHealth</div>
      
      <div className="mt-16">
        {/* Email/Phone input */}
        <div className="w-full h-12 border border-[#D1D5DB] rounded-lg px-3 flex items-center">
          <span className="text-[#9CA3AF]">Email or Phone</span>
        </div>
        
        {/* Password input */}
        <div className="mt-4 w-full h-12 border border-[#D1D5DB] rounded-lg px-3 flex items-center">
          <span className="text-[#9CA3AF]">Password</span>
        </div>
        
        {/* Primary button */}
        <button
          onClick={onNext}
          className="mt-6 w-full h-12 bg-[#2563EB] text-white rounded-[10px]"
        >
          Login
        </button>
        
        {/* Divider */}
        <div className="mt-6 flex items-center">
          <div className="flex-1 h-px bg-[#D1D5DB]" />
          <span className="px-4 text-[#6B7280]">OR</span>
          <div className="flex-1 h-px bg-[#D1D5DB]" />
        </div>
        
        {/* Secondary button */}
        <button className="mt-6 w-full h-12 border border-[#D1D5DB] rounded-[10px] text-[#111827]">
          Continue with Google
        </button>
        
        {/* Footer links */}
        <div className="mt-8 text-center">
          <a href="#" className="text-[#2563EB] mr-4">Forgot Password?</a>
          <a href="#" className="text-[#2563EB]">Sign Up</a>
        </div>
      </div>
    </div>
  );
}
