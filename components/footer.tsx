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
      className="bg-neutral-darker text-neutral-light mt-20 scroll-mt-38"
      id="contact"
      role="contentinfo"
      aria-labelledby="footer-heading"
    >
      <div className="max-w-[1200px] mx-auto px-6 py-18 relative">
        <div className="section">
          <Headline emoji="🤙" text="Sold Yet?" />

          <div className="grid md:grid-cols-3 md:items-center gap-10 md:gap-12">
            <div className="md:col-span-2">
              <h2
                id="footer-heading"
                className="text-3xl md:text-5xl lg:text-8xl font-satoshi mt-8 font-extralight"
                aria-label="Call to action for collaboration"
              >
                {"Enough talk, let's make something great together."}
              </h2>

              <div className="mt-8 flex flex-col md:flex-row gap-6">
                <Button
                  variant={`outline`}
                  className="text-neutral-light hover:text-neutral-medium"
                  aria-label="Contact via email"
                >
                  <Link href="mailto:adedamola4678@gmail.com">
                    adedamola4678@gmail.com
                  </Link>
                </Button>

                <Button
                  variant={`outline`}
                  className="text-neutral-light hover:text-neutral-medium"
                  aria-label="Contact via email"
                >
                  <Link href="tel:+2349158861316">+234 915 886 1316</Link>
                </Button>
              </div>
            </div>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4 mt-8 md:mt-0"
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
                      <FormLabel className="text-neutral-light">
                        Full Name
                      </FormLabel>
                      <FormControl>
                        <input
                          {...field}
                          className="w-full bg-neutral-light text-neutral-dark p-3 border-0 focus:border-0 rounded"
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
                      <FormLabel className="text-neutral-light">
                        Email
                      </FormLabel>
                      <FormControl>
                        <input
                          {...field}
                          type="email"
                          className="w-full bg-neutral-light text-neutral-dark p-3 border-0 focus:border-0 rounded"
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
                      <FormLabel className="text-neutral-light">
                        Message
                      </FormLabel>
                      <FormControl>
                        <textarea
                          {...field}
                          className="w-full bg-neutral-light text-neutral-dark p-3 border-0 focus:border-0 rounded h-32"
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
                  className="w-full mt-4 text-neutral-light"
                  aria-label="Submit contact form"
                >
                  Send Message
                </Button>
              </form>
            </Form>
          </div>
        </div>

        <div className="flex justify-between items-center pb-6 pt-12">
          <p className="text-xs text-neutral-medium">
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
