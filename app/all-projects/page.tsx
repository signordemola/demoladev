import AllProjectsPage from "@/components/all-projects-page";
import { Logo } from "@/components/logo";
import { getAllProjects } from "@/lib/dal";
import { ProjectDetails } from "@/types";
import Link from "next/link";
import React from "react";

const AllProjects = async () => {
  const allProjects = await getAllProjects();

  if (!allProjects) return null;

  return (
    <section>
      <header className="bg-white">
        <div className="fixed top-0 left-0 w-full mix-blend-difference backdrop-blur-md z-20">
          <div className="container !max-w-full">
            <div className="flex justify-between items-center h-20">
              <div>
                <Link href={`/`}>
                  <Logo />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <AllProjectsPage allProjects={allProjects as ProjectDetails[]} />
    </section>
  );
};

export default AllProjects;
