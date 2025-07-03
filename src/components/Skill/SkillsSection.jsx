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
  const leftRefs = useRef([]);
  const rightRefs = useRef([]);
  const [lines, setLines] = useState([]);

  useEffect(() => {
    const updateLines = () => {
      const center = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
      };

      const newLines = [];

      skillsLeft.forEach((_, i) => {
        const icon = leftRefs.current[i];
        if (icon) {
          const rect = icon.getBoundingClientRect();
          newLines.push({
            fromX: rect.left + rect.width / 2,
            fromY: rect.top + rect.height / 2,
            toX: center.x,
            toY: center.y,
            side: 'left',
          });
        }
      });

      skillsRight.forEach((_, i) => {
        const icon = rightRefs.current[i];
        if (icon) {
          const rect = icon.getBoundingClientRect();
          newLines.push({
            fromX: rect.left + rect.width / 2,
            fromY: rect.top + rect.height / 2,
            toX: center.x,
            toY: center.y,
            side: 'right',
          });
        }
      });

      setLines(newLines);
    };

    updateLines();
    window.addEventListener('resize', updateLines);
    return () => window.removeEventListener('resize', updateLines);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-black px-8 md:px-24" id="skills">
      {/* SVG Melengkung Horizontal */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
        {lines.map((line, i) => {
          const curveAmount = 240;
          const controlX = line.side === 'left'
            ? line.fromX + curveAmount
            : line.fromX - curveAmount;

          const path = `
            M ${line.fromX} ${line.fromY}
            C ${controlX} ${line.fromY},
              ${controlX} ${line.toY},
              ${line.toX} ${line.toY}
          `;

          return (
            <path
              key={i}
              d={path}
              stroke="white"
              strokeWidth={1.5}
              fill="none"
            />
          );
        })}
      </svg>

      {/* Kotak Tengah */}
      <div
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

      {/* Kiri */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 flex flex-col justify-between h-[480px] z-10">
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

      {/* Kanan */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 flex flex-col justify-between h-[480px] z-10">
        {skillsRight.map((skill, i) => (
          <div key={skill.alt} ref={(el) => (rightRefs.current[i] = el)}>
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
