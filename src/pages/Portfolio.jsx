import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion'
import { ArrowRight, Download, ExternalLink, Database, Cpu, PieChart, ShieldCheck, Target, Zap, ChevronRight, LayoutGrid, Layers, LineChart } from 'lucide-react'
import PageHero from '../components/PageHero'
import FadeUp from '../components/FadeUp'

const projects = [
    {
        id: 1,
        icon: Cpu,
        title: 'Enterprise BI Transformation',
        company: 'Deraah Retail Group',
        category: 'Platform Architecture',
        impact: '6 tables → 32-model Medallion Lakehouse. 259x faster dashboards. $80K annual savings.',
        description: 'Architected a modern data stack from the ground up, moving away from legacy disparate systems to a unified ClickHouse-based Lakehouse. Implemented dbt for transformations and Airflow for orchestration.',
        metrics: [{ label: '259x', sub: 'Faster' }, { label: '$80K', sub: 'Saved' }, { label: '32', sub: 'dbt Models' }],
        tools: ['ClickHouse', 'dbt', 'Airflow', 'Airbyte'],
        year: '2024',
        featured: true,
        color: 'from-blue-600 to-blue-400',
    },
    {
        id: 2,
        icon: Database,
        title: 'Customer 360 Engine',
        company: 'Deraah Retail Group',
        category: 'Customer Analytics',
        impact: '2.7M records unified across D365, Salesforce, and OTO. RFM scoring + churn prediction.',
        description: 'Unified customer identity across retail channels into a single source of truth. Built automated RFM (Recency, Frequency, Monetary) segmentation to drive personalized marketing campaigns.',
        metrics: [{ label: '2.7M', sub: 'Records' }, { label: '3', sub: 'Systems' }, { label: 'RFM', sub: 'Scoring' }],
        tools: ['SQL Server', 'Python', 'Power BI', 'dbt'],
        year: '2024',
        featured: true,
        color: 'from-gold to-yellow-500',
    },
    {
        id: 3,
        icon: Zap,
        title: 'Real-Time Ramadan Analytics',
        company: 'Deraah Retail Group',
        category: 'Data Engineering',
        impact: '1,200+ stores monitored in real-time during Saudi Arabia\'s peak retail season.',
        description: 'Developed a high-concurrency real-time monitoring suite for the most critical retail period. Handled massive transaction bursts with sub-second query performance using a ClickHouse backend.',
        metrics: [{ label: '1,200+', sub: 'Stores' }, { label: '30min', sub: 'Refresh' }, { label: '24/7', sub: 'Live' }],
        tools: ['ClickHouse', 'Power BI', 'SQL', 'Airflow'],
        year: '2024',
        featured: true,
        color: 'from-teal to-emerald-400',
    },
    {
        id: 4,
        icon: ShieldCheck,
        title: 'Governance Framework',
        company: 'Deraah Retail Group',
        category: 'Governance',
        impact: '10-pillar SDAIA/PDPL framework. RBAC implementation, OpenMetadata catalog.',
        description: 'Established the structural data policy following Saudi Arabian national guidelines. Implemented role-based access control and data lineage tracking for 100+ business users.',
        metrics: [{ label: '10', sub: 'Pillars' }, { label: 'SDAIA', sub: 'Aligned' }, { label: 'RBAC', sub: 'Enforced' }],
        tools: ['OpenMetadata', 'Prometheus', 'Grafana'],
        year: '2024',
        featured: false,
    },
    {
        id: 5,
        icon: Target,
        title: 'Regional Reporting System',
        company: 'Huawei Technologies',
        category: 'Reporting',
        impact: '15+ automated daily reports for the Delta region in 30 days.',
        description: 'Automated executive reporting for regional sales performance. Reduced manual data prep time by 90% using advanced SQL and Power BI automation.',
        metrics: [{ label: '15+', sub: 'Reports' }, { label: '30 days', sub: 'Built in' }, { label: 'Daily', sub: 'Auto-run' }],
        tools: ['SQL', 'Excel', 'Power BI'],
        year: '2022',
        featured: false,
    },
    {
        id: 6,
        icon: Layers,
        title: 'Operations BI & Master Data',
        company: 'EAI Company',
        category: 'Data Engineering',
        impact: '10 major BI systems built: supply chain, ERP master data MDM.',
        description: 'Designed internal business intelligence tools to track operational efficiency across logistics and supply chain departments.',
        metrics: [{ label: '10', sub: 'BI Systems' }, { label: '12mo', sub: 'Delivered' }, { label: 'ERP', sub: 'MDM' }],
        tools: ['Power BI', 'SQL', 'ERP Systems'],
        year: '2023',
        featured: false,
    },
]

