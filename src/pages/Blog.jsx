import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Clock, ArrowRight, Tag } from 'lucide-react'
import PageHero from '../components/PageHero'
import FadeUp from '../components/FadeUp'

const categories = ['All', 'Platform Architecture', 'DAX & Power BI', 'Analytics Leadership', 'Data Governance', 'Career & Growth']

const posts = [
    {
        id: 1,
        title: 'Why 80% of Your BI Project Is the Data Model (Not the Dashboard)',
        category: 'Platform Architecture',
        readTime: '6 min',
        date: 'Feb 2025',
        excerpt: 'The dashboard is the easy part. Executives see the dashboard. Engineers build the data model. Here\'s why the foundation determines everything — and how to build it right.',
        featured: true,
    },
    {
        id: 2,
        title: 'ClickHouse vs. SQL Server: A Real Migration Story (259x Faster)',
        category: 'Platform Architecture',
        readTime: '8 min',
        date: 'Jan 2025',
        excerpt: 'The technical and organizational story behind migrating from SQL Server to ClickHouse — and what the 45-minute to 10-second journey actually looked like from inside.',
        featured: true,
        slug: 'clickhouse-vs-sql-server-migration'
    },
    {
        id: 3,
        title: 'Building a Customer 360 in Saudi Arabia\'s Dual-Calendar Retail Market',
        category: 'Analytics Leadership',
        readTime: '7 min',
        date: 'Dec 2024',
        excerpt: 'Most customer analytics tutorials ignore the Hijri calendar. In Saudi retail, that\'s a fatal mistake. Here\'s how we unified 2.7M records AND respected the Islamic calendar.',
        featured: false,
        slug: 'customer-360-saudi-retail'
    },
    {
        id: 4,
        title: 'The 10 DAX Patterns I Use in Every Production Report',
        category: 'DAX & Power BI',
        readTime: '10 min',
        date: 'Nov 2024',
        excerpt: '353 DAX measures across 4 companies taught me that 90% of business questions can be answered with 10 core patterns. Here they are, with real examples.',
        featured: false,
        slug: '10-dax-patterns-production-report'
    },
    {
        id: 5,
        title: 'How to Build an Analytics Team From Scratch in the Middle East',
        category: 'Analytics Leadership',
        readTime: '9 min',
        date: 'Oct 2024',
        excerpt: 'Cultural context matters. Hiring data people in Saudi Arabia is different from Silicon Valley. Here\'s what I learned building a 6-person analytics function from zero.',
        featured: false,
    },
    {
        id: 6,
        title: 'SDAIA & PDPL: A Practical Data Governance Guide for Saudi Companies',
        category: 'Data Governance',
        readTime: '12 min',
        date: 'Sep 2024',
        excerpt: 'The Personal Data Protection Law is in effect. Here\'s a 10-pillar framework to make your data governance practices compliant — and actually useful.',
        featured: false,
    },
]

export default function Blog() {
    const [activeFilter, setActiveFilter] = useState('All')
    const [emailVal, setEmailVal] = useState('')

    const filtered = activeFilter === 'All' ? posts : posts.filter((p) => p.category === activeFilter)

    return (
        <main>
            <PageHero
                title="Insights"
                subtitle="Practical frameworks from 6+ years of building data platforms — no fluff, all substance."
            />

            {/* ─── FILTER TABS ──────────────────────────────── */}
            <section className="bg-white border-b border-slate-200 sticky top-16 z-40">
                <div className="container-content py-4">
                    <div className="flex gap-2 overflow-x-auto pb-1">
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

            {/* ─── BLOG GRID ────────────────────────────────── */}
            <section className="section-light">
                <div className="container-content">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filtered.map((post, i) => (
                            <FadeUp key={post.id} delay={i * 0.05}>
                                <article className={`card h-full flex flex-col group ${post.featured ? 'border-gold/20' : ''}`}>
                                    {post.featured && (
                                        <span className="tag-gold mb-3 w-fit">Featured</span>
                                    )}
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="tag-teal">{post.category}</span>
                                        <span className="text-slate-muted text-xs font-mono flex items-center gap-1">
                                            <Clock size={11} /> {post.readTime} read
                                        </span>
                                    </div>
                                    <h2 className="font-jakarta font-bold text-navy text-base leading-snug mb-3 flex-1">
                                        {post.title}
                                    </h2>
                                    <p className="text-charcoal/70 font-dm text-sm leading-relaxed mb-4">{post.excerpt}</p>
                                    <div className="flex items-center justify-between mt-auto">
                                        <span className="text-slate-muted text-xs font-mono">{post.date}</span>
                                        {post.slug ? (
                                            <Link to={`/blog/${post.slug}`} className="text-gold text-xs font-jakarta font-semibold hover:underline flex items-center gap-1">
                                                Read More <ArrowRight size={11} />
                                            </Link>
                                        ) : (
                                            <span className="text-slate-400 text-xs font-jakarta font-medium flex items-center gap-1">
                                                Coming Soon
                                            </span>
                                        )}
                                    </div>
                                </article>
                            </FadeUp>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── NEWSLETTER SUBSCRIBE ─────────────────────── */}
            <section className="section-dark" id="newsletter">
                <div className="container-content">
                    <div className="max-w-xl mx-auto text-center">
                        <FadeUp>
                            <div className="font-mono text-gold text-xs uppercase tracking-widest mb-3">The Data Signal</div>
                            <h2 className="section-heading-white mb-3">Monthly Insights on Data Platform Architecture</h2>
                            <p className="text-slate-muted font-dm mb-8">
                                No fluff. One practical framework, one real case study, subscriber-only insights every month.
                            </p>
                            <form
                                className="flex flex-col sm:flex-row gap-3"
                                onSubmit={(e) => { e.preventDefault(); setEmailVal(''); alert('Thank you for subscribing!') }}
                            >
                                <input
                                    type="email"
                                    placeholder="your@email.com"
                                    value={emailVal}
                                    onChange={(e) => setEmailVal(e.target.value)}
                                    className="input-field flex-1 bg-navy-light border-white/20 text-white placeholder-slate-muted"
                                    required
                                />
                                <button type="submit" className="btn-primary shrink-0 justify-center">
                                    Subscribe
                                </button>
                            </form>
                            <p className="text-slate-muted text-xs mt-4 font-mono">No spam. Unsubscribe anytime.</p>
                        </FadeUp>
                    </div>
                </div>
            </section>
        </main>
    )
}
