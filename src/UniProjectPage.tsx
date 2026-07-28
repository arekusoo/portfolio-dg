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
  MessageCircle
} from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import OtherProjectsSidebar from './components/OtherProjectsSidebar';
import { DATA, Lang } from './data';

export default function UniProjectPage() {
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
      <div className="bg-glow top-[-10%] left-[-10%] bg-[radial-gradient(circle,_rgba(59,130,246,0.8)_0%,_rgba(59,130,246,0.1)_70%,_transparent_100%)] opacity-[0.2]" />

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
            href="https://static.even3.com/anais/46800.pdf?v=639118136998100583" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-bold hover:bg-blue-500/20 transition-all flex items-center justify-center gap-2"
          >
            {t.common.viewArticle} <ExternalLink size={16} />
          </a>
        </nav>

        {/* --- Hero Section --- */}
        <header className="space-y-8">
          <div className="space-y-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-widest"
            >
              Design Emocional & Saúde Mental
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl lg:text-7xl font-bold text-white tracking-tight"
            >
              Uni
            </motion.h1>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="aspect-[16/9] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl"
          >
            <img 
              src="https://arekusoo.github.io/public/banner3.png" 
              alt="Uni Project Hero"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
              fetchPriority="high"
            />
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-8 border-y border-white/5">
            <div>
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">{t.common.year}</p>
              <p className="text-white font-medium">2022</p>
            </div>
            <div>
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">{t.common.role}</p>
              <p className="text-white font-medium">UX/UI Designer</p>
            </div>
            <div>
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">{t.common.context}</p>
              <p className="text-white font-medium">{lang === 'pt' ? 'Graduação / Artigo' : 'Graduation / Article'}</p>
            </div>
            <div>
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">{t.common.focus}</p>
              <p className="text-white font-medium">{lang === 'pt' ? 'Design Emocional' : 'Emotional Design'}</p>
            </div>
          </div>
        </header>

        {/* --- Overview --- */}
        <section className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-3xl font-bold text-white">{t.common.overview}</h2>
            <p className="text-gray-400 leading-relaxed text-lg">
              {lang === 'pt' 
                ? 'Um dispositivo digital que auxilia adolescentes com TDM (Transtorno Depressivo Maior), aliado ao conceito do design emocional, busca estimular o usuário na prática de atividades cognitivas e interações sociais. Foi desenvolvido durante meu curso de graduação onde resultou na produção de um artigo.'
                : 'A digital device that assists teenagers with MDD (Major Depressive Disorder), combined with the concept of emotional design, seeks to stimulate the user in the practice of cognitive activities and social interactions. It was developed during my undergraduate course where it resulted in the production of an article.'}
            </p>
            <div className="space-y-4 pt-4">
              <h3 className="text-xl font-bold text-white">{lang === 'pt' ? 'Introdução' : 'Introduction'}</h3>
              <p className="text-gray-400 leading-relaxed">
                {lang === 'pt'
                  ? 'Dos casos de depressão na sociedade, aqueles ocorridos no período da adolescência mostram-se mais frequentes devido às alterações biológicas, psicológicas e sociais aos quais os adolescentes estão submetidos. Este projeto delimita-se ao estudo em que se propõe o desenvolvimento de dispositivo digital que amenize os efeitos do TDM de grau leve em adolescentes, buscando-se a reinserção social e prevenção do agravamento da doença através do uso de princípios de Interação Homem Computador e Ergonomia Afetiva.'
                  : 'Of the cases of depression in society, those occurring in adolescence are more frequent due to the biological, psychological, and social changes to which adolescents are subjected. This project is limited to the study in which the development of a digital device that mitigates the effects of mild MDD in adolescents is proposed, seeking social reintegration and prevention of the worsening of the disease through the use of Human-Computer Interaction principles and Affective Ergonomics.'}
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">{t.common.objectives}</h3>
            <ul className="space-y-4">
              {(lang === 'pt' ? [
                "Amenizar os efeitos do TDM",
                "Promover as relações sociais",
                "Prevenir o agravamento",
                "Aplicar a Hedonomia"
              ] : [
                "Mitigate the effects of MDD",
                "Promote social relations",
                "Prevent worsening",
                "Apply Hedonomy"
              ]).map((obj, i) => (
                <li key={i} className="flex gap-3 text-gray-400 text-sm">
                  <div className="mt-1 shrink-0"><CheckCircle2 size={16} className="text-blue-400" /></div>
                  {obj}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* --- Methodology --- */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-white">{lang === 'pt' ? 'Método Utilizado' : 'Method Used'}</h2>
            <p className="text-gray-400">{lang === 'pt' ? 'Processo estruturado em três pilares fundamentais.' : 'Process structured in three fundamental pillars.'}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: lang === 'pt' ? 'Imersão' : 'Immersion', icon: <Search size={24} />, color: 'blue' },
              { title: lang === 'pt' ? 'Ideação' : 'Ideation', icon: <Lightbulb size={24} />, color: 'purple' },
              { title: lang === 'pt' ? 'Prototipação' : 'Prototyping', icon: <Layout size={24} />, color: 'emerald' },
            ].map((item, i) => (
              <div key={i} className="organic-card p-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-white mx-auto border border-white/10">
                  {item.icon}
                </div>
                <div>
                  <p className="text-white font-bold text-xl">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- Step 1: Imersão --- */}
        <section className="space-y-12">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-blue-400 border border-white/10">
              <Search size={24} />
            </div>
            <h2 className="text-3xl font-bold text-white">{lang === 'pt' ? 'Imersão' : 'Immersion'}</h2>
          </div>
          
          <div className="organic-card p-8 space-y-8">
            <div className="space-y-4">
              <p className="text-gray-400 leading-relaxed">
                Durante a etapa de Imersão preliminar foram realizadas as pesquisas bibliográficas e documental, a fim de se adquirir uma base teórica através de autores especialistas no assunto. A partir da Imersão em profundidade foram determinados os agentes participativos na vida de um adolescente com TDM (Transtorno Depressivo Maior) de grau leve e através disso foram aplicados os procedimentos de pesquisa.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Com a técnica <strong>netnografia</strong> um questionário estruturado foi aplicado especificamente com dez adolescentes diagnosticados com TDM de grau leve, para mapeamento dos efeitos pós-crise e hábitos de utilização de objetos interativos digitais.
              </p>
            </div>

            <div className="p-6 bg-white/5 rounded-3xl border border-white/10 space-y-4">
              <h4 className="text-white font-bold flex items-center gap-2"><Target size={18} className="text-blue-400" /> Pesquisa e Grupos Focais</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                Posteriormente, com grupo focal de três adolescentes de diferentes idades foram abordados temas como: nível de relacionamento interpessoal e reforçadas as temáticas de origem da doença em cada paciente e seus efeitos. Foram ainda realizadas entrevistas com profissionais da área de psicologia e psiquiatra.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white">Análise dos Dados</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-blue-500/5 border border-blue-500/10 rounded-3xl space-y-4">
                  <h4 className="text-blue-400 font-bold">Questionário Online</h4>
                  <ul className="space-y-2 text-sm text-gray-400 leading-relaxed">
                    <li>• <strong>100%:</strong> Tem crise de forma ociosa</li>
                    <li>• <strong>60%:</strong> Não conta o que sente aos parentes</li>
                    <li>• <strong>82%:</strong> Não recebem apoio dos familiares</li>
                    <li>• <strong>80%:</strong> Não utiliza smartphone com frequência</li>
                  </ul>
                </div>
                <div className="p-6 bg-purple-500/5 border border-purple-500/10 rounded-3xl space-y-4">
                  <h4 className="text-purple-400 font-bold">Público em Geral</h4>
                  <ul className="space-y-2 text-sm text-gray-400 leading-relaxed">
                    <li>• <strong>100%:</strong> Já ouviu falar sobre a doença</li>
                    <li>• <strong>60%:</strong> Acredita que a falta de empatia gera preconceito</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-white font-bold flex items-center gap-2"><Users size={20} className="text-blue-400" /> Grupo Focal</h4>
              <div className="p-6 bg-white/5 rounded-3xl border border-white/10 text-sm text-gray-400 leading-relaxed space-y-4">
                <p>
                  A partir do grupo focal foi possível entender que as origens dos transtornos apresentados são de fatores diferentes, sendo eles: <strong>bullying, agressão familiar, e relacionamento amoroso</strong>. Fica claro que todos apresentaram mudanças bruscas de comportamento após o ocorrido.
                </p>
                <p>
                  Todos foram diagnosticados com TDM de grau leve, mas apenas um deles se mantém no tratamento, os outros não tiveram interesse por não querer “preocupar os familiares”. Todos apresentaram baixa autoestima e distúrbios alimentares.
                </p>
                <p>
                  Relatou-se que o esse mal além de ser periódico e ocioso, não pode ser previsto. Dos três casos há pensamentos frequentes em relação a suicídio, proveniente da insatisfação dos seus sentimentos e da falta de interesse em quaisquer atividades cotidianas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- Step 2: Criação --- */}
        <section className="space-y-12">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-purple-400 border border-white/10">
              <Lightbulb size={24} />
            </div>
            <h2 className="text-3xl font-bold text-white">Criação</h2>
          </div>

          <div className="organic-card p-8 space-y-8">
            <p className="text-gray-400 leading-relaxed">
              Visando a implementação de um dispositivo digital como solução do projeto foram aplicados os conceitos de usabilidade e ergonomia emocional na sua construção e foi definido o quadro de atributos projetuais. Através do brainstorming e co-criação com adolescentes, geramos alternativas filtradas por cartões de insight.
            </p>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white">Identidade & Logo</h3>
                <p className="text-gray-400 leading-relaxed">
                  A sua interface deve proporcionar através do uso de formas de arredondadas o uma interface acolhedora, juntamente com o uso das cores de tons claros e suaves, criando assim um aspecto visual simples e afetuoso.
                </p>
                <div className="p-6 bg-white/5 rounded-3xl border border-white/10 space-y-4">
                  <h4 className="text-white font-bold flex items-center gap-2"><Users size={18} className="text-purple-400" /> Personas</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Neste projeto foram utilizadas três diferentes personas: uma representa o <strong>adolescente com TDM</strong>, outro representa um <strong>familiar (o pai)</strong> e a outra uma <strong>pessoa do ciclo social (amiga)</strong>.
                  </p>
                </div>
              </div>
              <div className="organic-card p-12 flex items-center justify-center bg-white/5 border-white/10">
                <img 
                  src="https://arekusoo.github.io/public/unilogo.png" 
                  alt="Uni Logo" 
                  className="max-w-full h-auto"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            <div className="space-y-6 pt-8">
              <h3 className="text-xl font-bold text-white flex items-center gap-2"><Zap size={20} className="text-blue-400" /> Funções da Solução</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "Sociabilizar", desc: "Promover interações seguras e graduais." },
                  { title: "Atividades Físicas", desc: "Estimular o movimento e bem-estar corporal." },
                  { title: "Interação", desc: "Personagem que responde e apoia o usuário." },
                  { title: "Monitoramento", desc: "Acompanhar estados emocionais e hábitos." }
                ].map((func, i) => (
                  <div key={i} className="p-6 bg-white/5 rounded-3xl border border-white/10 space-y-2">
                    <h4 className="text-white font-bold">{func.title}</h4>
                    <p className="text-sm text-gray-500">{func.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- Step 3: Prototipação --- */}
        <section className="space-y-12">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-emerald-400 border border-white/10">
              <Layout size={24} />
            </div>
            <h2 className="text-3xl font-bold text-white">Prototipação</h2>
          </div>

          <div className="space-y-16">
            {/* Sociabilizar */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                  <Users size={24} className="text-blue-400" /> Sociabilizar
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Para estimular o engajamento do usuário com o dispositivo, é possível utilizar os pontos adquiridos com o uso para trocar por skins que podem ser usadas pelo personagem.
                </p>
              </div>
              <div className="organic-card p-6 bg-white/5 border-white/10 rounded-[2rem] overflow-hidden flex flex-col items-center gap-4">
                <img 
                  src="https://arekusoo.github.io/public/skins.png" 
                  alt="Skins desenhadas para o personagem" 
                  className="w-full h-auto rounded-2xl"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
                <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">Gamificação & Engajamento</p>
              </div>
            </div>

            {/* Atividades */}
            <div className="grid lg:grid-cols-2 gap-12 items-center lg:flex-row-reverse">
              <div className="space-y-6 lg:order-2">
                <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                  <Smartphone size={24} className="text-purple-400" /> Prática de Atividades
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Com o uso da função no menu “Fitness”, o dispositivo apresentará funções ao usuário como “Caminhar”, “Meditar”, “Polichinelos”, etc. Haverá momentos aleatórios onde o usuário receberá sugestões em horários alternados, com frases do personagem como: “que tal cuidar da pele hoje?”.
                </p>
              </div>
              <div className="organic-card p-6 bg-white/5 border-white/10 rounded-[2rem] overflow-hidden lg:order-1 flex flex-col items-center gap-4">
                <img 
                  src="https://arekusoo.github.io/public/ativida.png" 
                  alt="Exemplo de função Caminhar" 
                  className="w-full h-auto rounded-2xl"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
                <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">Saúde & Bem-estar</p>
              </div>
            </div>

            {/* Interagir */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                  <Heart size={24} className="text-emerald-400" /> Interagir com o Usuário
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  O personagem do dispositivo irá responder aos comandos por voz do usuário através de expressões similares aos emojis, visto em que, são utilizados comumente entre o público alvo.
                </p>
              </div>
              <div className="organic-card p-6 bg-white/5 border-white/10 rounded-[2rem] overflow-hidden flex flex-col items-center gap-4">
                <img 
                  src="https://arekusoo.github.io/public/ouvindo.png" 
                  alt="Interação com o usuário" 
                  className="w-full h-auto rounded-2xl"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
                <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">Comandos por Voz & Emojis</p>
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
        <OtherProjectsSidebar currentSlug="uni" lang={lang} />
      </main>
    </div>
  );
}
