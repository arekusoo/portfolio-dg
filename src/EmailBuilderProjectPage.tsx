import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  ExternalLink,
  Code,
  Layout,
  Search,
  X,
  Users,
  Target,
  Palette,
  Zap,
  Globe,
  Menu,
  Lightbulb,
  Mail,
  Send,
  Cpu,
  Layers,
  Sparkles,
  Terminal,
  MousePointer2,
  Table,
  Eye,
  Smartphone,
  CheckCircle2,
  Rocket
} from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import OtherProjectsSidebar from './components/OtherProjectsSidebar';
import { DATA, Lang } from './data';

export default function EmailBuilderProjectPage() {
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen relative font-sans bg-brand-bg overflow-x-hidden">
      {/* --- Background Glow --- */}
      <div className="bg-glow top-[-10%] left-[-10%] bg-[radial-gradient(circle,_rgba(99,102,241,0.8)_0%,_rgba(99,102,241,0.1)_70%,_transparent_100%)] opacity-[0.1]" />
      <div className="bg-glow bottom-[-10%] right-[-10%] bg-[radial-gradient(circle,_rgba(168,85,247,0.8)_0%,_rgba(168,85,247,0.1)_70%,_transparent_100%)] opacity-[0.1]" />

      {/* --- Mobile Header --- */}
      <div className={`lg:hidden fixed top-0 left-0 right-0 p-6 flex justify-between items-center z-[60] transition-all duration-300 ${scrolled ? 'bg-brand-bg/90 backdrop-blur-xl border-b border-white/5' : 'bg-transparent border-b border-transparent'}`}>
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 text-white bg-white/5 rounded-xl border border-white/10"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        <button 
          onClick={() => setLang(l => l === 'pt' ? 'en' : 'pt')}
          className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold tracking-[0.2em] text-white hover:bg-white/10 transition-all flex items-center gap-2"
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
      <main className="flex-1 lg:ml-[24rem] fhd:mr-[24rem] p-8 lg:p-16 pt-32 lg:pt-16 max-w-7xl mx-auto">
        <div className="space-y-24">
        
        {/* --- Navigation & Header --- */}
        <nav className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <Link to="/" className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <div className="p-2 rounded-xl bg-white/5 border border-white/10 group-hover:bg-white/10 transition-all">
              <ArrowLeft size={18} />
            </div>
            <span className="text-sm font-medium">{t.common.back}</span>
          </Link>
          <a 
            href="https://newsletter-master-editor.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-sm font-bold hover:bg-indigo-500/20 transition-all flex items-center justify-center gap-2"
          >
            {lang === 'pt' ? 'Acessar Ferramenta' : 'Access Tool'} <ExternalLink size={16} />
          </a>
        </nav>

        {/* --- Hero Section --- */}
        <header className="space-y-8">
          <div className="space-y-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-bold uppercase tracking-widest"
            >
              Case Study • AI Engineering • Research Tools
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-6xl font-bold text-white tracking-tight"
            >
              {lang === 'pt' ? 'E-mail builder para grupo de pesquisa' : 'Email builder for research group'}
            </motion.h1>
            <p className="text-xl text-gray-400 font-medium max-w-2xl">
              {lang === 'pt' 
                ? 'Stack: Google AI Studio (Gemini), HTML/Inline CSS, GitHub, Vercel.' 
                : 'Stack: Google AI Studio (Gemini), HTML/Inline CSS, GitHub, Vercel.'}
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="aspect-[16/9] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl relative bg-indigo-900/20"
          >
            <img 
              src="https://lh3.googleusercontent.com/d/1G8WIbR42NVBhCQOxcaWpLMxeV6XcF5I0" 
              alt="Email Builder Interface"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-8 border-y border-white/5">
            <div>
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">{t.common.type}</p>
              <p className="text-white font-medium">Web App / Tool</p>
            </div>
            <div>
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">{t.common.role}</p>
              <p className="text-white font-medium">Designer Vibe Coder</p>
            </div>
            <div>
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">{t.common.duration}</p>
              <p className="text-white font-medium">{lang === 'pt' ? '2 horas' : '2 hours'}</p>
            </div>
            <div>
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">{t.common.focus}</p>
              <p className="text-white font-medium">Automation</p>
            </div>
          </div>
        </header>

        {/* --- 01. Oportunidade --- */}
        <section className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-3xl font-bold text-white">01. {lang === 'pt' ? 'Oportunidade' : 'Opportunity'}</h2>
            <p className="text-gray-400 leading-relaxed text-lg">
              {lang === 'pt' 
                ? "Grupos de pesquisa dependem de newsletters para divulgar editais e resultados, mas a formatação de e-mails em plataformas como o Gmail é limitada. Identifiquei a necessidade de uma ferramenta que permitisse a criação rápida de comunicados visualmente consistentes, sem a complexidade de plataformas de marketing tradicionais."
                : "Research groups depend on newsletters to share calls and results, but email formatting in platforms like Gmail is limited. I identified the need for a tool that would allow rapid creation of visually consistent communications without the complexity of traditional marketing platforms."}
            </p>
          </div>
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">{lang === 'pt' ? 'Key Specs' : 'Key Specs'}</h3>
            <div className="space-y-4">
              {[
                { icon: <Zap size={16} />, text: lang === 'pt' ? 'Criação em 5 min' : 'Creation in 5 min' },
                { icon: <Code size={16} />, text: 'Clean Table Layout' },
                { icon: <Cpu size={16} />, text: 'Gemini 1.5 Integration' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-400 text-sm">
                  <div className="text-indigo-400">{item.icon}</div>
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- 02. Requisitos --- */}
        <section className="space-y-12">
          <h2 className="text-3xl font-bold text-white">02. {lang === 'pt' ? 'Definição de Requisitos' : 'Requirement Definition'}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="organic-card p-8 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                <MousePointer2 size={20} />
              </div>
              <h4 className="text-white font-bold">{lang === 'pt' ? 'Interface de Edição' : 'Editing Interface'}</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                {lang === 'pt' ? 'Manipulação direta de variáveis do template (títulos, links e corpo de texto).' : 'Direct manipulation of template variables (titles, links, and body text).'}
              </p>
            </div>
            <div className="organic-card p-8 space-y-4 border-white/10 bg-white/[0.02]">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                <Eye size={20} />
              </div>
              <h4 className="text-white font-bold">{lang === 'pt' ? 'Preview em Tempo Real' : 'Real-time Preview'}</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                {lang === 'pt' ? 'Visualização instantânea do render final da newsletter conforme os campos são preenchidos.' : 'Instant visualization of the final newsletter render as fields are filled.'}
              </p>
            </div>
            <div className="organic-card p-8 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                <Table size={20} />
              </div>
              <h4 className="text-white font-bold">{lang === 'pt' ? 'Compatibilidade de Saída' : 'Output Compatibility'}</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                {lang === 'pt' ? 'Exportação em <table> com CSS inline, garantindo que o layout não quebre no Gmail ou Outlook.' : 'Export in <table> with inline CSS, ensuring the layout doesn\'t break in Gmail or Outlook.'}
              </p>
            </div>
          </div>
        </section>

        {/* --- 03. AI Studio --- */}
        <section className="space-y-12">
          <div className="bg-indigo-500/5 border border-indigo-500/10 p-12 rounded-[3rem] flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-[10px] font-bold uppercase tracking-widest border border-indigo-500/20">
                <Cpu size={14} /> AI Powered
              </div>
              <h2 className="text-3xl font-bold text-white">03. {lang === 'pt' ? 'Engenharia de Prompt (V1 no AI Studio)' : 'Prompt Engineering (V1 on AI Studio)'}</h2>
              <p className="text-gray-400 leading-relaxed">
                {lang === 'pt' 
                  ? "Utilizei o Google AI Studio para prototipar a lógica do gerador. O prompt estruturado para a primeira versão focou em garantir a saída técnica correta para renderização de e-mails legados."
                  : "I used Google AI Studio to prototype the generator logic. The structured prompt for the first version focused on ensuring the correct technical output for legacy email rendering."}
              </p>
            </div>
            <div className="flex-1 w-full p-6 bg-black/40 rounded-2xl border border-white/5 font-mono text-xs text-indigo-300 leading-relaxed shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-1 bg-indigo-500/50" />
               <p className="mb-4 text-gray-500">// System Prompt Example</p>
               <p>"{lang === 'pt' ? 'Atue como um desenvolvedor Front-end especialista em Email Marketing. Gere uma aplicação single-page (HTML/JS) que funcione como um builder de newsletter...' : 'Act as a Front-end developer specialized in Email Marketing. Generate a single-page application (HTML/JS) that works as a newsletter builder...'}"</p>
            </div>
          </div>
        </section>

        {/* --- 04. Garrett --- */}
        <section className="space-y-12">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 border border-indigo-500/20">
              <Layers size={24} />
            </div>
            <h2 className="text-3xl font-bold text-white">04. {lang === 'pt' ? 'Desenvolvimento e Implementação (Garrett)' : 'Development and Implementation (Garrett)'}</h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { title: lang === 'pt' ? 'Estratégia' : 'Strategy', content: lang === 'pt' ? 'Foco na agilidade para o grupo.' : 'Focus on group speed.' },
              { title: lang === 'pt' ? 'Escopo' : 'Scope', content: lang === 'pt' ? 'Exportação "One-Click Copy".' : '"One-Click Copy" export.' },
              { title: lang === 'pt' ? 'Estrutura' : 'Structure', content: lang === 'pt' ? 'Fluxo: Editar → Gerar → Copiar.' : 'Flow: Edit → Generate → Copy.' },
              { title: lang === 'pt' ? 'Esqueleto' : 'Skeleton', content: lang === 'pt' ? 'Interface Minimalista.' : 'Minimalist Interface.' },
              { title: lang === 'pt' ? 'Superfície' : 'Surface', content: lang === 'pt' ? 'Leitura acadêmica limpa.' : 'Clean academic reading.' },
            ].map((step, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/5 space-y-2 hover:border-indigo-500/30 transition-colors group">
                <p className="text-indigo-400 font-bold text-xs uppercase tracking-widest">{step.title}</p>
                <p className="text-gray-400 text-xs leading-relaxed group-hover:text-white transition-colors">{step.content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- 05. Deploy --- */}
        <section className="space-y-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">05. {lang === 'pt' ? 'Deploy e Distribuição' : 'Deploy and Distribution'}</h2>
              <p className="text-gray-400 leading-relaxed text-lg">
                {lang === 'pt' 
                  ? "Para tornar a ferramenta acessível ao grupo, utilizei GitHub para versionamento e Vercel para CI/CD, garantindo uma aplicação de alta performance."
                  : "To make the tool accessible to the group, I used GitHub for versioning and Vercel for CI/CD, ensuring a high-performance application."}
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                  <Terminal size={18} className="text-indigo-400" />
                  <span className="text-white text-sm font-medium">GitHub Repo</span>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                  <Rocket size={18} className="text-indigo-400" />
                  <span className="text-white text-sm font-medium">Vercel Deploy</span>
                </div>
              </div>
            </div>
            <div className="organic-card p-8 bg-indigo-500/5 space-y-6">
              <h4 className="text-white font-bold">{lang === 'pt' ? 'Destaques Técnicos' : 'Technical Highlights'}</h4>
              <ul className="space-y-4">
                {[
                  { title: 'Renderização', text: lang === 'pt' ? 'Tabelas aninhadas para contornar limitações de CSS.' : 'Nested tables to bypass CSS limitations.' },
                  { title: lang === 'pt' ? 'IA como Motor' : 'AI as Engine', text: lang === 'pt' ? 'Geração dinâmica de blocos acadêmicos.' : 'Dynamic generation of academic blocks.' },
                  { title: 'Performance', text: 'Static Site Generator (SSG) via Vercel.' }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-indigo-400 mt-1 shrink-0" />
                    <div>
                      <p className="text-white text-sm font-bold">{item.title}</p>
                      <p className="text-gray-500 text-xs">{item.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* --- Footer CTA --- */}
        <footer className="py-24 text-center space-y-8 border-t border-white/5">
          <h2 className="text-3xl lg:text-5xl font-bold text-white tracking-tight">{t.common.ctaTitle}</h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            {t.common.ctaText}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://wa.me/5592982043805" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-full font-bold hover:scale-105 transition-all flex items-center justify-center"
            >
              {t.common.ctaButton}
            </a>
            <Link to="/" className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-bold hover:bg-white/10 transition-all">
              {t.common.otherProjects}
            </Link>
          </div>
        </footer>
        </div>

        {/* --- Right Column: Other Projects --- */}
        <OtherProjectsSidebar currentSlug="email-builder" lang={lang} />
      </main>
    </div>
  );
}
