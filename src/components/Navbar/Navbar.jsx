import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const menuItems = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#project" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-7xl z-50 bg-white/10 backdrop-blur-md rounded-2xl px-4 py-2 flex items-center justify-between shadow-lg border border-white/10">
        {/* Logo */}
        <div className="z-50">
          <img
            src="/tegaer.png"
            alt="Avatar"
            className="w-9 h-9 rounded-full border border-white/20 shadow"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex justify-end gap-8">
          {menuItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-white/90 font-mono text-lg px-3 py-1 hover:text-white transition"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger (Mobile only) */}
        <button
          className="md:hidden text-white text-2xl z-50"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Overlay + Menu */}
      {open && (
        <>
          {/* Background Overlay */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={() => setOpen(false)}
          />
          {/* Mobile Menu */}
          <ul className="fixed top-20 left-1/2 transform -translate-x-1/2 w-[90%] max-w-xs bg-zinc-900 rounded-2xl shadow-lg border border-zinc-700 flex flex-col items-center gap-6 py-8 z-50 animate-fade-in">
            {menuItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-white font-mono text-xl px-4 py-2 hover:text-[#bfaaff] transition"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </>
      )}

      {/* CSS for animation */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-20px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-fade-in {
          animation: fade-in 0.25s ease-out;
        }
      `}</style>
    </>
  );
};

export default Navbar;
