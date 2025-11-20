import { Sparkles, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface TrendingFeedProps {
  onViewDraft: () => void;
}

const trendingPosts = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1590393802688-ab3fd7c186f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMHByb2R1Y3QlMjBwYXN0ZWx8ZW58MXx8fHwxNzYzNjU0NTA3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    likes: '24.3K',
    engagement: '92%'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwc2tpbmNhcmUlMjBib3R0bGV8ZW58MXx8fHwxNzYzNjU0NTA3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    likes: '18.7K',
    engagement: '88%'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1709551264845-e9dddd775388?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXN0aGV0aWMlMjBza2luY2FyZSUyMGNyZWFtfGVufDF8fHx8MTc2MzY1NDUwN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    likes: '31.2K',
    engagement: '95%'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1741896135512-084b251887f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXJ1bSUyMGJvdHRsZSUyMG1pbmltYWxpc3R8ZW58MXx8fHwxNzYzNjU0NTA4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    likes: '27.8K',
    engagement: '91%'
  }
];

export function TrendingFeed({ onViewDraft }: TrendingFeedProps) {
  return (
    <div className="h-full flex flex-col px-6 pb-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-[#2d2d3a] mb-1">Trending Feed</h1>
          <p className="text-sm text-[#8b8b9a]">Gen Z Viral Skincare</p>
        </div>
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#ffd6e7]/40 to-[#d4c5f9]/40 backdrop-blur-xl border border-white/60 shadow-[4px_4px_12px_rgba(209,196,233,0.3),-4px_-4px_12px_rgba(255,255,255,0.8)] flex items-center justify-center">
          <TrendingUp className="w-5 h-5 text-[#a078d5]" />
        </div>
      </div>

      {/* Grid of Trending Posts */}
      <div className="flex-1 overflow-y-auto scrollbar-hide">
        <div className="grid grid-cols-2 gap-3 mb-6">
          {trendingPosts.map((post) => (
            <div
              key={post.id}
              className="group relative rounded-3xl overflow-hidden bg-white/40 backdrop-blur-md border border-white/60 shadow-[4px_4px_16px_rgba(209,196,233,0.2),-2px_-2px_12px_rgba(255,255,255,0.9)]"
            >
              <div className="aspect-[3/4] relative overflow-hidden">
                <ImageWithFallback
                  src={post.image}
                  alt="Trending skincare post"
                  className="w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              {/* Stats Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-white/90 via-white/70 to-transparent backdrop-blur-md">
                <div className="flex items-center justify-between text-xs">
                  <div className="text-[#2d2d3a]">{post.likes} likes</div>
                  <div className="px-2 py-1 rounded-full bg-[#a078d5]/20 text-[#a078d5]">
                    {post.engagement}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Generate Content CTA */}
      <button
        onClick={onViewDraft}
        className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#a078d5] to-[#d4a5d8] text-white shadow-[0_8px_24px_rgba(160,120,213,0.4)] hover:shadow-[0_12px_32px_rgba(160,120,213,0.5)] transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
      >
        <Sparkles className="w-5 h-5" />
        <span>Generate Content</span>
      </button>
    </div>
  );
}
