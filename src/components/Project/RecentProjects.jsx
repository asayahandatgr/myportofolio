import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import CardSwap, { Card } from '../../ui/Components/CardSwap/CardSwap';
import AnimatedContent from '../../ui/Animations/AnimatedContent/AnimatedContent';

const projects = [
  {
    title: 'Mindspace Web',
    description:
      'Mindspace is a web-based educational platform aimed at raising awareness of the mental health of students. The application presents educational content, interactive features, and a modern UI integrated with role-based authentication.',
    tech: ['React.js', 'Express.js', 'MongoDB', 'Tailwind'],
    github: 'https://github.com/asayahandatgr/mindspace-web',
    external: 'https://mindspace.my.id/',
    images: ['/mindspace.png', '/mindspace2.png', '/mindspace3.png'],
  },
  {
    title: 'Library Jarvis',
    description:
      'Library Jarvis is a Laravel-based library management application designed to simplify the management of book data, borrowing, returning, and administration. It includes features for admin and student role authentication, notifications, and a responsive interface based on Tailwind.',
    tech: ['Laravel', 'MySQL', 'Tailwind CSS', 'Blade', 'PHP'],
    github: 'https://github.com/asayahandatgr/jarvis5-perpustakaan',
    external: 'http://13.239.236.226/',
    images: ['/jarvis1.png', '/jarvis2.png', '/jarvis3.png'],
  },
  {
    title: 'Movie App',
    description:
      'Movie App is a film search and exploration application based on Next.js that displays real-time data using the TMDb API. Users can search for films, view details, and explore film posters with a clean and responsive UI.',
    tech: ['React.js', 'Tailwind CSS', 'JavaScript', 'TMDb API', 'Vercel'],
    github: 'https://github.com/asayahandatgr/movie-app',
    external: 'https://movie-app-flax-beta.vercel.app/',
    images: ['/movieapp1.png', '/movieapp2.png', '/movieapp3.png'],
  },
];

const RecentProjects = () => {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center bg-black px-6 py-20" id="project">
      <div className="w-full max-w-6xl mx-auto px-6">
        <div className="flex items-center w-full mb-10">
          <span className="font-mono bg-gradient-to-r from-purple-400 to-blue-400 text-transparent animate-gradient-x bg-clip-text text-4xl md:text-5xl text-[#bfaaff] font-extrabold">Recent Projects</span>
          <span className="flex-1 ml-4 h-px bg-[#bfaaff] opacity-60"></span>
        </div>
        <div className="flex flex-col gap-16">
          {projects.map((project, idx) => (
            <AnimatedContent
              key={project.title}
              distance={300}
              direction="vertical"
              reverse={false}
              duration={1.5}
              ease="expo.out"
              initialOpacity={0.2}
              animateOpacity
              scale={1}
              threshold={0.2}
              delay={0.1 * idx}
            >
              <div className="bg-[#18181b] rounded-2xl shadow-lg border border-[#23243a] flex flex-col md:flex-row items-center md:items-stretch overflow-hidden">
                {/* Info statis */}
                <div className="flex-1 flex flex-col justify-center p-12 gap-6 min-w-[320px]">
                  <div className="flex items-center gap-6 mb-4">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#bfaaff] text-[60px]">
                      <FaGithub />
                    </a>
                    <a href={project.external} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#bfaaff] text-[60px]">
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                  <h3 className="text-5xl md:text-6xl font-extrabold text-white mb-4">{project.title}</h3>
                  <p className="text-gray-300 font-semibold text-lg md:text-xl mb-2 max-w-2xl font-mono">{project.description}</p>
                  <div className="flex flex-wrap gap-3 mt-2 text-lg font-bold text-[#bfaaff]">
                    {project.tech.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                </div>
                {/* CardSwap hanya untuk gambar */}
                <div className="flex-1 flex items-center justify-center p-8 bg-[#18181b] min-w-[320px]" style={{ minHeight: 400 }}>
                  <div style={{ width: 400, height: 300, position: 'relative' }}>
                    <CardSwap
                      cardDistance={60}
                      verticalDistance={70}
                      delay={5000}
                      pauseOnHover={true}
                      width={400}
                      height={300}
                    >
                      {project.images.map((img, i) => (
                        <Card key={i}>
                          <img
                            src={img}
                            alt={`${project.title} ${i + 1}`}
                            className="w-full h-full object-cover rounded-xl border border-[#23243a] shadow-xl"
                          />
                        </Card>
                      ))}
                    </CardSwap>
                  </div>
                </div>
              </div>
            </AnimatedContent>
          ))}
          <AnimatedContent
            distance={100}
            direction="vertical"
            reverse={false}
            duration={1.2}
            ease="expo.out"
            initialOpacity={0.2}
            animateOpacity
            scale={1}
            threshold={0.2}
            delay={0.1 * projects.length}
          >
            <div className="flex justify-center">
              <button className="animate-gradient-x px-8 py-3 rounded-lg bg-gradient-to-r from-blue-400 to-purple-400 text-white font-semibold shadow-lg hover:scale-105 transition text-lg md:text-xl">
                Load More
              </button>
            </div>
          </AnimatedContent>
        </div>
      </div>
    </section>
  );
};

export default RecentProjects; 