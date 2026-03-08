import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Download } from 'lucide-react'
import PageHero from '../components/PageHero'
import FadeUp from '../components/FadeUp'

const categories = ['All', 'Platform Architecture', 'Customer Analytics', 'Data Engineering', 'Governance', 'Strategy', 'Reporting']

const projects = [
    {
        id: 1,
        icon: '🏗️',
        title: 'Enterprise BI Transformation',
        company: 'Deraah Retail Group',
        category: 'Platform Architecture',
        impact: '6 tables → 32-model Medallion Lakehouse. 259x faster dashboards. $80K annual savings.',
        metrics: [{ label: '259x', sub: 'Faster' }, { label: '$80K', sub: 'Saved' }, { label: '32', sub: 'dbt Models' }],
        tools: ['ClickHouse', 'dbt', 'Airflow', 'Airbyte'],
        year: '2024',
        featured: true,
    },
    {
        id: 2,
        icon: '👥',
        title: 'Customer 360 Engine',
        company: 'Deraah Retail Group',
        category: 'Customer Analytics',
        impact: '2.7M records unified across D365, Salesforce, and OTO. RFM scoring + churn prediction.',
        metrics: [{ label: '2.7M', sub: 'Records' }, { label: '3', sub: 'Systems' }, { label: 'RFM', sub: 'Scoring' }],
        tools: ['SQL Server', 'Python', 'Power BI', 'dbt'],
        year: '2024',
        featured: true,
    },
    {
        id: 3,
        icon: '⚡',
        title: 'Real-Time Ramadan Dashboard',
        company: 'Deraah Retail Group',
        category: 'Data Engineering',
        impact: '1,200+ stores monitored in real-time during Saudi Arabia\'s peak retail season.',
        metrics: [{ label: '1,200+', sub: 'Stores' }, { label: '30min', sub: 'Refresh' }, { label: '24/7', sub: 'Live' }],
        tools: ['ClickHouse', 'Power BI', 'SQL', 'Airflow'],
        year: '2024',
        featured: true,
    },
    {
        id: 4,
        icon: '🛡️',
        title: 'Data Governance Framework',
        company: 'Deraah Retail Group',
        category: 'Governance',
        impact: '10-pillar SDAIA/PDPL framework. RBAC implementation, OpenMetadata catalog, automated monitoring.',
        metrics: [{ label: '10', sub: 'Pillars' }, { label: 'SDAIA', sub: 'Aligned' }, { label: 'RBAC', sub: 'Enforced' }],
        tools: ['OpenMetadata', 'Prometheus', 'Grafana'],
        year: '2024',
        featured: false,
    },
    {
        id: 5,
        icon: '🗺️',
        title: '5-Year Analytics Roadmap',
        company: 'Deraah Retail Group',
        category: 'Strategy',
        impact: 'Foundation → Maturity: structured investment plan. Currently executing Year 3 milestones.',
        metrics: [{ label: '5Y', sub: 'Roadmap' }, { label: 'Year 3', sub: 'Active' }, { label: 'Full', sub: 'Team' }],
        tools: ['Strategic Planning', 'Team Building'],
        year: '2023',
        featured: false,
    },
    {
        id: 6,
        icon: '📋',
        title: 'Regional Reporting System',
        company: 'Huawei Technologies',
        category: 'Reporting',
        impact: '15+ automated daily, weekly, and monthly reports for the Delta region in 30 days.',
        metrics: [{ label: '15+', sub: 'Reports' }, { label: '30 days', sub: 'Built in' }, { label: 'Daily', sub: 'Auto-run' }],
        tools: ['SQL', 'Excel', 'Power BI'],
        year: '2022',
        featured: false,
    },
    {
        id: 7,
        icon: '⚙️',
        title: 'Operations BI & ERP Master Data',
        company: 'EAI Company',
        category: 'Data Engineering',
        impact: '10 major BI systems built: supply chain, Power BI dashboards, ERP master data MDM.',
        metrics: [{ label: '10', sub: 'BI Systems' }, { label: '12mo', sub: 'Delivered' }, { label: 'ERP', sub: 'MDM' }],
        tools: ['Power BI', 'SQL', 'ERP Systems'],
        year: '2023',
        featured: false,
    },
]

