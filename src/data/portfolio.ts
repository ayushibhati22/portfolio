export const personal = {
  name: 'Ayushi Bhati',
  title: 'Software Engineer',
  focus: 'Building software that works in the real world',
  tagline:
    'Final-year engineer with hands-on experience across backend, full-stack, and ML — currently shipping at Paytm. I love turning complex problems into clean, reliable software.',
  status: 'Final-year B.Tech · Graduating 2027',
  openTo: 'Software Engineering · Full-Stack · Backend · AI/ML',
  location: 'Faridabad, Haryana, India',
  email: 'ayushibhati22@gmail.com',
  phone: '+91 9205620702',
  linkedin: 'https://www.linkedin.com/in/ayushi-bhati-0769b6292',
  github: 'https://github.com/ayushibhati22',
  resumeUrl: '/Ayushi_Bhati_Resume.pdf',
}

export const roleInterests = [
  'Software Engineering',
  'Backend Development',
  'Full-Stack Development',
  'AI / ML Engineering',
  'Systems Programming',
  'Application Security',
  'DevOps & Cloud',
  'Data Engineering',
]

export const lookingFor = {
  headline: 'Open to opportunities',
  subline: 'Internships & full-time software roles · Graduating 2027',
  description:
    'I am actively looking for internships and full-time roles where I can build, ship, and grow. Open to backend, full-stack, systems, AI/ML, and security-adjacent software roles.',
}

export const aboutParagraphs = [
  'Dual-discipline engineer with a rare blend: Electronics Engineering depth (OS internals, networking, systems thinking) and Computer Engineering execution (backend architecture, distributed systems, production delivery).',
  'Currently at Paytm Payments Services, building distributed infrastructure that powers millions of daily transactions — with secure coding, API optimization, and CI/CD at scale.',
  'I don\'t just use frameworks — I\'ve built a multi-threaded HTTP forward proxy from scratch with worker pools, LRU caching, and RAII socket lifecycle management at the OS layer.',
  'Security isn\'t an afterthought: AES-GCM encryption, OAuth 2.0/JWT, RBAC, threat-alert logging, and secure input handling. CompTIA Security+ in progress · Microsoft Azure certified (AZ-900).',
  'I turn data into decisions — XGBoost pipelines on 265K+ records with SHAP explainability. Fast learner, sharp executor, ready for software roles where depth and delivery both matter.',
]

export const experience = [
  {
    role: 'Backend Development Intern',
    company: 'Paytm Payments Services Limited',
    shortCompany: 'Paytm',
    type: 'Fintech · Backend',
    location: 'Noida',
    period: 'June 2026 – Present',
    color: '#4a7fd4',
    accent: '#e8f0fa',
    highlights: [
      'Architecting distributed database infrastructure supporting millions of daily payment transactions',
      'Engineering chargeback and payment processing flows with secure coding standards and optimized REST APIs',
      'Shipping CI/CD pipelines and Docker-based deployments that accelerate release cycles',
      'Identifying and eliminating transaction bottlenecks through deep system design analysis',
    ],
  },
  {
    role: 'Frontend Developer Intern',
    company: 'Kredmint Technologies Pvt. Ltd.',
    shortCompany: 'Kredmint',
    type: 'Fintech · Frontend',
    location: 'Noida',
    period: 'June – July 2025',
    color: '#c4706a',
    accent: '#faf0ee',
    highlights: [
      'Delivered responsive, high-traffic UI for financial platforms used by real customers',
      'Integrated real-time REST APIs across product surfaces with zero-downtime deployment patterns',
      'Collaborated in agile sprints with peer code reviews and cross-functional stakeholders',
    ],
  },
]

