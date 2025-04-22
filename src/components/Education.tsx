
import { GraduationCap, BookOpen, School } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";

// Color theme (retained)
const accentBg = "bg-gradient-to-br from-[#9b87f5]/50 via-[#7E69AB]/30 to-[#F1F0FB]/70";

// Animation utility
const useAnimateOnView = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) setInView(true);
    }
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return [ref, inView] as const;
};

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

  const [wrapperRef, inView] = useAnimateOnView();

  return (
    <div className="relative section-padding bg-transparent overflow-visible" id="education">
      {/* Decorative background shape */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90vw] h-[40vh]
        bg-gradient-to-br from-[#edeaff]/80 via-[#dbd4fa]/40 to-[#dad7fc]/10 blur-3xl opacity-40 pointer-events-none -z-10"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col items-center mb-8">
          <div className="bg-white/10 rounded-full shadow-lg mb-2 p-4 backdrop-blur-md border border-white/30">
            <GraduationCap className="w-12 h-12 text-[#9b87f5]" />
          </div>
          <h2 className="text-4xl font-bold text-[#403E43] text-center">Education</h2>
          <p className="text-lg text-[#7E69AB] text-center mt-2 font-medium">
            My academic journey & milestones
          </p>
        </div>
        {/* Horizontal Stepper Cards */}
        <div
          ref={wrapperRef}
          className="flex flex-col md:flex-row gap-8 md:gap-6 justify-center items-stretch mt-8 px-2 md:px-0 relative"
        >
          {educations.map((edu, idx) => (
            <div
              key={idx}
              className={`
                flex-1 min-w-[265px] max-w-sm flex flex-col items-center relative
                transition-all duration-700
                ${inView
                  ? "opacity-100 scale-100 animate-fade-in"
                  : "opacity-0 scale-95"}
                `}
              style={{
                animationDelay: `${idx * 180}ms`
              }}
            >
              {/* Step number indicator */}
              <div className="mb-3 flex items-center justify-center">
                <div className={`rounded-full shadow-lg bg-[#9b87f5] w-12 h-12 flex items-center justify-center text-white text-2xl font-bold border-4 border-[#F1F0FB]`}>
                  {idx + 1}
                </div>
              </div>
              {/* Card */}
              <Card className={`relative glass-effect ${accentBg} px-7 py-6 rounded-3xl w-full flex flex-col items-center`}>
                <h3 className="text-2xl sm:text-xl font-extrabold flex items-center gap-2 mb-1 text-[#1A1F2C] text-center">
                  <BookOpen className="w-6 h-6 text-[#7E69AB]" /> {edu.title}
                </h3>
                <span className="inline-flex items-center gap-1 mb-2 text-[#7E69AB] font-semibold px-2 py-1 text-sm rounded-xl bg-[#edeaff]/60 shadow-sm">
                  <School className="w-4 h-4" /> {edu.institution}
                </span>
                <span className="mb-3 text-[#6E59A5] text-xs font-semibold">{edu.period}</span>
                <p className="text-[#403E43]/80 leading-relaxed text-center font-medium mb-4">{edu.description}</p>
                {/* Progress bar */}
                <div className="w-full mb-2">
                  <div className="flex justify-between text-xs font-semibold text-[#555] mb-1">
                    <span>Completion</span>
                    <span>{edu.percentage}%</span>
                  </div>
                  <div className="relative w-full h-3 bg-[#E5DEFF]/60 rounded-full overflow-hidden shadow-inner">
                    <div
                      className="absolute left-0 top-0 h-3 bg-gradient-to-r from-[#9b87f5] via-[#7E69AB] to-[#F1F0FB] rounded-full transition-all duration-700"
                      style={{ width: `${edu.percentage}%` }}
                    ></div>
                  </div>
                </div>
              </Card>
              {/* Connecting line for stepper (except last step, desktop only) */}
              {idx < educations.length - 1 && (
                <div className="hidden md:block absolute right-[-40px] top-8 w-[50px] h-[6px] bg-[#9b87f5] opacity-30 rounded-full z-0"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;

