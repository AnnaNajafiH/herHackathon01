import { Users, CheckCircle2, Clock, ThumbsUp, MessageCircle, X, Edit3, Send } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AIContentStudio() {
  const genZCaption = `your skin barrier is literally SCREAMING rn 😭✋

okay but fr, if your skin is red, dry, or just acting tf up… you need to repair that barrier ASAP 🔬

here's the science-y part: your skin barrier is made of ceramides (like tiny bricks) + lipids (the cement between them). when it's damaged, moisture ESCAPES and irritants get IN 🚨

this ceramide cream is like… construction workers for your face?? 💀 it rebuilds that protective layer so your skin can actually FUNCTION again

ingredients: ceramides 1, 3, 6 + cholesterol + fatty acids = barrier repair dream team 🧪✨

been using this for 2 weeks and my skin went from sahara desert to glass skin real quick 🌊

who else is team #SkinBarrierRepair?? 

#CeramideCream #SkinBarrier #GlassSkin #SkincareScience #SkinBarrierRepair #KBeauty #SkinGoals #HealthySkin #Dermatology`;

  return (
    <div className="px-6 py-6 space-y-5">
      {/* Pending Team Review Status */}
      <div className="p-4 rounded-2xl bg-gradient-to-r from-[#fff8e1]/70 to-[#ffe8cc]/70 backdrop-blur-xl border border-[#ffb74d]/30 shadow-[4px_4px_16px_rgba(255,183,77,0.15),-2px_-2px_12px_rgba(255,255,255,0.9)]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#ffb74d] to-[#ffa726] flex items-center justify-center shadow-lg">
            <Clock className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <div className="text-[#2d2d3a] mb-0.5">Pending Team Review</div>
            <div className="text-xs text-[#8b8b9a]">3 approvals needed to publish</div>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-6 h-6 rounded-full bg-white/80 border-2 border-[#4ade80] flex items-center justify-center">
              <CheckCircle2 className="w-3 h-3 text-[#4ade80]" />
            </div>
            <div className="w-6 h-6 rounded-full bg-white/80 border-2 border-[#ff6b9d] flex items-center justify-center -ml-2">
              <span className="text-[10px]">2</span>
            </div>
          </div>
        </div>
      </div>

      {/* AI Generated Draft */}
      <div className="rounded-3xl overflow-hidden bg-white/70 backdrop-blur-xl border border-white shadow-[8px_8px_24px_rgba(160,120,213,0.12),-4px_-4px_16px_rgba(255,255,255,0.95)]">
        {/* Draft Header */}
        <div className="p-4 border-b border-white/60 bg-gradient-to-r from-white/50 to-white/30">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#ff6b9d] to-[#ff8fb5]" />
              <div>
                <div className="text-sm text-[#2d2d3a]">skinfluence_ai</div>
                <div className="text-xs text-[#8b8b9a]">AI Generated Draft</div>
              </div>
            </div>
            <div className="px-3 py-1.5 rounded-full bg-gradient-to-r from-[#ff6b9d]/20 to-[#ff8fb5]/20 border border-[#ff6b9d]/30">
              <span className="text-xs text-[#ff6b9d]">DRAFT</span>
            </div>
          </div>
        </div>

        {/* Visual Content */}
        <div className="relative">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1763103074871-b78c815fcbcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luJTIwYmFycmllciUyMGNyZWFtJTIwdGV4dHVyZXxlbnwxfHx8fDE3NjM2NTQ5NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Skin barrier repair content"
            className="w-full aspect-square object-cover"
          />
          
          {/* Scroll-stopping badge */}
          <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20">
            <span className="text-xs text-white">🔥 Scroll-Stopper</span>
          </div>
        </div>

        {/* Engagement Preview */}
        <div className="p-3 border-b border-white/40 flex items-center gap-4">
          <div className="flex items-center gap-1">
            <ThumbsUp className="w-5 h-5 text-[#2d2d3a]" />
            <span className="text-sm text-[#2d2d3a]">Est. 12.4K</span>
          </div>
          <div className="flex items-center gap-1">
            <MessageCircle className="w-5 h-5 text-[#2d2d3a]" />
            <span className="text-sm text-[#2d2d3a]">Est. 847</span>
          </div>
        </div>

        {/* Gen Z Caption with Scientific Explanation */}
        <div className="p-4">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-sm text-[#8b8b9a]">Caption</h4>
            <span className="text-xs text-[#8b8b9a]">{genZCaption.length} characters</span>
          </div>
          
          <div className="p-4 rounded-2xl bg-white/60 backdrop-blur-md border border-white max-h-[280px] overflow-y-auto scrollbar-hide">
            <div className="text-sm text-[#2d2d3a] whitespace-pre-line leading-relaxed">
              {genZCaption}
            </div>
          </div>

          {/* Caption Highlights */}
          <div className="mt-3 flex flex-wrap gap-2">
            <div className="px-3 py-1.5 rounded-full bg-[#ff6b9d]/10 border border-[#ff6b9d]/20">
              <span className="text-xs text-[#ff6b9d]">Gen Z Tone ✓</span>
            </div>
            <div className="px-3 py-1.5 rounded-full bg-[#4ade80]/10 border border-[#4ade80]/20">
              <span className="text-xs text-[#4ade80]">Science Explained ✓</span>
            </div>
            <div className="px-3 py-1.5 rounded-full bg-[#a78bfa]/10 border border-[#a78bfa]/20">
              <span className="text-xs text-[#a78bfa]">9 Hashtags ✓</span>
            </div>
          </div>
        </div>
      </div>

      {/* Team Review Actions */}
      <div className="grid grid-cols-2 gap-3">
        <button className="py-4 rounded-2xl bg-white/60 backdrop-blur-xl border border-white shadow-[4px_4px_16px_rgba(160,120,213,0.1),-2px_-2px_12px_rgba(255,255,255,0.9)] text-[#2d2d3a] hover:bg-white/80 transition-all hover:scale-[1.02] flex items-center justify-center gap-2">
          <Edit3 className="w-4 h-4" />
          <span className="text-sm">Edit Draft</span>
        </button>
        
        <button className="py-4 rounded-2xl bg-gradient-to-r from-[#ff6b9d] to-[#ff8fb5] text-white shadow-[0_8px_24px_rgba(255,107,157,0.3)] hover:shadow-[0_12px_32px_rgba(255,107,157,0.4)] transition-all hover:scale-[1.02] flex items-center justify-center gap-2">
          <CheckCircle2 className="w-4 h-4" />
          <span className="text-sm">Approve Draft</span>
        </button>
      </div>

      {/* Additional Action CTAs */}
      <div className="space-y-3">
        {/* Quick Approve & Publish */}
        <button className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-[#4ade80] to-[#34d399] text-white shadow-[0_8px_24px_rgba(74,222,128,0.3)] hover:shadow-[0_12px_32px_rgba(74,222,128,0.4)] transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2">
          <Send className="w-4 h-4" />
          <span className="text-sm">Quick Approve & Publish</span>
        </button>

        {/* Request Changes */}
        <button className="w-full py-3 rounded-xl bg-white/50 backdrop-blur-md border border-white shadow-[3px_3px_12px_rgba(160,120,213,0.08)] text-[#8b8b9a] hover:bg-white/70 hover:text-[#2d2d3a] transition-all hover:scale-[1.02] flex items-center justify-center gap-2 text-sm">
          <X className="w-4 h-4" />
          <span>Request Changes</span>
        </button>
      </div>

      {/* AI Insights */}
      <div className="p-4 rounded-2xl bg-gradient-to-br from-[#e8f5ff]/60 to-[#f0e7ff]/60 backdrop-blur-xl border border-white shadow-[4px_4px_16px_rgba(160,120,213,0.1)]">
        <div className="text-xs text-[#8b8b9a] mb-2">AI Performance Prediction</div>
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-[#2d2d3a]">Engagement Score</span>
          <span className="text-[#ff6b9d]">94/100</span>
        </div>
        <div className="w-full h-2 rounded-full bg-white/60 overflow-hidden">
          <div className="h-full w-[94%] rounded-full bg-gradient-to-r from-[#ff6b9d] to-[#ff8fb5]" />
        </div>
        <div className="mt-2 text-xs text-[#8b8b9a]">
          Best posting time: Today at 6:30 PM
        </div>
      </div>
    </div>
  );
}