/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { DATA, Lang } from './data';
import { 
  Globe,
  ArrowRight,
  Menu,
  X,
  Bot,
  ArrowUp,
  Youtube,
  ExternalLink
} from 'lucide-react';

import Sidebar from './components/Sidebar';

import { Toaster } from 'sonner';

const renderFormattedText = (text: string) => {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={index} className="text-white font-bold">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
};

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.5 }}
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-[100] p-4 bg-white text-black rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all ${isVisible ? 'pointer-events-auto' : 'pointer-events-none'}`}
    >
      <ArrowUp size={24} />
    </motion.button>
  );
};

function Home() {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem('portfolio_lang');
    return (saved as Lang) || 'pt';
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = DATA[lang];

  useEffect(() => {
    localStorage.setItem('portfolio_lang', lang);
  }, [lang]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen relative font-sans">
      {/* --- Background Glow --- */}
      <div className="bg-glow top-[-10%] left-[-10%] bg-[radial-gradient(circle,_rgba(255,255,255,0.3)_0%,_rgba(255,255,255,0.05)_70%,_transparent_100%)] opacity-100" />
      <div className="bg-glow bottom-[-20%] right-[-20%] bg-white/5 opacity-30" />

      {/* --- Mobile Header --- */}
      <div className={`lg:hidden fixed top-0 left-0 right-0 p-6 flex justify-between items-center z-[60] transition-all duration-300 ${scrolled ? 'bg-brand-bg/90 backdrop-blur-xl border-b border-white/5' : 'bg-transparent border-b border-transparent'}`}>
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 text-white bg-white/5 rounded-full border border-white/10"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        <button 
          onClick={() => setLang(l => l === 'pt' ? 'en' : 'pt')}
          className={`px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold tracking-[0.2em] text-white hover:bg-white/10 transition-all flex items-center gap-2 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        >
          <Globe size={14} />
          {lang === 'pt' ? 'EN' : 'PT'}
        </button>
      </div>

      {/* --- Sidebar --- */}
      <Sidebar 
        lang={lang} 
        setLang={setLang} 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
      />

      {/* --- Main Content --- */}
      <main className="flex-1 lg:ml-[24rem] p-8 lg:p-16 space-y-32 pt-32 lg:pt-16">
        {/* Header / Lang Switcher (Desktop Only) */}
        <header className="hidden lg:flex justify-end">
          <button 
            onClick={() => setLang(l => l === 'pt' ? 'en' : 'pt')}
            className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold tracking-[0.2em] text-white hover:bg-white/10 transition-all flex items-center gap-2"
          >
            <Globe size={14} />
            {lang === 'pt' ? 'EN' : 'PT'}
          </button>
        </header>

        {/* Hero Section */}
        <motion.section 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-12 text-center lg:text-left"
        >
          <div className="space-y-6">
            <h2 className="text-5xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight max-w-4xl">
              {t.cta}
            </h2>
            
            {/* Merged Differentials */}
            <div className="flex flex-wrap gap-x-4 gap-y-2 justify-center lg:justify-start text-gray-500 text-sm font-medium">
              {t.differentials.map((diff, i) => (
                <span key={i} className="flex items-center gap-4">
                  {diff}
                  {i < t.differentials.length - 1 && <span className="w-1 h-1 bg-white/20 rounded-full" />}
                </span>
              ))}
            </div>
          </div>

          <a 
            href="https://wa.me/5592982043805" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="cta-button flex items-center gap-3 mx-auto lg:mx-0 w-fit"
          >
            {t.ctaButton}
            <ArrowRight size={20} />
          </a>
        </motion.section>

        {/* Skills Chips */}
        <section id="skills">
          <h2 className="section-title">{t.common.skills}</h2>
          <div className="flex flex-wrap gap-3">
            {t.skills.map((skill, i) => (
              <motion.span 
                key={i}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="skill-chip"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience">
          <h2 className="section-title">{t.common.experience}</h2>
          <div className="grid grid-cols-1 gap-6">
            {t.experience.map((exp: any, i) => (
              <motion.div 
                key={i}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="organic-card p-6 md:p-8 space-y-4 !rounded-3xl"
              >
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                    {exp.company} <span className="text-gray-500 font-normal mx-1">|</span> {exp.role}
                  </h3>
                  <p className="text-gray-400 text-xs md:text-sm font-medium mt-1">{exp.period}</p>
                </div>
                
                {exp.description && (
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                    {renderFormattedText(exp.description)}
                  </p>
                )}

                {exp.bullets && (
                  <ul className="space-y-2.5 pt-1">
                    {exp.bullets.map((bullet: string, idx: number) => (
                      <li key={idx} className="text-gray-300 text-sm leading-relaxed flex gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2" />
                        {renderFormattedText(bullet)}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Portfolio Showcase */}
        <section id="projects" className="space-y-32">
          {[t.ipaam, t.w92, t.uses, t.lvgi].map((project, idx) => (
            <div key={idx} className="space-y-16">
              {/* Top Section: Title + About/Results on left, Grade 1 on right */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start"
              >
                {/* Left Content Column */}
                <div className="xl:col-span-7 space-y-8">
                  <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
                    {project.title}
                  </h2>

                  <div className="space-y-2">
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">
                      {project.aboutTitle}
                    </h3>
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                      {renderFormattedText(project.aboutText)}
                    </p>
                  </div>

                  <div className="space-y-2 pt-2">
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">
                      {project.resultsTitle}
                    </h3>
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                      {renderFormattedText(project.resultsText)}
                    </p>
                  </div>
                </div>

                {/* Right Grade 1 Image Column */}
                <div className="xl:col-span-5">
                  <img 
                    src={project.grade1Image} 
                    alt={`${project.title} - Grade 1`}
                    className="w-full h-auto block"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = project.grade1Fallback;
                    }}
                  />
                </div>
              </motion.div>

              {/* Middle Section: Grade 2 (Full Width Grid Image) */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
              >
                <img 
                  src={project.grade2Image} 
                  alt={`${project.title} - Grade 2`}
                  className="w-full h-auto block"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = project.grade2Fallback;
                  }}
                />
              </motion.div>

              {/* Bottom Section: Mockup (Full Width Image) or Video */}
              {'mockupImage' in project && project.mockupImage && (
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  className={project === t.ipaam ? "rounded-[16px] overflow-hidden" : ""}
                >
                  <img 
                    src={project.mockupImage} 
                    alt={`${project.title} - Mockup`}
                    className={`w-full h-auto block ${project === t.ipaam ? 'rounded-[16px]' : ''}`}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      if ('mockupFallback' in project && project.mockupFallback) {
                        (e.target as HTMLImageElement).src = project.mockupFallback;
                      }
                    }}
                  />
                </motion.div>
              )}

              {'extraImage' in project && project.extraImage && (
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <img 
                    src={project.extraImage} 
                    alt={`${project.title} - Extra`}
                    className="w-full h-auto block"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      if ('extraFallback' in project && project.extraFallback) {
                        (e.target as HTMLImageElement).src = project.extraFallback;
                      }
                    }}
                  />
                </motion.div>
              )}

              {'youtubeEmbed' in project && project.youtubeEmbed && (
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black/40">
                    <iframe
                      src={project.youtubeEmbed}
                      title={`${project.title} - Video`}
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  {'videoUrl' in project && project.videoUrl && (
                    <div className="flex justify-end">
                      <a
                        href={project.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-semibold text-gray-400 hover:text-white transition-colors bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-lg"
                      >
                        <Youtube size={16} className="text-red-500" />
                        <span>{lang === 'pt' ? 'Assistir no YouTube' : 'Watch on YouTube'}</span>
                        <ExternalLink size={14} className="opacity-70" />
                      </a>
                    </div>
                  )}
                </motion.div>
              )}
            </div>
          ))}
        </section>

        {/* Footer */}
        <footer className="pt-20 pb-10 border-t border-white/5 text-center">
          <p className="text-gray-500 text-sm font-medium flex items-center justify-center gap-2">
            {t.common.madeWith}
            <Bot size={16} className="text-emerald-500" />
          </p>
        </footer>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Toaster 
        position="top-center" 
        richColors 
        theme="dark" 
        toastOptions={{ 
          style: { 
            fontFamily: '"DM Sans", sans-serif',
            borderRadius: '1rem',
            background: '#0f0f0f',
            border: '1px solid rgba(255,255,255,0.1)',
            color: '#fff'
          } 
        }} 
      />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
