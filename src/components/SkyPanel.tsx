import React from 'react';

interface SkyPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  /** Background image URL */
  src?: string; 
  /** Border color (hex) - defaults to Ultramarine Ink */
  borderColor?: string;
  /** Shadow color (hex) */
  shadowColor?: string;
  /** Effect overlay */
  effect?: 'none' | 'screentone' | 'speedlines';
  /** Label tag (e.g. "SCENE 01") */
  tag?: string;
  /** Is this a clickable interactive panel? */
  interactive?: boolean;
}

export const SkyPanel: React.FC<SkyPanelProps> = ({
  children,
  src,
  borderColor = '#1e2a78',
  shadowColor = 'rgba(30, 42, 120, 0.2)',
  effect = 'none',
  tag,
  interactive = true,
  className = '',
  style,
  ...props
}) => {
  
  // Cast style to accept custom CSS variables
  const dynamicStyles = {
    '--shadow-color': shadowColor,
    '--panel-border': borderColor,
    ...style,
  } as React.CSSProperties;

  return (
    <div
      className={`
        relative bg-white border-[3px] overflow-hidden transition-all duration-300 ease-out
        ${interactive ? 'hover:-translate-x-1 hover:-translate-y-1 hover:shadow-manga-hover shadow-manga cursor-pointer group' : 'shadow-manga'}
        ${className}
      `}
      style={{
        borderColor: borderColor,
        ...dynamicStyles
      }}
      {...props}
    >
      {/* Background Image Layer */}
      {src && (
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url(${src})` }}
        />
      )}

      {/* Effects Layer */}
      {effect === 'screentone' && (
        <div className="absolute inset-0 bg-screentone bg-[length:4px_4px] opacity-30 pointer-events-none mix-blend-overlay" />
      )}
      
      {effect === 'speedlines' && (
        <div className="absolute inset-0 bg-speedlines opacity-20 pointer-events-none" />
      )}

      {/* Content Layer */}
      <div className="relative z-10 h-full w-full">
        {children}
      </div>

      {/* Decorative Tag */}
      {tag && (
        <div 
          className="absolute bottom-0 right-0 px-3 py-1 text-xs font-black bg-white border-t-2 border-l-2 z-20"
          style={{ borderColor: borderColor, color: borderColor }}
        >
          {tag}
        </div>
      )}
    </div>
  );
};