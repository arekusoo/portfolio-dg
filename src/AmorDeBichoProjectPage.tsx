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
  MousePointer2
} from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import OtherProjectsSidebar from './components/OtherProjectsSidebar';
import { DATA, Lang } from './data';

export default function AmorDeBichoProjectPage() {
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

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen relative font-sans bg-brand-bg overflow-x-hidden">
      {/* --- Background Glow --- */}
      <div className="bg-glow top-[-10%] left-[-10%] bg-[radial-gradient(circle,_rgba(240,98,146,0.8)_0%,_rgba(240,98,146,0.1)_70%,_transparent_100%)] opacity-[0.2]" />

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
            href="https://www.figma.com/proto/Zi1HcOUoauhZzPVxEFamRd/Desafio-EBAC?page-id=0%3A1&node-id=46-1682&viewport=-6490%2C-3219%2C0.44&scaling=min-zoom&starting-point-node-id=46%3A1682" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 bg-pink-500/10 border border-pink-500/20 rounded-full text-pink-400 text-sm font-bold hover:bg-pink-500/20 transition-all flex items-center justify-center gap-2"
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
              className="inline-block px-4 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-[10px] font-bold uppercase tracking-widest"
            >
              UX/UI Case Study • Social Impact
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl lg:text-7xl font-bold text-white tracking-tight"
            >
              Amor de Bicho
            </motion.h1>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="aspect-[16/9] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl"
          >
            <img 
              src="https://arekusoo.github.io/public/banner2.png" 
              alt="Amor de Bicho Hero"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
              fetchPriority="high"
            />
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-8 border-y border-white/5">
            <div>
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">{t.common.type}</p>
              <p className="text-white font-medium">Web App</p>
            </div>
            <div>
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">{t.common.role}</p>
              <p className="text-white font-medium">UX/UI Designer</p>
            </div>
            <div>
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">{t.common.duration}</p>
              <p className="text-white font-medium">{lang === 'pt' ? 'Desafio (Curto prazo)' : 'Challenge (Short term)'}</p>
            </div>
            <div>
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">{t.common.focus}</p>
              <p className="text-white font-medium">{lang === 'pt' ? 'Adoção Responsável' : 'Responsible Adoption'}</p>
            </div>
          </div>
        </header>

        {/* --- Overview --- */}
        <section className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-3xl font-bold text-white">{t.common.overview}</h2>
            <p className="text-gray-400 leading-relaxed text-lg">
              {lang === 'pt' 
                ? "Este projeto trata-se de produto digital que serve como central para ONG's de adoção de animais, possibilitando que haja anúncios, acompanhamento veterinário e dashboard de dados para ONG's. Foi desenvolvido como forma de estudo através de uma página de desafios para designers com foco em UX e UI."
                : "This project is a digital product that serves as a center for animal adoption NGOs, enabling advertisements, veterinary monitoring, and a data dashboard for NGOs. It was developed as a study through a challenge page for designers focusing on UX and UI."}
            </p>
          </div>
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">{t.common.objectives}</h3>
            <ul className="space-y-4">
              {(lang === 'pt' ? [
                "Aumentar a taxa de adoção das ONGs",
                "Tornar o processo de adoção mais rápido",
                "Relatório de saúde atualizado",
                "Dar mais visibilidade às ONGs"
              ] : [
                "Increase NGO adoption rates",
                "Make the adoption process faster",
                "Updated health report",
                "Give more visibility to NGOs"
              ]).map((obj, i) => (
                <li key={i} className="flex gap-3 text-gray-400 text-sm">
                  <div className="mt-1 shrink-0"><CheckCircle2 size={16} className="text-pink-400" /></div>
                  {obj}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* --- Methodology --- */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-white">{lang === 'pt' ? 'Processo de Design' : 'Design Process'}</h2>
            <p className="text-gray-400">{lang === 'pt' ? 'Cinco etapas fundamentais para a construção da solução.' : 'Five fundamental steps for building the solution.'}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { title: lang === 'pt' ? 'Entender' : 'Understand', icon: <Search size={20} /> },
              { title: lang === 'pt' ? 'Analisar' : 'Analyze', icon: <BarChart3 size={20} /> },
              { title: lang === 'pt' ? 'Criar' : 'Create', icon: <Lightbulb size={20} /> },
              { title: lang === 'pt' ? 'Prototipar' : 'Prototype', icon: <Layout size={20} /> },
              { title: lang === 'pt' ? 'Validar' : 'Validate', icon: <ClipboardCheck size={20} /> },
            ].map((item, i) => (
              <div key={i} className="organic-card p-6 text-center space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white mx-auto border border-white/10">
                  {item.icon}
                </div>
                <div>
                  <p className="text-white font-bold text-sm">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- Step 1: Entender --- */}
        <section className="space-y-12">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-pink-400 border border-white/10">
              <Search size={24} />
            </div>
            <h2 className="text-3xl font-bold text-white">{lang === 'pt' ? 'Entender' : 'Understand'}</h2>
          </div>
          
          <div className="organic-card p-8 space-y-12">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2"><Target size={20} className="text-pink-400" /> Matriz CSD</h3>
              <p className="text-gray-400 leading-relaxed">
                Utilizando uma Matriz CSD pude descobrir sobre o assunto a densidade do que conhecia, sobre como é a minha visão sobre adoção e o processo das adoções das ONG's. As perguntas direcionaram a pesquisa desk devido ao curto período de desenvolvimento.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-white/5 rounded-3xl border border-white/10 space-y-4">
                  <h4 className="text-white font-bold">Questões Norteadoras</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• Maiores necessidades das ONGs?</li>
                    <li>• O que é feito sem visibilidade?</li>
                    <li>• Meios digitais existentes?</li>
                    <li>• Classes sociais que mais adotam?</li>
                  </ul>
                </div>
                <div className="p-6 bg-white/5 rounded-3xl border border-white/10 space-y-4">
                  <h4 className="text-white font-bold">Técnica: Mapa Mental</h4>
                  <p className="text-sm text-gray-400">
                    Utilizada com o intuito de organizar visualmente as informações pensadas sobre o contexto e ramificar as possibilidades da solução.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Step 2: Analisar --- */}
        <section className="space-y-12">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-pink-400 border border-white/10">
              <BarChart3 size={24} />
            </div>
            <h2 className="text-3xl font-bold text-white">{lang === 'pt' ? 'Analisar' : 'Analyze'}</h2>
          </div>

          <div className="organic-card p-8 space-y-12">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-emerald-500/5 border border-emerald-500/10 rounded-3xl space-y-4">
                <h4 className="text-emerald-400 font-bold uppercase text-[10px] tracking-widest">Certezas</h4>
                <ul className="space-y-2 text-xs text-gray-400">
                  <li>• Clientes serão as ONGs</li>
                  <li>• Será um produto digital</li>
                  <li>• Auxílio na adoção de resgatados</li>
                </ul>
              </div>
              <div className="p-6 bg-blue-500/5 border border-blue-500/10 rounded-3xl space-y-4">
                <h4 className="text-blue-400 font-bold uppercase text-[10px] tracking-widest">Suposições</h4>
                <ul className="space-y-2 text-xs text-gray-400">
                  <li>• Adotantes são jovens</li>
                  <li>• Divulgação via redes sociais</li>
                  <li>• Preferência por gatos/cachorros</li>
                </ul>
              </div>
              <div className="p-6 bg-purple-500/5 border border-purple-500/10 rounded-3xl space-y-4">
                <h4 className="text-purple-400 font-bold uppercase text-[10px] tracking-widest">Dúvidas</h4>
                <ul className="space-y-2 text-xs text-gray-400">
                  <li>• Como as ONGs anunciam?</li>
                  <li>• Viabilidade de meios pagos?</li>
                  <li>• Como incentivar a adoção?</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white">Benchmarking & Referências</h3>
              <div className="rounded-none overflow-hidden border border-white/10">
                <img 
                  src="https://arekusoo.github.io/public/siteex.png" 
                  alt="Exemplo de portais atuais" 
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-center text-xs text-gray-500 italic">Exemplo de portais atuais com adoção online</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h4 className="text-white font-bold">Perfil do Adotante (PoderData)</h4>
                <div className="p-6 bg-white/5 rounded-3xl border border-white/10 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Mulheres</span>
                    <span className="text-pink-400 font-bold">65%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Jovens (16-24 anos)</span>
                    <span className="text-pink-400 font-bold">70%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Sem renda fixa</span>
                    <span className="text-pink-400 font-bold">68%</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-white font-bold">Insights de Pesquisa</h4>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li className="flex gap-2"><span className="text-pink-400">•</span> Simplificar documentação e taxas</li>
                  <li className="flex gap-2"><span className="text-pink-400">•</span> Marketing digital é vital para visibilidade</li>
                  <li className="flex gap-2"><span className="text-pink-400">•</span> Conscientização sobre saúde animal</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* --- Step 3: Criar --- */}
        <section className="space-y-12">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-pink-400 border border-white/10">
              <Lightbulb size={24} />
            </div>
            <h2 className="text-3xl font-bold text-white">{lang === 'pt' ? 'Criar' : 'Create'}</h2>
          </div>

          <div className="organic-card p-8 space-y-12">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2"><Zap size={20} className="text-pink-400" /> Requisitos do Projeto</h3>
              <div className="rounded-none overflow-hidden border border-white/10">
                <img 
                  src="https://arekusoo.github.io/public/requisitos.png" 
                  alt="Requisitos do Projeto" 
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-white font-bold flex items-center gap-2"><Map size={18} className="text-pink-400" /> Service Blueprint</h4>
                <div className="space-y-4">
                  <div className="rounded-none overflow-hidden border border-white/10">
                    <img src="https://arekusoo.github.io/public/servicebp(1).png" alt="Blueprint Adotante" className="w-full h-auto" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
                  </div>
                  <p className="text-[10px] text-gray-500 text-center uppercase">Persona: Adotante</p>
                  <div className="rounded-none overflow-hidden border border-white/10">
                    <img src="https://arekusoo.github.io/public/servicebp(2).png" alt="Blueprint ONG" className="w-full h-auto" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
                  </div>
                  <p className="text-[10px] text-gray-500 text-center uppercase">Persona: Representante ONG</p>
                </div>
              </div>
              <div className="space-y-6">
                <h4 className="text-white font-bold flex items-center gap-2"><Users size={18} className="text-pink-400" /> User Stories</h4>
                <div className="space-y-4">
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                    <p className="text-[10px] font-bold text-pink-400 uppercase mb-2">Gerente da ONG</p>
                    <p className="text-xs text-gray-400">"Quero cadastrar um animal com informações básicas para que eu possa adicionar animais que precisam de resgate no meu perfil."</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                    <p className="text-[10px] font-bold text-pink-400 uppercase mb-2">Adotante</p>
                    <p className="text-xs text-gray-400">"Quero poder selecionar um perfil de gato para adotar em uma ONG para que eu possa iniciar o processo de adoção."</p>
                  </div>
                </div>
                <h4 className="text-white font-bold flex items-center gap-2"><Layout size={18} className="text-pink-400" /> Fluxos & Wireframes</h4>
                <div className="rounded-none overflow-hidden border border-white/10">
                  <img src="https://arekusoo.github.io/public/fluxos(2).png" alt="Fluxos" className="w-full h-auto" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
                </div>
                <div className="rounded-none overflow-hidden border border-white/10">
                  <img src="https://arekusoo.github.io/public/wire(1).png" alt="Wireframes" className="w-full h-auto" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
                </div>
              </div>
            </div>

            {/* Visual Design Section */}
            <div className="space-y-12 pt-12 border-t border-white/5">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-white">Visual Design</h3>
                  <p className="text-gray-400 leading-relaxed">
                    O conceito visual baseia-se em <strong>amor, leveza e conforto</strong>. Utilizamos tons de rosa para reforçar o afeto, enquanto o branco e cinza auxiliam na fluidez da navegação.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                      <p className="text-[10px] font-bold text-gray-500 uppercase mb-2">Primária</p>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-[#F06292]" />
                        <span className="text-xs font-mono text-white">#F06292</span>
                      </div>
                    </div>
                    <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                      <p className="text-[10px] font-bold text-gray-500 uppercase mb-2">Sucesso</p>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-[#74BA53]" />
                        <span className="text-xs font-mono text-white">#74BA53</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-none overflow-hidden border border-white/10 shadow-2xl">
                  <img src="https://arekusoo.github.io/public/ps.png" alt="Painel Semântico" className="w-full h-auto" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="text-white font-bold">Branding</h4>
                  <div className="rounded-none overflow-hidden border border-white/10 bg-white/5 p-8 flex items-center justify-center">
                    <img src="https://arekusoo.github.io/public/brandingab.png" alt="Branding" className="max-w-full h-auto" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="text-white font-bold">Styleguide Components</h4>
                  <div className="rounded-none overflow-hidden border border-white/10 bg-white/5">
                    <img src="https://arekusoo.github.io/public/style2.png" alt="Styleguide" className="w-full h-auto" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Step 4: Prototipar --- */}
        <section className="space-y-12">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-pink-400 border border-white/10">
              <Layout size={24} />
            </div>
            <h2 className="text-3xl font-bold text-white">{lang === 'pt' ? 'Prototipar' : 'Prototype'}</h2>
          </div>

          <div className="space-y-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white">Interface Mobile</h3>
                <p className="text-gray-400 leading-relaxed">
                  Foco na facilidade de busca e no fluxo de adoção simplificado. O usuário pode filtrar por espécie, porte e localização.
                </p>
              </div>
              <div className="rounded-none overflow-hidden border border-white/10 shadow-2xl">
                <img src="https://arekusoo.github.io/public/proto1.png" alt="Protótipo Mobile" className="w-full h-auto" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">Interface Web</h3>
              <div className="rounded-none overflow-hidden border border-white/10 shadow-2xl">
                <img src="https://arekusoo.github.io/public/proto3.png" alt="Protótipo Web" className="w-full h-auto" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
              </div>
            </div>
          </div>
        </section>

        {/* --- Step 5: Validar --- */}
        <section className="space-y-12">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-pink-400 border border-white/10">
              <ClipboardCheck size={24} />
            </div>
            <h2 className="text-3xl font-bold text-white">{lang === 'pt' ? 'Validar' : 'Validate'}</h2>
          </div>

          <div className="organic-card p-8 space-y-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white">Testes & Resultados</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-white/5 rounded-2xl border border-white/10">
                    <span className="text-sm text-gray-400">Já adotaram animais</span>
                    <span className="text-emerald-400 font-bold">60%</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white/5 rounded-2xl border border-white/10">
                    <span className="text-sm text-gray-400">Nunca teve contato com ONGs</span>
                    <span className="text-emerald-400 font-bold">90%</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white/5 rounded-2xl border border-white/10">
                    <span className="text-sm text-gray-400">Dificuldade em encontrar ONG</span>
                    <span className="text-red-400 font-bold">70%</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-none overflow-hidden border border-white/10">
                  <img src="https://arekusoo.github.io/public/form.png" alt="Formulário de Teste" className="w-full h-auto" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
                </div>
                <p className="text-[10px] font-bold text-gray-500 text-center uppercase tracking-widest">Exemplo de Form</p>
              </div>
            </div>

            <div className="space-y-8 pt-8 border-t border-white/5">
              <h3 className="text-xl font-bold text-white">Ajustes & Melhorias</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="text-white font-bold flex items-center gap-2"><Layout size={18} className="text-pink-400" /> Indicativo de Seções</h4>
                  <div className="rounded-none overflow-hidden border border-white/10">
                    <img src="https://arekusoo.github.io/public/valida.png" alt="Melhoria Seções" className="w-full h-auto" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="text-white font-bold flex items-center gap-2"><Heart size={18} className="text-pink-400" /> Feedback de Solicitação</h4>
                  <div className="rounded-none overflow-hidden border border-white/10">
                    <img src="https://arekusoo.github.io/public/valida1.png" alt="Melhoria Feedback" className="w-full h-auto" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
                  </div>
                </div>
              </div>
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
        <OtherProjectsSidebar currentSlug="amor-de-bicho" lang={lang} />
      </main>
    </div>
  );
}
