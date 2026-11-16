import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { User } from "../types/User";
import Card from "../components/Card";
import Button from "../components/Button";

function Users() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function loadUsers() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      const data = await response.json();
      setUsers(data);
    }

    loadUsers();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">User Directory</h1>

      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-6
        "
      >
        {users.map((user) => (
          <Card key={user.id}>
            <h2 className="text-xl font-bold">{user.name}</h2>
            <p className="text-emerald-600 dark:text-emerald-400 mb-1">
              @{user.username}
            </p>
            <p className="text-slate-600 dark:text-slate-300 mb-4 break-words">
              {user.email}
            </p>
            <Link to={`/users/${user.id}`}>
              <Button text="View" />
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Users;
