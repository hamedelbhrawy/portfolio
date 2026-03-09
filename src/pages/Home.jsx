import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import {
    ArrowRight, Download, Zap, Users, Code, Database,
    BarChart3, Clock
} from 'lucide-react'
import { useRef } from 'react'
import TypedText from '../components/TypedText'
import AnimatedCounter from '../components/AnimatedCounter'
import TechMarquee from '../components/TechMarquee'
import FadeUp from '../components/FadeUp'
import MagneticButton from '../components/MagneticButton'

const HEADSHOT = '/headshot.jpg'

/* ═══════════════════════════════════════════════════════════════
   SCROLLYTELLING COMPONENTS
   ═══════════════════════════════════════════════════════════════ */

// Scene 2 helper — words light up one-by-one as user scrolls
const ScrubbingText = ({ text, progress, highlightWords = [] }) => {
    const words = text.split(' ')
    return (
        <span className="inline-flex flex-wrap justify-center gap-x-[0.3em] gap-y-1">
            {words.map((word, i) => {
                const start = i / words.length
                const end = start + 1 / words.length
                const opacity = useTransform(progress, [start, end], [0.15, 1])
                const clean = word.replace(/[.,!?]/g, '')
                const isHL = highlightWords.includes(clean)
                const color = useTransform(progress, [start, end], ['#475569', isHL ? '#C5A55A' : '#ffffff'])
                return (
                    <motion.span key={i} style={{ opacity, color }} className="transition-none">
                        {word}
                    </motion.span>
                )
            })}
        </span>
    )
}

