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
];

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const isClickScrolling = useRef(false);

    useEffect(() => {
        const handleScroll = () => {
            // Don't update active section if user just clicked a nav link
            if (isClickScrolling.current) return;

            const sections = NAV_LINKS.map((link) => ({
                id: link.href.substring(1),
                href: link.href,
            }));

            const scrollPosition = window.scrollY + 120; // Account for navbar height + some offset

            // Find the section that is currently in view
            let currentSection = sections[0].href; // Default to first section

            // Check sections from bottom to top
            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i].id);
                if (section) {
                    const sectionTop = section.offsetTop;
                    
                    // If scroll position has passed this section's top, this is the active section
                    if (scrollPosition >= sectionTop) {
                        currentSection = sections[i].href;
                        break;
                    }
                }
            }

            setActiveSection(currentSection);
        };

        // Use requestAnimationFrame for smoother scroll detection
        let ticking = false;
        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        handleScroll(); // Initial check

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        // Set active section immediately when clicking
        setActiveSection(href);
        
        // Prevent scroll listener from overriding our manual selection
        isClickScrolling.current = true;
        
        const element = document.querySelector(href);
        if (element) {
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - 80; // 80px for navbar height

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
            setIsMobileMenuOpen(false);
            
            // Re-enable scroll listener after smooth scroll completes
            setTimeout(() => {
                isClickScrolling.current = false;
            }, 1000); // Adjust timing based on your scroll duration
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
                    <div className="hidden md:flex items-center gap-10">
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
