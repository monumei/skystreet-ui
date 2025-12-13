import React from 'react';

interface GlitchTextProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
  className?: string;
  color?: string;
}

export const SkyGlitchText: React.FC<GlitchTextProps> = ({ 
  text, 
  as: Component = 'span', 
  className = '',
  color = 'text-skystreet-ink'
}) => {
  return (
    <Component className={`relative inline-block group font-black select-none ${className} ${color}`}>
      <span className="relative z-10">{text}</span>
      <span className="absolute top-0 left-0 -z-10 w-full h-full text-skystreet-alert opacity-0 group-hover:opacity-100 group-hover:animate-pulse translate-x-[3px] translate-y-[2px] pointer-events-none">
        {text}
      </span>
      <span className="absolute top-0 left-0 -z-10 w-full h-full text-skystreet-cyan opacity-0 group-hover:opacity-100 group-hover:animate-wiggle translate-x-[-3px] translate-y-[-2px] pointer-events-none">
        {text}
      </span>
    </Component>
  );
};
