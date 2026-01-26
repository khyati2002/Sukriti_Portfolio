'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';

gsap.registerPlugin(useGSAP);

const CustomCursor = () => {
    const svgRef = useRef<SVGSVGElement>(null);
    const [isEnabled, setIsEnabled] = useState(false);

    useEffect(() => {
        const checkWidth = () => {
            setIsEnabled(window.innerWidth >= 768);
        };

        checkWidth();
        window.addEventListener('resize', checkWidth);

        return () => {
            window.removeEventListener('resize', checkWidth);
        };
    }, []);

    useGSAP((context, contextSafe) => {
        if (!isEnabled || !svgRef.current) return;

        const handleMouseMove = contextSafe?.((e: MouseEvent) => {
            if (!svgRef.current) return;

            const { clientX, clientY } = e;

            // Check if mouse is within the document bounds
            if (
                clientX < 0 ||
                clientY < 0 ||
                clientX > document.documentElement.clientWidth ||
                clientY > document.documentElement.clientHeight
            ) {
                gsap.to(svgRef.current, {
                    opacity: 0,
                    duration: 0.2,
                });
                return;
            }

            gsap.to(svgRef.current, {
                x: clientX,
                y: clientY,
                ease: 'power2.out',
                duration: 0.25,
                opacity: 1,
            });
        }) as any;

        const handleMouseLeave = contextSafe?.(() => {
            if (!svgRef.current) return;
            gsap.to(svgRef.current, {
                opacity: 0,
                duration: 0.2,
            });
        }) as any;

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, { scope: svgRef, dependencies: [isEnabled] });

    if (!isEnabled) return null;

    return (
        <svg
            width="27"
            height="30"
            viewBox="0 0 27 30"
            className="fixed top-0 left-0 opacity-0 z-[50] pointer-events-none"
            fill="none"
            id="cursor"
            strokeWidth="2"
            xmlns="http://www.w3.org/2000/svg"
            ref={svgRef}
        >
            <path
                d="M20.0995 11.0797L3.72518 1.13204C2.28687 0.258253 0.478228 1.44326 0.704999 3.11083L3.28667 22.0953C3.58333 24.2768 7.33319 24.6415 8.3792 22.7043C9.5038 20.6215 10.8639 18.7382 12.43 17.7122C13.996 16.6861 16.2658 16.1911 18.6244 15.9918C20.8181 15.8063 21.9811 12.2227 20.0995 11.0797Z"
                className="fill-foreground stroke-background/50"
            />
        </svg>
    );
};

export default CustomCursor;
