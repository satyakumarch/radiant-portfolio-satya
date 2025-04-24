
import CertificateCarousel from "./CertificateCarousel";

// All certificate data with new uploaded images
const certificates = [
  {
    title: "Internship in Web Development",
    institution: "InternsElite",
    period: "Dec 2023 - Feb 2024",
    description:
      "Internship certificate for completing a Web Development internship. Demonstrated dedication, hard work, and exceptional intelligence.",
    percentage: 100,
    imageUrl: "/lovable-uploads/3a0d2c68-c068-4fd2-bb1f-805373b249f5.png",
  },
  {
    title: "Full Stack: MERN Training",
    institution: "CipherSchools",
    period: "Mar 2025",
    description:
      "Certificate of completion for free training in Full-Stack using MERN. Gained practical skills in MERN stack development.",
    percentage: 100,
    imageUrl: "/lovable-uploads/d8dc4ded-8634-4c60-89cb-a792c0aaec55.png",
  },
  {
    title: "Mastering Data Structures & Algorithms",
    institution: "Udemy",
    period: "Dec 2023",
    description:
      "Completed 'Mastering Data Structures & Algorithms using C and C++' by Abdul Bari. 58.5 hours of in-depth learning.",
    percentage: 100,
    imageUrl: "/lovable-uploads/82fbc8fc-c3c7-4a3e-8613-d61d62ad7b4d.png",
  },
  {
    title: "NPTEL Cloud Computing",
    institution: "IIT Kharagpur / NPTEL",
    period: "Jul-Oct 2024",
    description:
      "Completed NPTEL 12 week course on Cloud Computing with 53% final score. Included graded assignments & proctored exam.",
    percentage: 100,
    imageUrl: "/lovable-uploads/e6025f56-8a86-4e4a-86ff-32dc87f7477e.png",
  },
  {
    title: "DSA in C++",
    institution: "Unstop",
    period: "2024",
    description:
      "Successfully completed the course on DSA in Cpp, validating practical algorithm skills.",
    percentage: 100,
    imageUrl: "/lovable-uploads/805de55a-7eba-46db-ab2c-03d78b72a61f.png",
  },
];

const Certificates = () => {
  return (
    <div className="py-20 px-4 bg-background relative overflow-hidden" id="certificates">
      <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
      <div className="max-w-3xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-white text-center mb-4 bounce-in">
          Certificates
        </h2>
        <p className="text-xl text-white/60 text-center mb-12 max-w-2xl mx-auto fade-in" style={{ animationDelay: "0.2s" }}>
          My certifications and ongoing achievements
        </p>
        <div className="rotate-in" style={{ animationDelay: "0.4s" }}>
          <CertificateCarousel certificates={certificates} />
        </div>
      </div>
    </div>
  );
};

export default Certificates;
