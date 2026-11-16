interface CardProps {
  children: React.ReactNode;
}

function Card({ children }: CardProps) {
  return (
    <div
      className="
        bg-white
        dark:bg-slate-800
        text-slate-800
        dark:text-white
        border
        border-gray-300
        dark:border-gray-600
        p-6
        rounded-xl
        shadow-lg
        hover:shadow-xl
        transition-all
        duration-300
      "
    >
      {children}
    </div>
  );
}

export default Card;
