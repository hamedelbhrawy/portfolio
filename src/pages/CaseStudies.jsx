import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageHero from '../components/PageHero'
import FadeUp from '../components/FadeUp'

const caseStudies = [
    {
        id: 1,
        hero: '259x',
        heroLabel: 'Faster',
        title: 'Enterprise BI Transformation',
        company: 'Deraah Retail Group',
        summary: 'From 6 broken legacy tables to a 32-model production Medallion Lakehouse. The flagship BI transformation that saved $80K annually, reduced dashboard load time by 259x, and laid the foundation for Deraah\'s entire modern analytics platform.',
        tags: ['Platform Architecture', 'Medallion Lakehouse', 'ClickHouse'],
        accentColor: 'border-gold/40 bg-gold/5',
        metricColor: 'text-gold',
        problem: 'Six legacy tables, 45-minute dashboard loads, and a team spending 80% of their time on manual data fixes instead of analysis.',
        solution: 'Full Medallion Lakehouse rebuild: Airbyte for ingestion → ClickHouse for OLAP storage → 32 dbt models → Airflow orchestration → Power BI delivery.',
        results: [
            { metric: '259x', label: 'Faster dashboards' },
            { metric: '$80K', label: 'Annual cost savings' },
            { metric: '32', label: 'dbt models in production' },
            { metric: '<2min', label: 'ETL runtime (was 45min)' },
        ],
    },
    {
        id: 2,
        hero: '2.7M',
        heroLabel: 'Records',
        title: 'Customer 360 Engine',
        company: 'Deraah Retail Group',
        summary: 'Unifying 2.7 million customer records across Dynamics 365, Salesforce, and OTO into a single customer identity platform. Includes RFM scoring, churn prediction, and Hijri/Gregorian dual-calendar segmentation.',
        tags: ['Customer Analytics', 'Identity Resolution', 'RFM Scoring'],
        accentColor: 'border-teal/40 bg-teal/5',
        metricColor: 'text-teal',
        problem: 'Three CRM systems with no shared identity. The same customer appeared as three different people. Marketing campaigns were being duplicated. Loyalty analytics were meaningless.',
        solution: 'Deterministic + probabilistic identity matching. Unified customer profiles with RFM scoring, churn prediction, and behavioral segmentation respecting both Hijri and Gregorian calendars.',
        results: [
            { metric: '2.7M', label: 'Customers unified' },
            { metric: '3', label: 'Systems integrated' },
            { metric: 'RFM', label: 'Scoring live' },
            { metric: 'Churn', label: 'Prediction model' },
        ],
    },
    {
        id: 3,
        hero: '1,200+',
        heroLabel: 'Stores',
        title: 'Real-Time Ramadan Dashboard',
        company: 'Deraah Retail Group',
        summary: 'Real-time monitoring of 1,200+ stores across Saudi Arabia during Ramadan — the country\'s peak retail season. Features Hijri hour groupings, shift-aware logic, and 30-minute refresh cycles that match prayer time schedules.',
        tags: ['Data Engineering', 'Real-Time', 'Retail Analytics'],
        accentColor: 'border-blue-electric/40 bg-blue-electric/5',
        metricColor: 'text-blue-electric',
        problem: 'Ramadan shifts retail patterns dramatically. Stores that are dead during afternoon hours explode at night. The old reporting couldn\'t capture this — one daily report, no intraday visibility.',
        solution: 'ClickHouse streaming pipeline with 30-minute refresh. Custom Hijri hour groupings. Shift-aware KPIs (pre-iftar, iftar rush, night) that match KSA retail operational reality.',
        results: [
            { metric: '1,200+', label: 'Stores monitored' },
            { metric: '30min', label: 'Refresh cycle' },
            { metric: 'Hijri', label: 'Calendar logic' },
            { metric: 'Real-time', label: 'Intraday KPIs' },
        ],
    },
]

