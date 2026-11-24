import { siteContent } from '../data/siteContent';
import { MediaImage } from './MediaImage';
import styles from './BrandLogo.module.css';

type BrandLogoProps = {
  className?: string;
};

export function BrandLogo({ className }: BrandLogoProps) {
  const { brand } = siteContent;
  return (
    <span className={[styles.brand, className].filter(Boolean).join(' ')}>
      <MediaImage src={brand.logoUrl} alt={brand.name} fallback={brand.name} className={styles.image} />
    </span>
  );
}
