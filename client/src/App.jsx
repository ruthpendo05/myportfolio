import React, { useState, useEffect } from 'react'; // Added useEffect

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center py-5 px-6 md:px-16 bg-[#0b2357]/90 backdrop-blur-md border-b border-white/5">
      <div className="text-xl font-bold tracking-tighter flex items-center gap-2">
        <div className="w-8 h-8 bg-[#af7541] rounded-lg flex items-center justify-center text-white text-sm">PM</div>
        <span className="text-white uppercase tracking-tighter shadow-sm font-bold text-lg">
            PeoMNet <span className="text-[#af7541]">Digital</span>
          </span>
        </div>
      <div className="hidden md:flex items-center space-x-10 text-[13px] font-medium uppercase tracking-widest text-slate-300">
        <a href="#home" className="hover:text-[#af7541] transition-colors">Home</a>
        <a href="#about" className="hover:text-[#af7541] transition-colors">About Me</a>
        <a href="#services" className="hover:text-[#af7541] transition-colors">Services</a>
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
          <a href="#about" onClick={toggleMenu} className="text-slate-200 text-lg uppercase tracking-widest hover:text-[#af7541]">About Me</a>
          <a href="#services" onClick={toggleMenu} className="text-slate-200 text-lg uppercase tracking-widest hover:text-[#af7541]">Services</a>
          <a href="#contact" onClick={toggleMenu} className="px-8 py-3 bg-[#af7541] text-white rounded-full font-bold">Let's Connect</a>
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section id="home" className="relative pt-20 pb-4 px-6 md:px-16 flex items-center justify-center text-center overflow-hidden">
    {/* Full background coding environment image */}
    <img
      src="/coding-hero-bg.png"
      alt=""
      aria-hidden="true"
      className="absolute inset-0 w-full h-full object-cover"
    />
    {/* Dark overlays for readability */}
    <div className="absolute inset-0 bg-[#071a3a]/60" />
    <div className="absolute inset-0 bg-gradient-to-b from-[#071a3a]/80 via-transparent to-[#071a3a]/90" />

    <div className="relative z-10 max-w-4xl mx-auto">
      <div className="relative mb-8 flex justify-center">
        <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-[#af7541]/30 bg-[#071a3a] shadow-2xl">
          <img src="/profile.jpg" alt="Ruth Pendo" className="w-full h-full object-cover object-top" />
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-[#af7541] text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-full border-2 border-[#071a3a] shadow-xl whitespace-nowrap">
            PeoMNet Digital
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">Ruth Pendo</h1>
        <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          A software engineering Student & full-stack web developer
        </p>
        <p className="text-slate-200 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
          Passionate about building secure applications and exploring the intersection of
          <span className="text-[#f1c4c6]"> Machine Learning</span> and
          <span className="text-[#f1c4c6]"> Cybersecurity</span>.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-xl font-bold hover:bg-white/10 transition-colors text-center">
            DOWNLOAD CV
          </button>
        </div>
      </div>
    </div>
  </section>
);

/* Techy Divider Banner — sits between Hero and About */
const TechBanner = () => (
  <div className="relative w-full h-[40px] md:h-[60px] overflow-hidden select-none">
    {/* Background Image */}
    <img
      src="/techy-banner.png"
      alt=""
      aria-hidden="true"
      className="absolute inset-0 w-full h-full object-cover"
    />
    {/* Dark gradient overlay top */}
    <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-[#071a3a] to-transparent z-10" />
    {/* Dark gradient overlay bottom */}
    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#071a3a] to-transparent z-10" />
    {/* Center overlay tint */}
    <div className="absolute inset-0 bg-[#071a3a]/40 z-[5]" />
    {/* Subtle animated scan-line */}
    <div className="absolute inset-0 z-20 pointer-events-none" style={{
      backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(175,117,65,0.04) 2px, rgba(175,117,65,0.04) 4px)',
    }} />
  </div>
);

const About = () => (
  <section id="about" className="relative py-8 px-6 md:px-16 overflow-hidden">
    {/* Full-section techy background image */}
    <img
      src="/techy-about-bg.png"
      alt=""
      aria-hidden="true"
      className="absolute inset-0 w-full h-full object-cover opacity-20"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-[#071a3a]/90 via-[#071a3a]/70 to-[#071a3a]/90 z-[1]" />

    <div className="absolute z-10 right-4 top-0 hidden xl:block text-[180px] font-black text-[#af7541]/10 leading-none">01</div>
    <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-[1fr_1fr] gap-10 items-center">
      <div className="relative rounded-[2.5rem] border border-[#af7541]/20 bg-[#071a3a] overflow-hidden shadow-2xl">
        <img src="/about-tech.png" alt="Coding Environment" className="w-full h-full min-h-[420px] object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071a3a]/50 via-transparent to-transparent"></div>
      </div>
      <div className="space-y-8">
        <div>
          <p className="text-[#f1c4c6] text-sm uppercase tracking-[0.3em] mb-4">Discover</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">About Me</h2>
        </div>
        <p className="text-slate-300 text-lg leading-relaxed max-w-2xl">
          I specialize in developing end-to-end web applications, focusing on clean code and user experience. My goal is to combine modern development practices with data-driven insights to build software that is both functional and secure.
        </p>
        <div className="rounded-3xl border border-[#af7541]/20 bg-[#071a3a]/90 p-6 shadow-xl shadow-black/20">
          <div className="grid gap-4 sm:grid-cols-2 text-sm text-slate-200">
            <div className="space-y-3">
              <div className="text-[#af7541] uppercase tracking-[0.2em] font-bold">Name</div>
              <div className="text-white">Ruth Pendo</div>
            </div>
            <div className="space-y-3">
              <div className="text-[#af7541] uppercase tracking-[0.2em] font-bold">Location</div>
              <div className="text-white">Kisii, Kenya</div>
            </div>
            <div className="space-y-3">
              <div className="text-[#af7541] uppercase tracking-[0.2em] font-bold">Email</div>
              <div className="text-white">ruthpendo05@gmail.com</div>
            </div>
            <div className="space-y-3">
              <div className="text-[#af7541] uppercase tracking-[0.2em] font-bold">Phone</div>
              <div className="text-white">0746474803</div>
            </div>
            <div className="space-y-3">
              <div className="text-[#af7541] uppercase tracking-[0.2em] font-bold">LinkedIn</div>
              <div><a href="https://linkedin.com/in/ruth-pendo-913779339/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#af7541] transition-colors underline underline-offset-4 decoration-[#af7541]/30">linkedin.com/in/ruth-pendo-913779339/</a></div>
            </div>
            <div className="space-y-3">
              <div className="text-[#af7541] uppercase tracking-[0.2em] font-bold">GitHub</div>
              <div><a href="https://github.com/ruthpendo05" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#af7541] transition-colors underline underline-offset-4 decoration-[#af7541]/30">github.com/ruthpendo05</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Services = () => {
  const cards = [
    {
      title: 'React / Node.js',
      desc: 'Building modern front-end interfaces and backend services with JavaScript.',
      icon: '⚛️'
    },
    {
      title: 'Python',
      desc: 'Using Python for scripting, automation, and data-driven features.',
      icon: '🐍'
    },
    {
      title: 'Java',
      desc: 'Developing robust backend systems and enterprise applications.',
      icon: '☕'
    },
    {
      title: 'HTML/CSS/JavaScript',
      desc: 'Crafting responsive layouts and polished user experiences across devices.',
      icon: '💻'
    }
  ];

  return (
    <section id="services" className="py-8 px-6 md:px-16 relative overflow-hidden">
      <div className="absolute right-0 top-0 hidden xl:block text-[180px] font-black text-[#af7541]/10">02</div>
      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-[0.8fr_1.2fr] gap-16 items-start">
        <div className="space-y-6">
          <p className="text-[#f1c4c6] text-sm uppercase tracking-[0.3em]">What I Do</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">My Services</h2>
          <p className="text-slate-400 max-w-xl leading-relaxed">
            Transforming ideas into fully deployed web applications. My approach combines a deep understanding of core technologies like Java and React with a commitment to writing scalable, maintainable code. I thrive on solving technical challenges and building tools that provide real value to users.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((card, idx) => (
            <div key={idx} className="rounded-3xl border border-[#af7541]/20 bg-[#0b2357]/95 p-8 shadow-xl shadow-black/20 hover:border-[#f1c4c6]/40 transition-all">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#af7541]/10 text-3xl">{card.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{card.desc}</p>
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

const Footer = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const whatsappNumber = '254746474803';

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate required fields
    if (!name.trim() || !email.trim() || !message.trim()) {
      setShowError(true);
      setShowSuccess(false);
      setTimeout(() => setShowError(false), 5000);
      return;
    }

    setShowError(false);
    const contactDetails = `Name: ${name}\nEmail: ${email}\nSubject: ${subject || 'N/A'}\nMessage: ${message}`;
    const whatsappText = `Hello, I got your message from the portfolio.\n\n${contactDetails}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappText)}`;
    const mailtoUrl = `mailto:ruthpendo05@gmail.com?subject=${encodeURIComponent(subject || 'Portfolio Contact')}&body=${encodeURIComponent(whatsappText)}`;

    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    window.open(mailtoUrl, '_blank', 'noopener,noreferrer');
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <footer id="contact" className="py-8 px-6 md:px-16 bg-[#0b2357]/80 backdrop-blur-md border-t border-[#af7541]/20">
      <div className="grid lg:grid-cols-1 gap-8 items-center">
        <div className="text-center space-y-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">Let's Connect</h2>
            <p className="text-slate-300 text-base mt-2 max-w-2xl mx-auto">
              I'm always excited to discuss software engineering, AI, or security.
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-[#0b2357]/95 rounded-[2rem] border border-[#af7541]/20 p-6 md:p-10 shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-widest text-[#af7541]">Contact Form</h3>
            {showError && (
              <div className="mb-6 rounded-3xl border border-red-400/20 bg-red-500/10 p-4 text-sm text-red-200">
                ⚠️ Please fill in all required fields (Name, Email, and Message) before sending.
              </div>
            )}
            {showSuccess && (
              <div className="mb-6 rounded-3xl border border-green-400/20 bg-green-500/10 p-4 text-sm text-green-200">
                Message sent successfully! Your details were forwarded to WhatsApp and email.
              </div>
            )}
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <label className="block">
                  <span className="text-xs uppercase tracking-[0.24em] text-slate-400">Name</span>
                  <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Your name" className="mt-2 w-full rounded-3xl border border-white/10 bg-[#102755] px-5 py-4 text-white outline-none transition focus:border-[#af7541]" />
                </label>
                <label className="block">
                  <span className="text-xs uppercase tracking-[0.24em] text-slate-400">Email</span>
                  <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Your email" className="mt-2 w-full rounded-3xl border border-white/10 bg-[#102755] px-5 py-4 text-white outline-none transition focus:border-[#af7541]" />
                </label>
              </div>
              <label className="block">
                <span className="text-xs uppercase tracking-[0.24em] text-slate-400">Subject</span>
                <input value={subject} onChange={(e) => setSubject(e.target.value)} type="text" placeholder="Subject" className="mt-2 w-full rounded-3xl border border-white/10 bg-[#102755] px-5 py-4 text-white outline-none transition focus:border-[#af7541]" />
              </label>
              <label className="block">
                <span className="text-xs uppercase tracking-[0.24em] text-slate-400">Message</span>
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows="6" placeholder="Your message" className="mt-2 w-full rounded-3xl border border-white/10 bg-[#102755] px-5 py-4 text-white outline-none transition focus:border-[#af7541]"></textarea>
              </label>
              <button type="submit" className="w-full rounded-3xl bg-[#af7541] py-4 text-white font-bold uppercase tracking-[0.2em] hover:bg-[#c38a5a] transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="mt-20 pt-10 border-t border-white/5 text-center text-slate-500 text-xs tracking-[0.3em] font-medium">
        &copy; 2026 PeoMNet Digital. BY RUTH PENDO.
      </div>
    </footer>
  );
};

export default function App() {
  const [serverStatus, setServerStatus] = useState("Connecting...");

  useEffect(() => {
    // IMPORTANT: Replace 'YOUR_RENDER_URL' with the link from your Render dashboard
    fetch('https://myportfolio-1-mujw.onrender.com/api')
      .then((res) => res.json())
      .then((data) => setServerStatus(data.message))
      .catch((err) => {
        console.error("Connection failed:", err);
        setServerStatus("Offline");
      });
  }, []);

  return (
    <div className="min-h-screen selection:bg-[#af7541] selection:text-white overflow-x-hidden">
      <Navbar />

      {/* Backend Connection Indicator */}
      <div className="fixed bottom-6 right-6 z-[100] flex items-center gap-2 bg-[#0b2357]/80 backdrop-blur-md border border-[#af7541]/30 px-4 py-2 rounded-full shadow-2xl transition-all">
        <span className={`w-2 h-2 rounded-full animate-pulse ${serverStatus === "Backend running" ? 'bg-green-400' : 'bg-red-400'}`}></span>
        <span className="text-[10px] font-bold text-white uppercase tracking-widest">
          Server: <span className="text-[#af7541] ml-1">{serverStatus}</span>
        </span>
      </div>

      <Hero />
      <TechBanner />
      <About />
      <Services />
      {/* <Projects /> */}
      <Footer />
    </div>
  );
}