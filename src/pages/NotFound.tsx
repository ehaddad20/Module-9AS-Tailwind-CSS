import { Link } from "react-router-dom";
import Card from "../components/Card";
import Button from "../components/Button";

function NotFound() {
  return (
    <div className="mt-6">
      <Card>
        <h1 className="text-3xl font-bold mb-3">404</h1>
        <p className="mb-6 text-slate-600 dark:text-slate-300">
          Page not found.
        </p>
        <Link to="/">
          <Button text="Return Home" />
        </Link>
      </Card>
    </div>
  );
}

export default NotFound;
