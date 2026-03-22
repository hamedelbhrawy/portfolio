import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Download, ArrowRight } from 'lucide-react'
import PageHero from '../components/PageHero'
import FadeUp from '../components/FadeUp'

const topics = [
    {
        icon: '🏗️',
        title: 'From 6 Tables to a Lakehouse: A Retail BI Transformation Story',
        description: 'The complete technical and organizational story of rebuilding Deraah\'s analytics platform from scratch. Suited for: engineering conferences, data summits.',
    },
    {
        icon: '👥',
        title: 'Building Analytics Teams from Scratch in the Middle East',
        description: 'Cultural context, hiring realities, and what it takes to scale a data team in KSA. Suited for: HR tech, leadership, and digital transformation events.',
    },
    {
        icon: '📅',
        title: 'Dual-Calendar Analytics: The Unique Challenge of Saudi Retail',
        description: 'The Hijri and Gregorian calendar problem in data. How to design analytics that respect both. Suited for: regional tech and Arab data conferences.',
    },
    {
        icon: '💰',
        title: 'The $80K Nobody Expected: ROI of Analytics Automation',
        description: 'How to quantify and communicate the business value of data infrastructure investment. Suited for: executive boards, digital transformation forums.',
    },
]

export default function Media() {
    const [formData, setFormData] = useState({ event: '', date: '', topic: '', size: '', message: '' })
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
    }

    return (
        <main>
            <PageHero
                title="Speaking & Media"
                subtitle="Available for conferences, podcasts, panels, and keynotes about data platforms, analytics leadership, and the Saudi tech ecosystem."
            />

            {/* ─── SPEAKER BIO ──────────────────────────────── */}
            <section className="section-light">
                <div className="container-content">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <FadeUp>
                            <p className="text-slate-muted font-mono text-xs uppercase tracking-widest mb-3">Speaker Bio</p>
                            <h2 className="section-heading mb-5">Bio</h2>
                            <p className="font-dm text-charcoal/80 leading-relaxed mb-4 text-lg">
                                Hamed Elbhrawy is a Senior Data Platform Architect and Head of Analytics at Deraah Retail Group,
                                one of Saudi Arabia's largest fashion retailers. With 6+ years of experience across Samsung, Huawei,
                                EAI Company, and Deraah, he has designed and delivered modern data platforms that serve 1,200+ stores
                                in real-time.
                            </p>
                            <p className="font-dm text-charcoal/80 leading-relaxed mb-6">
                                Known for his ability to translate complex data infrastructure challenges into business outcomes,
                                Elbhrawy has achieved 259x dashboard performance improvements, unified 2.7 million customer records,
                                and built enterprise governance frameworks aligned with Saudi Arabia's SDAIA and PDPL regulations.
                                He leads a 6-person analytics team and holds the Microsoft PL-300 certification in Power BI.
                            </p>
                            <button className="btn-primary">
                                <Download size={15} /> Download Speaker Media Kit
                            </button>
                        </FadeUp>

                        <FadeUp delay={0.2}>
                            <div className="relative">
                                <div className="w-full aspect-square max-w-sm mx-auto rounded-2xl overflow-hidden bg-navy-light">
                                    <img src="/headshot.jpg" alt="Hamed Elbhrawy — Speaker" className="w-full h-full object-cover"
                                        onError={(e) => {
                                            e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center"><span class="font-jakarta font-bold text-7xl text-gold">HE</span></div>'
                                        }} />
                                </div>
                                {/* Floating stat cards */}
                                <div className="absolute top-4 -right-4 bg-white border border-slate-200 rounded-xl p-3 shadow-xl">
                                    <p className="font-mono font-bold text-gold text-xl">PL-300</p>
                                    <p className="text-charcoal text-xs font-dm">Microsoft Certified</p>
                                </div>
                                <div className="absolute bottom-4 -left-4 bg-navy border border-gold/30 rounded-xl p-3 shadow-xl">
                                    <p className="font-mono font-bold text-teal text-xl">6+</p>
                                    <p className="text-slate-muted text-xs font-dm">Years Experience</p>
                                </div>
                            </div>
                        </FadeUp>
                    </div>
                </div>
            </section>

            {/* ─── SPEAKING TOPICS ──────────────────────────── */}
            <section className="section-slate">
                <div className="container-content">
                    <FadeUp className="text-center mb-12">
                        <p className="text-slate-muted font-mono text-xs uppercase tracking-widest mb-2">Topics</p>
                        <h2 className="section-heading">Speaking Topics</h2>
                    </FadeUp>

                    <div className="grid md:grid-cols-2 gap-6">
                        {topics.map((t, i) => (
                            <FadeUp key={i} delay={i * 0.1}>
                                <div className="card group hover:border-gold/30 flex gap-4 h-full">
                                    <div className="text-3xl flex-shrink-0">{t.icon}</div>
                                    <div>
                                        <h3 className="font-jakarta font-bold text-navy text-base mb-2 leading-snug">{t.title}</h3>
                                        <p className="font-dm text-charcoal/70 text-sm leading-relaxed">{t.description}</p>
                                    </div>
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── PAST APPEARANCES ─────────────────────────── */}
            <section className="section-light">
                <div className="container-content text-center">
                    <FadeUp>
                        <p className="text-slate-muted font-mono text-xs uppercase tracking-widest mb-4">Past Appearances</p>
                        <div className="bg-slate-soft rounded-2xl p-12 max-w-lg mx-auto border border-dashed border-slate-300">
                            <div className="text-3xl mb-3">🎤</div>
                            <h3 className="font-jakarta font-semibold text-navy mb-2">Coming Soon</h3>
                            <p className="text-slate-muted font-dm text-sm">
                                Speaking engagements will be listed here as they're confirmed.{' '}
                                <Link to="/#contact" className="text-gold hover:underline">Inquire below</Link> to book for your event.
                            </p>
                        </div>
                    </FadeUp>
                </div>
            </section>

            {/* ─── SPEAKER INQUIRY FORM ─────────────────────── */}
            <section className="section-slate">
                <div className="container-content max-w-2xl mx-auto">
                    <FadeUp className="text-center mb-10">
                        <p className="text-slate-muted font-mono text-xs uppercase tracking-widest mb-2">Book</p>
                        <h2 className="section-heading">Speaker Inquiry</h2>
                        <p className="text-charcoal/70 font-dm">
                            Interested in having Hamed speak at your event? Fill in the details below.
                        </p>
                    </FadeUp>

                    <FadeUp delay={0.2}>
                        {submitted ? (
                            <div className="card text-center py-12">
                                <div className="text-4xl mb-4">🎉</div>
                                <h3 className="font-jakarta font-bold text-navy text-xl mb-2">Inquiry Received!</h3>
                                <p className="text-charcoal/70 font-dm">I'll get back to you within 48 hours.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="card space-y-5">
                                <div className="grid md:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block font-dm font-medium text-charcoal text-sm mb-1.5">Event Name *</label>
                                        <input type="text" className="input-field" placeholder="e.g., Saudi Data Summit 2025"
                                            value={formData.event} onChange={(e) => setFormData({ ...formData, event: e.target.value })} required />
                                    </div>
                                    <div>
                                        <label className="block font-dm font-medium text-charcoal text-sm mb-1.5">Event Date *</label>
                                        <input type="date" className="input-field"
                                            value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} required />
                                    </div>
                                </div>
                                <div>
                                    <label className="block font-dm font-medium text-charcoal text-sm mb-1.5">Preferred Topic *</label>
                                    <select className="input-field"
                                        value={formData.topic} onChange={(e) => setFormData({ ...formData, topic: e.target.value })} required>
                                        <option value="">Choose a topic...</option>
                                        {topics.map((t, i) => <option key={i} value={t.title}>{t.title.slice(0, 60)}...</option>)}
                                    </select>
                                </div>
                                <div>
                                    <label className="block font-dm font-medium text-charcoal text-sm mb-1.5">Estimated Audience Size</label>
                                    <input type="text" className="input-field" placeholder="e.g., 200-500"
                                        value={formData.size} onChange={(e) => setFormData({ ...formData, size: e.target.value })} />
                                </div>
                                <div>
                                    <label className="block font-dm font-medium text-charcoal text-sm mb-1.5">Message</label>
                                    <textarea className="input-field min-h-28" placeholder="Tell me about the event, audience, and what you're hoping the talk delivers..."
                                        value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
                                </div>
                                <button type="submit" className="btn-primary w-full justify-center py-3.5">
                                    Submit Inquiry <ArrowRight size={15} />
                                </button>
                            </form>
                        )}
                    </FadeUp>
                </div>
            </section>
        </main>
    )
}
