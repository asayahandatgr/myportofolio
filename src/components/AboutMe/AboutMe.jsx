import React from 'react';
import DecryptedText from '../../ui/TextAnimations/DecryptedText/DecryptedText';
import ProfileCard from '../../ui/Components/ProfileCard/ProfileCard';
import AnimatedContent from '../../ui/Animations/AnimatedContent/AnimatedContent';

const aboutText = `Hi!🙌 My name is Tegar Asayahanda Firdaus. I'm an Informatics Engineering student who wears multiple hats — web developer, web designer, and UI/UX enthusiast. I love creating digital experiences that are not only functional, but also visually engaging and user-friendly.
As a tech enthusiast, I'm always evolving — learning new skills, exploring emerging tools, and staying curious about the ever-changing world of technology. Whether I'm building something from scratch or refining a user journey, I bring a mix of logic, creativity, and a constant drive to grow.`;

const AboutMe = () => {
  return (
    <section
      id="about"
      className="w-full min-h-screen flex items-center justify-center bg-black px-6"
    >
      <AnimatedContent
        distance={300}
        direction="vertical"
        reverse={false}
        duration={1.5}
        ease="expo.out"
        initialOpacity={0.2}
        animateOpacity
        scale={1}
        threshold={0.2}
        delay={0}
      >
        <div className="flex flex-col md:flex-row items-center justify-center md:gap-16 w-full max-w-6xl">
          {/* Text Side */}
          <div className="md:basis-2/3 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center w-full mb-6">
              <span className="font-mono bg-gradient-to-r from-purple-400 to-blue-400 text-transparent animate-gradient-x bg-clip-text text-2xl md:text-3xl text-[#bfaaff]">About me</span>
              <span className="flex-1 ml-4 h-px bg-[#bfaaff] opacity-60"></span>
            </div>
            <div className="text-lg md:text-xl text-white font-mono max-w-xl">
              <DecryptedText
                text={aboutText}
                className="text-lg md:text-xl text-white font-mono"
                animateOn="view"
              />
            </div>
            <div className="mt-4">
              <button className="bg-gradient-to-r from-purple-400 to-blue-400 text-white rounded-full p-2 shadow-lg hover:scale-105 transition">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5v-9m0 0L8.25 7.5M12 7.5l3.75 3.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Profile Card Side */}
          <div className="md:basis-1/3 mt-10 md:mt-0">
            <div style={{ transform: 'scale(0.8)', transformOrigin: 'center' }}>
              <ProfileCard
                avatarUrl="./tegaer.png"
                name="Tegar Asayahanda F."
                title="Software Engineer"
                handle="tegarasayahanda"
                status="Available"
                contactText="Contact"
              />
            </div>
          </div>
        </div>
      </AnimatedContent>
    </section>
  );
};

export default AboutMe;
