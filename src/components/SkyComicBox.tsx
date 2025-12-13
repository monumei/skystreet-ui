export const SkyComicBox = ({ text, color = '#1e2a78' }: { text: string, color?: string }) => (
  <div 
    className="inline-block px-6 py-2 text-white font-black text-sm tracking-widest mb-4 shadow-md"
    style={{ 
      backgroundColor: color,
      clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)' 
    }}
  >
    {text}
  </div>
);