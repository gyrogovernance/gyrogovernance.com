'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';

type ZoomableImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  sizes?: string;
};

export default function ZoomableImage({
  src,
  alt,
  width,
  height,
  className = 'w-full h-auto rounded-xl',
  sizes,
}: ZoomableImageProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  const lightbox =
    open && mounted
      ? createPortal(
          <div
            className="fixed inset-0 z-[1200] flex items-center justify-center bg-black/75 p-4 sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-label={alt}
            onClick={() => setOpen(false)}
          >
            <button
              type="button"
              className="absolute top-4 right-4 z-10 rounded-full bg-white/15 hover:bg-white/25 text-white px-3 py-1.5 text-sm font-medium transition-colors"
              onClick={() => setOpen(false)}
              aria-label="Close image preview"
            >
              Close
            </button>
            <div
              className="relative w-fit max-w-full max-h-[90vh] mx-auto overflow-hidden rounded-2xl leading-none"
              onClick={(event) => event.stopPropagation()}
            >
              {/* Native img avoids Next/Image wrapper quirks that skip corner clipping in the lightbox. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={alt}
                width={width}
                height={height}
                className="block max-w-full max-h-[90vh] w-auto h-auto rounded-2xl"
                style={{ borderRadius: '1rem' }}
              />
            </div>
          </div>,
          document.body
        )
      : null;

  return (
    <>
      <button
        type="button"
        className="block w-full p-0 border-0 bg-transparent cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-classic-blue/40 rounded-xl"
        onClick={() => setOpen(true)}
        aria-label={`View larger: ${alt}`}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={className}
          sizes={sizes}
          loading="lazy"
        />
      </button>
      {lightbox}
    </>
  );
}
