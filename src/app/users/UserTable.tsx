import Link from "next/link";
import React from "react";
import prisma from "../api/db";

const UserTable = async ({ order }: { order: "email" | "name" | "id" | "username" }) => {
  
  const users = await prisma.user.findMany();
  const sortedUsers = users.sort((userA, userB) => (userB[order] > userA[order] ? 1 : -1));

  return (
    <table className="table">
      <thead>
        <tr>
          <th className="cursor-pointer hover:bg-slate-100 transition-colors duration-300">
            <Link href="/users?order=id">ID</Link>
          </th>
          <th className="cursor-pointer hover:bg-slate-100 transition-colors duration-300">
            <Link href="/users?order=name">Name</Link>
          </th>
          <th className="cursor-pointer hover:bg-slate-100 transition-colors duration-300">
            <Link href="/users?order=email">Email</Link>
          </th>
          <th className="cursor-pointer hover:bg-slate-100 transition-colors duration-300">
            <Link href="/users?order=username">Username</Link>
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedUsers.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.username}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
