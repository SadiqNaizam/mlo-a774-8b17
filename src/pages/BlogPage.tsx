import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ArticleCard from '@/components/ArticleCard';
import { Input } from '@/components/ui/input';
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Search } from 'lucide-react';

// Placeholder data for blog articles
const allArticles = [
  {
    slug: 'deep-dive-into-react-hooks',
    title: 'A Deep Dive into React Hooks',
    publicationDate: 'October 26, 2023',
    excerpt: 'Explore the power of React Hooks and how they can simplify your component logic. We will cover useState, useEffect, useContext, and custom hooks with practical examples.',
    tags: ['React', 'JavaScript', 'Frontend'],
  },
  {
    slug: 'building-a-restful-api-with-nodejs',
    title: 'Building a RESTful API with Node.js and Express',
    publicationDate: 'September 15, 2023',
    excerpt: 'A step-by-step guide to creating a robust and scalable RESTful API from scratch using Node.js, Express, and MongoDB for data persistence.',
    tags: ['Node.js', 'API', 'Backend'],
  },
  {
    slug: 'tailwind-css-for-modern-ui',
    title: 'Styling Modern UIs with Tailwind CSS',
    publicationDate: 'August 02, 2023',
    excerpt: 'Learn why Tailwind CSS has become a favorite for rapid UI development. We break down its utility-first approach and show you how to build a responsive component.',
    tags: ['CSS', 'Tailwind', 'Design'],
  },
  {
    slug: 'typescript-in-react-projects',
    title: 'Getting Started with TypeScript in React Projects',
    publicationDate: 'July 21, 2023',
    excerpt: 'An introduction to using TypeScript with React to build type-safe, maintainable, and error-free applications. Covers setup, basic types, and component props.',
    tags: ['TypeScript', 'React', 'Best Practices'],
  },
  {
    slug: 'understanding-server-components',
    title: 'Understanding React Server Components (RSCs)',
    publicationDate: 'June 11, 2023',
    excerpt: 'A look into the future of React. What are Server Components, how do they differ from Client Components, and what problems do they solve? A must-read for any React dev.',
    tags: ['React', 'Next.js', 'Performance'],
  },
  {
    slug: 'mastering-git-and-github',
    title: 'Mastering Git and GitHub for Collaborative Development',
    publicationDate: 'May 05, 2023',
    excerpt: 'From basic commits to advanced rebasing and pull request workflows, this guide covers the essential Git commands and GitHub practices for effective teamwork.',
    tags: ['Git', 'DevOps', 'Productivity'],
  }
];

const BlogPage = () => {
  console.log('BlogPage loaded');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredArticles = allArticles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12 md:py-16">
          {/* Page Header */}
          <section className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              From the Blog
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Thoughts on software development, design, and everything in between.
            </p>
          </section>

          {/* Search Input */}
          <section className="mb-12 max-w-lg mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search articles..."
                className="pl-10 w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                aria-label="Search articles"
              />
            </div>
          </section>

          {/* Articles Grid */}
          <section>
            {filteredArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.map((article) => (
                  <ArticleCard
                    key={article.slug}
                    slug={article.slug}
                    title={article.title}
                    publicationDate={article.publicationDate}
                    excerpt={article.excerpt}
                    tags={article.tags}
                  />
                ))}
              </div>
            ) : (
                <div className="text-center py-16">
                    <h2 className="text-2xl font-semibold">No Articles Found</h2>
                    <p className="mt-2 text-muted-foreground">
                        Try a different search term or check back later!
                    </p>
                </div>
            )}
          </section>

          {/* Pagination */}
          {filteredArticles.length > 0 && (
            <section className="mt-16">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </section>
          )}

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;