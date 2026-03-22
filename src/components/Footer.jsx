import { Link } from 'react-router-dom'
import { Linkedin, Github, Mail, MapPin, Calendar, ArrowRight } from 'lucide-react'

const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/#about' },
    { label: 'Services', path: '/#services' },
    { label: 'Portfolio', path: '/#portfolio' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/#contact' },
]

const resourceLinks = [
    { label: 'Case Studies', path: '/case-studies' },
    { label: 'Resources', path: '/resources' },
    { label: 'Media & Speaking', path: '/media' },
    { label: 'Testimonials', path: '/testimonials' },
]

export default function Footer() {
    return (
        <footer className="bg-navy border-t-2 border-gold/40">
            {/* Pre-footer CTA */}
            <div className="bg-navy-light py-16 md:py-20">
                <div className="container-content text-center">
                    <h2 className="font-jakarta font-bold text-3xl md:text-4xl text-white mb-4">
                        What Data Bottleneck Are You Trying to Solve?
                    </h2>
                    <p className="text-slate-muted font-dm text-lg mb-8 max-w-xl mx-auto">
                        Let's discuss how a modern data platform can transform your analytics.
                    </p>
                    <Link to="/#contact" className="btn-primary text-base px-8 py-4">
                        Start a Conversation <ArrowRight size={16} />
                    </Link>
                </div>
            </div>

            {/* Main footer */}
            <div className="container-content py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
                    {/* Col 1: Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded-lg bg-gold flex items-center justify-center">
                                <span className="font-mono font-bold text-navy text-sm">H</span>
                            </div>
                            <span className="font-jakarta font-bold text-white">Hamed Elbhrawy</span>
                        </div>
                        <p className="text-sm font-mono text-gold mb-2">Senior Data Platform Architect</p>
                        <p className="text-slate-muted text-sm font-dm mb-3 italic">"From Raw Data → Reliable Decisions"</p>
                        <div className="flex items-center gap-1.5 text-slate-muted text-sm">
                            <MapPin size={13} />
                            <span>Riyadh, Saudi Arabia</span>
                        </div>
                    </div>

                    {/* Col 2: Quick Links */}
                    <div>
                        <h4 className="font-jakarta font-semibold text-white mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
                        <ul className="space-y-2.5">
                            {quickLinks.map((link) => (
                                <li key={link.path}>
                                    <Link to={link.path} className="text-slate-muted text-sm hover:text-gold transition-colors font-dm">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 3: Resources */}
                    <div>
                        <h4 className="font-jakarta font-semibold text-white mb-4 text-sm uppercase tracking-wider">Resources</h4>
                        <ul className="space-y-2.5">
                            {resourceLinks.map((link) => (
                                <li key={link.path}>
                                    <Link to={link.path} className="text-slate-muted text-sm hover:text-gold transition-colors font-dm">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <a href="#newsletter" className="text-slate-muted text-sm hover:text-gold transition-colors font-dm">
                                    Newsletter
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Col 4: Connect */}
                    <div>
                        <h4 className="font-jakarta font-semibold text-white mb-4 text-sm uppercase tracking-wider">Connect</h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="https://linkedin.com/in/hamedelbhrawy" target="_blank" rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-slate-muted text-sm hover:text-gold transition-colors font-dm">
                                    <Linkedin size={15} /> linkedin.com/in/hamedelbhrawy
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/hamedelbhrawy" target="_blank" rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-slate-muted text-sm hover:text-gold transition-colors font-dm">
                                    <Github size={15} /> github.com/hamedelbhrawy
                                </a>
                            </li>
                            <li>
                                <a href="mailto:contact@hamedelbhrawy.com"
                                    className="flex items-center gap-2 text-slate-muted text-sm hover:text-gold transition-colors font-dm">
                                    <Mail size={15} /> contact@hamedelbhrawy.com
                                </a>
                            </li>
                        </ul>
                        <Link to="/#contact" className="btn-primary text-sm py-2 px-4 mt-5 inline-flex">
                            <Calendar size={14} /> Book a Call
                        </Link>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-slate-muted text-xs font-mono">
                        © {new Date().getFullYear()} Hamed Elbhrawy. All rights reserved.
                    </p>
                    <p className="text-slate-muted text-xs font-mono">
                        Data Platform Architect • Riyadh, Saudi Arabia
                    </p>
                </div>
            </div>
        </footer>
    )
}
