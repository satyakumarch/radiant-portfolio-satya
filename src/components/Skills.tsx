import { Code, Database, Terminal, Layout, Server, Globe, Braces, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Layout className="w-6 h-6 text-accent" />,
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "HTML/CSS"]
    },
    {
      title: "Backend",
      icon: <Server className="w-6 h-6 text-accent" />,
      skills: ["Node.js", "Express", "Python", "Java"]
    },
    {
      title: "Database",
      icon: <Database className="w-6 h-6 text-accent" />,
      skills: ["MongoDB",  "MySQL", "Firebase", ]
    },
    {
      title: "DevOps",
      icon: <Terminal className="w-6 h-6 text-accent" />,
      skills: ["Docker", "AWS",  "Git"]
    },
    {
      title: "Languages",
      icon: <Code className="w-6 h-6 text-accent" />,
      skills: ["JavaScript", "TypeScript", "Python", "Java", "SQL"]
    },
    {
      title: "Other",
      icon: <Sparkles className="w-6 h-6 text-accent" />,
      skills: ["GraphQL", "REST API", "WebSockets", "OAuth", "Microservices", "Unit Testing"]
    }
  ];

  return (
    <div className="py-20 px-4 bg-background relative overflow-hidden" id="skills">
      <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-white text-center mb-4 bounce-in">
          Technical Skills
        </h2>
        <p className="text-xl text-white/60 text-center mb-12 max-w-2xl mx-auto fade-in" style={{ animationDelay: "0.2s" }}>
          A diverse toolkit built over years of solving complex problems
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animate">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="p-6 card-hover glass-effect fade-in-up"
              style={{ animationDelay: `${index * 0.1 + 0.4}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/80"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
