import React from 'react';

export interface SkyToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
}

export const SkyToggle: React.FC<SkyToggleProps> = ({ checked, onChange, label }) => {
  return (
    <div 
      className="inline-flex items-center gap-4 cursor-pointer group select-none relative" 
      onClick={() => onChange(!checked)}
      role="switch"
      aria-checked={checked}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onChange(!checked);
        }
      }}
    >
      <div className={`
        relative w-16 h-8 border-2 border-skystreet-ink transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]
        ${checked ? 'bg-skystreet-ink shadow-[4px_4px_0px_#00b4d8]' : 'bg-white shadow-[4px_4px_0px_rgba(30,42,120,0.1)]'}
        group-hover:translate-x-[-1px] group-hover:translate-y-[-1px] group-hover:shadow-[6px_6px_0px_rgba(30,42,120,0.2)]
      `}>
        {/* Track Pattern */}
        <div className="absolute inset-x-2 top-1/2 h-[2px] bg-gray-200 -translate-y-1/2 z-0 opacity-50" />

        {/* Thumb */}
        <div className={`
          absolute top-[-2px] bottom-[-2px] w-8 bg-white border-2 border-skystreet-ink z-10 
          transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
          flex items-center justify-center
          ${checked ? 'translate-x-[calc(100%+2px)] border-skystreet-cyan' : 'translate-x-[-2px]'}
        `}>
           <div className={`w-3 h-3 transition-all duration-300 ${checked ? 'bg-skystreet-cyan rotate-90 scale-110' : 'bg-gray-300 rotate-45'}`} />
        </div>
      </div>
      {label && (
        <span className={`font-bold uppercase tracking-wider text-sm transition-colors duration-200 ${checked ? 'text-skystreet-ink' : 'text-gray-400'} group-hover:text-skystreet-cyan`}>
          {label}
        </span>
      )}
    </div>
  )
}
