"use client";

import React, { useState, useTransition } from "react";
import ScrollToTop from "./scroll-to-top";
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
} from "./ui/form";
import { Button } from "./ui/button";
import Link from "next/link";
import { Calendar, Mail, MapPin, PhoneCallIcon } from "lucide-react";
import { Logo } from "./logo";
import { formSchema } from "@/lib/schema";
import { sendContactEmail } from "@/actions/send-email";
import { Alert, AlertDescription } from "./ui/alert";

const Footer = () => {
  const year = new Date().getFullYear();

  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      sendContactEmail(values)
        .then((result) => {
          if (result?.success) {
            setSuccess("Message sent successfully!");
            form.reset();
          } else {
            setError(result?.error || "Something went wrong, try again later!");
          }
        })
        .catch((err) => {
          console.error("Unexpected error:", err);
          setError("An unexpected error occurred. Please try again.");
        });
    });
  };

  return (
    <footer
      className="dark:bg-neutral-darker/70 bg-neutral-light/70 border-t border-neutral-darker/60 dark:border-neutral-lighter/60 mt-20 scroll-mt-22"
      id="contact"
      role="contentinfo"
      aria-labelledby="footer-heading"
    >
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Contact Info */}
          <div className="space-y-8 md:pl-12 relative">
            <div>
              <Logo />
            </div>
            <div className="space-y-4 ml-3">
              <h3 className="text-xl font-semibold mb-4">
                Direct Contact{" "}
                <span className="ml-2 text-sm text-neutral-dark/60 dark:text-neutral-lighter/60 group-hover:text-primary">
                  (Response within 24hrs)
                </span>
              </h3>

              <Link
                href="mailto:hello@demoladevop.com"
                className="flex items-center gap-3 group hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>hello@demoladevop.com</span>
              </Link>

              <Link
                href="tel:+2349158861316"
                className="flex items-center gap-3 group hover:text-primary transition-colors"
              >
                <PhoneCallIcon className="w-5 h-5" />
                <span>(+234) 915 886 1316</span>
                <span className="text-sm text-neutral-dark/60 dark:text-neutral-lighter/60 group-hover:text-primary">
                  (also on whatsapp)
                </span>
              </Link>

              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5" />
                <span>Lagos, Nigeria • Remote Worldwide</span>
              </div>

              <div className="absolute bottom-0">
                <Link
                  href="/booking"
                  className="inline-flex items-center gap-2 mt-6 px-6 py-2.5 bg-primary/90 hover:bg-primary text-neutral-lighter transition-all rounded-md font-medium"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book a Free Consultation</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          {success ? (
            <div className="flex flex-col items-center justify-center text-center py-10 px-6 rounded-xl border border-green-500/30 bg-green-50 dark:bg-green-900/10 shadow-md transition-all">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-green-600 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <h3 className="text-2xl font-semibold text-green-700 dark:text-green-300 mb-2">
                Message Sent Successfully!
              </h3>
              <p className="text-neutral-dark/80 dark:text-neutral-lighter/80">
                {`Thanks ${
                  form.getValues("name") || "for reaching out"
                } — I'll`}
                reply to your email soon.
              </p>
              <Button
                onClick={() => setSuccess("")}
                className="mt-6 bg-primary text-white px-5 py-2 rounded-lg hover:bg-primary/90 transition"
              >
                Send Another Message
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-light py-3 mb-6">
                {`Let's Build Something`}
                <span className="text-primary"> Amazing</span>
              </h2>

              {error && (
                <Alert
                  variant="destructive"
                  className="border-red-500/50 bg-red-50 dark:bg-red-900/10"
                >
                  <AlertDescription className="text-red-700 dark:text-red-300">
                    {error}
                  </AlertDescription>
                </Alert>
              )}

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                  aria-labelledby="form-heading"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      disabled={isPending}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="dark:text-neutral-lighter/80 text-sm">
                            Full Name
                          </FormLabel>
                          <FormControl>
                            <input
                              {...field}
                              className="w-full bg-transparent p-3 border border-neutral-dark/30 dark:border-neutral-lighter/30 rounded-lg focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:cursor-not-allowed"
                              placeholder="John Doe"
                              aria-required="true"
                            />
                          </FormControl>
                          <FormMessage className="text-red-500 text-sm" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      disabled={isPending}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="dark:text-neutral-lighter/80 text-sm">
                            Email
                          </FormLabel>
                          <FormControl>
                            <input
                              {...field}
                              type="email"
                              className="w-full bg-transparent p-3 border border-neutral-dark/30 dark:border-neutral-lighter/30 rounded-lg focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:cursor-not-allowed"
                              placeholder="john@company.com"
                              aria-required="true"
                            />
                          </FormControl>
                          <FormMessage className="text-red-400 text-sm" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    disabled={isPending}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="dark:text-neutral-lighter/80 text-sm">
                          Project Details
                        </FormLabel>
                        <FormControl>
                          <textarea
                            {...field}
                            className="w-full bg-transparent p-3 border border-neutral-dark/30 dark:border-neutral-lighter/30 rounded-lg focus:ring-2 focus:ring-primary/50 h-40 disabled:opacity-50 disabled:cursor-not-allowed"
                            placeholder="Tell me about your project..."
                            aria-required="true"
                          />
                        </FormControl>
                        <FormMessage className="text-red-500 text-sm" />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary/90 hover:bg-primary text-neutral-lighter transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Submit contact form"
                    disabled={isPending}
                  >
                    {isPending ? (
                      <div className="flex items-center gap-2">
                        <svg
                          className="animate-spin h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        <span>Sending...</span>
                      </div>
                    ) : (
                      "Leave a message →"
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          )}
        </div>

        {/* Copyright Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-neutral-dark/30 dark:border-neutral-lighter/20">
          <div className="text-sm mb-4 md:mb-0">
            <span className="text-primary font-medium">DemolaDev</span>
            <span className="mx-2">•</span>
            <span>Web Solutions</span>
          </div>

          <div className="flex items-center space-between gap-10 mt-6 md:mt-0">
            <p className="text-sm dark:text-neutral-medium">
              © {year} All Rights Reserved
            </p>
            <ScrollToTop aria-label="Scroll to top" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
