import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion'
import { Download, ExternalLink, Award, BookOpen, ChevronDown, Database, RefreshCw, Server, Settings, Network, Activity, LineChart, Cpu, Zap, Target, ArrowDown } from 'lucide-react'
import { useState, useRef } from 'react'
import PageHero from '../components/PageHero'
import FadeUp from '../components/FadeUp'

const timeline = [
    {
        period: '2019 – 2022',
        company: 'Samsung Electronics',
        role: 'Promoter → Team Leader → Data Analyst',
        achievement: 'Built foundation in sales operations. Taught myself SQL at night to make sense of the data.',
        color: 'from-blue-600 to-blue-400',
        glow: 'shadow-blue-500/20',
        icon: Target
    },
    {
        period: '2022',
        company: 'Huawei Technologies',
        role: 'Regional Data Analyst',
        achievement: '15+ automated reports built in 30 days for the Delta region.',
        color: 'from-red-600 to-red-400',
        glow: 'shadow-red-500/20',
        icon: Zap
    },
    {
        period: '2022 – 2023',
        company: 'EAI Company',
        role: 'Operations Analyst & BI Developer',
        achievement: '10 major BI systems in 12 months: supply chain, ERP master data, and more.',
        color: 'from-gold to-yellow-500',
        glow: 'shadow-gold/20',
        icon: Settings
    },
    {
        period: '2023 – Present',
        company: 'Deraah Retail Group',
        role: 'Head of Analytics & BI Architect',
        achievement: '6 tables → 32-model production Medallion Lakehouse. Leading a 6-person analytics team.',
        color: 'from-teal to-emerald-400',
        glow: 'shadow-teal/20',
        icon: Cpu,
        current: true,
    },
]

const philosophy = [
    {
        number: '01',
        title: 'Business Questions Drive Technology',
        body: 'The tool choice follows the question, not the other way around. Every architecture decision starts with "what decision does this enable?"',
    },
    {
        number: '02',
        title: '80% Is the Data Model',
        body: 'The dashboard is the easy part. If the underlying data model is wrong, the most beautiful visualization is built on sand.',
    },
    {
        number: '03',
        title: 'If It Needs Explanation, It\'s Not Good',
        body: 'A well-designed dashboard should be self-evident to an executive in 30 seconds. Clarity is a design constraint, not a nice-to-have.',
    },
]

const certifications = [
    { name: 'Microsoft Power BI Data Analyst', code: 'PL-300', issuer: 'Microsoft', highlight: true },
    { name: 'B.Sc. Accounting', code: 'BSc', issuer: 'Zagazig University, Egypt', highlight: false },
]

const datacampCourses = [
    'Data Analysis with Python', 'SQL for Data Science', 'Data Visualization with Power BI',
    'dbt Fundamentals', 'Introduction to Airflow in Python', 'ClickHouse Fundamentals',
    'Data Modeling in dbt', 'Building Data Pipelines in Python', 'Advanced SQL',
    'Machine Learning Fundamentals', 'Data Engineering for Everyone', 'Cleaning Data in Python',
    'Exploratory Data Analysis in Python', 'Introduction to Git', 'Data Governance Concepts',
    'Building Power BI Dashboards', 'DAX in Power BI', 'Database Design',
    'ETL and ELT in Python', 'Reporting in SQL',
]

const ScrolledText = ({ text, progress, highlightWords = [] }) => {
    const words = text.split(' ')
    return (
        <span className="inline-flex flex-wrap gap-x-[0.3em] gap-y-1">
            {words.map((word, i) => {
                const start = (i / words.length) * 0.8
                const end = start + 0.2
                const opacity = useTransform(progress, [start, end], [0.15, 1])
                const scale = useTransform(progress, [start, end], [0.98, 1])
                const clean = word.replace(/[.,!?]/g, '')
                const isHL = highlightWords.includes(clean)
                const color = useTransform(progress, [start, end], ["#e2e8f0", isHL ? "#C5A55A" : "#1e293b"])
                
                return (
                    <motion.span key={i} style={{ opacity, scale, color }} className="transition-none">
                        {word}
                    </motion.span>
                )
            })}
        </span>
    )
}

function PhilosophyItem({ item, index }) {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start center", "end center"]
    })
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9])
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3])
    const x = useTransform(scrollYProgress, [0, 0.5, 1], [20, 0, -20])

    return (
        <motion.div ref={ref} style={{ scale, opacity, x }} className="flex gap-8 group">
            <div className="flex-shrink-0 w-20 h-20 rounded-3xl bg-slate-50 flex items-center justify-center font-mono font-black text-3xl text-gold group-hover:bg-gold group-hover:text-white transition-all duration-700 shadow-lg border border-slate-100">
                {item.number}
            </div>
            <div className="pt-2">
                <h3 className="font-jakarta font-black text-navy p-2 px-4 inline-block rounded-lg text-2xl mb-4 group-hover:text-gold transition-colors">{item.title}</h3>
                <p className="text-charcoal/80 font-dm text-lg leading-relaxed">{item.body}</p>
            </div>
        </motion.div>
    )
}

