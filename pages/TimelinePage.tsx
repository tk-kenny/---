import React from 'react';
import { TIMELINE_EVENTS } from '../constants';
import { Calendar, Flag } from 'lucide-react';

const TimelinePage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">时间线</h1>
        <p className="text-slate-600 text-lg">记录重要时刻，见证每一次蜕变</p>
      </div>

      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 transform md:-translate-x-1/2"></div>

        <div className="space-y-12">
          {TIMELINE_EVENTS.map((event, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={event.id} className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Content Side */}
                <div className="flex-1 w-full md:w-1/2 px-4 md:px-12 mb-4 md:mb-0">
                    <div className={`bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 relative group`}>
                         {/* Arrow for Desktop */}
                         <div className={`hidden md:block absolute top-6 w-4 h-4 bg-white border-t border-l border-slate-100 transform rotate-45 ${isEven ? '-left-2.5 -border-t-0 -border-l-0 border-b border-r' : '-right-2.5'}`}></div>
                         
                         <div className="flex items-center gap-2 mb-2">
                             <span className="inline-flex items-center justify-center px-3 py-1 bg-blue-50 text-primary text-sm font-bold rounded-full">
                                {event.year}
                             </span>
                         </div>
                         <h3 className="text-xl font-bold text-slate-900 mb-2">{event.title}</h3>
                         <p className="text-slate-600 leading-relaxed">{event.description}</p>
                    </div>
                </div>

                {/* Center Marker */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-white border-4 border-primary shadow-sm z-10">
                    <div className="w-2.5 h-2.5 bg-primary rounded-full"></div>
                </div>

                {/* Empty Side for layout balance */}
                <div className="flex-1 hidden md:block w-1/2"></div>
              </div>
            );
          })}
        </div>
        
        {/* End Marker */}
         <div className="absolute left-4 md:left-1/2 bottom-0 transform -translate-x-1/2 translate-y-full pt-4">
             <div className="flex flex-col items-center">
                <div className="w-3 h-3 bg-slate-300 rounded-full mb-1"></div>
                <div className="w-2 h-2 bg-slate-300 rounded-full mb-1"></div>
                <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
                <div className="mt-2 text-xs text-slate-400 font-medium">To be continued...</div>
             </div>
         </div>
      </div>
    </div>
  );
};

export default TimelinePage;
