import React, { useRef, useEffect, useState } from 'react';

const skillsLeft = [
  { src: '/htmllogo.png', alt: 'HTML5' },
  { src: '/tailwind.png', alt: 'Tailwind' },
  { src: '/bootstraplogo.png', alt: 'Bootstrap' },
  { src: '/laravel.png', alt: 'Laravel' },
  { src: '/php.png', alt: 'PHP' },
];

const skillsRight = [
  { src: '/jslogo.png', alt: 'JavaScript' },
  { src: '/reactlogo.png', alt: 'React' },
  { src: '/nextlogo.png', alt: 'Next.js' },
  { src: '/node.png', alt: 'Node.js' },
  { src: '/gitlogo.png', alt: 'Git' },
];

const SkillsSection = () => {
  const sectionRef = useRef(null);
  const leftRefs = useRef([]);
  const rightRefs = useRef([]);
  const centerRef = useRef(null);
  const [lines, setLines] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const updateLines = () => {
    if (!sectionRef.current || !centerRef.current) return;
    const sectionRect = sectionRef.current.getBoundingClientRect();
    const centerRect = centerRef.current.getBoundingClientRect();
    const centerX = centerRect.left - sectionRect.left + centerRect.width / 2;
    const centerY = centerRect.top - sectionRect.top + centerRect.height / 2;

    const newLines = [];

    [...leftRefs.current, ...rightRefs.current].forEach((icon, i) => {
      if (icon) {
        const rect = icon.getBoundingClientRect();
        newLines.push({
          fromX: rect.left - sectionRect.left + rect.width / 2,
          fromY: rect.top - sectionRect.top + rect.height / 2,
          toX: centerX,
          toY: centerY,
        });
      }
    });

    setLines(newLines);
  };

  useEffect(() => {
    let frameId;
    const onUpdate = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(updateLines);
    };

    updateLines();
    window.addEventListener('scroll', onUpdate);
    window.addEventListener('resize', onUpdate);
    return () => {
      window.removeEventListener('scroll', onUpdate);
      window.removeEventListener('resize', onUpdate);
      cancelAnimationFrame(frameId);
    };
  }, []);

  useEffect(() => {
    if (lines.length === 0) return;
    const timeout = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % lines.length);
    }, 1600);
    return () => clearTimeout(timeout);
  }, [activeIndex, lines]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex flex-col items-center justify-center bg-black px-4 sm:px-6 md:px-24 py-20"
      id="skills"
    >
      {/* SVG Lines (desktop only) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden md:block">
        <defs>
          <linearGradient id="gradLine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#a78bfa" />
            <stop offset="100%" stopColor="#60a5fa" />
          </linearGradient>
          <style>
            {`
              @keyframes drawLine {
                from { stroke-dashoffset: 400; }
                to { stroke-dashoffset: 0; }
              }
              .line-animate {
                stroke-dasharray: 400;
                stroke-dashoffset: 400;
                animation: drawLine 1.5s ease forwards;
              }
            `}
          </style>
        </defs>

        {lines.map((line, i) => {
          const curveAmount = 200;
          const controlX =
            line.fromX < line.toX
              ? line.fromX + curveAmount
              : line.fromX - curveAmount;

          const path = `
            M ${line.fromX} ${line.fromY}
            C ${controlX} ${line.fromY},
              ${controlX} ${line.toY},
              ${line.toX} ${line.toY}
          `;

          return (
            <g key={i}>
              <path d={path} stroke="white" strokeWidth={1.5} fill="none" />
              {i === activeIndex && (
                <path
                  d={path}
                  stroke="url(#gradLine)"
                  strokeWidth={2}
                  fill="none"
                  className="line-animate"
                />
              )}
            </g>
          );
        })}
      </svg>

      {/* Center Title */}
      <div
        ref={centerRef}
        className="z-10 px-10 py-4 rounded-2xl md:border md:border-gray-300 md:bg-[#18181b] bg-transparent md:shadow-lg text-4xl md:text-6xl font-extrabold text-white flex items-center justify-center mb-12 md:mb-0"
        style={{
          position: 'relative',
          minWidth: 200,
        }}
      >
        <span className="font-mono bg-gradient-to-r from-purple-400 to-blue-400 text-transparent animate-gradient-x bg-clip-text text-[#bfaaff]">
          Skills
        </span>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex absolute left-[12.5%] md:left-[16.5%] top-1/2 -translate-y-1/2 flex-col justify-between h-[480px] z-10">
        {skillsLeft.map((skill, i) => (
          <div key={skill.alt} ref={(el) => (leftRefs.current[i] = el)}>
            <img src={skill.src} alt={skill.alt} className="w-16 h-16 object-contain" />
          </div>
        ))}
      </div>

      <div className="hidden md:flex absolute right-[12.5%] md:right-[16.5%] top-1/2 -translate-y-1/2 flex-col justify-between h-[480px] z-10">
        {skillsRight.map((skill, i) => (
          <div key={skill.alt} ref={(el) => (rightRefs.current[i + skillsLeft.length] = el)}>
            <img src={skill.src} alt={skill.alt} className="w-16 h-16 object-contain" />
          </div>
        ))}
      </div>

      {/* Mobile Grid Layout */}
      <div className="md:hidden grid grid-cols-2 gap-x-6 gap-y-8 mt-6 w-full px-4 sm:px-6 z-10">
        {[...skillsLeft, ...skillsRight].map((skill) => (
          <div key={skill.alt} className="flex justify-center">
            <img
              src={skill.src}
              alt={skill.alt}
              className="w-24 h-24 sm:w-28 sm:h-28 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
