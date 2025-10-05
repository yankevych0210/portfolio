"use client";

import Image from "next/image";
import {useEffect, useId} from "react";

export default function ProjectGallery({images, alt}: {images: string[]; alt: string}) {
  const galleryId = useId().replace(/:/g, "");

  useEffect(() => {
    let cleanup: (() => void) | undefined;
    import("@fancyapps/ui").then(({Fancybox}) => {
      // Minimal bind to keep bundle light and satisfy TS types
      Fancybox.bind(`[data-fancybox="${galleryId}"]`);
      cleanup = () => Fancybox.unbind(`[data-fancybox="${galleryId}"]`);
    });
    return () => {
      if (cleanup) cleanup();
    };
  }, [galleryId]);

  if (images.length === 0) return null;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {images.map((src, i) => (
        <a
          key={src}
          data-fancybox={galleryId}
          href={src}
          data-caption={`${alt} ${i + 1}`}
          className="group relative aspect-[16/10] overflow-hidden rounded-md ring-1 ring-border hover:shadow-sm"
        >
          <Image src={src} alt={`${alt} ${i + 1}`} fill className="object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>
      ))}
    </div>
  );
}
