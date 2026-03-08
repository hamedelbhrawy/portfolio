import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Calendar, Languages } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Portfolio', path: '/portfolio' }
]

const moreLinks = [
    { label: 'Case Studies', path: '/case-studies' },
    { label: 'Blog & Insights', path: '/blog' },
    { label: 'Testimonials', path: '/testimonials' },
    { label: 'Resources', path: '/resources' },
    { label: 'Media & Speaking', path: '/media' }
]

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const location = useLocation()
    const { t, i18n } = useTranslation()

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        setMobileMenuOpen(false)
        setDropdownOpen(false)
    }, [location])

    const closeMenus = () => {
        setMobileMenuOpen(false)
        setDropdownOpen(false)
    }

    const toggleLanguage = () => {
        const newLang = i18n.language.startsWith('en') ? 'ar' : 'en'
        i18n.changeLanguage(newLang)
    }

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-nav shadow-lg' : 'bg-navy/80 backdrop-blur-sm'}`}>
            <div className="container-content">
                <div className="flex items-center justify-between h-16 md:h-18">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 group z-50">
                        <div className="w-8 h-8 rounded-lg bg-gold/20 border border-gold/40 flex items-center justify-center text-gold font-jakarta font-bold group-hover:bg-gold group-hover:text-navy transition-colors">
                            HE
                        </div>
                        <span className="font-jakarta font-bold text-white text-lg tracking-tight hidden sm:block group-hover:text-gold transition-colors">Hamed Elbhrawy</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-6 lg:gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`font-dm text-sm font-medium transition-colors duration-200 hover:text-gold ${location.pathname === link.path ? 'text-gold' : 'text-white/80'
                                    }`}
                            >
                                {t ? t(`nav.${link.label.toLowerCase()}`, link.label) : link.label}
                            </Link>
                        ))}

                        {/* More dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                className="flex items-center gap-1 font-dm text-sm font-medium text-white/80 hover:text-gold transition-colors duration-200"
                            >
                                More <ChevronDown size={14} className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                            </button>
                            <AnimatePresence>
                                {dropdownOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 8 }}
                                        transition={{ duration: 0.15 }}
                                        className="absolute right-0 mt-3 w-56 rounded-xl bg-slate-800 border border-white/10 shadow-2xl py-2 overflow-hidden"
                                    >
                                        {moreLinks.map((link) => (
                                            <Link
                                                key={link.path}
                                                to={link.path}
                                                className="block px-4 py-2 text-sm text-slate-300 hover:text-gold hover:bg-slate-700/50 transition-colors"
                                                onClick={closeMenus}
                                            >
                                                {link.label}
                                            </Link>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </nav>

                    {/* Right side actions */}
                    <div className="flex items-center gap-4">
                        <div className="hidden sm:flex items-center gap-4">
                            {/* Contact Link */}
                            <Link to="/contact" className="text-sm font-jakarta font-medium text-white/80 hover:text-gold transition-colors">
                                {t ? t('nav.contact', 'Contact') : 'Contact'}
                            </Link>

                            {/* Divider */}
                            <div className="h-5 w-px bg-white/20"></div>

                            <div className="flex items-center gap-4">
                                <a href="https://linkedin.com/in/hamedelbhrawy" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-blue-linkedin transition-colors">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                </a>
                                <a href="https://github.com/hamedelbhrawy" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                </a>
                            </div>

                            {/* Language Toggle */}
                            <button onClick={toggleLanguage} className="flex items-center gap-1.5 text-sm font-jakarta font-medium text-white/80 hover:text-gold transition-colors px-2 py-1 rounded-md hover:bg-slate-soft">
                                <Languages size={15} />
                                <span>{i18n.language.startsWith('ar') ? 'EN' : 'AR'}</span>
                            </button>

                            {/* Desktop CTA */}
                            <Link to="/contact" className="btn-primary py-2 px-5 text-sm whitespace-nowrap hidden lg:flex">
                                <Calendar size={14} className="mr-1.5" /> Book a Call
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-white/80 hover:text-white p-1"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden border-t border-white/10 bg-navy/95 backdrop-blur-xl max-h-[80vh] overflow-y-auto"
                    >
                        <div className="container-content py-6 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    onClick={closeMenus}
                                    className={`font-jakarta text-lg font-medium px-4 py-3 rounded-xl transition-colors ${location.pathname === link.path ? 'bg-gold/10 text-gold' : 'text-white/80 hover:bg-slate-800'
                                        }`}
                                >
                                    {t ? t(`nav.${link.label.toLowerCase()}`, link.label) : link.label}
                                </Link>
                            ))}

                            <div className="h-px bg-white/10 my-2"></div>

                            <p className="px-4 text-xs font-mono tracking-widest text-slate-400 uppercase">More</p>
                            {moreLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    onClick={closeMenus}
                                    className={`font-dm text-base px-4 py-2 rounded-xl transition-colors ${location.pathname === link.path ? 'bg-slate-800 text-white' : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            ))}

                            <div className="h-px bg-white/10 my-2"></div>

                            <div className="flex justify-between items-center px-4">
                                <button onClick={() => { toggleLanguage(); closeMenus(); }} className="flex items-center gap-2 font-jakarta text-white/80 py-2">
                                    <Languages size={18} className="text-gold" /> Switch to {i18n.language.startsWith('ar') ? 'English' : 'Arabic'}
                                </button>
                            </div>

                            <Link
                                to="/contact"
                                onClick={closeMenus}
                                className="w-full btn-primary justify-center mt-2 py-3.5"
                            >
                                <Calendar size={16} className="mr-2" />
                                Book a Strategy Call
                            </Link>

                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
