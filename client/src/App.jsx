import React, { useState, useEffect } from 'react'; // Added useEffect

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center py-5 px-6 md:px-16 bg-[#0b2357]/90 backdrop-blur-md border-b border-white/5">
      <div className="text-xl font-bold tracking-tighter flex items-center gap-2">
        <div className="w-8 h-8 bg-[#af7541] rounded-lg flex items-center justify-center text-white text-sm">RP</div>
        <span className="text-white uppercase tracking-tighter shadow-sm font-bold text-lg">
          Ruth Pendo
        </span>
      </div>
      <div className="hidden md:flex items-center space-x-10 text-[13px] font-medium uppercase tracking-widest text-slate-300">
        <a href="#home" className="hover:text-[#af7541] transition-colors">Home</a>
        <a href="#about" className="hover:text-[#af7541] transition-colors">About Me</a>
        <a href="#services" className="hover:text-[#af7541] transition-colors">Services</a>
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
          <a href="#about" onClick={toggleMenu} className="text-slate-200 text-lg uppercase tracking-widest hover:text-[#af7541]">About Me</a>
          <a href="#services" onClick={toggleMenu} className="text-slate-200 text-lg uppercase tracking-widest hover:text-[#af7541]">Services</a>
          <a href="#projects" onClick={toggleMenu} className="text-slate-200 text-lg uppercase tracking-widest hover:text-[#af7541]">Projects</a>
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
            Ruth Pendo
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
          <a 
            href="/Ruth-Pendo-CV.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-xl font-bold hover:bg-white/10 transition-colors text-center"
          >
            VIEW & DOWNLOAD CV
          </a>
          <a href="#projects" className="px-10 py-5 bg-[#af7541] text-white rounded-xl font-bold hover:bg-[#c38a5a] transition-all text-center">
            PROJECTS
          </a>
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
        <img src="/about-tech-lady-no-ring.png" alt="Coding Environment" className="w-full h-full min-h-[420px] object-cover object-center" />
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
      title: "The KSUCU Website",
      tech: "React / JavaScript / TypeScript / MongoDB / Node.js",
      desc: "One of the contributors.\n\nA professional university non-denominational Christian student association, where they fellowship in activities and grow together in faith.",
      img: "/ksucu-hero.png",
      link: "https://ksucu-mc.co.ke/"
    }
  ];
  return (
    <section id="projects" className="py-24 px-6 md:px-16 relative">
      <div className="mb-16">
        <h4 className="text-[#f1c4c6] text-sm font-bold uppercase tracking-[0.2em] mb-4 text-center">Portfolio</h4>
        <h2 className="text-4xl md:text-6xl font-extrabold text-white text-center leading-tight">My <span className="text-[#af7541] underline decoration-4 underline-offset-[16px]">Projects.</span></h2>
      </div>
      <div className="max-w-xl mx-auto">
        {projs.map((p, i) => (
          <div key={i} className="glass-card overflow-hidden rounded-[2rem] border border-[#af7541]/20">
            <div className="relative aspect-[4/3]">
              <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-8 space-y-4">
              <div className="text-[#af7541] text-xs font-bold uppercase tracking-widest">{p.tech}</div>
              <h3 className="text-2xl font-bold text-white tracking-tight">{p.title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed whitespace-pre-line">{p.desc}</p>
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full mt-4 py-4 text-center border border-[#af7541]/30 bg-[#af7541]/10 text-[#af7541] rounded-2xl font-bold uppercase tracking-widest text-[11px] hover:bg-[#af7541] hover:text-white transition-all duration-300"
              >
                VIEW LIVE SITE
              </a>
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
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const whatsappNumber = '254746474803';

  const handleEmailSubmit = (event) => {
    event.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setShowError(true);
      setTimeout(() => setShowError(false), 5000);
      return;
    }
    const mailBody = `Name: ${name}\nPhone: ${phone || 'N/A'}\nEmail: ${email}\nMessage: ${message}`;
    const mailtoUrl = `mailto:ruthpendo05@gmail.com?subject=Portfolio Inquiry from ${name}&body=${encodeURIComponent(mailBody)}`;
    window.location.href = mailtoUrl;
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
  };

  const handleWhatsAppSubmit = () => {
    if (!name.trim() || !phone.trim() || !message.trim()) {
      setShowError(true);
      setTimeout(() => setShowError(false), 5000);
      return;
    }
    const whatsappText = `Hello Ruth, I saw your portfolio and would like to connect!\n\n*Details:*\nName: ${name}\nPhone: ${phone}\nEmail: ${email || 'N/A'}\n\n*Message:*\n${message}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappText)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
  };

  return (
    <footer id="contact" className="py-24 px-6 md:px-16 bg-[#071a3a] border-t border-[#af7541]/20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-left">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Let’s Build the Future Together</h2>
          <p className="text-slate-400 text-lg max-w-3xl leading-relaxed">
            Whether you have a specific project in mind, a technical challenge to solve, or are looking to expand your engineering team, I’m always eager to connect. I’m currently open to <span className="text-[#af7541] font-bold">internships</span>, collaborations, and discussions on how my technical skills can add value to your next big idea.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16">
          {/* Left Side: Contact Info */}
          <div className="space-y-4">
            {[
              {
                label: "Email",
                value: "ruthpendo05@gmail.com",
                href: "mailto:ruthpendo05@gmail.com",
                icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
              },
              {
                label: "GitHub",
                value: "ruthpendo05",
                href: "https://github.com/ruthpendo05",
                icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
              },
              {
                label: "LinkedIn",
                value: "Ruth Pendo",
                href: "https://linkedin.com/in/ruth-pendo-913779339/",
                icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              },
              {
                label: "Location",
                value: "Kisii, Kenya",
                icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
              }
            ].map((contact, idx) => (
              <a key={idx} href={contact.href} className="flex items-center gap-6 p-6 rounded-2xl bg-[#0b2357]/40 border border-white/5 hover:border-[#af7541]/30 transition-all group">
                <div className="w-14 h-14 rounded-xl bg-[#af7541]/10 flex items-center justify-center text-[#af7541] group-hover:bg-[#af7541] group-hover:text-white transition-all">
                  {contact.icon}
                </div>
                <div>
                  <div className="text-sm font-bold text-white mb-1 uppercase tracking-widest">{contact.label}</div>
                  <div className="text-slate-400 group-hover:text-slate-200 transition-colors">{contact.value}</div>
                </div>
              </a>
            ))}
          </div>

          {/* Right Side: Form */}
          <div className="bg-[#0b2357]/40 rounded-3xl border border-white/5 p-8 md:p-12">
            {showError && (
              <div className="mb-6 rounded-2xl border border-red-400/20 bg-red-500/10 p-4 text-sm text-red-200">
                ⚠️ Please fill in all fields before sending.
              </div>
            )}
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Your Name" className="w-full rounded-2xl border border-white/10 bg-[#071a3a] px-6 py-4 text-white outline-none focus:border-[#af7541] transition-all placeholder:text-slate-600" />
                <input value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" placeholder="Phone Number" className="w-full rounded-2xl border border-white/10 bg-[#071a3a] px-6 py-4 text-white outline-none focus:border-[#af7541] transition-all placeholder:text-slate-600" />
              </div>
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Your Email" className="w-full rounded-2xl border border-white/10 bg-[#071a3a] px-6 py-4 text-white outline-none focus:border-[#af7541] transition-all placeholder:text-slate-600" />
              <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows="5" placeholder="Your Message" className="w-full rounded-2xl border border-white/10 bg-[#071a3a] px-6 py-4 text-white outline-none focus:border-[#af7541] transition-all placeholder:text-slate-600"></textarea>

              <div className="grid sm:grid-cols-2 gap-4">
                <button type="button" onClick={handleEmailSubmit} className="flex items-center justify-center gap-2 rounded-2xl bg-[#af7541] py-4 text-white font-bold uppercase tracking-widest text-sm hover:bg-[#c38a5a] transition-all">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  Send via Email
                </button>
                <button type="button" onClick={handleWhatsAppSubmit} className="flex items-center justify-center gap-2 rounded-2xl border border-[#af7541]/30 bg-[#af7541]/5 text-[#af7541] py-4 font-bold uppercase tracking-widest text-sm hover:bg-[#af7541] hover:text-white transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                  Send via WhatsApp
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="mt-24 pt-10 border-t border-white/5 text-center text-slate-500 text-[10px] tracking-[0.4em] font-bold uppercase transition-all">
        &copy; 2026 RUTH PENDO &bull; Software Engineer
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
      <TechBanner />
      <Services />
      <TechBanner />
      <Projects />
      <TechBanner />
      <Footer />
    </div>
  );
}