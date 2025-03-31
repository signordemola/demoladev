"use client";

import Link from "next/link";
import SignOutBtn from "./sign-out-btn";
import { Logo } from "../logo";

const AdminHeader = () => {
  return (
    <header className="fixed top-0 left-0 w-full py-2 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <Logo />
          </Link>

          <div className="flex items-center gap-4">
            <SignOutBtn />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