export default function Portfolio() {
    const [activeFilter, setActiveFilter] = useState('All')

    const filtered = activeFilter === 'All' ? projects : projects.filter((p) => p.category === activeFilter)

    return (
        <main>
            <PageHero
                title="Selected Work"
                subtitle="Every project delivers measurable business impact. Numbers, not claims."
            />

            {/* ─── FILTER TABS ──────────────────────────────── */}
            <section className="bg-white border-b border-slate-200 sticky top-16 z-40">
                <div className="container-content py-4">
                    <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveFilter(cat)}
                                className={`shrink-0 px-4 py-2 rounded-lg text-sm font-jakarta font-semibold transition-all duration-200 ${activeFilter === cat
                                        ? 'bg-gold text-navy shadow-md shadow-gold/20'
                                        : 'bg-slate-soft text-charcoal hover:bg-slate-200'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── PROJECT GRID ─────────────────────────────── */}
            <section className="section-light">
                <div className="container-content">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filtered.map((project, i) => (
                            <FadeUp key={project.id} delay={i * 0.05}>
                                <div className={`card h-full flex flex-col group ${project.featured ? 'border-gold/20' : ''}`}>
                                    {/* Header */}
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="text-3xl">{project.icon}</div>
                                        <div className="flex items-center gap-2">
                                            {project.featured && <span className="tag-gold">Featured</span>}
                                            <span className="text-slate-muted text-xs font-mono">{project.year}</span>
                                        </div>
                                    </div>

                                    <span className="tag-teal mb-2 w-fit">{project.category}</span>
                                    <h3 className="font-jakarta font-bold text-navy text-lg mb-1">{project.title}</h3>
                                    <p className="text-slate-muted text-sm font-mono mb-3">{project.company}</p>
                                    <p className="text-charcoal/80 font-dm text-sm leading-relaxed flex-1 mb-4">{project.impact}</p>

                                    {/* Mini metrics */}
                                    <div className="grid grid-cols-3 gap-2 mb-4 bg-slate-soft rounded-lg p-3">
                                        {project.metrics.map((m, j) => (
                                            <div key={j} className="text-center">
                                                <p className="font-mono font-bold text-gold text-sm">{m.label}</p>
                                                <p className="text-slate-muted text-xs">{m.sub}</p>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Tools */}
                                    <div className="flex flex-wrap gap-1.5 mb-4">
                                        {project.tools.map((t) => (
                                            <span key={t} className="text-xs font-mono px-2 py-0.5 bg-navy/5 text-charcoal/70 rounded-md">{t}</span>
                                        ))}
                                    </div>

                                    <Link
                                        to="/case-studies"
                                        className="mt-auto inline-flex items-center gap-1.5 text-gold text-sm font-jakarta font-semibold hover:gap-3 transition-all"
                                    >
                                        View Details <ArrowRight size={13} />
                                    </Link>
                                </div>
                            </FadeUp>
                        ))}
                    </div>

                    {filtered.length === 0 && (
                        <div className="text-center py-20 text-slate-muted font-dm">
                            No projects in this category yet.
                        </div>
                    )}
                </div>
            </section>

            {/* ─── CTA ──────────────────────────────────────── */}
            <section className="section-dark">
                <div className="container-content text-center">
                    <FadeUp>
                        <h2 className="section-heading-white mb-4">Interested in Working Together?</h2>
                        <p className="text-slate-muted font-dm text-lg mb-8">
                            Let's discuss what a modern data platform could deliver for your organization.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact" className="btn-primary px-8 py-3.5">
                                Start a Conversation <ArrowRight size={16} />
                            </Link>
                            <a href="/cv-hamed-elbhrawy.pdf" className="btn-secondary px-8 py-3.5" download>
                                <Download size={16} /> Download CV
                            </a>
                        </div>
                    </FadeUp>
                </div>
            </section>
        </main>
    )
}
