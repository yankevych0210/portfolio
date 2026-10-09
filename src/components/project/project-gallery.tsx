"use client";

import Image from "next/image";
import {useEffect, useId} from "react";

type Props = {
  images: string[];
  mobileImage?: string;
  alt: string;
  labels: {screenshot: string; mobile: string};
};

export default function ProjectGallery({images, mobileImage, alt, labels}: Props) {
  const galleryId = useId().replace(/:/g, "");

  useEffect(() => {
    let unbind: (() => void) | undefined;
    let cancelled = false;
    import("@fancyapps/ui").then(({Fancybox}) => {
      if (cancelled) return;
      const selector = `[data-fancybox="${galleryId}"]`;
      Fancybox.bind(selector);
      unbind = () => Fancybox.unbind(selector);
    });
    return () => {
      cancelled = true;
      unbind?.();
    };
  }, [galleryId]);

  return (
    <div className={mobileImage ? "grid gap-4 md:grid-cols-[1fr_auto]" : ""}>
      {images.length > 0 && (
        <div className="grid gap-4 sm:grid-cols-2">
          {images.map((src, i) => (
            <a
              key={src}
              href={src}
              data-fancybox={galleryId}
              data-caption={`${alt} — ${labels.screenshot} ${i + 2}`}
              className="group relative block aspect-[16/10] overflow-hidden rounded-xl border bg-muted"
            >
              <Image
                src={src}
                alt={`${alt} — ${labels.screenshot} ${i + 2}`}
                fill
                sizes="(min-width: 768px) 420px, 100vw"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </a>
          ))}
        </div>
      )}
      {mobileImage && (
        <a
          href={mobileImage}
          data-fancybox={galleryId}
          data-caption={`${alt} — ${labels.mobile}`}
          className="group relative mx-auto block w-[240px] overflow-hidden rounded-[2rem] border-[6px] border-foreground/85 bg-muted shadow-xl"
        >
          <Image src={mobileImage} alt={`${alt} — ${labels.mobile}`} width={390} height={844} sizes="240px" className="h-auto w-full" />
          <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3 text-center text-xs font-medium text-white">{labels.mobile}</span>
        </a>
      )}
    </div>
  );
}
