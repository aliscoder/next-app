import React from "react";
import prisma from "../api/db";
import { revalidatePath } from "next/cache";
import SubmitButton from "./SubmitButton";

const submitForm = async (data: FormData) => {
  "use server";

  const name = data.get("name");
  const username = data.get("username");
  const email = data.get("email");

  if (name && username && email) {
    try {
      await prisma.user.create({
        data: {
          name: name.toString(),
          username: username.toString(),
          email: email.toString(),
        },
      });

      revalidatePath("/users");
    } catch (e) {
      throw new Error('Invalid data')
    }
  }else {
    throw new Error('Invalid data')

  }
};

const UserForm = () => {
  return (

    <form action={submitForm} className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      <input type="text" className="input input-bordered w-full" name="name" placeholder="Enter name" />
      <input type="text" className="input input-bordered w-full" name="username" placeholder="Enter username" />
      <input type="text" className="input input-bordered w-full" name="email" placeholder="Enter email" />
      <SubmitButton />
    </form>

    
  );
};

export default UserForm;
