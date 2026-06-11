import {
  FiArrowUpRight,
  FiAward,
  FiBookOpen,
  FiBriefcase,
  FiCode,
  FiGithub,
  FiGlobe,
  FiLayers,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
  FiTarget,
  FiTrendingUp,
  FiUser,
} from 'react-icons/fi';

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'coding-profiles', label: 'Profiles' },
  { id: 'contact', label: 'Contact' },
];

export const portfolioData = {
  owner: {
    name: 'Rakesh Dhangar',
    tagline: 'MERN Stack Developer | Data Science Student | Problem Solver',
    summary:
      'Second-year B.Tech student in Computer Science and Engineering (Data Science) at R. C. Patel Institute of Technology, building practical products with React, Node.js, Express, MongoDB, and Python.',
    intro:
      'I enjoy turning ideas into usable software, learning through projects, and improving my problem-solving ability through consistent coding practice.',
    location: 'Shirpur, Maharashtra, India',
    email: 'dhangarrakesh2006@gmail.com',
    phone: '+91 9545226890',
    linkedIn: 'https://linkedin.com/in/rakesh-dhangar-15963531b',
    github: 'https://github.com/dhangarrakesh2006-maker',
    leetCodeHandle: 'Rakedhangar2006',
    resumePath: '/resume.html',
  },
  heroBadges: ['Open to internships', 'MERN projects', 'Data science student'],
  heroHighlights: [
    {
      title: 'Practical builder',
      text: 'Focused on clean interfaces, usable workflows, and dependable backend wiring.',
      icon: FiBriefcase,
    },
    {
      title: 'Problem-solving mindset',
      text: 'Competitive programming and debugging discipline sharpen day-to-day engineering work.',
      icon: FiTarget,
    },
    {
      title: 'Learning velocity',
      text: 'Growing across frontend, backend, Python, and computer science fundamentals.',
      icon: FiTrendingUp,
    },
  ],
  socialLinks: [
    { label: 'GitHub', href: 'https://github.com/dhangarrakesh2006-maker', icon: FiGithub },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/rakesh-dhangar-15963531b', icon: FiLinkedin },
    { label: 'Email', href: 'mailto:dhangarrakesh2006@gmail.com', icon: FiMail },
  ],
  statCards: [
    { value: '2000+', label: 'CodeChef Problems Solved' },
    { value: '4', label: 'Featured Projects' },
    { value: '7.8', label: 'Current CGPA' },
  ],
  aboutCards: [
    {
      title: 'Academic foundation',
      text: 'B.Tech in CSE (Data Science) with a strong focus on software development, DS fundamentals, and practical implementation.',
      icon: FiBookOpen,
    },
    {
      title: 'Current focus',
      text: 'Building modern full-stack apps, improving React architecture, and deepening backend and database skills.',
      icon: FiLayers,
    },
    {
      title: 'Working style',
      text: 'I prefer structured UI, maintainable code, and solving real problems with straightforward product thinking.',
      icon: FiCode,
    },
    {
      title: 'Career objective',
      text: 'Grow into a strong software engineer by shipping reliable products, learning continuously, and contributing to meaningful teams.',
      icon: FiArrowUpRight,
    },
  ],
  skillGroups: [
    {
      title: 'Programming Languages',
      level: 84,
      summary: 'Comfortable across core problem-solving and application development languages.',
      skills: ['C', 'Java', 'Python', 'JavaScript'],
    },
    {
      title: 'Frontend',
      level: 86,
      summary: 'Building responsive interfaces with a focus on clarity, motion, and clean interaction patterns.',
      skills: ['HTML', 'CSS', 'React.js'],
    },
    {
      title: 'Backend',
      level: 80,
      summary: 'Creating APIs and application logic for practical web products.',
      skills: ['Node.js', 'Express.js', 'Flask'],
    },
    {
      title: 'Database',
      level: 75,
      summary: 'Working with document and relational data models for app features and persistence.',
      skills: ['MongoDB', 'SQL'],
    },
    {
      title: 'Tools',
      level: 78,
      summary: 'Using version control and developer tooling to keep projects organized and fast to iterate.',
      skills: ['Git', 'GitHub', 'VS Code', 'Canva'],
    },
    {
      title: 'Concepts',
      level: 82,
      summary: 'Grounded in foundational engineering concepts that support better system design.',
      skills: ['Object Oriented Programming', 'Web Development', 'Data Structures', 'Problem Solving'],
    },
  ],
  achievementMetrics: [
    {
      value: 2000,
      suffix: '+',
      label: 'CodeChef problems solved',
      detail: 'Consistent problem-solving practice across competitive programming challenges.',
    },
    {
      value: 30,
      suffix: '+',
      label: 'LeetCode problems solved',
      detail: 'Focused improvement in algorithms, logic, and interview-style reasoning.',
    },
    {
      value: 100,
      suffix: ' days',
      label: 'coding streak',
      detail: 'Built daily consistency through a 100-day coding streak.',
    },
    {
      value: 2,
      suffix: 'nd',
      label: 'runner-up buildathon finish',
      detail: 'Placed 2nd Runner-Up at the AI Buildathon in Jalgaon.',
    },
  ],
  certifications: [
    'CodeChef Certification in C, Java, and SQL',
    'Infosys Springboard Certification in HTML and CSS',
  ],
  projects: [
    {
      title: 'Expense Guardian Flow',
      description:
        'A modern expense management application for tracking expenses, organizing categories, and monitoring spending habits through a polished responsive interface.',
      github: 'https://github.com/dhangarrakesh2006-maker/expense-guardian-flow',
      live: 'https://expense-guardian-flow.lovable.app/',
      tech: ['React', 'JavaScript', 'HTML', 'CSS'],
      accent: 'cyan',
    },
    {
      title: 'Smart Banking System',
      description:
        'A responsive banking interface with transaction flows, clean form handling, and a dashboard-oriented design for a smoother finance experience.',
      github: 'https://github.com/dhangarrakesh2006-maker/Smart-Banking-System1',
      live: '',
      tech: ['HTML', 'CSS', 'JavaScript'],
      accent: 'purple',
    },
    {
      title: 'Academic Management Platform',
      description:
        'A student dashboard for managing records, attendance, performance tracking, and academic information with an efficiency-first interface.',
      github: 'https://github.com/dhangarrakesh2006-maker/Academic-Managment-Platform',
      live: 'https://girish3030.pythonanywhere.com/',
      tech: ['Python', 'HTML', 'CSS', 'JavaScript'],
      accent: 'slate',
    },
    {
      title: 'Finance Calculator',
      description:
        'A financial calculator built with React and Flask to support common financial calculations with a clean and simple user experience.',
      github: '',
      live: '',
      tech: ['React', 'Flask', 'HTML', 'CSS', 'JavaScript'],
      accent: 'cyan',
    },
  ],
  educationTimeline: [
    {
      year: '2024 - 2028',
      title: 'B.Tech in Computer Science and Engineering (Data Science)',
      subtitle: 'R. C. Patel Institute of Technology, Shirpur',
      detail: 'Second-year student with a current CGPA of 7.8 and a focus on full-stack development and data science fundamentals.',
      meta: 'Expected graduation: 2028',
    },
    {
      year: 'Class 12',
      title: 'Higher Secondary Education',
      subtitle: 'Academic performance',
      detail: 'Completed Class 12 with 75%, building the base for engineering studies and technical growth.',
      meta: 'Score: 75%',
    },
    {
      year: 'Class 10',
      title: 'Secondary Education',
      subtitle: 'Academic performance',
      detail: 'Completed Class 10 with 91%, reflecting consistency and a strong learning foundation.',
      meta: 'Score: 91%',
    },
  ],
  codingProfiles: [
    {
      title: 'CodeChef',
      value: '2000+',
      subtitle: 'Problems solved',
      description: 'A strong competitive programming habit built through sustained problem-solving practice.',
      icon: FiCode,
      href: '',
      cta: 'Profile details available',
    },
    {
      title: 'LeetCode',
      value: '30+',
      subtitle: 'Problems solved',
      description: 'Steady practice in algorithms and interview-oriented coding questions.',
      icon: FiAward,
      href: '',
      cta: 'Handle: Rakedhangar2006',
    },
    {
      title: 'GitHub',
      value: '4',
      subtitle: 'Featured repositories',
      description: 'Project source, experimentation, and portfolio work collected in one development hub.',
      icon: FiGithub,
      href: 'https://github.com/dhangarrakesh2006-maker',
      cta: 'View repositories',
    },
    {
      title: 'Coding Streak',
      value: '100',
      subtitle: 'Day streak',
      description: 'Daily repetition used intentionally to improve discipline, speed, and confidence.',
      icon: FiTrendingUp,
      href: '',
      cta: 'Consistency milestone',
    },
  ],
  contactCards: [
    {
      title: 'Email',
      value: 'dhangarrakesh2006@gmail.com',
      href: 'mailto:dhangarrakesh2006@gmail.com',
      icon: FiMail,
    },
    {
      title: 'Phone',
      value: '+91 9545226890',
      href: 'tel:+919545226890',
      icon: FiPhone,
    },
    {
      title: 'LinkedIn',
      value: 'linkedin.com/in/rakesh-dhangar-15963531b',
      href: 'https://linkedin.com/in/rakesh-dhangar-15963531b',
      icon: FiLinkedin,
    },
    {
      title: 'Location',
      value: 'Shirpur, Maharashtra, India',
      href: '',
      icon: FiMapPin,
    },
  ],
  quickFacts: [
    { label: 'Current year', value: 'Second Year' },
    { label: 'Expected graduation', value: '2028' },
    { label: 'Primary stack', value: 'MERN + Python' },
  ],
};

export const footerLinks = [
  { label: 'GitHub', href: 'https://github.com/dhangarrakesh2006-maker' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/rakesh-dhangar-15963531b' },
  { label: 'Email', href: 'mailto:dhangarrakesh2006@gmail.com' },
  { label: 'Projects', href: '#projects' },
];

export const seo = {
  title: 'Rakesh Dhangar | MERN Stack Developer Portfolio',
  description:
    'Portfolio of Rakesh Dhangar, a MERN Stack Developer and Data Science student building modern responsive applications with React, Node.js, Express, MongoDB, and Python.',
};
