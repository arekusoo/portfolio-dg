import { motion, AnimatePresence } from 'motion/react';
import { 
  Linkedin, 
  GraduationCap, 
  Globe,
  MessageCircle,
  Phone,
  AtSign,
  Download
} from 'lucide-react';
import { DATA, Lang } from '../data';

interface SidebarProps {
  lang: Lang;
  setLang: (lang: Lang) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

export default function Sidebar({ lang, setLang, isMenuOpen, setIsMenuOpen }: SidebarProps) {
  const t = DATA[lang];

  return (
    <AnimatePresence>
      {(isMenuOpen || (typeof window !== 'undefined' && window.innerWidth >= 1024)) && (
        <motion.aside 
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className={`lg:w-72 lg:fixed lg:top-6 lg:left-6 lg:bottom-6 sidebar-floating p-6 flex flex-col z-50 fixed inset-0 lg:inset-auto m-0 lg:m-0 bg-brand-bg lg:bg-white/[0.02] w-full ${isMenuOpen ? 'flex' : 'hidden lg:flex'}`}
        >
          <div className="flex flex-col items-center lg:items-start space-y-4 shrink-0">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative w-20 h-20 rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-white/5 will-change-transform"
            >
              <img 
                src="https://media.licdn.com/dms/image/v2/D4D03AQHBVSW9lJ_EwQ/profile-displayphoto-scale_100_100/B4DZmmONoAGQAg-/0/1759430375922?e=1786579200&v=beta&t=Lx5u0qWczFDvevzu0CY-ESJ6EBSpOjZG8KGVTLk2J1U" 
                alt={t.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=Christian+Silva&background=10b981&color=fff';
                }}
              />
            </motion.div>
            
            <div className="text-center lg:text-left">
              <h1 className="text-xl font-bold text-white tracking-tight">{t.name}</h1>
              <p className="text-gray-400 font-medium text-xs mt-0.5">{t.role}</p>
            </div>
          </div>

          <div className="mt-6 space-y-6 flex-1 overflow-visible">
            <section>
              <h2 className="text-[9px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
                <GraduationCap size={10} fill="currentColor" /> {t.common.education}
              </h2>
              <ul className="space-y-3">
                {t.education.map((edu, i) => (
                  <li key={i} className="text-[13px] text-gray-400 leading-tight">
                    {edu}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-[9px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
                <Phone size={10} fill="currentColor" /> {t.common.contact}
              </h2>
              <ul className="space-y-1.5">
                <li>
                  <a 
                    href={`https://wa.me/55${t.contact.phone.replace(/\D/g, '')}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2.5 px-3 py-2.5 bg-white/5 border border-white/10 rounded-xl text-[13px] text-gray-400 hover:text-white hover:bg-white/10 transition-all w-full"
                  >
                    <MessageCircle size={14} fill="currentColor" /> {t.contact.phone}
                  </a>
                </li>
                <li>
                  <a 
                    href={`mailto:${t.contact.email}`}
                    className="flex items-center gap-2.5 px-3 py-2.5 bg-white/5 border border-white/10 rounded-xl text-[13px] text-gray-400 hover:text-white hover:bg-white/10 transition-all w-full"
                  >
                    <AtSign size={14} /> {t.contact.email}
                  </a>
                </li>
                <li>
                  <a 
                    href={`https://${t.contact.linkedin}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2.5 px-3 py-2.5 bg-white/5 border border-white/10 rounded-xl text-[13px] text-gray-400 hover:text-white hover:bg-white/10 transition-all w-full"
                  >
                    <Linkedin size={14} fill="currentColor" /> LinkedIn
                  </a>
                </li>
              </ul>
            </section>
          </div>

          <div className="pt-4 mt-auto shrink-0">
            <a 
              href={(t as any).cvLink} 
              target="_blank" 
              rel="noreferrer"
              className="w-full py-3.5 bg-white text-black rounded-full text-xs font-bold hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-xl shadow-white/5"
            >
              <Download size={14} fill="currentColor" />
              {t.downloadCV}
            </a>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
