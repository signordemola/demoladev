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
import { Mail } from "lucide-react";

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
      className="bg-neutral-darker/20 text-neutral-darker dark:bg-neutral-darker/60 bg-gradient dark:text-neutral-lighter/80 mt-4 scroll-mt-22"
      id="contact"
      role="contentinfo"
      aria-labelledby="footer-heading"
    >
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="md:mx-10">
          <h6 className="text-2xl md:text-3xl lg:text-5xl mb-6 md:mb:8 lg:mb-12">
            Ready to work together? Reach out!
          </h6>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 px-1 sm:pr-16 md:pr-20 lg:pr-0"
              aria-labelledby="form-heading"
            >
              <h3 id="form-heading" className="sr-only">
                Contact Form
              </h3>

              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="dark:text-neutral-lighter/80">
                      Full Name
                    </FormLabel>
                    <FormControl>
                      <input
                        {...field}
                        className="w-full bg-neutral-lighter/95 text-neutral-darker p-3 border border-neutral-dark/80 dark:border-0 focus:border-0 rounded"
                        placeholder="Your name"
                        aria-required="true"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="dark:text-neutral-lighter/80">
                      Email
                    </FormLabel>
                    <FormControl>
                      <input
                        {...field}
                        type="email"
                        className="w-full bg-neutral-lighter/95 text-neutral-darker p-3 border border-neutral-dark/80 dark:border-0 focus:border-0 rounded"
                        placeholder="your.email@example.com"
                        aria-required="true"
                      />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="dark:text-neutral-lighter/80">
                      Message
                    </FormLabel>
                    <FormControl>
                      <textarea
                        {...field}
                        className="w-full bg-neutral-lighter/95 text-neutral-darker p-3 border border-neutral-dark/80 dark:border-0 focus:border-0 rounded h-32"
                        placeholder="Your message"
                        aria-required="true"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                size={`lg`}
                className="mt-4 text-neutral-light"
                aria-label="Submit contact form"
              >
                Send Message
              </Button>
            </form>
          </Form>
          <div className="mt-6 ml-1.5">
            <p className="mb-4">Or email me @ </p>
            <Link
              href="mailto:adedamola4678@gmail.com"
              className="flex gap-1 h-auto text-primary px-0 border-transparent after:content-[''] after:transition-all after:duration-300 after:h-px after:w-0 after:absolute after:top-full after:bg-primary hover:after:w-full"
            >
              <span>
                <Mail />
              </span>
              <span>adedamola4678@gmail.com</span>
            </Link>
          </div>
        </div>

        <div className="flex justify-between items-center mt-10 pt-6 border-t border-accent">
          <p className="text-xs dark:text-neutral-medium">
            Copyright &copy; DemolaDev {year} &bull;
            <span className="sr-only">, All rights reserved</span>
          </p>

          <ScrollToTop aria-label="Scroll to top of page" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
