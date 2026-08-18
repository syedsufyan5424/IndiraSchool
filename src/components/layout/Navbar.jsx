import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Phone, 
  MapPin, 
  ChevronRight, 
  GraduationCap, 
  Home, 
  Building2, 
  BookOpen, 
  Sparkles, 
  Image as ImageIcon, 
  Bell 
} from 'lucide-react';
import SchoolLogo from '../common/SchoolLogo';
import { schoolData } from '../../data/schoolData';
import Button from '../ui/Button';

const navItemsMeta = {
  '/': {
    name: 'Home',
    icon: Home,
    subtitle: 'Welcome & Campus Overview',
  },
  '/about': {
    name: 'About Us',
    icon: Building2,
    subtitle: 'Our Ethos, Vision & Leadership',
  },
  '/academics': {
    name: 'Academics',
    icon: BookOpen,
    subtitle: 'Pre-Primary to Class X Curriculum',
  },
  '/admissions': {
    name: 'Admissions',
    icon: GraduationCap,
    subtitle: 'Applications & Process',
    badge: 'Open for 2026-27',
  },
  '/facilities': {
    name: 'Facilities',
    icon: Sparkles,
    subtitle: 'Labs, Library, Sports & Infrastructure',
  },
  '/gallery': {
    name: 'Gallery',
    icon: ImageIcon,
    subtitle: 'Campus Life & Events in Frames',
  },
  '/news': {
    name: 'News & Events',
    icon: Bell,
    subtitle: 'Official Circulars & Schedules',
  },
  '/contact': {
    name: 'Contact',
    icon: Phone,
    subtitle: 'Reach Us, Timings & Campus Map',
  },
};

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

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
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
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
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
              className={`p-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#0B2545] cursor-pointer ${
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
      </header>

      {/* Mobile Drawer Navigation Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-50 lg:hidden flex justify-end"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity duration-300 cursor-pointer"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Content */}
          <div 
            className="relative w-full max-w-sm sm:max-w-md bg-white h-full flex flex-col justify-between shadow-2xl z-10 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Header */}
            <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between bg-[#0B2545] text-white">
              <Link 
                to="/" 
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3"
              >
                <SchoolLogo className="w-10 h-10" />
                <div className="flex flex-col">
                  <span className="text-base font-bold tracking-tight uppercase leading-tight font-display text-white">
                    {schoolData.name}
                  </span>
                  <span className="text-[11px] font-medium text-[#D8B772] flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    Nacharam, Hyderabad
                  </span>
                </div>
              </Link>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                aria-label="Close navigation menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Navigation List */}
            <div className="flex-1 overflow-y-auto p-4 space-y-1.5">
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-3 pt-1 pb-2">
                Main Navigation
              </div>

              {schoolData.navLinks.map((link) => {
                const meta = navItemsMeta[link.path] || { 
                  name: link.name, 
                  icon: ChevronRight, 
                  subtitle: '' 
                };
                const IconComponent = meta.icon;

                return (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    end={link.path === '/'}
                    className={({ isActive }) =>
                      `flex items-center justify-between p-3 rounded-xl transition-all duration-200 group cursor-pointer ${
                        isActive
                          ? 'bg-[#0B2545] text-white shadow-md'
                          : 'bg-slate-50/80 hover:bg-slate-100 text-slate-800 hover:text-[#0B2545] border border-slate-100/80'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <div className="flex items-center gap-3">
                          <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors flex-shrink-0 ${
                            isActive 
                              ? 'bg-white/15 text-[#D8B772]' 
                              : 'bg-white text-[#0B2545] shadow-xs group-hover:bg-[#0B2545] group-hover:text-white border border-slate-100'
                          }`}>
                            <IconComponent className="w-4 h-4" />
                          </div>

                          <div className="flex flex-col text-left">
                            <span className={`text-sm font-bold leading-snug ${isActive ? 'text-white' : 'text-slate-900'}`}>
                              {link.name}
                            </span>
                            {meta.subtitle && (
                              <span className={`text-[11px] mt-0.5 leading-tight ${
                                isActive ? 'text-slate-200' : 'text-slate-500'
                              }`}>
                                {meta.subtitle}
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center gap-2 flex-shrink-0">
                          {meta.badge && (
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                              isActive
                                ? 'bg-[#C5A059] text-slate-900'
                                : 'bg-[#C5A059]/20 text-[#9A6E24] border border-[#C5A059]/30'
                            }`}>
                              {meta.badge}
                            </span>
                          )}
                          <ChevronRight className={`w-4 h-4 transition-transform group-hover:translate-x-0.5 ${
                            isActive ? 'text-[#D8B772]' : 'text-slate-400'
                          }`} />
                        </div>
                      </>
                    )}
                  </NavLink>
                );
              })}
            </div>

            {/* Mobile Drawer Footer Actions */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 space-y-3">
              <Button
                to="/admissions"
                variant="gold"
                size="md"
                className="w-full justify-center shadow-md font-bold text-sm"
                onClick={() => setMobileMenuOpen(false)}
                icon={GraduationCap}
              >
                Admission Enquiry 2026-27
              </Button>

              <div className="flex items-center justify-between text-xs text-slate-600 px-1 pt-1">
                <a 
                  href={`tel:${schoolData.contact.primaryPhone.replace(/\s+/g, '')}`} 
                  className="flex items-center gap-1.5 font-medium hover:text-[#0B2545] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>{schoolData.contact.primaryPhone}</span>
                </a>

                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-1 text-slate-500 hover:text-[#0B2545] transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Nacharam</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
