import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Github, Image as ImageIcon } from 'lucide-react';

export interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  liveDemoUrl?: string;
  sourceCodeUrl?: string;
  imageUrl?: string;
  icon?: React.ReactNode;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  techStack,
  liveDemoUrl,
  sourceCodeUrl,
  imageUrl,
  icon
}) => {
  console.log(`ProjectCard loaded for: ${title}`);

  return (
    <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <CardHeader className="flex flex-row items-start gap-4 space-y-0 pb-4">
        <div className="flex-shrink-0">
          {imageUrl ? (
            <img src={imageUrl} alt={`${title} preview`} className="h-16 w-16 object-cover rounded-lg border" />
          ) : icon ? (
            <div className="flex items-center justify-center h-16 w-16 bg-muted rounded-lg border">
              {icon}
            </div>
          ) : (
            <div className="flex items-center justify-center h-16 w-16 bg-muted rounded-lg border">
              <ImageIcon className="h-8 w-8 text-muted-foreground" />
            </div>
          )}
        </div>
        <div className="flex-grow">
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
          <CardDescription className="mt-1 line-clamp-3">{description}</CardDescription>
        </div>
      </CardHeader>

      <CardContent className="flex-grow">
        <div className="text-sm font-medium mb-2 text-muted-foreground">Tech Stack</div>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <Badge key={tech} variant="secondary" className="font-mono">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex items-center gap-2 pt-4 mt-auto border-t">
        {liveDemoUrl && (
          <Button asChild variant="outline" className="flex-1">
            <a href={liveDemoUrl} target="_blank" rel="noopener noreferrer">
              Live Demo
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        )}
        {sourceCodeUrl && (
          <Button asChild variant="outline" className="flex-1">
            <a href={sourceCodeUrl} target="_blank" rel="noopener noreferrer">
              Source Code
              <Github className="ml-2 h-4 w-4" />
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;