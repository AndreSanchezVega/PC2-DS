import { useState } from "react";

type ImageSlotProps = {
  src: string;
  alt: string;
  fallbackText?: string;
  className?: string;
};

function ImageSlot({ src, alt, fallbackText = "UP", className = "" }: ImageSlotProps) {
  const [hasError, setHasError] = useState(false);

  if (!src || hasError) {
    return (
      <div className={`image-slot image-slot--fallback ${className}`}>
        {fallbackText}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`image-slot ${className}`}
      onError={() => setHasError(true)}
    />
  );
}

export default ImageSlot;