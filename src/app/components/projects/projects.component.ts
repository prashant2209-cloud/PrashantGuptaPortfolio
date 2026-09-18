import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

export interface Project {
  title: string;
  description: string[];
  techStack: string[];
  image: string;
  aosImage: string;
  liveUrl?: string;
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
      liveUrl: 'https://legal-sangam.web.app/'
    },
    {
      title: 'FutureCrop — AI Crop Recommendation System',
      description: [
        'An AI-powered agriculture prediction system that uses machine learning and weather data to recommend suitable crops based on farming and environmental conditions.',
        'Trained and evaluated Random Forest (~89% accuracy) and tuned XGBoost (~92% accuracy) models on 2,200+ agricultural records.',
        'Integrated dynamic weather data workflows to improve prediction accuracy by ~15%, deployed with an interactive Streamlit web application.'
      ],
      techStack: [
        'Machine Learning',
        'Random Forest',
        'Scikit-learn',
        'Streamlit'
      ],
      image: '/assets/futurecrop.jpg',
      aosImage: 'fade-right',
      liveUrl: 'https://ai-crop-decommendation.streamlit.app/'
    }
  ];
}
