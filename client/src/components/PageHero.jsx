import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function PageHero({ 
  label, 
  title, 
  subtitle, 
  breadcrumbs = [], 
  decorativeText 
}) {
  return (
    <section className="relative w-full min-h-[280px] md:min-h-[320px] bg-navy-gradient flex items-center overflow-hidden">
      {/* Background abstract elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          {label && (
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block text-accent font-medium tracking-wider uppercase text-sm mb-3"
            >
              {label}
            </motion.span>
          )}
          
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-bold text-white mb-4"
          >
            {title}
          </motion.h1>
          
          {subtitle && (
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white/80 text-lg max-w-xl mx-auto md:mx-0 mb-6"
            >
              {subtitle}
            </motion.p>
          )}

          {/* Breadcrumbs */}
          {breadcrumbs.length > 0 && (
            <motion.nav 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex items-center justify-center md:justify-start space-x-2 text-sm text-white/60"
            >
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              {breadcrumbs.map((crumb, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <ChevronRight className="w-4 h-4" />
                  {idx === breadcrumbs.length - 1 ? (
                    <span className="text-accent">{crumb.label}</span>
                  ) : (
                    <Link to={crumb.path} className="hover:text-white transition-colors">
                      {crumb.label}
                    </Link>
                  )}
                </div>
              ))}
            </motion.nav>
          )}
        </div>

        {/* Right Content / Decorative */}
        {decorativeText && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="hidden md:flex flex-1 justify-end items-center relative"
          >
            <div className="opacity-20 text-[4rem] lg:text-[5rem] leading-none whitespace-nowrap text-white font-cursive -rotate-6">
              {decorativeText}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
