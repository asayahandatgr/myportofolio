import React from "react";
import { FaMusic } from "react-icons/fa";
import RotatingText from "../../ui/TextAnimations/RotatingText/RotatingText";
import AnimatedContent from "../../ui/Animations/AnimatedContent/AnimatedContent";

const HeroSection = () => {
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
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white mb-8 flex flex-nowrap items-baseline gap-2 whitespace-nowrap overflow-hidden">
              Ready for
              <RotatingText
                texts={["Web Developer", "Web Design", "UI UX Design"]}
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
              Web Developer with experience in Digital Concept Arts and Frontend Web Designs. I love fun Web UIs, collaboration, and making products. I value simple content structure, clean design patterns, and thoughtful interactions.
            </p>

            {/* Tombol CTA */}
            <div className="flex flex-wrap gap-4">
              <button className="px-6 sm:px-8 py-3 rounded-lg bg-gradient-to-r from-blue-400 to-purple-400 text-white font-semibold shadow-lg hover:scale-105 transition text-base sm:text-lg md:text-xl">
                Let's Talk!
              </button>
              <button className="p-3 sm:p-4 rounded-full bg-[#23243a] text-white text-xl hover:scale-110 transition">
                <FaMusic />
              </button>
            </div>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
};

export default HeroSection;
