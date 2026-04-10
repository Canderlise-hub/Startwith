import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring, useTransform, motion } from "framer-motion";

interface AnimatedCounterProps {
    value: number;
    prefix?: string;
    suffix?: string;
}

export function AnimatedCounter({ value, prefix = "", suffix = "" }: AnimatedCounterProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    // Create a motion value that starts at 0
    const count = useMotionValue(0);

    // Spring config for a smooth, natural counter feel
    const springCount = useSpring(count, {
        stiffness: 70,
        damping: 20,
        mass: 1,
    });

    // Transform the spring numeric value into a formatted string
    const displayValue = useTransform(springCount, (latest) => {
        return `${prefix}${Intl.NumberFormat("en-US").format(Math.round(latest))}${suffix}`;
    });

    useEffect(() => {
        if (isInView) {
            count.set(value);
        }
    }, [count, isInView, value]);

    return <motion.span ref={ref}>{displayValue}</motion.span>;
}
