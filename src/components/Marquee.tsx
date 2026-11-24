import { siteContent } from '../data/siteContent';
import { MediaImage } from './MediaImage';
import styles from './Marquee.module.css';

export function Marquee() {
  const collaborators = siteContent.assets.collaborators;
  const repeated = [...collaborators, ...collaborators];
  return (
    <section className={styles.bar} aria-label={siteContent.marquee.ariaLabel}>
      <div className={styles.track}>
        {repeated.map((partner, index) => (
          <div className={styles.item} key={`${partner.id}-${index}`} aria-hidden={index >= collaborators.length}>
            <MediaImage
              src={partner.imageUrl}
              alt={partner.alt}
              fallback={partner.name}
              className={styles.partnerImage}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
