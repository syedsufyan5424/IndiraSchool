import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, BookOpen, Sparkles, MapPin, ArrowRight } from 'lucide-react';
import { schoolData } from '../../data/schoolData';

export default function TrustBar() {
  const iconMap = {
    GraduationCap: GraduationCap,
    BookOpen: BookOpen,
    Sparkles: Sparkles,
    MapPin: MapPin
  };

  return (
    <section className="relative z-20 -mt-8 sm:-mt-12 mb-12 sm:mb-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {schoolData.quickActions.map((action) => {
            const Icon = iconMap[action.icon] || Sparkles;

            return (
              <Link
                key={action.id}
                to={action.link}
                className="group bg-white rounded-xl p-5 sm:p-6 border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="w-11 h-11 rounded-lg bg-blue-50 text-[#0B2545] flex items-center justify-center group-hover:bg-[#0B2545] group-hover:text-[#C5A059] transition-colors duration-300">
                      <Icon className="w-5 h-5 stroke-[2]" />
                    </div>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 group-hover:bg-blue-50 group-hover:text-[#0B2545] transition-colors">
                      {action.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-1.5 group-hover:text-[#0B2545] transition-colors">
                    {action.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {action.description}
                  </p>
                </div>

                <div className="flex items-center gap-1 text-xs font-bold text-[#0B2545] group-hover:text-[#133E87] group-hover:translate-x-1 transition-all">
                  <span>Explore Section</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
