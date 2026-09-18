import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface SkillItem {
  name: string;
  icon: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  badge?: string;
  isPriority?: boolean;
  accentBarGradient: string;
  cardClasses: string;
  skills: SkillItem[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html'
})
export class SkillsComponent {
  categories: SkillCategory[] = [
    {
      id: 'qa-testing',
      title: 'Software Testing & QA',
      badge: 'Core Focus • QA / SDET',
      isPriority: true,
      accentBarGradient: 'from-green-400 to-emerald-500',
      cardClasses: 'border-green-400/40 bg-gradient-to-br from-green-950/25 via-slate-900/60 to-slate-900/80 hover:border-green-400/70 shadow-lg shadow-green-400/5',
      skills: [
        { name: 'API Testing', icon: 'api' },
        { name: 'Selenium WebDriver', icon: 'selenium' },
        { name: 'Automation Testing', icon: 'automation' },
        { name: 'Manual Testing', icon: 'manual-testing' },
        { name: 'Agile / JIRA', icon: 'jira' }
      ]
    },
    {
      id: 'programming-core-cs',
      title: 'Programming & Core CS',
      badge: 'Software Development',
      isPriority: true,
      accentBarGradient: 'from-teal-400 to-cyan-500',
      cardClasses: 'border-teal-400/30 bg-gradient-to-br from-teal-950/25 via-slate-900/60 to-slate-900/80 hover:border-teal-400/60 shadow-lg shadow-teal-400/5',
      skills: [
        { name: 'C/C++', icon: 'cpp' },
        { name: 'Python', icon: 'python' },
        { name: 'JavaScript', icon: 'javascript' },
        { name: 'SQL', icon: 'sql' },
        { name: 'Data Structures & Algorithms (DSA)', icon: 'dsa' },
        { name: 'Design & Analysis of Algorithms', icon: 'algorithms' },
        { name: 'Operating Systems', icon: 'os' },
        { name: 'Computer Networks', icon: 'networks' }
      ]
    },
    {
      id: 'web-development',
      title: 'Web Development',
      badge: 'Frontend',
      isPriority: false,
      accentBarGradient: 'from-blue-400 to-indigo-500',
      cardClasses: 'border-slate-700/60 bg-slate-900/40 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-400/5',
      skills: [
        { name: 'HTML', icon: 'html' },
        { name: 'CSS', icon: 'css' },
        { name: 'Bootstrap', icon: 'bootstrap' }
      ]
    },
    {
      id: 'ml-data',
      title: 'Machine Learning & Data',
      badge: 'Data & AI',
      isPriority: false,
      accentBarGradient: 'from-purple-400 to-fuchsia-500',
      cardClasses: 'border-slate-700/60 bg-slate-900/40 hover:border-purple-400/50 hover:shadow-lg hover:shadow-purple-400/5',
      skills: [
        { name: 'Pandas', icon: 'pandas' },
        { name: 'NumPy', icon: 'numpy' },
        { name: 'PyTorch', icon: 'pytorch' },
        { name: 'Jupyter Notebook', icon: 'jupyter' },
        { name: 'Google Colab', icon: 'colab' }
      ]
    },
    {
      id: 'cybersecurity-networking',
      title: 'Cybersecurity & Networking',
      badge: 'Security',
      isPriority: false,
      accentBarGradient: 'from-rose-400 to-red-500',
      cardClasses: 'border-slate-700/60 bg-slate-900/40 hover:border-rose-400/50 hover:shadow-lg hover:shadow-rose-400/5',
      skills: [
        { name: 'Network Security', icon: 'security' },
        { name: 'Wireshark', icon: 'wireshark' },
        { name: 'Burp Suite', icon: 'burpsuite' },
        { name: 'Cisco Packet Tracer', icon: 'cisco' },
        { name: 'Kali Linux', icon: 'kali' }
      ]
    },
    {
      id: 'tools-tech',
      title: 'Tools & Technologies',
      badge: 'Workflow & DevOps',
      isPriority: false,
      accentBarGradient: 'from-amber-400 to-orange-500',
      cardClasses: 'border-slate-700/60 bg-slate-900/40 hover:border-amber-400/50 hover:shadow-lg hover:shadow-amber-400/5',
      skills: [
        { name: 'Git', icon: 'git' },
        { name: 'GitHub', icon: 'github' },
        { name: 'VS Code', icon: 'vscode' },
        { name: 'Vercel', icon: 'vercel' },
        { name: 'Hugging Face', icon: 'huggingface' }
      ]
    }
  ];

  // Backwards-compatibility getters
  get languages() {
    return this.categories.find(c => c.id === 'programming-core-cs')?.skills || [];
  }

  get webDev() {
    return this.categories.find(c => c.id === 'web-development')?.skills || [];
  }

  get tools() {
    return this.categories.find(c => c.id === 'tools-tech')?.skills || [];
  }

  get domains() {
    return this.categories.find(c => c.id === 'qa-testing')?.skills || [];
  }
}
