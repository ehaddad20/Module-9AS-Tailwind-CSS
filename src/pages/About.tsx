import Card from "../components/Card";

function About() {
  return (
    <div className="mt-6">
      <Card>
        <h1 className="text-3xl font-bold mb-3">About</h1>
        <p className="text-slate-600 dark:text-slate-300">
          This project demonstrates React Router, TypeScript, API integration,
          and a responsive Tailwind CSS design with dark mode.
        </p>
      </Card>
    </div>
  );
}

export default About;
