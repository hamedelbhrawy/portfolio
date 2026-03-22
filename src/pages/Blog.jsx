import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion'
import { Clock, ArrowRight, Tag, BookOpen, Share2, MessageSquare, ChevronDown, Zap, Lightbulb, PieChart } from 'lucide-react'
import PageHero from '../components/PageHero'
import FadeUp from '../components/FadeUp'

const posts = [
    {
        id: 1,
        title: 'Why 80% of Your BI Project Is the Data Model (Not the Dashboard)',
        category: 'Platform Architecture',
        readTime: '6 min',
        date: 'Feb 2025',
        excerpt: 'The dashboard is the easy part. Executives see the dashboard. Engineers build the data model. Here\'s why the foundation determines everything — and how to build it right.',
        featured: true,
        stats: { views: '1.2k', shares: '45' }
    },
    {
        id: 2,
        title: 'ClickHouse vs. SQL Server: A Real Migration Story (259x Faster)',
        category: 'Platform Architecture',
        readTime: '8 min',
        date: 'Jan 2025',
        excerpt: 'The technical and organizational story behind migrating from SQL Server to ClickHouse — and what the 45-minute to 10-second journey actually looked like.',
        featured: true,
        slug: 'clickhouse-vs-sql-server-migration',
        stats: { views: '2.4k', shares: '182' }
    },
    {
        id: 3,
        title: 'Building a Customer 360 in Saudi Arabia\'s Dual-Calendar Retail Market',
        category: 'Analytics Leadership',
        readTime: '7 min',
        date: 'Dec 2024',
        excerpt: 'Most customer analytics tutorials ignore the Hijri calendar. In Saudi retail, that\'s a fatal mistake. Here\'s how we unified 2.7M records.',
        featured: false,
        slug: 'customer-360-saudi-retail',
        stats: { views: '800', shares: '12' }
    },
    {
        id: 4,
        title: 'The 10 DAX Patterns I Use in Every Production Report',
        category: 'DAX & Power BI',
        readTime: '10 min',
        date: 'Nov 2024',
        excerpt: '353 DAX measures across 4 companies taught me that 90% of business questions can be answered with 10 core patterns.',
        featured: false,
        slug: '10-dax-patterns-production-report',
        stats: { views: '1.5k', shares: '94' }
    },
]

function ArticleCard({ post, index }) {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 90%", "center center"]
    })

    const y = useTransform(scrollYProgress, [0, 1], [100, 0])
    const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])
    const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1])

    return (
        <motion.article 
            ref={ref}
            style={{ y, opacity, scale }}
            className={`group relative bg-white rounded-[2.5rem] p-8 md:p-12 border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-700 overflow-hidden flex flex-col ${post.featured ? 'md:col-span-2' : ''}`}
        >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                    <span className="tag-gold font-mono text-[10px]">{post.category}</span>
                    <span className="text-slate-400 text-[10px] font-mono font-bold flex items-center gap-1.5 uppercase tracking-widest">
                        <Clock size={12} /> {post.readTime}
                    </span>
                </div>
                <div className="flex gap-4 text-slate-300">
                    <div className="flex items-center gap-1.5">
                        <Share2 size={14} />
                        <span className="text-[10px] font-bold font-mono uppercase">{post.stats.shares}</span>
                    </div>
                </div>
            </div>

            <h2 className={`font-jakarta font-black text-navy leading-[1.1] mb-6 group-hover:text-gold transition-colors ${post.featured ? 'text-3xl md:text-5xl' : 'text-2xl md:text-3xl'}`}>
                {post.title}
            </h2>
            
            <p className="text-charcoal/70 font-dm text-lg leading-relaxed mb-10 line-clamp-3">
                {post.excerpt}
            </p>

            <div className="mt-auto pt-8 border-t border-slate-50 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 font-jakarta font-black text-xs">HB</div>
                    <div>
                        <p className="text-navy font-black text-sm leading-none mb-1">Hamed Elbhrawy</p>
                        <p className="text-slate-400 font-mono text-[10px] font-bold uppercase tracking-widest">{post.date}</p>
                    </div>
                </div>
                
                {post.slug ? (
                    <Link to={`/blog/${post.slug}`} className="w-14 h-14 rounded-full bg-navy text-white flex items-center justify-center group-hover:bg-gold transition-all shadow-lg group-hover:translate-x-2">
                        <ArrowRight size={24} />
                    </Link>
                ) : (
                    <span className="text-slate-400 text-xs font-jakarta font-bold px-6 py-3 bg-slate-50 rounded-full border border-slate-100">Coming Soon</span>
                )}
            </div>
        </motion.article>
    )
}

