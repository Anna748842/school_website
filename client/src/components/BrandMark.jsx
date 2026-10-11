import { GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BrandMark({ variant = 'dark', compact = false }) {
  const isLight = variant === 'light';
  const textColor = isLight ? 'text-white' : 'text-brand';
  const mutedColor = isLight ? 'text-white/70' : 'text-muted';
  const iconBg = isLight ? 'bg-white/10' : 'bg-brand-soft';
  const iconColor = isLight ? 'text-white' : 'text-brand';

  return (
    <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
      <div className={`flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full ${iconBg} ${iconColor}`}>
        <GraduationCap className="w-6 h-6 md:w-7 md:h-7" />
      </div>
      {!compact && (
        <div className="flex flex-col">
          <span className={`font-display font-bold text-sm md:text-base tracking-wider leading-tight ${textColor}`}>
            RAVI MAHATO SMARAK
            <br className="hidden md:block" /> HIGH SCHOOL
          </span>
          <span className={`text-[0.65rem] md:text-xs font-medium tracking-wide mt-0.5 ${mutedColor}`}>
            MAHUDA, DHANBAD, JHARKHAND
          </span>
        </div>
      )}
    </Link>
  );
}