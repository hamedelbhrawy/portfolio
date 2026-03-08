import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
    ArrowRight, Download, Zap, DollarSign, Users, Code, Database,
    BarChart3, ChevronRight, ExternalLink, Clock, Tag
} from 'lucide-react'
import TypedText from '../components/TypedText'
import AnimatedCounter from '../components/AnimatedCounter'
import TechMarquee from '../components/TechMarquee'
import FadeUp from '../components/FadeUp'
import MagneticButton from '../components/MagneticButton'

// Professional headshot image
const HEADSHOT = '/headshot.jpg'

const metrics = [
    { value: 259, suffix: 'x', label: 'Faster Dashboards', sub: 'ClickHouse migration' },
    { value: 80, prefix: '$', suffix: 'K', label: 'Annual Savings', sub: 'via automation' },
    { value: 2.7, suffix: 'M', label: 'Records Unified', sub: 'Customer 360' },
    { value: 353, label: 'DAX Measures', sub: 'across 4 companies' },
    { value: 32, label: 'dbt Models', sub: 'in production' },
]

const companies = ['Samsung Electronics', 'Huawei Technologies', 'EAI Company', 'Deraah Retail Group']

const projects = [
    {
        icon: Database,
        title: 'Enterprise BI Transformation',
        company: 'Deraah',
        impact: '259x faster dashboards, $80K saved annually',
        tag: 'Platform Architecture',
        color: 'text-teal',
    },
    {
        icon: Users,
        title: 'Customer 360 Engine',
        company: 'Deraah',
        impact: '2.7M records unified across 3 systems',
        tag: 'Customer Analytics',
        color: 'text-blue-electric',
    },
    {
        icon: Zap,
        title: 'Real-Time Ramadan Dashboard',
        company: 'Deraah',
        impact: '1,200+ stores monitored in real-time',
        tag: 'Data Engineering',
        color: 'text-gold',
    },
]

const blogPosts = [
    {
        title: 'Why 80% of Your BI Project Is the Data Model (Not the Dashboard)',
        tag: 'Platform Architecture',
        readTime: '6 min read',
        date: 'Feb 2025',
        excerpt: 'The dashboard is the easy part. Here\'s how the foundation determines everything.'
    },
    {
        title: 'ClickHouse vs. SQL Server: A Real Migration Story',
        tag: 'Data Engineering',
        readTime: '8 min read',
        date: 'Jan 2025',
        excerpt: 'The numbers behind a 259x performance improvement in enterprise BI.'
    },
    {
        title: 'Building a Customer 360 in Saudi Arabia\'s Dual-Calendar Retail Market',
        tag: 'Analytics Leadership',
        readTime: '7 min read',
        date: 'Dec 2024',
        excerpt: 'Hijri and Gregorian calendars together. Here\'s how we unified 2.7M records.'
    },
]

