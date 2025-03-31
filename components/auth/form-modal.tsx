"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function FormModal({
  title,
  triggerText,
  children,
}: {
  title: string;
  triggerText: string;
  children: ReactNode;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full"
        >
          <Button
            variant="outline"
            className={cn(
              "w-full gap-2 h-24 border-2 border-dashed",
              "hover:border-solid hover:bg-accent/50 transition-all",
              "flex flex-col items-center justify-center"
            )}
          >
            <Plus className="w-6 h-6 text-primary" />
            <span className="text-base font-medium text-primary">
              {triggerText}
            </span>
          </Button>
        </motion.div>
      </DialogTrigger>

      <DialogContent className="max-w-2xl rounded-lg sm:rounded-[1rem]">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <DialogHeader className="border-b pb-4">
            <DialogTitle className="text-2xl font-semibold text-gray-900">
              {title}
            </DialogTitle>
          </DialogHeader>

          <div className="pt-6">{children}</div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}
