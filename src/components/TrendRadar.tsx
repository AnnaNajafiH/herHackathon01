import { TrendingUp, ArrowUp, Flame, Eye, Users, Sparkles, Zap } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function TrendRadar() {
  const trendingTopics = [
    { topic: 'Glass Skin', velocity: '+92%', time: '14 days', heat: 85 },
    { topic: 'Snail Mucin', velocity: '+156%', time: '10 days', heat: 92 },
    { topic: 'Double Cleansing', velocity: '+67%', time: '21 days', heat: 78 }
  ];

  return (
    <div className="px-6 py-6 space-y-5">
      {/* Hero Trend Card - Skin Barrier Repair */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/70 to-white/50 backdrop-blur-xl border border-white shadow-[8px_8px_24px_rgba(160,120,213,0.12),-4px_-4px_16px_rgba(255,255,255,0.95)]">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #ff6b9d 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }} />
        </div>

        <div className="relative p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#ff6b9d]/20 to-[#ff8fb5]/20 backdrop-blur-md border border-[#ff6b9d]/30 mb-3">
                <Flame className="w-3 h-3 text-[#ff6b9d]" />
                <span className="text-xs text-[#ff6b9d]">HOT TREND</span>
              </div>
              <h3 className="text-[#2d2d3a] mb-1">Skin Barrier Repair</h3>
              <p className="text-xs text-[#8b8b9a]">Ceramide-focused formulations</p>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#ff6b9d] to-[#ff8fb5] flex items-center justify-center shadow-lg">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
          </div>

          {/* Velocity Metric - Key Feature */}
          <div className="mb-5 p-5 rounded-2xl bg-gradient-to-br from-[#ff6b9d]/10 to-[#ff8fb5]/10 backdrop-blur-md border border-[#ff6b9d]/20">
            <div className="flex items-end gap-3 mb-2">
              <div className="text-4xl text-[#ff6b9d]">+180%</div>
              <div className="flex items-center gap-1 pb-2">
                <ArrowUp className="w-5 h-5 text-[#ff6b9d]" />
                <span className="text-sm text-[#ff6b9d]">Velocity</span>
              </div>
            </div>
            <div className="text-xs text-[#8b8b9a]">Growth in 7 days</div>
            
            {/* Mini Chart */}
            <div className="mt-4 flex items-end gap-1 h-12">
              {[30, 35, 42, 55, 68, 85, 100].map((height, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-lg bg-gradient-to-t from-[#ff6b9d] to-[#ff8fb5]"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-3 gap-3">
            <div className="p-3 rounded-xl bg-white/60 backdrop-blur-md border border-white/80 shadow-[2px_2px_8px_rgba(160,120,213,0.08)]">
              <Eye className="w-4 h-4 text-[#8b8b9a] mb-2" />
              <div className="text-[#2d2d3a] mb-0.5">2.4M</div>
              <div className="text-[10px] text-[#8b8b9a]">Views</div>
            </div>
            <div className="p-3 rounded-xl bg-white/60 backdrop-blur-md border border-white/80 shadow-[2px_2px_8px_rgba(160,120,213,0.08)]">
              <Users className="w-4 h-4 text-[#8b8b9a] mb-2" />
              <div className="text-[#2d2d3a] mb-0.5">156K</div>
              <div className="text-[10px] text-[#8b8b9a]">Posts</div>
            </div>
            <div className="p-3 rounded-xl bg-white/60 backdrop-blur-md border border-white/80 shadow-[2px_2px_8px_rgba(160,120,213,0.08)]">
              <Flame className="w-4 h-4 text-[#ff6b9d] mb-2" />
              <div className="text-[#2d2d3a] mb-0.5">97</div>
              <div className="text-[10px] text-[#8b8b9a]">Heat Score</div>
            </div>
          </div>

          {/* Generate Content CTA */}
          <div className="mt-4 grid grid-cols-2 gap-3">
            <button className="py-3 rounded-2xl bg-gradient-to-r from-[#ff6b9d] to-[#ff8fb5] text-white shadow-[0_8px_24px_rgba(255,107,157,0.3)] hover:shadow-[0_12px_32px_rgba(255,107,157,0.4)] transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm">Generate Post</span>
            </button>
            <button className="py-3 rounded-2xl bg-white/70 backdrop-blur-xl border border-white shadow-[4px_4px_16px_rgba(160,120,213,0.1)] text-[#2d2d3a] hover:bg-white/90 transition-all hover:scale-[1.02] flex items-center justify-center gap-2">
              <Zap className="w-4 h-4 text-[#ff6b9d]" />
              <span className="text-sm">Quick Brief</span>
            </button>
          </div>
        </div>
      </div>

      {/* Content Preview Card */}
      <div className="p-4 rounded-2xl bg-white/60 backdrop-blur-xl border border-white shadow-[6px_6px_20px_rgba(160,120,213,0.1),-3px_-3px_12px_rgba(255,255,255,0.95)]">
        <div className="text-xs text-[#8b8b9a] mb-3">Top Performing Content</div>
        <div className="rounded-2xl overflow-hidden bg-white/80 border border-white">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1763103074871-b78c815fcbcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luJTIwYmFycmllciUyMGNyZWFtJTIwdGV4dHVyZXxlbnwxfHx8fDE3NjM2NTQ5NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Skin barrier repair content"
            className="w-full aspect-video object-cover"
          />
        </div>
        <div className="mt-3 flex items-center justify-between text-xs">
          <span className="text-[#8b8b9a]">@skincare.science</span>
          <span className="text-[#ff6b9d]">847K likes</span>
        </div>
        
        {/* Generate Similar CTA */}
        <button className="mt-3 w-full py-2.5 rounded-xl bg-gradient-to-r from-[#ff6b9d]/10 to-[#ff8fb5]/10 border border-[#ff6b9d]/30 text-[#ff6b9d] hover:bg-[#ff6b9d]/20 transition-all hover:scale-[1.02] flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4" />
          <span className="text-xs">Generate Similar Content</span>
        </button>
      </div>

      {/* Other Trending Topics */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-sm text-[#8b8b9a]">More Trending</h4>
          <button className="text-xs text-[#ff6b9d]">View All</button>
        </div>
        
        <div className="space-y-2">
          {trendingTopics.map((item, index) => (
            <div
              key={index}
              className="p-4 rounded-2xl bg-white/50 backdrop-blur-md border border-white shadow-[3px_3px_12px_rgba(160,120,213,0.08),-2px_-2px_8px_rgba(255,255,255,0.9)] hover:bg-white/70 transition-all"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-[#2d2d3a]">{item.topic}</span>
                <div className="flex items-center gap-1">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{
                      backgroundColor: `rgba(255, 107, 157, ${item.heat / 100})`
                    }}
                  />
                  <span className="text-xs text-[#ff6b9d]">{item.heat}</span>
                </div>
              </div>
              <div className="flex items-center justify-between text-xs text-[#8b8b9a] mb-3">
                <span>{item.velocity} growth</span>
                <span>{item.time}</span>
              </div>
              
              {/* Generate Content CTA for each trend */}
              <button className="w-full py-2 rounded-xl bg-white/80 border border-white shadow-[2px_2px_8px_rgba(160,120,213,0.08)] text-[#ff6b9d] hover:bg-gradient-to-r hover:from-[#ff6b9d] hover:to-[#ff8fb5] hover:text-white transition-all hover:scale-[1.02] flex items-center justify-center gap-2 text-xs">
                <Sparkles className="w-3 h-3" />
                <span>Generate Content</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}