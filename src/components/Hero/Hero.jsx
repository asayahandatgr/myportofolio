import React from "react";
import { FaMusic } from "react-icons/fa";
import RotatingText from "../../ui/TextAnimations/RotatingText/RotatingText"
import AnimatedContent from "../../ui/Animations/AnimatedContent/AnimatedContent";

const HeroSection = () => {
  return (
    <section className="aurora-bg bg-black w-full min-h-screen flex flex-col justify-center px-4 py-20 pt-32">
      <div className="max-w-4xl w-full mx-auto flex flex-col gap-8">
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
          {/* Main Content */}
          <div className="text-start w-full flex flex-col items-start">
            <h2 className="font-mono text-white text-2xl md:text-3xl mb-4">Introduce(); I'm</h2>
            <h1 className="text-6xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text mb-4 px-2 py-2 animate-gradient-x">
              Tegar Asayahanda F.
            </h1>
            <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-8 flex items-center gap-2">
              Ready for
              <RotatingText
                texts={['Web Developer', 'Web Design', 'UI UX Design']}
                mainClassName="w-[500px] px-2 sm:px-2 md:px-3 font-extrabold overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </h2>
            <p className="text-lg md:text-xl text-white max-w-2xl mb-10">
              Web Developer with experience of Digital Concept Arts, Frontend Web Designs. I love fun Web UI, collaboration and making products.<br/>
              I value simple content structure, clean design patterns, and thoughtful interactions.
            </p>
            <div className="flex gap-4">
              <button className="animate-gradient-x px-8 py-3 rounded-lg bg-gradient-to-r from-blue-400 to-purple-400 text-white font-semibold shadow-lg hover:scale-105 transition text-lg md:text-xl">
                Let's Talk!
              </button>
              {/* Icon buttons */}
              <button className="p-4 rounded-full bg-[#23243a] text-white text-xl">
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
