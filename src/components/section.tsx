"use client";

import {motion, useReducedMotion, type Variants} from "framer-motion";
import {cn} from "@/lib/utils";
import {type ComponentPropsWithoutRef} from "react";

export function Section({
  className,
  children,
  id,
  ...props
}: ComponentPropsWithoutRef<typeof motion.section>) {
  const prefersReducedMotion = useReducedMotion();
  const variants: Variants = prefersReducedMotion
    ? { hidden: { opacity: 0 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
        show: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { type: "spring", stiffness: 120, damping: 18, mass: 0.6 }
        }
      };

  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.12,
        margin: "0px 0px -10% 0px",
      }}
      variants={variants}
      className={cn("scroll-mt-28 md:scroll-mt-32", className)}
      {...props}
    >
      {children}
    </motion.section>
  );
}
