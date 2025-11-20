import { useState } from 'react';
import { SkinfluenceDashboard } from './components/SkinfluenceDashboard';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f7fb] via-[#faf9fc] to-[#f5f4f8] flex items-center justify-center p-6">
      {/* iPhone X Mockup Container */}
      <div className="relative w-[375px] h-[812px] bg-black rounded-[3rem] shadow-2xl overflow-hidden">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[180px] h-[30px] bg-black rounded-b-3xl z-50" />
        
        {/* Screen Content */}
        <div className="absolute inset-0 mt-[30px] mb-[8px] mx-[8px] bg-gradient-to-br from-[#f8f7fb] via-[#faf9fc] to-[#f5f4f8] rounded-[2.5rem] overflow-hidden">
          {/* Status Bar */}
          <div className="h-[44px] flex items-center justify-between px-8 pt-2">
            <span className="text-xs text-[#4a4a5e]">9:41</span>
            <div className="flex items-center gap-1">
              <svg className="w-4 h-3 text-[#4a4a5e]" viewBox="0 0 16 12" fill="currentColor">
                <path d="M0 4h2v4H0V4zm3 2h2v2H3V6zm3-2h2v4H6V4zm3 1h2v3H9V5zm3-1h2v4h-2V4z" opacity="0.4"/>
              </svg>
              <svg className="w-4 h-3 text-[#4a4a5e]" viewBox="0 0 16 12" fill="currentColor">
                <rect x="1" y="1" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <rect x="16" y="3.5" width="2" height="5" rx="1" fill="currentColor"/>
              </svg>
            </div>
          </div>

          {/* Main Content */}
          <div className="h-[calc(100%-44px)] overflow-hidden">
            <SkinfluenceDashboard />
          </div>
        </div>
      </div>
    </div>
  );
}
