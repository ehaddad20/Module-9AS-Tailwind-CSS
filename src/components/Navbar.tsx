import { useState } from "react";
import { NavLink } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

function Navbar({ darkMode, toggleDarkMode }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-xl transition-all duration-300 ${
      isActive ? "bg-white/20 font-bold" : "hover:bg-white/10"
    }`;

  return (
    <nav
      className="
        bg-blue-600
        dark:bg-slate-950
        text-white
        shadow-lg
        transition-colors
        duration-300
      "
    >
      <div className="max-w-6xl mx-auto p-4 flex justify-between items-center">
        <h1 className="font-bold text-xl">Student Directory</h1>

        {/* Desktop and tablet menu */}
        <div className="hidden md:flex items-center gap-2">
          <NavLink to="/" end className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/users" className={linkClass}>
            Users
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
          <div className="ml-4">
            <DarkModeToggle
              darkMode={darkMode}
              toggleDarkMode={toggleDarkMode}
            />
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          className="md:hidden px-4 py-2 rounded-xl bg-white/20 hover:bg-white/30 transition-all duration-300"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-2 px-4 pb-4">
          <NavLink
            to="/"
            end
            className={linkClass}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/users"
            className={linkClass}
            onClick={() => setMenuOpen(false)}
          >
            Users
          </NavLink>
          <NavLink
            to="/about"
            className={linkClass}
            onClick={() => setMenuOpen(false)}
          >
            About
          </NavLink>
          <DarkModeToggle
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
          />
        </div>
      )}
    </nav>
  );
}

export default Navbar;
