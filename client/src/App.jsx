import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center py-5 px-6 md:px-16 bg-[#0b2357]/90 backdrop-blur-md border-b border-white/5">
      <div className="text-xl font-bold tracking-tighter flex items-center gap-2">
        <div className="w-8 h-8 bg-[#af7541] rounded-lg flex items-center justify-center text-white text-sm">PM</div>
        <span className="text-white uppercase tracking-tighter shadow-sm font-bold text-lg">
          PEOMNET <span className="text-[#af7541]">DIGITAL</span>
        </span>
      </div>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-10 text-[13px] font-medium uppercase tracking-widest text-slate-300">
        <a href="#home" className="hover:text-[#af7541] transition-colors">Home</a>
        <a href="#about" className="hover:text-[#af7541] transition-colors">Expertise</a>
        <a href="#projects" className="hover:text-[#af7541] transition-colors">Projects</a>
        <a href="#contact" className="px-5 py-2 border border-[#af7541]/30 bg-[#af7541]/10 text-[#af7541] rounded-full hover:bg-[#af7541] hover:text-white transition-all duration-300">Let's Connect</a>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-[#0b2357] border-b border-white/5 flex flex-col items-center py-8 space-y-6 md:hidden z-40 shadow-2xl">
          <a href="#home" onClick={toggleMenu} className="text-slate-200 text-lg uppercase tracking-widest hover:text-[#af7541]">Home</a>
          <a href="#about" onClick={toggleMenu} className="text-slate-200 text-lg uppercase tracking-widest hover:text-[#af7541]">Expertise</a>
          <a href="#projects" onClick={toggleMenu} className="text-slate-200 text-lg uppercase tracking-widest hover:text-[#af7541]">Projects</a>
          <a href="#contact" onClick={toggleMenu} className="px-8 py-3 bg-[#af7541] text-white rounded-full font-bold">Let's Connect</a>
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section id="home" className="relative min-h-screen pt-32 pb-20 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between bg-grid">
    <div className="md:w-3/5 z-10 space-y-8 text-center md:text-left h-full">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#af7541]/10 border border-[#af7541]/30 text-[#f1c4c6] text-xs font-bold uppercase tracking-wider">
        Full Stack Web Developer
      </div>
      <h1 className="text-4xl md:text-7xl font-extrabold text-white leading-tight">
        Building Secure, <br/>
        <span className="text-[#af7541] underline decoration-4 underline-offset-[12px]">Intelligent Web Apps.</span>
      </h1>
      <p className="text-slate-200 text-lg md:text-xl max-w-2xl mx-auto md:mx-0 leading-relaxed font-medium">
        I am Ruth Pendo, a Full Stack Web Developer based in Kenya. 
        I specialize in creating high-performance web applications integrated with 
        <span className="text-[#f1c4c6]"> Machine Learning</span> and robust 
        <span className="text-[#f1c4c6]"> Cybersecurity</span> protocols.
      </p>
      <div className="flex flex-col md:flex-row gap-4 pt-6 max-w-sm mx-auto md:mx-0">
        <button className="px-10 py-5 bg-[#af7541] text-white rounded-xl font-bold border-2 border-[#af7541] hover:bg-[#b87c4a] transition-colors flex items-center justify-center gap-2 group shadow-xl shadow-black/30">
          VIEW MY WORK <span>→</span>
        </button>
        <button className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-xl font-bold hover:bg-white/10 transition-colors text-center">
          DOWNLOAD CV
        </button>
      </div>
    </div>
    <div className="md:w-2/5 mt-16 md:mt-0 relative flex justify-center z-10 w-full max-w-sm mx-auto">
      <div className="relative w-72 h-72 md:w-80 md:h-80">
        {/* Glow behind the circle (Tan) */}
        <div className="absolute inset-0 bg-[#af7541]/20 rounded-full blur-3xl"></div>
        
        {/* Border frame for that premium look */}
        <div className="absolute inset-0 border-2 border-[#af7541]/40 rounded-full"></div>
        
        <div className="absolute inset-2 overflow-hidden rounded-full bg-slate-900 border-4 border-[#0b2357] shadow-2xl">
           <img src="/profile.jpg" alt="Ruth Pendo" className="w-full h-full object-cover object-top" />
        </div>

        {/* Floating Brand Badge (Tan) */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-[#af7541] text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-full border-2 border-[#0b2357] shadow-xl whitespace-nowrap">
           PEOMNET DIGITAL
        </div>
      </div>
    </div>
  </section>
);

const Skills = () => {
  const skills = [
    { name: "React / Next.js", level: "90%" },
    { name: "Python / AI / ML", level: "85%" },
    { name: "Java / Spring Boot", level: "82%" },
    { name: "Cybersecurity Ops", level: "78%" },
  ];
  const items = [
    { title: "React", icon: "⚛️" }, { title: "Python", icon: "🐍" },
    { title: "Java", icon: "☕" }, { title: "Node.js", icon: "🌐" },
    { title: "FastAPI", icon: "⚡" }, { title: "PostgreSQL", icon: "🐘" },
    { title: "Nmap", icon: "🔍" }, { title: "Git", icon: "🌿" }
  ];
  return (
    <section id="about" className="py-24 px-6 md:px-16 relative overflow-hidden">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1 z-10">
           <h4 className="text-[#f1c4c6] text-sm font-bold uppercase tracking-[0.2em] mb-4">What I Do</h4>
           <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 border-l-4 border-[#af7541] pl-6 leading-tight uppercase tracking-tight">Mastering Dynamic <br/>Web Applications.</h2>
           <p className="text-slate-300 mb-10 text-lg leading-relaxed">
             I build scalable software that prioritizes security from ground zero. 
             Combining the power of **Java/Spring** for backends and **React** for frontends, 
             I provide robust digital experiences backed by **Machine Learning** insights.
           </p>
           <div className="grid grid-cols-2 gap-y-8 gap-x-12">
             {skills.map((s, i) => (
               <div key={i} className="space-y-3">
                 <div className="flex flex-col text-sm font-bold uppercase tracking-widest gap-1">
                   <span className="text-white">{s.name}</span>
                   <span className="text-[#af7541] text-xs">{s.level}</span>
                 </div>
                 <div className="h-1.5 w-full bg-slate-800/50 rounded-full">
                   <div className="h-full bg-[#af7541] rounded-full" style={{ width: s.level }}></div>
                 </div>
               </div>
             ))}
           </div>
        </div>
        <div className="order-1 md:order-2 grid grid-cols-2 sm:grid-cols-4 gap-4 z-10">
           {items.map((tech, i) => (
             <div key={i} className="glass-card p-6 rounded-3xl flex flex-col items-center justify-center gap-3 border border-[#af7541]/30 hover:border-[#f1c4c6]/40 transition-colors">
                <span className="text-3xl grayscale brightness-150">{tech.icon}</span>
                <span className="text-white text-[10px] font-bold tracking-widest uppercase">{tech.title}</span>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}

const Projects = () => {
  const projs = [
    { 
      title: "Safeguard ML", 
      tech: "Python / Scikit-learn", 
      desc: "An intelligent intrusion detection system that uses ML models to analyze network logs in real-time.",
      img: "https://placehold.co/600x400/0b2357/af7541?text=Safeguard+ML"
    },
    { 
      title: "SecurePay Integration", 
      tech: "Java / React / Spring", 
      desc: "Highly secure payment integration for M-Pesa including end-to-end encryption features.",
      img: "https://placehold.co/600x400/0b2357/af7541?text=SecurePay"
    },
    { 
      title: "AgroMarket v1", 
      tech: "Full-Stack React Suite", 
      desc: "A decentralized marketplace connecting farmers directly to urban consumers for optimal logistics.",
      img: "https://placehold.co/600x400/0b2357/af7541?text=AgroMarket"
    }
  ];
  return (
    <section id="projects" className="py-24 px-6 md:px-16 relative">
      <div className="mb-16">
        <h4 className="text-[#f1c4c6] text-sm font-bold uppercase tracking-[0.2em] mb-4 text-center">My Artifacts</h4>
        <h2 className="text-4xl md:text-6xl font-extrabold text-white text-center leading-tight">Professional <span className="text-[#af7541] underline decoration-4 underline-offset-[16px]">Innovations.</span></h2>
      </div>
      <div className="grid md:grid-cols-3 gap-10">
        {projs.map((p, i) => (
          <div key={i} className="glass-card overflow-hidden rounded-[2rem] border border-[#af7541]/20">
            <div className="relative aspect-[4/3]">
               <img src={p.img} alt={p.title} className="w-full h-full object-cover grayscale brightness-75 opacity-80" />
               <div className="absolute inset-0 bg-[#0b2357]/40"></div>
            </div>
            <div className="p-8 space-y-4">
              <div className="text-[#af7541] text-xs font-bold uppercase tracking-widest">{p.tech}</div>
              <h3 className="text-2xl font-bold text-white tracking-tight">{p.title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{p.desc}</p>
              <button className="w-full mt-4 py-4 border border-[#af7541]/30 bg-[#af7541]/10 text-[#af7541] rounded-2xl font-bold uppercase tracking-widest text-[11px] hover:bg-[#af7541] hover:text-white transition-colors">
                VIEW CASE STUDY
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const Footer = () => (
  <footer id="contact" className="py-24 px-6 md:px-16 bg-[#0b2357]/80 backdrop-blur-md border-t border-[#af7541]/20">
    <div className="grid md:grid-cols-2 gap-16 items-center">
      <div className="text-center md:text-left space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">Ready to build something <span className="text-[#af7541]">revolutionary?</span></h2>
        <p className="text-slate-400 text-lg max-w-lg">Available for full-time professional roles and serious collaborations in PeoMnet Digital.</p>
      </div>
      <div className="flex flex-col gap-6">
        <a href="mailto:ruthpendo05@gmail.com" className="w-full py-6 bg-[#af7541] text-white rounded-2xl font-bold text-center text-lg hover:bg-[#b87c4a] transition-colors shadow-2xl shadow-black/40">
           EMAIL ME DIRECTLY 📩
        </a>
        <div className="flex gap-4">
           {['GITHUB', 'LINKEDIN', 'TWITTER'].map((social, i) => (
             <a key={i} href="#" className="flex-1 py-4 border border-white/10 text-white text-center rounded-xl text-xs font-bold uppercase tracking-[0.2em] hover:bg-white/5 transition-colors">
               {social}
             </a>
           ))}
        </div>
      </div>
    </div>
    <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs tracking-[0.3em] font-medium gap-8">
      <p>&copy; 2026 PEOMNET DIGITAL. BY RUTH PENDO.</p>
      <div className="flex gap-12">
        <a href="#" className="hover:text-[#af7541] transition-colors uppercase">Privacy</a>
        <a href="#" className="hover:text-[#af7541] transition-colors uppercase">Terms</a>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-[#af7541] selection:text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}
