
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <div className="lg:w-1/2 relative">
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-orange-600 rounded-lg -z-10"></div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gray-200 rounded-full -z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1507206130118-b5907f817163?auto=format&fit=crop&w=800&q=80" 
            alt="Nardin Autotrasporti Team" 
            className="rounded-2xl shadow-2xl w-full object-cover aspect-[3/4]"
          />
          <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-xl border border-orange-500/20 shadow-lg">
            <p className="text-gray-900 font-bold text-lg italic uppercase tracking-tight">"La nostra forza è l'uomo dietro la macchina."</p>
            <p className="text-orange-600 font-oswald text-sm mt-1 font-bold">VALTER NARDIN - FONDATORE</p>
          </div>
        </div>
        
        <div className="lg:w-1/2">
          <h2 className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-2">Chi Siamo</h2>
          <h3 className="text-4xl md:text-5xl font-black text-gray-900 uppercase italic mb-8">
            PASSIONE <span className="text-orange-600">CERTIFICATA</span> <br />DA GENERAZIONI
          </h3>
          
          <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
            <p>
              In Nardin Autotrasporti, non ci limitiamo a spostare pesi. Gestiamo sfide. 
              Ogni sollevamento è una promessa di precisione che manteniamo grazie a una flotta costantemente aggiornata e a operatori con decenni di esperienza.
            </p>
            <p>
              Dalle strette vie dei borghi montani ai complessi cantieri industriali, portiamo la nostra tecnologia Scania ed Effer dove altri si fermano. La nostra specializzazione nelle autogrù ci permette di operare con centimetrica accuratezza anche nelle situazioni più critiche.
            </p>
            
            <div className="grid grid-cols-2 gap-8 pt-6">
              <div>
                <span className="block text-4xl font-black text-orange-600 font-oswald">30+</span>
                <span className="text-sm font-bold uppercase tracking-wider text-gray-400">Anni di Esperienza</span>
              </div>
              <div>
                <span className="block text-4xl font-black text-orange-600 font-oswald">100%</span>
                <span className="text-sm font-bold uppercase tracking-wider text-gray-400">Sicurezza Garantita</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
