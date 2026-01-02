import { useRef, useEffect, useState } from 'react';

function AnimatedWaveDivider({ fillColor = 'cream', flip = false, className = '' }) {
    const waveRef = useRef(null);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (waveRef.current) {
                const rect = waveRef.current.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                // Calculate how much the wave is visible in viewport
                const visibleRatio = 1 - (rect.top / windowHeight);

                // Create smooth wave animation based on scroll position
                const newOffset = visibleRatio * 100;
                setOffset(newOffset);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial call

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const colorMap = {
        'cream': '#F0EDE6',
        'cream-dark': '#E5E1D8',
        'charcoal': '#1D1D1B',
    };

    const fillColorHex = colorMap[fillColor] || colorMap.cream;

    return (
        <div
            ref={waveRef}
            className={`animated-wave-divider ${flip ? 'animated-wave-divider--flip' : ''} ${className}`}
        >
            <svg
                viewBox="0 0 1440 120"
                preserveAspectRatio="none"
                style={{
                    transform: `translateX(${-offset * 0.5}px)`,
                    transition: 'transform 0.1s ease-out'
                }}
            >
                {/* Multiple wave layers for depth effect */}
                <path
                    d={`M0,${60 + Math.sin(offset * 0.02) * 10} 
                        C${360 + offset * 0.5},${20 + Math.sin(offset * 0.03) * 15} 
                        ${720 - offset * 0.3},${100 - Math.sin(offset * 0.02) * 10} 
                        ${1080 + offset * 0.2},${40 + Math.sin(offset * 0.025) * 12} 
                        C${1260},${80} 1440,${60 + Math.sin(offset * 0.015) * 8} 1440,${60 + Math.sin(offset * 0.015) * 8} 
                        L1440,120 L0,120 Z`}
                    fill={fillColorHex}
                    opacity="0.4"
                />
                <path
                    d={`M0,${70 + Math.sin(offset * 0.025) * 8} 
                        C${320 + offset * 0.4},${30 + Math.sin(offset * 0.02) * 12} 
                        ${640 - offset * 0.25},${90 - Math.sin(offset * 0.03) * 8} 
                        ${960 + offset * 0.3},${50 + Math.sin(offset * 0.02) * 10} 
                        C${1200},${70} 1440,${60 + Math.sin(offset * 0.02) * 6} 1440,${60 + Math.sin(offset * 0.02) * 6} 
                        L1440,120 L0,120 Z`}
                    fill={fillColorHex}
                    opacity="0.6"
                />
                <path
                    d={`M0,${80 + Math.sin(offset * 0.03) * 5} 
                        C${280 + offset * 0.3},${50 + Math.sin(offset * 0.025) * 8} 
                        ${560 - offset * 0.2},${95 - Math.sin(offset * 0.02) * 6} 
                        ${840 + offset * 0.25},${60 + Math.sin(offset * 0.03) * 7} 
                        C${1120},${85} 1440,${75 + Math.sin(offset * 0.025) * 4} 1440,${75 + Math.sin(offset * 0.025) * 4} 
                        L1440,120 L0,120 Z`}
                    fill={fillColorHex}
                />
            </svg>
        </div>
    );
}

export default AnimatedWaveDivider;
