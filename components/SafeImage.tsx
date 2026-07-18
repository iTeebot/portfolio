"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";

interface SafeImageProps extends Omit<ImageProps, "src"> {
  src: string;
  fallbackSrc?: string;
}

export default function SafeImage({
  src,
  fallbackSrc = "/logo.png",
  alt,
  ...props
}: SafeImageProps) {
  const [prevSrc, setPrevSrc] = useState<string>(src);
  const [imgSrc, setImgSrc] = useState<string>(src);

  if (src !== prevSrc) {
    setPrevSrc(src);
    setImgSrc(src);
  }

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      onError={() => {
        setImgSrc(fallbackSrc);
      }}
    />
  );
}
