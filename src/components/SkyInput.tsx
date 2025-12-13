import React, { useState } from 'react';

interface SkyInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const SkyInput: React.FC<SkyInputProps> = ({ label, className = '', ...props }) => {
  const [focused, setFocused] = useState(false);

  return (
    <div className="group w-full">
      <div className="flex justify-between items-end mb-1 ml-1">
        <label className={`text-xs font-bold uppercase transition-colors ${focused ? 'text-skystreet-cyan' : 'text-skystreet-ink'}`}>
          {label}
        </label>
        {focused && <span className="text-[10px] text-skystreet-cyan animate-pulse">EDITING</span>}
      </div>
      
      <div className="relative">
        <input 
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`
            w-full bg-white border-2 border-skystreet-ink p-3 outline-none font-bold text-skystreet-ink
            placeholder:text-gray-300
            focus:shadow-[4px_4px_0px_#00b4d8] focus:-translate-y-[2px] focus:-translate-x-[2px]
            transition-all duration-200
            ${className}
          `}
          {...props}
        />
        {/* Corner Decor on Focus */}
        <div className={`absolute top-0 right-0 w-2 h-2 bg-skystreet-cyan transition-opacity pointer-events-none ${focused ? 'opacity-100' : 'opacity-0'}`} />
        <div className={`absolute bottom-0 left-0 w-2 h-2 bg-skystreet-cyan transition-opacity pointer-events-none ${focused ? 'opacity-100' : 'opacity-0'}`} />
      </div>
    </div>
  );
};
