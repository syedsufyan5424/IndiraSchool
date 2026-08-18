import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Loader2 } from 'lucide-react';

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  iconPosition = 'right',
  loading = false,
  disabled = false,
  onClick,
  type = 'button',
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer select-none';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5 font-semibold'
  };

  const variantStyles = {
    primary: 'bg-[#0B2545] hover:bg-[#133E87] text-white shadow-md hover:shadow-lg focus:ring-[#0B2545]',
    royal: 'bg-[#1D4ED8] hover:bg-[#1E40AF] text-white shadow-md hover:shadow-lg focus:ring-[#1D4ED8]',
    gold: 'bg-[#C5A059] hover:bg-[#B48234] text-slate-900 font-semibold shadow-md hover:shadow-lg focus:ring-[#C5A059]',
    outline: 'border-2 border-[#0B2545] text-[#0B2545] hover:bg-[#0B2545] hover:text-white focus:ring-[#0B2545]',
    outlineGold: 'border-2 border-[#C5A059] text-[#B48234] hover:bg-[#C5A059] hover:text-slate-900 focus:ring-[#C5A059]',
    outlineWhite: 'border-2 border-white text-white hover:bg-white hover:text-[#0B2545] focus:ring-white',
    white: 'bg-white text-[#0B2545] hover:bg-slate-100 shadow-md hover:shadow-lg focus:ring-white font-semibold',
    subtle: 'bg-slate-100 hover:bg-slate-200 text-slate-800 focus:ring-slate-400',
    ghost: 'text-[#0B2545] hover:bg-slate-100 focus:ring-slate-300'
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.primary} ${className}`;

  const renderContent = () => (
    <>
      {loading && <Loader2 className="w-4 h-4 animate-spin mr-2" />}
      {!loading && Icon && iconPosition === 'left' && <Icon className="w-4 h-4 flex-shrink-0" />}
      <span>{children}</span>
      {!loading && Icon && iconPosition === 'right' && <Icon className="w-4 h-4 flex-shrink-0" />}
      {!loading && !Icon && variant === 'link' && <ArrowRight className="w-4 h-4 flex-shrink-0" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses} {...props}>
        {renderContent()}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClasses} {...props}>
        {renderContent()}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={combinedClasses}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {renderContent()}
    </button>
  );
}
