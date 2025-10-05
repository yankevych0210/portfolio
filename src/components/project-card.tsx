"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {Badge} from "@/components/ui/badge";
import {Card} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import type {Project} from "@/data/projects";
import Image from "next/image";
import {ExternalLink, Code} from "lucide-react";

export default function ProjectCard({p, locale}: {p: Project; locale: string}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 180, damping: 18, mass: 0.5 }}
      className="group h-full"
    >
      <Card className="p-4 transition-all duration-300 h-full hover:shadow-xl">
        <div className="flex h-full flex-col gap-3">
          <Link href={`/${locale}/projects/${p.slug}`} className="block">
            <div className="relative aspect-[16/9] w-full rounded-lg ring-1 ring-border overflow-hidden">
              {p.status && (
                <Badge className="absolute left-2 top-2">{p.status}</Badge>
              )}
              {p.image ? (
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] will-change-transform"
                />
              ) : (
                <div className="absolute inset-0 bg-accent/30" />
              )}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="sr-only">Open case: {p.title}</span>
            </div>
          </Link>
          <h3 className="font-semibold tracking-tight transition-transform duration-200 group-hover:translate-x-[1px]">
            <Link
              href={`/${locale}/projects/${p.slug}`}
              className="transition-colors hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
            >
              {p.title}
            </Link>
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">{p.summary}</p>
          <div className="flex flex-wrap gap-1 pt-1">
            {p.stack.map((s) => (
              <Badge key={s} variant="outline" className="text-xs py-0.5">{s}</Badge>
            ))}
          </div>
          <div className="pt-2 mt-auto flex gap-2">
            <Button asChild size="sm" className="transition-transform active:scale-[0.98]">
              <Link href={`/${locale}/projects/${p.slug}`}>View Case</Link>
            </Button>
            {p.url && (
              <Button asChild variant="outline" size="sm" className="gap-1 transition-transform active:scale-[0.98]">
                <Link href={p.url} target="_blank" rel="noopener noreferrer">
                  Visit Site
                  <ExternalLink className="size-3.5" />
                </Link>
              </Button>
            )}
            {p.repo && (
              <Button asChild variant="ghost" size="sm" className="gap-1 transition-transform active:scale-[0.98]">
                <Link href={p.repo} target="_blank" rel="noopener noreferrer">
                  <Code className="size-3.5" />
                  View Code
                </Link>
              </Button>
            )}
          </div>
        </div>
      </Card>
    </motion.article>
  );
}
