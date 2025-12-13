import React from 'react';

interface SkySkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: string | number;
  height?: string | number;
  variant?: 'rect' | 'circle' | 'text';
}

export const SkySkeleton: React.FC<SkySkeletonProps> = ({ 
  width, 
  height, 
  variant = 'rect',
  className = '',
  style,
  ...props 
}) => {
  const baseStyles = {
    width: width || '100%',
    height: height || (variant === 'text' ? '1em' : '100%'),
  };

  return (
    <div 
      className={`
        relative overflow-hidden bg-gray-200 border-2 border-transparent
        ${variant === 'circle' ? 'rounded-full' : 'rounded-none'}
        ${className}
      `}
      style={{ ...baseStyles, ...style }}
      {...props}
    >
      {/* Moving Shine Effect */}
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12" />
      
      {/* Decorative corners for tech feel (only if rect) */}
      {variant === 'rect' && (
        <>
          <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-skystreet-ink/20" />
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-skystreet-ink/20" />
        </>
      )}
    </div>
  );
};
