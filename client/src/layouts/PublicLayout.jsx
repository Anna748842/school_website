import { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, MapPin, Phone, Mail, Clock } from 'lucide-react';

// Simple inline SVG social icons (lucide-react doesn't include brand icons)
function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  );
}
function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}
function YoutubeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0C.488 3.45.029 5.804 0 12c.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0C23.512 20.55 23.971 18.196 24 12c-.029-6.185-.484-8.549-4.385-8.816zM9 16V8l8 4-8 4z" />
    </svg>
  );
}
function TwitterIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
import { motion, AnimatePresence } from 'framer-motion';
import BrandMark from '../components/BrandMark';

const navigation = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Academics', path: '/academics' },
  { label: 'Admissions', path: '/admissions' },
  { label: 'Campus', path: '/campus' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'News & Events', path: '/news-events' },
  { label: 'Alumni', path: '/alumni' },
  { label: 'Contact', path: '/contact' },
];

export default function PublicLayout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col font-sans text-ink bg-surface">
      {/* Header */}
      <header 
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-brand/95 backdrop-blur-md shadow-lg py-2' 
            : 'bg-brand py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <BrandMark variant="light" />

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              {navigation.map((item) => {
                const isActive = location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path));
                return (
                  <Link
                    key={item.label}
                    to={item.path}
                    className={`text-sm font-medium transition-colors hover:text-accent relative py-2 ${
                      isActive ? 'text-accent' : 'text-white'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div 
                        layoutId="active-nav-indicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                        initial={false}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              <button className="text-white hover:text-accent transition-colors p-2" aria-label="Search">
                <Search className="w-5 h-5" />
              </button>
              <Link 
                to="/admissions" 
                className="bg-accent hover:bg-accent/90 text-white px-6 py-2 rounded-full font-medium transition-colors"
              >
                Apply Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white p-2"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden overflow-hidden bg-brand border-t border-white/10"
            >
              <nav className="flex flex-col px-4 py-6 space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.label}
                    to={item.path}
                    className={`text-base font-medium ${
                      location.pathname === item.path ? 'text-accent' : 'text-white'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-4 flex flex-col space-y-4 border-t border-white/10">
                  <Link 
                    to="/admissions" 
                    className="bg-accent text-white px-6 py-3 rounded-full font-medium text-center"
                  >
                    Apply Now
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-brand text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            
            {/* Col 1 */}
            <div className="space-y-6">
              <BrandMark variant="light" />
              <p className="text-white/70 text-sm leading-relaxed">
                Empowering students with holistic education, fostering creativity, and building character to lead tomorrow's world. Excellence in education since our inception.
              </p>
            </div>

            {/* Col 2 */}
            <div>
              <h3 className="text-lg font-display font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {['About Us', 'Academics', 'Admissions', 'Campus', 'Gallery', 'Contact'].map((link) => (
                  <li key={link}>
                    <Link 
                      to={`/${link.toLowerCase().replace(' ', '-') === 'about-us' ? 'about' : link.toLowerCase().replace(' ', '-')}`} 
                      className="text-white/70 hover:text-accent transition-colors text-sm flex items-center"
                    >
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3 */}
            <div>
              <h3 className="text-lg font-display font-semibold mb-6">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start text-sm text-white/70">
                  <MapPin className="w-5 h-5 text-accent mr-3 shrink-0" />
                  <span>Mahuda, P.O. Mahuda, P.S. Mahuda, Dhanbad, Jharkhand</span>
                </li>
                <li className="flex items-center text-sm text-white/70">
                  <Phone className="w-5 h-5 text-accent mr-3 shrink-0" />
                  <span>0326-2271013</span>
                </li>
                <li className="flex items-center text-sm text-white/70">
                  <Mail className="w-5 h-5 text-accent mr-3 shrink-0" />
                  <span>info@rmschool.in</span>
                </li>
                <li className="flex items-start text-sm text-white/70">
                  <Clock className="w-5 h-5 text-accent mr-3 shrink-0" />
                  <span>Mon-Sat 9:00 AM - 4:00 PM<br/>Sun & Holidays: Closed</span>
                </li>
              </ul>
            </div>

            {/* Col 4 */}
            <div>
              <h3 className="text-lg font-display font-semibold mb-6">Follow Us</h3>
              <div className="flex flex-wrap gap-3">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors" aria-label="Facebook">
                  <FacebookIcon className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors" aria-label="Instagram">
                  <InstagramIcon className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors" aria-label="YouTube">
                  <YoutubeIcon className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors" aria-label="Twitter">
                  <TwitterIcon className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors" aria-label="LinkedIn">
                  <LinkedinIcon className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
            <p>© 2026 Ravi Mahato Smarak High School. All Rights Reserved.</p>
            <p>Designed by Anand ❤️ for Education </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
