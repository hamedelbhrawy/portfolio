export default function PageHero({ title, subtitle, height = '60vh', children }) {
    return (
        <section
            className="relative flex items-center hero-gradient grid-pattern"
            style={{ minHeight: height }}
        >
            <div className="container-content pt-24 pb-16 w-full">
                <div className="max-w-3xl">
                    {children}
                    <h1 className="font-jakarta font-bold text-4xl md:text-5xl text-white mb-4 leading-tight">
                        {title}
                    </h1>
                    {subtitle && (
                        <p className="font-dm text-lg text-slate-muted max-w-xl leading-relaxed">
                            {subtitle}
                        </p>
                    )}
                </div>
            </div>
            {/* Decorative corner lines */}
            <div className="absolute bottom-0 right-0 w-64 h-64 opacity-10">
                <svg viewBox="0 0 200 200" className="w-full h-full text-gold">
                    <circle cx="150" cy="150" r="120" fill="none" stroke="currentColor" strokeWidth="1" />
                    <circle cx="150" cy="150" r="80" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    <circle cx="150" cy="150" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </svg>
            </div>
        </section>
    )
}
