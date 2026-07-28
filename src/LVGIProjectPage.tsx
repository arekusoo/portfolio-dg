import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  ExternalLink,
  CheckCircle2,
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
  Smartphone,
  Heart,
  MessageCircle,
  FileText,
  BarChart3,
  ClipboardCheck,
  Map,
  Eye,
  MousePointer2,
  Accessibility,
  Cpu,
  Layers,
  Sparkles
} from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import OtherProjectsSidebar from './components/OtherProjectsSidebar';
import { DATA, Lang } from './data';

export default function LVGIProjectPage() {
  const { id } = useParams();
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

  // Image mappings - Using the provided links with direct access pattern
  const images = {
    banner: "https://lh3.googleusercontent.com/d/10TCOFc8MzCv0CXj_7fHDXx7NAm_s3Qwt",
    scope: "https://lh3.googleusercontent.com/d/1-KgGAfUhBTOJ0Joorpv5vatXhK5aVK9a",
    structure: "https://lh3.googleusercontent.com/d/1Bl3_kD9gJCsBCINUaw4X3FNKjeORKucN",
    wireframe1: "https://lh3.googleusercontent.com/d/1r8B7beBgcOhlzXF-uZ9gcPxN54yob79V",
    wireframe2: "https://lh3.googleusercontent.com/d/1KTvRHI8BOqB7-HyLnw06_nkE90QEcGGu",
    semanticBoard: "https://lh3.googleusercontent.com/d/1-auarcQR3bnzgqoTxP91ClRGxdkK0C03",
    chromatism: "https://lh3.googleusercontent.com/d/1pgN0yqE2QfYsYYPl84Xp_ZFZoHTGp7rX",
    characters: "https://lh3.googleusercontent.com/d/1gv8vEGtMajfPP1u4zHFMJUWbX_Xa3ab5",
    uiKit: "https://lh3.googleusercontent.com/d/16SVRCTBUXrWNlPiRmS-JOIAvwudwa3T1",
    finalScreens: "https://lh3.googleusercontent.com/d/1paB4QsK961O6xGvzjFz7EM58MX1VnG1b",
  };

  const [fullScreenImage, setFullScreenImage] = useState<string | null>(null);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen relative font-sans bg-brand-bg overflow-x-hidden">
      {/* --- Full Screen Image Overlay --- */}
      {fullScreenImage && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4">
          <button 
            onClick={() => setFullScreenImage(null)}
            className="absolute top-8 right-8 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all z-[110]"
          >
            <X size={32} />
          </button>
          <motion.img 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            src={fullScreenImage} 
            className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
            referrerPolicy="no-referrer"
          />
        </div>
      )}
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
      <main className="flex-1 w-full lg:ml-[24rem] fhd:mr-[24rem] p-6 sm:p-8 lg:p-16 pt-32 lg:pt-16 max-w-7xl mx-auto overflow-x-hidden">
        <div className="space-y-16 lg:space-y-24">
        
        {/* --- Navigation & Header --- */}
        <nav className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <Link to="/" className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <div className="p-2 rounded-xl bg-white/5 border border-white/10 group-hover:bg-white/10 transition-all">
              <ArrowLeft size={18} />
            </div>
            <span className="text-sm font-medium">{t.common.back}</span>
          </Link>
          <a 
            href="https://www.figma.com/proto/P3w2OPhuu5gkik9LHEDIdU/Arquivo?node-id=919-1571&t=CgUJxaZzCnBiDjVl-0&scaling=min-zoom&content-scaling=fixed&page-id=513%3A2&starting-point-node-id=919%3A1571" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-sm font-bold hover:bg-indigo-500/20 transition-all flex items-center justify-center gap-2"
          >
            {t.common.viewPrototype} <ExternalLink size={16} />
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
              UX/UI Design & AI Inspection
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white tracking-tight"
            >
              LVGI
            </motion.h1>
            <p className="text-xl text-gray-400 font-medium">
              {lang === 'pt' ? 'Plugin de IA para Inspeção Inclusiva no Figma' : 'AI Plugin for Inclusive Inspection in Figma'}
            </p>
          </div>

          <motion.button 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            onClick={() => setFullScreenImage(images.banner)}
            className="aspect-[16/9] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl relative group w-full"
          >
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100 z-10">
              <Eye className="text-white" size={48} />
            </div>
            <img 
              src={images.banner} 
              alt="LVGI Hero"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
          </motion.button>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 py-8 border-y border-white/5">
            <div>
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">{t.common.year}</p>
              <p className="text-white font-medium">2024</p>
            </div>
            <div>
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">{t.common.role}</p>
              <p className="text-white font-medium">UX/UI Designer</p>
            </div>
            <div>
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">{t.common.client}</p>
              <p className="text-white font-medium">USES / UFAM</p>
            </div>
            <div>
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">{t.common.tools}</p>
              <p className="text-white font-medium">Figma, AI Studio</p>
            </div>
          </div>
        </header>

        {/* --- Overview --- */}
        <section className="grid lg:grid-cols-3 gap-12 text-gray-400">
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-3xl font-bold text-white tracking-tight">{lang === 'pt' ? 'Visão geral' : 'Overview'}</h2>
            <p className="leading-relaxed text-lg">
              {lang === 'pt' 
                ? "Decisões de interface criam barreiras invisíveis. No desenvolvimento ágil, métodos analíticos como o GenderMag (que identifica vieses de gênero baseados em estilos cognitivos) são frequentemente abandonados por serem manuais, lentos e dependerem de especialistas."
                : "Interface decisions create invisible barriers. In agile development, analytical methods like GenderMag (which identifies gender biases based on cognitive styles) are often abandoned because they are manual, slow, and depend on specialists."}
            </p>
            <p className="leading-relaxed text-lg text-white">
              <strong>
                {lang === 'pt' 
                  ? "Este método de inspeção ajuda a tornar interfaces mais inclusivas, tanto para homens quanto para mulheres." 
                  : "This inspection method helps make interfaces more inclusive for both men and women."}
              </strong>
            </p>
          </div>
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="w-1 h-6 bg-indigo-500 rounded-full" />
              {lang === 'pt' ? 'O Desafio' : 'The Challenge'}
            </h3>
            <p className="text-sm italic leading-relaxed">
              {lang === 'pt'
                ? "Como integrar a inteligência do GenderMag ao fluxo de trabalho do designer, utilizando IA para reduzir a carga cognitiva da inspeção?"
                : "How to integrate GenderMag's intelligence into the designer's workflow, using AI to reduce the cognitive load of inspection?"}
            </p>
          </div>
        </section>

        {/* --- Methodology Section --- */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-white">{lang === 'pt' ? 'Metodologia: Os 5 Planos de Garrett' : 'Methodology: Garrett\'s 5 Planes'}</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              {lang === 'pt' 
                ? "A estrutura do projeto foi fundamentada no framework de Jesse James Garrett, garantindo que a interface final fosse o reflexo de decisões estratégicas sólidas."
                : "The project structure was based on Jesse James Garrett's framework, ensuring that the final interface was the reflection of solid strategic decisions."}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4">
            {[
              { title: lang === 'pt' ? 'Estratégia' : 'Strategy', icon: <Target size={24} /> },
              { title: lang === 'pt' ? 'Escopo' : 'Scope', icon: <Zap size={24} /> },
              { title: lang === 'pt' ? 'Estrutura' : 'Structure', icon: <Layers size={24} /> },
              { title: lang === 'pt' ? 'Esqueleto' : 'Skeleton', icon: <Layout size={24} /> },
              { title: lang === 'pt' ? 'Superfície' : 'Surface', icon: <Palette size={24} /> },
            ].map((item, i) => (
              <div key={i} className="organic-card p-4 sm:p-6 text-center space-y-4 overflow-hidden">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mx-auto">
                  {item.icon}
                </div>
                <div>
                  <p className="text-white font-bold text-[10px] sm:text-xs uppercase tracking-widest">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- 1. Plano da Estratégia --- */}
        <section className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-indigo-400 border border-white/10">
              <Target size={24} />
            </div>
            <h2 className="text-3xl font-bold text-white">1. {lang === 'pt' ? 'Plano da Estratégia' : 'Strategy Plane'}</h2>
          </div>
          <div className="organic-card p-6 sm:p-8 lg:p-10 space-y-6">
            <p className="text-gray-400 leading-relaxed">
              {lang === 'pt' 
                ? "Nesta fase, cruzamos as necessidades do usuário (designers) com os objetivos do produto. O foco foi identificar como facilitar a interpretação das facetas cognitivas sem exigir um especialista acadêmico."
                : "In this phase, we crossed user needs (designers) with product objectives. The focus was on identifying how to facilitate the interpretation of cognitive facets without requiring an academic specialist."}
            </p>
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="p-6 bg-white/5 rounded-2xl border border-white/5 space-y-2">
                <h4 className="text-white font-bold">{lang === 'pt' ? 'Pesquisa Prévia' : 'Initial Research'}</h4>
                <p className="text-sm text-gray-400">{lang === 'pt' ? 'Utilizamos dados de um Project Idea Canvas e grupos de foco com designers da UFAM.' : 'We used data from a Project Idea Canvas and focus groups with UFAM designers.'}</p>
              </div>
              <div className="p-6 bg-white/5 rounded-2xl border border-white/5 space-y-2">
                <h4 className="text-white font-bold">{lang === 'pt' ? 'Principais Achados' : 'Key Findings'}</h4>
                <p className="text-sm text-gray-400">{lang === 'pt' ? 'A maior dor é a dificuldade de interpretar facetas (motivação, autoeficácia, tinkering) sem ajuda externa.' : 'The main pain point is the difficulty of interpreting facets (motivation, self-efficacy, tinkering) without external help.'}</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-indigo-500/5 rounded-2xl border border-indigo-500/10">
              <div className="mt-1"><Target size={20} className="text-indigo-400" /></div>
              <div>
                <p className="text-white font-bold underline decoration-indigo-500/30 underline-offset-4">{lang === 'pt' ? 'Objetivo do Projeto' : 'Project Objective'}</p>
                <p className="text-gray-400 text-sm mt-2">{lang === 'pt' ? 'Criar uma ferramenta que ofereça apoio visual e organização clara dos achados da inspeção dentro do Figma.' : 'Create a tool that offers visual support and clear organization of inspection findings within Figma.'}</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- 2. Plano do Escopo --- */}
        <section className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-indigo-400 border border-white/10">
              <Zap size={24} />
            </div>
            <h2 className="text-3xl font-bold text-white">2. {lang === 'pt' ? 'Plano do Escopo' : 'Scope Plane'}</h2>
          </div>
          <div className="organic-card p-6 sm:p-8 lg:p-10 space-y-6">
            <p className="text-gray-400 leading-relaxed">
              {lang === 'pt' 
                ? "Traduzimos as necessidades em funcionalidades concretas utilizando a Matriz MoSCoW para priorização, garantindo que o MVP fosse funcional e focado."
                : "We translated needs into concrete functionalities using the MoSCoW Matrix for prioritization, ensuring that the MVP was functional and focused."}
            </p>
            <button 
              onClick={() => setFullScreenImage(images.scope)}
              className="aspect-video w-full rounded-3xl overflow-hidden border border-white/5 group relative"
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100 z-10">
                <Eye className="text-white" size={32} />
              </div>
              <img 
                src={images.scope} 
                alt="Scope Plane" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </button>
          </div>
        </section>

        {/* --- 3. Plano da Estrutura --- */}
        <section className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-indigo-400 border border-white/10">
              <Layers size={24} />
            </div>
            <h2 className="text-3xl font-bold text-white">3. {lang === 'pt' ? 'Plano da Estrutura' : 'Structure Plane'}</h2>
          </div>
          <div className="organic-card p-6 sm:p-8 lg:p-10 space-y-6 overflow-hidden">
            <p className="text-gray-400 leading-relaxed text-center">
              {lang === 'pt' 
                ? "Definimos o fluxo lógico para que a inspeção fosse sequencial e intuitiva, conectando achados diretamente às facetas cognitivas."
                : "We defined the logical flow for the inspection to be sequential and intuitive, connecting findings directly to cognitive facets."}
            </p>
            <div className="bg-brand-bg rounded-3xl p-4 sm:p-8 border border-white/5 overflow-x-auto max-w-full">
              <div className="min-w-[450px] flex items-center justify-between gap-3 sm:gap-4 px-2">
                {[
                  { label: lang === 'pt' ? 'Acesso' : 'Access', sub: 'Plugin' },
                  { label: lang === 'pt' ? 'Persona' : 'Persona', sub: 'Select' },
                  { label: lang === 'pt' ? 'Mídia' : 'Media', sub: 'Frame/Img' },
                  { label: lang === 'pt' ? 'IA' : 'AI', sub: 'Analysis' },
                  { label: lang === 'pt' ? 'Relatório' : 'Report', sub: 'Result' }
                ].map((step, i, arr) => (
                  <div key={i} className="flex items-center gap-2 sm:gap-4 flex-1">
                    <div className="flex-1 p-3 sm:p-4 bg-white/5 rounded-2xl border border-white/10 text-center">
                      <p className="text-white font-bold text-[10px] uppercase">{step.label}</p>
                      <p className="text-gray-500 text-[8px] sm:text-[10px] uppercase tracking-tighter">{step.sub}</p>
                    </div>
                    {i < arr.length - 1 && <span className="text-gray-700 text-xs sm:text-base">→</span>}
                  </div>
                ))}
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-2xl mx-auto italic">
              {lang === 'pt' 
                ? "“A arquitetura foi pensada para que o designer compreenda o 'porquê' de cada erro, não apenas o que mudar.”"
                : "“The architecture was designed so that the designer understands the 'why' of each error, not just what to change.”"}
            </p>
            <button 
              onClick={() => setFullScreenImage(images.structure)}
              className="aspect-video w-full rounded-3xl overflow-hidden border border-white/5 mt-8 group relative"
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100 z-10">
                <Eye className="text-white" size={32} />
              </div>
              <img 
                src={images.structure} 
                alt="Structure Plane" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </button>
          </div>
        </section>

        {/* --- 4. Plano do Esqueleto --- */}
        <section className="space-y-8 text-gray-400">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-indigo-400 border border-white/10">
              <Layout size={24} />
            </div>
            <h2 className="text-3xl font-bold text-white">4. {lang === 'pt' ? 'Plano do Esqueleto' : 'Skeleton Plane'}</h2>
          </div>
          <div className="organic-card p-6 sm:p-8 lg:p-10 space-y-6 text-center overflow-hidden">
            <p className="leading-relaxed">
              {lang === 'pt' 
                ? "Aqui, a estrutura ganhou forma através de wireframes de baixa e média fidelidade. O foco principal foi garantir que a área de upload e a área de resultados não gerassem sobrecarga visual."
                : "Here, the structure took shape through low and mid-fidelity wireframes. The main focus was to ensure that the upload area and results area did not generate visual overload."}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div className="space-y-4">
                <button 
                  onClick={() => setFullScreenImage(images.wireframe1)}
                  className="aspect-[4/3] w-full rounded-3xl overflow-hidden border border-white/10 group relative"
                >
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100 z-10">
                    <Eye className="text-white" size={32} />
                  </div>
                  <img src={images.wireframe1} alt="Wireframe 1" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                </button>
              </div>
              <div className="space-y-4">
                <button 
                  onClick={() => setFullScreenImage(images.wireframe2)}
                  className="aspect-[4/3] w-full rounded-3xl overflow-hidden border border-white/10 group relative"
                >
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100 z-10">
                    <Eye className="text-white" size={32} />
                  </div>
                  <img src={images.wireframe2} alt="Wireframe 2" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                </button>
              </div>
            </div>
            <p className="text-gray-500 text-xs font-medium uppercase tracking-widest pt-4">{lang === 'pt' ? 'Wireframes do plugin' : 'Plugin Wireframes'}</p>
          </div>
        </section>

        {/* --- 5. Plano da Superfície --- */}
        <section className="space-y-12">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-indigo-400 border border-white/10">
              <Palette size={24} />
            </div>
            <h2 className="text-3xl font-bold text-white">5. {lang === 'pt' ? 'Plano da Superfície' : 'Surface Plane'}</h2>
          </div>
          <div className="flex flex-col gap-8 lg:gap-12">
            <div className="organic-card p-6 sm:p-8 lg:p-10 space-y-6 overflow-hidden">
              <h4 className="text-white font-bold flex items-center gap-2 text-xl tracking-tight leading-none">
                <Palette size={24} className="text-indigo-400" /> 
                {lang === 'pt' ? 'Painel semântico' : 'Semantic Board'}
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {lang === 'pt' 
                  ? "Materialização visual focada em Confiança e Acessibilidade. Utilizamos formas geométricas simples e cantos arredondados (radius de 16px+) para uma interface amigável."
                  : "Visual materialization focused on Confidence and Accessibility. We used simple geometric shapes and rounded corners (16px+ radius) for a friendly interface."}
              </p>
              <button 
                onClick={() => setFullScreenImage(images.semanticBoard)}
                className="aspect-video w-full rounded-2xl overflow-hidden border border-white/5 group relative"
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100 z-10">
                  <Eye className="text-white" size={32} />
                </div>
                <img src={images.semanticBoard} alt="Visual Design" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
              </button>
            </div>

            <div className="organic-card p-6 sm:p-8 lg:p-10 space-y-6 overflow-hidden">
              <h4 className="text-white font-bold flex items-center gap-2 text-xl tracking-tight leading-none">
                <Zap size={24} className="text-indigo-400" /> 
                {lang === 'pt' ? 'Cromatismo' : 'Chromatism'}
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {lang === 'pt' 
                  ? "Definimos uma paleta entre azul (confiança) e roxo (inovação), validada por testes de contraste (WCAG) para garantir a legibilidade das instruções da IA."
                  : "We defined a palette between blue (trust) and purple (innovation), validated by contrast tests (WCAG) to ensure the legibility of AI instructions."}
              </p>
              <button 
                onClick={() => setFullScreenImage(images.chromatism)}
                className="aspect-video w-full rounded-2xl overflow-hidden border border-white/5 group relative"
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100 z-10">
                  <Eye className="text-white" size={32} />
                </div>
                <img src={images.chromatism} alt="Chromatism" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
              </button>
            </div>

            <div className="organic-card p-6 sm:p-8 lg:p-10 space-y-6 overflow-hidden">
              <h4 className="text-white font-bold text-xl flex items-center gap-2">
                <Users size={24} className="text-indigo-400" />
                {lang === 'pt' ? 'Personagens e empatia' : 'Characters and empathy'}
              </h4>
              <p className="text-gray-400 leading-relaxed text-sm">
                {lang === 'pt' 
                  ? "Redesenhamos as personas do GenderMag (Abby, Tim, Pat) com traços antropomórficos. O objetivo foi fugir do puramente técnico e gerar uma conexão mais profunda entre o designer e o usuário final durante a inspeção."
                  : "We redesigned the GenderMag personas (Abby, Tim, Pat) with anthropomorphic traits. The goal was to move away from the purely technical and generate a deeper connection between the designer and the end user during inspection."}
              </p>
              <button 
                onClick={() => setFullScreenImage(images.characters)}
                className="aspect-video w-full rounded-2xl overflow-hidden border border-white/5 group relative"
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100 z-10">
                  <Eye className="text-white" size={32} />
                </div>
                <img src={images.characters} alt="Characters" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
              </button>
            </div>

            <div className="organic-card p-6 sm:p-8 lg:p-10 space-y-6 overflow-hidden">
              <h4 className="text-white font-bold text-xl flex items-center gap-2 underline decoration-indigo-500/30 underline-offset-8">
                UI Kit
              </h4>
              <p className="text-gray-400 leading-relaxed text-sm">
                {lang === 'pt' 
                  ? "Sistema completo de componentes (estados de erro, botões, ícones e feedbacks) garantindo consistência visual e eficiência no desenvolvimento."
                  : "Complete system of components (error states, buttons, icons, and feedback) ensuring visual consistency and development efficiency."}
              </p>
              <button 
                onClick={() => setFullScreenImage(images.uiKit)}
                className="aspect-square w-full rounded-2xl overflow-hidden border border-white/5 group relative"
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100 z-10">
                  <Eye className="text-white" size={32} />
                </div>
                <img src={images.uiKit} alt="UI Kit" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
              </button>
            </div>

            <div className="organic-card p-6 sm:p-8 lg:p-10 space-y-6 overflow-hidden">
              <h4 className="text-white font-bold text-xl flex items-center gap-2 underline decoration-indigo-500/30 underline-offset-8">
                {lang === 'pt' ? 'Telas finais' : 'Final Screens'}
              </h4>
              <p className="text-gray-400 leading-relaxed text-sm">
                {lang === 'pt' 
                  ? "Interfaces de alta fidelidade do plugin LVGI, apresentando o fluxo de seleção, análise e resultados finais."
                  : "High-fidelity interfaces of the LVGI plugin, showing the selection, analysis, and final results flow."}
              </p>
              <button 
                onClick={() => setFullScreenImage(images.finalScreens)}
                className="aspect-video w-full rounded-2xl overflow-hidden border border-white/5 group relative border-white/10"
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100 z-10">
                  <Eye className="text-white" size={32} />
                </div>
                <img src={images.finalScreens} alt="Final Screens" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
              </button>
            </div>
          </div>
        </section>

        {/* --- Conclusion --- */}
        <section className="space-y-12">
          <div className="text-center py-12 space-y-8">
             <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">{lang === 'pt' ? 'Conclusão' : 'Conclusion'}</h2>
             <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed text-lg italic">
               {lang === 'pt'
                 ? "O LVGI demonstra que a IA generativa pode ser uma aliada do design inclusivo. Ao situar a inspeção dentro do Figma, reduzimos a distância entre a teoria acadêmica e a prática projetual, transformando uma análise complexa em uma etapa natural do dia a dia do designer."
                 : "LVGI demonstrates that generative AI can be an ally of inclusive design. By situating the inspection within Figma, we reduced the distance between academic theory and design practice, transforming a complex analysis into a natural step of the designer's daily life."}
             </p>
             
             <div className="space-y-4 pt-12">
               <div className="aspect-video w-full rounded-2xl sm:rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
                 <iframe 
                   className="w-full h-full"
                   src="https://www.youtube.com/embed/Qqzj6p88KOA" 
                   title="YouTube video player" 
                   frameBorder="0" 
                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                   referrerPolicy="strict-origin-when-cross-origin" 
                   allowFullScreen
                 ></iframe>
               </div>
               <p className="text-gray-500 text-xs font-medium tracking-widest">{lang === 'pt' ? 'Demonstração sobre facetas do método' : 'Methodology facets demonstration'}</p>
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
        <OtherProjectsSidebar currentSlug="lvgi" lang={lang} />
      </main>
    </div>
  );
}
