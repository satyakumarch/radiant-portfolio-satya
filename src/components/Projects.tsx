
import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { ProjectCard } from "./projects/ProjectCard";
import { ProjectModal } from "./projects/ProjectModal";
import { projects } from "./projects/projectsData";
import type { ProjectType } from "./projects/types";

export const Projects = () => {
  const [activeDemo, setActiveDemo] = useState<number | null>(null);
  
  const showDemo = (index: number) => {
    setActiveDemo(index);
  };

  const closeDemo = () => {
    setActiveDemo(null);
  };

  const handleVisitGithub = (url: string, projectName: string) => {
    window.open(url, "_blank");
    toast({
      title: "Opening GitHub Repository",
      description: `Navigating to ${projectName}'s source code`,
    });
  };

  const handleVisitLiveDemo = (url: string, projectName: string) => {
    window.open(url, "_blank");
    toast({
      title: "Opening Live Demo",
      description: `Navigating to ${projectName}'s live demo site`,
    });
  };

  return (
    <div className="py-20 px-4 bg-background" id="projects">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-4 fade-in">
          Featured Projects
        </h2>
        <p className="text-xl text-white/60 text-center mb-12 max-w-2xl mx-auto fade-in" style={{ animationDelay: "0.2s" }}>
          Showcase of my best work and technical capabilities
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project as ProjectType}
              index={index}
              onShowDemo={showDemo}
              onVisitGithub={handleVisitGithub}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            className="bg-accent hover:bg-accent/80"
            onClick={() => window.open("https://github.com/satyakumarch", "satyakumarch")}
          >
            View All Projects
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>

      {activeDemo !== null && (
        <ProjectModal
          project={projects[activeDemo] as ProjectType}
          onClose={closeDemo}
          onVisitGithub={handleVisitGithub}
          onVisitLiveDemo={handleVisitLiveDemo}
        />
      )}
    </div>
  );
};

export default Projects;
