import React from 'react';

export interface VerticalTextProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
}

export const SkyVerticalText: React.FC<VerticalTextProps> = ({ text, className = '', ...props }) => {
  return (
    <div
      className={`writing-vertical font-bold text-skystreet-ink/60 border-r-2 border-skystreet-ink/20 pr-4 h-full flex items-center justify-center pointer-events-none select-none ${className}`}
      {...props}
    >
      {text}
    </div>
  );
};