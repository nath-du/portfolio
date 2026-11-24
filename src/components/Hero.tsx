import { siteContent } from '../data/siteContent';
import { ArrowGlyph } from './ArrowAction';
import styles from './Hero.module.css';

export function Hero() {
  const { hero, assets } = siteContent;
  return (
    <section className={styles.hero}>
      <div className={styles.videoWrap} aria-hidden="true">
        <video className={styles.video} src={assets.heroVideoUrl} autoPlay muted loop playsInline preload="auto" />
        <div className={styles.overlay} />
        <div className={styles.fade} />
      </div>
      <div className={`container ${styles.content}`}>
        <h1 className={styles.headline}>{hero.heading}</h1>
        <p className={styles.lead}>{hero.description}</p>
        <div className={styles.actions}>
          <a className={styles.primary} href={hero.primaryAction.href}>{hero.primaryAction.label}</a>
          <a className={styles.ghost} href={hero.secondaryAction.href}>
            <span>{hero.secondaryAction.label}</span>
            <span className={styles.ghostIcon} aria-hidden="true"><ArrowGlyph /></span>
          </a>
        </div>
      </div>
    </section>
  );
}