function TimelineItem({ item, index }) {
    const itemRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: itemRef,
        offset: ["start 80%", "center center"]
    })

    const opacity = useTransform(scrollYProgress, [0, 0.5], [0.2, 1])
    const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1])
    const x = useTransform(scrollYProgress, [0, 0.5], [-30, 0])

    return (
        <motion.div
            ref={itemRef}
            style={{ opacity, scale, x }}
            className="relative pl-12 md:pl-20 pb-20 last:pb-0"
        >
            {/* Connection Dot */}
            <div className={`absolute left-0 top-0 w-10 h-10 -translate-x-1/2 rounded-full border-4 border-slate-50 flex items-center justify-center bg-gradient-to-br ${item.color} shadow-2xl ${item.glow} z-10 overflow-hidden group`}>
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                <item.icon className="text-white relative z-10" size={18} />
            </div>

            <div className="bg-white rounded-[2rem] p-8 shadow-xl border border-slate-100 hover:border-gold/30 transition-all group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-center gap-4 mb-4">
                    <span className="font-mono text-sm font-black text-gold bg-gold/5 px-4 py-1.5 rounded-full border border-gold/10 tracking-widest">{item.period}</span>
                    {item.current && <span className="tag-teal text-[10px] animate-pulse">Active Role</span>}
                </div>
                <h3 className="font-jakarta font-black text-navy text-2xl md:text-3xl mb-2 group-hover:text-gold transition-colors tracking-tight">{item.company}</h3>
                <p className="text-charcoal/40 font-mono text-sm mb-6 uppercase tracking-widest font-bold">{item.role}</p>
                <div className="h-[2px] w-16 bg-gold/20 mb-6 group-hover:w-full transition-all duration-1000" />
                <p className="text-charcoal/70 font-dm text-lg leading-relaxed italic">
                    {item.achievement}
                </p>
            </div>
        </motion.div>
    )
}

