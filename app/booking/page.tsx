import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Consultation | Demoladev Web Solutions",
  description:
    "Schedule a consultation with Demoladev to discuss your web project and get a tailored solution for your business.",
  alternates: {
    canonical: "https://demoladevop.com/booking",
  },
};

const calendarSrc =
  "https://cal.com/adedamola-developer-ggdwbs/project-discovery-call-free?overlayCalendar=true";

const BookingPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-4xl">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text">
              Book a Free Consultation
            </h1>
            <p className="text-shadow-muted-foreground text-lg max-w-2xl mx-auto">
              Choose a time that works for you steps.
            </p>
          </div>

          {/* Calendar Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-900 dark:border-gray-100">
            <div className="aspect-[4/3] md:aspect-[16/10] w-full">
              <iframe
                src={calendarSrc}
                className="w-full h-full"
                allowFullScreen
                title="Book a discovery call"
              />
            </div>
          </div>

          {/* Footer Info */}
          <div className="mt-8 flex flex-col items-center gap-4">
            <p className="text-sm text-muted-foreground">
              Free 30-minute consultation • No commitment required
            </p>

            <Link
              href="https://www.demoladevop.com/"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-50 dark:hover:text-gray-400 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to home</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
