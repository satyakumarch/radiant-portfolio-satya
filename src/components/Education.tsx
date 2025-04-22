
import { GraduationCap, Book, School } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";

const accentBg = "bg-gradient-to-br from-[#9b87f5]/50 via-[#7E69AB]/30 to-[#F1F0FB]/70";
const timelineBarColor = "bg-[#E5DEFF]";

const Education = () => {
  const educations = [
    {
      title: "Bachelor of Computer Science and Engineering",
      institution: "Lovely Professional University",
      period: "2022 - Present",
      description:
        "Pursuing a Bachelor's degree with special focus on full-stack engineering, software principles, and algorithms.",
      percentage: 60,
    },
    {
      title: "Intermediate in Science",
      institution: "Shree Janchetana Secondary School",
      period: "2019 - 2021",
      description:
        "Completed intermediate studies focusing on science and mathematics, nurturing analytical skills.",
      percentage: 100,
    },
    {
      title: "Matriculation",
      institution: "Shree Janchetana Secondary School",
      period: "2018 - 2019",
      description:
        "Completed secondary education focusing on science, building a solid foundation for further studies.",
      percentage: 100,
    },
  ];

  // Animation on scroll (preserved)
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
      className={`relative overflow-hidden section-padding`}
      id="education"
      ref={sectionRef}
    >
      {/* Background accent shape */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90vw] h-[60vh] 
                  bg-gradient-to-br from-[#edeaff]/70 via-[#dbd4fa]/40 to-[#dad7fc]/10 blur-3xl opacity-60 animate-float z-0 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="flex flex-col items-center mb-4">
          {/* Distinctive icon and heading */}
          <div className="bg-white/10 rounded-full shadow-lg mb-2 p-4 backdrop-blur-md border border-white/30">
            <GraduationCap className="w-12 h-12 text-[#9b87f5] drop-shadow" />
          </div>
          <h2 className="text-4xl font-bold text-[#403E43] text-center mb-2 drop-shadow">
            Education
          </h2>
          <p className="text-lg text-[#7E69AB] text-center mb-7 max-w-2xl mx-auto font-medium">
            My academic journey & learning milestones
          </p>
        </div>
        <div className="relative flex flex-col gap-12 pl-6 sm:pl-12 py-4">
          {/* Timeline soft vertical bar */}
          <div className={`absolute left-2 top-8 bottom-0 w-[3px] ${timelineBarColor} rounded-full z-0`} />

          {educations.map((edu, index) => (
            <div
              key={index}
              className={`relative transition-all 
              ${animate ? "opacity-100 translate-y-0 animate-fade-in" : "opacity-0 translate-y-8"}
              `}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              {/* Timeline dot */}
              <div className="absolute left-[-10px] top-10 w-6 h-6 rounded-full border-4 border-[#F1F0FB] bg-[#9b87f5] shadow-lg"></div>
              
              <Card className={`relative p-7 pt-6 pr-6 rounded-3xl border-0 shadow-md glass-effect ${accentBg}`}>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
                  <h3 className="flex items-center gap-2 text-2xl font-bold text-[#1A1F2C] mb-2 sm:mb-0">
                    <Book className="w-6 h-6 text-[#7E69AB]" /> {edu.title}
                  </h3>
                  <span className="text-[#9b87f5] text-sm font-semibold px-2 py-1 rounded-xl bg-[#edeaff]/60 shadow-inner flex items-center gap-1 mb-2 sm:mb-0">
                    <School className="w-4 h-4" /> {edu.institution}
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-2 text-[#6E59A5] font-semibold text-sm">
                  <span>{edu.period}</span>
                </div>
                <p className="text-[#403E43]/80 leading-relaxed font-medium mb-5">{edu.description}</p>
                {/* Progress indicator */}
                <div>
                  <div className="flex justify-between items-center text-xs font-semibold mb-1 text-[#555]">
                    <span>Completion</span>
                    <span className="ml-1">{edu.percentage}%</span>
                  </div>
                  <div className="w-full h-3 bg-[#E5DEFF]/60 rounded-full overflow-hidden shadow-inner relative">
                    <div
                      className="h-3 rounded-full bg-gradient-to-r from-[#9b87f5] via-[#7E69AB] to-[#F1F0FB] transition-all duration-700"
                      style={{width: `${edu.percentage}%`}}
                    ></div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;

