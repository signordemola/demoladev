"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const [currentGreeting, setCurrentGreeting] = useState("Hello!");
  const colors = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4", "#FFEEAD"];
  const emojis = ["🎨", "✨", "🚀", "🎯"];

  useEffect(() => {
    setHasMounted(true);
    setIsLoading(true);

    const handleLoad = () => {
      setIsLoading(false);
      document.body.classList.remove("overflow-hidden");

      // Dispatch event when exit animation completes
      setTimeout(() => {
        window.dispatchEvent(new Event("preloadComplete"));
      }, 750); // Match exit animation duration
    };

    document.body.classList.add("overflow-hidden");

    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = Math.min(prev + Math.random() * 25, 100);

        if (newProgress < 33) setCurrentGreeting("Crafting your vision");
        else if (newProgress < 66) setCurrentGreeting("Building foundations");
        else setCurrentGreeting("Final touches");

        return newProgress;
      });
    }, 300);

    if (document.readyState === "complete") {
      setTimeout(handleLoad, 3200);
    } else {
      window.addEventListener("load", () => {
        setTimeout(handleLoad, 1800);
      });
    }

    return () => {
      clearInterval(interval);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  if (!hasMounted) return null;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.8,
              ease: [0.83, 0, 0.17, 1],
              onComplete: () => {
                document.body.style.overflow = "auto";
              },
            },
          }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-purple-100 to-blue-50"
        >
          {/* Animated Gradient Background */}
          <motion.div
            className="absolute inset-0 opacity-30"
            animate={{
              background: [
                `linear-gradient(45deg, ${colors[0]}, ${colors[1]})`,
                `linear-gradient(135deg, ${colors[1]}, ${colors[2]})`,
                `linear-gradient(225deg, ${colors[2]}, ${colors[3]})`,
                `linear-gradient(315deg, ${colors[3]}, ${colors[4]})`,
              ],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />

          {/* Floating Elements */}
          <div className="absolute inset-0 pointer-events-none">
            {emojis.map((emoji, i) => (
              <motion.span
                key={i}
                initial={{
                  opacity: 0,
                  scale: 0,
                  x: Math.random() * 100 - 50 + "%",
                  y: Math.random() * 100 - 50 + "%",
                  filter: "blur(0px)",
                }}
                animate={{
                  opacity: [0, 0.8, 0],
                  scale: [0, 1.2, 0],
                  rotate: Math.random() * 360,
                  filter: ["blur(0px)", "blur(8px)", "blur(0px)"],
                }}
                transition={{
                  duration: 4 + Math.random() * 4,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
                className="absolute text-4xl"
                style={{ color: colors[i % colors.length] }}
              >
                {emoji}
              </motion.span>
            ))}
          </div>

          {/* Main Content */}
          <div className="relative z-10 text-center space-y-8">
            {/* Animated Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{
                scale: 1,
                rotate: [0, 360],
                transition: {
                  repeat: Infinity,
                  duration: 4,
                  ease: "linear",
                },
              }}
              className="text-6xl mx-auto w-24 h-24 rounded-full bg-gradient-to-br from-pink-400 to-orange-400 flex items-center justify-center shadow-lg"
            >
              🎨
            </motion.div>

            {/* Greeting Text */}
            <motion.div
              key={currentGreeting}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
            >
              {currentGreeting}
            </motion.div>

            {/* Progress Bar */}
            <div className="max-w-md mx-auto space-y-4">
              <div className="h-3 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
                <motion.div
                  className="h-full bg-gradient-to-r from-green-400 to-cyan-500 relative"
                  style={{ width: `${progress}%` }}
                  initial={{ width: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-white/20 animate-pulse" />
                </motion.div>
              </div>

              {/* Progress Percentage */}
              <motion.div
                className="text-sm font-semibold text-red-orange-500 bg-slate-300 px-4 py-1 rounded-full backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {Math.round(progress)}% Complete
              </motion.div>
            </div>

            {/* Colorful Tips */}
            <motion.div
              className="text-sm max-w-md mx-auto px-4 py-2 rounded-lg bg-slate-200 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent font-bold">
                Pro Tip:
              </span>{" "}
              <span className="text-gray-600">I use cutting-edge animations</span>
            </motion.div>
          </div>

          {/* Glowing Particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-white/50"
              initial={{
                opacity: 0,
                x: Math.random() * 100 - 50 + "%",
                y: Math.random() * 100 - 50 + "%",
              }}
              animate={{
                opacity: [0, 0.5, 0],
                scale: [0, 2, 0],
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
