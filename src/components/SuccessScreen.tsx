import { CheckCircle2, Calendar, Instagram, Home } from 'lucide-react';

interface SuccessScreenProps {
  onBackToHome: () => void;
}

export function SuccessScreen({ onBackToHome }: SuccessScreenProps) {
  return (
    <div className="h-full flex flex-col items-center justify-center px-6 py-12">
      {/* Success Animation Container */}
      <div className="relative mb-8">
        {/* Outer glow ring */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#4ade80]/30 to-[#34d399]/30 blur-2xl animate-pulse" />
        
        {/* Success Icon */}
        <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-[#4ade80] to-[#34d399] flex items-center justify-center shadow-[0_20px_60px_rgba(74,222,128,0.4)]">
          <CheckCircle2 className="w-16 h-16 text-white animate-bounce" />
        </div>
      </div>

      {/* Success Message */}
      <div className="text-center mb-8">
        <h2 className="text-[#2d2d3a] mb-2">Post Scheduled!</h2>
        <p className="text-[#8b8b9a]">Your content is ready to go live</p>
      </div>

      {/* Schedule Details Card */}
      <div className="w-full mb-8 p-6 rounded-3xl bg-white/60 backdrop-blur-xl border border-white/80 shadow-[6px_6px_20px_rgba(209,196,233,0.25),-4px_-4px_16px_rgba(255,255,255,0.9)]">
        {/* Date & Time */}
        <div className="flex items-center gap-4 mb-5 pb-5 border-b border-white/40">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#a078d5]/20 to-[#d4a5d8]/20 flex items-center justify-center">
            <Calendar className="w-6 h-6 text-[#a078d5]" />
          </div>
          <div className="flex-1">
            <div className="text-xs text-[#8b8b9a] mb-1">Scheduled for</div>
            <div className="text-[#2d2d3a]">Thu, Nov 21 at 2:30 PM</div>
          </div>
        </div>

        {/* Platform */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#f093fb]/20 to-[#f5576c]/20 flex items-center justify-center">
            <Instagram className="w-6 h-6 text-[#f5576c]" />
          </div>
          <div className="flex-1">
            <div className="text-xs text-[#8b8b9a] mb-1">Platform</div>
            <div className="text-[#2d2d3a]">Instagram</div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="w-full space-y-3">
        {/* View Calendar Button */}
        <button className="w-full py-4 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/80 text-[#2d2d3a] shadow-[4px_4px_16px_rgba(209,196,233,0.2),-2px_-2px_12px_rgba(255,255,255,0.9)] hover:bg-white/90 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2">
          <Calendar className="w-5 h-5" />
          <span>View Content Calendar</span>
        </button>

        {/* Back to Home Button */}
        <button
          onClick={onBackToHome}
          className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#a078d5] to-[#d4a5d8] text-white shadow-[0_8px_24px_rgba(160,120,213,0.4)] hover:shadow-[0_12px_32px_rgba(160,120,213,0.5)] transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
        >
          <Home className="w-5 h-5" />
          <span>Back to Home</span>
        </button>
      </div>

      {/* Quick Stats */}
      <div className="w-full mt-8 grid grid-cols-3 gap-3">
        <div className="p-4 rounded-2xl bg-gradient-to-br from-[#e8f5ff]/60 to-[#f0e7ff]/60 backdrop-blur-xl border border-white/60 text-center">
          <div className="text-[#2d2d3a] mb-1">12</div>
          <div className="text-xs text-[#8b8b9a]">Scheduled</div>
        </div>
        <div className="p-4 rounded-2xl bg-gradient-to-br from-[#f0fdf4]/60 to-[#e8f5ff]/60 backdrop-blur-xl border border-white/60 text-center">
          <div className="text-[#2d2d3a] mb-1">48</div>
          <div className="text-xs text-[#8b8b9a]">Published</div>
        </div>
        <div className="p-4 rounded-2xl bg-gradient-to-br from-[#fff5e6]/60 to-[#ffe8f0]/60 backdrop-blur-xl border border-white/60 text-center">
          <div className="text-[#2d2d3a] mb-1">5</div>
          <div className="text-xs text-[#8b8b9a]">Drafts</div>
        </div>
      </div>
    </div>
  );
}
