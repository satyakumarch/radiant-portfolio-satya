import { Briefcase, Calendar, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer Intern",
      company: "Unified mentor",
      period: "Mar/2025 - Present",
      description: "Developed and maintained user interfaces for various web applications. Collaborated with designers to implement responsive designs and improve user experience.",
      skills: ["JavaScript", "HTML/CSS", "Vue.js", "MongoDB", "React.js",]
    },
    {
      title: "Web Development Intern",
      company: "Intern Elite",
      period: "Dec/2023 - Feb/2024",
      description: "Worked on a project to develop a web application using React and Node.js. Gained hands-on experience in full-stack development and agile methodologies.",
      skills: ["React", "Node.js", "Express", "MongoDB", "Git"]
    },
    {
      title: "software Engineer Intern",
      company: "Nepal Telecom",
      period: "Sep/2021 - Mar/2022",
      description: "Developed and maintained user interfaces for various web applications. Collaborated with designers to implement responsive designs and improve user experience.",
      skills: ["JavaScript", "HTML/CSS", "Vue.js", "MongoDB", "React.js",]
    }
 
  ];

  return (
    <div className="py-20 px-4 bg-background relative overflow-hidden" id="experience">
      <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-white text-center mb-4 bounce-in">
          Work Experience
        </h2>
        <p className="text-xl text-white/60 text-center mb-12 max-w-2xl mx-auto fade-in" style={{ animationDelay: "0.2s" }}>
          My professional journey building digital solutions
        </p>
        
        <div className="relative flex flex-col space-y-8 ml-4 stagger-animate">
          {/* Timeline line */}
          <div className="absolute left-0 top-2 bottom-0 w-0.5 bg-accent/20"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8">
              {/* Timeline dot */}
              <div className="absolute left-[-8px] top-2 w-4 h-4 rounded-full bg-accent"></div>
              
              <Card className="p-6 glass-effect">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                  <div className="flex items-center text-white/60 text-sm mt-1 md:mt-0">
                    <Calendar className="w-4 h-4 mr-1" />
                    {exp.period}
                  </div>
                </div>
                
                <div className="flex items-center mb-4 text-accent">
                  <Briefcase className="w-4 h-4 mr-2" />
                  <span>{exp.company}</span>
                </div>
                
                <p className="text-white/70 mb-4">{exp.description}</p>
                
                <Separator className="my-4 bg-white/10" />
                
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-white/10 rounded-md text-xs text-white/80"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="#" className="inline-flex items-center text-accent hover:text-accent/80 transition-colors">
            Download Full Resume
            <ChevronRight className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Experience;
