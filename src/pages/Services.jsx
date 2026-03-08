import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle } from 'lucide-react'
import PageHero from '../components/PageHero'
import FadeUp from '../components/FadeUp'

const services = [
    {
        icon: '🏗️',
        number: '01',
        title: 'Data Platform Architecture & Transformation',
        description: 'End-to-end BI platform design using Medallion Architecture. From audit and discovery through production lakehouse delivery.',
        proof: 'Proven at Deraah: 6 tables → 32-model production system. 259x faster. $80K saved annually.',
        proofColor: 'border-teal/30 bg-teal/5 text-teal',
        tools: ['ClickHouse', 'dbt', 'Apache Airflow', 'Airbyte', 'SQL Server'],
        deliverables: [
            'Current-state data audit and gap analysis',
            'Medallion Lakehouse architecture design',
            'ELT pipeline build (Airbyte → ClickHouse)',
            'dbt transformation layer (Bronze/Silver/Gold)',
            'Orchestration setup (Apache Airflow 3.0)',
            'Monitoring & alerting (Prometheus + Grafana)',
        ],
    },
    {
        icon: '📊',
        number: '02',
        title: 'Analytics Leadership & Strategy',
        description: 'Building high-performing analytics teams and 5-year maturity roadmaps. From hiring to stakeholder alignment to ROI measurement.',
        proof: 'Built 6-person team from scratch. 5-Year Analytics Roadmap currently in Year 3 execution.',
        proofColor: 'border-blue-electric/30 bg-blue-electric/5 text-blue-electric',
        tools: ['Strategic Planning', 'Team Building', 'Change Management', 'Roadmapping'],
        deliverables: [
            'Analytics maturity assessment',
            '5-year capability roadmap',
            'Team structure & hiring plan',
            'Stakeholder alignment workshops',
            'ROI measurement framework',
            'Analytics governance charter',
        ],
    },
    {
        icon: '🛡️',
        number: '03',
        title: 'Data Governance & Compliance',
        description: 'Enterprise data governance aligned with Saudi regulations. Classification frameworks, RBAC, data cataloging, and automated monitoring.',
        proof: '10-pillar governance framework aligned with SDAIA and PDPL compliance at Deraah.',
        proofColor: 'border-gold/30 bg-gold/5 text-gold',
        tools: ['SDAIA/PDPL', 'OpenMetadata', 'Prometheus', 'Grafana'],
        deliverables: [
            'Data classification framework (4 levels)',
            'RBAC implementation across all systems',
            'OpenMetadata catalog setup',
            'SDAIA/PDPL compliance checklist',
            'Automated data quality monitoring',
            'Governance policy documentation',
        ],
    },
    {
        icon: '🎓',
        number: '04',
        title: 'Training & Analytics Enablement',
        description: 'Knowledge transfer for technical and non-technical teams. SQL workshops, Power BI best practices, and self-service analytics enablement.',
        proof: 'Taught SQL to marketing team. Enabled self-service analytics across departments at Deraah.',
        proofColor: 'border-teal/30 bg-teal/5 text-teal',
        tools: ['Curriculum Design', 'DAX Patterns', 'Power Query / M', 'SQL'],
        deliverables: [
            'SQL fundamentals for business users',
            'Power BI report development training',
            'DAX patterns masterclass',
            'Self-service analytics framework',
            'Custom curriculum design',
            'Ongoing coaching & support',
        ],
    },
]