export default function Blog() {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    const streamOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.3, 0.1, 0.1, 0])

    return (
        <main className="bg-white selection:bg-gold selection:text-navy" ref={containerRef}>
            {/* ─── INSIGHT STREAM HERO ──────────────────────── */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden bg-navy">
                <div className="absolute inset-0 z-0">
                    <motion.div 
                        style={{ opacity: streamOpacity }}
                        className="absolute inset-0 opacity-20 pointer-events-none"
                    >
                        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(196,160,82,0.1)_50%,transparent_100%)] bg-[length:100%_400px] animate-data-stream" />
                        <div className="h-full w-full grid grid-cols-12 gap-4">
                            {[...Array(12)].map((_, i) => (
                                <div key={i} className="h-full w-px bg-white/5 relative">
                                    <motion.div 
                                        animate={{ y: ["0%", "100%"], opacity: [0, 1, 0] }}
                                        transition={{ duration: Math.random() * 5 + 3, repeat: Infinity, ease: "linear", delay: Math.random() * 5 }}
                                        className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-transparent via-gold/30 to-transparent"
                                    />
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <div className="container-content relative z-10 text-center pt-24">
                    <FadeUp>
                        <div className="mb-12 flex justify-center">
                            <div className="w-24 h-24 rounded-[2.5rem] bg-gold/10 border border-gold/20 flex items-center justify-center text-gold shadow-[0_0_50px_rgba(196,160,82,0.2)]">
                                <BookOpen size={48} strokeWidth={1} />
                            </div>
                        </div>
                        <h1 className="text-6xl md:text-9xl font-jakarta font-black text-white tracking-tighter leading-[0.8] mb-12">
                            The Data <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-white">Signal.</span>
                        </h1>
                        <p className="text-slate-400 font-dm text-2xl md:text-3xl max-w-2xl mx-auto mb-16 leading-relaxed">
                            Hard-won insights from the trenches of modern data architecture. 
                        </p>
                        <motion.div 
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="text-gold flex flex-col items-center gap-4 cursor-pointer"
                            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                        >
                            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.4em]">Scroll to Decode</span>
                            <ChevronDown size={24} />
                        </motion.div>
                    </FadeUp>
                </div>
            </section>

            {/* ─── THE WATERFALL: ARTICLE REVEAL ───────────── */}
            <section className="py-20 md:py-40 bg-slate-50 relative">
                <div className="container-content">
                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                        {posts.map((post, i) => (
                            <ArticleCard key={post.id} post={post} index={i} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── KNOWLEDGE GRAPH OVERVIEW ─────────────────── */}
            <section className="py-40 bg-white">
                <div className="container-content">
                    <div className="bg-navy rounded-[4rem] p-12 md:p-32 text-center relative overflow-hidden group shadow-3xl">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(196,160,82,0.15),transparent_60%)]" />
                        
                        <FadeUp>
                            <div className="mb-12 flex justify-center gap-8">
                                <div className="p-6 rounded-[2rem] bg-white/5 border border-white/10 text-gold hover:bg-gold/10 transition-colors">
                                    <Zap size={40} strokeWidth={1} />
                                </div>
                                <div className="p-6 rounded-[2rem] bg-white/5 border border-white/10 text-teal hover:bg-teal/10 transition-colors">
                                    <Lightbulb size={40} strokeWidth={1} />
                                </div>
                                <div className="p-6 rounded-[2rem] bg-white/5 border border-white/10 text-blue-400 hover:bg-blue-400/10 transition-colors">
                                    <PieChart size={40} strokeWidth={1} />
                                </div>
                            </div>
                            <h2 className="text-5xl md:text-8xl font-jakarta font-black text-white mb-12 tracking-tighter leading-[0.85]">
                                Subscribe to <br /><span className="text-gold">Signal.</span>
                            </h2>
                            <p className="text-slate-400 font-dm text-xl md:text-2xl max-w-2xl mx-auto mb-20 leading-relaxed">
                                Join 500+ data engineers and analytics leaders. No fluff, just production-ready architectural frameworks.
                            </p>
                            
                            <form className="max-w-xl mx-auto flex flex-col sm:flex-row gap-6">
                                <input 
                                    type="email" 
                                    placeholder="Enter your email" 
                                    className="flex-1 h-20 bg-white/5 border border-white/10 rounded-[1.5rem] px-8 text-white font-jakarta text-lg focus:outline-none focus:border-gold transition-colors"
                                />
                                <button className="h-20 px-12 bg-white text-navy font-jakarta font-black text-xl rounded-[1.5rem] hover:bg-gold hover:text-navy transition-all shadow-2xl">
                                    Join
                                </button>
                            </form>
                            <p className="text-slate-500 font-mono text-[10px] mt-8 uppercase tracking-widest font-bold">Monthly Signal • Zero Spam • Unsubscribe Anytime</p>
                        </FadeUp>
                    </div>
                </div>
            </section>
        </main>
    )
}
