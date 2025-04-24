
import { X, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectType } from "./types";

interface ProjectModalProps {
  project: ProjectType;
  onClose: () => void;
  onVisitGithub: (url: string, projectName: string) => void;
  onVisitLiveDemo: (url: string, projectName: string) => void;
}

export const ProjectModal = ({ project, onClose, onVisitGithub, onVisitLiveDemo }: ProjectModalProps) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 animate-fade-in">
      <div className="relative w-full max-w-4xl bg-background border border-white/10 rounded-lg overflow-hidden animate-scale-in">
        <div className="p-4 flex justify-between items-center border-b border-white/10">
          <h3 className="text-xl font-semibold text-white">
            {project.title} Preview
          </h3>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={onClose}
            className="hover:bg-white/10 text-white"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>
        <div className="aspect-video overflow-hidden">
          <img 
            src={project.demo} 
            alt={`${project.title} Demo`} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4 bg-black/30">
          <p className="text-white/70 mb-4">
            This is a preview of the {project.title}. In a real portfolio, this could be an interactive demo or a video showcasing the project functionality.
          </p>
          <div className="flex justify-end space-x-3">
            <Button 
              variant="outline" 
              className="border-white/20 text-white hover:bg-white/10"
              onClick={onClose}
            >
              Close
            </Button>
            <Button 
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10"
              onClick={() => onVisitGithub(project.github, project.title)}
            >
              <Github className="w-4 h-4 mr-2" />
              View Code
            </Button>
            <Button 
              className="bg-accent hover:bg-accent/80"
              onClick={() => onVisitLiveDemo(project.liveDemo, project.title)}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              View Live Site
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
