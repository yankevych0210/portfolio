"use client";

import Image from "next/image";
import {useState} from "react";
import {Dialog, DialogContent, DialogHeader, DialogTitle} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {ChevronLeft, ChevronRight} from "lucide-react";

export default function ProjectGallery({images, alt}: {images: string[]; alt: string}) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openAt = (i: number) => {
    setIndex(i);
    setOpen(true);
  };

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  if (images.length === 0) return null;

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {images.map((src, i) => (
          <button key={src} onClick={() => openAt(i)} className="group relative aspect-[16/10] overflow-hidden rounded-md ring-1 ring-border hover:shadow-sm">
            <Image src={src} alt={`${alt} ${i + 1}`} fill className="object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
          </button>
        ))}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-5xl p-0 overflow-hidden">
          <DialogHeader>
            <DialogTitle className="sr-only">{alt} gallery</DialogTitle>
          </DialogHeader>
          <div className="relative w-full h-[70vh] bg-black">
            <Image src={images[index]} alt={`${alt} ${index + 1}`} fill className="object-contain" />
            <div className="absolute inset-x-0 bottom-0 p-3 text-center text-xs text-white/70 bg-gradient-to-t from-black/40">
              {index + 1} / {images.length}
            </div>
            {images.length > 1 && (
              <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-2">
                <Button size="icon" variant="secondary" onClick={prev} className="bg-white/80 hover:bg-white">
                  <ChevronLeft className="size-5" />
                </Button>
                <Button size="icon" variant="secondary" onClick={next} className="bg-white/80 hover:bg-white">
                  <ChevronRight className="size-5" />
                </Button>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
