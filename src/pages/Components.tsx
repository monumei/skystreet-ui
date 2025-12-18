import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SkyComicBox } from '../components/SkyComicBox';
import { SkyButton } from '../components/SkyButton';
import { SkyThemeToggle } from '../components/SkyThemeToggle';

// Components for showcase
import { SkyCard } from '../components/SkyCard';
import { SkyGlitchText } from '../components/SkyGlitchText';
import { SkyInput } from '../components/SkyInput';
import { SkyPanel } from '../components/SkyPanel';
import { SkySelect } from '../components/SkySelect';
import { SkySkeleton } from '../components/SkySkeleton';
import { SkySlider } from '../components/SkySlider';
import { SkyTable } from '../components/SkyTable';
import { SkyTextarea } from '../components/SkyTextarea';
import { SkyTicker } from '../components/SkyTicker';
import { SkyToggle } from '../components/SkyToggle';
import { SkyCode as SkyCodeComponent } from '../components/SkyCode';

// Define a type for our component showcase
type ComponentShowcase = {
  id: string;
  name: string;
  description: string;
  component: React.ReactNode;
  code: string;
};

const componentsList: ComponentShowcase[] = [
  {
    id: 'button',
    name: 'SkyButton',
    description: 'Primary interaction element with different variants.',
    component: (
      <div className="flex flex-col gap-4 items-start">
        <SkyButton onClick={() => {}}>Primary Button</SkyButton>
        <SkyButton variant="outline" onClick={() => {}}>Outline Button</SkyButton>
        <SkyButton variant="alert" onClick={() => {}}>Alert Button</SkyButton>
      </div>
    ),
    code: `<SkyButton onClick={handler}>Primary</SkyButton>
<SkyButton variant="outline">Outline</SkyButton>
<SkyButton variant="alert">Alert</SkyButton>`
  },
  {
    id: 'card',
    name: 'SkyCard',
    description: 'A data display card with value trending visualization.',
    component: (
      <div className="w-full max-w-sm">
        <SkyCard title="System Load" value="45%" trend="STABLE" trendUp={true} />
      </div>
    ),
    code: `<SkyCard 
  title="System Load" 
  value="45%" 
  trend="STABLE" 
  trendUp={true} 
/>`
  },
  {
    id: 'comicbox',
    name: 'SkyComicBox',
    description: 'A stylized text box for headers or captions.',
    component: <SkyComicBox text="CHAPTER 1" />,
    code: `<SkyComicBox text="CHAPTER 1" />`
  },
  {
    id: 'glitch',
    name: 'SkyGlitchText',
    description: 'Text with a digital glitch animation effect.',
    component: <SkyGlitchText text="ERROR 404" className="text-4xl" />,
    code: `<SkyGlitchText text="ERROR 404" className="text-4xl" />`
  },
  {
    id: 'input',
    name: 'SkyInput',
    description: 'Form input with specific focus styles.',
    component: <SkyInput label="Username" placeholder="Enter ID..." />,
    code: `<SkyInput label="Username" placeholder="Enter ID..." />`
  },
  {
    id: 'panel',
    name: 'SkyPanel',
    description: 'A structural container with manga-style borders and effects.',
    component: (
      <div className="h-64 w-full">
        <SkyPanel src="https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=500&q=60" tag="IMG_001">
           <div className="absolute bottom-2 left-2 text-white font-bold bg-black px-2">OVERLAY TEXT</div>
        </SkyPanel>
      </div>
    ),
    code: `<SkyPanel \n  src="image.jpg" \n  tag="IMG_001"\n>\n  {children}\n</SkyPanel>`
  },
  {
    id: 'select',
    name: 'SkySelect',
    description: 'A stylized dropdown selection input.',
    component: (
      <SkySelect 
        options={[
          { value: 'a', label: 'Option A' },
          { value: 'b', label: 'Option B' },
        ]}
        value="a"
        onChange={() => {}}
      />
    ),
    code: `<SkySelect \n  options={[{ value: 'a', label: 'A' }]} \n  value={val} \n  onChange={setVal} \n/>`
  },
  {
    id: 'skeleton',
    name: 'SkySkeleton',
    description: 'Loading placeholder animation.',
    component: (
      <div className="w-full space-y-2">
        <SkySkeleton height="2rem" />
        <SkySkeleton height="1rem" width="80%" />
        <SkySkeleton height="1rem" width="60%" />
      </div>
    ),
    code: `<SkySkeleton height="2rem" />
<SkySkeleton height="1rem" width="80%" />`
  },
  {
    id: 'slider',
    name: 'SkySlider',
    description: 'Range input slider with value display.',
    component: <SkySlider value={50} onChange={() => {}} label="Volume" />,
    code: `<SkySlider value={50} onChange={setVal} label="Volume" />`
  },
  {
    id: 'table',
    name: 'SkyTable',
    description: 'Data grid for displaying lists of information.',
    component: (
      <SkyTable 
        columns={[
          { key: 'id', header: 'ID' },
          { key: 'status', header: 'STATUS' }
        ]}
        data={[
          { id: '1', status: 'Active' },
          { id: '2', status: 'Offline' }
        ]}
      />
    ),
    code: `<SkyTable \n  columns={[{ key: 'id', header: 'ID' }]} \n  data={[{ id: '1', data: '...' }]} \n/>`
  },
  {
    id: 'textarea',
    name: 'SkyTextarea',
    description: 'Multi-line text input.',
    component: <SkyTextarea label="Comments" placeholder="Write here..." />,
    code: `<SkyTextarea label="Comments" placeholder="Write here..." />`
  },
  {
    id: 'ticker',
    name: 'SkyTicker',
    description: 'Scrolling marquee text for announcements.',
    component: <SkyTicker text="BREAKING NEWS // SYSTEM UPDATE // NEW FEATURES" />,
    code: `<SkyTicker text="SCROLLING TEXT..." />`
  },
  {
    id: 'toggle',
    name: 'SkyToggle',
    description: 'Boolean switch toggle.',
    component: <SkyToggle label="Enable" checked={true} onChange={() => {}} />,
    code: `<SkyToggle label="Enable" checked={val} onChange={setVal} />`
  },
  {
    id: 'code',
    name: 'SkyCode',
    description: 'Displays code blocks with syntax highlighting style.',
    component: <SkyCodeComponent code="console.log('Hello World');" language="typescript" />,
    code: `<SkyCode code="..." language="typescript" />`
  }
];

