import GoogleSignInBtn from "@/components/auth/google-signin-btn";
import React from "react";

const SignInPage = () => {
  return (
    <section className="container mx-auto p-4 max-w-[700px] h-[100dvh] flex items-center justify-center">
      <GoogleSignInBtn />
    </section>
  );
};

export default SignInPage;
