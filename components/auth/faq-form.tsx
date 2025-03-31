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
import { FAQSchema } from "@/lib/schemas";
import { useState, useTransition } from "react";
import FormError from "./form-error";
import FormSuccess from "./form-success";
import { createFAQ } from "@/actions/create-faq";

interface Props {
  userId: string;
}

export const FaqForm = ({ userId }: Props) => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof FAQSchema>>({
    resolver: zodResolver(FAQSchema),
    defaultValues: {
      question: "",
      answer: "",
    },
  });

  async function onSubmit(values: z.infer<typeof FAQSchema>) {
    setError("");
    setSuccess("");

    startTransition(async () => {
      createFAQ(values, userId).then((data) => {
        setError(data?.error);
        setSuccess(data?.success);
      });
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="question"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Question</FormLabel>
              <FormControl>
                <Input placeholder="question..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="answer"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Answer</FormLabel>
              <FormControl>
                <Input placeholder="answer..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormError message={error} />
        <FormSuccess message={success} />

        <div className="mt-8">
          <Button type="submit" disabled={isPending}>
            {isPending ? "Creating..." : "Create FAQ"}
          </Button>
        </div>
      </form>
    </Form>
  );
};
