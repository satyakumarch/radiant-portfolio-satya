
import CertificateCarousel from "./CertificateCarousel";

// List of certificate data (ADD your real images at imageUrl if you wish)
// You can use Unsplash or own certificate PNGs/PDF images; for now, placeholders
const certificates = [
  {
    title: "React Frontend Developer",
    institution: "Coursera",
    period: "Issued 2024",
    description: "Certificate for successfully completing the React specialization courses, with hands-on projects and best practices.",
    percentage: 100,
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Python for Everybody",
    institution: "Coursera",
    period: "Issued 2023",
    description: "Completed a comprehensive course on Python programming, algorithms, and data processing.",
    percentage: 100,
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Full Stack Web Development",
    institution: "Udemy",
    period: "Ongoing",
    description: "Currently enrolled in a full-stack development bootcamp, learning modern web technologies and best practices.",
    percentage: 70,
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=80",
  },
];

const Certificates = () => {
  return (
    <div className="py-20 px-4 bg-background relative overflow-hidden" id="certificates">
      <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
      <div className="max-w-3xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-white text-center mb-4">
          Certificates
        </h2>
        <p className="text-xl text-white/60 text-center mb-12 max-w-2xl mx-auto">
          My certifications and ongoing achievements
        </p>
        <CertificateCarousel certificates={certificates} />
      </div>
    </div>
  );
};

export default Certificates;
