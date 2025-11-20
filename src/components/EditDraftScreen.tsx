import { useState } from 'react';
import { ArrowLeft, Save, Image, Type, Hash, Sparkles, Wand2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface EditDraftScreenProps {
  onBack: () => void;
  onSave: () => void;
  caption: string;
  setCaption: (caption: string) => void;
}

export function EditDraftScreen({ onBack, onSave, caption, setCaption }: EditDraftScreenProps) {
  const [activeTab, setActiveTab] = useState<'caption' | 'image' | 'hashtags'>('caption');

  const suggestedHashtags = [
    '#GlassSkin', '#SkincareRoutine', '#GlowySkin', '#KBeauty', 
    '#SerumLove', '#HealthySkin', '#SkincareCommunity', '#BeautyTok',
    '#SkincareAddict', '#SkinGoals', '#Glowing', '#SelfCare'
  ];

  const addHashtag = (tag: string) => {
    if (!caption.includes(tag)) {
      setCaption(caption + '\n' + tag);
    }
  };

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="px-6 py-4 flex items-center gap-3 border-b border-white/40">
        <button
          onClick={onBack}
          className="w-10 h-10 rounded-xl bg-white/60 backdrop-blur-md border border-white/80 shadow-[2px_2px_8px_rgba(209,196,233,0.2),-2px_-2px_8px_rgba(255,255,255,0.9)] flex items-center justify-center hover:scale-95 transition-transform"
        >
          <ArrowLeft className="w-5 h-5 text-[#2d2d3a]" />
        </button>
        <div className="flex-1">
          <h2 className="text-[#2d2d3a]">Edit Draft</h2>
          <p className="text-xs text-[#8b8b9a]">Customize your content</p>
        </div>
        <button
          onClick={onSave}
          className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#a078d5] to-[#d4a5d8] text-white shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center gap-2"
        >
          <Save className="w-4 h-4" />
          <span className="text-sm">Save</span>
        </button>
      </div>

      {/* Tab Navigation */}
      <div className="px-6 py-4 flex gap-2">
        <button
          onClick={() => setActiveTab('caption')}
          className={`flex-1 py-3 rounded-xl transition-all ${
            activeTab === 'caption'
              ? 'bg-white/70 backdrop-blur-xl border border-white/80 shadow-[4px_4px_16px_rgba(209,196,233,0.3),-2px_-2px_12px_rgba(255,255,255,0.9)] text-[#2d2d3a]'
              : 'bg-white/40 border border-white/60 text-[#8b8b9a] hover:bg-white/50'
          } flex items-center justify-center gap-2`}
        >
          <Type className="w-4 h-4" />
          <span className="text-sm">Caption</span>
        </button>
        
        <button
          onClick={() => setActiveTab('image')}
          className={`flex-1 py-3 rounded-xl transition-all ${
            activeTab === 'image'
              ? 'bg-white/70 backdrop-blur-xl border border-white/80 shadow-[4px_4px_16px_rgba(209,196,233,0.3),-2px_-2px_12px_rgba(255,255,255,0.9)] text-[#2d2d3a]'
              : 'bg-white/40 border border-white/60 text-[#8b8b9a] hover:bg-white/50'
          } flex items-center justify-center gap-2`}
        >
          <Image className="w-4 h-4" />
          <span className="text-sm">Image</span>
        </button>
        
        <button
          onClick={() => setActiveTab('hashtags')}
          className={`flex-1 py-3 rounded-xl transition-all ${
            activeTab === 'hashtags'
              ? 'bg-white/70 backdrop-blur-xl border border-white/80 shadow-[4px_4px_16px_rgba(209,196,233,0.3),-2px_-2px_12px_rgba(255,255,255,0.9)] text-[#2d2d3a]'
              : 'bg-white/40 border border-white/60 text-[#8b8b9a] hover:bg-white/50'
          } flex items-center justify-center gap-2`}
        >
          <Hash className="w-4 h-4" />
          <span className="text-sm">Tags</span>
        </button>
      </div>

      {/* Tab Content */}
      <div className="flex-1 overflow-y-auto px-6 pb-6">
        {activeTab === 'caption' && (
          <div className="space-y-4">
            {/* AI Enhance Button */}
            <button className="w-full py-3 rounded-2xl bg-gradient-to-r from-[#ffd6e7]/40 to-[#d4c5f9]/40 backdrop-blur-xl border border-white/60 text-[#a078d5] shadow-[4px_4px_16px_rgba(209,196,233,0.2)] hover:shadow-[6px_6px_20px_rgba(209,196,233,0.3)] transition-all hover:scale-[1.02] flex items-center justify-center gap-2">
              <Wand2 className="w-4 h-4" />
              <span className="text-sm">Enhance with AI</span>
            </button>

            {/* Caption Editor */}
            <div className="rounded-2xl overflow-hidden bg-white/60 backdrop-blur-xl border border-white/80 shadow-[4px_4px_16px_rgba(209,196,233,0.2),-2px_-2px_12px_rgba(255,255,255,0.9)]">
              <div className="p-3 border-b border-white/40 flex items-center justify-between">
                <span className="text-xs text-[#8b8b9a]">Caption Text</span>
                <span className="text-xs text-[#8b8b9a]">{caption.length}/2200</span>
              </div>
              <textarea
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                className="w-full p-4 bg-transparent text-[#2d2d3a] text-sm resize-none focus:outline-none min-h-[300px]"
                placeholder="Write your caption..."
              />
            </div>

            {/* Tone Suggestions */}
            <div>
              <div className="text-xs text-[#8b8b9a] mb-3">Quick Tone Adjustments</div>
              <div className="flex flex-wrap gap-2">
                {['Casual', 'Professional', 'Friendly', 'Exciting'].map((tone) => (
                  <button
                    key={tone}
                    className="px-4 py-2 rounded-xl bg-white/50 backdrop-blur-md border border-white/70 text-[#2d2d3a] text-xs hover:bg-white/70 hover:scale-105 transition-all"
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'image' && (
          <div className="space-y-4">
            {/* Current Image */}
            <div>
              <div className="text-xs text-[#8b8b9a] mb-3">Current Image</div>
              <div className="rounded-3xl overflow-hidden bg-white/60 backdrop-blur-xl border border-white/80 shadow-[6px_6px_20px_rgba(209,196,233,0.25)]">
                <div className="aspect-square relative">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1741896135512-084b251887f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXJ1bSUyMGJvdHRsZSUyMG1pbmltYWxpc3R8ZW58MXx8fHwxNzYzNjU0NTA4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Post image"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Image Actions */}
            <div className="grid grid-cols-2 gap-3">
              <button className="py-3 rounded-2xl bg-white/60 backdrop-blur-xl border border-white/80 shadow-[4px_4px_16px_rgba(209,196,233,0.2)] hover:shadow-[6px_6px_20px_rgba(209,196,233,0.3)] transition-all hover:scale-[1.02] flex items-center justify-center gap-2">
                <Image className="w-4 h-4 text-[#a078d5]" />
                <span className="text-sm text-[#2d2d3a]">Replace</span>
              </button>
              
              <button className="py-3 rounded-2xl bg-white/60 backdrop-blur-xl border border-white/80 shadow-[4px_4px_16px_rgba(209,196,233,0.2)] hover:shadow-[6px_6px_20px_rgba(209,196,233,0.3)] transition-all hover:scale-[1.02] flex items-center justify-center gap-2">
                <Sparkles className="w-4 h-4 text-[#a078d5]" />
                <span className="text-sm text-[#2d2d3a]">Enhance</span>
              </button>
            </div>

            {/* Filters */}
            <div>
              <div className="text-xs text-[#8b8b9a] mb-3">Apply Filters</div>
              <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                {['Original', 'Bright', 'Warm', 'Cool', 'Vintage'].map((filter) => (
                  <button
                    key={filter}
                    className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#a078d5]/20 to-[#d4a5d8]/20 backdrop-blur-md border border-white/60 flex items-center justify-center text-xs text-[#2d2d3a] hover:scale-105 transition-all"
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'hashtags' && (
          <div className="space-y-4">
            {/* Suggested Hashtags */}
            <div>
              <div className="text-xs text-[#8b8b9a] mb-3">Suggested Hashtags</div>
              <div className="flex flex-wrap gap-2">
                {suggestedHashtags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => addHashtag(tag)}
                    className="px-3 py-2 rounded-xl bg-gradient-to-r from-[#a078d5]/10 to-[#d4a5d8]/10 backdrop-blur-md border border-[#a078d5]/30 text-[#a078d5] text-sm hover:bg-[#a078d5]/20 hover:scale-105 transition-all"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Generate More */}
            <button className="w-full py-3 rounded-2xl bg-gradient-to-r from-[#ffd6e7]/40 to-[#d4c5f9]/40 backdrop-blur-xl border border-white/60 text-[#a078d5] shadow-[4px_4px_16px_rgba(209,196,233,0.2)] hover:shadow-[6px_6px_20px_rgba(209,196,233,0.3)] transition-all hover:scale-[1.02] flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm">Generate More Hashtags</span>
            </button>

            {/* Current Hashtags in Caption */}
            <div className="p-4 rounded-2xl bg-white/60 backdrop-blur-xl border border-white/80 shadow-[4px_4px_16px_rgba(209,196,233,0.2)]">
              <div className="text-xs text-[#8b8b9a] mb-2">Current hashtags in caption:</div>
              <div className="text-sm text-[#2d2d3a]">
                {caption.match(/#\w+/g)?.length || 0} hashtag(s)
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
