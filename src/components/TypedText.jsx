import { useEffect, useState } from 'react'

const texts = [
    'Data Platform Architect',
    'BI Strategy Leader',
    'Analytics Engineering Expert',
]

export default function TypedText() {
    const [index, setIndex] = useState(0)
    const [displayed, setDisplayed] = useState('')
    const [deleting, setDeleting] = useState(false)
    const [charIndex, setCharIndex] = useState(0)

    useEffect(() => {
        const current = texts[index]
        let timeout

        if (!deleting && charIndex <= current.length) {
            timeout = setTimeout(() => {
                setDisplayed(current.slice(0, charIndex))
                setCharIndex((c) => c + 1)
            }, 60)
        } else if (!deleting && charIndex > current.length) {
            timeout = setTimeout(() => setDeleting(true), 2000)
        } else if (deleting && charIndex > 0) {
            timeout = setTimeout(() => {
                setDisplayed(current.slice(0, charIndex - 1))
                setCharIndex((c) => c - 1)
            }, 35)
        } else if (deleting && charIndex === 0) {
            setDeleting(false)
            setIndex((i) => (i + 1) % texts.length)
        }

        return () => clearTimeout(timeout)
    }, [charIndex, deleting, index])

    return (
        <span className="text-gold font-jakarta font-semibold">
            {displayed}
            <span className="inline-block w-0.5 h-6 bg-gold ml-0.5 animate-pulse align-middle" />
        </span>
    )
}
