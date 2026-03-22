import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion'
import { Linkedin, Github, Mail, MapPin, Calendar, ArrowRight, Briefcase, MessageSquare, Mic, Users, ExternalLink, Send, Sparkles, Layers, Zap } from 'lucide-react'
import { InlineWidget } from 'react-calendly'
import PageHero from '../components/PageHero'
import FadeUp from '../components/FadeUp'

const subjects = ['Enterprise Architecture', 'Team Leadership', 'Fractional Head of Data', 'Consultation', 'Speaking']

function RequirementCard({ title, desc, icon: Icon, color }) {
    return (
        <div className="group relative bg-white/5 border border-white/10 rounded-[2rem] p-8 backdrop-blur-xl hover:border-gold/30 transition-all duration-500">
            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center text-white mb-6 shadow-lg`}>
                <Icon size={24} strokeWidth={1.5} />
            </div>
            <h4 className="font-jakarta font-black text-white text-xl mb-4 group-hover:text-gold transition-colors">{title}</h4>
            <p className="text-slate-400 font-dm leading-relaxed">{desc}</p>
        </div>
    )
}

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
    const [formStatus, setFormStatus] = useState('idle')
    const [focusedField, setFocusedField] = useState(null)

    const bridgeRef = useRef(null)
    const { scrollYProgress: bridgeProgress } = useScroll({
        target: bridgeRef,
        offset: ["start center", "end center"]
    })

    const pathHeight = useSpring(useTransform(bridgeProgress, [0, 0.8], ["0%", "100%"]), { stiffness: 100, damping: 30 })

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus('submitting');
        try {
            const res = await fetch('/api/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (res.ok) {
                setFormStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
                setTimeout(() => setFormStatus('idle'), 5000);
            } else {
                setFormStatus('idle');
            }
        } catch {
            setFormStatus('idle');
        }
    }

    return (
        <main className="bg-white overflow-x-hidden selection:bg-gold selection:text-navy">
            <PageHero
                title="Establish the Connection"
                subtitle="Whether it's a 32-model Lakehouse or a 30-minute consultation, let's start with the mission."
            />

            {/* ─── THE BRIDGE: NARRATIVE JOURNEY ──────────── */}
            <section ref={bridgeRef} className="relative bg-navy py-40 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(196,160,82,0.1),transparent_70%)]" />
                
                <div className="container-content relative z-10">
                    <div className="grid lg:grid-cols-2 gap-32">
                        <div className="pt-24">
                            <div className="sticky top-32">
                                <motion.span 
                                    style={{ opacity: useTransform(bridgeProgress, [0, 0.2], [0, 1]) }}
                                    className="font-mono text-[10px] text-gold uppercase tracking-[0.4em] mb-6 block font-bold"
                                >
                                    The Partnership
                                </motion.span>
                                <h2 className="text-5xl md:text-8xl font-jakarta font-black text-white tracking-tighter leading-[0.85] mb-12">
                                    The <br /><span className="text-gold">Bridge.</span>
                                </h2>
                                <p className="text-slate-400 text-xl md:text-2xl leading-relaxed font-dm max-w-lg mb-12 italic">
                                    "Architecture is not just about tools. It's about bridging the gap between business questions and data reality."
                                </p>
                                
                                <div className="relative h-64 w-px bg-white/10 mx-auto lg:mx-0">
                                    <motion.div 
                                        style={{ height: pathHeight }}
                                        className="absolute top-0 left-0 w-full bg-gold shadow-[0_0_15px_#C5A55A]"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-12">
                            <RequirementCard 
                                icon={Layers} 
                                title="Modern Data Architecture" 
                                desc="Moving from legacy silos to unified Lakehouses. I architect systems for speed, reliability, and business impact."
                                color="from-blue-600 to-blue-400"
                            />
                            <RequirementCard 
                                icon={Zap} 
                                title="Fractional Leadership" 
                                desc="Need to build or steer an analytics team? I provide high-level strategy and technical mentorship on a flexible basis."
                                color="from-gold to-yellow-500"
                            />
                            <RequirementCard 
                                icon={Sparkles} 
                                title="Strategic Advising" 
                                desc="Direct support for CTOs and founders looking to establish a 5-year data roadmap that actually delivers ROI."
                                color="from-teal to-emerald-400"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── THE PORTAL: INTERACTIVE FORM ───────────── */}
            <section className="py-40 bg-white relative">
                <div className="container-content">
                    <div className="grid lg:grid-cols-12 gap-20 items-stretch">
                        
                        {/* THE FORM PORTAL */}
                        <div className="lg:col-span-7">
                            <FadeUp>
                                <div className="relative bg-white rounded-[3rem] p-8 md:p-16 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] border border-slate-100 overflow-hidden group">
                                    {/* Focus Dynamic Glow */}
                                    <motion.div 
                                        animate={{ 
                                            opacity: focusedField ? 0.3 : 0,
                                            scale: focusedField ? 1.2 : 1
                                        }}
                                        className="absolute -top-32 -right-32 w-96 h-96 bg-gold/20 blur-[100px] rounded-full pointer-events-none transition-all duration-1000"
                                    />

                                    <h2 className="text-4xl md:text-5xl font-jakarta font-black text-navy mb-12 tracking-tighter">Initiate Request</h2>
                                    
                                    {formStatus === 'success' ? (
                                        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-20">
                                            <div className="w-24 h-24 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center mx-auto mb-8">
                                                <Send size={48} />
                                            </div>
                                            <h3 className="text-3xl font-jakarta font-black text-navy mb-4">Message Transmitted.</h3>
                                            <p className="text-charcoal/60 font-dm text-lg">I'll review your mission personally and respond within 24 hours.</p>
                                        </motion.div>
                                    ) : (
                                        <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                                            <div className="grid md:grid-cols-2 gap-8">
                                                <div className="space-y-3">
                                                    <label className="text-[10px] font-mono font-black uppercase text-slate-400 tracking-[0.2em] px-2">Identification</label>
                                                    <input
                                                        type="text" required placeholder="Your Name"
                                                        value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
                                                        onFocus={() => setFocusedField('name')} onBlur={() => setFocusedField(null)}
                                                        className="w-full h-16 bg-slate-50 border-none rounded-2xl px-8 font-jakarta font-bold text-navy focus:ring-4 focus:ring-gold/10 transition-all outline-none text-lg"
                                                    />
                                                </div>
                                                <div className="space-y-3">
                                                    <label className="text-[10px] font-mono font-black uppercase text-slate-400 tracking-[0.2em] px-2">Connection Point</label>
                                                    <input
                                                        type="email" required placeholder="you@company.com"
                                                        value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
                                                        onFocus={() => setFocusedField('email')} onBlur={() => setFocusedField(null)}
                                                        className="w-full h-16 bg-slate-50 border-none rounded-2xl px-8 font-jakarta font-bold text-navy focus:ring-4 focus:ring-gold/10 transition-all outline-none text-lg"
                                                    />
                                                </div>
                                            </div>

                                            <div className="space-y-3">
                                                <label className="text-[10px] font-mono font-black uppercase text-slate-400 tracking-[0.2em] px-2">Mission Subject</label>
                                                <div className="flex flex-wrap gap-3">
                                                    {subjects.map(s => (
                                                        <button 
                                                            key={s} type="button" 
                                                            onClick={() => setFormData({...formData, subject: s})}
                                                            className={`px-6 py-3 rounded-xl font-jakarta font-bold text-sm transition-all border-2 ${formData.subject === s ? 'bg-navy text-white border-navy shadow-lg' : 'bg-white text-slate-400 border-slate-100 hover:border-gold/30 hover:text-navy'}`}
                                                        >
                                                            {s}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="space-y-3">
                                                <label className="text-[10px] font-mono font-black uppercase text-slate-400 tracking-[0.2em] px-2">The Brief</label>
                                                <textarea
                                                    required placeholder="What challenge are we solving?"
                                                    value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}
                                                    onFocus={() => setFocusedField('message')} onBlur={() => setFocusedField(null)}
                                                    className="w-full min-h-[200px] bg-slate-50 border-none rounded-[2rem] p-8 font-jakarta font-bold text-navy focus:ring-4 focus:ring-gold/10 transition-all outline-none text-lg resize-none"
                                                />
                                            </div>

                                            <button 
                                                type="submit" 
                                                className="w-full h-20 bg-navy text-white rounded-[1.5rem] font-jakarta font-black text-xl hover:bg-gold hover:text-navy hover:scale-[1.02] active:scale-[0.98] transition-all shadow-3xl flex items-center justify-center gap-4"
                                            >
                                                {formStatus === 'submitting' ? 'Transmitting...' : 'Send Message'} <ArrowRight size={24} />
                                            </button>
                                        </form>
                                    )}
                                </div>
                            </FadeUp>
                        </div>

                        {/* SIDEBAR INTEL */}
                        <div className="lg:col-span-5 flex flex-col gap-10">
                            <FadeUp delay={0.2}>
                                <div className="bg-slate-50 rounded-[3rem] p-12 border border-slate-200">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="w-12 h-12 rounded-xl bg-gold/10 text-gold flex items-center justify-center">
                                            <Calendar size={24} />
                                        </div>
                                        <h3 className="font-jakarta font-black text-navy text-2xl">Discovery Call</h3>
                                    </div>
                                    <p className="text-charcoal/60 font-dm text-lg leading-relaxed mb-8">
                                        Need a faster answer? Book a 30-minute architectural audit directly into my calendar.
                                    </p>
                                    <div className="bg-white rounded-[2rem] p-4 shadow-xl border border-slate-100 h-[450px] relative overflow-hidden">
                                        <InlineWidget
                                            url="https://calendly.com/hamed-elbhrawy/consultation"
                                            styles={{ height: '100%', width: '100%' }}
                                        />
                                    </div>
                                </div>
                            </FadeUp>

                            <FadeUp delay={0.3}>
                                <div className="grid grid-cols-2 gap-6">
                                    <a href="https://linkedin.com/in/hamedelbhrawy" target="_blank" className="bg-navy rounded-3xl p-8 text-white hover:bg-gold hover:text-navy transition-all group shadow-xl">
                                        <Linkedin size={32} className="mb-6 opacity-40 group-hover:opacity-100" />
                                        <p className="font-jakarta font-black text-xl leading-none">LinkedIn</p>
                                        <div className="mt-4 flex items-center gap-2 font-mono text-[10px] uppercase font-bold tracking-widest opacity-50">
                                            Network <ExternalLink size={12} />
                                        </div>
                                    </a>
                                    <a href="mailto:contact@hamedelbhrawy.com" className="bg-slate-50 rounded-3xl p-8 text-navy hover:bg-gold hover:text-navy transition-all group shadow-xl border border-slate-200">
                                        <Mail size={32} className="mb-6 opacity-40 group-hover:opacity-100" />
                                        <p className="font-jakarta font-black text-xl leading-none">Email</p>
                                        <div className="mt-4 flex items-center gap-2 font-mono text-[10px] uppercase font-bold tracking-widest opacity-50 text-slate-400 group-hover:text-navy">
                                            Direct <ExternalLink size={12} />
                                        </div>
                                    </a>
                                </div>
                            </FadeUp>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
