// components/forms/project-form.tsx
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createProject } from "@/actions/create-project";
import { ProjectSchema } from "@/lib/schemas";
import { useState, useTransition } from "react";
import FormError from "./form-error";
import FormSuccess from "./form-success";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { ProjectDetails } from "@/types";
import { updateProject } from "@/actions/update-project";

interface ProjectFormProps {
  userId: string;
  project?: ProjectDetails;
}

export const ProjectForm = ({ userId, project }: ProjectFormProps) => {
  console.log(project);
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof ProjectSchema>>({
    resolver: zodResolver(ProjectSchema),
    defaultValues: project
      ? {
          name: project.name,
          imageUrl: project.imageUrl,
          projectUrl: project.projectUrl,
          shortDescription: project.shortDescription ?? "",
          techStack: project.techStack,
          category: project.category || "",
          featured: project.featured,
        }
      : {
          name: "",
          imageUrl: "",
          projectUrl: "",
          shortDescription: "",
          techStack: [],
          category: "",
          featured: false,
        },
  });

  async function onSubmit(values: z.infer<typeof ProjectSchema>) {
    setError("");
    setSuccess("");

    startTransition(async () => {
      if (project?.id) {
        updateProject(values, project?.id).then((data) => {
          setError(data?.error);
          setSuccess(data?.success);
        });
      } else {
        createProject(values, userId).then((data) => {
          setError(data?.error);
          setSuccess(data?.success);
        });
      }
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Project Name</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="My Awesome Project"
                    disabled={isPending}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="imageUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Image URL</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="https://example.com/image.jpg"
                    disabled={isPending}
                    type="url"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="projectUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Project URL</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="https://example.com"
                    disabled={isPending}
                    type="url"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="shortDescription"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Short Description</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    value={field.value ?? ""}
                    placeholder="Brief description..."
                    disabled={isPending}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="techStack"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Technologies Used (comma separated)</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Next.js, React, TypeScript"
                    disabled={isPending}
                    value={field.value.join(", ")}
                    onChange={(e) =>
                      field.onChange(
                        e.target.value.split(",").map((t) => t.trim())
                      )
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Web App, Mobile, etc..."
                    disabled={isPending}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormError message={error} />
        <FormSuccess message={success} />

        <Button
          type="submit"
          size={`lg`}
          disabled={isPending}
          className="w-full"
        >
          {isPending
            ? project?.id
              ? "Updating Project..."
              : "Creating Project..."
            : project?.id
            ? "Update Project"
            : "Create Project"}
        </Button>
      </form>
    </Form>
  );
};
