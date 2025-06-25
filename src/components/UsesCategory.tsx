import React from 'react';
import { ArrowUpRight } from 'lucide-react';

/**
 * Defines the structure for a single item displayed within a UsesCategory.
 */
interface UsesItem {
  name: string;
  description: string;
  link?: string;
}

/**
 * Defines the props for the UsesCategory component.
 */
interface UsesCategoryProps {
  title: string;
  items: UsesItem[];
}

/**
 * A structural component for the UsesPage. It acts as a section container 
 * with a prominent heading and contains a list of individual items within that category.
 */
const UsesCategory: React.FC<UsesCategoryProps> = ({ title, items }) => {
  console.log(`UsesCategory component loaded for category: ${title}`);

  return (
    <section className="py-8 md:py-12">
      <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-8">
        {title}
      </h2>
      <div className="border-l border-border pl-6 space-y-10">
        {items.map((item, index) => (
          <div key={index} className="relative">
            {/* Dot on the timeline-like border */}
            <div className="absolute -left-[29px] top-1 h-2.5 w-2.5 rounded-full bg-primary" />
            
            <div className="font-semibold text-lg text-foreground mb-1">
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 group hover:text-primary transition-colors"
                  aria-label={`Link to ${item.name}`}
                >
                  {item.name}
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              ) : (
                <span>{item.name}</span>
              )}
            </div>
            <p className="text-muted-foreground">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UsesCategory;