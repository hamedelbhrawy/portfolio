import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function MouseSpotlight() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring physics for the spotlight following the cursor
    const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20, mass: 0.5 });
    const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20, mass: 0.5 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <motion.div
            className="pointer-events-none fixed inset-0 z-50 mix-blend-screen"
            style={{
                background: useMotionTemplate`
                    radial-gradient(
                        600px circle at ${smoothX}px ${smoothY}px,
                        rgba(197, 165, 90, 0.08),
                        transparent 80%
                    )
                `,
            }}
        />
    );
}