export default function Services() {
    return (
        <main>
            <PageHero
                title="What I Do"
                subtitle="End-to-end data platform design, from audit to production. Every engagement is results-obsessed and backed by real numbers."
            />

            {/* ─── SERVICE PILLARS ──────────────────────────── */}
            <section className="section-light">
                <div className="container-content">
                    <FadeUp className="text-center max-w-2xl mx-auto mb-16">
                        <p className="text-slate-muted font-mono text-xs uppercase tracking-widest mb-2">Services</p>
                        <h2 className="section-heading">Four Practice Areas</h2>
                        <p className="font-dm text-charcoal/70 text-lg">
                            Not a skill list — a consulting practice. Every engagement is defined by deliverables, not hours.
                        </p>
                    </FadeUp>

                    <div className="grid md:grid-cols-2 gap-8">
                        {services.map((svc, i) => (
                            <FadeUp key={i} delay={i * 0.1}>
                                <div className="card h-full flex flex-col group hover:border-gold/30">
                                    {/* Header */}
                                    <div className="flex items-start gap-4 mb-5">
                                        <div className="text-3xl">{svc.icon}</div>
                                        <div className="flex-1">
                                            <span className="font-mono text-xs text-slate-muted">{svc.number}</span>
                                            <h3 className="font-jakarta font-bold text-navy text-lg leading-snug">{svc.title}</h3>
                                        </div>
                                    </div>

                                    <p className="font-dm text-charcoal/80 leading-relaxed mb-5">{svc.description}</p>

                                    {/* Proof callout */}
                                    <div className={`border rounded-xl p-4 mb-5 ${svc.proofColor}`}>
                                        <p className="font-mono text-xs font-bold uppercase tracking-wide mb-1 opacity-70">✦ Proven Impact</p>
                                        <p className="font-dm text-sm">{svc.proof}</p>
                                    </div>

                                    {/* Deliverables */}
                                    <div className="mb-5 flex-1">
                                        <p className="font-jakarta font-semibold text-navy text-sm mb-3">What You Get:</p>
                                        <ul className="space-y-1.5">
                                            {svc.deliverables.map((d, j) => (
                                                <li key={j} className="flex items-start gap-2 text-sm text-charcoal/80 font-dm">
                                                    <CheckCircle size={14} className="text-teal mt-0.5 flex-shrink-0" />
                                                    {d}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Tools */}
                                    <div className="pt-4 border-t border-slate-200">
                                        <p className="font-mono text-xs text-slate-muted mb-2 uppercase tracking-wide">Tools & Frameworks</p>
                                        <div className="flex flex-wrap gap-2">
                                            {svc.tools.map((t) => (
                                                <span key={t} className="tag-teal">{t}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── PROCESS ──────────────────────────────────── */}
            <section className="section-slate">
                <div className="container-content">
                    <FadeUp className="text-center mb-12">
                        <p className="text-slate-muted font-mono text-xs uppercase tracking-widest mb-2">How It Works</p>
                        <h2 className="section-heading">The Engagement Process</h2>
                    </FadeUp>

                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            { step: '01', title: 'Discovery Call', body: '30-minute conversation to understand your current state and goals.', icon: '📞' },
                            { step: '02', title: 'Audit & Proposal', body: 'Deep-dive into your data infrastructure. Documented findings + roadmap.', icon: '🔍' },
                            { step: '03', title: 'Build & Deliver', body: 'Hands-on implementation with weekly check-ins and transparent progress.', icon: '⚙️' },
                            { step: '04', title: 'Handover & Enablement', body: 'Full documentation, team training, and ongoing support options.', icon: '🎓' },
                        ].map((step, i) => (
                            <FadeUp key={i} delay={i * 0.1}>
                                <div className="text-center">
                                    <div className="font-mono font-bold text-4xl text-gold/20 mb-2">{step.step}</div>
                                    <div className="text-3xl mb-3">{step.icon}</div>
                                    <h3 className="font-jakarta font-bold text-navy mb-2">{step.title}</h3>
                                    <p className="font-dm text-charcoal/70 text-sm leading-relaxed">{step.body}</p>
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── CTA ──────────────────────────────────────── */}
            <section className="section-dark">
                <div className="container-content text-center">
                    <FadeUp>
                        <h2 className="section-heading-white mb-4">Ready to Modernize Your Data Platform?</h2>
                        <p className="text-slate-muted font-dm text-lg mb-8">
                            Start with a free 30-minute audit. No commitment, just clarity.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact" className="btn-primary px-8 py-3.5">
                                Schedule a Free 30-Min Audit <ArrowRight size={16} />
                            </Link>
                            <Link to="/case-studies" className="btn-secondary px-8 py-3.5">
                                View Case Studies <ArrowRight size={16} />
                            </Link>
                        </div>
                    </FadeUp>
                </div>
            </section>
        </main>
    )
}
