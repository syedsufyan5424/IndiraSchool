import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronRight, Home, ArrowLeft } from 'lucide-react';

export default function PageHero({
  badge,
  title,
  subtitle,
  breadcrumbCurrent,
  parentLink = null,
  parentName = null,
  showBackButton = false,
  backLink = null,
  backLabel = 'Back to Home',
  className = ''
}) {
  const navigate = useNavigate();

  const handleBack = () => {
    if (backLink) {
      navigate(backLink);
    } else if (window.history.length > 2) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  return (
    <section className={`relative pt-32 pb-16 sm:pt-36 sm:pb-20 bg-gradient-to-b from-[#051329] via-[#0B2545] to-[#0F3057] text-white overflow-hidden ${className}`}>
      {/* Background Subtle Pattern / Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(197,160,89,0.12),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(29,78,216,0.15),transparent_50%)]"></div>
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-[#C5A059]/40 to-transparent"></div>

      <div className="container-custom relative z-10">
        {/* Navigation Header: Breadcrumb + Back Button */}
        <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center flex-wrap gap-2 text-xs text-slate-300">
              <li className="flex items-center gap-1">
                <Link 
                  to="/" 
                  className="hover:text-[#C5A059] flex items-center gap-1 transition-colors"
                  aria-label="Home"
                >
                  <Home className="w-3.5 h-3.5" />
                  <span>Home</span>
                </Link>
              </li>

              {parentLink && parentName && (
                <>
                  <li>
                    <ChevronRight className="w-3 h-3 text-slate-500" />
                  </li>
                  <li>
                    <Link to={parentLink} className="hover:text-[#C5A059] transition-colors">
                      {parentName}
                    </Link>
                  </li>
                </>
              )}

              <li>
                <ChevronRight className="w-3 h-3 text-slate-500" />
              </li>

              <li className="text-[#C5A059] font-medium" aria-current="page">
                {breadcrumbCurrent || title}
              </li>
            </ol>
          </nav>

          {/* Optional Hero Back Button */}
          {showBackButton && (
            <button
              type="button"
              onClick={handleBack}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-white/10 hover:bg-white/20 text-slate-200 hover:text-white border border-white/20 hover:border-[#C5A059]/60 transition-all duration-200 cursor-pointer backdrop-blur-sm shadow-xs group"
              aria-label={backLabel}
            >
              <ArrowLeft className="w-3.5 h-3.5 text-[#D8B772] transition-transform duration-200 group-hover:-translate-x-1" />
              <span>{backLabel}</span>
            </button>
          )}
        </div>

        {/* Badge */}
        {badge && (
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#C5A059]/20 text-[#D8B772] border border-[#C5A059]/30 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D8B772]"></span>
            {badge}
          </div>
        )}

        {/* Main Title & Subtitle */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4 max-w-3xl leading-tight font-display">
          {title}
        </h1>

        {subtitle && (
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
