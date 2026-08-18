import React from 'react';
import {
  UserCheck,
  BookMarked,
  Compass,
  Trophy,
  ShieldAlert,
  MessageSquareHeart,
  ShieldCheck,
  Award,
  HeartHandshake,
  Users,
  Brain,
  ClipboardCheck,
  HelpCircle,
  Flame,
  Sparkles,
  Smile,
  Lightbulb,
  GraduationCap
} from 'lucide-react';

const iconMap = {
  UserCheck,
  BookMarked,
  Compass,
  Trophy,
  ShieldAlert,
  MessageSquareHeart,
  ShieldCheck,
  Award,
  HeartHandshake,
  Users,
  Brain,
  ClipboardCheck,
  HelpCircle,
  Flame,
  Sparkles,
  Smile,
  Lightbulb,
  GraduationCap
};

export default function FeatureCard({
  title,
  description,
  iconName = 'Sparkles',
  badge,
  className = ''
}) {
  const IconComponent = iconMap[iconName] || Sparkles;

  return (
    <div className={`group relative bg-white rounded-xl p-6 sm:p-7 border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col h-full ${className}`}>
      {/* Subtle top gold highlight on hover */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0B2545] via-[#C5A059] to-[#0B2545] rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      {badge && (
        <span className="self-start text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-50 text-[#0B2545] border border-blue-100 mb-4">
          {badge}
        </span>
      )}

      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0B2545] to-[#133E87] text-white flex items-center justify-center mb-5 shadow-md group-hover:bg-gradient-to-br group-hover:from-[#C5A059] group-hover:to-[#B48234] group-hover:text-slate-900 transition-all duration-300">
        <IconComponent className="w-6 h-6 stroke-[2]" />
      </div>

      {/* Content */}
      <h3 className="text-lg font-bold text-slate-900 mb-2.5 group-hover:text-[#0B2545] transition-colors">
        {title}
      </h3>

      <p className="text-sm text-slate-600 leading-relaxed mt-auto">
        {description}
      </p>
    </div>
  );
}
