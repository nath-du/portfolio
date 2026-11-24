import { siteContent } from '../data/siteContent';
import { ArrowGlyph } from './ArrowAction';
import { SectionHeading } from './SectionHeading';
import styles from './Services.module.css';

type Service = (typeof siteContent.services.items)[number];

const serviceImages: Record<Service['id'], string> = {
  'sviluppo-web': 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80',
  integrazioni: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  'server-reti': 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80',
};

function ServiceCard({ service }: { service: Service }) {
  return (
    <article className={styles.card}>
      <a
        href={service.href}
        className={styles.circle}
        style={{ backgroundImage: `url("${serviceImages[service.id]}")` }}
      >
        <div className={styles.overlay} />

        <div className={styles.circleContent}>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>

        <span className={styles.action} aria-hidden="true">
          <ArrowGlyph />
        </span>
      </a>
    </article>
  );
}

export function Services() {
  return (
    <section id={siteContent.sectionIds.services} className={styles.section}>
      <div className="container">
        <SectionHeading>{siteContent.services.title}</SectionHeading>

        <div className={styles.grid}>
          {siteContent.services.items.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <p className={styles.hint}>
          Clicca sul servizio desiderato per maggiori info.
        </p>
      </div>
    </section>
  );
}
