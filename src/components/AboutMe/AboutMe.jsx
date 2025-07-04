import React from 'react';
import ProfileCard from '../../ui/Components/ProfileCard/ProfileCard';
import AnimatedContent from '../../ui/Animations/AnimatedContent/AnimatedContent';

const aboutText = `Hi!🙌 My name is Tegar Asayahanda Firdaus. I'm an Informatics Engineering student who wears multiple hats — web developer, web designer, and UI/UX enthusiast. I love creating digital experiences that are not only functional, but also visually engaging and user-friendly.

As a tech enthusiast, I'm always evolving — learning new skills, exploring emerging tools, and staying curious about the ever-changing world of technology. Whether I'm building something from scratch or refining a user journey, I bring a mix of logic, creativity, and a constant drive to grow.`;

const AboutMe = () => {
  return (
    <section
      id="about"
      className="w-full min-h-screen flex items-center justify-center bg-black px-5 sm:px-6 py-16 sm:py-24"
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
        <div className="flex flex-col md:flex-row items-start justify-between md:gap-16 w-full max-w-6xl">
          {/* Text Side */}
          <div className="md:basis-2/3 flex flex-col items-start text-left">
            {/* Section Title */}
            <div className="flex items-center w-full mb-4">
              <span className="font-mono text-[#bfaaff] text-3xl sm:text-2xl md:text-5xl bg-gradient-to-r from-purple-400 to-blue-400 text-transparent animate-gradient-x bg-clip-text">
                About me
              </span>
              <span className="hidden sm:flex flex-1 ml-4 h-px bg-[#bfaaff] opacity-50"></span>
            </div>

            {/* Description */}
            <div className="text-base sm:text-lg md:text-xl text-white font-mono leading-relaxed text-justify space-y-4 max-w-2xl">
              {aboutText.split('\n').map((para, idx) => (
                <p key={idx}>{para.trim()}</p>
              ))}
            </div>

            {/* Button */}
            <div className="mt-8">
              <a
                href="https://docs.google.com/document/d/15stSR15oKdZWjgjX2w74MI6Q3Q0oQvJrOmrDHy9L2tY/view"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-400 to-blue-400 text-white rounded-full p-3 shadow-lg hover:scale-105 transition inline-flex items-center"
                title="Download CV"
              >
              {/* Icon open in new tab */}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 3h7m0 0v7m0-7L10 14m-1 1H5a2 2 0 01-2-2v-5" />
              </svg>
              </a>
            </div>

          </div>

          {/* ProfileCard */}
          <div className="md:basis-1/3 mt-12 md:mt-0 w-full flex justify-center md:justify-end">
            <div className="scale-[0.95] sm:scale-100" style={{ transformOrigin: 'center' }}>
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
