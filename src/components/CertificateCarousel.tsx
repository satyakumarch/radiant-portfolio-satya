
import { useEffect, useState, useRef } from "react";
import { Card } from "@/components/ui/card";
import { RotateCw, RotateCcw } from "lucide-react";

type Certificate = {
  title: string;
  institution: string;
  period: string;
  description: string;
  percentage: number;
  imageUrl: string;
};

interface Props {
  certificates: Certificate[];
}

const AUTO_PLAY_INTERVAL = 3400;

const CertificateCarousel = ({ certificates }: Props) => {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [animDirection, setAnimDirection] = useState<"left" | "right">("right");

  const prev = () => {
    setAnimDirection("left");
    setIndex((i) => (i === 0 ? certificates.length - 1 : i - 1));
  };
  const next = () => {
    setAnimDirection("right");
    setIndex((i) => (i === certificates.length - 1 ? 0 : i + 1));
  };

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setAnimDirection("right");
      setIndex((i) => (i + 1) % certificates.length);
    }, AUTO_PLAY_INTERVAL);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [index, certificates.length]);

  return (
    <div className="relative flex flex-col items-center justify-center w-full max-w-xl mx-auto">
      {/* IMAGE SLIDE */}
      <div className="relative w-full h-56 md:h-72 flex items-center justify-center overflow-hidden mb-4">
        {certificates.map((cert, i) => (
          <img
            key={cert.imageUrl}
            src={cert.imageUrl}
            alt={cert.title}
            className={
              "absolute w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-700 " +
              (i === index
                ? "opacity-100 z-10 animate-in fade-in"
                : "opacity-0 z-0 pointer-events-none")
              +
              (animDirection === "right"
                ? " animate-slide-in-right"
                : " animate-fade-in") // Animations handled by tailwind utility
            }
            style={{
              transition: "opacity 0.7s, transform 0.7s",
            }}
          />
        ))}
        {/* Navigation arrows */}
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 shadow transition"
          aria-label="Previous"
        >
          <RotateCcw className="w-5 h-5" />
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 shadow transition"
          aria-label="Next"
        >
          <RotateCw className="w-5 h-5" />
        </button>
      </div>
      {/* DETAILS */}
      <div className="w-full">
        {certificates.map((cert, i) =>
          i === index ? (
            <Card
              key={cert.title}
              className="p-6 glass-effect w-full text-center animate-fade-in"
            >
              <h3 className="text-xl font-semibold text-white mb-1">{cert.title}</h3>
              <div className="flex justify-center items-center gap-3 mb-2">
                <span className="text-accent">{cert.institution}</span>
                <span className="text-white/50">|</span>
                <span className="text-white/70 flex items-center gap-1">
                  {cert.period}
                </span>
              </div>
              <p className="text-white/80 mb-4">{cert.description}</p>
              <div className="mb-1">
                <span className="text-xs text-white/60">
                  Completion: {cert.percentage}%
                </span>
                <div className="w-full h-2 bg-white/10 rounded-full mt-1">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-accent to-primary transition-all duration-700"
                    style={{ width: cert.percentage + "%" }}
                  />
                </div>
              </div>
            </Card>
          ) : null
        )}
      </div>
      {/* Slide dots */}
      <div className="flex justify-center gap-2 mt-3">
        {certificates.map((_, i) => (
          <div
            key={i}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
              i === index
                ? "bg-accent scale-110 shadow"
                : "bg-accent/30 hover:bg-accent/60"
            }`}
            onClick={() => { setIndex(i); setAnimDirection(i > index ? "right" : "left"); }}
          />
        ))}
      </div>
    </div>
  );
};

export default CertificateCarousel;
