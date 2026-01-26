import parse from 'html-react-parser';
import { cn } from '@/lib/utils';
import { IProject } from '@/types';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import { useRef } from 'react';

interface Props {
    index: number;
    project: IProject;
    selectedProject: string | null;
    onMouseEnter: (_slug: string) => void;
}

gsap.registerPlugin(useGSAP);

const Project = ({ index, project, selectedProject, onMouseEnter }: Props) => {
    const externalLinkSVGRef = useRef<SVGSVGElement>(null);

    const { context, contextSafe } = useGSAP(() => {}, {
        scope: externalLinkSVGRef,
        revertOnUpdate: true,
    });

    const handleMouseEnter = contextSafe?.(() => {
        onMouseEnter(project.slug);

        const arrowLine = externalLinkSVGRef.current?.querySelector(
            '#arrow-line',
        ) as SVGPathElement;
        const arrowCurb = externalLinkSVGRef.current?.querySelector(
            '#arrow-curb',
        ) as SVGPathElement;
        const box = externalLinkSVGRef.current?.querySelector(
            '#box',
        ) as SVGPathElement;

        if (box && arrowLine && arrowCurb) {
            gsap.set(box, {
                opacity: 0,
                strokeDasharray: box?.getTotalLength(),
                strokeDashoffset: box?.getTotalLength(),
            });
            gsap.set(arrowLine, {
                opacity: 0,
                strokeDasharray: arrowLine?.getTotalLength(),
                strokeDashoffset: arrowLine?.getTotalLength(),
            });
            gsap.set(arrowCurb, {
                opacity: 0,
                strokeDasharray: arrowCurb?.getTotalLength(),
                strokeDashoffset: arrowCurb?.getTotalLength(),
            });

            const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
            tl.to(externalLinkSVGRef.current, {
                autoAlpha: 1,
            })
                .to(box, {
                    opacity: 1,
                    strokeDashoffset: 0,
                })
                .to(
                    arrowLine,
                    {
                        opacity: 1,
                        strokeDashoffset: 0,
                    },
                    '<0.2',
                )
                .to(arrowCurb, {
                    opacity: 1,
                    strokeDashoffset: 0,
                })
                .to(
                    externalLinkSVGRef.current,
                    {
                        autoAlpha: 0,
                    },
                    '+=1',
                );
        }
    });

    const handleMouseLeave = contextSafe?.(() => {
        context.kill();
    });

    return (
        <div
            className="project-item group leading-none py-5 md:border-b first:!pt-0 last:pb-0 last:border-none md:group-hover/projects:opacity-30 md:hover:!opacity-100 transition-all"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {selectedProject === null && (
                <Image
                    src={project.thumbnail}
                    alt="Project"
                    width="300"
                    height="200"
                    className={cn(
                        'w-full object-cover mb-6 aspect-[3/2] object-top',
                    )}
                    key={project.slug}
                    loading="lazy"
                />
            )}
            <div className="flex gap-2 md:gap-5">
                <div className="font-anton text-muted-foreground">
                    _{(index + 1).toString().padStart(2, '0')}.
                </div>
                <div className="flex-1">
                    <div className="flex items-start gap-4 mb-3">
                        <h4 className="text-4xl xs:text-6xl flex gap-4 font-anton transition-all duration-700 bg-gradient-to-r from-primary to-foreground from-[50%] to-[50%] bg-[length:200%] bg-right bg-clip-text text-transparent group-hover:bg-left">
                            {project.title}
                        </h4>
                        <div className="flex gap-2 items-center mt-2">
                            {project.liveUrl && (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className="hover:text-primary transition-colors"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <ExternalLink size={24} />
                                </a>
                            )}
                            {project.sourceCode && (
                                <a
                                    href={project.sourceCode}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className="hover:text-primary transition-colors"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <Github size={24} />
                                </a>
                            )}
                        </div>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-3 text-muted-foreground text-xs mb-4">
                        {project.techStack
                            .slice(0, 3)
                            .map((tech, idx, stackArr) => (
                                <div
                                    className="gap-3 flex items-center"
                                    key={tech}
                                >
                                    <span className="">{tech}</span>
                                    {idx !== stackArr.length - 1 && (
                                        <span className="inline-block size-2 rounded-full bg-background-light"></span>
                                    )}
                                </div>
                            ))}
                    </div>
                    <div className="text-sm text-muted-foreground markdown-text mt-4">
                        {parse(project.description)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;
