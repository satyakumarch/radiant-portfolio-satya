import { GraduationCap } from "lucide-react";

const educations = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    branch: "Computer Science & Engineering",
    institution: "Arya College of Engineering & IT, Jaipur",
    year: "2021 - 2025",
    score: "CGPA: 8.2/10",
  },
  {
    degree: "Intermediate (12th)",
    institution: "Jawahar Navodaya Vidyalaya, Saran",
    year: "2018 - 2020",
    score: "Percentage: 78.2%",
  },
  {
    degree: "Matriculation (10th)",
    institution: "Jawahar Navodaya Vidyalaya, Saran",
    year: "2017 - 2018",
    score: "Percentage: 89.5%",
  },
];

// New unique structure and layout from Experience, still keeping the same colors
const Education = () => (
  <section id="education" className="relative py-20 px-4 bg-background overflow-hidden">
    {/* Glass effect background shapes */}
    <div className="absolute left-0 top-1/3 w-60 h-60 bg-accent/10 blur-3xl rounded-full -z-10" />
    <div className="absolute right-0 bottom-0 w-48 h-48 bg-accent/20 blur-2xl rounded-full -z-10" />
    <div className="max-w-3xl mx-auto relative z-10">
      <h2 className="text-4xl font-bold text-center text-white mb-8 flex items-center justify-center gap-2">
        <GraduationCap className="text-accent" size={36} />
        Education
      </h2>
      {/* Timeline Style Education */}
      <div className="relative pl-8 md:pl-20">
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-accent/40 to-transparent rounded"></div>
        {educations.map((edu, idx) => (
          <div
            key={idx}
            className="relative mb-12"
          >
            <div className="absolute -left-1 md:-left-5 top-1.5 w-4 h-4 bg-accent border-4 border-white rounded-full shadow animate-pulse"></div>
            <div className="bg-white/10 backdrop-blur p-6 rounded-xl shadow-md ml-8 md:ml-16 hover:scale-105 transition-transform">
              <h3 className="text-2xl font-semibold text-accent mb-1">{edu.degree}</h3>
              {edu.branch && (
                <p className="text-lg text-white/90 mb-1">{edu.branch}</p>
              )}
              <p className="text-white/80 mb-1">at {edu.institution}</p>
              <div className="flex flex-wrap items-center gap-4 text-white/70 mt-2">
                <span>{edu.year}</span> | <span>{edu.score}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
