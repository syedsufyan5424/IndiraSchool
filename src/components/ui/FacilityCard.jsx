import React from 'react';
import {
  Layers,
  Monitor,
  FlaskConical,
  BookOpenCheck,
  Trophy,
  Palette,
  ShieldCheck,
  Bus,
  CheckCircle2,
  Check
} from 'lucide-react';

const iconMap = {
  Layers,
  Monitor,
  FlaskConical,
  BookOpenCheck,
  Trophy,
  Palette,
  ShieldCheck,
  Bus,
  CheckCircle2
};

export default function FacilityCard({
  facility,
  className = ''
}) {
  const { title, category, description, icon, image, features } = facility;
  const IconComponent = iconMap[icon] || CheckCircle2;

  return (
    <div className={`group bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col ${className}`}>
      {/* Image with Category Badge & Icon */}
      <div className="relative h-52 sm:h-56 overflow-hidden bg-slate-100">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-black/10"></div>
        
        {/* Top Badges */}
        <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/95 text-[#0B2545] shadow-md backdrop-blur-xs">
            {category}
          </span>
        </div>

        {/* Icon Floating Badge */}
        <div className="absolute bottom-3.5 right-3.5 w-10 h-10 rounded-xl bg-[#0B2545] text-[#C5A059] flex items-center justify-center shadow-lg border border-[#C5A059]/30">
          <IconComponent className="w-5 h-5" />
        </div>

        <div className="absolute bottom-3.5 left-3.5 right-16">
          <h3 className="text-base sm:text-lg font-bold text-white drop-shadow-sm line-clamp-1">
            {title}
          </h3>
        </div>
      </div>

      {/* Body Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col">
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
          {description}
        </p>

        {/* Feature bullets */}
        {features && features.length > 0 && (
          <div className="mt-auto pt-3 border-t border-slate-100">
            <h4 className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-2">
              Key Highlights
            </h4>
            <ul className="space-y-1.5">
              {features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                  <span className="w-3.5 h-3.5 rounded-full bg-blue-50 text-[#0B2545] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </span>
                  <span className="line-clamp-1">{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
