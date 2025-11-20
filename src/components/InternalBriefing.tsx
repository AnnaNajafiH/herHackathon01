import { CheckCircle2, FileText, Share2, Download, Users, Calendar, Sparkles, Send, Copy } from 'lucide-react';

export function InternalBriefing() {
  return (
    <div className="px-6 py-6 space-y-5">
      {/* Published Status */}
      <div className="p-4 rounded-2xl bg-gradient-to-r from-[#e8f5e9]/70 to-[#c8e6c9]/70 backdrop-blur-xl border border-[#4ade80]/30 shadow-[4px_4px_16px_rgba(74,222,128,0.15),-2px_-2px_12px_rgba(255,255,255,0.9)]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#4ade80] to-[#34d399] flex items-center justify-center shadow-lg">
            <CheckCircle2 className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <div className="text-[#2d2d3a] mb-0.5">Generated & Published Internally</div>
            <div className="text-xs text-[#8b8b9a]">Shared with 12 team members</div>
          </div>
          <div className="flex items-center gap-1 text-xs text-[#4ade80]">
            <Calendar className="w-3 h-3" />
            <span>Today</span>
          </div>
        </div>
      </div>

      {/* Explainer Document */}
      <div className="rounded-3xl overflow-hidden bg-white/70 backdrop-blur-xl border border-white shadow-[8px_8px_24px_rgba(160,120,213,0.12),-4px_-4px_16px_rgba(255,255,255,0.95)]">
        {/* Document Header */}
        <div className="p-4 border-b border-white/60 bg-gradient-to-r from-white/50 to-white/30">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#a78bfa] to-[#c4b5fd] flex items-center justify-center shadow-lg">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-[#2d2d3a] mb-0.5">Trend Briefing: Skin Barrier Repair</h3>
              <div className="text-xs text-[#8b8b9a]">Internal Strategic Document</div>
            </div>
          </div>
        </div>

        {/* Explainer Content - Text-Based */}
        <div className="p-5">
          {/* Executive Summary */}
          <div className="mb-5">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#ff6b9d]/10 border border-[#ff6b9d]/20 mb-3">
              <span className="text-xs text-[#ff6b9d]">EXECUTIVE SUMMARY</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/60 backdrop-blur-md border border-white">
              <p className="text-sm text-[#2d2d3a] leading-relaxed mb-3">
                "Skin Barrier Repair" has emerged as the dominant skincare narrative for Q4 2025, showing unprecedented <span className="text-[#ff6b9d]">+180% velocity growth</span> in 7 days across TikTok and Instagram.
              </p>
              <p className="text-sm text-[#2d2d3a] leading-relaxed">
                This trend represents a shift from aesthetic-focused content to science-backed, functional skincare education—particularly resonating with Gen Z audiences aged 18-24.
              </p>
            </div>
          </div>

          {/* Key Insights */}
          <div className="mb-5">
            <h4 className="text-sm text-[#8b8b9a] mb-3">Key Insights</h4>
            <div className="space-y-3">
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-[#ff6b9d]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs text-[#ff6b9d]">1</span>
                </div>
                <div className="flex-1 p-3 rounded-xl bg-white/60 backdrop-blur-md border border-white">
                  <div className="text-sm text-[#2d2d3a]">
                    <span className="text-[#ff6b9d]">Ingredient Education:</span> Content explaining ceramides, lipids, and barrier function outperforms product-only posts by 3.2x
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-[#ff6b9d]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs text-[#ff6b9d]">2</span>
                </div>
                <div className="flex-1 p-3 rounded-xl bg-white/60 backdrop-blur-md border border-white">
                  <div className="text-sm text-[#2d2d3a]">
                    <span className="text-[#ff6b9d]">Gen Z Vernacular:</span> Mixing casual language with scientific terms ("your skin barrier is screaming") drives 2.8x higher engagement
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-[#ff6b9d]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs text-[#ff6b9d]">3</span>
                </div>
                <div className="flex-1 p-3 rounded-xl bg-white/60 backdrop-blur-md border border-white">
                  <div className="text-sm text-[#2d2d3a]">
                    <span className="text-[#ff6b9d]">Visual Strategy:</span> Close-up texture shots of cream formulations perform 4.1x better than standard product photography
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Recommendations */}
          <div className="mb-5">
            <h4 className="text-sm text-[#8b8b9a] mb-3">Content Recommendations</h4>
            <div className="p-4 rounded-2xl bg-gradient-to-br from-[#e8f5ff]/60 to-[#f0e7ff]/60 backdrop-blur-md border border-white">
              <ul className="space-y-2 text-sm text-[#2d2d3a]">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4ade80] mt-0.5 flex-shrink-0" />
                  <span>Create 3-5 carousel posts explaining barrier science in Gen Z language</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4ade80] mt-0.5 flex-shrink-0" />
                  <span>Develop video content showing before/after barrier repair results</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4ade80] mt-0.5 flex-shrink-0" />
                  <span>Partner with micro-influencers (10K-50K) in dermatology niche</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4ade80] mt-0.5 flex-shrink-0" />
                  <span>Launch hashtag campaign #BarrierRepairChallenge by Nov 25</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Timeline */}
          <div>
            <h4 className="text-sm text-[#8b8b9a] mb-3">Projected Timeline</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/60 backdrop-blur-md border border-white">
                <div className="w-2 h-2 rounded-full bg-[#ff6b9d]" />
                <div className="flex-1 text-sm text-[#2d2d3a]">Content production: Nov 21-23</div>
                <span className="text-xs text-[#8b8b9a]">2 days</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/60 backdrop-blur-md border border-white">
                <div className="w-2 h-2 rounded-full bg-[#ffb74d]" />
                <div className="flex-1 text-sm text-[#2d2d3a]">Team review & approval: Nov 24</div>
                <span className="text-xs text-[#8b8b9a]">1 day</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/60 backdrop-blur-md border border-white">
                <div className="w-2 h-2 rounded-full bg-[#4ade80]" />
                <div className="flex-1 text-sm text-[#2d2d3a]">Campaign launch: Nov 25-30</div>
                <span className="text-xs text-[#8b8b9a]">5 days</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-3">
        <button className="py-4 rounded-2xl bg-white/60 backdrop-blur-xl border border-white shadow-[4px_4px_16px_rgba(160,120,213,0.1),-2px_-2px_12px_rgba(255,255,255,0.9)] text-[#2d2d3a] hover:bg-white/80 transition-all hover:scale-[1.02] flex items-center justify-center gap-2">
          <Share2 className="w-4 h-4" />
          <span className="text-sm">Share</span>
        </button>
        
        <button className="py-4 rounded-2xl bg-gradient-to-r from-[#ff6b9d] to-[#ff8fb5] text-white shadow-[0_8px_24px_rgba(255,107,157,0.3)] hover:shadow-[0_12px_32px_rgba(255,107,157,0.4)] transition-all hover:scale-[1.02] flex items-center justify-center gap-2">
          <Download className="w-4 h-4" />
          <span className="text-sm">Export PDF</span>
        </button>
      </div>

      {/* Additional Quick Actions */}
      <div className="space-y-3">
        {/* Generate Content from Brief */}
        <button className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-[#a78bfa] to-[#c4b5fd] text-white shadow-[0_8px_24px_rgba(167,139,250,0.3)] hover:shadow-[0_12px_32px_rgba(167,139,250,0.4)] transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4" />
          <span className="text-sm">Generate Content from Brief</span>
        </button>

        {/* Send to Team */}
        <button className="w-full py-3 rounded-xl bg-white/50 backdrop-blur-md border border-white shadow-[3px_3px_12px_rgba(160,120,213,0.08)] text-[#2d2d3a] hover:bg-white/70 transition-all hover:scale-[1.02] flex items-center justify-center gap-2 text-sm">
          <Send className="w-4 h-4" />
          <span>Send to Team Email</span>
        </button>

        {/* Copy Link */}
        <button className="w-full py-3 rounded-xl bg-white/50 backdrop-blur-md border border-white shadow-[3px_3px_12px_rgba(160,120,213,0.08)] text-[#8b8b9a] hover:bg-white/70 hover:text-[#2d2d3a] transition-all hover:scale-[1.02] flex items-center justify-center gap-2 text-sm">
          <Copy className="w-4 h-4" />
          <span>Copy Shareable Link</span>
        </button>
      </div>

      {/* Team Access */}
      <div className="p-4 rounded-2xl bg-white/50 backdrop-blur-md border border-white shadow-[3px_3px_12px_rgba(160,120,213,0.08)]">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-[#8b8b9a]" />
            <span className="text-sm text-[#8b8b9a]">Shared with team</span>
          </div>
          <span className="text-xs text-[#ff6b9d]">12 members</span>
        </div>
        <div className="flex -space-x-2">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="w-8 h-8 rounded-full bg-gradient-to-br from-[#a78bfa] to-[#c4b5fd] border-2 border-white flex items-center justify-center"
            >
              <span className="text-xs text-white">{String.fromCharCode(64 + i)}</span>
            </div>
          ))}
          <div className="w-8 h-8 rounded-full bg-white/80 border-2 border-white flex items-center justify-center">
            <span className="text-xs text-[#8b8b9a]">+6</span>
          </div>
        </div>
      </div>
    </div>
  );
}