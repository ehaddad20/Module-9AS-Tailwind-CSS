import { Link } from "react-router-dom";
import Card from "../components/Card";
import Button from "../components/Button";

function Home() {
  return (
    <div className="mt-6">
      <Card>
        <h1 className="text-3xl font-bold mb-3">Student Directory</h1>
        <p className="mb-6 text-slate-600 dark:text-slate-300">
          Welcome to the Module 9 Tailwind redesign. Browse the user directory
          to see everyone listed.
        </p>
        <Link to="/users">
          <Button text="View Users" />
        </Link>
      </Card>
    </div>
  );
}

export default Home;
