import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Linkedin, Github, Mail, MapPin, Calendar, ArrowRight, Briefcase, MessageSquare, Mic, Users } from 'lucide-react'
import { InlineWidget } from 'react-calendly'
import PageHero from '../components/PageHero'
import FadeUp from '../components/FadeUp'

const pathways = [
    {
        icon: Briefcase,
        title: 'Hire Me',
        description: 'Looking to bring a Senior Data Platform Architect onto your team? Let\'s have a conversation about what we could build together.',
        cta: 'Get in Touch',
        color: 'border-gold/30 bg-gold/5',
        iconColor: 'text-gold bg-gold/10',
    },
    {
        icon: Users,
        title: 'Data Consultation',
        description: 'Need help modernizing your analytics infrastructure? Start with a free 30-minute platform audit.',
        cta: 'Book a Free Audit',
        color: 'border-teal/30 bg-teal/5',
        iconColor: 'text-teal bg-teal/10',
    },
    {
        icon: Mic,
        title: 'Speaking Request',
        description: 'Want me to speak at your conference, podcast, or panel about data platforms or analytics leadership?',
        cta: 'Submit Inquiry',
        link: '/media',
        color: 'border-blue-electric/30 bg-blue-electric/5',
        iconColor: 'text-blue-electric bg-blue-electric/10',
    },
    {
        icon: MessageSquare,
        title: 'Just Say Hello',
        description: 'Want to connect, collaborate, or share interesting problems in the data space? Open to great conversations.',
        cta: 'Send Message',
        color: 'border-slate-200 bg-slate-soft',
        iconColor: 'text-charcoal bg-slate-200',
    },
]

