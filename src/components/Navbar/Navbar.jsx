import React from "react";

const menuItems = [
  { label: "Home", href: "#" },
  { label: "AboutMe", href: "#" },
  { label: "Skills", href: "#" },
  { label: "Projects", href: "#" },
];

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 w-full max-w-7xl z-50 bg-white/10 backdrop-blur-md rounded-full px-8 py-3 flex items-center justify-between shadow-lg border border-white/10 mt-8">
      {/* Avatar/logo kiri */}
      <div className="flex items-center">
        <img src="/public/tegaer.png" alt="Avatar" className="w-12 h-12 rounded-full border-2 border-white/20 shadow" />
      </div>
      {/* Menu kanan */}
      <ul className="flex justify-end gap-8 ml-auto">
        {menuItems.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="text-white/90 font-mono text-lg px-3 py-1 hover:text-white transition"
            >
              {'</'}{item.label}{'>'}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
