import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { ArrowRight, CheckCircle, Database, Users, ShieldCheck, GraduationCap, ChevronRight, BarChart3, TrendingUp, Trophy, Settings, Zap, ArrowDown } from 'lucide-react'
import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import MagneticButton from '../components/MagneticButton'
import FadeUp from '../components/FadeUp'

const services = [
    {
        icon: Database,
        iconLabel: '🏗️',
        number: '01',
        category: 'Architecture',
        title: 'Data Platform Architecture',
        subtitle: 'Production Medallion Lakeshouses',
        description: 'End-to-end BI platform design using Medallion Architecture. From audit and discovery through production lakehouse delivery.',
        impact: {
            value: '259x',
            label: 'Faster Queries',
            icon: TrendingUp
        },
        proof: 'Proven at Deraah: 6 tables → 32-model production system. $80K saved annually.',
        color: 'from-blue-600 to-blue-400',
        tools: ['ClickHouse', 'dbt', 'Airflow', 'Airbyte', 'SQL Server'],
        deliverables: [
            'Current-state data audit',
            'Medallion Lakehouse design',
            'ELT pipeline build (Airbyte)',
            'dbt transformation layer',
            'Apache Airflow 3.0 Setup',
            'Grafana Monitoring'
        ],
    },
    {
        icon: Users,
        iconLabel: '📊',
        number: '02',
        category: 'Strategy',
        title: 'Leadership & Strategy',
        subtitle: 'Building Data-Driven Cultures',
        description: 'Building high-performing analytics teams and 5-year maturity roadmaps. From hiring to stakeholder alignment.',
        impact: {
            value: '6',
            label: 'Analysts Led',
            icon: Users
        },
        proof: 'Built 6-person team from scratch. 5-Year Roadmap currently in Year 3 execution.',
        color: 'from-amber-500 to-orange-400',
        tools: ['Strategic Planning', 'Team Building', 'Change Mgmt', 'Roadmapping'],
        deliverables: [
            'Maturity assessment',
            '5-year capability roadmap',
            'Team structure & hiring',
            'Stakeholder workshops',
            'ROI framework',
            'Governance charter'
        ],
    },
    {
        icon: ShieldCheck,
        iconLabel: '🛡️',
        number: '03',
        category: 'Governance',
        title: 'Governance & Compliance',
        subtitle: 'Aligned with SDAIA & PDPL',
        description: 'Enterprise data governance aligned with Saudi regulations. Frameworks, RBAC, and automated monitoring.',
        impact: {
            value: '10',
            label: 'Pillar Framework',
            icon: Trophy
        },
        proof: '10-pillar governance framework aligned with SDAIA and PDPL compliance at Deraah.',
        color: 'from-teal-600 to-emerald-400',
        tools: ['SDAIA/PDPL', 'OpenMetadata', 'Prometheus', 'RBAC'],
        deliverables: [
            'Classification framework',
            'RBAC implementation',
            'OpenMetadata catalog',
            'PDPL compliance checklist',
            'Quality monitoring',
            'Policy documentation'
        ],
    },
    {
        icon: GraduationCap,
        iconLabel: '🎓',
        number: '04',
        category: 'Training',
        title: 'Analytics Enablement',
        subtitle: 'Closing the Skill Gap',
        description: 'Knowledge transfer for technical and non-technical teams. SQL workshops and Power BI enablement.',
        impact: {
            value: '100+',
            label: 'Users Enabled',
            icon: BarChart3
        },
        proof: 'Taught SQL to marketing team. Enabled self-service analytics across departments.',
        color: 'from-indigo-600 to-blue-800',
        tools: ['Curriculum Design', 'DAX Patterns', 'Power Query', 'SQL Masterclass'],
        deliverables: [
            'SQL for business users',
            'Power BI Dev training',
            'DAX masterclass',
            'Self-service framework',
            'Custom curriculum',
            'Ongoing coaching'
        ],
    },
]

// Scene 1 — Manifesto text reveals on scroll
const ManifestoText = ({ text, progress, highlightWords = [] }) => {
    const words = text.split(' ')
    return (
        <span className="inline-flex flex-wrap justify-center gap-x-[0.3em] gap-y-2">
            {words.map((word, i) => {
                const start = i / words.length
                const end = start + 1 / words.length
                const opacity = useTransform(progress, [start, end], [0.1, 1])
                const clean = word.replace(/[.,!?]/g, '')
                const isHL = highlightWords.includes(clean)
                const color = useTransform(progress, [start, end], [isHL ? '#94a3b8' : '#cbd5e1', isHL ? '#C5A55A' : '#ffffff'])
                const scale = useTransform(progress, [start, end], [0.95, 1])
                return (
                    <motion.span key={i} style={{ opacity, color, scale }} className="transition-none leading-tight py-1 px-1">
                        {word}
                    </motion.span>
                )
            })}
        </span>
    )
}

