import React from 'react';

interface SkySidebarProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  position?: 'left' | 'right';
}

export const SkySidebar: React.FC<SkySidebarProps> = ({ 
  children, 
  isOpen, 
  onClose, 
  position = 'left' 
}) => {
  return (
    <>
      {/* Backdrop */}
      <div 
        className={`
          fixed inset-0 bg-skystreet-ink/50 backdrop-blur-sm z-40 transition-opacity duration-300
          ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
        onClick={onClose}
      />
      
      {/* Sidebar Panel */}
      <div 
        className={`
          fixed top-0 bottom-0 w-80 bg-white border-r-4 border-skystreet-ink z-50 transition-transform duration-300 ease-out flex flex-col
          ${position === 'left' ? 'left-0 border-r-4' : 'right-0 border-l-4 border-r-0'}
          ${isOpen 
            ? 'translate-x-0' 
            : position === 'left' ? '-translate-x-full' : 'translate-x-full'
          }
        `}
      >
        {/* Header Decor */}
        <div className="h-2 bg-gradient-to-r from-skystreet-ink via-skystreet-cyan to-skystreet-ink animate-gradient-x w-full" />
        
        <div className="flex-1 overflow-y-auto p-6 relative">
             {/* Background Pattern */}
             <div className="absolute inset-0 bg-screentone opacity-10 pointer-events-none" />
             <div className="relative z-10">
               {children}
             </div>
        </div>

        {/* Footer Close Button area for mobile mainly */}
        <div className="p-4 border-t-2 border-skystreet-ink bg-gray-50 flex justify-end">
          <button 
             onClick={onClose}
             className="text-xs font-black uppercase tracking-widest text-skystreet-ink hover:text-skystreet-alert transition-colors"
          >
            Close Panel [X]
          </button>
        </div>
      </div>
    </>
  );
};
