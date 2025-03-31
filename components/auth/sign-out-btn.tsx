"use client";

import React from "react";
import { Button } from "../ui/button";
import { signOut } from "next-auth/react";

const SignOutBtn = () => {
  const handleSignOut = async () => {
    await signOut({
      redirect: true,
      callbackUrl: "/sign-in",
    });
  };
  return (
    <Button onClick={handleSignOut} variant={`destructive`}>
      Sign Out
    </Button>
  );
};

export default SignOutBtn;
