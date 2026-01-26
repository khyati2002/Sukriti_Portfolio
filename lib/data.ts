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
            name: 'GSAP',
            icon: '/logo/gsap.png',
        },
        {
            name: 'Framer Motion',
            icon: '/logo/framer-motion.png',
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
            name: 'NestJS',
            icon: '/logo/nest.svg',
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
            name: 'PostgreSQL',
            icon: '/logo/postgreSQL.png',
        },
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
        {
            name: 'Prisma',
            icon: '/logo/prisma.png',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
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
        year: 2024,
        description: `
      A full-featured admin dashboard designed for real-world admin workflows, featuring comprehensive user management, task tracking, analytics, chat functionality, and configurable system settings. <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li>👥 User Management: Complete user administration with search, filtering, and role-based access</li>
        <li>📊 Analytics Dashboard: Real-time data visualization and performance metrics</li>
        <li>💬 Chat System: Integrated messaging and communication features</li>
        <li>⚙️ System Settings: Configurable admin settings and preferences</li>
        <li>🔍 Advanced Data Management: Search, filtering, sorting, pagination, and bulk actions for efficient handling of large datasets</li>
        <li>🎨 Theme Customization: Fully customizable UI with authenticated access and robust error handling</li>
        <li>📱 Responsive Design: Fully responsive navigation optimized for all devices</li>
      </ul>
      `,
        role: `
      Full-Stack Developer <br/>
      Built the entire application from scratch:
      <ul>
        <li>✅ Frontend Architecture: Designed scalable and secure UI architecture with authenticated access</li>
        <li>🎨 UI Development: Implemented using ReactJS, TypeScript, TanStack Router, Shadcn UI, and Tailwind CSS</li>
        <li>🔄 State Management: Integrated Zustand for efficient state management</li>
        <li>📊 Data Management: Implemented advanced workflows including search, filtering, sorting, pagination, and bulk actions</li>
        <li>🛡️ Security: Built robust error handling and authentication systems</li>
        <li>🚀 Performance: Optimized for smooth performance with large datasets</li>
      </ul>
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
        year: 2024,
        description: `
      An immersive productivity and focus application featuring customizable digital workspaces with 30+ high-resolution video backgrounds and ambient soundscapes. Designed to enhance user engagement and productivity through a beautiful, distraction-free environment. <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li>🎬 30+ Video Backgrounds: High-resolution video backgrounds for immersive workspaces</li>
        <li>🎵 Ambient Soundscapes: Customizable audio environments for focus and relaxation</li>
        <li>⏱️ Pomodoro Timer: Built-in productivity timer for focused work sessions</li>
        <li>✅ Task Management: Comprehensive task tracking and management system</li>
        <li>🎨 Draggable UI Components: Interactive and customizable workspace elements</li>
        <li>🎛️ Media Controls: Full control over background videos and sounds</li>
        <li>💼 Workspace Personalization: Customize your digital workspace to match your preferences</li>
      </ul>
      `,
        role: `
      Frontend Developer <br/>
      Developed the entire application:
      <ul>
        <li>✅ Frontend Development: Built using ReactJS, Redux, React Router, and Tailwind CSS</li>
        <li>🎨 UI/UX Design: Created immersive and engaging user interface with smooth animations</li>
        <li>🔄 State Management: Implemented Redux for efficient state management across the application</li>
        <li>📱 Responsive Design: Engineered performance-optimized multi-page application with lazy loading</li>
        <li>⚡ Performance: Optimized asset handling and responsive layouts for smooth user experience</li>
        <li>🧩 Third-Party Integration: Integrated Axios for API calls, Swiper for carousels, and React Icons</li>
      </ul>
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
