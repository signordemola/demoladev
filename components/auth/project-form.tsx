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

interface Props {
  userId: string;
}

export const ProjectForm = ({ userId }: Props) => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof ProjectSchema>>({
    resolver: zodResolver(ProjectSchema),
    defaultValues: {
      name: "",
      imageUrl: "",
      projectUrl: "",
    },
  });

  async function onSubmit(values: z.infer<typeof ProjectSchema>) {
    setError("");
    setSuccess("");

    startTransition(async () => {
      createProject(values, userId).then((data) => {
        setError(data?.error);
        setSuccess(data?.success);
      });
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
        </div>

        <FormError message={error} />
        <FormSuccess message={success} />

        <Button type="submit" disabled={isPending} className="w-full">
          {isPending ? "Creating Project..." : "Create Project"}
        </Button>
      </form>
    </Form>
  );
};
