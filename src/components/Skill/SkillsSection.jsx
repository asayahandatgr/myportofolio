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
    }, 1600); // Durasi antar garis

    return () => clearTimeout(timeout);
  }, [activeIndex, lines]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center justify-center bg-black px-8 md:px-24"
      id="skills"
    >
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <defs>
          <linearGradient id="gradLine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#a78bfa" />
            <stop offset="100%" stopColor="#60a5fa" />
          </linearGradient>
          <style>
            {`
              @keyframes drawLine {
                from {
                  stroke-dashoffset: 400;
                }
                to {
                  stroke-dashoffset: 0;
                }
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
              {/* Garis dasar putih */}
              <path
                d={path}
                stroke="white"
                strokeWidth={1.5}
                fill="none"
              />
              {/* Garis animasi overlay */}
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

      {/* Center Box */}
      <div
        ref={centerRef}
        className="z-10 px-12 py-6 rounded-2xl border border-gray-300 bg-gray-100 shadow-lg text-6xl font-extrabold text-gray-700 flex items-center justify-center"
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          minWidth: 220,
        }}
      >
        <span
          style={{
            background: 'linear-gradient(90deg,#333,#999)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Skills
        </span>
      </div>

      {/* Left Icons */}
      <div className="absolute left-[12.5%] md:left-[16.5%] top-1/2 -translate-y-1/2 flex flex-col justify-between h-[480px] z-10">
        {skillsLeft.map((skill, i) => (
          <div key={skill.alt} ref={(el) => (leftRefs.current[i] = el)}>
            <img
              src={skill.src}
              alt={skill.alt}
              className="w-16 h-16 object-contain"
            />
          </div>
        ))}
      </div>

      {/* Right Icons */}
      <div className="absolute right-[12.5%] md:right-[16.5%] top-1/2 -translate-y-1/2 flex flex-col justify-between h-[480px] z-10">
        {skillsRight.map((skill, i) => (
          <div key={skill.alt} ref={(el) => (rightRefs.current[i + skillsLeft.length] = el)}>
            <img
              src={skill.src}
              alt={skill.alt}
              className="w-16 h-16 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
