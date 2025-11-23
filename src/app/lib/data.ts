// src/lib/data.ts
import { Project } from '@/types';

export const projects: Project[] = [
  {
    slug: 'ecommerce-platform',
    title: 'E-commerce Platform',
    description: 'Plataforma de comercio electrónico con Next.js, Stripe y PostgreSQL',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=928&auto=format&fit=crop',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Tailwind'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/usuario/ecommerce',
    featured: true,
  },
  {
    slug: 'task-manager',
    title: 'Task Manager App',
    description: 'Aplicación de gestión de tareas con autenticación y tiempo real',
    image: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=928&auto=format&fit=crop',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    demoUrl: 'https://tasks.example.com',
    githubUrl: 'https://github.com/usuario/task-manager',
    featured: true,
  },
  {
    slug: 'weather-dashboard',
    title: 'Weather Dashboard',
    description: 'Dashboard interactivo del clima con gráficos y pronósticos',
    image: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=2106&auto=format&fit=crop',
    technologies: ['Next.js', 'Chart.js', 'OpenWeather API'],
    githubUrl: 'https://github.com/usuario/weather-app',
    featured: false,
  },
];

export const personalInfo = {
  name: 'Eduardo Fernando Bullon Vera',
  title: 'Desarrollo de Software | Backend | Frontend | SCRUM | MySQL',
  description: 'Desarrollador de software apasionado por crear soluciones tecnológicas innovadoras',
  email: 'eduardobullonvera@gmail.com',
  github: 'https://github.com/EduardoBullon',
  linkedin: 'https://www.linkedin.com/in/eduardo-bullon/',
  siteUrl: 'https://eduardo-bullon.vercel.app', // Importante para sitemap
  avatar: 'https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1740&auto=format&fit=crop',
};