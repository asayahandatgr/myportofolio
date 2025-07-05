import React, { useRef, useState } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa"; // <-- Icon ganti
import RotatingText from "../../ui/TextAnimations/RotatingText/RotatingText";
import AnimatedContent from "../../ui/Animations/AnimatedContent/AnimatedContent";

const HeroSection = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMusicToggle = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch((err) => console.error("Failed to play audio:", err));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="bg-black w-full min-h-screen flex items-center px-4 pt-32 pb-20">
      <div className="max-w-5xl w-full mx-auto flex flex-col gap-8">
        <AnimatedContent
          distance={150}
          direction="horizontal"
          reverse={false}
          duration={2}
          ease="power3.out"
          initialOpacity={0.2}
          animateOpacity
          scale={1.5}
          threshold={0.2}
          delay={0}
        >
          <div className="text-start w-full flex flex-col items-start">
            {/* Intro */}
            <h2 className="font-mono text-white text-xl sm:text-2xl md:text-3xl mb-4">
              Introduce(); I'm
            </h2>

            {/* Nama */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text mb-4 py-2 animate-gradient-x">
              Tegar Asayahanda F.
            </h1>

            {/* Ready for + Rotating Text */}
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white mb-8 flex flex-nowrap items-baseline gap-3 whitespace-nowrap overflow-hidden">
              Ready for
              <RotatingText
                texts={["Fullstack Engineer", "Frontend Engineer", "Backend Developer", "UI/UX Enthusiast"]}
                mainClassName="font-extrabold"
                staggerFrom="last"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </h2>

            {/* Deskripsi */}
            <p className="font-mono text-base sm:text-lg md:text-xl text-white max-w-2xl mb-10">
            Software Engineer with experience in building scalable fullstack applications, from crafting intuitive user interfaces to developing robust backend systems. I'm passionate about UI/UX design, clean code, and creating impactful digital products through collaboration and thoughtful engineering.
            </p>

            {/* Tombol CTA */}
            <div className="flex flex-wrap gap-4">
            <a href="#footer">
              <button className="px-6 sm:px-8 py-3 rounded-lg bg-gradient-to-r from-blue-400 to-purple-400 text-white font-semibold shadow-lg hover:scale-105 transition text-base sm:text-lg md:text-xl">
                Let's Talk!
              </button>
            </a>


              {/* Icon Musik */}
              <button
                onClick={handleMusicToggle}
                className="p-3 sm:p-4 rounded-full bg-[#23243a] text-white text-xl hover:scale-110 transition"
              >
                {isPlaying ? <FaVolumeUp /> : <FaVolumeMute />}
              </button>

              {/* Audio Element */}
              <audio ref={audioRef} src="/music/blue-yungkai.mp3" loop />
            </div>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
};

export default HeroSection;
