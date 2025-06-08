"use client";
import { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

export default function Users() {
  const [users, setUsers] = useState<UserProps[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <>
      <Header />
      <h1 className="text-2xl my-4">Users</h1>
      <div className="space-y-4">
        {users.map(user => (
          <UserCard key={user.id} {...user} />
        ))}
      </div>
    </>
  );
}
