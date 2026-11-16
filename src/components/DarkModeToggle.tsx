interface DarkModeToggleProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

function DarkModeToggle({ darkMode, toggleDarkMode }: DarkModeToggleProps) {
  return (
    <button
      onClick={toggleDarkMode}
      className="
        bg-slate-800
        dark:bg-yellow-400
        text-white
        dark:text-black
        font-medium
        px-4
        py-2
        rounded-xl
        transition-all
        duration-300
      "
    >
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
}

export default DarkModeToggle;
