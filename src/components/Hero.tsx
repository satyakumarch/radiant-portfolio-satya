import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Twitter } from "lucide-react";

// Sample resume file for download
const RESUME_URL = "/satyabestcv.pdf";

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const texts = ["Frontend Developer", "Backend Developer", "Full Stack Developer"];
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseDuration = 1500;

  // Text animation effect
  useEffect(() => {
    const currentText = texts[textIndex];
    let timer;

    if (!isDeleting) {
      // Typing effect
      if (displayText.length < currentText.length) {
        timer = setTimeout(() => {
          setDisplayText(currentText.substring(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        // Pause before deleting
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else {
      // Deleting effect
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(currentText.substring(0, displayText.length - 1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, textIndex, texts]);

  // Scroll to contact section
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Handle resume download
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = RESUME_URL;
    link.download = "satyabestcv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-20 bg-background relative overflow-hidden">
      {/* Background gradient elements with animations */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-accent/10 backdrop-blur-sm rounded-full text-accent mb-4">
            <span className="relative">
              {displayText}
              <span className="absolute right-[-8px] top-0 h-full w-0.5 bg-accent animate-pulse"></span>
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight animate-scale-in" style={{ animationDelay: "0.2s" }}>
            Hello, I'm <span className="text-accent">Satya</span> Kumar
          </h1>
          <p className="text-lg text-white/80 max-w-xl animate-scale-in" style={{ animationDelay: "0.4s" }}>
            I build exceptional and accessible digital experiences for the web. Specialized in creating modern, responsive applications with cutting-edge technologies.
          </p>
          
          <div className="flex flex-wrap gap-4 animate-scale-in" style={{ animationDelay: "0.6s" }}>
            <Button 
              className="px-6 py-6 text-lg bg-accent text-white hover:bg-accent/90 flex items-center gap-2 hover-scale"
              onClick={handleDownloadResume}
            >
              <Download className="w-5 h-5" />
              Download Resume
            </Button>
            <Button 
              variant="outline" 
              className="px-6 py-6 text-lg border-white/20 text-white hover:bg-white/10 hover-scale"
              onClick={scrollToContact}
            >
              Contact Me
            </Button>
          </div>
          
          <div className="flex space-x-4 pt-4 animate-scale-in" style={{ animationDelay: "0.8s" }}>
            <a href="https://github.com/satyakumarch" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent/20 transition-colors hover-scale">
              <Github className="w-5 h-5 text-white" />
            </a>
            <a href="https://www.linkedin.com/in/satyakumar12/" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent/20 transition-colors hover-scale">
              <Linkedin className="w-5 h-5 text-white" />
            </a>
            <a href="https://x.com/ChaudharyK27157" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent/20 transition-colors hover-scale">
              <Twitter className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>
        {/* Image - moved higher with larger negative margin top */}
        <div className="relative animate-fade-in -mt-24" style={{ animationDelay: "0.4s" }}>
          <div className="relative z-10 rounded-full overflow-hidden border-4 border-accent/20 shadow-2xl w-80 h-80 mx-auto hover-scale">
            <img
              src="/satya12.jpg"
              className="w-full h-full object-cover transform transition-transform duration-800 hover:scale-110"
            />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
