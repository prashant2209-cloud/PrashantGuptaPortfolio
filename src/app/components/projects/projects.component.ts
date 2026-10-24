import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

export interface Project {
  title: string;
  description: string[];
  techStack: string[];
  image: string;
  aosImage: string;
  liveUrl?: string;
  githubUrl?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Tech-360',
      description: [
        'A platform inspired by CarDekho that explores AI-driven innovations in the automotive industry.',
        'The platform focuses on emerging technologies such as electric vehicles, autonomous systems, and sustainability.'
      ],
      techStack: ['Python', 'AI/ML', 'Web Development'],
      image: 'https://res.cloudinary.com/diayjemwx/image/upload/v1773166827/Ai_learning_and_artificial_intelligence_concept____Premium_Photo_isw3sb.jpg',
      aosImage: 'fade-right',
      liveUrl: 'https://tech-360-three.vercel.app/'
    },
    {
      title: 'LegalSangam',
      description: [
        'A digital marketplace connecting citizens with legal professionals to make legal services accessible and affordable.',
        'Features include: AI-powered legal chat, Document review, Secure payments, Multi-language support, Geo-tagging, Voice assistance, and Community legal resources.'
      ],
      techStack: ['AI', 'Web Development', 'Multi-language'],
      image: 'https://res.cloudinary.com/diayjemwx/image/upload/v1773166047/Legislation_Photos_-_Download_Free_High-Quality_Pictures___Freepik_lbyrlp.jpg',
      aosImage: 'fade-left',
      liveUrl: 'https://legalsangamm.web.app/'
    },
    {
      title: 'SeedSync – Crop Recommendation System',
      description: [
        'Built a Streamlit application recommending 22+ crops using 7 soil and weather parameters.',
        'Integrated Scikit-learn with feature scaling to rank the top 3 crops by confidence score.',
        'Trained a Random Forest model and visualized crop-specific growing conditions using Matplotlib.'
      ],
      techStack: [
        'Python',
        'Streamlit',
        'Scikit-learn',
        'Pandas',
        'NumPy',
        'Matplotlib',
        'Seaborn'
      ],
      image: '/assets/futurecrop.jpg',
      aosImage: 'fade-right',
      liveUrl: 'https://ai-crop-decommendation.streamlit.app/',
      githubUrl: 'https://github.com/prashant2209-cloud/AI-Crop-Recommendation-System'
    }
  ];
}