export default function CaseStudies() {
    return (
        <main>
            <PageHero
                title="Case Studies"
                subtitle="The full story behind the transformation. Every claim is backed by a specific number."
            />

            {/* ─── CASE STUDY CARDS ─────────────────────────── */}
            <section className="section-light">
                <div className="container-content">
                    <div className="space-y-8">
                        {caseStudies.map((cs, i) => (
                            <FadeUp key={cs.id} delay={i * 0.1}>
                                <div className={`rounded-2xl border-2 ${cs.accentColor} p-8 md:p-10`}>
                                    <div className="grid md:grid-cols-3 gap-8">
                                        {/* Hero metric */}
                                        <div className="flex flex-col justify-between">
                                            <div className={`font-mono font-bold text-6xl md:text-7xl ${cs.metricColor} leading-none mb-1`}>
                                                {cs.hero}
                                            </div>
                                            <div className="text-slate-muted font-mono text-sm uppercase tracking-wide">{cs.heroLabel}</div>
                                            <div className="mt-4">
                                                {cs.tags.map((tag) => (
                                                    <span key={tag} className="tag-teal mr-2 mb-2 inline-flex">{tag}</span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="md:col-span-2">
                                            <p className="font-mono text-xs text-slate-muted mb-2">{cs.company}</p>
                                            <h2 className="font-jakarta font-bold text-navy text-2xl mb-4">{cs.title}</h2>
                                            <p className="font-dm text-charcoal/80 leading-relaxed mb-6">{cs.summary}</p>

                                            {/* Mini metrics */}
                                            <div className="grid grid-cols-4 gap-3 mb-6">
                                                {cs.results.map((r, j) => (
                                                    <div key={j} className="bg-white rounded-xl p-3 text-center shadow-sm border border-slate-200">
                                                        <p className={`font-mono font-bold ${cs.metricColor} text-lg`}>{r.metric}</p>
                                                        <p className="text-slate-muted text-xs font-dm">{r.label}</p>
                                                    </div>
                                                ))}
                                            </div>

                                            <Link
                                                to={`/case-studies/${cs.id}`}
                                                className="btn-primary"
                                            >
                                                Read Full Case Study <ArrowRight size={14} />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── CASE STUDY DETAIL TEMPLATE ───────────────── */}
            <section className="section-slate">
                <div className="container-content">
                    <FadeUp>
                        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-slate-200 max-w-4xl mx-auto">
                            <p className="font-mono text-xs text-slate-muted uppercase tracking-widest mb-4">Deep Dive: Enterprise BI Transformation</p>
                            <h2 className="section-heading mb-8">Inside the Deraah BI Transformation</h2>

                            <div className="space-y-10">
                                {[
                                    {
                                        section: 'The Problem',
                                        color: 'text-red-500',
                                        content: 'When I joined, the analytics function was 6 Excel-sourced tables, 45-minute load times, and a team spending 80% of their time on manual data validation. Business leaders had no confidence in the numbers. Decisions were being made on gut feel.'
                                    },
                                    {
                                        section: 'Discovery & Audit',
                                        color: 'text-gold',
                                        content: 'A 2-week audit revealed: no unified data model, 6 different date dimension interpretations, missing joins causing phantom records, and ETL running on a shared Excel workbook. Total technical debt: significant.'
                                    },
                                    {
                                        section: 'Solution Architecture',
                                        color: 'text-teal',
                                        content: 'Medallion Lakehouse: Airbyte (ingestion) → ClickHouse (storage) → dbt 32 models (Bronze/Silver/Gold) → Airflow orchestration → Prometheus/Grafana monitoring → Power BI delivery.'
                                    },
                                    {
                                        section: 'Results & Impact',
                                        color: 'text-blue-electric',
                                        content: 'Dashboard load time: 45 min → 10 seconds (259x improvement). ETL runtime: 45 min → <2 min. Annual savings: $80K from automation alone. Data team capacity: shifted from 80% firefighting to 80% analysis.'
                                    },
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6">
                                        <div className={`w-1 bg-gradient-to-b from-current to-transparent rounded-full flex-shrink-0 ${item.color}`} />
                                        <div>
                                            <h3 className={`font-jakarta font-bold text-lg mb-3 ${item.color}`}>{item.section}</h3>
                                            <p className="font-dm text-charcoal/80 leading-relaxed">{item.content}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-10 pt-8 border-t border-slate-200">
                                <h3 className="font-jakarta font-bold text-navy text-lg mb-4">Facing a Similar Challenge?</h3>
                                <p className="text-charcoal/70 font-dm mb-6">
                                    If your team is spending more time fixing data than analyzing it, let's talk about what a modern data platform could do for your organization.
                                </p>
                                <Link to="/contact" className="btn-primary">
                                    Let's Talk <ArrowRight size={14} />
                                </Link>
                            </div>
                        </div>
                    </FadeUp>
                </div>
            </section>
        </main>
    )
}
