import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GoogleAnalyticsService } from '../../service/google-analytics.service';

export interface ResumeSkillGroup {
  id: string;
  category: string;
  badge?: string;
  isPriority?: boolean;
  accentGradient: string;
  skills: string[];
}

export interface ResumeProject {
  id: string;
  name: string;
  subtitle: string;
  tagline: string;
  badge: string;
  description: string;
  metrics: string[];
  highlights: string[];
  tech: string[];
  liveUrl: string;
  githubUrl?: string;
}

export interface ResumeEducation {
  institution: string;
  degree: string;
  period: string;
  location: string;
  highlights: string[];
}

export interface ResumeCertification {
  title: string;
  issuer: string;
  badge: string;
}

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './resume.component.html',
})
export class ResumeComponent {
  selectedCategory: string = 'all';

  categories = [
    { id: 'all', label: 'All Skills', count: 32 },
    { id: 'languages', label: 'Languages', count: 6, isPriority: true },
    { id: 'web-apis', label: 'Web & APIs', count: 7, isPriority: true },
    { id: 'databases', label: 'Databases', count: 2 },
    { id: 'ml-data', label: 'ML & Data', count: 4 },
    { id: 'testing-security', label: 'Testing & Security', count: 4, isPriority: true },
    { id: 'tools', label: 'Developer Tools', count: 6 },
    { id: 'core-cs', label: 'Core CS', count: 5, isPriority: true },
  ];

  skillGroups: ResumeSkillGroup[] = [
    {
      id: 'languages',
      category: 'Languages',
      badge: 'Core Programming',
      isPriority: true,
      accentGradient: 'from-green-400 to-emerald-500',
      skills: ['Python', 'C++', 'C', 'JavaScript', 'TypeScript', 'SQL']
    },
    {
      id: 'web-apis',
      category: 'Web / APIs',
      badge: 'Full Stack & APIs',
      isPriority: true,
      accentGradient: 'from-blue-400 to-indigo-500',
      skills: ['React', 'FastAPI', 'Streamlit', 'HTML5', 'CSS3', 'Tailwind CSS', 'REST APIs']
    },
    {
      id: 'databases',
      category: 'Databases',
      badge: 'Data Storage',
      isPriority: false,
      accentGradient: 'from-cyan-400 to-blue-500',
      skills: ['Firebase (Auth, Firestore)', 'MySQL']
    },
    {
      id: 'ml-data',
      category: 'ML / Data',
      badge: 'Machine Learning',
      isPriority: false,
      accentGradient: 'from-purple-400 to-fuchsia-500',
      skills: ['Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib']
    },
    {
      id: 'testing-security',
      category: 'Testing / Security',
      badge: 'QA & Security',
      isPriority: true,
      accentGradient: 'from-emerald-400 to-teal-500',
      skills: ['API Testing', 'Input Validation', 'Burp Suite', 'Wireshark']
    },
    {
      id: 'tools',
      category: 'Developer Tools',
      badge: 'Workflow & Dev',
      isPriority: false,
      accentGradient: 'from-amber-400 to-orange-500',
      skills: ['Git', 'GitHub', 'VS Code', 'Google Colab', 'Jupyter Notebook', 'Vercel']
    },
    {
      id: 'core-cs',
      category: 'Core CS',
      badge: 'Computer Science',
      isPriority: true,
      accentGradient: 'from-teal-400 to-cyan-500',
      skills: ['DSA', 'Operating Systems', 'Computer Networks', 'OOPs', 'DBMS']
    }
  ];

