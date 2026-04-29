import { Education, Experience, Hobby, Language, PersonalDetails, Skill } from './type';

export const personalDetailsPreset: PersonalDetails = {
    fullName: 'Aymane Mehdi',
    email: 'AymaneMehdi.it@gmail.com',
    phone: '+212 652326871',
    address: 'Casablanca, Morocco',
    photoUrl: '/profile.png',
    postSeeking: 'Full-Stack Developer',
    description: 'Full-Stack & AI Developer specializing in React, TypeScript, and scalable UI architecture. I build high-performance, user-centric web applications with a strong focus on clean code, reusable components, and exceptional UX. Experienced with MERN stack, Next.js, and AI integrations.'
};

export const experiencesPreset: Experience[] = [
    {
        id: 'uuid-1',
        jobTitle: 'Front-End React Coach',
        companyName: 'Algorium Academy',
        startDate: '2025-10-01',
        endDate: 'Present',
        description: 'Teaching React.js, JavaScript, and modern front-end tools. Helping students build real projects and develop problem-solving and teamwork skills.'
    },
    {
        id: 'uuid-2',
        jobTitle: 'Full-Stack Developer & AI Developer',
        companyName: 'XAI',
        startDate: '2025-08-01',
        endDate: '2025-09-01',
        description: 'Built AI-driven applications including X-VibeCoder. Contributed to X-LMS platform with full-stack features and AI-powered tools.'
    },
    {
        id: 'uuid-3',
        jobTitle: 'Full-Stack Developer',
        companyName: 'FeizhouCom',
        startDate: '2024-04-01',
        endDate: '2024-09-01',
        description: 'Worked with Next.js and MERN stack. Focused on performance, SEO, and scalable architecture for production applications.'
    },
    {
        id: 'uuid-4',
        jobTitle: 'MERN-Stack Developer',
        companyName: 'Ark-x Talent Solutions',
        startDate: '2024-02-01',
        endDate: '2024-06-01',
        description: 'Built full-stack applications using MongoDB, Express, React, and Node.js. Worked on real-world projects with senior developers.'
    }
];

export const educationsPreset: Education[] = [
    {
        id: 'uuid-5',
        degree: 'Bootcamp MERN Stack Developer',
        school: 'JobInTech',
        startDate: '2024-02-01',
        endDate: '2024-06-01',
        description: 'Full-stack web development training focused on MERN technologies.'
    },
    {
        id: 'uuid-6',
        degree: 'Specialized Technician in Software Development',
        school: 'OFPPT',
        startDate: '2019-07-01',
        endDate: '2021-07-01',
        description: 'Comprehensive training in software, web, and mobile development including C, Java, SQL, and web technologies.'
    }
];

export const skillsPreset: Skill[] = [
    { id: 'uuid-7', name: 'React.js' },
    { id: 'uuid-8', name: 'Next.js' },
    { id: 'uuid-9', name: 'TypeScript' },
    { id: 'uuid-10', name: 'Node.js' },
    { id: 'uuid-11', name: 'MongoDB' },
    { id: 'uuid-12', name: 'Express.js' },
    { id: 'uuid-13', name: 'Tailwind CSS' },
    { id: 'uuid-14', name: 'GraphQL' },
    { id: 'uuid-15', name: 'Prisma ORM' },
    { id: 'uuid-16', name: 'JWT' },
    { id: 'uuid-17', name: 'SEO' },
    { id: 'uuid-18', name: 'Git' }
];

export const languagesPreset: Language[] = [
    { id: 'uuid-19', language: 'Arabic', proficiency: 'Native' },
    { id: 'uuid-20', language: 'English', proficiency: 'Professional' }
];

export const hobbiesPreset: Hobby[] = [
    { id: 'uuid-21', name: 'AI Tools' },
    { id: 'uuid-22', name: 'Vibe Coding' }
];