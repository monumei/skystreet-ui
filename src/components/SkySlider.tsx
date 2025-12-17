import React, { useRef, useState, useEffect } from 'react';

export interface SkySliderProps {
  min?: number;
  max?: number;
  step?: number;
  value: number;
  onChange: (value: number) => void;
  label?: string;
}

export const SkySlider: React.FC<SkySliderProps> = ({ 
  min = 0, 
  max = 100, 
  step = 1, 
  value, 
  onChange,
  label 
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  const percentage = ((value - min) / (max - min)) * 100;

  const handleInteraction = (clientX: number) => {
    if (!trackRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const rawValue = (x / rect.width) * (max - min) + min;
    const steppedValue = Math.round(rawValue / step) * step;
    onChange(Math.max(min, Math.min(max, steppedValue)));
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    handleInteraction(e.clientX);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    handleInteraction(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) handleInteraction(e.clientX);
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging) handleInteraction(e.touches[0].clientX);
    };
    const handleStop = () => setIsDragging(false);

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleStop);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleStop);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleStop);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleStop);
    };
  }, [isDragging]);

  return (
    <div className="w-full select-none">
       {label && (
         <div className="flex justify-between mb-2 font-bold text-xs uppercase tracking-wider text-skystreet-ink">
           <span>{label}</span>
           <span className="text-skystreet-cyan">{value}</span>
         </div>
       )}
       
       <div 
         className="relative h-8 flex items-center cursor-pointer group"
         ref={trackRef}
         onMouseDown={handleMouseDown}
         onTouchStart={handleTouchStart}
       >
         {/* Custom Track */}
         <div className="absolute w-full h-3 bg-white border-2 border-skystreet-ink/20 group-hover:border-skystreet-ink transition-colors skew-x-[-12deg]"></div>
         
         {/* Fill */}
         <div 
           className="absolute h-3 bg-skystreet-ink border-y-2 border-l-2 border-skystreet-ink skew-x-[-12deg]"
           style={{ width: `${percentage}%` }}
         >
            {/* Striped Fill Pattern */}
            <div className="w-full h-full bg-[repeating-linear-gradient(45deg,transparent,transparent_4px,rgba(255,255,255,0.2)_4px,rgba(255,255,255,0.2)_8px)]" />
         </div>

         {/* Thumb */}
         <div 
           className="absolute w-4 h-6 bg-skystreet-cyan border-2 border-white shadow-[2px_2px_0px_rgba(0,0,0,0.2)] hover:scale-110 transition-transform z-10"
           style={{ left: `calc(${percentage}% - 8px)` }}
         />
       </div>
    </div>
  );
};