export const skillGroups = [
  {
    title: 'Languages',
    skills: ['C++', 'Java', 'Python', 'C', 'JavaScript', 'TypeScript', 'SQL'],
    color: '#4a7fd4',
  },
  {
    title: 'Backend & Distributed Systems',
    skills: [
      'Multi-threaded Concurrency',
      'IPC',
      'Raw Socket Programming',
      'TCP/IP',
      'Spring Boot',
      'FastAPI',
      'Node.js',
      'Express.js',
      'REST APIs',
      'Microservices',
    ],
    color: '#c4706a',
  },
  {
    title: 'Security Fundamentals',
    skills: [
      'AES-GCM Encryption',
      'OAuth 2.0 / JWT',
      'RBAC',
      'Secure Coding',
      'Malformed-Input Handling',
      'Threat-Alert Logging',
    ],
    color: '#6b9080',
  },
  {
    title: 'Cloud & DevOps',
    skills: [
      'Microsoft Azure (AZ-900)',
      'Docker',
      'CI/CD',
      'Cron / APScheduler',
      'Linux / Unix',
      'Bash / Zsh',
    ],
    color: '#e8b923',
  },
  {
    title: 'AI/ML & Data',
    skills: ['XGBoost', 'scikit-learn', 'SHAP', 'Feature Engineering', 'Pandas', 'NumPy'],
    color: '#9b59b6',
  },
  {
    title: 'Frontend & Databases',
    skills: ['React.js (Hooks)', 'HTML5', 'CSS3', 'Tailwind CSS', 'MongoDB Atlas', 'PostgreSQL'],
    color: '#e67e22',
  },
]

export const projects = [
  {
    title: 'Multi-Threaded HTTP Web Server from Scratch',
    shortName: 'HTTP Server',
    category: 'Systems Programming',
    description:
      'Production-grade HTTP/1.1 forward proxy built at the OS layer — raw POSIX sockets, bounded worker thread pool, LRU response cache, and RAII lifecycle management. Zero external dependencies.',
    tags: ['C++17', 'POSIX Sockets', 'Thread Pool', 'LRU Cache', 'Systems Programming'],
    github: 'https://github.com/ayushibhati22',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
  },
  {
    title: 'SmartProperty AI',
    shortName: 'SmartProperty AI',
    category: 'AI / ML Platform',
    description:
      'End-to-end ML platform on 265,500+ property records across 14 cities — 72 engineered features, R² = 0.89 test accuracy, cross-validated at 0.87 ± 0.02, with SHAP explainability and a real-time monitoring dashboard.',
    tags: ['Python', 'FastAPI', 'XGBoost', 'SHAP', 'React', 'SQLite'],
    github: 'https://github.com/ayushibhati22',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
  },
  {
    title: 'Hotel Booking & Management Platform',
    shortName: 'QuickStay',
    category: 'Full-Stack Application',
    description:
      'Full-stack MERN platform with dual admin/owner interfaces — JWT + OAuth 2.0 RBAC, Stripe payments, Cloudinary media, and real-time CRUD dashboards built for production use.',
    tags: ['React', 'Node.js', 'MongoDB', 'Clerk Auth', 'Stripe', 'Tailwind'],
    github: 'https://github.com/ayushibhati22',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
  },
]

export const education = [
  {
    institution: 'JC Bose University of Science & Technology, YMCA',
    location: 'Faridabad',
    degree: 'B.Tech — Electronics and Computer Engineering',
    period: '2023 – 2027',
    detail: 'CGPA 7.7 · Final year',
  },
  {
    institution: 'J.N. International School',
    degree: 'Class XII (CBSE)',
    period: '2023',
    detail: '85.2%',
  },
  {
    institution: 'Modern Vidya Niketan',
    degree: 'Class X (CBSE)',
    period: '2021',
    detail: '96.8%',
  },
]

export const certificates = [
  {
    name: 'Microsoft Certified: Azure Fundamentals (AZ-900)',
    status: 'completed' as const,
  },
  {
    name: 'Cisco Networking Academy: Networking Basics + 5 Module Achievement Badges',
    status: 'completed' as const,
  },
  {
    name: 'CompTIA Security+',
    status: 'in-progress' as const,
  },
]

export const softSkills = [
  { name: 'Cross-Functional Communication', color: '#4a7fd4' },
  { name: 'Agile Teamwork', color: '#e8b923' },
  { name: 'Problem-Solving', color: '#c4706a' },
  { name: 'Attention to Detail', color: '#6b9080' },
  { name: 'Fast Learner', color: '#9b59b6' },
  { name: 'Ownership & Initiative', color: '#e67e22' },
]

export const languages = [
  { name: 'English', level: 'Professional' },
  { name: 'Hindi', level: 'Native / Bilingual' },
]

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]
