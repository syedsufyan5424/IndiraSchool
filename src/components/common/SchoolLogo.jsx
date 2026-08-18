import React from 'react';

export default function SchoolLogo({ className = "w-10 h-10", isScrolled = true }) {
  return (
    <div className={`relative flex items-center justify-center flex-shrink-0 ${className}`}>
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm">
        {/* Shield */}
        <path
          d="M32 4L54 12V28C54 44 44 54 32 60C20 54 10 44 10 28V12L32 4Z"
          fill="#0B2545"
          stroke="#C5A059"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        {/* Inner Gold Trim */}
        <path
          d="M32 8L50 15V27C50 41 41 50 32 55C23 50 14 41 14 27V15L32 8Z"
          stroke="#C5A059"
          strokeOpacity="0.45"
          strokeWidth="1.5"
        />
        {/* Open Book */}
        <path
          d="M22 36C26 34 30 35 32 37C34 35 38 34 42 36V45C38 43 34 44 32 46C30 44 26 43 22 45V36Z"
          fill="#C5A059"
        />
        {/* Torch / Flame */}
        <path
          d="M32 18C33.5 21 36 23 34 26C33 27.5 32 28.5 32 29C32 28.5 31 27.5 30 26C28 23 30.5 21 32 18Z"
          fill="#F59E0B"
        />
        <circle cx="32" cy="20" r="1.5" fill="#FEF08A" />
        {/* Torch base */}
        <path d="M30.5 29H33.5L32.5 34H31.5L30.5 29Z" fill="#C5A059" />
        {/* Top Star */}
        <circle cx="32" cy="12" r="1.2" fill="#FEF08A" />
      </svg>
    </div>
  );
}
