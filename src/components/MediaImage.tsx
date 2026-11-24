import { useState } from 'react';
import styles from './MediaImage.module.css';

type MediaImageProps = {
  src: string;
  alt: string;
  fallback: string;
  className?: string;
};

export function MediaImage({ src, alt, fallback, className }: MediaImageProps) {
  const [failed, setFailed] = useState(!src);
  if (failed) {
    return (
      <span className={[styles.fallback, className].filter(Boolean).join(' ')} role="img" aria-label={alt}>
        {fallback}
      </span>
    );
  }

  return (
    <img
      className={className}
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}