export default function Home() {
    return (
        <main>
            {/* ─── HERO ──────────────────────────────────────── */}
            <section className="relative min-h-screen flex items-center hero-gradient grid-pattern overflow-hidden">
                {/* Decorative blobs */}
                <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-gold/5 blur-3xl pointer-events-none" />
                <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-teal/5 blur-3xl pointer-events-none" />

                <div className="container-content pt-24 pb-16 w-full">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                        {/* Text side */}
                        <div className="flex-1 text-center lg:text-left">
                            {/* Open to opps badge */}
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="inline-flex items-center gap-2 bg-teal/10 border border-teal/30 text-teal text-xs font-mono px-3 py-1.5 rounded-full mb-6"
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
                                Open to Senior Opportunities
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                                className="font-jakarta font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-5 leading-tight"
                            >
                                Architecting Modern<br />
                                <span className="text-gold">Data Platforms</span> That<br />
                                Power Business Decisions
                            </motion.h1>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="font-dm text-xl text-slate-muted mb-3 min-h-8"
                            >
                                <TypedText />
                            </motion.div>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="font-mono text-sm text-gold/70 mb-8 tracking-widest uppercase"
                            >
                                From Raw Data → Reliable Decisions
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                            >
                                <MagneticButton className="w-full sm:w-auto flex">
                                    <Link to="/portfolio" className="btn-primary w-full text-base px-8 py-3.5">
                                        Explore My Work <ArrowRight size={16} />
                                    </Link>
                                </MagneticButton>
                                <MagneticButton className="w-full sm:w-auto flex">
                                    <a
                                        href="/cv-hamed-elbhrawy.pdf"
                                        className="btn-secondary w-full text-base px-8 py-3.5"
                                        download
                                    >
                                        <Download size={16} /> Download CV
                                    </a>
                                </MagneticButton>
                            </motion.div>

                            {/* Quick stat pill */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                className="mt-8 flex items-center gap-6 justify-center lg:justify-start"
                            >
                                <div className="text-center">
                                    <p className="font-mono font-bold text-gold text-2xl">6+</p>
                                    <p className="text-slate-muted text-xs">Years Exp.</p>
                                </div>
                                <div className="w-px h-8 bg-white/20" />
                                <div className="text-center">
                                    <p className="font-mono font-bold text-gold text-2xl">4</p>
                                    <p className="text-slate-muted text-xs">Companies</p>
                                </div>
                                <div className="w-px h-8 bg-white/20" />
                                <div className="text-center">
                                    <p className="font-mono font-bold text-gold text-2xl">PL-300</p>
                                    <p className="text-slate-muted text-xs">Certified</p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Headshot / Visual side */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="flex-shrink-0 relative"
                        >
                            <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80">
                                {/* Animated Ring decorations (Sci-Fi HUD effect) */}
                                <div className="absolute inset-0 rounded-full border-t border-l border-gold/30 scale-110 animate-spin-slow" />
                                <div className="absolute inset-0 rounded-full border-b border-r border-teal/20 scale-125 animate-spin-slow-reverse" />

                                {/* Photo Container with Animated Conic Gradient Border */}
                                <div className="absolute inset-0 rounded-full overflow-hidden shadow-2xl shadow-gold/20">
                                    <div className="absolute top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2">
                                        {/* Spinning gradient beam */}
                                        <div className="w-full h-full bg-[conic-gradient(from_0deg,transparent_0_240deg,#C5A55A_360deg)] animate-[spin_5s_linear_infinite]" />
                                    </div>
                                    <div className="absolute inset-[3px] rounded-full overflow-hidden bg-navy-light z-10">
                                        <img
                                            src={HEADSHOT}
                                            alt="Hamed Elbhrawy — Senior Data Platform Architect"
                                            className="w-full h-full object-cover object-center"
                                            onError={(e) => {
                                                e.target.style.display = 'none'
                                                e.target.parentElement.classList.add('flex', 'items-center', 'justify-center')
                                                e.target.insertAdjacentHTML('afterend', '<span class="font-jakarta font-bold text-4xl text-gold">HE</span>')
                                            }}
                                        />
                                    </div>
                                </div>

                                {/* Floating badge (Remains Static) */}
                                <div className="absolute -bottom-3 -right-3 z-20 bg-navy-light border border-gold/30 rounded-xl px-3 py-2 shadow-xl">
                                    <p className="text-xs font-mono text-gold font-bold">📍 Riyadh, KSA</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                >
                    <p className="text-slate-muted text-xs font-mono">Scroll to explore</p>
                    <div className="w-px h-8 bg-gradient-to-b from-gold/50 to-transparent animate-pulse" />
                </motion.div>
            </section>

            {/* ─── METRICS BAR ──────────────────────────────── */}
            <section className="bg-navy-light border-y border-white/10">
                <div className="container-content py-12">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                        {metrics.map((m, i) => (
                            <FadeUp key={i} delay={i * 0.08} className="text-center">
                                <div className="font-mono font-bold text-4xl md:text-5xl text-gold mb-1">
                                    <AnimatedCounter end={m.value} prefix={m.prefix || ''} suffix={m.suffix || ''} />
                                </div>
                                <p className="font-jakarta font-semibold text-white text-sm mb-0.5">{m.label}</p>
                                <p className="text-slate-muted text-xs font-mono">{m.sub}</p>
                            </FadeUp>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── TRUSTED BY + TECH STACK ──────────────────── */}
            <section className="section-light">
                <div className="container-content">
                    <FadeUp className="text-center mb-10">
                        <p className="text-slate-muted font-mono text-xs uppercase tracking-widest mb-6">Trusted By</p>
                        <div className="flex flex-wrap justify-center gap-3">
                            {companies.map((c) => (
                                <span key={c} className="font-jakarta font-semibold text-sm text-charcoal bg-slate-soft border border-slate-200 px-5 py-2.5 rounded-xl">
                                    {c}
                                </span>
                            ))}
                        </div>
                    </FadeUp>

                    <FadeUp delay={0.2} className="mt-12">
                        <p className="text-center text-slate-muted font-mono text-xs uppercase tracking-widest mb-6">
                            Tech Stack
                        </p>
                        <TechMarquee />
                    </FadeUp>
                </div>
            </section>

            {/* ─── TRANSFORMATION STORY ─────────────────────── */}
            <section className="section-slate">
                <div className="container-content">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <FadeUp>
                            <div className="tag-teal inline-flex mb-4">Case Study</div>
                            <h2 className="section-heading">
                                From 6 Broken Tables to a 32-Model Production Lakehouse
                            </h2>
                            <p className="text-charcoal/80 font-dm text-lg leading-relaxed mb-6">
                                When I joined Deraah Retail Group, the analytics infrastructure was 6 legacy tables,
                                dozens of disconnected Excel files, and dashboards that took 45 minutes to load.
                            </p>
                            <p className="text-charcoal/80 font-dm leading-relaxed mb-8">
                                Today, it's a 32-model Medallion Lakehouse on ClickHouse, orchestrated by Apache Airflow,
                                with dashboards loading in seconds — serving 1,200+ stores across Saudi Arabia.
                            </p>
                            <Link to="/case-studies" className="btn-outline-gold text-sm">
                                Read the Full Case Study <ChevronRight size={16} />
                            </Link>
                        </FadeUp>

                        {/* Visual: Before/After */}
                        <FadeUp delay={0.2}>
                            <div className="bg-navy rounded-2xl p-6 text-center overflow-hidden relative">
                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    {/* Before */}
                                    <div className="bg-red-950/40 border border-red-500/20 rounded-xl p-4">
                                        <p className="font-mono text-red-400 text-xs uppercase tracking-wide mb-3">Before</p>
                                        {['Table_1_final.xlsx', 'report_v3_FINAL.pbix', '?? Missing joins', 'ETL: 45 min', '6 sources', 'Manual only'].map((item, i) => (
                                            <div key={i} className="flex items-center gap-2 mb-1.5">
                                                <div className="w-1 h-1 rounded-full bg-red-500/60" />
                                                <span className="text-red-300/70 text-xs font-mono">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                    {/* After */}
                                    <div className="bg-teal/5 border border-teal/20 rounded-xl p-4">
                                        <p className="font-mono text-teal text-xs uppercase tracking-wide mb-3">After</p>
                                        {['Medallion Lakehouse', '32 dbt models', 'ClickHouse OLAP', 'ETL: &lt;2 min', '259x faster', '$80K saved'].map((item, i) => (
                                            <div key={i} className="flex items-center gap-2 mb-1.5">
                                                <div className="w-1 h-1 rounded-full bg-teal" />
                                                <span dangerouslySetInnerHTML={{ __html: item }} className="text-teal/80 text-xs font-mono" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {/* Arrow */}
                                <div className="flex items-center justify-center gap-2 mt-2">
                                    <div className="h-px flex-1 bg-gradient-to-r from-red-500/30 to-gold/50" />
                                    <ArrowRight className="text-gold" size={18} />
                                    <div className="h-px flex-1 bg-gradient-to-r from-gold/50 to-teal/30" />
                                </div>
                            </div>
                        </FadeUp>
                    </div>
                </div>
            </section>

            {/* ─── FEATURED PROJECTS ────────────────────────── */}
            <section className="section-light">
                <div className="container-content">
                    <FadeUp className="flex items-end justify-between mb-10">
                        <div>
                            <p className="text-slate-muted font-mono text-xs uppercase tracking-widest mb-2">Portfolio</p>
                            <h2 className="section-heading mb-0">Selected Work</h2>
                        </div>
                        <Link to="/portfolio" className="hidden md:flex items-center gap-2 text-gold text-sm font-jakarta font-semibold hover:gap-3 transition-all">
                            View All Projects <ArrowRight size={14} />
                        </Link>
                    </FadeUp>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((p, i) => (
                            <FadeUp key={i} delay={i * 0.1}>
                                <div className="card group h-full flex flex-col">
                                    <div className={`w-12 h-12 rounded-xl bg-slate-soft flex items-center justify-center mb-5 group-hover:scale-110 transition-transform ${p.color}`}>
                                        <p.icon size={22} />
                                    </div>
                                    <div className="tag-teal inline-flex mb-3 w-fit">{p.tag}</div>
                                    <h3 className="font-jakarta font-bold text-lg text-navy mb-1">{p.title}</h3>
                                    <p className="text-slate-muted text-sm font-mono mb-3">{p.company}</p>
                                    <p className="text-charcoal/80 font-dm text-sm leading-relaxed flex-1">{p.impact}</p>
                                    <Link
                                        to="/portfolio"
                                        className="mt-4 inline-flex items-center gap-1.5 text-gold text-sm font-jakarta font-semibold hover:gap-3 transition-all"
                                    >
                                        View Project <ArrowRight size={13} />
                                    </Link>
                                </div>
                            </FadeUp>
                        ))}
                    </div>

                    <FadeUp className="text-center mt-10 md:hidden">
                        <Link to="/portfolio" className="btn-outline-gold">
                            View All Projects <ArrowRight size={14} />
                        </Link>
                    </FadeUp>
                </div>
            </section>

            {/* ─── LATEST INSIGHTS ──────────────────────────── */}
            <section className="section-slate">
                <div className="container-content">
                    <FadeUp className="flex items-end justify-between mb-10">
                        <div>
                            <p className="text-slate-muted font-mono text-xs uppercase tracking-widest mb-2">Thought Leadership</p>
                            <h2 className="section-heading mb-0">Latest Insights</h2>
                        </div>
                        <Link to="/blog" className="hidden md:flex items-center gap-2 text-gold text-sm font-jakarta font-semibold hover:gap-3 transition-all">
                            View All Posts <ArrowRight size={14} />
                        </Link>
                    </FadeUp>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {blogPosts.map((post, i) => (
                            <FadeUp key={i} delay={i * 0.1}>
                                <article className="card group h-full flex flex-col">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="tag-teal">{post.tag}</span>
                                        <span className="text-slate-muted text-xs font-mono flex items-center gap-1">
                                            <Clock size={11} /> {post.readTime}
                                        </span>
                                    </div>
                                    <h3 className="font-jakarta font-bold text-base text-navy mb-3 leading-snug flex-1">
                                        {post.title}
                                    </h3>
                                    <p className="text-charcoal/70 font-dm text-sm leading-relaxed mb-4">{post.excerpt}</p>
                                    <div className="flex items-center justify-between mt-auto">
                                        <span className="text-slate-muted text-xs font-mono">{post.date}</span>
                                        <Link to="/blog" className="text-gold text-xs font-jakarta font-semibold hover:underline flex items-center gap-1">
                                            Read More <ArrowRight size={11} />
                                        </Link>
                                    </div>
                                </article>
                            </FadeUp>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── VALUE PROP ───────────────────────────────── */}
            <section className="section-dark">
                <div className="container-content">
                    <FadeUp className="max-w-3xl mx-auto text-center">
                        <div className="font-mono text-teal text-xs uppercase tracking-widest mb-4">Value Proposition</div>
                        <blockquote className="font-jakarta font-bold text-2xl md:text-3xl text-white leading-relaxed mb-8">
                            "I help companies transform fragmented data into a modern analytics platform that delivers{' '}
                            <span className="text-gold">trusted insights</span>,{' '}
                            <span className="text-teal">scalable pipelines</span>, and{' '}
                            <span className="text-blue-electric">executive-ready dashboards</span>."
                        </blockquote>
                        <Link to="/services" className="btn-primary text-base px-8 py-4">
                            Explore Services <ArrowRight size={16} />
                        </Link>
                    </FadeUp>
                </div>
            </section>
        </main>
    )
}