function ProjectCard({ project, isHorizontal = false }) {
    return (
        <div className={`group relative bg-white rounded-[2rem] p-8 md:p-10 border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col ${isHorizontal ? 'w-[450px] md:w-[600px] flex-shrink-0' : 'h-full'}`}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="flex items-start justify-between mb-8">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.color || 'from-slate-600 to-slate-400'} flex items-center justify-center text-white shadow-lg`}>
                    <project.icon size={32} strokeWidth={1.5} />
                </div>
                <div className="flex items-center gap-3">
                    {project.featured && <span className="tag-gold text-[10px]">Flagship Project</span>}
                    <span className="text-slate-400 text-xs font-mono font-bold">{project.year}</span>
                </div>
            </div>

            <span className="tag-teal mb-4 w-fit">{project.category}</span>
            <h3 className="font-jakarta font-black text-navy text-xl md:text-2xl mb-2 group-hover:text-gold transition-colors">{project.title}</h3>
            <p className="text-slate-400 font-mono text-sm mb-6 uppercase tracking-wider font-bold">{project.company}</p>
            
            <p className="text-charcoal/80 font-dm text-base leading-relaxed mb-10 flex-1">
                {project.impact}
            </p>

            {/* Global Metrics Bar */}
            <div className="grid grid-cols-3 gap-4 mb-10 bg-slate-50 rounded-2xl p-4 border border-slate-100">
                {project.metrics.map((m, j) => (
                    <div key={j} className="text-center group/metric">
                        <p className="font-jakarta font-black text-gold text-lg md:text-xl group-hover/metric:scale-110 transition-transform">{m.label}</p>
                        <p className="text-slate-400 text-[10px] uppercase font-bold tracking-widest">{m.sub}</p>
                    </div>
                ))}
            </div>

            <div className="flex items-center justify-between mt-auto">
                <div className="flex flex-wrap gap-2">
                    {project.tools.slice(0, 3).map((t) => (
                        <span key={t} className="text-[10px] font-mono font-bold px-3 py-1 bg-navy/5 text-charcoal/60 rounded-full border border-navy/5">{t}</span>
                    ))}
                </div>
                <Link to="/case-studies" className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-navy hover:bg-navy hover:text-white hover:border-navy transition-all group/btn">
                    <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
            </div>
        </div>
    )
}

export default function Portfolio() {
    const horizontalRef = useRef(null)
    const { scrollYProgress: horizontalProgress } = useScroll({
        target: horizontalRef,
        offset: ["start start", "end end"]
    })
    
    const xTransform = useTransform(horizontalProgress, [0, 1], ["0%", "-66.6%"])
    const x = useSpring(xTransform, { stiffness: 60, damping: 20 })

    const featured = projects.filter(p => p.featured)
    const extra = projects.filter(p => !p.featured)

    return (
        <main className="bg-white overflow-x-hidden">
            <PageHero
                title="Engineering Impact"
                subtitle="A portfolio of production architectures, real-time engines, and strategic roadmaps."
            />

            {/* ─── FEATURED SPOTLIGHT: VERTICAL SCRUB ────────── */}
            <section className="py-20 md:py-40 bg-navy relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(196,160,82,0.1),transparent_70%)]" />
                <div className="container-content relative z-10">
                    <FadeUp className="text-center mb-32">
                        <h2 className="text-5xl md:text-8xl font-jakarta font-black text-white tracking-tighter leading-none mb-4">The Flagships</h2>
                        <div className="w-24 h-1 bg-gold mx-auto opacity-50" />
                    </FadeUp>

                    <div className="space-y-32">
                        {featured.map((project, i) => (
                            <div key={project.id} className="grid lg:grid-cols-2 gap-20 items-center">
                                <FadeUp delay={i * 0.1}>
                                    <ProjectCard project={project} />
                                </FadeUp>
                                <div className="space-y-8">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-px bg-gold/50" />
                                        <span className="font-mono text-xs text-gold uppercase tracking-[0.4em] font-bold">Deep Dive</span>
                                    </div>
                                    <h3 className="text-4xl md:text-6xl font-jakarta font-black text-white tracking-tight leading-[1.1]">
                                        Architecture of <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-white">{project.title}</span>
                                    </h3>
                                    <p className="text-slate-400 font-dm text-lg leading-relaxed">
                                        {project.description}
                                    </p>
                                    <div className="pt-8">
                                        <Link to="/case-studies" className="flex items-center gap-4 text-white font-jakarta font-bold text-xl group w-fit">
                                            Read Full Technical Case Study 
                                            <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-gold group-hover:border-gold group-hover:text-navy transition-all">
                                                <ExternalLink size={24} />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── HORIZONTAL ARCHIVE ───────────────────────── */}
            <section ref={horizontalRef} className="h-[250vh] relative bg-navy pt-24">
                <div className="sticky top-16 md:top-20 h-screen flex flex-col overflow-hidden pt-24 pb-16">
                    <div className="container-content mb-12 flex justify-between items-end">
                        <div className="max-w-xl">
                            <span className="font-mono text-[10px] text-gold uppercase tracking-[0.4em] mb-4 block font-bold">Chronology</span>
                            <h2 className="text-5xl md:text-7xl font-jakarta font-black text-white tracking-tighter leading-[0.9]">The Archive</h2>
                        </div>
                        <div className="hidden md:flex gap-4 items-center font-mono text-xs text-slate-400 font-bold tracking-widest uppercase">
                            Scroll Down to Explore <ArrowRight className="animate-bounce-x" size={16} />
                        </div>
                    </div>

                    <div className="flex items-center px-[5vw]">
                        <motion.div style={{ x }} className="flex gap-8">
                            {extra.concat(extra).map((p, i) => (
                                <ProjectCard key={i} project={p} isHorizontal />
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ─── TECHNICAL LAB: THE STACK ─────────────────── */}
            <section className="py-40 bg-white">
                <div className="container-content">
                    <div className="bg-navy rounded-[4rem] p-12 md:p-32 text-center relative overflow-hidden group shadow-3xl">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(196,160,82,0.15),transparent_60%)] group-hover:scale-125 transition-transform duration-1000" />
                        
                        <FadeUp>
                            <div className="mb-12 inline-flex gap-4">
                                <LayoutGrid size={48} className="text-gold opacity-20" />
                                <Layers size={48} className="text-teal opacity-20" />
                                <LineChart size={48} className="text-blue-400 opacity-20" />
                            </div>
                            <h2 className="text-5xl md:text-9xl font-jakarta font-black text-white mb-12 tracking-tighter leading-[0.85]">
                                Strategy Meets <br /><span className="text-gold">Engineering.</span>
                            </h2>
                            <p className="text-slate-400 font-dm text-xl md:text-2xl max-w-2xl mx-auto mb-20 leading-relaxed">
                                I don't just build dashboards. I build resilient pipelines and high-concurrency architectures that solve real business problems.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                                <Link to="/#contact" className="btn-primary px-12 py-6 text-xl bg-gold text-navy hover:bg-white hover:text-navy border-none shadow-2xl">
                                    Start a Project <ArrowRight size={24} className="ml-2 inline" />
                                </Link>
                                <a href="/cv-hamed-elbhrawy.pdf" className="text-white hover:text-gold font-mono font-bold text-sm tracking-widest flex items-center gap-3 transition-colors" download>
                                    DOWNLOAD CV <Download size={18} />
                                </a>
                            </div>
                        </FadeUp>
                    </div>
                </div>
            </section>
        </main>
    )
}
