import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

export default function AnimatedCounter({ end, prefix = '', suffix = '', duration = 2 }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-50px' })
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (!isInView) return
        let startTime = null
        const endValue = parseFloat(end.toString().replace(/[^0-9.]/g, ''))

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp
            const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
            const eased = 1 - Math.pow(1 - progress, 3) // ease-out cubic
            const current = eased * endValue
            setCount(current)
            if (progress < 1) requestAnimationFrame(animate)
        }

        requestAnimationFrame(animate)
    }, [isInView, end, duration])

    const formatNumber = (val) => {
        const str = end.toString()
        if (str.includes('.')) {
            return val.toFixed(1)
        }
        return Math.floor(val).toLocaleString()
    }

    return (
        <span ref={ref} className="tabular-nums">
            {prefix}{formatNumber(count)}{suffix}
        </span>
    )
}