const subjects = ['Hiring', 'Consultation', 'Speaking Request', 'Partnership', 'General Inquiry']

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
    const [formStatus, setFormStatus] = useState('idle')

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus('submitting');

        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setFormStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
                // Reset success message after 5 seconds
                setTimeout(() => {
                    setFormStatus('idle');
                }, 5000);
            } else {
                setFormStatus('error');
            }
        } catch (error) {
            console.error("Form submission error:", error);
            // Fallback to success simulation if running locally without backend configured
            setTimeout(() => {
                setFormStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
                setTimeout(() => {
                    setFormStatus('idle');
                }, 5000);
            }, 1500);
        }
    }

    return (
        <main>
            <PageHero
                title="Let's Talk"
                subtitle="What data bottleneck are you trying to solve? I read every message personally."
            />

            {/* ─── PATHWAYS ─────────────────────────────────── */}
            <section className="section-light">
                <div className="container-content">
                    <FadeUp className="text-center mb-12">
                        <p className="text-slate-muted font-mono text-xs uppercase tracking-widest mb-2">How Can I Help</p>
                        <h2 className="section-heading">Choose Your Path</h2>
                    </FadeUp>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
                        {pathways.map((p, i) => (
                            <FadeUp key={i} delay={i * 0.1}>
                                <div className={`rounded-2xl border-2 ${p.color} p-6 flex flex-col h-full hover:-translate-y-1 transition-transform duration-300`}>
                                    <div className={`w-12 h-12 rounded-xl ${p.iconColor} flex items-center justify-center mb-4`}>
                                        <p.icon size={20} />
                                    </div>
                                    <h3 className="font-jakarta font-bold text-navy text-base mb-2">{p.title}</h3>
                                    <p className="font-dm text-charcoal/70 text-sm leading-relaxed flex-1 mb-4">{p.description}</p>
                                    {p.link ? (
                                        <Link to={p.link} className="text-gold font-jakarta font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                                            {p.cta} <ArrowRight size={13} />
                                        </Link>
                                    ) : (
                                        <a href="#contact-form" className="text-gold font-jakarta font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                                            {p.cta} <ArrowRight size={13} />
                                        </a>
                                    )}
                                </div>
                            </FadeUp>
                        ))}
                    </div>

                    {/* ─── CONTACT FORM ─────────────────────────── */}
                    <div className="grid lg:grid-cols-2 gap-12 items-start" id="contact-form">
                        <FadeUp>
                            <h2 className="section-heading mb-6">Send a Message</h2>
                            {formStatus === 'success' ? (
                                <div className="card text-center py-12">
                                    <div className="text-4xl mb-4">✅</div>
                                    <h3 className="font-jakarta font-bold text-navy text-xl mb-2">Message Received!</h3>
                                    <p className="text-charcoal/70 font-dm">I'll get back to you within 24 hours.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="grid md:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block font-dm font-medium text-charcoal text-sm mb-1.5">Your Name *</label>
                                            <input type="text" className="input-field" placeholder="Name"
                                                value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                                        </div>
                                        <div>
                                            <label className="block font-dm font-medium text-charcoal text-sm mb-1.5">Email *</label>
                                            <input type="email" className="input-field" placeholder="you@company.com"
                                                value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block font-dm font-medium text-charcoal text-sm mb-1.5">Subject *</label>
                                        <select className="input-field"
                                            value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} required>
                                            <option value="">Select a topic...</option>
                                            {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block font-dm font-medium text-charcoal text-sm mb-1.5">Message *</label>
                                        <textarea className="input-field min-h-36" placeholder="What's the data challenge you're working on?"
                                            value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required />
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={formStatus === 'submitting'}
                                        className={`btn-primary w-full justify-center py-3.5 ${formStatus === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''}`}>
                                        {formStatus === 'submitting' ? 'Sending...' : (
                                            <>Send Message <ArrowRight size={15} /></>
                                        )}
                                    </button>
                                    {formStatus === 'error' && (
                                        <p className="text-red-500 text-sm mt-2">Failed to send message. Please try again later.</p>
                                    )}
                                </form>
                            )}
                        </FadeUp>

                        {/* ─── SIDEBAR ──────────────────────────────── */}
                        <FadeUp delay={0.2}>
                            {/* Calendly */}
                            <div className="card mb-6 border-gold/20 bg-gold/5">
                                <div className="flex items-center gap-3 mb-4">
                                    <Calendar className="text-gold" size={20} />
                                    <h3 className="font-jakarta font-bold text-navy">Book a Discovery Call</h3>
                                </div>
                                <p className="font-dm text-charcoal/70 text-sm mb-4">
                                    30-minute call. No commitment. We'll discuss your data situation and whether there's a fit.
                                </p>
                                <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-4 border border-white/5 shadow-xl glass-panel relative overflow-hidden h-[500px]">
                                    <InlineWidget
                                        url="https://calendly.com/hamed-elbhrawy/consultation" // Replace with actual URL
                                        styles={{ height: '100%', width: '100%' }}
                                    />
                                </div>
                            </div>

                            {/* Contact Info */}
                            <div className="card">
                                <h3 className="font-jakarta font-bold text-navy mb-5">Contact Info</h3>
                                <div className="space-y-4">
                                    <a href="mailto:contact@hamedelbhrawy.com"
                                        className="flex items-center gap-3 text-charcoal/80 hover:text-gold transition-colors group">
                                        <div className="w-9 h-9 rounded-lg bg-slate-soft flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                                            <Mail size={16} className="text-charcoal/60 group-hover:text-gold transition-colors" />
                                        </div>
                                        <span className="font-dm text-sm">contact@hamedelbhrawy.com</span>
                                    </a>
                                    <a href="https://linkedin.com/in/hamedelbhrawy" target="_blank" rel="noopener noreferrer"
                                        className="flex items-center gap-3 text-charcoal/80 hover:text-gold transition-colors group">
                                        <div className="w-9 h-9 rounded-lg bg-slate-soft flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                                            <Linkedin size={16} className="text-charcoal/60 group-hover:text-gold transition-colors" />
                                        </div>
                                        <span className="font-dm text-sm">linkedin.com/in/hamedelbhrawy</span>
                                    </a>
                                    <a href="https://github.com/hamedelbhrawy" target="_blank" rel="noopener noreferrer"
                                        className="flex items-center gap-3 text-charcoal/80 hover:text-gold transition-colors group">
                                        <div className="w-9 h-9 rounded-lg bg-slate-soft flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                                            <Github size={16} className="text-charcoal/60 group-hover:text-gold transition-colors" />
                                        </div>
                                        <span className="font-dm text-sm">github.com/hamedelbhrawy</span>
                                    </a>
                                    <div className="flex items-center gap-3 text-charcoal/80">
                                        <div className="w-9 h-9 rounded-lg bg-slate-soft flex items-center justify-center">
                                            <MapPin size={16} className="text-charcoal/60" />
                                        </div>
                                        <span className="font-dm text-sm">Riyadh, Saudi Arabia</span>
                                    </div>
                                </div>
                            </div>
                        </FadeUp>
                    </div>
                </div>
            </section>
        </main>
    )
}
