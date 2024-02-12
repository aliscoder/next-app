'use client'

import React from "react";
import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending} className="btn btn-primary w-full" type="submit">
      Add User
    </button>
  );
};

export default SubmitButton;
