import React from 'react';
import { Copy } from 'lucide-react';

interface SkyCodeProps {
  code: string;
  language?: string;
  className?: string;
}

export const SkyCode: React.FC<SkyCodeProps> = ({ code, language = 'tsx', className = '' }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    // Could add a toast here, but for now simple copy
  };

  return (
    <div className={`relative group rounded-none border-2 border-skystreet-ink dark:border-skystreet-neon bg-skystreet-paper dark:bg-skystreet-deep text-skystreet-ink dark:text-skystreet-star font-mono text-sm leading-relaxed shadow-manga dark:shadow-glow ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 border-b-2 border-skystreet-ink dark:border-skystreet-neon bg-white dark:bg-black/20">
        <div className="flex gap-2">
           <div className="w-3 h-3 border-2 border-skystreet-ink bg-white"></div>
           <div className="w-3 h-3 border-2 border-skystreet-ink bg-skystreet-cyan"></div>
        </div>
        <div className="flex items-center gap-3">
             <span className="text-xs font-black text-skystreet-ink dark:text-skystreet-neon tracking-widest uppercase">{language}</span>
             <button 
                onClick={handleCopy}
                className="text-skystreet-ink/50 hover:text-skystreet-cyan transition-colors dark:text-skystreet-cyan/50 dark:hover:text-skystreet-neon"
                aria-label="Copy code"
             >
                <Copy size={14} />
             </button>
        </div>
      </div>
      
      {/* Dotted Background Overlay */}
      <div className="absolute inset-0 bg-screentone opacity-20 pointer-events-none" />

      <div className="p-4 overflow-x-auto relative z-10">
        <pre>
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
};
