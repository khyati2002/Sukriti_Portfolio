'use client';
import { cn } from '@/lib/utils';
import { useEffect, useState, useRef } from 'react';

const NAV_LINKS = [
    {
        name: 'Home',
        href: '#banner',
    },
    {
        name: 'Skills',
        href: '#my-stack',
    },
    {
        name: 'Experience',
        href: '#my-experience',
    },
    {
        name: 'Projects',
        href: '#selected-projects',
    },
    {
        name: 'Connect',
        href: '#contact',
    }
];

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('#banner');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const observerRef = useRef<IntersectionObserver | null>(null);
    const lastScrollY = useRef(0);

    useEffect(() => {
        // Create Intersection Observer
        observerRef.current = new IntersectionObserver(
            (entries) => {
                // Check if we're at the bottom of the page
                const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
                
                if (isAtBottom) {
                    setActiveSection('#contact');
                    return;
                }

                // Find the most visible section
                let mostVisible = { href: '#banner', ratio: 0 };
                
                entries.forEach((entry) => {
                    const sectionHref = `#${entry.target.id}`;
                    // Special handling for Connect section - activate with lower threshold
                    if (sectionHref === '#contact' && entry.intersectionRatio > 0.05) {
                        mostVisible = { href: sectionHref, ratio: 1 };
                        return;
                    }
                    
                    if (entry.intersectionRatio > mostVisible.ratio) {
                        mostVisible = { href: sectionHref, ratio: entry.intersectionRatio };
                    }
                });

                // Only update if we found a visible section
                if (mostVisible.ratio > 0) {
                    setActiveSection(mostVisible.href);
                }
            },
            {
                root: null,
                rootMargin: '-20% 0px -40% 0px', // Adjusted for better footer detection
                threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
            }
        );

        // Observe all sections
        NAV_LINKS.forEach((link) => {
            const sectionId = link.href.substring(1);
            const section = document.getElementById(sectionId);
            if (section && observerRef.current) {
                observerRef.current.observe(section);
            }
        });

        // Cleanup
        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, []);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        
        // Set active section immediately when clicking
        setActiveSection(href);
        
        const element = document.querySelector(href);
        if (element) {
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - 80;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-[50] bg-background/80 backdrop-blur-sm border-b border-border/50">
            <div className="container">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo/Brand */}
                    <div className="text-xl md:text-2xl font-anton">
                        <a
                            href="#banner"
                            onClick={(e) => handleClick(e, '#banner')}
                            className="hover:text-primary transition-colors"
                        >
                            Sukriti
                        </a>
                    </div>

                    {/* Navigation Links*/}
                    <div className="hidden md:flex items-center gap-8">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleClick(e, link.href)}
                                className={cn(
                                    'text-sm uppercase font-anton tracking-wider transition-colors relative py-2',
                                    {
                                        'text-primary': activeSection === link.href,
                                        'text-muted-foreground hover:text-foreground':
                                            activeSection !== link.href,
                                    },
                                )}
                            >
                                {link.name}
                                {activeSection === link.href && (
                                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                                )}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden flex flex-col gap-1.5 p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span
                            className={cn(
                                'w-6 h-0.5 bg-foreground transition-all duration-300',
                                {
                                    'rotate-45 translate-y-2': isMobileMenuOpen,
                                },
                            )}
                        />
                        <span
                            className={cn(
                                'w-6 h-0.5 bg-foreground transition-all duration-300',
                                {
                                    'opacity-0': isMobileMenuOpen,
                                },
                            )}
                        />
                        <span
                            className={cn(
                                'w-6 h-0.5 bg-foreground transition-all duration-300',
                                {
                                    '-rotate-45 -translate-y-2': isMobileMenuOpen,
                                },
                            )}
                        />
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={cn(
                        'md:hidden overflow-hidden transition-all duration-300',
                        {
                            'max-h-0': !isMobileMenuOpen,
                            'max-h-96 pb-4': isMobileMenuOpen,
                        },
                    )}
                >
                    <div className="flex flex-col gap-6 pt-4 border-t border-border">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleClick(e, link.href)}
                                className={cn(
                                    'text-sm uppercase font-anton tracking-wider transition-colors py-2',
                                    {
                                        'text-primary': activeSection === link.href,
                                        'text-muted-foreground hover:text-foreground':
                                            activeSection !== link.href,
                                    },
                                )}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
