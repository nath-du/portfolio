import { siteContent } from '../data/siteContent';
import styles from './About.module.css';

export function About() {
  const { about } = siteContent;
  return (
    <section id={siteContent.sectionIds.about} className={styles.section}>
      <div className={`container ${styles.layout}`}>
        <div className={styles.mediaWrap}>
          <img
            src="/immagine-prt.png"
            alt="Ritratto dello sviluppatore al lavoro"
            className={styles.mediaImg}
            width={460}
            height={440}
            loading="lazy"
          />
        </div>
        <div className={styles.narrative}>
          <h2>{about.title}</h2>
          {about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <ol className={styles.timeline} aria-label="Come realizzo il tuo sito web">
            {about.method.map((step, index) => (
              <li className={styles.timelineStep} key={step.label}>
                <span className={styles.stepNumber} aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className={styles.stepTitle}>{step.label}</h3>
                  <p className={styles.stepDescription}>{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
