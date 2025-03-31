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
import { Button } from "@/components/ui/button";
import { TestimonialSchema } from "@/lib/schemas";
import { useState, useTransition } from "react";
import FormError from "./form-error";
import FormSuccess from "./form-success";
import { createTestimonial } from "@/actions/create-testimonial";
import { Textarea } from "../ui/textarea";

interface Props {
  userId: string;
}

export const TestimonialForm = ({ userId }: Props) => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof TestimonialSchema>>({
    resolver: zodResolver(TestimonialSchema),
    defaultValues: {
      name: "",
      company: "",
      imageUrl: "",
      role: "",
      quote: "",
      positionY: 0,
    },
  });

  async function onSubmit(values: z.infer<typeof TestimonialSchema>) {
    setError("");
    setSuccess("");

    startTransition(async () => {
      createTestimonial(values, userId).then((data) => {
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
                <FormLabel>Testimonial Name</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Client name"
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
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Company name"
                    disabled={isPending}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Role</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Client's role"
                    disabled={isPending}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="quote"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Testimonial Quote</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="Client's testimonial quote"
                    disabled={isPending}
                    className="resize-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="positionY"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Vertical Position</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="number"
                    placeholder="0"
                    disabled={isPending}
                    onChange={(e) => field.onChange(Number(e.target.value))}
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
          {isPending ? "Saving..." : "Create Testimonial"}
        </Button>
      </form>
    </Form>
  );
};
