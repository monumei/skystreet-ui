import React from 'react';

export interface SkyCardProps {
  title: string;
  value: string;
  trend?: string;
  trendUp?: boolean;
}

export const SkyCard: React.FC<SkyCardProps> = ({ title, value, trend, trendUp }) => {
  return (
    <div className="relative p-6 bg-white dark:bg-black border-2 border-skystreet-ink dark:border-skystreet-neon shadow-manga group hover:-translate-y-1 transition-transform w-full">
      {/* Corner Accents */}
      <div className="absolute top-0 right-0 w-0 h-0 border-t-[16px] border-r-[16px] border-t-transparent border-r-skystreet-ink dark:border-r-skystreet-neon"></div>
      <div className="absolute bottom-0 left-0 w-2 h-2 bg-skystreet-cyan dark:bg-skystreet-neon"></div>
      
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">{title}</h3>
        {/* Decorative ID */}
        <div className="text-[10px] font-mono text-skystreet-deep dark:text-skystreet-cyan opacity-50">ID_94</div>
      </div>
      
      <div className="flex items-end gap-3 justify-between">
        <span className="text-4xl font-black text-skystreet-ink dark:text-white tracking-tight">{value}</span>
        {trend && (
          <span className={`text-sm font-bold px-2 py-0.5 border border-current ${trendUp ? 'text-skystreet-cyan' : 'text-skystreet-alert'}`}>
            {trend}
          </span>
        )}
      </div>
      
      {/* Decorative Loading Bar */}
      <div className="mt-4 h-1 w-full bg-gray-100 dark:bg-gray-800 overflow-hidden relative">
         <div className="absolute top-0 left-0 h-full w-1/3 bg-skystreet-ink dark:bg-skystreet-cyan group-hover:animate-marquee"></div>
      </div>
    </div>
  );
};
