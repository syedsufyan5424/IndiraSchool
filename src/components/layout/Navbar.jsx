import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin, ChevronRight, GraduationCap } from 'lucide-react';
import SchoolLogo from '../common/SchoolLogo';
import { schoolData } from '../../data/schoolData';
import Button from '../ui/Button';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Monitor scroll for header background transition
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const navItemClass = ({ isActive }) =>
    `relative text-sm font-medium transition-colors py-2 px-1 hover:text-[#0B2545] ${
      isActive
        ? isHomePage && !isScrolled
          ? 'text-white font-semibold after:content-[""] after:absolute after:bottom-0 after:left-1 after:right-1 after:h-0.5 after:bg-[#C5A059]'
          : 'text-[#0B2545] font-semibold after:content-[""] after:absolute after:bottom-0 after:left-1 after:right-1 after:h-0.5 after:bg-[#0B2545]'
        : isHomePage && !isScrolled
        ? 'text-slate-100 hover:text-[#C5A059]'
        : 'text-slate-600 hover:text-[#0B2545]'
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isHomePage
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/80 py-3'
          : 'bg-gradient-to-b from-[#051329]/90 via-[#0B2545]/60 to-transparent py-4'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Brand / Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#0B2545] rounded-lg p-1"
          aria-label="Indira School Home"
        >
          <SchoolLogo className="w-10 h-10 sm:w-11 sm:h-11 transition-transform group-hover:scale-105" />
          <div className="flex flex-col">
            <span className={`text-lg sm:text-xl font-bold tracking-tight uppercase leading-none font-display ${
              isScrolled || !isHomePage ? 'text-[#0B2545]' : 'text-white'
            }`}>
              {schoolData.name}
            </span>
            <span className={`text-[11px] font-medium tracking-wide flex items-center gap-1 mt-0.5 ${
              isScrolled || !isHomePage ? 'text-[#C5A059]' : 'text-[#D8B772]'
            }`}>
              <MapPin className="w-2.5 h-2.5" />
              Nacharam, Hyderabad
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Main Navigation">
          {schoolData.navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={navItemClass}
              end={link.path === '/'}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Header Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <Button
            to="/admissions"
            variant={isScrolled || !isHomePage ? "primary" : "gold"}
            size="sm"
            icon={GraduationCap}
          >
            Admission Enquiry
          </Button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <Button
            to="/admissions"
            variant="gold"
            size="sm"
            className="text-xs px-2.5 py-1.5 sm:px-3 sm:py-1.5"
          >
            Enquiry
          </Button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#0B2545] ${
              isScrolled || !isHomePage
                ? 'text-[#0B2545] hover:bg-slate-100'
                : 'text-white hover:bg-white/10'
            }`}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 top-[60px] sm:top-[68px] z-40 bg-slate-900/60 backdrop-blur-sm lg:hidden animate-fadeIn"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div 
            className="bg-white h-full w-full max-w-sm ml-auto shadow-2xl flex flex-col justify-between p-6 overflow-y-auto animate-slideLeft"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Mobile Drawer Header */}
              <div className="flex items-center gap-3 pb-5 border-b border-slate-100 mb-4">
                <SchoolLogo className="w-9 h-9" />
                <div>
                  <span className="block text-base font-bold text-[#0B2545]">
                    {schoolData.name}
                  </span>
                  <span className="text-xs text-[#C5A059] font-medium">
                    Nacharam, Hyderabad – 500076
                  </span>
                </div>
              </div>

              {/* Mobile Links */}
              <nav className="space-y-1" aria-label="Mobile Navigation">
                {schoolData.navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    end={link.path === '/'}
                    className={({ isActive }) =>
                      `flex items-center justify-between px-3 py-3 rounded-lg text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-[#0B2545] text-white font-semibold shadow-xs'
                          : 'text-slate-700 hover:bg-slate-50 hover:text-[#0B2545]'
                      }`
                    }
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 opacity-70" />
                  </NavLink>
                ))}
              </nav>
            </div>

            {/* Mobile Footer Info & CTA */}
            <div className="pt-6 border-t border-slate-100 space-y-4">
              <Button
                to="/admissions"
                variant="gold"
                size="md"
                className="w-full justify-center"
                onClick={() => setMobileMenuOpen(false)}
                icon={GraduationCap}
              >
                Admission Enquiry 2026-27
              </Button>

              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 text-xs text-slate-600 space-y-2">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#0B2545] flex-shrink-0 mt-0.5" />
                  <span>{schoolData.location.street}, Nacharam, Hyderabad</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#0B2545] flex-shrink-0" />
                  <span>{schoolData.contact.primaryPhone}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
