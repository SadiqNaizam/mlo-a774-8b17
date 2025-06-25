import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays } from 'lucide-react';

interface ArticleCardProps {
  slug: string;
  title: string;
  publicationDate: string;
  excerpt: string;
  tags: string[];
}

const ArticleCard: React.FC<ArticleCardProps> = ({ slug, title, publicationDate, excerpt, tags }) => {
  console.log('ArticleCard loaded for:', title);

  return (
    <Link to="/article" className="block group focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-lg">
      <Card className="h-full flex flex-col transition-all duration-300 ease-in-out group-hover:shadow-lg group-hover:-translate-y-1 bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-xl font-bold leading-tight group-hover:text-primary">
            {title}
          </CardTitle>
          <CardDescription className="flex items-center text-sm text-muted-foreground pt-2">
            <CalendarDays className="mr-2 h-4 w-4" />
            <span>{publicationDate}</span>
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-muted-foreground line-clamp-3">
            {excerpt}
          </p>
        </CardContent>
        <CardFooter>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ArticleCard;