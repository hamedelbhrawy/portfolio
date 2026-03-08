import PageHero from '../components/PageHero'
import FadeUp from '../components/FadeUp'

const testimonials = [
    {
        quote: "Hamed transformed our analytics function in under a year. We went from Excel-based reporting that nobody trusted to a real-time lakehouse that executives actually use to make decisions. The 259x performance improvement wasn't just a number — it changed the culture of how we use data.",
        name: 'Senior Executive',
        title: 'Head of Digital Transformation',
        company: 'Deraah Retail Group',
        context: 'Direct Manager',
        size: 'large',
    },
    {
        quote: "What sets Hamed apart is that he always starts with the business question, not the technology. He built architecture that scales, then made sure every dashboard answered a real question that someone needed to act on.",
        name: 'Team Colleague',
        title: 'Senior Product Manager',
        company: 'Deraah Retail Group',
        context: 'Cross-functional Collaborator',
        size: 'medium',
    },
    {
        quote: "Hamed built 15 automated reports for our region in under 30 days. Accurate, timely, and actually readable — a rare combination.",
        name: 'Regional Manager',
        title: 'Delta Region Operations',
        company: 'Huawei Technologies',
        context: 'Direct Stakeholder',
        size: 'small',
    },
    {
        quote: "The data governance framework Hamed designed is the first one in our company that people actually follow. It's practical, SDAIA-aligned, and built with the data team — not imposed on us.",
        name: 'Compliance Lead',
        title: 'Data Governance & Compliance',
        company: 'Deraah Retail Group',
        context: 'Internal Stakeholder',
        size: 'medium',
    },
    {
        quote: "Hamed's SQL workshop for our marketing team was the best internal training we've had. He explained complex concepts through our actual business data — not textbook examples. Three people on the team now write SQL independently.",
        name: 'Marketing Director',
        title: 'Head of Marketing Analytics',
        company: 'Deraah Retail Group',
        context: 'Training Participant',
        size: 'large',
    },
    {
        quote: "The Ramadan dashboard Hamed built changed how we manage stores in real time. For the first time, we could see which stores were leading or lagging every 30 minutes — not after the fact.",
        name: 'Operations VP',
        title: 'VP Retail Operations',
        company: 'Deraah Retail Group',
        context: 'Executive Stakeholder',
        size: 'medium',
    },
    {
        quote: "In 12 months at EAI, Hamed delivered 10 complete BI systems. Every one was documented, trained on, and adopted — not just delivered.",
        name: 'Project Manager',
        title: 'IT Project Manager',
        company: 'EAI Company',
        context: 'Direct Manager',
        size: 'small',
    },
    {
        quote: "Hamed leads by example. When he teaches his team something, it sticks — because he can show it working in production, not just explain it theoretically.",
        name: 'Analytics Engineer',
        title: 'Junior Data Engineer',
        company: 'Deraah Retail Group',
        context: 'Team Member',
        size: 'small',
    },
]

const companies = ['Samsung Electronics', 'Huawei Technologies', 'EAI Company', 'Deraah Retail Group']

export default function Testimonials() {
    return (
        <main>
            <PageHero
                title="What People Say"
                subtitle="Feedback from executives, colleagues, and team members across 4 companies and 6+ years."
                height="45vh"
            />

            {/* ─── MASONRY GRID ─────────────────────────────── */}
            <section className="section-light">
                <div className="container-content">
                    <div className="masonry-grid">
                        {testimonials.map((t, i) => (
                            <FadeUp key={i} delay={i * 0.04} className="masonry-item">
                                <div className={`card ${t.size === 'large' ? 'bg-navy text-white' : ''}`}>
                                    {/* Quote mark */}
                                    <div className={`font-serif text-5xl leading-none mb-3 ${t.size === 'large' ? 'text-gold/40' : 'text-gold/20'}`}>"</div>
                                    <p className={`font-dm leading-relaxed mb-5 text-sm ${t.size === 'large' ? 'text-white/90' : 'text-charcoal/80'}`}>
                                        {t.quote}
                                    </p>
                                    <div className="flex items-center gap-3 pt-4 border-t border-current/10">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-jakarta font-bold flex-shrink-0 ${t.size === 'large' ? 'bg-gold text-navy' : 'bg-navy text-gold'}`}>
                                            {t.name.split(' ').map(w => w[0]).join('').slice(0, 2)}
                                        </div>
                                        <div>
                                            <p className={`font-jakarta font-semibold text-sm ${t.size === 'large' ? 'text-white' : 'text-navy'}`}>{t.name}</p>
                                            <p className={`text-xs font-mono ${t.size === 'large' ? 'text-gold/70' : 'text-slate-muted'}`}>{t.title}</p>
                                            <p className={`text-xs font-mono ${t.size === 'large' ? 'text-slate-muted/60' : 'text-slate-muted/70'}`}>{t.company} · {t.context}</p>
                                        </div>
                                    </div>
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── LOGOS + CERTS ────────────────────────────── */}
            <section className="section-slate">
                <div className="container-content text-center">
                    <FadeUp>
                        <p className="text-slate-muted font-mono text-xs uppercase tracking-widest mb-6">Companies</p>
                        <div className="flex flex-wrap justify-center gap-3 mb-12">
                            {companies.map((c) => (
                                <span key={c} className="font-jakarta font-semibold text-sm text-charcoal bg-white border border-slate-200 px-5 py-2.5 rounded-xl shadow-sm">
                                    {c}
                                </span>
                            ))}
                        </div>

                        <p className="text-slate-muted font-mono text-xs uppercase tracking-widest mb-6">Certifications</p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <div className="bg-white border-2 border-gold/30 rounded-2xl p-5 flex items-center gap-3 shadow-sm">
                                <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center">
                                    <span className="text-gold font-mono font-bold text-xs">PL-300</span>
                                </div>
                                <div className="text-left">
                                    <p className="font-jakarta font-bold text-navy text-sm">Microsoft Certified</p>
                                    <p className="text-slate-muted text-xs font-mono">Power BI Data Analyst</p>
                                </div>
                            </div>
                            <div className="bg-white border border-slate-200 rounded-2xl p-5 flex items-center gap-3 shadow-sm">
                                <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center">
                                    <span className="text-green-600 font-mono font-bold text-xs">DC</span>
                                </div>
                                <div className="text-left">
                                    <p className="font-jakarta font-bold text-navy text-sm">DataCamp Certified</p>
                                    <p className="text-slate-muted text-xs font-mono">20+ courses completed</p>
                                </div>
                            </div>
                        </div>
                    </FadeUp>
                </div>
            </section>
        </main>
    )
}
