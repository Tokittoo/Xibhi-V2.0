
"use client";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import { TextAnimation } from "@/src/components/ui/text-animation";

const Intro = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9 
    },
    show: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      rotate: -10 
    },
    show: { 
      opacity: 1, 
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.5,
      },
    },
  };

  const textVariants = {
    hidden: { 
      opacity: 0, 
      x: -50 
    },
    show: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          initial="hidden" 
          animate="show" 
          variants={containerVariants}
          className="p-8 my-4"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl mx-auto">
            {/* Mobile: Image first, Desktop: Image on right */}
            <motion.div 
              variants={imageVariants}
              className="overflow-hidden rounded-lg w-max h-max shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] border border-zinc-700/70 order-1 md:order-2"
              whileHover={{ 
                scale: 1.05,
                rotate: 2,
                transition: { duration: 0.3 }
              }}
            >
              <Image
                src={"/Main.webp"}
                height={250}
                width={250}
                alt="Sibhi"
                className="object-cover"
              />
            </motion.div>
            
            {/* Mobile: Text below image, Desktop: Text on left */}
            <motion.div 
              variants={itemVariants}
              className="text-center md:text-left flex-1 order-2 md:order-1"
            >
              <motion.div 
                variants={textVariants}
                className="mb-6"
              >
                <TextAnimation
                  text="Sibhi"
                  className="text-6xl md:text-8xl font-sans font-bold tracking-tight"
                  by="chars"
                  direction="bottom"
                  blur={true}
                  fade={true}
                  delay={0.5}
                  staggerChildren={0.1}
                  duration={0.6}
                />
              </motion.div>
              <motion.p 
                variants={textVariants}
                className="text-zinc-700 dark:text-zinc-400 text-lg leading-relaxed max-w-2xl mx-auto md:mx-0"
              >
                Started programming at the age of 13, I got a keen interest
                towards Cyber Security and have explored multiple dimensions of
                it. I progressively worked on multiple technologies ranging from
                software to security, which gave me a brief exposure towards the
                industry. You can contact me for a coffee or to get your idea
                into code or to consult for your software, security needs.
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Intro;
