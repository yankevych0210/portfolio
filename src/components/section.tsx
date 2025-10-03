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
    ? {hidden: {opacity: 0}, show: {opacity: 1}}
    : {
        hidden: {opacity: 0, y: 16},
        show: {opacity: 1, y: 0, transition: {duration: 0.5}},
      };

  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="show"
      viewport={{once: true, amount: 0.2}}
      variants={variants}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.section>
  );
}