// Scene 3 — Horizontal scrolling pipeline
const PipelineScroll = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({ target: ref })
    const x = useTransform(scrollYProgress, [0, 1], ['0%', '-66.66%'])

    const panels = [
        {
            icon: Database, num: '01', title: 'Ingestion', color: 'text-red-400', border: 'border-red-500/20', bg: 'bg-red-500/5',
            desc: 'Connecting to scattered sources — APIs, ERP databases, legacy CSVs — pulling raw chaos into a centralized data lake.'
        },
        {
            icon: Code, num: '02', title: 'Processing', color: 'text-teal', border: 'border-teal/20', bg: 'bg-teal/5',
            desc: 'Orchestrating transformation via Airflow & dbt. Cleaning, modeling, and structuring data for analytical performance.'
        },
        {
            icon: BarChart3, num: '03', title: 'Serving', color: 'text-gold', border: 'border-gold/20', bg: 'bg-gold/5',
            desc: 'Delivering sub-second queries with ClickHouse and executive clarity via Power BI automated reporting.'
        },
    ]

    return (
        <section ref={ref} className="relative h-[300vh] bg-navy">
            <div className="sticky top-0 h-screen flex items-center overflow-hidden">
                <div className="absolute top-16 left-8 lg:top-20 lg:left-16 z-20">
                    <p className="font-mono text-gold/80 text-[11px] tracking-[0.25em] uppercase mb-3">The Pipeline</p>
                    <h2 className="font-jakarta text-3xl md:text-5xl text-white font-bold">How I Build It</h2>
                </div>

                <motion.div style={{ x }} className="flex w-[300vw] h-full">
                    {panels.map((p, i) => (
                        <div key={i} className="w-[100vw] h-full flex items-center justify-center px-8">
                            <div className={`max-w-lg text-center ${p.bg} ${p.border} border rounded-3xl p-12 backdrop-blur-sm`}>
                                <p className="font-mono text-white/20 text-7xl font-bold mb-6">{p.num}</p>
                                <p.icon size={56} className={`${p.color} mx-auto mb-6`} />
                                <h3 className="font-jakarta text-3xl text-white font-bold mb-4">{p.title}</h3>
                                <p className="font-dm text-lg text-slate-400 leading-relaxed">{p.desc}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Progress bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/5">
                    <motion.div style={{ scaleX: scrollYProgress, transformOrigin: '0% 50%' }}
                        className="h-full bg-gradient-to-r from-red-400 via-teal to-gold" />
                </div>
            </div>
        </section>
    )
}

// Scene 4 — Scroll-driven transformation cross-fade
function TransformationVisualizer() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start center', 'end center'] })

    const beforeOpacity = useTransform(scrollYProgress, [0.1, 0.45], [1, 0])
    const beforeY = useTransform(scrollYProgress, [0.1, 0.45], [0, -60])
    const afterOpacity = useTransform(scrollYProgress, [0.4, 0.75], [0, 1])
    const afterY = useTransform(scrollYProgress, [0.4, 0.75], [60, 0])
    const progressWidth = useTransform(scrollYProgress, [0.1, 0.75], ['0%', '100%'])

    return (
        <div ref={ref} className="absolute inset-0">
            <div className="sticky top-1/4 w-full">
                {/* Progress indicator */}
                <div className="h-1 bg-white/10 rounded-full mb-8 overflow-hidden">
                    <motion.div style={{ width: progressWidth }} className="h-full bg-gradient-to-r from-red-400 to-teal rounded-full" />
                </div>

                <div className="relative bg-white border border-slate-100 rounded-2xl p-8 shadow-2xl overflow-hidden min-h-[300px]">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white z-0" />

                    {/* BEFORE STATE */}
                    <motion.div style={{ opacity: beforeOpacity, y: beforeY }}
                        className="absolute inset-0 p-8 flex flex-col justify-center z-10 bg-red-50/50">
                        <div className="flex items-center justify-between mb-4">
                            <span className="font-mono text-sm font-bold text-red-500 uppercase tracking-widest flex items-center gap-2">
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500" />
                                </span>
                                Before
                            </span>
                            <Clock size={24} className="text-red-400 opacity-50" />
                        </div>
                        <h3 className="text-2xl font-jakarta font-bold text-slate-800 mb-2">Chaos & Latency</h3>
                        <p className="text-red-900/80 font-dm font-medium text-lg border-l-4 border-red-500 pl-4 py-2 bg-white/50 rounded-r-lg">
                            Nightly batch loads taking 8+ hours. Constant pipeline failures. Siloed data sources causing misaligned executive reports.
                        </p>
                    </motion.div>

                    {/* AFTER STATE */}
                    <motion.div style={{ opacity: afterOpacity, y: afterY }}
                        className="absolute inset-0 p-8 flex flex-col justify-center z-20 bg-teal/5 shadow-[inset_0_0_100px_rgba(26,188,156,0.1)]">
                        <div className="flex items-center justify-between mb-4">
                            <span className="font-mono text-sm font-bold text-teal uppercase tracking-widest flex items-center gap-2">
                                <Zap size={18} /> After
                            </span>
                            <Database size={24} className="text-teal opacity-50" />
                        </div>
                        <h3 className="text-2xl font-jakarta font-bold text-navy mb-2">The Modern Lakehouse</h3>
                        <div className="space-y-4">
                            <p className="text-teal-dark font-dm font-medium text-lg border-l-4 border-teal pl-4 py-2 bg-white/80 rounded-r-lg shadow-sm">
                                Near real-time streaming architecture. 99.9% pipeline reliability.
                            </p>
                            <div className="flex gap-2 text-xs font-mono font-bold text-slate-500">
                                <span className="bg-white px-3 py-1.5 rounded-full border border-slate-200">#dbt</span>
                                <span className="bg-white px-3 py-1.5 rounded-full border border-slate-200">#Snowflake</span>
                                <span className="bg-white px-3 py-1.5 rounded-full border border-slate-200">#Airflow</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

/* ═══════════════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════════════ */

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
        icon: Database, title: 'Enterprise BI Transformation', company: 'Deraah',
        impact: '259x faster dashboards, $80K saved annually', tag: 'Platform Architecture', color: 'text-teal'
    },
    {
        icon: Users, title: 'Customer 360 Engine', company: 'Deraah',
        impact: '2.7M records unified across 3 systems', tag: 'Customer Analytics', color: 'text-blue-electric'
    },
    {
        icon: Zap, title: 'Real-Time Ramadan Dashboard', company: 'Deraah',
        impact: '1,200+ stores monitored in real-time', tag: 'Data Engineering', color: 'text-gold'
    },
]

const blogPosts = [
    {
        title: "Why 80% of Your BI Project Is the Data Model (Not the Dashboard)", tag: 'Platform Architecture', readTime: '6 min read', date: 'Feb 2025',
        excerpt: "The dashboard is the easy part. Here's how the foundation determines everything."
    },
    {
        title: 'ClickHouse vs. SQL Server: A Real Migration Story', tag: 'Data Engineering', readTime: '8 min read', date: 'Jan 2025',
        excerpt: 'The numbers behind a 259x performance improvement in enterprise BI.'
    },
    {
        title: "Building a Customer 360 in Saudi Arabia's Dual-Calendar Retail Market", tag: 'Analytics Leadership', readTime: '7 min read', date: 'Dec 2024',
        excerpt: "Hijri and Gregorian calendars together. Here's how we unified 2.7M records."
    },
]

/* ═══════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function Home() {
    // ── SCENE 1: Deep Dive Hero ──
    const heroRef = useRef(null)
    const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
    const heroScale = useTransform(heroProgress, [0, 1], [1, 12])
    const heroTextOpacity = useTransform(heroProgress, [0, 0.35], [1, 0])
    const heroTextY = useTransform(heroProgress, [0, 0.35], [0, -120])

    // ── SCENE 2: Problem Text Scrub ──
    const problemRef = useRef(null)
    const { scrollYProgress: problemRaw } = useScroll({ target: problemRef, offset: ['start center', 'end center'] })
    const problemProgress = useSpring(problemRaw, { stiffness: 100, damping: 30 })

    return (
        <main className="relative bg-navy">
            {/* Global connecting thread */}
            <motion.div className="hidden lg:block fixed left-10 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/15 to-transparent pointer-events-none z-50" />

            {/* ═══════════════════════════════════════════════════════
                SCENE 1 — THE DEEP DIVE HERO
                ═══════════════════════════════════════════════════════ */}
            <section ref={heroRef} className="relative h-[200vh]">
                <div className="sticky top-0 h-screen overflow-hidden flex items-center bg-navy">
                    {/* Scaling grid background */}
                    <motion.div style={{ scale: heroScale }}
                        className="absolute inset-0 hero-gradient grid-pattern origin-center z-0">
                        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-gold/5 blur-3xl" />
                        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-teal/5 blur-3xl" />
                    </motion.div>

                    {/* Content that fades out as you dive in */}
                    <motion.div style={{ opacity: heroTextOpacity, y: heroTextY }}
                        className="container-content pt-24 pb-16 w-full relative z-10">
                        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                            <div className="flex-1 text-center lg:text-left">
                                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                                    className="inline-flex items-center gap-2 bg-teal/10 border border-teal/30 text-teal text-xs font-mono px-3 py-1.5 rounded-full mb-6">
                                    <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
                                    Open to Senior Opportunities
                                </motion.div>

                                <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                                    className="font-jakarta font-bold text-4xl md:text-5xl lg:text-7xl text-white mb-5 leading-tight tracking-tight">
                                    Architecting Modern<br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-200">Data Platforms</span> That<br />
                                    Power Decisions
                                </motion.h1>

                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
                                    className="font-dm text-xl md:text-2xl text-slate-300 mb-4 min-h-8 font-light">
                                    <TypedText />
                                </motion.div>

                                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
                                    className="font-mono text-sm text-gold/70 mb-10 tracking-[0.2em] uppercase">
                                    From Raw Data → Reliable Insights
                                </motion.p>

                                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
                                    className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                    <MagneticButton className="w-full sm:w-auto flex">
                                        <Link to="/portfolio" className="btn-primary w-full text-base px-8 py-4 shadow-[0_0_30px_rgba(197,165,90,0.3)]">
                                            Explore My Work <ArrowRight size={18} />
                                        </Link>
                                    </MagneticButton>
                                    <MagneticButton className="w-full sm:w-auto flex">
                                        <a href="/cv-hamed-elbhrawy.pdf" className="btn-secondary hover:bg-white/5 border-white/10 w-full text-base px-8 py-4" download>
                                            <Download size={18} className="text-slate-400" /> Download CV
                                        </a>
                                    </MagneticButton>
                                </motion.div>

                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
                                    className="mt-12 flex items-center gap-8 justify-center lg:justify-start">
                                    {[{ v: '6+', l: 'Years Exp.' }, { v: '4', l: 'Companies' }, { v: 'PL-300', l: 'Certified' }].map((s, i) => (
                                        <div key={i} className="flex items-center gap-8">
                                            {i > 0 && <div className="w-px h-10 bg-white/10" />}
                                            <div className="text-center lg:text-left">
                                                <p className="font-mono font-bold text-white text-3xl">{s.v}</p>
                                                <p className="text-slate-400 text-xs tracking-wider uppercase mt-1">{s.l}</p>
                                            </div>
                                        </div>
                                    ))}
                                </motion.div>
                            </div>

                            {/* Headshot */}
                            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3, duration: 1 }} className="flex-shrink-0 relative">
                                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[380px] lg:h-[380px]">
                                    <div className="absolute inset-0 rounded-full border-t-2 border-l border-gold/40 scale-[1.05] animate-[spin_10s_linear_infinite]" />
                                    <div className="absolute inset-0 rounded-full border-b-2 border-r border-teal/30 scale-[1.12] animate-[spin_15s_linear_infinite_reverse]" />
                                    <div className="absolute inset-0 rounded-full border-t border-white/10 scale-[1.2] animate-[spin_20s_linear_infinite]" />

                                    <div className="absolute inset-0 rounded-full overflow-hidden shadow-[0_0_60px_rgba(197,165,90,0.15)]">
                                        <div className="absolute top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2">
                                            <div className="w-full h-full bg-[conic-gradient(from_0deg,transparent_0_200deg,#C5A55A_360deg)] animate-[spin_4s_linear_infinite]" />
                                        </div>
                                        <div className="absolute inset-[4px] rounded-full overflow-hidden bg-navy-light z-10 border border-slate-800/80">
                                            <img src={HEADSHOT} alt="Hamed Elbhrawy" className="w-full h-full object-cover"
                                                onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.classList.add('flex', 'items-center', 'justify-center'); e.target.insertAdjacentHTML('afterend', '<span class="font-jakarta font-bold text-5xl text-gold">HE</span>') }} />
                                        </div>
                                    </div>

                                    <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                                        className="absolute -bottom-4 -left-4 z-20 bg-slate-900/90 backdrop-blur-md border border-white/10 rounded-2xl px-5 py-3 shadow-2xl">
                                        <p className="text-xs font-mono text-white flex items-center gap-2"><span className="text-teal">●</span> Riyadh, KSA</p>
                                    </motion.div>
                                    <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                                        className="absolute top-8 -right-4 z-20 bg-slate-900/90 backdrop-blur-md border border-gold/20 rounded-2xl px-4 py-2 shadow-2xl">
                                        <p className="text-xs font-mono text-gold flex items-center gap-2"><Database size={14} /> Architect</p>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Scroll hint */}
                    <motion.div style={{ opacity: heroTextOpacity }}
                        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10">
                        <p className="text-white/30 text-[10px] uppercase tracking-[0.3em] font-mono">Dive In</p>
                        <div className="w-px h-12 bg-gradient-to-b from-teal/50 to-transparent animate-pulse" />
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════
                SCENE 2 — THE PROBLEM (Text Scrub)
                ═══════════════════════════════════════════════════════ */}
            <section ref={problemRef} className="h-[200vh] relative z-10 bg-navy">
                <div className="sticky top-0 h-screen flex items-center justify-center">
                    <div className="container-content">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="font-jakarta font-bold text-4xl md:text-6xl lg:text-7xl text-white mb-10 leading-tight">
                                <ScrubbingText text="Data is abundant. Clarity is rare." progress={problemProgress}
                                    highlightWords={['abundant', 'Clarity', 'rare']} />
                            </h2>
                            <motion.p style={{
                                opacity: useTransform(problemProgress, [0.7, 1], [0, 1]),
                                y: useTransform(problemProgress, [0.7, 1], [30, 0])
                            }} className="font-dm text-xl md:text-2xl text-slate-300 leading-relaxed font-light max-w-2xl mx-auto">
                                Most enterprises sit on millions of records locked in siloed ERPs, CRMs, and legacy systems.
                                I architect the bridges that turn that raw, chaotic data into{' '}
                                <span className="text-teal bg-teal/10 px-2 py-0.5 rounded">executive-ready insights</span>.
                            </motion.p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════
                METRICS BAR
                ═══════════════════════════════════════════════════════ */}
            <section className="bg-navy-light border-b border-white/10 relative z-10">
                <div className="container-content py-14">
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

            {/* ═══════════════════════════════════════════════════════
                TRUSTED BY + TECH STACK
                ═══════════════════════════════════════════════════════ */}
            <section className="section-light">
                <div className="container-content">
                    <FadeUp className="text-center mb-10">
                        <p className="text-slate-muted font-mono text-xs uppercase tracking-widest mb-6">Trusted By</p>
                        <div className="flex flex-wrap justify-center gap-3">
                            {companies.map((c) => (
                                <span key={c} className="font-jakarta font-semibold text-sm text-charcoal bg-slate-soft border border-slate-200 px-5 py-2.5 rounded-xl">{c}</span>
                            ))}
                        </div>
                    </FadeUp>
                    <FadeUp delay={0.2} className="mt-12">
                        <p className="text-center text-slate-muted font-mono text-xs uppercase tracking-widest mb-6">Tech Stack</p>
                        <TechMarquee />
                    </FadeUp>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════
                SCENE 3 — THE DATA PIPELINE (Horizontal Scroll)
                ═══════════════════════════════════════════════════════ */}
            <PipelineScroll />

            {/* ═══════════════════════════════════════════════════════
                SCENE 4 — THE TRANSFORMATION CLIMAX
                ═══════════════════════════════════════════════════════ */}
            <section className="section-slate relative z-10">
                <div className="container-content">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                        <div className="sticky top-32">
                            <FadeUp>
                                <div className="tag-teal inline-flex mb-4">The Solution</div>
                                <h2 className="section-heading">
                                    From 6 Broken Tables to a 32-Model Production Lakehouse
                                </h2>
                                <p className="text-slate-muted mb-6 text-lg font-dm">
                                    A recent enterprise client was struggling with reporting delays and data trust issues. I completely re-architected their foundation.
                                </p>
                                <ul className="space-y-4 mb-8">
                                    {['Orchestrated via Apache Airflow', 'Transformed using dbt (Data Build Tool)', 'Visualize real-time in Power BI'].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-charcoal font-dm">
                                            <div className="w-1.5 h-1.5 rounded-full bg-teal" />{item}
                                        </li>
                                    ))}
                                </ul>
                                <MagneticButton>
                                    <Link to="/portfolio" className="btn-primary">
                                        View Full Case Study <ArrowRight size={18} />
                                    </Link>
                                </MagneticButton>
                            </FadeUp>
                        </div>

                        {/* Scroll-Linked Animation Container */}
                        <div className="relative h-[150vh]">
                            <TransformationVisualizer />
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════
                SCENE 5 — PORTFOLIO AS STACKING CARDS
                ═══════════════════════════════════════════════════════ */}
            <section className="section-light relative z-10">
                <div className="container-content">
                    <FadeUp className="flex items-end justify-between mb-10">
                        <div>
                            <p className="text-slate-muted font-mono text-xs uppercase tracking-widest mb-2">The Execution</p>
                            <h2 className="section-heading mb-0">Architectures I've Built</h2>
                        </div>
                        <Link to="/portfolio" className="hidden md:flex items-center gap-2 text-gold text-sm font-jakarta font-semibold hover:gap-3 transition-all">
                            View All Projects <ArrowRight size={14} />
                        </Link>
                    </FadeUp>

                    {/* Stacking cards container */}
                    <div className="relative">
                        {projects.map((p, i) => (
                            <div key={i} className="sticky mb-8" style={{ top: `${140 + i * 40}px` }}>
                                <FadeUp delay={i * 0.1}>
                                    <div className="card group flex flex-col md:flex-row items-start gap-6 bg-white shadow-xl border border-slate-100"
                                        style={{ transform: `scale(${1 - i * 0.02})` }}>
                                        <div className={`w-16 h-16 rounded-2xl bg-slate-soft flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform ${p.color}`}>
                                            <p.icon size={28} />
                                        </div>
                                        <div className="flex-1">
                                            <div className="tag-teal inline-flex mb-3 w-fit">{p.tag}</div>
                                            <h3 className="font-jakarta font-bold text-xl text-navy mb-1">{p.title}</h3>
                                            <p className="text-slate-muted text-sm font-mono mb-2">{p.company}</p>
                                            <p className="text-charcoal/80 font-dm text-sm leading-relaxed">{p.impact}</p>
                                            <Link to="/portfolio" className="mt-4 inline-flex items-center gap-1.5 text-gold text-sm font-jakarta font-semibold hover:gap-3 transition-all">
                                                View Project <ArrowRight size={13} />
                                            </Link>
                                        </div>
                                    </div>
                                </FadeUp>
                            </div>
                        ))}
                    </div>

                    <FadeUp className="text-center mt-10 md:hidden">
                        <Link to="/portfolio" className="btn-outline-gold">
                            View All Projects <ArrowRight size={14} />
                        </Link>
                    </FadeUp>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════
                LATEST INSIGHTS
                ═══════════════════════════════════════════════════════ */}
            <section className="section-slate relative z-10">
                <div className="container-content">
                    <FadeUp className="flex items-end justify-between mb-10">
                        <div>
                            <p className="text-slate-muted font-mono text-xs uppercase tracking-widest mb-2">The Methodology</p>
                            <h2 className="section-heading mb-0">How I Think About Data</h2>
                        </div>
                        <Link to="/blog" className="hidden md:flex items-center gap-2 text-gold text-sm font-jakarta font-semibold hover:gap-3 transition-all">
                            Read More <ArrowRight size={14} />
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
                                    <h3 className="font-jakarta font-bold text-base text-navy mb-3 leading-snug flex-1">{post.title}</h3>
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

            {/* ═══════════════════════════════════════════════════════
                VALUE PROP
                ═══════════════════════════════════════════════════════ */}
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
