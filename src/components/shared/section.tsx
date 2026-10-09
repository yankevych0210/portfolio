"use client";

import {motion, useReducedMotion, type Variants} from "framer-motion";
import {cn} from "@/lib/utils";
import type {ComponentPropsWithoutRef, ReactNode} from "react";

export function Section({className, children, id, ...props}: ComponentPropsWithoutRef<typeof motion.section>) {
  const reduce = useReducedMotion();
  const variants: Variants = reduce
    ? {hidden: {opacity: 1}, show: {opacity: 1}}
    : {hidden: {opacity: 0, y: 24}, show: {opacity: 1, y: 0, transition: {duration: 0.6, ease: [0.22, 1, 0.36, 1]}}};

  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="show"
      viewport={{once: true, amount: 0.08}}
      variants={variants}
      className={cn("scroll-mt-24", className)}
      {...props}
    >
      {children}
    </motion.section>
  );
}

export function SectionHeading({eyebrow, title, subtitle, aside}: {eyebrow: string; title: string; subtitle?: string; aside?: ReactNode}) {
  return (
    <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-2xl space-y-2">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
        <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
        {subtitle && <p className="text-pretty text-muted-foreground">{subtitle}</p>}
      </div>
      {aside}
    </div>
  );
}
