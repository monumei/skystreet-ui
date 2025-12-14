
import { SkyPanel } from '../components/SkyPanel';
import { SkyButton } from '../components/SkyButton';
import { SkyGlitchText } from '../components/SkyGlitchText';
import { SkyCard } from '../components/SkyCard';
import { SkyInput } from '../components/SkyInput';
import { SkyToggle } from '../components/SkyToggle';
import { SkyComicBox } from '../components/SkyComicBox';
import { Link } from 'react-router-dom';

export default function Documentation() {
  return (
    <div className="min-h-screen bg-skystreet-paper p-8 md:p-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Navigation Header */}
        <div className="flex justify-between items-center mb-16 border-b-4 border-skystreet-ink pb-6">
          <div>
            <div className="text-xs font-bold tracking-[0.3em] text-skystreet-cyan mb-2">SYSTEM ARCHITECTURE</div>
            <h1 className="text-5xl md:text-7xl font-black text-skystreet-ink">
              MANUAL<span className="text-skystreet-cyan">.DOC</span>
            </h1>
          </div>
          <Link to="/">
            <SkyButton variant="default">RETURN TO SURFACE</SkyButton>
          </Link>
        </div>

        {/* Section 1: Color System */}
        <section className="mb-24">
          <SkyComicBox text="01. COLOR SPECTRUM" />
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-8">
            {[
              { name: 'INK', hex: '#1e2a78', class: 'bg-skystreet-ink text-white' },
              { name: 'PAPER', hex: '#f0f8ff', class: 'bg-skystreet-paper text-skystreet-ink border-2 border-skystreet-ink' },
              { name: 'CYAN', hex: '#00b4d8', class: 'bg-skystreet-cyan text-white' },
              { name: 'DEEP', hex: '#0a0e29', class: 'bg-skystreet-deep text-white' },
              { name: 'ALERT', hex: '#ef4444', class: 'bg-skystreet-alert text-white' },
            ].map((color) => (
              <div key={color.name} className={`h-40 p-4 flex flex-col justify-between shadow-manga ${color.class}`}>
                <span className="font-bold text-xl">{color.name}</span>
                <span className="font-mono text-sm opacity-80">{color.hex}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Typography & Effects */}
        <section className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <SkyComicBox text="02. TYPOGRAPHY" />
            <div className="mt-8 space-y-8 p-8 border-2 border-skystreet-ink bg-white shadow-manga">
              <div>
                <p className="text-sm text-gray-400 mb-2">HEADLINES (IMPACT)</p>
                <div className="text-6xl font-black text-skystreet-ink uppercase">Blue Signal</div>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-2">BODY (NOTO SANS JP)</p>
                <p className="text-lg text-skystreet-ink leading-relaxed">
                  The whale sings at a frequency only we can hear. 
                  Design systems are the language of the deep.
                </p>
              </div>
            </div>
          </div>
          
          <div>
             <SkyComicBox text="03. VISUAL FX" />
             <div className="mt-8 grid grid-cols-1 gap-6">
                <SkyPanel className="h-32" effect="screentone" borderColor="#00b4d8">
                  <div className="h-full flex items-center justify-center font-bold text-skystreet-ink">
                    SCREENTONE EFFECT
                  </div>
                </SkyPanel>
                <SkyPanel className="h-32 bg-skystreet-ink text-white" effect="speedlines">
                  <div className="h-full flex items-center justify-center font-bold text-skystreet-cyan italic text-2xl">
                    SPEEDLINES EFFECT
                  </div>
                </SkyPanel>
                <div className="bg-white p-6 border-2 border-skystreet-ink shadow-manga">
                  <SkyGlitchText text="GLITCH TEXT RENDERER" className="text-2xl font-black text-skystreet-alert" />
                </div>
             </div>
          </div>
        </section>

        {/* Section 3: Interface Modules */}
        <section className="mb-24">
          <SkyComicBox text="04. INTERFACE MODULES" />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* Input & Form */}
            <div className="space-y-6">
              <h3 className="text-xl font-black text-skystreet-ink border-b-2 border-skystreet-cyan inline-block">INPUTS</h3>
              <SkyInput label="Standard Input" placeholder="Type something..." />
              <SkyInput label="Password" type="password" placeholder="•••••••" />
              <SkyToggle label="Activate System" checked={true} onChange={() => {}} />
              <SkyToggle label="Safety Lock" checked={false} onChange={() => {}} />
            </div>

            {/* Buttons */}
            <div className="space-y-6">
               <h3 className="text-xl font-black text-skystreet-ink border-b-2 border-skystreet-cyan inline-block">ACTIONS</h3>
               <div className="flex flex-col gap-4">
                 <SkyButton>DEFAULT BUTTON</SkyButton>
                 <SkyButton variant="outline">OUTLINE VAßRIANT</SkyButton>
                 <SkyButton variant="ghost">GHOST VARIANT</SkyButton>
                 <SkyButton variant="alert">ALERT VARIANT</SkyButton>
               </div>
            </div>

            {/* Cards */}
            <div className="space-y-6">
              <h3 className="text-xl font-black text-skystreet-ink border-b-2 border-skystreet-cyan inline-block">DATA DISPLAY</h3>
              <SkyCard title="System Load" value="42%" trend="STABLE" trendUp={true} />
              <div className="p-4 border-2 border-skystreet-ink bg-white shadow-manga">
                <p className="font-bold mb-2">Comic Box Util</p>
                <SkyComicBox text="NARRATIVE CONTEXT" />
              </div>
            </div>

          </div>
        </section>

        <div className="text-center text-skystreet-ink/50 font-bold border-t-2 border-skystreet-ink/20 pt-12">
          SKYSTREET UI DESIGN SYSTEM // V1.0.0
        </div>

      </div>
    </div>
  );
}
