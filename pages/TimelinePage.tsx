import React from 'react';
import { TIMELINE_EVENTS, UI_TEXT, CONTACT_INFO } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import { Twitter, Youtube, Video } from 'lucide-react';

const TimelinePage: React.FC = () => {
  const { language } = useLanguage();
  const t = UI_TEXT[language];
  const events = TIMELINE_EVENTS[language];

  return (
    <div className="max-w-3xl mx-auto py-12 md:py-20 px-4">
      
      {/* Contact / Connect Section - Moved to Top */}
      <div className="mb-20 bg-[#0a0a0a] border border-white/10 rounded-sm p-8 space-y-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/10 transition-colors"></div>
          
          <div>
            <h3 className="text-lg font-serif text-white mb-6">{t.timeline.connect_title}</h3>
            
            {/* Social Buttons (X, YouTube, Douyin) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <a 
                   href={CONTACT_INFO.social.x} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="flex items-center justify-center gap-3 py-4 border border-white/10 rounded-sm text-zinc-400 hover:text-black hover:bg-white transition-all duration-300 group/btn"
                >
                   <Twitter className="w-5 h-5" />
                   <span className="text-xs font-bold uppercase tracking-widest">X</span>
                </a>
                
                <a 
                   href={CONTACT_INFO.social.youtube} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="flex items-center justify-center gap-3 py-4 border border-white/10 rounded-sm text-zinc-400 hover:text-black hover:bg-white transition-all duration-300 group/btn"
                >
                   <Youtube className="w-5 h-5" />
                   <span className="text-xs font-bold uppercase tracking-widest">YouTube</span>
                </a>
                
                <a 
                   href={CONTACT_INFO.social.douyin} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="flex items-center justify-center gap-3 py-4 border border-white/10 rounded-sm text-zinc-400 hover:text-black hover:bg-white transition-all duration-300 group/btn"
                >
                   <Video className="w-5 h-5" />
                   <span className="text-xs font-bold uppercase tracking-widest">Douyin</span>
                </a>
            </div>

            {/* QR Codes (WeChat, WhatsApp) */}
            <div>
               <p className="text-[10px] text-zinc-600 uppercase tracking-widest mb-4">{t.timeline.scan_to_chat}</p>
               <div className="flex gap-8 overflow-x-auto pb-2">
                  <div className="flex flex-col gap-2">
                     <div className="w-32 h-32 bg-white p-2 rounded-sm">
                        <img src={CONTACT_INFO.qrCodes.wechat} alt="WeChat QR" className="w-full h-full object-contain" />
                     </div>
                     <span className="text-[10px] text-zinc-500 text-center uppercase tracking-wider">WeChat</span>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                     <div className="w-32 h-32 bg-white p-2 rounded-sm">
                        <img src={CONTACT_INFO.qrCodes.whatsapp} alt="WhatsApp QR" className="w-full h-full object-contain" />
                     </div>
                     <span className="text-[10px] text-zinc-500 text-center uppercase tracking-wider">WhatsApp</span>
                  </div>
               </div>
            </div>
          </div>
      </div>

      {/* Header */}
      <div className="mb-12 space-y-6">
        <h1 className="text-6xl md:text-7xl font-serif text-white tracking-tight">{t.timeline.title}</h1>
        <p className="text-zinc-400 text-lg font-light tracking-wide max-w-lg">{t.timeline.subtitle}</p>
      </div>

      {/* Vertical Line Container */}
      <div className="relative border-l border-white/10 ml-3 md:ml-0 space-y-20 pb-12">
        {events.map((event) => (
          <div key={event.id} className="relative pl-12 md:pl-16 group">
            {/* Marker - positioned perfectly on the border line */}
            <div className="absolute -left-[5px] top-2.5 w-2.5 h-2.5 rounded-full bg-[#050505] border border-white/40 group-hover:border-white group-hover:scale-125 transition-all duration-300 z-10"></div>
            
            {/* Content */}
            <div className="flex flex-col gap-3">
               <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-500 uppercase group-hover:text-zinc-300 transition-colors">
                  {event.year}
               </span>
               <h3 className="text-3xl font-serif text-white leading-tight group-hover:translate-x-1 transition-transform duration-300">
                  {event.title}
               </h3>
               <p className="text-zinc-400 leading-relaxed text-base font-light max-w-xl">
                  {event.description}
               </p>
            </div>
          </div>
        ))}
        
        {/* Bottom Fade Effect for the line */}
        <div className="absolute -left-[1px] bottom-0 w-px h-32 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none"></div>
      </div>
      
      {/* Footer / Continued */}
       <div className="pl-12 md:pl-16 pt-4">
           <div className="flex items-center gap-3 opacity-50">
             <div className="h-px w-8 bg-zinc-700"></div>
             <span className="text-[10px] uppercase tracking-widest text-zinc-600">{t.timeline.continued}</span>
           </div>
       </div>
    </div>
  );
};

export default TimelinePage;