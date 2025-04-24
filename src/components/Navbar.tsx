import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Code, Briefcase, User,User1, Mail, Home } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", icon: <Home className="w-4 h-4 mr-2" />, href: "#home" },
    { name: "Skills", icon: <Code className="w-4 h-4 mr-2" />, href: "#skills" },
    { name: "Projects", icon: <Briefcase className="w-4 h-4 mr-2" />, href: "#projects" },
    { name: "Experience", icon: <User className="w-4 h-4 mr-2" />, href: "#experience" },
    { name: "Education", icon: <User className="w-4 h-4 mr-2" />, href: "#education" },
    { name: "Contact", icon: <Mail className="w-4 h-4 mr-2" />, href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${
      scrolled ? "bg-background/90 backdrop-blur-lg shadow-md" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold text-white hover-scale">SatyaTech</div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <a 
              key={index} 
              href={item.href} 
              className="flex items-center text-white/80 hover:text-white transition-colors story-link"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {item.icon}
              {item.name}
            </a>
          ))}
          <Button className="bg-accent hover:bg-accent/80 hover-scale">
            Download Resume
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-white hover-scale"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg p-4 border-t border-white/10 animate-fade-in">
          <div className="flex flex-col space-y-4">
            {navItems.map((item, index) => (
              <a 
                key={index} 
                href={item.href} 
                className="flex items-center text-white/80 hover:text-white transition-colors p-2 hover-scale"
                onClick={() => setIsOpen(false)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.icon}
                {item.name}
              </a>
            ))}
            <Button className="bg-accent hover:bg-accent/80 mt-2 hover-scale">
              Download Resume
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
