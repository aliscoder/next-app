import React from "react";
import UserTable from "./UserTable";
import UserForm from "./UserForm";

interface Props {
  searchParams: { order: "name" | "username" | "email" | "id" };
}

const Users = ({ searchParams: { order } }: Props) => {
  return (
    <div className="min-h-screen py-5 px-8">
      <UserForm />
      <UserTable order={order} />
    </div>
  );
};

export default Users;
