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
    { id: 'all', label: 'All Skills', count: 31 },
    { id: 'qa-testing', label: 'Testing & QA', count: 5, isPriority: true },
    { id: 'programming', label: 'Core CS', count: 8, isPriority: true },
    { id: 'ml', label: 'Machine Learning', count: 10 },
    { id: 'web', label: 'Web Dev', count: 5 },
    { id: 'security', label: 'Cybersecurity', count: 5 },
    { id: 'tools', label: 'Tools & DevOps', count: 5 },
  ];

  skillGroups: ResumeSkillGroup[] = [
    {
      id: 'qa-testing',
      category: 'Software Testing & QA',
      badge: 'Core Focus • SDET',
      isPriority: true,
      accentGradient: 'from-green-400 to-emerald-500',
      skills: ['API Testing', 'Selenium WebDriver', 'Automation Testing', 'Manual Testing', 'Agile / JIRA']
    },
    {
      id: 'programming',
      category: 'Programming & Core CS',
      badge: 'Software Development',
      isPriority: true,
      accentGradient: 'from-teal-400 to-cyan-500',
      skills: ['C/C++', 'Python', 'JavaScript', 'SQL', 'Data Structures & Algorithms (DSA)', 'Design & Analysis of Algorithms', 'Operating Systems', 'Computer Networks']
    },
    {
      id: 'ml',
      category: 'Machine Learning & Data',
      badge: 'Data & AI',
      isPriority: false,
      accentGradient: 'from-purple-400 to-fuchsia-500',
      skills: ['Machine Learning', 'XGBoost', 'Random Forest', 'Scikit-learn', 'Pandas', 'NumPy', 'PyTorch', 'Streamlit', 'Jupyter Notebook', 'Google Colab']
    },
    {
      id: 'web',
      category: 'Web Development',
      badge: 'Frontend & UI',
      isPriority: false,
      accentGradient: 'from-blue-400 to-indigo-500',
      skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Responsive Design']
    },
    {
      id: 'security',
      category: 'Cybersecurity & Networking',
      badge: 'Security',
      isPriority: false,
      accentGradient: 'from-rose-400 to-red-500',
      skills: ['Network Security', 'Wireshark', 'Burp Suite', 'Cisco Packet Tracer', 'Kali Linux']
    },
    {
      id: 'tools',
      category: 'Tools & DevOps',
      badge: 'Workflow',
      isPriority: false,
      accentGradient: 'from-amber-400 to-orange-500',
      skills: ['Git', 'GitHub', 'VS Code', 'Vercel', 'Hugging Face']
    }
  ];

  featuredProjects: ResumeProject[] = [
    {
      id: 'futurecrop',
      name: 'FutureCrop',
      subtitle: 'AI Crop Recommendation System',
      tagline: 'Precision Agriculture with Machine Learning',
      badge: 'Streamlit Live',
      metrics: ['2,200+ Records', '92% XGBoost', '89% Random Forest', '+15% Weather Accuracy'],
      description: 'An AI-powered agriculture prediction platform analyzing environmental, soil, and weather data to provide data-driven crop recommendations.',
      highlights: [
        'Trained and evaluated Random Forest (~89% accuracy) and tuned XGBoost (~92% accuracy) on 2,200+ records',
        'Integrated dynamic weather data workflows to boost prediction accuracy by ~15%',
        'Built and deployed an interactive Streamlit web application with real-time inference'
      ],
      tech: ['Machine Learning', 'XGBoost', 'Random Forest', 'Scikit-learn', 'Streamlit', 'Python'],
      liveUrl: 'https://ai-crop-decommendation.streamlit.app/'
    },
    {
      id: 'legalsangam',
      name: 'LegalSangam',
      subtitle: 'Digital Legal Services Marketplace',
      tagline: 'AI Legal Assistance & WebRTC Consultations',
      badge: 'Web App Live',
      metrics: ['100+ Users', '99% WebRTC Uptime', '12+ Practice Areas', 'AI Chatbot'],
      description: 'A comprehensive digital marketplace connecting citizens with verified legal professionals for accessible and affordable legal assistance.',
      highlights: [
        'Architected real-time peer-to-peer video consultation using WebRTC with 99% connection success',
        'Built AI legal chat assistant for immediate preliminary guidance and automated document review',
        'Developed geolocation-based lawyer discovery across 12+ practice areas with secure payments'
      ],
      tech: ['AI', 'Web Development', 'Multi-language', 'WebRTC', 'Geolocation'],
      liveUrl: 'https://legal-sangam.web.app/'
    },
    {
      id: 'tech360',
      name: 'Tech-360',
      subtitle: 'Automotive Innovation Platform',
      tagline: 'Clean Mobility & Intelligent Systems',
      badge: 'Vercel Live',
      metrics: ['AI Innovations', 'Autonomous Systems', 'EV Mobility', 'Vercel Deployed'],
      description: 'An automotive tech intelligence platform exploring AI-driven innovations, electric vehicle architectures, and sustainable transport solutions.',
      highlights: [
        'Platform inspired by CarDekho exploring AI-driven innovations in the automotive industry',
        'In-depth exploration of emerging technologies including electric mobility and autonomous systems',
        'High-performance responsive web application deployed on Vercel'
      ],
      tech: ['Python', 'AI/ML', 'Web Development', 'Vercel'],
      liveUrl: 'https://tech-360-three.vercel.app/'
    }
  ];

  education: ResumeEducation[] = [
    {
      institution: 'GL Bajaj Institute of Technology and Management',
      degree: 'B.Tech in Computer Science & Engineering',
      period: '2023 – Present',
      location: 'Greater Noida, U.P.',
      highlights: [
        'Specialization in Software Quality Assurance, Automation Testing (SDET), and Core Computer Science',
        'Active problem solver with solid foundation in Data Structures, Algorithms, and Object-Oriented Design'
      ]
    },
    {
      institution: 'Maharishi Vidya Mandir School',
      degree: 'Senior Secondary Education (CBSE)',
      period: 'Completed',
      location: 'Prayagraj, U.P.',
      highlights: [
        'Rigorous foundation in Computer Science, Advanced Mathematics, and Physics'
      ]
    }
  ];

  certifications: ResumeCertification[] = [
    {
      title: 'Cybersecurity Fundamentals & Network Security',
      issuer: 'Palo Alto Networks',
      badge: 'Security Credential'
    },
    {
      title: 'Introduction to Cybersecurity & Python Essentials',
      issuer: 'Cisco Networking Academy',
      badge: 'Networking Credential'
    },
    {
      title: 'Cybersecurity Virtual Internship Program',
      issuer: 'EduSkills / AICTE',
      badge: 'Internship Completed'
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