function ServicePanel({ svc, index, scrollYProgress }) {
    const panelRef = useRef(null)
    const { scrollYProgress: panelProgress } = useScroll({
        target: panelRef,
        offset: ["start end", "end start"]
    })

    // Sub-panel parallax
    const titleY = useTransform(panelProgress, [0, 1], [100, -100])
    const imageScale = useTransform(panelProgress, [0.1, 0.5], [0.8, 1.2])
    const toolsX = useTransform(panelProgress, [0.3, 0.7], [50, 0])
    const opacity = useTransform(panelProgress, [0.1, 0.3, 0.7, 0.9], [0, 1, 1, 0])

    return (
        <div ref={panelRef} className="min-w-[100vw] h-full flex items-center justify-center p-4 md:p-12 relative overflow-hidden">
            {/* Background Parallax Shape */}
            <motion.div 
                style={{ scale: imageScale, rotate: index * 45 }}
                className={`absolute inset-0 opacity-[0.03] z-0 flex items-center justify-center`}
            >
                <svc.icon size={800} strokeWidth={0.5} />
            </motion.div>

            <motion.div style={{ opacity }} className="container-content grid lg:grid-cols-2 gap-12 items-center relative z-10">
                <div className="space-y-8">
                    <motion.div style={{ y: titleY }} className="space-y-6">
                        <div className="flex items-center gap-4">
                            <span className="font-mono text-gold font-bold tracking-[0.2em]">{svc.number}</span>
                            <div className="h-px w-12 bg-gold/30" />
                            <span className="font-mono text-slate-400 text-xs uppercase tracking-widest">{svc.category}</span>
                        </div>
                        
                        <div>
                            <h3 className="font-jakarta text-4xl md:text-6xl font-black text-white mb-3 tracking-tighter leading-[0.9]">
                                {svc.title}
                            </h3>
                            <p className="text-xl font-dm text-slate-400 italic mb-6">{svc.subtitle}</p>
                            <div className="w-20 h-1 bg-gradient-to-r from-gold to-transparent rounded-full" />
                        </div>

                        <p className="text-lg font-dm text-slate-300 leading-relaxed max-w-xl">
                            {svc.description}
                        </p>
                    </motion.div>

                    <motion.div style={{ x: toolsX }} className="flex flex-wrap gap-2 pt-4">
                        {svc.tools.map(tool => (
                            <span key={tool} className="px-3 py-1.5 bg-white/5 text-slate-300 rounded-lg font-mono text-xs border border-white/10 backdrop-blur-sm">
                                {tool}
                            </span>
                        ))}
                    </motion.div>

                    <div className="flex items-center gap-6 pt-6 bg-navy-light/40 p-6 rounded-2xl border border-white/5 backdrop-blur-md">
                        <div className={`p-4 rounded-xl bg-gradient-to-br ${svc.color} text-white shadow-xl flex-shrink-0`}>
                            <svc.impact.icon size={32} />
                        </div>
                        <div>
                            <p className="font-jakarta font-black text-4xl text-white leading-none mb-1">{svc.impact.value}</p>
                            <p className="font-mono text-[10px] uppercase text-slate-400 tracking-[0.2em]">{svc.impact.label}</p>
                        </div>
                    </div>
                </div>

                <div className="relative group perspective-1000">
                    <motion.div 
                        style={{ scale: imageScale }}
                        className="bg-navy-light/80 rounded-3xl p-8 md:p-12 shadow-2xl border border-white/10 relative overflow-hidden group backdrop-blur-xl"
                    >
                        <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${svc.color} opacity-10 -translate-y-1/2 translate-x-1/2 rounded-full blur-[80px] pointer-events-none`} />
                        <h4 className="font-jakarta font-bold text-white text-xl mb-10 flex items-center gap-4">
                            <CheckCircle className="text-teal" size={24} /> 
                            <span className="tracking-tight">Core Deliverables</span>
                        </h4>
                        
                        <ul className="grid sm:grid-cols-2 gap-y-6 gap-x-10">
                            {svc.deliverables.map((d, i) => (
                                <li key={i} className="flex items-start gap-3 group/item">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold/40 group-hover/item:bg-gold transition-all duration-300 group-hover/item:scale-150" />
                                    <span className="text-slate-300 text-sm font-dm leading-snug group-hover/item:text-white transition-colors">{d}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-16 p-6 rounded-2xl bg-white/[0.03] border border-white/5 relative overflow-hidden group/proof">
                            <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover/proof:opacity-100 transition-opacity duration-500" />
                            <p className="font-mono text-[10px] uppercase text-gold font-bold tracking-[0.3em] mb-3 flex items-center gap-2 relative z-10">
                                <Trophy size={14} /> Impact Proof
                            </p>
                            <p className="font-dm text-slate-200 text-[15px] leading-relaxed tracking-tight relative z-10 italic">
                                "{svc.proof}"
                            </p>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}

export default function Services() {
    // Scene 1 — Manifesto
    const manifestRef = useRef(null)
    const { scrollYProgress: manifestProgress } = useScroll({
        target: manifestRef,
        offset: ["start center", "end center"]
    })
    const manifestSpring = useSpring(manifestProgress, { stiffness: 100, damping: 30 })

    // Scene 2 — Horizontal
    const scrollRef = useRef(null)
    const { scrollYProgress: horizontalProgress } = useScroll({
        target: scrollRef,
        offset: ["start start", "end end"]
    })

    const x = useTransform(horizontalProgress, [0.1, 0.9], ["0%", `-${(services.length - 1) * 100}vw`])
    const navProgress = useSpring(horizontalProgress, { stiffness: 100, damping: 30 })
    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
        const unsubscribe = horizontalProgress.on("change", v => {
                const index = Math.min(
                    Math.floor(v * services.length),
                    services.length - 1
                )
                setActiveIndex(index)
            })
        return () => unsubscribe()
    }, [horizontalProgress])

    return (
        <main className="bg-navy text-white selection:bg-gold selection:text-navy">
            {/* ─── SCENE 1: MANIFESTO ───────────────────────── */}
            <section ref={manifestRef} className="h-[150vh] relative">
                <div className="sticky top-16 md:top-20 h-screen flex flex-col items-center justify-start px-6 pt-24 pb-16">
                    <div className="max-w-5xl mx-auto text-center">
                        <motion.div 
                            style={{ opacity: useTransform(manifestSpring, [0, 0.15], [0, 1]), y: useTransform(manifestSpring, [0, 0.15], [20, 0]) }}
                            className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-12 backdrop-blur-md"
                        >
                            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold font-bold">The Service Creed</span>
                        </motion.div>
                        
                        <h2 className="font-jakarta font-black text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-16">
                            <ManifestoText 
                                progress={manifestSpring}
                                text="Building data platforms isn't just about code — it's about business resilience. I don't follow requirements. I architect competitive advantages."
                                highlightWords={['resilience', 'architect', 'advantages']}
                            />
                        </h2>

                        <motion.div 
                            style={{ 
                                opacity: useTransform(manifestSpring, [0.85, 1], [0, 1]),
                                y: useTransform(manifestSpring, [0.85, 1], [40, 0])
                            }}
                            className="flex flex-col items-center gap-4"
                        >
                            <div className="w-px h-24 bg-gradient-to-b from-gold via-gold/20 to-transparent" />
                            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-slate-500">Dive Into The Portfolio</span>
                            <ArrowDown size={16} className="text-gold animate-bounce" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ─── SCENE 2: HORIZONTAL SHOWCASE ─────────────── */}
            <section ref={scrollRef} className="relative h-[220vh] bg-slate-50">
                <div className="sticky top-16 md:top-20 h-screen w-full flex flex-col justify-center pt-16 pb-16 overflow-hidden bg-navy">
                    
                    {/* Fixed Sidebar Nav */}
                    <div className="absolute top-1/2 -translate-y-1/2 left-8 md:left-12 z-50 hidden md:flex flex-col gap-6">
                        {services.map((s, i) => (
                            <div key={i} className="flex items-center gap-6 group cursor-pointer" onClick={() => {
                                const targetScroll = scrollRef.current.offsetTop + (i * window.innerHeight)
                                window.scrollTo({ top: targetScroll, behavior: 'smooth' })
                            }}>
                                <div className="relative">
                                    <div className={`h-1.5 transition-all duration-700 rounded-full ${activeIndex === i ? 'w-16 bg-gold' : 'w-4 bg-white/20 group-hover:bg-white/40'}`} />
                                    {activeIndex === i && (
                                        <motion.div layoutId="nav-dot" className="absolute -left-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-gold shadow-[0_0_15px_#C5A55A]" />
                                    )}
                                </div>
                                <span className={`font-mono text-[10px] uppercase tracking-[0.3em] transition-all duration-700 ${activeIndex === i ? 'text-white opacity-100 translate-x-0' : 'text-slate-500 opacity-0 -translate-x-4 pointer-events-none'}`}>
                                    {s.category}
                                </span>
                            </div>
                        ))}
                    </div>

                    <motion.div 
                        style={{ x }}
                        className="flex w-full h-full"
                    >
                        {services.map((svc, i) => (
                            <ServicePanel key={i} svc={svc} index={i} scrollYProgress={horizontalProgress} />
                        ))}
                    </motion.div>

                    {/* Dynamic Progress Bar */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 z-50">
                        <motion.div 
                            style={{ 
                                scaleX: navProgress, 
                                transformOrigin: '0% 50%',
                                background: 'linear-gradient(to right, #C5A55A, #ffffff)'
                            }} 
                            className="h-full shadow-[0_0_20px_#C5A55A]" 
                        />
                    </div>
                </div>
            </section>

            {/* ─── SCENE 3: PROCESS FLOW (COMING SOON) ───────── */}
            <section className="py-20 md:py-40 bg-navy relative border-t border-white/5">
                <div className="container-content">
                    <FadeUp className="text-center mb-32">
                        <p className="text-gold font-mono text-xs uppercase tracking-[0.4em] mb-4">The Lifecycle</p>
                        <h2 className="text-4xl md:text-7xl font-jakarta font-black text-white tracking-tighter">
                            From Chaos to <span className="text-gold">ROI</span>
                        </h2>
                    </FadeUp>

                    <div className="grid md:grid-cols-4 gap-12 relative">
                        {/* Connecting Line */}
                        <div className="absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent hidden md:block" />
                        
                        {[
                            { step: '01', title: 'Audit discovery', body: '30-minute deep-audit to identify architecture gaps.', icon: Database },
                            { step: '02', title: 'Strategy Design', body: 'Blueprint aligned with the 5-year data roadmap.', icon: BarChart3 },
                            { step: '03', title: 'Agile execution', body: 'Weekly delivery sprints using dbt CI/CD pipelines.', icon: Settings },
                            { step: '04', title: 'Value delivery', body: 'Production handover with automated ROI tracking.', icon: GraduationCap },
                        ].map((node, i) => (
                            <FadeUp key={i} delay={i * 0.15}>
                                <div className="group space-y-8 relative">
                                    <div className="w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-navy transition-all duration-700 shadow-2xl border border-white/10 backdrop-blur-xl shrink-0">
                                        <node.icon size={32} strokeWidth={1.2} />
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <span className="font-mono text-gold/40 text-sm font-bold tracking-widest">{node.step}</span>
                                            <div className="h-px flex-1 bg-white/5" />
                                        </div>
                                        <h3 className="font-jakarta font-bold text-white text-2xl tracking-tight leading-tight">{node.title}</h3>
                                        <p className="font-dm text-slate-400 text-base leading-relaxed">{node.body}</p>
                                    </div>
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── FINAL CALL ───────────────────────────────── */}
            <section className="py-40 bg-navy relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(196,160,82,0.1),transparent_70%)]" />
                <div className="container-content relative z-10 text-center">
                    <FadeUp>
                        <h2 className="text-5xl md:text-8xl font-jakarta font-black text-white mb-12 tracking-tighter leading-[0.9]">
                            Build your <br /><span className="text-gold">Engineering Legacy.</span>
                        </h2>
                        <p className="text-slate-400 text-xl font-dm max-w-2xl mx-auto mb-16 leading-relaxed">
                            Stop maintaining legacy pipelines. Start architecting a modern data moat.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                            <MagneticButton>
                                <Link to="/#contact" className="btn-primary px-12 py-6 text-lg group bg-gold hover:bg-white hover:text-navy border-none shadow-[0_0_50px_rgba(197,165,90,0.2)]">
                                    Start Architecture Audit <ChevronRight size={22} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </MagneticButton>
                            <Link to="/#contact" className="text-white hover:text-gold font-jakarta font-bold text-lg flex items-center gap-3 transition-all group">
                                Message Directly <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </FadeUp>
                </div>
            </section>
        </main>
    )
}
