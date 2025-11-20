import { useState } from 'react';
import { TrendRadar } from './TrendRadar';
import { AIContentStudio } from './AIContentStudio';
import { InternalBriefing } from './InternalBriefing';
import { TrendingUp, Sparkles, FileText, Plus, Zap, PenTool } from 'lucide-react';

export function SkinfluenceDashboard() {
  const [activeSection, setActiveSection] = useState<'radar' | 'studio' | 'briefing'>('radar');
  const [showQuickActions, setShowQuickActions] = useState(false);

  return (
    <div className="h-full flex flex-col relative">
      {/* Header with Brand */}
      <div className="px-6 py-4 border-b border-white/40">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-[#2d2d3a] mb-0.5">Skinfluence</h1>
            <p className="text-xs text-[#8b8b9a]">AI Content Intelligence</p>
          </div>
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#ff6b9d] to-[#ff8fb5] shadow-lg flex items-center justify-center">
            <span className="text-white">✨</span>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-2">
          <button
            onClick={() => setActiveSection('radar')}
            className={`flex-1 py-2.5 px-3 rounded-xl transition-all flex items-center justify-center gap-2 ${
              activeSection === 'radar'
                ? 'bg-white/80 backdrop-blur-xl border border-white shadow-[4px_4px_12px_rgba(160,120,213,0.15),-2px_-2px_8px_rgba(255,255,255,0.9)] text-[#ff6b9d]'
                : 'bg-white/40 backdrop-blur-md border border-white/60 text-[#8b8b9a] hover:bg-white/50'
            }`}
          >
            <TrendingUp className="w-4 h-4" />
            <span className="text-xs">Radar</span>
          </button>
          
          <button
            onClick={() => setActiveSection('studio')}
            className={`flex-1 py-2.5 px-3 rounded-xl transition-all flex items-center justify-center gap-2 ${
              activeSection === 'studio'
                ? 'bg-white/80 backdrop-blur-xl border border-white shadow-[4px_4px_12px_rgba(160,120,213,0.15),-2px_-2px_8px_rgba(255,255,255,0.9)] text-[#ff6b9d]'
                : 'bg-white/40 backdrop-blur-md border border-white/60 text-[#8b8b9a] hover:bg-white/50'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-xs">Studio</span>
          </button>
          
          <button
            onClick={() => setActiveSection('briefing')}
            className={`flex-1 py-2.5 px-3 rounded-xl transition-all flex items-center justify-center gap-2 ${
              activeSection === 'briefing'
                ? 'bg-white/80 backdrop-blur-xl border border-white shadow-[4px_4px_12px_rgba(160,120,213,0.15),-2px_-2px_8px_rgba(255,255,255,0.9)] text-[#ff6b9d]'
                : 'bg-white/40 backdrop-blur-md border border-white/60 text-[#8b8b9a] hover:bg-white/50'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span className="text-xs">Brief</span>
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto scrollbar-hide">
        {activeSection === 'radar' && <TrendRadar />}
        {activeSection === 'studio' && <AIContentStudio />}
        {activeSection === 'briefing' && <InternalBriefing />}
      </div>

      {/* Floating Quick Actions Menu */}
      {showQuickActions && (
        <div className="absolute bottom-24 right-6 space-y-3 animate-slide-up">
          <button className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/90 backdrop-blur-xl border border-white shadow-[6px_6px_20px_rgba(160,120,213,0.2),-3px_-3px_12px_rgba(255,255,255,0.95)] text-[#2d2d3a] hover:bg-white transition-all hover:scale-105">
            <Sparkles className="w-4 h-4 text-[#ff6b9d]" />
            <span className="text-sm">Generate Post</span>
          </button>
          
          <button className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/90 backdrop-blur-xl border border-white shadow-[6px_6px_20px_rgba(160,120,213,0.2),-3px_-3px_12px_rgba(255,255,255,0.95)] text-[#2d2d3a] hover:bg-white transition-all hover:scale-105">
            <Zap className="w-4 h-4 text-[#ff6b9d]" />
            <span className="text-sm">Quick Brief</span>
          </button>
          
          <button className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/90 backdrop-blur-xl border border-white shadow-[6px_6px_20px_rgba(160,120,213,0.2),-3px_-3px_12px_rgba(255,255,255,0.95)] text-[#2d2d3a] hover:bg-white transition-all hover:scale-105">
            <PenTool className="w-4 h-4 text-[#ff6b9d]" />
            <span className="text-sm">Edit Draft</span>
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => setShowQuickActions(!showQuickActions)}
        className={`absolute bottom-6 right-6 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#ff6b9d] to-[#ff8fb5] shadow-[0_12px_32px_rgba(255,107,157,0.4)] hover:shadow-[0_16px_40px_rgba(255,107,157,0.5)] transition-all hover:scale-110 active:scale-95 flex items-center justify-center z-10 ${
          showQuickActions ? 'rotate-45' : ''
        }`}
      >
        <Plus className="w-6 h-6 text-white" />
      </button>
    </div>
  );
}