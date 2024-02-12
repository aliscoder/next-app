import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: { id: number };
}

const UserPage = ({ params: { id: userId } }: Props) => {
  if (userId > 10) notFound();
  return <div>{userId}</div>;
};

export default UserPage;
