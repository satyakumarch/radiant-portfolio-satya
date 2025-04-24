
import { Github, ExternalLink, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ProjectType } from "./types";

interface ProjectCardProps {
  project: ProjectType;
  index: number;
  onShowDemo: (index: number) => void;
  onVisitGithub: (url: string, projectName: string) => void;
}

export const ProjectCard = ({ project, index, onShowDemo, onVisitGithub }: ProjectCardProps) => {
  return (
    <Card 
      className="overflow-hidden card-hover glass-effect border-0 fade-in-up" 
      style={{ animationDelay: `${index * 0.1 + 0.4}s` }}
    >
      <div className="h-48 overflow-hidden group">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
        />
        <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button 
            className="bg-accent hover:bg-accent/80 scale-90 hover:scale-100 transition-transform duration-300"
            onClick={() => onShowDemo(index)}
          >
            View Preview
          </Button>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
        <p className="text-white/70 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="px-2 py-1 bg-accent/20 rounded-md text-xs text-white/80"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center space-x-1 text-white/60">
            <Star className="w-4 h-4" />
            <span className="text-sm">{project.stars}</span>
          </div>
          
          <div className="flex space-x-2">
            <Button 
              variant="ghost" 
              size="sm" 
              className="hover:bg-white/10"
              onClick={() => onVisitGithub(project.github, project.title)}
            >
              <Github className="w-4 h-4 mr-2" />
              Code
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="hover:bg-white/10"
              onClick={() => onShowDemo(index)}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Demo
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
