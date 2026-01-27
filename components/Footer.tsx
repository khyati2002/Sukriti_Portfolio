import { GENERAL_INFO } from '@/lib/data';
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import SectionTitle from './SectionTitle';
import Button from './Button';

const HashnodeIcon = () => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        className="w-6 h-6 fill-current"
    >
        <path d="M22.351 8.019l-6.37-6.37a5.63 5.63 0 0 0-7.962 0l-6.37 6.37a5.63 5.63 0 0 0 0 7.962l6.37 6.37a5.63 5.63 0 0 0 7.962 0l6.37-6.37a5.63 5.63 0 0 0 0-7.962zM12 15.953a3.953 3.953 0 1 1 0-7.906 3.953 3.953 0 0 1 0 7.906z"/>
    </svg>
);

const LeetCodeIcon = () => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        className="w-6 h-6 fill-current"
    >
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.540.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
    </svg>
);

const Footer = () => {
    const enhancedSocialLinks = [
        {
            name: 'GitHub',
            href: 'https://github.com/Sukriti-m',
            icon: Github,
            description: 'View my projects & contributions',
        },
        {
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/in/sukriti-maurya-5248421b0',
            icon: Linkedin,
            description: 'Connect professionally',
        },
        {
            name: 'LeetCode',
            href: 'https://leetcode.com/Sukriti-m',
            icon: LeetCodeIcon,
            description: 'Check my problem-solving skills',
        },
        {
            name: 'Hashnode',
            href: 'https://sukritim.hashnode.dev', 
            icon: HashnodeIcon,
            description: 'Read my technical articles',
        },
    ];

    return (
        <footer className="pt-20 pb-10 border-border" id="contact">
            <div className="container">
                <SectionTitle title="Connect" />
                                {/* <div className="mb-12 md:mb-16">
                    <h2 className="text-4xl md:text-5xl font-anton uppercase leading-none">
                        <span className="text-foreground">Get In Touch</span>
                        <span className="text-primary">.</span>
                    </h2>
                    <div className="h-[2px] w-20 bg-primary mt-2"></div>
                </div> */}
                {/* Social Links Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
                    {enhancedSocialLinks.map((social) => (
                        <a
                            key={social.name}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative p-5 md:p-6 border border-border rounded-xl bg-background hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                        >
                            <div className="flex flex-col">
                                {/* Icon */}
                                <div className="mb-4">
                                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg border border-border bg-background group-hover:border-primary/50 group-hover:text-primary text-muted-foreground transition-all duration-300">
                                        {social.name === 'GitHub' || social.name === 'LinkedIn' ? (
                                            <social.icon className="w-6 h-6" />
                                        ) : (
                                            <social.icon />
                                        )}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <div className="flex items-center justify-between mb-1">
                                        <h3 className="text-lg md:text-xl font-bold text-foreground">
                                            {social.name}
                                        </h3>
                                        <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                                    </div>
                                    <p className="text-sm text-muted-foreground">
                                        {social.description}
                                    </p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Quick Message Section */}
                <div className="border border-border rounded-xl p-6 md:p-8 text-center bg-background/30 backdrop-blur-sm">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-border mb-4 text-muted-foreground">
                        <Mail className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-anton mb-2">
                        Let&apos;s Work Together
                    </h3>
                    <p className="text-muted-foreground mb-6 max-w-md mx-auto text-sm md:text-base">
                        Have a project in mind or just want to chat about tech? 
                        I&apos;m always open to discussing new opportunities.
                    </p>
                    <div className="flex justify-center">
                        <Button
                            as="link"
                            href={`mailto:${GENERAL_INFO.email}?subject=${encodeURIComponent(GENERAL_INFO.emailSubject)}&body=${encodeURIComponent(GENERAL_INFO.emailBody)}`}
                            variant="primary"
                            className="flex items-center gap-2 px-8 py-3"
                        >
                            Send Email
                        </Button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
