// components/edit-project-modal.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { ProjectDetails } from "@/types";
import { ProjectForm } from "./project-form";

export function EditProjectModal({
  project,
  userId,
}: {
  project: ProjectDetails;
  userId: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Edit Project</DialogTitle>
        </DialogHeader>
        <ProjectForm
          userId={userId}
          project={project}
        />
      </DialogContent>
    </Dialog>
  );
}
