
import { Briefcase, Calendar, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Education = () => {
  const experiences = [
    {

      title: "Bachelor of Computer Science and Engineering",
      University: "Lovely Professional University",
      period: "2022 - Present",
      description: "Pursuing a Bachelor's degree with a focus on full-stack development, data structures, and algorithms. Gained a strong foundation in programming languages, web development, and software engineering principles.",
      Skills: "HTML, CSS, JavaScript, Python, SQL, C++, Web Development, Data Structures, Algorithms"

    },
    {
      title: "Intermediate in Science",
      College: "Shree janchetana  Secondary School",
      period: "2019 - 2021",
      description: "Completed my intermediate education with a focus on science subjects. Developed a strong analytical and problem-solving mindset.",
      Skills: "HTML, CSS, JavaScript, Python, SQL, C++, Web Development, Data Structures, Algorithms"

    },
    {
      title: "Marticulation",
      College: "Shree janchetana  Secondary School",
      period: "2018 - 2019",
      description: "Completed my secondary education with a focus on science subjects. Developed a strong analytical and problem-solving mindset.",
      Skills: "HTML, CSS, JavaScript, Python, SQL, C++, Web Development, Data Structures, Algorithms"

    },

  ];

  return (
    <div className="py-20 px-4 bg-background relative overflow-hidden" id="experience">
      <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-white text-center mb-4">
          Education
        </h2>
        <p className="text-xl text-white/60 text-center mb-12 max-w-2xl mx-auto">
          My professional journey building digital solutions
        </p>

        <div className="relative flex flex-col space-y-8 ml-4">
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
                  <span>{exp.University || exp.College}</span>
                </div>

                <p className="text-white/70 mb-4">{exp.description}</p>

                <Separator className="my-4 bg-white/10" />

                <div className="flex flex-wrap gap-2">
                  {exp.Skills.split(', ').map((skill, i) => (
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

        {/* <div className="mt-12 text-center">
          <a href="#" className="inline-flex items-center text-accent hover:text-accent/80 transition-colors">
            Download Full Resume
            <ChevronRight className="w-4 h-4 ml-1" />
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Education;
