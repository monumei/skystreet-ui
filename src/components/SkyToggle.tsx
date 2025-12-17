import React from 'react';

export interface SkyToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
}

export const SkyToggle: React.FC<SkyToggleProps> = ({ checked, onChange, label }) => {
  return (
    <div className="inline-flex items-center gap-4 cursor-pointer group select-none" onClick={() => onChange(!checked)}>
      <div className={`
        relative w-16 h-8 border-2 border-skystreet-ink transition-all duration-200
        ${checked ? 'bg-skystreet-ink shadow-[0_0_10px_#00b4d8]' : 'bg-white shadow-none'}
      `}>
        {/* Track Pattern */}
        <div className="absolute inset-x-2 top-1/2 h-[2px] bg-gray-200 -translate-y-1/2 z-0" />

        {/* Thumb */}
        <div className={`
          absolute top-0 bottom-0 w-8 bg-white border-2 border-skystreet-ink z-10 transition-all duration-300 ease-out flex items-center justify-center
          ${checked ? 'translate-x-[100%] border-skystreet-cyan' : 'translate-x-0'}
        `}>
           <div className={`w-2 h-2 ${checked ? 'bg-skystreet-cyan' : 'bg-gray-300'} rotate-45 transform transition-colors`} />
        </div>
      </div>
      {label && (
        <span className={`font-bold uppercase tracking-wider text-sm transition-colors ${checked ? 'text-skystreet-ink' : 'text-gray-400'}`}>
          {label}
        </span>
      )}
    </div>
  )
}
