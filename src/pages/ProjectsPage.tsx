import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ProjectCard, { ProjectCardProps } from '@/components/ProjectCard';
import { Bot, LineChart, ShoppingCart } from 'lucide-react';

const projects: ProjectCardProps[] = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce site with a custom CMS, payment gateway integration, and a user-friendly interface built with Next.js.",
    techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Stripe", "PostgreSQL"],
    liveDemoUrl: "https://example.com",
    sourceCodeUrl: "https://github.com",
    icon: <ShoppingCart className="h-8 w-8 text-muted-foreground" />,
  },
  {
    title: "Data Analytics Dashboard",
    description: "A real-time data visualization dashboard for tracking key business metrics, featuring interactive charts and reporting tools.",
    techStack: ["React", "Vite", "Recharts", "TanStack Query", "Node.js", "Express"],
    liveDemoUrl: "https://example.com",
    sourceCodeUrl: "https://github.com",
    icon: <LineChart className="h-8 w-8 text-muted-foreground" />,
  },
  {
    title: "AI-Powered Chatbot",
    description: "A customer support chatbot using a large language model API to provide instant, context-aware answers to user queries.",
    techStack: ["Python", "Flask", "OpenAI API", "React", "WebSocket"],
    liveDemoUrl: "https://example.com",
    sourceCodeUrl: "https://github.com",
    icon: <Bot className="h-8 w-8 text-muted-foreground" />,
  },
   {
    title: "Project Management Tool",
    description: "A Kanban-style project management application with drag-and-drop functionality, user authentication, and real-time collaboration.",
    techStack: ["Vue.js", "Firebase", "Pinia", "TypeScript"],
    liveDemoUrl: "https://example.com",
    sourceCodeUrl: "https://github.com",
    imageUrl: "https://images.unsplash.com/photo-1542330952-bffc55e812b2?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Personal Blog Engine",
    description: "A lightweight and fast static site generator for publishing articles, built from scratch to optimize for performance and SEO.",
    techStack: ["Go", "Markdown", "HTML/CSS", "JavaScript"],
    sourceCodeUrl: "https://github.com",
    imageUrl: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Mobile Weather App",
    description: "A cross-platform mobile app that provides weather forecasts using a third-party API, with a clean and intuitive user interface.",
    techStack: ["React Native", "Expo", "Redux Toolkit"],
    sourceCodeUrl: "https://github.com",
    imageUrl: "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=800&auto=format&fit=crop",
  },
];

const ProjectsPage: React.FC = () => {
  console.log('ProjectsPage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <div className="container px-4 py-12 md:py-16 lg:py-20">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Things I’ve Built
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              A collection of my projects, from full-stack web applications to small-scale developer tools. Each one represents a unique challenge and a learning opportunity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;