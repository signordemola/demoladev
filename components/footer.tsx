import React from "react";
import ScrollToTop from "./scroll-to-top";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
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
import { Mail, MapPin, PhoneCallIcon } from "lucide-react";
import { Logo } from "./logo";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const Footer = () => {
  const year = new Date().getFullYear();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
    form.reset();
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
          <div className="space-y-8 md:pl-12">
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
                href="mailto:adedamola4678@gmail.com"
                className="flex items-center gap-3 group hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>adedamola4678@gmail.com</span>
              </Link>

              <Link
                href="tel:+2349158861316"
                className="flex items-center gap-3 group hover:text-primary transition-colors"
              >
                <PhoneCallIcon className="w-5 h-5" />
                <span>+234 915 886 1316</span>
              </Link>

              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5" />
                <span>Lagos, Nigeria • Remote Worldwide</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-light py-3 mb-6">
              {`Let's Build Something`}
              <span className="text-primary"> Amazing</span>
            </h2>

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
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="dark:text-neutral-lighter/80 text-sm">
                          Full Name
                        </FormLabel>
                        <FormControl>
                          <input
                            {...field}
                            className="w-full bg-transparent p-3 border border-neutral-dark/30 dark:border-neutral-lighter/30 rounded-lg focus:ring-2 focus:ring-primary/50"
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
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="dark:text-neutral-lighter/80 text-sm">
                          Email
                        </FormLabel>
                        <FormControl>
                          <input
                            {...field}
                            type="email"
                            className="w-full bg-transparent p-3 border border-neutral-dark/30 dark:border-neutral-lighter/30 rounded-lg focus:ring-2 focus:ring-primary/50"
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
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="dark:text-neutral-lighter/80 text-sm">
                        Project Details
                      </FormLabel>
                      <FormControl>
                        <textarea
                          {...field}
                          className="w-full bg-transparent p-3 border border-neutral-dark/30 dark:border-neutral-lighter/30 rounded-lg focus:ring-2 focus:ring-primary/50 h-40"
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
                  className="w-full bg-primary/90 hover:bg-primary text-neutral-lighter transition-all"
                  aria-label="Submit contact form"
                >
                  Send Message →
                </Button>
              </form>
            </Form>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-neutral-dark/30 dark:border-neutral-lighter/20">
          <div className="text-sm mb-4 md:mb-0">
            <span className="text-primary font-medium">DemolaDev</span>
            <span className="mx-2">•</span>
            <span>Web Solutions!</span>
          </div>

          <div className="flex items-center gap-6">
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
