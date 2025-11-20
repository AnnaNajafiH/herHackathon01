import { useState } from 'react';
import { X, Calendar, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

interface SchedulingModalProps {
  onClose: () => void;
  onSchedule: () => void;
}

export function SchedulingModal({ onClose, onSchedule }: SchedulingModalProps) {
  const [selectedDate, setSelectedDate] = useState('2025-11-21');
  const [selectedTime, setSelectedTime] = useState('14:30');
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(['instagram']);

  const togglePlatform = (platform: string) => {
    setSelectedPlatforms(prev =>
      prev.includes(platform)
        ? prev.filter(p => p !== platform)
        : [...prev, platform]
    );
  };

  return (
    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-end">
      <div className="w-full bg-gradient-to-br from-[#fef5f8] via-[#faf8ff] to-[#f0f9ff] rounded-t-[2rem] shadow-2xl animate-slide-up">
        {/* Header */}
        <div className="px-6 py-5 border-b border-white/40 flex items-center justify-between">
          <div>
            <h2 className="text-[#2d2d3a]">Schedule Post</h2>
            <p className="text-xs text-[#8b8b9a]">Choose date, time & platform</p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-xl bg-white/60 backdrop-blur-md border border-white/80 shadow-[2px_2px_8px_rgba(209,196,233,0.2),-2px_-2px_8px_rgba(255,255,255,0.9)] flex items-center justify-center hover:scale-95 transition-transform"
          >
            <X className="w-5 h-5 text-[#2d2d3a]" />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-6 max-h-[500px] overflow-y-auto">
          {/* Date Selection */}
          <div className="mb-6">
            <label className="flex items-center gap-2 text-[#8b8b9a] mb-3">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">Select Date</span>
            </label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full px-4 py-3 rounded-2xl bg-white/60 backdrop-blur-xl border border-white/80 shadow-[4px_4px_16px_rgba(209,196,233,0.2),-2px_-2px_12px_rgba(255,255,255,0.9)] text-[#2d2d3a] focus:outline-none focus:ring-2 focus:ring-[#a078d5]/30"
            />
          </div>

          {/* Time Selection */}
          <div className="mb-6">
            <label className="flex items-center gap-2 text-[#8b8b9a] mb-3">
              <Clock className="w-4 h-4" />
              <span className="text-sm">Select Time</span>
            </label>
            <input
              type="time"
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              className="w-full px-4 py-3 rounded-2xl bg-white/60 backdrop-blur-xl border border-white/80 shadow-[4px_4px_16px_rgba(209,196,233,0.2),-2px_-2px_12px_rgba(255,255,255,0.9)] text-[#2d2d3a] focus:outline-none focus:ring-2 focus:ring-[#a078d5]/30"
            />
          </div>

          {/* Platform Selection */}
          <div className="mb-6">
            <label className="text-[#8b8b9a] mb-3 block text-sm">
              Select Platforms
            </label>
            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={() => togglePlatform('instagram')}
                className={`p-4 rounded-2xl border transition-all ${
                  selectedPlatforms.includes('instagram')
                    ? 'bg-gradient-to-br from-[#f093fb]/20 to-[#f5576c]/20 border-[#f093fb]/40 shadow-[4px_4px_16px_rgba(240,147,251,0.3)]'
                    : 'bg-white/40 border-white/60 shadow-[2px_2px_8px_rgba(209,196,233,0.2)]'
                } hover:scale-105`}
              >
                <Instagram className={`w-6 h-6 mx-auto mb-2 ${selectedPlatforms.includes('instagram') ? 'text-[#f5576c]' : 'text-[#8b8b9a]'}`} />
                <div className="text-xs text-[#2d2d3a]">Instagram</div>
              </button>

              <button
                onClick={() => togglePlatform('facebook')}
                className={`p-4 rounded-2xl border transition-all ${
                  selectedPlatforms.includes('facebook')
                    ? 'bg-gradient-to-br from-[#4267B2]/20 to-[#5890ff]/20 border-[#4267B2]/40 shadow-[4px_4px_16px_rgba(66,103,178,0.3)]'
                    : 'bg-white/40 border-white/60 shadow-[2px_2px_8px_rgba(209,196,233,0.2)]'
                } hover:scale-105`}
              >
                <Facebook className={`w-6 h-6 mx-auto mb-2 ${selectedPlatforms.includes('facebook') ? 'text-[#4267B2]' : 'text-[#8b8b9a]'}`} />
                <div className="text-xs text-[#2d2d3a]">Facebook</div>
              </button>

              <button
                onClick={() => togglePlatform('twitter')}
                className={`p-4 rounded-2xl border transition-all ${
                  selectedPlatforms.includes('twitter')
                    ? 'bg-gradient-to-br from-[#1DA1F2]/20 to-[#14b8d4]/20 border-[#1DA1F2]/40 shadow-[4px_4px_16px_rgba(29,161,242,0.3)]'
                    : 'bg-white/40 border-white/60 shadow-[2px_2px_8px_rgba(209,196,233,0.2)]'
                } hover:scale-105`}
              >
                <Twitter className={`w-6 h-6 mx-auto mb-2 ${selectedPlatforms.includes('twitter') ? 'text-[#1DA1F2]' : 'text-[#8b8b9a]'}`} />
                <div className="text-xs text-[#2d2d3a]">Twitter</div>
              </button>
            </div>
          </div>

          {/* Scheduled Time Preview */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-[#e8f5ff]/60 to-[#f0e7ff]/60 backdrop-blur-xl border border-[#a078d5]/20">
            <div className="text-xs text-[#8b8b9a] mb-1">Scheduled for:</div>
            <div className="text-[#2d2d3a]">
              {new Date(selectedDate + 'T' + selectedTime).toLocaleString('en-US', {
                weekday: 'short',
                month: 'short',
                day: 'numeric',
                hour: 'numeric',
                minute: '2-digit'
              })}
            </div>
            <div className="text-xs text-[#8b8b9a] mt-1">
              {selectedPlatforms.length} platform{selectedPlatforms.length !== 1 ? 's' : ''} selected
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="px-6 pb-6 pt-4 border-t border-white/40">
          <button
            onClick={onSchedule}
            disabled={selectedPlatforms.length === 0}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#a078d5] to-[#d4a5d8] text-white shadow-[0_8px_24px_rgba(160,120,213,0.4)] hover:shadow-[0_12px_32px_rgba(160,120,213,0.5)] transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            Confirm Schedule
          </button>
        </div>
      </div>
    </div>
  );
}