export default function Components() {
  const [activeComponentId, setActiveComponentId] = useState<string>(componentsList[0].id);

  const activeComponent = componentsList.find(c => c.id === activeComponentId) || componentsList[0];

  return (
    <div className="flex h-screen overflow-hidden bg-skystreet-paper dark:bg-skystreet-deep transition-colors duration-300">
       
      {/* Sidebar - Fixed Left */}
      <aside className="w-80 h-full border-r-4 border-skystreet-ink dark:border-skystreet-cyan bg-white dark:bg-skystreet-deep flex flex-col relative z-20">
         <div className="p-6 border-b-2 border-skystreet-ink dark:border-skystreet-cyan flex justify-between items-center bg-white dark:bg-skystreet-deep relative z-10">
             <div>
               <SkyComicBox text="SKYSTREET UI" />
               <p className="text-xs font-bold text-skystreet-ink/60 dark:text-skystreet-cyan/60 mt-2 tracking-widest pl-1">V 1.0.0 // DATABASE</p>
             </div>
             
             {/* Nav Controls */}
             <div className="flex gap-2">
               <Link to="/">
                 <button className="p-2 border-2 border-skystreet-ink dark:border-skystreet-cyan bg-white dark:bg-transparent hover:bg-skystreet-ink hover:text-white dark:hover:bg-skystreet-neon dark:hover:text-skystreet-deep transition-all shadow-[2px_2px_0px_rgba(0,0,0,0.1)] active:translate-y-1 active:translate-x-1 active:shadow-none" aria-label="Home">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                 </button>
               </Link>
               <SkyThemeToggle />
             </div>
          </div>
         
         <div className="flex-1 overflow-y-auto p-6 relative">
             {/* Background Pattern */}
             <div className="absolute inset-0 bg-screentone opacity-10 pointer-events-none" />
             
             <ul className="space-y-2 font-bold text-skystreet-ink/80 dark:text-skystreet-cyan/80 relative z-10">
                <li className="mb-6">
                   <Link to="/" className="group flex items-center gap-2 text-sm hover:text-skystreet-cyan dark:hover:text-white transition-colors">
                      <span className="w-2 h-2 bg-skystreet-ink group-hover:bg-skystreet-cyan transition-colors"></span>
                      BACK TO SIGNAL
                   </Link>
                </li>
                
                {componentsList.map((comp) => (
                  <li 
                    key={comp.id}
                    onClick={() => setActiveComponentId(comp.id)}
                    className={`cursor-pointer transition-all p-3 border-2 shadow-[2px_2px_0px_rgba(0,0,0,0.1)] hover:translate-x-1 ${
                      activeComponentId === comp.id 
                      ? 'bg-skystreet-ink text-white border-skystreet-ink shadow-[4px_4px_0px_#00b4d8] dark:bg-skystreet-neon dark:text-skystreet-deep dark:border-skystreet-neon dark:shadow-[4px_4px_0px_#ffffff]' 
                      : 'bg-white text-skystreet-ink border-skystreet-ink/10 hover:border-skystreet-ink dark:bg-transparent dark:border-skystreet-cyan/30 dark:hover:border-skystreet-neon'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                       <span className="uppercase tracking-wide text-sm">{comp.name}</span>
                       {activeComponentId === comp.id && <span className="text-xs animate-pulse">●</span>}
                    </div>
                  </li>
                ))}
             </ul>
         </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto relative bg-skystreet-paper dark:bg-skystreet-deep">
        <div className="max-w-7xl mx-auto p-8 md:p-12">
           {/* Header */}
          <div className="mb-12 border-b-2 border-skystreet-ink/10 dark:border-skystreet-cyan/20 pb-8">
            <h1 className="text-5xl md:text-7xl font-black text-black dark:text-white tracking-tighter uppercase italic">
              {activeComponent.name}
            </h1>
            <p className="mt-4 text-skystreet-ink dark:text-skystreet-cyan font-bold max-w-2xl text-xl leading-relaxed">
              {activeComponent.description}
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 pb-20">
            {/* Left Col: Preview */}
            <div className="xl:col-span-12 2xl:col-span-7">
               <div className="mb-4 flex items-center gap-2">
                 <span className="w-3 h-3 bg-skystreet-cyan animate-pulse"></span>
                 <h3 className="text-sm font-black text-skystreet-ink dark:text-skystreet-neon tracking-widest">PREVIEW</h3>
               </div>
               
               <div className="p-8 md:p-16 border-2 border-skystreet-ink dark:border-skystreet-cyan bg-white dark:bg-[#0f172a] shadow-manga dark:shadow-glow min-h-[400px] flex items-center justify-center relative overflow-hidden group">
                   {/* Background Decor */}
                   <div className="absolute inset-0 bg-screentone opacity-10 pointer-events-none" />
                   <div className="absolute top-0 right-0 p-2 opacity-50">
                      <div className="w-16 h-16 border-r-2 border-t-2 border-skystreet-ink dark:border-skystreet-cyan"></div>
                   </div>
                   <div className="absolute bottom-0 left-0 p-2 opacity-50">
                      <div className="w-16 h-16 border-l-2 border-b-2 border-skystreet-ink dark:border-skystreet-cyan"></div>
                   </div>
                   
                   <div className="relative z-10 w-full flex justify-center">
                     {activeComponent.component}
                   </div>
               </div>
            </div>

            {/* Right Col: Code */}
            <div className="xl:col-span-12 2xl:col-span-5">
               <div className="mb-4 flex items-center gap-2">
                 <span className="w-3 h-3 bg-skystreet-ink dark:bg-white"></span>
                 <h3 className="text-sm font-black text-skystreet-ink dark:text-skystreet-neon tracking-widest">SOURCE</h3>
               </div>
               <SkyCodeComponent code={activeComponent.code} language="tsx" />
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
