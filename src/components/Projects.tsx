
import { useState } from "react";
import { Github, ExternalLink, Star, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";

const Projects = () => {
  const [activeDemo, setActiveDemo] = useState<number | null>(null);
  
  const projects = [
    {
      title: "Electric Ease",
      description: "ElectricEase is a web-based project by satyakumarch, focusing on electricity-related services like bill tracking or consumption monitoring. Built with JavaScript, HTML, and CSS, it ensures a responsive and user-friendly interface. The project is actively developed but has no official releases yet..",
      tags: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
      image: "/boring.png",
      github: "https://github.com/satyakumarch/ElectricEase",
      liveDemo: "https://shivam26.netlify.app/",
      demo: "/boring.png",
      stars: 45
    },
    {
      title: "Hospital Management System",
      description: "hospitalnep is a healthcare-related project for hospitals in Nepal, developed using JavaScript, CSS, and HTML. It provides healthcare services or information, allowing users to interact with the system. ",
      tags: ["Next.js", "TypeScript", "PostgreSQL", "WebSockets", "Docker"],
      image: "/hospital.png",
      github: "https://github.com/satyakumarch/hospitalnep",
      liveDemo: "https://hospitalnepal.netlify.app/",
      demo: "/hospital.png",
      stars: 32
    },
    {
      title: "Foodie Food",
      description: "The Foodie Food website project is a vibrant and engaging front-end platform designed for food enthusiasts 🍽️. Built with HTML, CSS, JavaScript, and Bootstrap, it offers a visually appealing and responsive layout 🌟. Users can explore various recipes, view detailed.",
      tags: ["React", "Python", "Django", "OpenAI", "AWS"],
      image: "/food.png",
      github: "https://github.com/satyakumarch/FoodHub",
      liveDemo: "https://foodhub975.netlify.app/",
      demo: "/food.png",
      stars: 67
    },
    {
      title: "FootCap",
      description: "👟  Shores is a modern web project showcasing trendy footwear with a sleek, responsive design. It features categorized collections, interactive product details, and a seamless user experience. 🚀",
      tags: ["React", "Python", "Django", "OpenAI", "AWS"],
      image: "/shoes.png",
      github: "https://github.com/satyakumarch/Shores",
      liveDemo: "https://footcap.netlify.app/",
      demo: "/shoes.png",
      stars: 67
    },
    {
      title: "Netflix",
      description: "The Netflix project involves creating a visually appealing and user-friendly streaming platform interface using front-end technologies ",
      tags: ["React", "Python", "Django", "OpenAI", "AWS"],
      image: "/netflix.png",
      github: "https://github.com/satyakumarch/Netflix",
      liveDemo: "https://flexsphere.netlify.app/",
      demo: "/netflix.png",
      stars: 67
    },
    {
      title: "AC",
      description: "The Foodie Food website project is a vibrant and engaging front-end platform designed for food enthusiasts 🍽️. Built with HTML, CSS, JavaScript, and Bootstrap, it offers a visually appealing and responsive layout 🌟. Users can explore various recipes, view detailed.",
      tags: ["React", "Python", "Django", "OpenAI", "AWS"],
      image: "/AC.png",
      github: "https://github.com/satyakumarch/AC",
      liveDemo: "https://smartac.netlify.app/",
      demo: "/AC.png",
      stars: 67
    }
  ];

  const showDemo = (index: number) => {
    setActiveDemo(index);
  };

  const closeDemo = () => {
    setActiveDemo(null);
  };

  const handleVisitGithub = (url: string, projectName: string) => {
    // Open in a new tab
    window.open(url, "_blank");
    toast({
      title: "Opening GitHub Repository",
      description: `Navigating to ${projectName}'s source code`,
    });
  };

  const handleVisitLiveDemo = (url: string, projectName: string) => {
    // Open in a new tab
    window.open(url, "_blank");
    toast({
      title: "Opening Live Demo",
      description: `Navigating to ${projectName}'s live demo site`,
    });
  };

  return (
    <div className="py-20 px-4 bg-background" id="projects">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-4">
          Featured Projects
        </h2>
        <p className="text-xl text-white/60 text-center mb-12 max-w-2xl mx-auto">
          Showcase of my best work and technical capabilities
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover-lift glass-effect border-0 animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
              <div className="h-48 overflow-hidden group">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button 
                    className="bg-accent hover:bg-accent/80 scale-90 hover:scale-100 transition-transform duration-300"
                    onClick={() => showDemo(index)}
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
                      onClick={() => handleVisitGithub(project.github, project.title)}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="hover:bg-white/10"
                      onClick={() => showDemo(index)}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
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

      {/* Project Demo Modal */}
      {activeDemo !== null && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 animate-fade-in">
          <div className="relative w-full max-w-4xl bg-background border border-white/10 rounded-lg overflow-hidden animate-scale-in">
            <div className="p-4 flex justify-between items-center border-b border-white/10">
              <h3 className="text-xl font-semibold text-white">
                {projects[activeDemo].title} Preview
              </h3>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={closeDemo}
                className="hover:bg-white/10 text-white"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
            <div className="aspect-video overflow-hidden">
              <img 
                src={projects[activeDemo].demo} 
                alt={`${projects[activeDemo].title} Demo`} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 bg-black/30">
              <p className="text-white/70 mb-4">
                This is a preview of the {projects[activeDemo].title}. In a real portfolio, this could be an interactive demo or a video showcasing the project functionality.
              </p>
              <div className="flex justify-end space-x-3">
                <Button 
                  variant="outline" 
                  className="border-white/20 text-white hover:bg-white/10"
                  onClick={closeDemo}
                >
                  Close
                </Button>
                <Button 
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10"
                  onClick={() => handleVisitGithub(projects[activeDemo].github, projects[activeDemo].title)}
                >
                  <Github className="w-4 h-4 mr-2" />
                  View Code
                </Button>
                <Button 
                  className="bg-accent hover:bg-accent/80"
                  onClick={() => handleVisitLiveDemo(projects[activeDemo].liveDemo, projects[activeDemo].title)}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Live Site
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
