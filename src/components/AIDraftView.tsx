import { ArrowLeft, Clock, CheckCircle2, Edit3, Calendar } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface AIDraftViewProps {
  onBack: () => void;
  onSchedule: () => void;
  onEdit: () => void;
  caption: string;
  setCaption: (caption: string) => void;
}

export function AIDraftView({ onBack, onSchedule, onEdit, caption, setCaption }: AIDraftViewProps) {
  return (
    <div className="h-full flex flex-col">
      {/* Header with Back Button */}
      <div className="px-6 py-4 flex items-center gap-3 border-b border-white/40">
        <button
          onClick={onBack}
          className="w-10 h-10 rounded-xl bg-white/60 backdrop-blur-md border border-white/80 shadow-[2px_2px_8px_rgba(209,196,233,0.2),-2px_-2px_8px_rgba(255,255,255,0.9)] flex items-center justify-center hover:scale-95 transition-transform"
        >
          <ArrowLeft className="w-5 h-5 text-[#2d2d3a]" />
        </button>
        <div className="flex-1">
          <h2 className="text-[#2d2d3a]">AI Draft</h2>
          <p className="text-xs text-[#8b8b9a]">Review and edit</p>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6">
        {/* Status Indicator */}
        <div className="mb-6 p-4 rounded-2xl bg-gradient-to-r from-[#fff5e6]/60 to-[#ffe8f0]/60 backdrop-blur-xl border border-[#ffd6a5]/40 shadow-[4px_4px_16px_rgba(255,214,165,0.2),-2px_-2px_12px_rgba(255,255,255,0.8)]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#ffb84d] to-[#ff9a8b] flex items-center justify-center shadow-lg">
              <Clock className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <div className="text-[#2d2d3a] mb-0.5">Pending Approval</div>
              <div className="text-xs text-[#8b8b9a]">Awaiting your review</div>
            </div>
            <div className="w-2 h-2 rounded-full bg-[#ffb84d] animate-pulse" />
          </div>
        </div>

        {/* Post Preview */}
        <div className="mb-6">
          <h3 className="text-sm text-[#8b8b9a] mb-3">Post Preview</h3>
          <div className="rounded-3xl overflow-hidden bg-white/60 backdrop-blur-xl border border-white/80 shadow-[6px_6px_20px_rgba(209,196,233,0.25),-4px_-4px_16px_rgba(255,255,255,0.9)]">
            {/* Instagram-style header */}
            <div className="p-3 flex items-center gap-3 border-b border-white/40">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#a078d5] to-[#d4a5d8]" />
              <span className="text-sm text-[#2d2d3a]">your_brand</span>
            </div>
            
            {/* Image */}
            <div className="aspect-square relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1741896135512-084b251887f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXJ1bSUyMGJvdHRsZSUyMG1pbmltYWxpc3R8ZW58MXx8fHwxNzYzNjU0NTA4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Generated post preview"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Post actions */}
            <div className="p-3 flex items-center gap-4">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </div>
          </div>
        </div>

        {/* Caption Editor */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm text-[#8b8b9a]">Caption & Hashtags</h3>
            <span className="text-xs text-[#8b8b9a]">{caption.length}/2200</span>
          </div>
          <div className="rounded-2xl overflow-hidden bg-white/60 backdrop-blur-xl border border-white/80 shadow-[4px_4px_16px_rgba(209,196,233,0.2),-2px_-2px_12px_rgba(255,255,255,0.9)]">
            <textarea
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              className="w-full p-4 bg-transparent text-[#2d2d3a] text-sm resize-none focus:outline-none min-h-[180px]"
              placeholder="Write your caption..."
            />
          </div>
        </div>
      </div>

      {/* Action Buttons - Fixed at bottom */}
      <div className="px-6 pb-6 pt-4 border-t border-white/40 bg-gradient-to-t from-[#fef5f8]/80 to-transparent backdrop-blur-sm">
        <div className="space-y-3">
          {/* Approve & Schedule Button */}
          <button 
            onClick={onSchedule}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#4ade80] to-[#34d399] text-white shadow-[0_8px_24px_rgba(74,222,128,0.4)] hover:shadow-[0_12px_32px_rgba(74,222,128,0.5)] transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2">
            <CheckCircle2 className="w-5 h-5" />
            <span>Approve & Schedule</span>
            <Calendar className="w-4 h-4 ml-1" />
          </button>

          {/* Edit Draft Button */}
          <button 
            onClick={onEdit}
            className="w-full py-4 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/80 text-[#2d2d3a] shadow-[4px_4px_16px_rgba(209,196,233,0.2),-2px_-2px_12px_rgba(255,255,255,0.9)] hover:bg-white/90 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2">
            <Edit3 className="w-4 h-4" />
            <span>Edit Draft</span>
          </button>
        </div>
      </div>
    </div>
  );
}