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
import { ClientSchema } from "@/lib/schemas";
import { useState, useTransition } from "react";
import FormError from "./form-error";
import FormSuccess from "./form-success";
import { createClient } from "@/actions/create-client";
import { formatDateForInput } from "@/lib/utils";

interface Props {
  userId: string;
}

export const ClientForm = ({ userId }: Props) => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof ClientSchema>>({
    resolver: zodResolver(ClientSchema),
    defaultValues: {
      name: "",
      contactEmail: "",
      phone: "",
      website: "",
      clientSince: undefined,
    },
  });

  async function onSubmit(values: z.infer<typeof ClientSchema>) {
    setError("");
    setSuccess("");

    startTransition(async () => {
      createClient(values, userId).then((data) => {
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
                <FormLabel>Client/Company Name</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Acme Corp"
                    disabled={isPending}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="contactEmail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contact Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="contact@company.com"
                      type="email"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="+1 (555) 123-4567"
                      type="tel"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="website"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Website</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="https://company.com"
                    type="url"
                    disabled={isPending}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="clientSince"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Client Since</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="date"
                    disabled={isPending}
                    className="w-full"
                    value={field.value ? formatDateForInput(field.value) : ""}
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
          {isPending ? "Adding Client..." : "Add Client"}
        </Button>
      </form>
    </Form>
  );
};
