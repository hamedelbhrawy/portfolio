import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import PageHero from '../components/PageHero';
import FadeUp from '../components/FadeUp';

// Sample blog post data. In a real app, you would fetch this from an API or CMS.
const blogPosts = {
    'clickhouse-vs-sql-server-migration': {
        title: 'ClickHouse vs. SQL Server: A Real Migration Story (259x Faster)',
        date: 'Jan 2025',
        readTime: '8 min',
        category: 'Platform Architecture',
        content: `
# ClickHouse vs. SQL Server: A Real Migration Story (259x Faster)

The technical and organizational story behind migrating from SQL Server to ClickHouse — and what the 45-minute to 10-second journey actually looked like from inside.

## The Problem with Traditional OLTP for Analytics

SQL Server is an incredible operational database. But when you start throwing billions of rows of analytical queries at it, things grind to a halt. Our nightly batch jobs were taking over 45 minutes to aggregate sales data across regions. 

## Enter ClickHouse

ClickHouse is a columnar database designed from the ground up for extreme analytical performance. By migrating our reporting views to ClickHouse, we saw query times drop from 45 minutes to under 10 seconds. 

### How We Did It
1. **CDC (Change Data Capture):** We implemented Debezium to stream changes from SQL Server.
2. **Kafka:** The streams landed in Kafka topics.
3. **ClickHouse Kafka Engine:** We ingested directly from Kafka into ClickHouse MergeTree tables.

## The Results
- **259x Performance Improvement**
- **Real-time Dashboards** replacing overnight batch reports.
- **Lower Infrastructure Costs** due to ClickHouse's superior data compression.
`
    },
    'customer-360-saudi-retail': {
        title: 'Building a Customer 360 in Saudi Arabia\'s Dual-Calendar Retail Market',
        date: 'Dec 2024',
        readTime: '7 min',
        category: 'Analytics Leadership',
        content: `
# Building a Customer 360 in Saudi Arabia's Dual-Calendar Retail Market

Most customer analytics tutorials ignore the Hijri calendar. In Saudi retail, that's a fatal mistake. Here's how we unified 2.7M records AND respected the Islamic calendar.

## The Calendar Challenge

In the GCC region, businesses often operate on the Gregorian calendar, but significant seasonal events (like Ramadan and Hajj) and local consumer behavior are entirely tied to the Hijri (Islamic lunar) calendar. 

If your Customer 360 model only understands Gregorian dates, your Year-over-Year calculations for Q2 will be wildly inaccurate because Ramadan shifts by roughly 11 days every year.

## The Solution
We implemented a dynamic dual-calendar dimensional model:
- **Fact Tables** recorded the raw UTC timestamp.
- A customized **Date Dimension (DimDate)** contained columns for both Gregorian \`Calendar_Month\` and Hijri \`Hijri_Month\`.
- **DAX Intelligence:** We wrote custom DAX patterns that could dynamically shift the comparison period based on the Hijri month rather than the standard \`SAMEPERIODLASTYEAR()\`.

This allowed the executive team to accurately compare "Ramadan this year" vs "Ramadan last year", unlocking massive promotional value.
`
    },
    '10-dax-patterns-production-report': {
        title: 'The 10 DAX Patterns I Use in Every Production Report',
        date: 'Nov 2024',
        readTime: '10 min',
        category: 'DAX & Power BI',
        content: `
# The 10 DAX Patterns I Use in Every Production Report

353 DAX measures across 4 companies taught me that 90% of business questions can be answered with 10 core patterns. Here they are, with real examples.

## Pattern 1: Safe Division (DIVIDE)
Never use the \`/\` operator. Always use \`DIVIDE()\` to gracefully handle divide-by-zero errors.
\`\`\`dax
Margin % = DIVIDE([Total Margin], [Total Sales], 0)
\`\`\`

## Pattern 2: Calculating Over Previous Periods
Stop writing complex nested filters. Use \`CALCULATE\` with Time Intelligence.
\`\`\`dax
Sales YTD = CALCULATE([Total Sales], DATESYTD('Date'[Date]))
\`\`\`

## Pattern 3: Ignoring specific cross-filters (REMOVEFILTERS)
When calculating a percentage of a parent category, you need to remove the filter on the child.
\`\`\`dax
Brand Share % = 
VAR TotalCategorySales = CALCULATE([Total Sales], REMOVEFILTERS('Product'[Brand]))
RETURN DIVIDE([Total Sales], TotalCategorySales)
\`\`\`

*(The remaining 7 patterns are covered in the full download resource).*
`
    }
};

