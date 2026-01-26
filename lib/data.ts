import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'sukritimaurya.fzd@gmail.com',
    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Sukriti, I am reaching out to you because...',
    resume: 'https://drive.google.com/file/d/1zBGhuNq5NCWqWxlDh_jTy0bKwxM-NIbN/view?usp=drivesdk',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/sukriti-m' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/sukriti-maurya-5248421b0' },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },
        {
            name: 'TypeScript',
            icon: '/logo/ts.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'Redux',
            icon: '/logo/redux.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'Sass',
            icon: '/logo/sass.png',
        },
        {
            name: 'Bootstrap',
            icon: '/logo/bootstrap.svg',
        },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
    ],
    database: [
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        }
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'AWS',
            icon: '/logo/aws.png',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Admin Insights',
        slug: 'admin-insights',
        liveUrl: 'https://admin-insights-three.vercel.app/',
        sourceCode: 'https://github.com/Sukriti-m/Admin_Insights',
        year: 2024,
        description: `
      A full-featured admin dashboard designed for real-world admin workflows, featuring comprehensive  <br/>user management, task tracking, analytics, chatfunctionality, and configurable system settings.
      `,
        techStack: [
            'ReactJS',
            'TypeScript',
            'TanStack Router',
            'Shadcn UI',
            'Tailwind CSS',
            'Zustand',
        ],
        thumbnail: '/projects/thumbnail/devLinks.jpg',
        longThumbnail: '/projects/long/devLinks.jpg',
        images: [
            '/projects/images/devLinks-1.png',
            '/projects/images/devLinks-2.png',
            '/projects/images/devLinks-3.png',
        ],
    },
    {
        title: 'ZenZone',
        slug: 'zenzone',
        liveUrl: 'https://zenzone-six.vercel.app/',
        sourceCode: 'https://github.com/Sukriti-m/zenzone',
        year: 2024,
        description: `
      An immersive productivity and focus application featuring customizable digital workspaces with 30+<br/>  high-resolution video backgrounds and ambient soundscapes. Designed to enhance user engagement and <br/> productivity through a beautiful, distraction-free environment.
      `,
        techStack: [
            'ReactJS',
            'Redux',
            'React Router',
            'Tailwind CSS',
            'Axios',
            'Swiper',
            'React Icons',
        ],
        thumbnail: '/projects/thumbnail/epikcart.jpg',
        longThumbnail: '/projects/long/epikcart.jpg',
        images: [
            '/projects/images/epikcart-1.png',
            '/projects/images/epikcart-2.png',
            '/projects/images/epikcart-3.png',
        ],
    },
    {
        title: 'Exam Portal',
        slug: 'exam-portal',
        sourceCode: 'https://github.com/Sukriti-m/exam-portal-2.0',
        year: 2024,
        description: `
      Developed a full-stack exam platform used by 400 students for recruitment assessments, supporting <br/> end-to-end test workflows.
      `,
        techStack: [
            'ReactJS',
            'NodeJS',
            'ExpressJS',
            'MongoDB',
            'Mongoose',
        ],
        thumbnail: '/projects/thumbnail/devLinks.jpg',
        longThumbnail: '/projects/long/devLinks.jpg',
        images: [
            '/projects/images/devLinks-1.png',
            '/projects/images/devLinks-2.png',
            '/projects/images/devLinks-3.png',
        ],
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Software Engineer',
        company: 'Salescode.ai',
        location: 'Gurugram, India',
        duration: 'Oct 2024 – Present',
        achievements: [
            'Owned and implemented an intuitive and responsive UI for Claims Service in the Distributor Management System (DMS), streamlining the claim submission process and improving user experience, resulting in a 25% increase in usage.',
            'Developed frontend architecture for multi-level claim approval using React Hooks, reusable components, form validations, state management, and role-based UI flows.',
            'Integrated complex backend workflows (approval hierarchy, parallel approvals, status transitions) into the UI via custom hooks, context/state management, and optimized API consumption.',
            'Developed the Loyalty Dashboard, enabling admins to configure tasks, thresholds, and reward values with real-time validations and API-driven dynamic rendering.',
            'Built visual analytics dashboards using Chart.js to display points earned, distributor breakdowns, and performance trends, improving business reporting efficiency by 45% and reducing manual spreadsheet work by 80%.',
        ],
        technologies: ['ReactJS', 'TypeScript', 'Redux', 'REST APIs', 'ChartJS'],
    },
    {
        title: 'Quality Assurance Engineer Intern',
        company: 'Amazon',
        location: 'Chennai, India',
        duration: 'Jan 2024 – Jun 2024',
        achievements: [
            'Collaborated with the Device OS team to execute and debug tests across multiple Bluetooth profiles on Alexa devices, ensuring high performance and reliability.',
            'Automated 30+ test cases for the Bluetooth MAP (Message Access Profile), reducing manual testing effort by 75% and increasing overall testing efficiency by 40%.',
            'Created a comprehensive test plan with 56 functional and non-functional test cases for an internal AI tool, ensuring robust coverage of new features and workflows.',
        ],
        technologies: ['Python', 'Automation Tools', 'Linux'],
    },
];
