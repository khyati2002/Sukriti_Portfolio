'use client';
import ArrowAnimation from '@/components/ArrowAnimation';
import Button from '@/components/Button';
import { GENERAL_INFO, SOCIAL_LINKS } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Banner = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    
    const HashnodeIcon = () => (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            className="w-7 h-7 fill-current"
            aria-hidden="true"
        >
            <path d="M22.351 8.019l-6.37-6.37a5.63 5.63 0 0 0-7.962 0l-6.37 6.37a5.63 5.63 0 0 0 0 7.962l6.37 6.37a5.63 5.63 0 0 0 7.962 0l6.37-6.37a5.63 5.63 0 0 0 0-7.962zM12 15.953a3.953 3.953 0 1 1 0-7.906 3.953 3.953 0 0 1 0 7.906z"/>
        </svg>
    );

    const LeetCodeIcon = () => (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            className="w-7 h-7 fill-current"
            aria-hidden="true"
        >
            <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
        </svg>
    );
    
    // move the content a little up on scroll
    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 70%',
                    end: 'bottom 10%',
                    scrub: 1,
                },
            });
            tl.fromTo(
                '.slide-up-and-fade',
                { y: 0 },
                { y: -150, opacity: 0, stagger: 0.02 },
            );
        },
        { scope: containerRef },
    );
    
    return (
        <section className="relative overflow-hidden" id="banner">
            <ArrowAnimation />
            <div
                className="container h-[100svh] min-h-[530px] max-md:pb-10 flex justify-between items-center max-md:flex-col"
                ref={containerRef}
            >
                <div className="max-md:grow max-md:flex flex-col justify-center items-start max-w-[544px]">
                    <h1 className="banner-title slide-up-and-fade leading-[.95] text-6xl sm:text-[80px] font-anton">
                        <span className="text-primary">FRONTEND</span>
                        <br /> <span className="ml-4">DEVELOPER</span>
                    </h1>
                    <p className="banner-description slide-up-and-fade mt-6 text-lg text-muted-foreground">
                        Hi! I&apos;m{' '}
                        <span className="font-medium text-foreground">
                            Sukriti
                        </span>
                        . Frontend Software Engineer with 1+ year of experience building scalable, customer-facing SaaS products. Experienced in owning features end-to-end, improving UX, and integrating complex backend workflows.
                    </p>
                    <div className="mt-9 flex gap-4 flex-wrap banner-button slide-up-and-fade">
                        <Button
                            as="link"
                            target="_blank"
                            rel="noopener noreferrer"
                            href={GENERAL_INFO.resume}
                            variant="primary"
                            className="flex items-center gap-2"
                        >
                            View Resume
                        </Button>
                        <Button
                            as="link"
                            href={`mailto:${GENERAL_INFO.email}?subject=${encodeURIComponent(GENERAL_INFO.emailSubject)}&body=${encodeURIComponent(GENERAL_INFO.emailBody)}`}
                            variant="no-color"
                            className="flex items-center gap-2 border bg-background hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                            Email Me
                        </Button>
                    </div>
                </div>
                
                {/* Social Links */}
                <div className="slide-up-and-fade flex gap-8 max-md:mt-8">
                    {SOCIAL_LINKS.map((social) => (
                        <a
                            key={social.name}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative flex items-center justify-center w-12 h-12 rounded-full border border-border bg-background/50 backdrop-blur-sm text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                            aria-label={social.name}
                        >
                            {/* Background glow effect on hover */}
                            <div className="absolute inset-0 rounded-full bg-primary/0 group-hover:bg-primary/10 transition-all duration-300" />
                            
                            {/* Icon container */}
                            <div className="relative z-10">
                                {social.name === 'LeetCode' ? (
                                    <LeetCodeIcon />
                                ) : social.name === 'Hashnode' ? (
                                    <HashnodeIcon />
                                ) : typeof social.icon === 'string' ? (
                                    <Image
                                        src={social.icon}
                                        alt={social.name}
                                        width={28}
                                        height={28}
                                        className="w-7 h-7 transition-transform duration-300 group-hover:scale-110"
                                    />
                                ) : (
                                    <social.icon 
                                        size={28} 
                                        className="transition-transform duration-300 group-hover:scale-110" 
                                    />
                                )}
                            </div>
                            
                            {/* Tooltip for desktop */}
                            <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 text-xs font-medium bg-popover text-popover-foreground rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                                {social.name}
                                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-popover rotate-45" />
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Banner;
