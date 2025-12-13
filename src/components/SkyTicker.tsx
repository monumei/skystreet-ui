import React from 'react';

interface TickerTapeProps {
  text: string;
  speed?: number;
}

export const SkyTicker: React.FC<TickerTapeProps> = ({ text }) => {
  const repeatedText = Array(12).fill(text);
  
  return (
    <div className="w-full overflow-hidden bg-skystreet-ink text-skystreet-cyan py-3 border-y-4 border-skystreet-cyan shadow-manga mb-8">
      <div className="whitespace-nowrap animate-marquee flex gap-8">
        {repeatedText.map((item, index) => (
          <span key={index} className="text-2xl font-black uppercase tracking-widest italic">
            {item} <span className="text-white mx-2">///</span>
          </span>
        ))}
      </div>
    </div>
  );
};