  featuredProjects: ResumeProject[] = [
    {
      id: 'legalsangam',
      name: 'LegalSangam',
      subtitle: 'AI Legal Assistance Platform',
      tagline: 'AI Legal Guidance & Advocate Marketplace',
      badge: 'Live Demo',
      metrics: ['Gemini API', 'Jitsi Meet', 'Razorpay', 'Firebase'],
      description: 'An AI legal assistance platform with verified advocate search, profile management, video consultations, and AI-guided case review.',
      highlights: [
        'Engineered advocate search with filters for location, specialization, ratings, and fees using React and TypeScript.',
        'Developed Firebase-authenticated client and advocate dashboards with profile management and consultation booking.',
        'Integrated Gemini API, Jitsi Meet, Leaflet, and Razorpay for AI guidance, video consultations, location search, and payments.'
      ],
      tech: ['React', 'TypeScript', 'Firebase', 'Gemini API', 'Jitsi Meet', 'Razorpay', 'Leaflet'],
      liveUrl: 'https://legalsangamm.web.app/'
    },
    {
      id: 'password-cracking',
      name: 'Password Cracking Playground',
      subtitle: 'Cybersecurity Learning Project',
      tagline: 'Interactive Cryptanalysis & Password Security Platform',
      badge: 'GitHub',
      metrics: ['FastAPI & SQLite', 'MD5 & SHA-256', 'bcrypt & Argon2', 'Attack Simulations'],
      description: 'A hands-on password-security learning platform demonstrating cryptographic hashing algorithms, password strength analysis, and authentication attack simulations.',
      highlights: [
        'Built a password-security learning platform using FastAPI, SQLite, and JavaScript.',
        'Demonstrated MD5, SHA-1, SHA-256, bcrypt, and Argon2 with password-strength analysis.',
        'Simulated dictionary, brute-force, hybrid, and mask attacks with rate limiting and experiment tracking.'
      ],
      tech: ['Python', 'FastAPI', 'JavaScript', 'bcrypt', 'Argon2', 'SQLite'],
      liveUrl: 'https://github.com/prashant2209-cloud/Password_cracking',
      githubUrl: 'https://github.com/prashant2209-cloud/Password_cracking'
    },
    {
      id: 'seedsync',
      name: 'SeedSync',
      subtitle: 'Crop Recommendation System',
      tagline: 'Data-Driven Agricultural Precision with Machine Learning',
      badge: 'Live Demo',
      metrics: ['22+ Crops', '7 Parameters', 'Random Forest', 'Top-3 Confidence'],
      description: 'An AI-powered agricultural recommendation application analyzing 7 soil and weather parameters to recommend optimal crops with confidence ranking.',
      highlights: [
        'Built a Streamlit application recommending 22+ crops using 7 soil and weather parameters.',
        'Integrated Scikit-learn with feature scaling to rank the top 3 crops by confidence score.',
        'Trained a Random Forest model and visualized crop-specific growing conditions using Matplotlib.'
      ],
      tech: ['Python', 'Streamlit', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
      liveUrl: 'https://ai-crop-decommendation.streamlit.app/',
      githubUrl: 'https://github.com/prashant2209-cloud/AI-Crop-Recommendation-System'
    }
  ];

  education: ResumeEducation[] = [
    {
      institution: 'G. L. Bajaj Institute of Technology and Management',
      degree: 'B.Tech in Computer Science and Engineering – CGPA: 7.5/10',
      period: '2023 – 2027',
      location: 'Greater Noida, Uttar Pradesh',
      highlights: [
        'B.Tech in Computer Science and Engineering (CGPA: 7.5/10)',
        'Focus on Software Quality Assurance, Automation Testing, API Testing, and Core CS'
      ]
    },
    {
      institution: 'Maharishi Vidya Mandir (CBSE)',
      degree: 'Class XII: 75% | Class X: 89%',
      period: '2020 – 2023',
      location: 'Prayagraj, Uttar Pradesh',
      highlights: [
        'Class XII: 75%',
        'Class X: 89%'
      ]
    }
  ];

  certifications: ResumeCertification[] = [
    {
      title: 'Python Essentials 1',
      issuer: 'Cisco Networking Academy',
      badge: 'Programming'
    },
    {
      title: 'CCNA: Introduction to Networks',
      issuer: 'Cisco Networking Academy',
      badge: 'Networking'
    },
    {
      title: 'SQL',
      issuer: 'NxtWave',
      badge: 'Database'
    },
    {
      title: 'JavaScript',
      issuer: 'NxtWave',
      badge: 'Web Development'
    },
    {
      title: 'Introduction to Cybersecurity – Virtual Internship',
      issuer: 'EduSkills',
      badge: 'Internship'
    }
  ];

  constructor(private googleAnalyticsService: GoogleAnalyticsService) { }

  setCategory(categoryId: string): void {
    this.selectedCategory = categoryId;
  }

  get displayedSkillGroups(): ResumeSkillGroup[] {
    if (this.selectedCategory === 'all') {
      return this.skillGroups;
    }
    return this.skillGroups.filter(g => g.id === this.selectedCategory);
  }

  trackResumeDownload(): void {
    this.googleAnalyticsService.trackResumeDownload();
  }
}
