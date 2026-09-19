// Source: "Matthew Crum 2026 Resume.pdf". Phone number intentionally omitted (public site).
export const profile = {
  name: 'Matthew Crum',
  title: 'Security Analyst',
  location: 'Greater Chicago Area',
  email: 'murcwehttam@gmail.com',
  linkedin: 'https://www.linkedin.com/in/matthew-crum',
  github: 'https://github.com/I-Am-Crumbles',
  summary:
    'Cybersecurity professional with experience in application security, vulnerability validation, and technical stakeholder communication within fast-paced vulnerability operations environments. Skilled at translating complex security concepts into actionable guidance for technical and non-technical audiences. Experienced in customer support, technical mentorship, cross-functional collaboration, and operational process improvement.',
};

export const skills = [
  'Application Security',
  'Vulnerability Validation & Triage',
  'Web/API/Mobile Security',
  'OWASP Top 10',
  'REST APIs',
  'API Security Concepts',
  'Authentication & Authorization Concepts',
  'JWT-Based Authorization Familiarity',
  'Python Scripting',
  'Workflow Automation',
  'Burp Suite',
  'Technical Documentation',
  'Presentations & Training',
  'Customer Communication',
  'Security Operations',
];

export interface Job { role: string; org: string; where: string; dates: string; bullets: string[] }

export const experience: Job[] = [
  {
    role: 'Security Analyst',
    org: 'Synack',
    where: 'Remote',
    dates: 'Mar 2026 – Present',
    bullets: [
      'Act as a trusted escalation point for complex technical and operational issues across vulnerability operations workflows.',
      'Review and arbitrate vulnerability severity and payout decisions for high-impact submissions, balancing technical validation, business risk, and platform policy considerations.',
      'Provide technical mentorship and training to analysts and cross-functional stakeholders to improve operational consistency and technical quality.',
      'Create and deliver internal technical presentations that simplify complex security concepts using practical, real-world examples.',
      'Contribute operational expertise and workflow design input for automation and AI-assisted tooling initiatives focused on improving triage efficiency and reducing manual operational overhead.',
    ],
  },
  {
    role: 'Associate Security Analyst',
    org: 'Synack',
    where: 'Remote',
    dates: 'Dec 2023 – Mar 2026',
    bullets: [
      'Triage and validate vulnerability submissions across web, API, mobile, and host-level targets, including SQL Injection, SSRF, IDOR, XSS, CSRF, and Remote Code Execution, frequently analyzing authentication flows, session handling, access control behavior, and JWT-based authorization mechanisms during privilege escalation and authorization testing.',
      'Provide technical remediation guidance and explain complex security findings to technical and non-technical stakeholders.',
      'Support high-priority vulnerability submissions requiring detailed technical analysis, stakeholder communication, and consistent decision-making.',
      'Develop and maintain internal workflow tooling and automation scripts using Python-based scripting and API-driven processes to improve operational efficiency.',
      'Collaborate across Vulnerability Operations, Support, and other teams to investigate and resolve technical issues.',
      'Assist with patch verification, responsible disclosure workflows, and vulnerability documentation updates.',
    ],
  },
  {
    role: 'Security Analyst Intern',
    org: 'Synack',
    where: 'Remote',
    dates: 'Aug 2023 – Dec 2023',
    bullets: [
      'Collaborated with senior analysts to review and validate vulnerability reports within a large-scale bug bounty environment.',
      'Assisted with vulnerability triage and technical analysis while building hands-on experience with web application security and penetration testing methodologies.',
      'Participated in structured technical learning focused on vulnerability assessment and operational security workflows.',
    ],
  },
  {
    role: 'Cybersecurity Mentor',
    org: 'Fullstack Academy',
    where: 'Remote',
    dates: 'Nov 2022 – May 2023',
    bullets: [
      'Delivered technical mentorship and instruction for cybersecurity students in a remote learning environment.',
      'Explained complex technical concepts using real-world examples tailored to varying experience levels.',
      'Maintained a 9.5/10 average student satisfaction score through supportive communication and technical engagement.',
    ],
  },
];

export const certifications = [
  { name: 'Certified AppSec Pentester (CAPen)', date: 'May 2024' },
  { name: 'eLearnSecurity Web Application Penetration Tester (eWPT)', date: 'Apr 2024' },
  { name: 'eLearnSecurity Junior Penetration Tester (eJPT)', date: 'Aug 2023' },
  { name: 'University of Illinois Chicago Certificate in Cybersecurity', date: 'Jun 2022' },
  { name: 'CompTIA Security+ (Expired 2025)', date: 'Sep 2022' },
];
