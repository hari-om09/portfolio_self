export interface TimelineItem {
  id: number;
  role: string;
  org: string;
  period: string;
  highlights: string[];
  tags: string[];
  type: 'experience' | 'education';
}

export const experienceItems: TimelineItem[] = [
  {
    id: 1,
    role: 'GDSC-PR Team Member',
    org: 'Google Developer Student Clubs — NIT Patna',
    period: 'Jan 2024 – Present',
    highlights: [
      'Contributing to technical workshops and developer events',
      'Collaborated on community-driven projects',
      'Helped organise coding bootcamps and hackathons',
    ],
    tags: ['Leadership', 'Community', 'Events'],
    type: 'experience',
  },
  {
    id: 2,
    role: 'Co-Founder & Developer',
    org: 'E-Info.me — Digital Identity Platform',
    period: '2024 – Present',
    highlights: [
      'Co-founded a digital identity platform for developers and professionals',
      'Built full-stack application with React, Node.js and MongoDB',
      'Implemented secure authentication and real-time features',
    ],
    tags: ['React', 'Node.js', 'MongoDB'],
    type: 'experience',
  },
  {
    id: 3,
    role: 'Competitive Programmer',
    org: 'LeetCode · Codeforces · CodeChef',
    period: '2023 – Present',
    highlights: [
      'LeetCode Rating: 1520 · 300+ problems solved',
      'Codeforces Rating: 1130 (Pupil)',
      'CodeChef Rating: 1420 (2 Star)',
    ],
    tags: ['DSA', 'Problem Solving', 'C++'],
    type: 'experience',
  },
];

export const educationItems: TimelineItem[] = [
  {
    id: 4,
    role: 'B.Tech in Computer Science & Engineering',
    org: 'National Institute of Technology, Patna',
    period: '2023 – 2027 (Expected)',
    highlights: [
      'CGPA: 8.23 / 10',
      'Coursework: DSA, DBMS, OS, Computer Networks, Algorithms',
      'GDSC-PR Team Member · Active in coding community',
    ],
    tags: ['NIT Patna', 'CSE', 'CGPA 8.23'],
    type: 'education',
  },
  {
    id: 5,
    role: 'Higher Secondary (12th) — CBSE',
    org: 'ROSPUBSCHL',
    period: '2020 – 2022',
    highlights: [
      'Stream: Science (PCM + Computer Science)',
      'Percentage: 85.2%',
    ],
    tags: ['Science', 'PCM', 'CBSE'],
    type: 'education',
  },
  {
    id: 6,
    role: 'Secondary (10th) — CBSE',
    org: 'NSDAVPUBSCHL',
    period: '2020',
    highlights: [
      'Percentage: 88.5%',
      'Strong foundation in Mathematics and Science',
    ],
    tags: ['Mathematics', 'CBSE'],
    type: 'education',
  },
];