export default function About() {
    const [showCourses, setShowCourses] = useState(false)
    const originRef = useRef(null)
    const { scrollYProgress: originProgress } = useScroll({
        target: originRef,
        offset: ["start center", "45% center"]
    })
    const { scrollYProgress: originProgress2 } = useScroll({
        target: originRef,
        offset: ["45% center", "end center"]
    })

    const timelineContainerRef = useRef(null)
    const { scrollYProgress: pathProgress } = useScroll({
        target: timelineContainerRef,
        offset: ["start 80%", "end 80%"]
    })
    const pathHeight = useSpring(useTransform(pathProgress, [0, 1], ["0%", "100%"]), { stiffness: 100, damping: 30 })

    const philosophyRef = useRef(null)
    const { scrollYProgress: philProgress } = useScroll({
        target: philosophyRef,
        offset: ["start end", "center center"]
    })

    return (
        <main className="overflow-x-hidden bg-white text-navy selection:bg-gold selection:text-navy">
            <PageHero
                title="The Story Behind the Data"
                subtitle="From Samsung phone promoter to enterprise data platform architect — a career built on curiosity, not credentials."
            />

            {/* ─── ORIGIN STORY: CINEMATIC SCRUB ─────────────── */}
            <section ref={originRef} className="relative h-[150vh]">
                <div className="sticky top-16 md:top-20 h-screen flex flex-col items-center justify-start pt-32 pb-16 bg-white/80 backdrop-blur-sm">
                    <div className="container-content">
                        <div className="max-w-4xl mx-auto space-y-12">
                            <FadeUp>
                                <span className="font-mono text-xs text-gold uppercase tracking-[0.4em] mb-4 block font-bold">The Narrative</span>
                                <h2 className="text-5xl md:text-7xl font-jakarta font-black tracking-tighter leading-[0.9] mb-8">The Unexpected <br />Path</h2>
                            </FadeUp>
                            
                            <div className="space-y-12 font-jakarta text-2xl md:text-4xl font-black leading-tight tracking-tighter">
                                <p className="relative">
                                    <ScrolledText 
                                        progress={originProgress}
                                        text="I studied accounting and graduated into a job as a Samsung phone promoter. Not a typical data story. But every evening, I taught myself SQL—obsessed with why the sales numbers looked the way they did."
                                        highlightWords={['SQL', 'obsessed']}
                                    />
                                </p>
                                <p>
                                    <ScrolledText 
                                        progress={originProgress2}
                                        text="That iterative obsession took me through Huawei and EAI, building systems and automating pipelines, eventually owning entire BI functions."
                                        highlightWords={['Huawei', 'EAI', 'pipelines']}
                                    />
                                </p>
                                <motion.div 
                                    style={{ opacity: useTransform(originProgress2, [0.8, 1], [0, 1]), y: useTransform(originProgress2, [0.8, 1], [20, 0]) }}
                                    className="p-8 bg-navy text-white rounded-[2.5rem] border-l-8 border-gold shadow-2xl text-xl font-dm font-normal tracking-normal leading-relaxed relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 blur-3xl rounded-full" />
                                    Today at Deraah Retail Group, I lead a 6-person analytics team and have architected the company's entire modern data platform from scratch.
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── CAREER TIMELINE: DRAWING PATH ────────────── */}
            <section className="bg-slate-50 py-40">
                <div className="container-content">
                    <FadeUp className="text-center mb-32">
                        <p className="text-gold font-mono text-xs uppercase tracking-[0.4em] mb-4">Evolution</p>
                        <h2 className="text-5xl md:text-8xl font-jakarta font-black tracking-tighter leading-none mb-6">Career Timeline</h2>
                        <div className="w-24 h-1 bg-gold mx-auto rounded-full" />
                    </FadeUp>

                    <div className="max-w-4xl mx-auto relative pt-12" ref={timelineContainerRef}>
                        {/* The Animated Career Line */}
                        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-slate-200 rounded-full" />
                        <motion.div 
                            style={{ height: pathHeight }}
                            className="absolute left-0 top-0 w-[2px] bg-gradient-to-b from-blue-500 via-gold to-teal z-0 rounded-full origin-top shadow-[0_0_15px_#C5A55A]"
                        />

                        <div className="relative z-10">
                            {timeline.map((item, i) => (
                                <TimelineItem key={i} item={item} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── PHILOSOPHY: SCROLL SNAP ──────────────────── */}
            <section className="py-40 bg-white relative" ref={philosophyRef}>
                <div className="container-content relative z-10">
                    <div className="grid lg:grid-cols-2 gap-32 items-start">
                        <div className="sticky top-32">
                            <span className="text-gold font-mono text-xs uppercase tracking-[0.4em] mb-6 block font-bold">The Creed</span>
                            <h2 className="text-5xl md:text-7xl font-jakarta font-black tracking-tighter leading-[0.9] mb-12">How I Architect Solutions</h2>
                            <p className="text-charcoal/60 text-xl leading-relaxed font-dm max-w-lg mb-12">
                                Data engineering isn't just about moving bits. It's about constructing a reliable window into the business heart.
                            </p>
                            
                            <div className="space-y-4">
                                <p className="font-mono text-[10px] uppercase tracking-widest text-slate-400">Architecture Progress</p>
                                <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                                    <motion.div 
                                        style={{ scaleX: philProgress, transformOrigin: 'left' }}
                                        className="h-full w-full bg-gold shadow-[0_0_10px_#C5A55A]"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-40 py-20">
                            {philosophy.map((p, i) => (
                                <PhilosophyItem key={i} item={p} index={i} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── CREDENTIALS ────────────────────────────── */}
            <section className="py-40 bg-slate-50">
                <div className="container-content">
                    <FadeUp className="text-center mb-20">
                        <p className="text-gold font-mono text-xs uppercase tracking-[0.4em] mb-4">Credentials</p>
                        <h2 className="text-5xl md:text-7xl font-jakarta font-black tracking-tighter leading-none">Certifications & Learning</h2>
                    </FadeUp>

                    <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-16">
                        {certifications.map((cert, i) => (
                            <FadeUp key={i} delay={i * 0.1}>
                                <div className={`bg-white rounded-[2rem] p-8 border ${cert.highlight ? 'border-gold/30 shadow-xl' : 'border-slate-100 shadow-lg'} relative overflow-hidden group`}>
                                    {cert.highlight && <div className="absolute top-0 right-0 w-24 h-24 bg-gold/10 blur-2xl rounded-full" />}
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${cert.highlight ? 'bg-gold/10 text-gold' : 'bg-slate-100 text-slate-400'}`}>
                                            <Award size={24} />
                                        </div>
                                        <span className="font-mono text-xs font-bold text-slate-400 uppercase tracking-widest">{cert.code}</span>
                                    </div>
                                    <h3 className="font-jakarta font-black text-navy text-xl mb-2 group-hover:text-gold transition-colors">{cert.name}</h3>
                                    <p className="text-charcoal/60 font-dm text-sm">{cert.issuer}</p>
                                </div>
                            </FadeUp>
                        ))}
                    </div>

                    <FadeUp className="text-center">
                        <button onClick={() => setShowCourses(!showCourses)} className="inline-flex items-center gap-2 font-jakarta font-bold text-navy hover:text-gold transition-colors text-lg">
                            <BookOpen size={20} />
                            {showCourses ? 'Hide' : 'Show'} DataCamp Courses ({datacampCourses.length})
                            <ChevronDown size={18} className={`transition-transform ${showCourses ? 'rotate-180' : ''}`} />
                        </button>

                        {showCourses && (
                            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="mt-8 flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                                {datacampCourses.map((course, i) => (
                                    <span key={i} className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-dm text-charcoal/80 shadow-sm">{course}</span>
                                ))}
                            </motion.div>
                        )}
                    </FadeUp>
                </div>
            </section>

            {/* ─── ARCHITECTURE ENGINE ──────────────────────── */}
            <section className="py-40 bg-navy relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(196,160,82,0.1),transparent_70%)]" />
                <div className="container-content relative z-10">
                    <FadeUp className="text-center mb-32">
                        <p className="text-gold font-mono text-xs uppercase tracking-[0.3em] mb-4">Engineering Moat</p>
                        <h2 className="text-5xl md:text-8xl font-jakarta font-black text-white tracking-tighter leading-none">Full-Stack Engine</h2>
                    </FadeUp>

                    <div className="bg-white/[0.02] rounded-[3rem] p-12 md:p-20 border border-white/5 backdrop-blur-2xl shadow-3xl overflow-x-auto no-scrollbar">
                        <div className="flex items-center justify-between gap-12 min-w-[1200px] mx-auto">
                            {[
                                { label: 'Sources', sub: 'ERP / CRM\nAPIs / CSV', icon: Database, color: 'text-blue-400' },
                                { label: 'Ingest', sub: 'Airbyte\nFivetran', icon: RefreshCw, color: 'text-teal', spin: true },
                                { label: 'Lakehouse', sub: 'ClickHouse\nBigQuery', icon: Server, color: 'text-gold', bounce: true },
                                { label: 'Model', sub: 'dbt\nSQL', icon: Settings, color: 'text-teal', spinRev: true },
                                { label: 'Insight', sub: 'Power BI\nGrafana', icon: LineChart, color: 'text-red-400', pulse: true },
                            ].map((node, i, arr) => (
                                <div key={i} className="flex items-center gap-12">
                                    <div className="relative text-center w-40 group">
                                        <div className="mb-8 flex justify-center">
                                            <div className="w-24 h-24 rounded-[2rem] bg-navy border border-white/10 flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.5)] group-hover:border-gold/30 transition-all duration-500">
                                                <motion.div 
                                                    animate={
                                                        node.spin ? { rotate: 360 } : 
                                                        node.spinRev ? { rotate: -360 } : 
                                                        node.bounce ? { y: [0, -8, 0] } :
                                                        node.pulse ? { scale: [1, 1.15, 1] } : {}
                                                    }
                                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                                    className={node.color}
                                                >
                                                    <node.icon size={48} strokeWidth={1} />
                                                </motion.div>
                                            </div>
                                        </div>
                                        <p className="font-jakarta font-black text-xl text-white mb-2 leading-none">{node.label}</p>
                                        <p className="font-mono text-[10px] uppercase text-slate-500 tracking-widest leading-relaxed whitespace-pre-line">{node.sub}</p>
                                    </div>
                                    {i < arr.length - 1 && (
                                        <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent min-w-[50px]" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── FINAL CALL ───────────────────────────────── */}
            <section className="py-40 bg-white">
                <div className="container-content text-center">
                    <FadeUp>
                        <h2 className="text-6xl md:text-9xl font-jakarta font-black text-navy mb-12 tracking-tighter leading-[0.85]">
                            See the <br /><span className="text-gold">Impact.</span>
                        </h2>
                        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mt-20">
                            <a href="/cv-hamed-elbhrawy.pdf" className="btn-primary px-12 py-6 text-lg group bg-gold hover:bg-navy hover:text-white border-none shadow-2xl" download>
                                <Download size={22} className="group-hover:bounce mr-2 inline" /> Download Full CV
                            </a>
                            <Link to="/#portfolio" className="text-navy hover:text-gold font-jakarta font-black text-xl flex items-center gap-3 transition-all group">
                                Browse Case Studies <ExternalLink size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </Link>
                        </div>
                    </FadeUp>
                </div>
            </section>
        </main>
    )
}
