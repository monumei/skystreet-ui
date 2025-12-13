import React from 'react';

interface SkyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'alert';
}

export const SkyButton: React.FC<SkyButtonProps> = ({ 
  children, 
  className = '', 
  variant = 'primary',
  ...props 
}) => {
  const colors = {
    primary: {
      bg: 'bg-skystreet-ink',
      border: 'border-skystreet-cyan',
      shadow: 'shadow-[#00b4d8]',
      hover: 'hover:bg-skystreet-deep'
    },
    alert: {
      bg: 'bg-skystreet-alert',
      border: 'border-black',
      shadow: 'shadow-black',
      hover: 'hover:bg-red-600'
    }
  };

  const theme = colors[variant];

  return (
    <button 
      className={`
        relative overflow-hidden px-8 py-4 ${theme.bg} text-white font-black uppercase tracking-wider
        border-2 ${theme.border} shadow-[4px_4px_0px_var(--tw-shadow-color)] ${theme.shadow}
        active:translate-y-1 active:translate-x-1 active:shadow-none
        transition-all duration-100
        ${theme.hover}
        group
        ${className}
      `}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {variant === 'primary' && <span className="w-2 h-2 bg-skystreet-cyan rotate-45" />}
        {children}
      </span>
      {/* Sweep Effect */}
      <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
    </button>
  );
};
