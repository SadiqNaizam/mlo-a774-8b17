import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// Custom Layout Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Custom Page-specific Components
import ArticleCard from '@/components/ArticleCard';
import ProjectCard from '@/components/ProjectCard';

// shadcn/ui Components
import { Button } from '@/components/ui/button';

// Placeholder data for featured content
const featuredArticles = [
  {
    slug: 'mastering-react-hooks',
    title: 'Mastering React Hooks: A Deep Dive into useState and useEffect',
    publicationDate: 'October 26, 2023',
    excerpt: 'Explore the fundamentals of React Hooks, moving beyond the basics to understand the mechanics behind useState and useEffect for more efficient and readable components.',
    tags: ['React', 'TypeScript', 'Frontend'],
  },
  {
    slug: 'building-a-design-system-with-shadcn-ui',
    title: 'Building a Design System with shadcn/ui and Tailwind CSS',
    publicationDate: 'September 15, 2023',
    excerpt: 'A step-by-step guide to creating a scalable and maintainable design system for your web applications using the power of shadcn/ui and the flexibility of Tailwind CSS.',
    tags: ['shadcn/ui', 'Tailwind CSS', 'Design System'],
  },
];

const featuredProjects = [
  {
    title: 'E-Commerce Analytics Dashboard',
    description: 'A comprehensive dashboard for visualizing sales data, customer behavior, and inventory metrics for an e-commerce platform.',
    techStack: ['React', 'Recharts', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    liveDemoUrl: '#',
    sourceCodeUrl: '#',
    imageUrl: 'https://placehold.co/400x300/000000/FFFFFF/png?text=Project+1',
  },
  {
    title: 'Real-Time Collaborative Editor',
    description: 'A web-based text editor that allows multiple users to edit the same document simultaneously, with changes reflected in real-time.',
    techStack: ['WebSockets', 'React', 'Zod', 'Express', 'MongoDB'],
    liveDemoUrl: '#',
    sourceCodeUrl: '#',
    imageUrl: 'https://placehold.co/400x300/020817/FFFFFF/png?text=Project+2',
  },
];


const Homepage = () => {
  console.log('Homepage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        {/* --- Hero Section --- */}
        <section className="py-20 sm:py-24 lg:py-32">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Your Name
            </h1>
            <p className="max-w-2xl mx-auto mt-6 text-lg text-muted-foreground md:text-xl">
              I'm a passionate software engineer specializing in building modern, responsive, and user-friendly web applications with React and TypeScript.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/projects">View My Work</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="mailto:your.email@example.com">Get in Touch</a>
              </Button>
            </div>
          </div>
        </section>

        {/* --- Featured Projects Section --- */}
        <section className="py-16 sm:py-20 bg-muted/40">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-baseline mb-8">
              <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
              <Button asChild variant="link" className="hidden md:inline-flex">
                <Link to="/projects">
                  View all projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
            <div className="mt-8 text-center md:hidden">
              <Button asChild variant="outline">
                <Link to="/projects">View all projects</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* --- Latest Articles Section --- */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-baseline mb-8">
              <h2 className="text-3xl font-bold tracking-tight">Latest Articles</h2>
              <Button asChild variant="link" className="hidden md:inline-flex">
                <Link to="/blog">
                  Read all articles <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredArticles.map((article) => (
                <ArticleCard key={article.slug} {...article} />
              ))}
            </div>
             <div className="mt-8 text-center md:hidden">
              <Button asChild variant="outline">
                <Link to="/blog">Read all articles</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;