import Link from "next/link";
import React from "react";
import ScrollToTop from "./scroll-to-top";
import Headline from "./headline";
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
import CustomButton from "./custom-button";

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
      className="bg-neutral-darker/20 text-neutral-darker dark:bg-neutral-darker/60 bg-gradient dark:text-neutral-lighter/80 mt-4 scroll-mt-38"
      id="contact"
      role="contentinfo"
      aria-labelledby="footer-heading"
    >
      <div className="max-w-[1200px] mx-auto px-6 py-18 relative">
        <div>
          <div className="grid lg:grid-cols-3 lg:items-center gap-8 lg:gap-0 relative">
            <div className="lg:col-span-2">
              <Headline
                emoji="🤙"
                text="Sold Yet?"
                className="text-lighter dark:text-primary absolute top-0"
              />
              <h2
                className="text-4xl md:text-6xl lg:text-7xl font-poppins mt-20 lg:my-16"
                aria-label="Call to action for collaboration"
              >
                {"Enough talk, let's make something great together."}
              </h2>

              <div className="mt-10 mb-6 lg:mt-12 flex flex-col sm:flex-row gap-6">
                <CustomButton variant={`text`} aria-label="Contact via email">
                  <Link href="mailto:adedamola4678@gmail.com">
                    adedamola4678@gmail.com
                  </Link>
                </CustomButton>

                <CustomButton variant={`text`} aria-label="Contact via email">
                  <Link href="tel:+2349158861316">+234 915 886 1316</Link>
                </CustomButton>
              </div>
            </div>

            <div className="md:col-span-1">
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
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mt-20 pt-10 border-t border-accent">
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
