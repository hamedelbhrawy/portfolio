import { useState } from 'react'
import { ArrowRight, Download, X } from 'lucide-react'
import PageHero from '../components/PageHero'
import FadeUp from '../components/FadeUp'

const resources = [
    {
        id: 1,
        icon: '🏗️',
        title: 'The Modern Data Platform Blueprint',
        description: 'A comprehensive guide to designing a modern analytics platform — from data sources to executive dashboards.',
        format: 'PDF',
        color: 'bg-gold/10 text-gold',
        pages: '24 pages',
    },
    {
        id: 2,
        icon: '✅',
        title: 'BI Transformation Checklist',
        description: 'Step-by-step audit checklist for assessing your BI maturity and identifying quick wins.',
        format: 'PDF',
        color: 'bg-teal/10 text-teal',
        pages: '12 pages',
    },
    {
        id: 3,
        icon: '📐',
        title: 'DAX Patterns Cheat Sheet',
        description: 'Top 10 production DAX patterns with real examples. Distilled from 353 measures across 4 companies.',
        format: 'PDF',
        color: 'bg-blue-electric/10 text-blue-electric',
        pages: '8 pages',
    },
    {
        id: 4,
        icon: '🖼️',
        title: 'Dashboard Design Template',
        description: '1-page dashboard wireframe with labeled layout zones. PPTX format, fully editable.',
        format: 'PPTX',
        color: 'bg-gold/10 text-gold',
        pages: '1 slide',
    },
    {
        id: 5,
        icon: '🛡️',
        title: 'Data Governance 10-Pillar Framework',
        description: 'SDAIA/PDPL-aligned governance framework. Practical implementation guide for Saudi companies.',
        format: 'PDF',
        color: 'bg-teal/10 text-teal',
        pages: '18 pages',
    },
]

function DownloadModal({ resource, onClose }) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/80 backdrop-blur-sm">
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative">
                <button onClick={onClose} className="absolute top-4 right-4 text-slate-muted hover:text-charcoal">
                    <X size={20} />
                </button>

                {!submitted ? (
                    <>
                        <div className="text-3xl mb-3">{resource.icon}</div>
                        <h3 className="font-jakarta font-bold text-navy text-xl mb-1">{resource.title}</h3>
                        <p className="text-slate-muted font-mono text-xs mb-6">{resource.format} · {resource.pages} · Free</p>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block font-dm font-medium text-charcoal text-sm mb-1.5">Your Name</label>
                                <input type="text" value={name} onChange={(e) => setName(e.target.value)}
                                    className="input-field" placeholder="Hamed Elbhrawy" required />
                            </div>
                            <div>
                                <label className="block font-dm font-medium text-charcoal text-sm mb-1.5">Work Email</label>
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                                    className="input-field" placeholder="you@company.com" required />
                            </div>
                            <button type="submit" className="btn-primary w-full justify-center">
                                <Download size={15} /> Download Free
                            </button>
                            <p className="text-slate-muted text-xs text-center font-mono">No spam. Unsubscribe anytime.</p>
                        </form>
                    </>
                ) : (
                    <div className="text-center py-8">
                        <div className="text-5xl mb-4">🎉</div>
                        <h3 className="font-jakarta font-bold text-navy text-xl mb-2">Your download is ready!</h3>
                        <p className="text-charcoal/70 font-dm text-sm mb-6">
                            We've also sent a copy to {email}. While you're here, check out some related insights:
                        </p>
                        <button className="btn-primary justify-center w-full mb-3">
                            <Download size={15} /> Download {resource.title}
                        </button>
                        <button onClick={onClose} className="text-slate-muted text-sm hover:text-charcoal font-dm">
                            Close
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default function Resources() {
    const [selectedResource, setSelectedResource] = useState(null)

    return (
        <main>
            <PageHero
                title="Free Resources"
                subtitle="Frameworks, templates, and checklists from real production projects. Download and use them at your company."
            />

            <section className="section-light">
                <div className="container-content">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {resources.map((r, i) => (
                            <FadeUp key={r.id} delay={i * 0.1}>
                                <div className="card h-full flex flex-col group hover:border-gold/30">
                                    {/* Visual */}
                                    <div className={`w-16 h-16 rounded-2xl ${r.color} flex items-center justify-center text-3xl mb-5`}>
                                        {r.icon}
                                    </div>

                                    {/* Format badge */}
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="tag-gold">{r.format}</span>
                                        <span className="text-slate-muted text-xs font-mono">{r.pages}</span>
                                    </div>

                                    <h3 className="font-jakarta font-bold text-navy text-lg mb-2">{r.title}</h3>
                                    <p className="text-charcoal/70 font-dm text-sm leading-relaxed flex-1 mb-6">{r.description}</p>

                                    <button
                                        onClick={() => setSelectedResource(r)}
                                        className="btn-primary w-full justify-center text-sm"
                                    >
                                        <Download size={14} /> Download Free
                                    </button>
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── NEWSLETTER ───────────────────────────────── */}
            <section className="section-dark">
                <div className="container-content text-center max-w-xl mx-auto">
                    <FadeUp>
                        <div className="font-mono text-gold text-xs uppercase tracking-widest mb-3">The Data Signal</div>
                        <h2 className="section-heading-white mb-3">Get New Resources First</h2>
                        <p className="text-slate-muted font-dm mb-6">
                            Subscribers get early access to new frameworks and templates before they're posted publicly.
                        </p>
                        <form className="flex gap-3" onSubmit={(e) => e.preventDefault()}>
                            <input type="email" placeholder="your@email.com"
                                className="input-field flex-1 bg-navy-light border-white/20 text-white placeholder-slate-muted" />
                            <button className="btn-primary shrink-0">Subscribe</button>
                        </form>
                    </FadeUp>
                </div>
            </section>

            {selectedResource && (
                <DownloadModal resource={selectedResource} onClose={() => setSelectedResource(null)} />
            )}
        </main>
    )
}
