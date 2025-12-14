import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SkyPanel } from '../components/SkyPanel';
import { SkyComicBox } from '../components/SkyComicBox';
import { SkyVerticalText } from '../components/SkyVerticalText';
import { SkyTicker } from '../components/SkyTicker';
import { SkyButton } from '../components/SkyButton';
import { SkyGlitchText } from '../components/SkyGlitchText';
import { SkyTable } from '../components/SkyTable';
import { SkyToggle } from '../components/SkyToggle';
import { SkyCard } from '../components/SkyCard';
import { SkyInput } from '../components/SkyInput';
import { SkySkeleton } from '../components/SkySkeleton';
import { SkySelect } from '../components/SkySelect';
import { SkySidebar } from '../components/SkySidebar';
import { SkySlider } from '../components/SkySlider';

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [sliderValue, setSliderValue] = useState(50);
  const [selectValue, setSelectValue] = useState('opt1');

  return (
    <div className="min-h-screen p-8 md:p-16">
      <SkySidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)}>
        <div className="space-y-6">
          <h3 className="text-xl font-black text-skystreet-ink border-b-2 border-skystreet-cyan pb-2">STORY INDEX</h3>
          <ul className="space-y-4 font-bold text-skystreet-ink/80">
            <li className="hover:text-skystreet-cyan cursor-pointer hover:translate-x-2 transition-transform">PROLOGUE: THE SURFACE</li>
            <li className="hover:text-skystreet-cyan cursor-pointer hover:translate-x-2 transition-transform">CH 1: WHALE SONG</li>
            <li className="hover:text-skystreet-cyan cursor-pointer hover:translate-x-2 transition-transform">CH 2: BLUE SIGNAL</li>
            <li className="hover:text-skystreet-cyan cursor-pointer hover:translate-x-2 transition-transform">EPILOGUE: FLIGHT</li>
            <li className="pt-4 border-t-2 border-dashed border-skystreet-ink/20">
              <Link to="/docs" className="hover:text-skystreet-cyan cursor-pointer hover:translate-x-2 transition-transform block">
                SYSTEM DOCS // MANUAL
              </Link>
            </li>
          </ul>
           <SkyCard title="Story Progress" value="82%" trend="TURNING PAGES" trendUp={true} />
        </div>
      </SkySidebar>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
        
        {/* Header Section */}
        <div className="md:col-span-1 hidden md:block">
           <SkyVerticalText text="BLUE SIGNAL SYSTEM" />
        </div>

        <div className="md:col-span-11">
          <div className="mb-12 flex justify-between items-end">
            <div>
              <SkyComicBox text="PROJECT: WHALE SONG" />
              <h1 className="text-6xl md:text-8xl font-black text-black tracking-tighter">
                SKY<span className="text-skystreet-cyan">STREET</span>
              </h1>
              <p className="mt-4 text-skystreet-ink font-bold max-w-lg text-lg leading-relaxed">
                Pale but strong. A light piercing from the surface. 
                We are dreaming like singing whales, waiting to fly.
                I know we can't become it unless we jump out.
              </p>
            </div>
            <div className="hidden md:flex gap-4">
               <Link to="/docs" className="group">
                  <SkyButton variant="outline">SYSTEM DOCS</SkyButton>
               </Link>
               <SkyButton onClick={() => setIsSidebarOpen(true)}>OPEN STORY</SkyButton>
            </div>
          </div>

          {/* Grid Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
            
            {/* Panel 1: Image & Overlay */}
              <div className="md:col-span-8">
                <SkyPanel 
                className="h-full"
                src="https://images.unsplash.com/photo-1515462277126-2dd0c162007a?q=80&w=1000&auto=format&fit=crop"
                tag="DEPTH: 2000m"
                effect="screentone"
                shadowColor="#00b4d8"
              >
                <div className="absolute top-6 left-6 text-6xl font-black text-white drop-shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  シグナル
                </div>
                <div className="absolute bottom-0 left-0 w-full bg-white/95 p-6 border-t-2 border-skystreet-ink translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-black text-skystreet-ink">ABYSS GLOW</h3>
                  <p className="text-skystreet-cyan font-bold text-xs">SEA FIREFLY LANTERN</p>
                </div>
              </SkyPanel>
            </div>

            {/* Panel 2: Colored Action Panel */}
            <div className="md:col-span-4">
              <SkyPanel 
                className="h-full bg-skystreet-ink text-white"
                borderColor="#000000"
                shadowColor="#000000"
                effect="speedlines"
              >
                <div className="h-full flex items-center justify-center p-8 text-center">
                  <div>
                    <div className="text-xs font-bold tracking-[0.3em] mb-2 text-skystreet-cyan">NOTICE</div>
                    <SkyGlitchText text="NOISE FILTER" className="text-4xl font-impact italic tracking-wide text-skystreet-cyan" />
                  </div>
                </div>
              </SkyPanel>
            </div>

            {/* Panel 3: Clean Info */}
            <div className="md:col-span-4">
                <SkyPanel className="h-full" interactive={true}>
                  <div className="p-8 h-full flex flex-col justify-between">
                    <div className="w-16 h-16 rounded-full border-2 border-skystreet-ink bg-skystreet-cyan transition-transform duration-300 group-hover:scale-125"></div>
                    <div>
                      <h4 className="text-xl font-black text-skystreet-ink">The Boy</h4>
                      <p className="text-sm text-gray-500 mt-2">Turning Pages...</p>
                    </div>
                  </div>
                </SkyPanel>
            </div>

             {/* Panel 4: Wide Text */}
             <div className="md:col-span-8">
               <SkyPanel className="h-full bg-skystreet-cyan" borderColor="#1e2a78">
                 <div className="h-full flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.2)_10px,rgba(255,255,255,0.2)_20px)]"></div>
                    <h2 className="text-6xl font-black text-black mix-blend-overlay relative z-10">BLUE SIGNAL</h2>
                 </div>
               </SkyPanel>
            </div>

          </div>


          {/* New Components Showcase */}
          <div className="mt-24 mb-12">
            <h2 className="text-4xl font-black text-skystreet-ink mb-8 border-b-4 border-skystreet-ink inline-block p-2">
              <SkyGlitchText text="NARRATIVE TOOLS" />
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* Buttons Showcase */}
              <div className="p-8 border-2 border-skystreet-ink bg-white shadow-manga relative group">
                <div className="absolute -top-3 -left-3 bg-skystreet-ink text-white px-2 py-1 text-xs font-bold">ACTIONS</div>
                <div className="flex flex-col gap-6 items-start">
                  <SkyButton>Take Hand</SkyButton>
                  <SkyButton variant="alert">Fly High</SkyButton>
                  <SkyButton onClick={() => setIsSidebarOpen(true)}>Open Story</SkyButton>
                </div>
              </div>

              {/* Typography Showcase */}
              <div className="p-8 border-2 border-skystreet-ink bg-white shadow-manga relative">
                <div className="absolute -top-3 -left-3 bg-skystreet-cyan text-white px-2 py-1 text-xs font-bold">MESSAGES</div>
                <div className="flex flex-col gap-4">
                  <SkyGlitchText text="SEA IS DRYING" className="text-5xl" color="text-skystreet-alert" />
                  <SkyGlitchText text="SONG REACHED" className="text-xl" />
                  <div className="mt-4">
                     <p className="text-sm text-gray-400 font-bold mb-2">TUNING ANTENNA:</p>
                     <SkySkeleton height="1.5rem" className="mb-2" />
                     <SkySkeleton height="1rem" width="80%" />
                  </div>
                </div>
              </div>
            </div>

            {/* Data & Control Showcase */}
            <h3 className="text-2xl font-black text-skystreet-ink mb-8">NAVIGATION & COMMS</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              {/* Stats Cards */}
              <div className="md:col-span-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
                 <SkyCard title="Singing Whales" value="01" trend="DREAMING" trendUp={true} />
                 <SkyCard title="Light Intensity" value="100%" trend="DAZZLING" trendUp={true} />
                 <SkyCard title="Noise Level" value="0.0%" trend="CLEARED" trendUp={false} />
              </div>

              {/* Form Controls */}
              <div className="md:col-span-5 flex flex-col gap-6">
                <div className="p-8 border-2 border-skystreet-ink bg-white shadow-manga">
                  <h4 className="font-black text-lg mb-6 border-b-2 border-gray-100 pb-2">TRANSMITTER</h4>
                  <div className="space-y-6">
                    <SkyInput label="Frequency Key" placeholder="ENTER KEY..." />
                    <SkyInput label="Recipient ID" placeholder="YOUR NAME" />
                    
                    <div className="pt-2">
                      <p className="text-xs font-bold text-skystreet-ink uppercase mb-2">Light Level</p>
                      <SkySelect 
                        options={[
                          { value: 'opt1', label: 'SURFACE: PALE' },
                          { value: 'opt2', label: 'DEEP: GLOW' },
                          { value: 'opt3', label: 'BEDROCK: STAR' },
                        ]}
                        value={selectValue}
                        onChange={setSelectValue}
                      />
                    </div>

                    <div className="pt-2">
                       <SkySlider value={sliderValue} onChange={setSliderValue} label="Voice Magnitude" />
                    </div>

                    <div className="flex flex-col gap-4 pt-4 border-t-2 border-dashed border-gray-200">
                      <SkyToggle checked={true} onChange={() => {}} label="Antenna Up" />
                      <SkyToggle checked={false} onChange={() => {}} label="Fearless" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Table */}
              <div className="md:col-span-7">
                <SkyTable 
                  columns={[
                    { key: 'id', header: 'ID' },
                    { key: 'signal', header: 'SIGNAL' },
                    { key: 'sender', header: 'SENDER' },
                    { key: 'status', header: 'STATUS' },
                  ]}
                  data={[
                    { id: '001', signal: 'BLUE', sender: 'WHALE', status: 'SINGING' },
                    { id: '002', signal: 'PALE', sender: 'BOY', status: 'READING' },
                    { id: '003', signal: 'LOST', sender: 'NULL', status: 'WAITING' },
                    { id: '004', signal: 'CLEAR', sender: 'YOU', status: 'CONNECTED' },
                  ]}
                />
              </div>

            </div>
          </div>

        </div>
      </div>
      
      <div className="mt-16">
         <SkyTicker text="WAITING FOR SIGNAL // FROM YOU // PALE BUT STRONG // MOVING FORWARD // TEN WORLDS AWAY" />
      </div>

    </div>
  )
}
