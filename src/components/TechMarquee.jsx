const tools = [
    'ClickHouse', 'dbt', 'Apache Airflow', 'Power BI', 'Airbyte',
    'SQL Server', 'Python', 'Prometheus', 'Grafana', 'OpenMetadata',
    'Azure', 'DAX', 'Power Query', 'SSAS', 'Medallion Architecture',
    'ClickHouse', 'dbt', 'Apache Airflow', 'Power BI', 'Airbyte',
    'SQL Server', 'Python', 'Prometheus', 'Grafana', 'OpenMetadata',
    'Azure', 'DAX', 'Power Query', 'SSAS', 'Medallion Architecture',
]

export default function TechMarquee() {
    return (
        <div className="overflow-hidden py-4 relative">
            <div className="flex gap-4 animate-marquee whitespace-nowrap">
                {tools.map((tool, i) => (
                    <span
                        key={i}
                        className="inline-flex items-center gap-2 bg-navy-light border border-white/10 text-teal font-mono text-sm px-4 py-2 rounded-full shrink-0"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-teal inline-block" />
                        {tool}
                    </span>
                ))}
            </div>
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent pointer-events-none" />
        </div>
    )
}
