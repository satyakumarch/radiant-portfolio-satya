
import { Award, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useEffect, useRef, useState } from "react";

const Certificates = () => {
  // You can add your actual certificates here
  const certificates = [
    {
      title: "React Frontend Developer",
      institution: "Coursera",
      period: "Issued 2024",
      description: "Certificate for successfully completing the React specialization courses, with hands-on projects and best practices.",
      percentage: 100,
    },
    {
      title: "Python for Everybody",
      institution: "Coursera",
      period: "Issued 2023",
      description: "Completed a comprehensive course on Python programming, algorithms, and data processing.",
      percentage: 100,
    },
    {
      title: "Full Stack Web Development",
      institution: "Udemy",
      period: "Ongoing",
      description: "Currently enrolled in a full-stack development bootcamp, learning modern web technologies and best practices.",
      percentage: 70,
    },
  ];

  // Animation on scroll
  const sectionRef = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) setAnimate(true);
    }
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="py-20 px-4 bg-background relative overflow-hidden"
      id="certificates"
      ref={sectionRef}
    >
      <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-white text-center mb-4">
          <span className="inline-flex items-center gap-2">
            <Award className="w-7 h-7 text-accent" />
            Certificates
          </span>
        </h2>
        <p className="text-xl text-white/60 text-center mb-12 max-w-2xl mx-auto">
          My certifications and ongoing achievements
        </p>
        <div className="relative flex flex-col space-y-8 ml-4">
          <div className="absolute left-0 top-2 bottom-0 w-0.5 bg-accent/20"></div>
          {certificates.map((cert, index) => (
            <div
              key={index}
              className={`relative pl-8 transition-all duration-700 section-animate ${
                animate ? "animate-in fade-in" : ""
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="absolute left-[-8px] top-2 w-4 h-4 rounded-full bg-accent"></div>
              <Card className="p-6 glass-effect hover-lift">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h3 className="text-xl font-semibold text-white">
                    {cert.title}
                  </h3>
                  <div className="flex items-center text-white/60 text-sm mt-1 md:mt-0">
                    <Calendar className="w-4 h-4 mr-1" />
                    {cert.period}
                  </div>
                </div>
                <div className="flex items-center mb-4 text-accent">
                  <Award className="w-4 h-4 mr-2" />
                  <span>{cert.institution}</span>
                </div>
                <p className="text-white/70 mb-4">{cert.description}</p>
                {/* Progress indicator */}
                <div className="mb-2">
                  <div className="flex justify-between items-center mb-1 text-xs">
                    <span className="text-white/80">
                      Completion: {cert.percentage}%
                    </span>
                  </div>
                  <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-3 rounded-full bg-gradient-to-r from-accent to-primary transition-all duration-700"
                      style={{ width: `${cert.percentage}%` }}
                    ></div>
                  </div>
                </div>
                <Separator className="my-4 bg-white/10" />
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;
