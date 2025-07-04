import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-[#18181b] text-white py-8 px-4 mt-16 border-t border-[#23243a]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-lg font-mono text-[#bfaaff]">&copy; {new Date().getFullYear()} Tegar Asayahanda F. All rights reserved.</div>
        <div className="flex gap-6 text-2xl">
          <a href="https://github.com/asayahandatgr" target="_blank" rel="noopener noreferrer" className="hover:text-[#bfaaff] transition">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/asayahandatgr" target="_blank" rel="noopener noreferrer" className="hover:text-[#bfaaff] transition">
            <FaLinkedin />
          </a>
          <a href="mailto:asayahandategar10@gmail.com" className="hover:text-[#bfaaff] transition">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
