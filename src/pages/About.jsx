import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Download, ExternalLink, Award, BookOpen, ChevronDown, Database, RefreshCw, Server, Settings, Network, Activity, LineChart } from 'lucide-react'
import { useState } from 'react'
import PageHero from '../components/PageHero'
import FadeUp from '../components/FadeUp'

const timeline = [
    {
        period: '2019 – 2022',
        company: 'Samsung Electronics',
        role: 'Promoter → Team Leader → Data Analyst',
        achievement: 'Built foundation in sales operations. Taught myself SQL at night to make sense of the data.',
        color: 'bg-blue-electric',
    },
    {
        period: '2022',
        company: 'Huawei Technologies',
        role: 'Regional Data Analyst',
        achievement: '15+ automated reports built in 30 days for the Delta region.',
        color: 'bg-teal',
    },
    {
        period: '2022 – 2023',
        company: 'EAI Company',
        role: 'Operations Analyst & BI Developer',
        achievement: '10 major BI systems in 12 months: supply chain, ERP master data, and more.',
        color: 'bg-gold',
    },
    {
        period: '2023 – Present',
        company: 'Deraah Retail Group',
        role: 'Head of Analytics & BI Architect',
        achievement: '6 tables → 32-model production Medallion Lakehouse. Leading a 6-person analytics team.',
        color: 'bg-teal',
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

export default function About() {
    const [showCourses, setShowCourses] = useState(false)

    return (
        <main>
            <PageHero
                title="The Story Behind the Data"
                subtitle="From Samsung phone promoter to enterprise data platform architect — a career built on curiosity, not credentials."
            />

            {/* ─── ORIGIN STORY ─────────────────────────────── */}
            <section className="section-light">
                <div className="container-content">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                        <FadeUp>
                            <h2 className="section-heading mb-6">The Unexpected Path</h2>
                            <div className="space-y-5 font-dm text-charcoal/80 text-lg leading-relaxed">
                                <p>
                                    I studied accounting at Zagazig University and graduated into a job as a Samsung phone promoter.
                                    Not exactly a typical data career origin story. But every evening after my shift, I'd go home and
                                    teach myself SQL — not because anyone told me to, but because I was obsessed with understanding
                                    <em> why</em> the sales numbers looked the way they did.
                                </p>
                                <p>
                                    My first dashboard was terrible. Wrong aggregations, no clear hierarchy, colors that made everyone's
                                    eyes hurt. But I shipped it, got feedback, and rebuilt it. That iterative obsession took me from
                                    promoter to analyst, then through Huawei and EAI — building reporting systems, automating pipelines,
                                    and eventually owning entire BI functions.
                                </p>
                                <p>
                                    Today at Deraah Retail Group, I lead a 6-person analytics team and have architected the company's
                                    entire modern data platform from scratch — a Medallion Lakehouse serving 1,200+ stores across Saudi Arabia
                                    in real time. The accounting background turned out to be a superpower: I understand the business
                                    logic behind every metric, not just the technical pipeline.
                                </p>
                            </div>
                        </FadeUp>

                        <FadeUp delay={0.2}>
                            {/* Headshot + floating cards */}
                            <div className="relative">
                                <div className="w-full aspect-square rounded-2xl overflow-hidden bg-navy-light flex items-center justify-center">
                                    <img
                                        src="/headshot.jpg"
                                        alt="Hamed Elbhrawy"
                                        className="w-full h-full object-cover object-center"
                                        onError={(e) => {
                                            e.target.style.display = 'none'
                                            e.target.parentElement.innerHTML = '<div class="text-center"><div class="font-jakarta font-bold text-8xl text-gold">H</div><p class="font-mono text-slate-muted text-sm mt-2">Hamed Elbhrawy</p></div>'
                                        }}
                                    />
                                </div>
                                {/* Floating stat */}
                                <div className="absolute -bottom-4 -left-4 bg-white border border-slate-200 rounded-xl shadow-xl p-4">
                                    <p className="font-mono font-bold text-gold text-2xl">259x</p>
                                    <p className="text-charcoal text-xs font-dm">Faster Dashboards</p>
                                </div>
                                <div className="absolute -top-4 -right-4 bg-navy rounded-xl border border-gold/30 shadow-xl p-4">
                                    <p className="font-mono font-bold text-teal text-2xl">6+</p>
                                    <p className="text-slate-muted text-xs font-dm">Years Building</p>
                                </div>
                            </div>
                        </FadeUp>
                    </div>
                </div>
            </section>

            {/* ─── CAREER TIMELINE ──────────────────────────── */}
            <section className="section-slate">
                <div className="container-content">
                    <FadeUp className="text-center mb-14">
                        <p className="text-slate-muted font-mono text-xs uppercase tracking-widest mb-2">Career Path</p>
                        <h2 className="section-heading">The Journey</h2>
                    </FadeUp>

                    <div className="relative max-w-2xl mx-auto">
                        {/* Vertical line */}
                        <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-gold via-teal to-blue-electric/50" />

                        <div className="space-y-10 pl-14">
                            {timeline.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: '-50px' }}
                                    transition={{ delay: i * 0.15, duration: 0.6 }}
                                    className="relative"
                                >
                                    {/* Dot */}
                                    <div className={`absolute -left-9 top-1.5 w-4 h-4 rounded-full border-2 border-white shadow-md ${item.color} ${item.current ? 'ring-2 ring-offset-2 ring-teal/50' : ''}`} />

                                    <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-200">
                                        <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                                            <div>
                                                <span className="font-mono text-xs text-slate-muted">{item.period}</span>
                                                {item.current && (
                                                    <span className="ml-2 tag-teal text-xs">Current</span>
                                                )}
                                            </div>
                                        </div>
                                        <h3 className="font-jakarta font-bold text-navy text-lg mb-0.5">{item.company}</h3>
                                        <p className="text-charcoal/70 font-mono text-sm mb-3">{item.role}</p>
                                        <p className="text-charcoal/80 font-dm text-sm leading-relaxed">
                                            ✦ {item.achievement}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── PHILOSOPHY ───────────────────────────────── */}
            <section className="section-light">
                <div className="container-content">
                    <FadeUp className="text-center mb-12">
                        <p className="text-slate-muted font-mono text-xs uppercase tracking-widest mb-2">Approach</p>
                        <h2 className="section-heading">How I Think About Data</h2>
                    </FadeUp>

                    <div className="grid md:grid-cols-3 gap-6">
                        {philosophy.map((p, i) => (
                            <FadeUp key={i} delay={i * 0.1}>
                                <div className="card h-full">
                                    <div className="font-mono font-bold text-4xl text-gold/20 mb-4">{p.number}</div>
                                    <h3 className="font-jakarta font-bold text-navy text-lg mb-3">{p.title}</h3>
                                    <p className="text-charcoal/80 font-dm text-sm leading-relaxed">{p.body}</p>
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── ARCHITECTURE DIAGRAM ─────────────────────── */}
            <section className="section-slate">
                <div className="container-content">
                    <FadeUp className="text-center mb-10">
                        <p className="text-slate-muted font-mono text-xs uppercase tracking-widest mb-2">Architecture</p>
                        <h2 className="section-heading">The Platform I Build</h2>
                    </FadeUp>

                    <FadeUp delay={0.2}>
                        <div className="bg-navy rounded-2xl p-8 md:p-12 border border-white/10 overflow-x-auto">
                            <div className="flex items-center justify-between gap-2 md:gap-4 min-w-max mx-auto">
                                {[
                                    { label: 'Data Sources', sub: 'ERP / Salesforce\nD365 / APIs', icon: Database, color: 'border-blue-electric/40 text-blue-electric', animation: { y: [0, -4, 0] }, transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' } },
                                    { label: 'Ingestion', sub: 'Airbyte\nELT Pipelines', icon: RefreshCw, color: 'border-teal/40 text-teal', animation: { rotate: 360 }, transition: { duration: 4, repeat: Infinity, ease: 'linear' } },
                                    { label: 'Storage', sub: 'ClickHouse\nOLAP Engine', icon: Server, color: 'border-gold/40 text-gold', animation: { scale: [1, 1.05, 1] }, transition: { duration: 2.5, repeat: Infinity, ease: 'easeInOut' } },
                                    { label: 'Transform', sub: 'dbt\nMedallion', icon: Settings, color: 'border-teal/40 text-teal', animation: { rotate: -360 }, transition: { duration: 5, repeat: Infinity, ease: 'linear' } },
                                    { label: 'Orchestrate', sub: 'Apache Airflow', icon: Network, color: 'border-blue-electric/40 text-blue-electric', animation: { opacity: [0.7, 1, 0.7] }, transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' } },
                                    { label: 'Monitor', sub: 'Prometheus\nGrafana', icon: Activity, color: 'border-gold/40 text-gold', animation: { rotate: [0, -10, 10, -10, 10, 0] }, transition: { duration: 1.5, repeat: Infinity, ease: 'easeInOut', repeatDelay: 2 } },
                                    { label: 'Visualize', sub: 'Power BI\n353 Measures', icon: LineChart, color: 'border-teal/40 text-teal', animation: { scale: [1, 1.1, 1] }, transition: { duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 } },
                                ].map((node, i, arr) => (
                                    <div key={i} className="flex items-center gap-2 md:gap-4 group">
                                        <div className={`bg-navy border ${node.color} rounded-xl p-3 md:p-4 text-center w-24 md:w-28 relative overflow-hidden transition-colors hover:bg-navy-light`}>
                                            <div className="absolute inset-0 bg-gradient-to-t from-current to-transparent opacity-5" />
                                            <div className="text-xl mb-3 flex justify-center">
                                                <motion.div animate={node.animation} transition={node.transition}>
                                                    <node.icon size={28} strokeWidth={1.5} />
                                                </motion.div>
                                            </div>
                                            <p className={`font-jakarta font-bold text-xs ${node.color.split(' ')[1]} relative z-10`}>{node.label}</p>
                                            <p className="text-slate-muted text-xs font-mono mt-1 whitespace-pre-line leading-tight relative z-10">{node.sub}</p>
                                        </div>
                                        {i < arr.length - 1 && (
                                            <div className="text-gold/40 font-mono text-lg flex-shrink-0">→</div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </FadeUp>
                </div>
            </section>

            {/* ─── CERTIFICATIONS ───────────────────────────── */}
            <section className="section-light">
                <div className="container-content">
                    <FadeUp className="text-center mb-10">
                        <p className="text-slate-muted font-mono text-xs uppercase tracking-widest mb-2">Credentials</p>
                        <h2 className="section-heading">Certifications</h2>
                    </FadeUp>

                    <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-8">
                        {certifications.map((cert, i) => (
                            <FadeUp key={i} delay={i * 0.1}>
                                <div className={`card flex items-center gap-4 ${cert.highlight ? 'border-gold/30 bg-gold/5' : ''}`}>
                                    <div className="w-14 h-14 rounded-xl bg-navy flex items-center justify-center flex-shrink-0">
                                        {cert.highlight ? <Award className="text-gold" size={24} /> : <BookOpen className="text-teal" size={24} />}
                                    </div>
                                    <div>
                                        <h3 className="font-jakarta font-bold text-navy mb-0.5">{cert.name}</h3>
                                        <p className="text-slate-muted text-xs font-mono">{cert.issuer}</p>
                                        {cert.highlight && <span className="tag-gold mt-1.5 inline-flex">{cert.code}</span>}
                                    </div>
                                </div>
                            </FadeUp>
                        ))}
                    </div>

                    {/* DataCamp accordion */}
                    <FadeUp className="max-w-2xl mx-auto">
                        <button
                            onClick={() => setShowCourses(!showCourses)}
                            className="w-full card flex items-center justify-between text-left hover:border-gold/30"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                                    <span className="text-green-500 font-bold text-sm">DC</span>
                                </div>
                                <div>
                                    <p className="font-jakarta font-semibold text-navy text-sm">DataCamp Certifications</p>
                                    <p className="text-slate-muted text-xs font-mono">20+ courses completed</p>
                                </div>
                            </div>
                            <ChevronDown className={`text-slate-muted transition-transform ${showCourses ? 'rotate-180' : ''}`} size={18} />
                        </button>

                        {showCourses && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                className="mt-2 card border-t-0 rounded-t-none grid grid-cols-2 gap-x-4 gap-y-2"
                            >
                                {datacampCourses.map((course, i) => (
                                    <div key={i} className="flex items-center gap-2">
                                        <div className="w-1 h-1 rounded-full bg-teal flex-shrink-0" />
                                        <span className="text-charcoal/80 text-xs font-dm">{course}</span>
                                    </div>
                                ))}
                            </motion.div>
                        )}
                    </FadeUp>
                </div>
            </section>

            {/* ─── CTA ──────────────────────────────────────── */}
            <section className="section-dark">
                <div className="container-content text-center">
                    <FadeUp>
                        <h2 className="section-heading-white mb-6">Ready to See the Work?</h2>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="/cv-hamed-elbhrawy.pdf" className="btn-primary px-8 py-3.5" download>
                                <Download size={16} /> Download Full CV
                            </a>
                            <Link to="/portfolio" className="btn-secondary px-8 py-3.5">
                                See My Work <ExternalLink size={16} />
                            </Link>
                        </div>
                    </FadeUp>
                </div>
            </section>
        </main>
    )
}
