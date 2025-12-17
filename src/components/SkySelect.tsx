import React, { useState, useRef, useEffect } from 'react';

interface SkySelectOption {
  value: string;
  label: string;
}

export interface SkySelectProps {
  options: SkySelectOption[];
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export const SkySelect: React.FC<SkySelectProps> = ({ 
  options, 
  value, 
  onChange, 
  placeholder = 'SELECT OPTION',
  className = ''
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOriginal = options.find(opt => opt.value === value);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={`relative w-full ${className}`} ref={containerRef}>
      {/* Select Trigger */}
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className={`
          flex items-center justify-between px-4 py-3 bg-white border-2 cursor-pointer transition-all duration-200
          ${isOpen ? 'border-skystreet-cyan translate-x-1 translate-y-1 shadow-none' : 'border-skystreet-ink shadow-manga hover:-translate-y-0.5 hover:shadow-manga-hover'}
        `}
      >
        <span className={`font-bold uppercase tracking-wider ${!selectedOriginal ? 'text-gray-400' : 'text-skystreet-ink'}`}>
          {selectedOriginal ? selectedOriginal.label : placeholder}
        </span>
        <div className={`w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] transition-transform duration-200 ${isOpen ? 'rotate-180 border-t-skystreet-cyan' : 'border-t-skystreet-ink'}`} />
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full mt-2 bg-white border-2 border-skystreet-ink z-50 shadow-manga animate-in fade-in slide-in-from-top-2 duration-200">
           {options.map((option) => (
             <div 
               key={option.value}
               className={`
                 px-4 py-3 cursor-pointer border-b border-gray-100 last:border-0 font-bold uppercase tracking-wide
                 hover:bg-skystreet-cyan hover:text-white transition-colors
                 ${value === option.value ? 'bg-skystreet-ink/5 text-skystreet-ink' : 'text-gray-600'}
               `}
               onClick={() => {
                 onChange(option.value);
                 setIsOpen(false);
               }}
             >
               {option.label}
             </div>
           ))}
        </div>
      )}
    </div>
  );
};
