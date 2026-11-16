import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import type { User } from "../types/User";
import Card from "../components/Card";
import Button from "../components/Button";

function UserDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    async function loadUser() {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );

      const data = await response.json();
      setUser(data);
    }

    loadUser();
  }, [id]);

  if (!user) {
    return <p className="mt-6 text-lg">Loading...</p>;
  }

  return (
    <div className="mt-6 max-w-xl">
      <Card>
        <h1 className="text-3xl font-bold mb-1">{user.name}</h1>
        <p className="text-emerald-600 dark:text-emerald-400 mb-4">
          @{user.username}
        </p>

        <div className="space-y-2 mb-6 text-slate-600 dark:text-slate-300">
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Website: {user.website}</p>
        </div>

        <Button text="Back to Users" onClick={() => navigate("/users")} />
      </Card>
    </div>
  );
}

export default UserDetails;
