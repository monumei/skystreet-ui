import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Github, ArrowRight, Terminal, Zap, Layout } from 'lucide-react';
import { SkyButton } from '../components/SkyButton';
import { SkyGlitchText } from '../components/SkyGlitchText';
import { SkyCard } from '../components/SkyCard';
import { SkyCode } from '../components/SkyCode';
import { SkyTicker } from '../components/SkyTicker';
import { SkyThemeToggle } from '../components/SkyThemeToggle';
import { SkyComicBox } from '../components/SkyComicBox';
import { SkyPanel } from '../components/SkyPanel';
import { SkyVerticalText } from '../components/SkyVerticalText';
import { SkySlider } from '../components/SkySlider';
import { SkySkeleton } from '../components/SkySkeleton';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [sliderVal, setSliderVal] = useState(65);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized mouse position (-1 to 1)
      setMousePos({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-skystreet-paper dark:bg-skystreet-deep text-skystreet-ink dark:text-skystreet-star font-sans transition-colors duration-300 overflow-x-hidden">
      
      {/* Navbar */}
      <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b-2 ${scrolled ? 'bg-white/90 dark:bg-skystreet-deep/90 backdrop-blur-md border-skystreet-ink dark:border-skystreet-cyan py-3' : 'bg-transparent border-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className={`w-8 h-8 flex items-center justify-center font-black text-white bg-skystreet-ink rounded-sm transition-transform hover:rotate-12`}>
              S
            </div>
            <span className="text-xl font-black tracking-tighter italic uppercase">SkyStreet<span className="text-skystreet-cyan">UI</span></span>
          </div>
          
          <div className="flex items-center gap-6">
             <Link to="/components" className="hidden md:block font-bold text-sm tracking-widest hover:text-skystreet-cyan transition-colors">COMPONENTS</Link>
             <a href="https://github.com/monumei/skystreet-ui" target="_blank" rel="noopener noreferrer" className="hidden md:block font-bold text-sm tracking-widest hover:text-skystreet-cyan transition-colors">GITHUB</a>
             <div className="h-6 w-[2px] bg-skystreet-ink/20 dark:bg-skystreet-cyan/20 mx-2"></div>
             <SkyThemeToggle />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 md:pt-48 md:pb-32 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Content */}
          <div className="relative z-10 space-y-8">
             <div>
               <SkyComicBox text="REACT UI LIBRARY" />
               <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-skystreet-ink dark:text-white mt-4 mb-6">
                 BUILD WITH <br/>
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-skystreet-cyan to-blue-600 dark:from-skystreet-neon dark:to-cyan-200">NARRATIVE</span>
               </h1>
               <p className="text-xl font-medium text-skystreet-ink/70 dark:text-skystreet-cyan/70 max-w-lg leading-relaxed">
                 A high-impact component library designed for the Blue Signal. 
                 Manga aesthetics meet modern React performance.
               </p>
             </div>

             <div className="flex flex-wrap gap-4">
               <Link to="/components">
                 <SkyButton className="px-8 py-5 text-lg">
                    Start Building <ArrowRight size={20} />
                 </SkyButton>
               </Link>
               <SkyButton variant="outline" className="px-8 py-5 text-lg" onClick={() => window.open('https://github.com/monumei/skystreet-ui', '_blank')}>
                    <Github size={20} /> GitHub
               </SkyButton>
             </div>
          </div>

          {/* Right: Floating Visuals (Parallax) */}
          <div className="relative h-[600px] hidden lg:block perspective-1000">
             {/* Background Blob */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-skystreet-cyan/20 rounded-full blur-[100px] animate-pulse" />

             {/* Floating Elements (Parallax based on mousePos) */}
             <div 
               className="absolute top-10 left-10 z-30 transition-transform duration-100 ease-out"
               style={{ transform: `translate(${mousePos.x * -20}px, ${mousePos.y * -20}px) rotate(-5deg)` }}
             >
                <SkyCard title="Performance" value="99%" trend="OPTIMAL" trendUp={true} />
             </div>

             <div 
               className="absolute top-40 right-10 z-20 transition-transform duration-200 ease-out"
               style={{ transform: `translate(${mousePos.x * 10}px, ${mousePos.y * 10}px) rotate(3deg)` }}
             >
                <SkyPanel className="w-64 h-48 bg-white dark:bg-skystreet-deep" borderColor="#00b4d8">
                   <div className="h-full flex items-center justify-center p-4">
                      <SkyGlitchText text="SIGNAL FOUND" className="text-2xl" color="text-skystreet-ink dark:text-skystreet-neon" />
                   </div>
                </SkyPanel>
             </div>

            <div 
               className="absolute bottom-20 left-20 z-10 transition-transform duration-300 ease-out"
               style={{ transform: `translate(${mousePos.x * -15}px, ${mousePos.y * -15}px) rotate(5deg)` }}
             >
                <div className="bg-white dark:bg-black p-4 border-2 border-skystreet-ink dark:border-skystreet-neon shadow-manga rounded w-80">
                   <SkyTicker text="COMPONENT SYSTEM ONLINE // READY" />
                   <div className="mt-4 flex gap-2">
                      <SkyButton variant="outline" className="text-xs py-2 px-4">Accept</SkyButton>
                      <SkyButton className="text-xs py-2 px-4">Deny</SkyButton>
                   </div>
                </div>
             </div>

             {/* New Element: Vertical Text Zone */}
             <div 
               className="absolute right-0 top-1/4 z-0 transition-transform duration-500 ease-out opacity-40 mix-blend-multiply dark:mix-blend-screen"
               style={{ transform: `translate(${mousePos.x * 5}px, ${mousePos.y * 20}px)` }}
             >
                <SkyVerticalText text="ZONE: A-1 // SECTOR 7" className="h-64 text-xs tracking-widest text-skystreet-ink dark:text-skystreet-cyan" />
             </div>

             {/* New Element: Slider Panel */}
             <div 
               className="absolute bottom-40 -right-4 z-20 transition-transform duration-200 ease-out"
               style={{ transform: `translate(${mousePos.x * -10}px, ${mousePos.y * -10}px) rotate(-2deg)` }}
             >
                <div className="bg-white dark:bg-skystreet-deep/90 p-4 border-2 border-skystreet-ink dark:border-skystreet-cyan w-60 shadow-[4px_4px_0px_#00b4d8] backdrop-blur-sm transform hover:scale-105 transition-transform">
                   <SkySlider value={sliderVal} onChange={setSliderVal} label="Sync Rate" />
                   <div className="mt-2 flex justify-between text-[10px] uppercase font-bold text-skystreet-ink/50">
                      <span>Min</span>
                      <span>Max</span>
                   </div>
                </div>
             </div>

             {/* New Element: Data Loading */}
             <div 
               className="absolute top-24 left-1/3 z-0 transition-transform duration-300 ease-out"
               style={{ transform: `translate(${mousePos.x * 25}px, ${mousePos.y * 5}px) rotate(1deg)` }}
             >
                <div className="bg-white/80 dark:bg-black/80 p-3 border border-skystreet-ink/20 dark:border-skystreet-neon/30 w-48 space-y-3 backdrop-blur-sm -skew-x-6">
                    <div className="flex justify-between items-center border-b border-dashed border-gray-400 pb-1 mb-2">
                        <span className="text-[10px] font-black uppercase">Data Upload</span>
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-900 p-2">
                      <SkySkeleton variant="rect" height={6} className="mb-2 w-full" />
                      <SkySkeleton variant="rect" height={6} className="mb-2 w-3/4" />
                      <SkySkeleton variant="rect" height={6} className="w-1/2" />
                    </div>
                </div>
             </div>
          </div>
        </div>
      </header>

      <SkyTicker text="THE WORLD ENDS WITH YOU // BUT THE SIGNAL REMAINS // BUILD SOMETHING REAL // SKYSTREET UI // REACT // TYPESCRIPT // TAILWIND" />

      {/* Features Grid */}
      <section className="py-24 container mx-auto px-6">
         <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-skystreet-ink dark:text-white uppercase italic tracking-tighter">
               Why <span className="text-skystreet-cyan">SkyStreet?</span>
            </h2>
            <div className="w-24 h-2 bg-skystreet-ink dark:bg-skystreet-cyan mx-auto mt-4"></div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Layout size={32} />}
              title="Manga Aesthetic"
              desc="Break away from flat design. Use bold borders, screentones, and dynamic shadows."
            />
            <FeatureCard 
              icon={<Zap size={32} />}
              title="High Performance"
              desc="Built on Vite and Tailwind. Zero runtime CSS overhead. Motions that feel instant."
            />
            <FeatureCard 
              icon={<Terminal size={32} />}
              title="Type Safe"
              desc="First-class TypeScript support. Every component is typed for a superior DX."
            />
         </div>
      </section>

      {/* Installation */}
      <section className="py-24 bg-skystreet-ink dark:bg-black text-white relative overflow-hidden">
         <div className="absolute inset-0 bg-screentone opacity-10" />
         
         <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
               <SkyComicBox text="GET STARTED" />
               <h2 className="text-4xl md:text-5xl font-black mt-6 mb-6">
                  INITIATE THE <br/> <span className="text-skystreet-cyan">SEQUENCE</span>
               </h2>
               <p className="text-gray-300 text-lg mb-8 max-w-md">
                  Add SkyStreet to your project in seconds. Compatible with React 18+ and Next.js 14+.
               </p>
            </div>
            
            <div className="w-full">
               <div className="mb-4 flex items-center gap-2">
                  <Terminal size={20} className="text-skystreet-cyan" />
                  <span className="font-mono text-sm text-skystreet-cyan">TERMINAL</span>
               </div>
               <SkyCode 
                 code="npm install skystreet-ui" 
                 language="bash" 
                 className="text-lg"
               />
               <div className="mt-4">
                 <SkyCode 
                   code={`import { SkyButton } from 'skystreet-ui';

export default function App() {
  return <SkyButton>Hello World</SkyButton>;
}`} 
                   language="tsx" 
                 />
               </div>
            </div>
         </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-skystreet-deep border-t-2 border-skystreet-ink dark:border-skystreet-cyan py-12">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
           <div>
              <span className="font-black text-xl italic tracking-tighter">SKYSTREET<span className="text-skystreet-cyan">UI</span></span>
              <p className="text-sm text-skystreet-ink/50 dark:text-skystreet-cyan/50 font-bold mt-1">© 2025 MONUMEI. MIT LICENSE.</p>
           </div>
           
           <div className="flex gap-6 font-bold text-sm tracking-widest text-skystreet-ink dark:text-white">
              <a href="#" className="hover:text-skystreet-cyan transition-colors">GITHUB</a>
              <a href="#" className="hover:text-skystreet-cyan transition-colors">NPM</a>
              <a href="#" className="hover:text-skystreet-cyan transition-colors">TWITTER</a>
           </div>
        </div>
      </footer>

    </div>
  );
}

// Sub-component for features
function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="p-8 border-2 border-skystreet-ink dark:border-skystreet-cyan bg-white dark:bg-skystreet-deep shadow-[8px_8px_0px_rgba(30,42,120,0.1)] hover:-translate-y-2 hover:shadow-[12px_12px_0px_#00b4d8] transition-all duration-300 group">
       <div className="w-16 h-16 bg-skystreet-paper dark:bg-skystreet-ink rounded-full flex items-center justify-center text-skystreet-ink dark:text-skystreet-cyan mb-6 group-hover:scale-110 transition-transform">
          {icon}
       </div>
       <h3 className="text-xl font-black uppercase mb-3 text-skystreet-ink dark:text-white">{title}</h3>
       <p className="text-skystreet-ink/70 dark:text-skystreet-cyan/70 font-medium leading-relaxed">{desc}</p>
    </div>
  )
}