export default function BlogPost() {
    const { slug } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate fetching data
        setTimeout(() => {
            setPost(blogPosts[slug]);
            setLoading(false);
        }, 500);
    }, [slug]);

    if (loading) {
        return (
            <main className="min-h-screen flex items-center justify-center">
                <div className="w-8 h-8 rounded-full border-2 border-gold border-t-transparent animate-spin"></div>
            </main>
        );
    }

    if (!post) {
        return (
            <main className="min-h-screen flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-4xl font-bold font-jakarta text-white mb-4">Post Not Found</h1>
                <p className="text-slate-400 mb-8">The article you're looking for doesn't exist.</p>
                <Link to="/blog" className="btn-primary">
                    <ArrowLeft size={16} className="mr-2" /> Back to Blog
                </Link>
            </main>
        );
    }

    return (
        <main>
            <PageHero
                title={post.title}
                subtitle={post.category}
            />

            <section className="section-light">
                <div className="container-content">
                    <FadeUp>
                        <div className="max-w-3xl mx-auto">
                            <Link to="/blog" className="inline-flex items-center text-gold font-medium hover:gap-2 transition-all duration-300 mb-8">
                                <ArrowLeft size={16} className="mr-2" /> Back to all articles
                            </Link>

                            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm text-charcoal/60 font-dm mb-10 pb-10 border-b border-slate-200">
                                <div className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-full">
                                    <Tag size={14} className="text-gold" />
                                    <span>{post.category}</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <Calendar size={14} />
                                    <span>{post.date}</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <Clock size={14} />
                                    <span>{post.readTime}</span>
                                </div>
                            </div>

                            {/* Markdown Content */}
                            <div className="prose prose-lg prose-slate prose-invert max-w-none 
                prose-headings:font-jakarta prose-headings:font-bold prose-headings:text-navy
                prose-p:font-dm prose-p:text-charcoal/80 prose-p:leading-relaxed
                prose-a:text-gold hover:prose-a:text-gold-light prose-a:transition-colors
                prose-pre:bg-slate-900 prose-pre:border prose-pre:border-slate-800 prose-pre:rounded-xl
                prose-code:text-teal prose-code:bg-teal/10 prose-code:px-1 prose-code:py-0.5 prose-code:rounded">
                                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                    {post.content}
                                </ReactMarkdown>
                            </div>

                            {/* Author Bio Card */}
                            <div className="mt-16 bg-slate-soft p-8 rounded-2xl border border-slate-200 flex flex-col sm:flex-row gap-6 items-center sm:items-start">
                                <div className="w-20 h-20 rounded-full bg-slate-300 overflow-hidden shrink-0">
                                    <img src="/headshot.jpg" alt="Hamed Elbhrawy" className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h3 className="font-jakarta font-bold text-navy text-lg mb-2">Hamed Elbhrawy</h3>
                                    <p className="font-dm text-charcoal/70 mb-4 leading-relaxed">
                                        Senior Data Platform Architect & BI Strategy Leader. Writing about Medallion Architecture, ClickHouse optimization, and building scalable analytics infrastructure.
                                    </p>
                                    <a href="https://linkedin.com/in/hamedelbhrawy" target="_blank" rel="noopener noreferrer" className="text-gold font-medium hover:underline inline-flex items-center gap-1">
                                        Connect on LinkedIn
                                    </a>
                                </div>
                            </div>
                        </div>
                    </FadeUp>
                </div>
            </section>
        </main>
    );
}
