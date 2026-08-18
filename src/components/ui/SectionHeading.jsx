import React from 'react';

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = 'center',
  dark = false,
  className = ''
}) {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center mx-auto max-w-3xl' : 'text-left max-w-2xl'} ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3.5 ${
          dark 
            ? 'bg-[#C5A059]/20 text-[#D8B772] border border-[#C5A059]/30' 
            : 'bg-blue-50 text-[#0B2545] border border-blue-200/80 shadow-xs'
        }`}>
          <span className={`w-1.5 h-1.5 rounded-full ${dark ? 'bg-[#D8B772]' : 'bg-[#0B2545]'}`}></span>
          {badge}
        </div>
      )}

      <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4 ${
        dark ? 'text-white' : 'text-slate-900'
      }`}>
        {title}
      </h2>

      {subtitle && (
        <p className={`text-base sm:text-lg leading-relaxed ${
          dark ? 'text-slate-300' : 'text-slate-600'
        }`}>
          {subtitle}
        </p>
      )}

      {/* Decorative accent bar */}
      <div className={`mt-4 flex items-center gap-1.5 ${isCenter ? 'justify-center' : 'justify-start'}`}>
        <span className="h-1 w-12 rounded-full bg-[#0B2545]"></span>
        <span className="h-1 w-3 rounded-full bg-[#C5A059]"></span>
      </div>
    </div>
  );
}
