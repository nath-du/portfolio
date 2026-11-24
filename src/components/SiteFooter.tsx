import { siteContent } from '../data/siteContent';
import { BrandLogo } from './BrandLogo';
import styles from './SiteFooter.module.css';

function hrefSezioneHome(href: string) {
  return href.startsWith('#') && window.location.pathname !== '/' ? `/${href}` : href;
}

export function SiteFooter() {
  const { brand, contact, footer, socialLinks } = siteContent;
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.brandColumn}>
          <a className={styles.logo} href="/" aria-label={brand.name}><BrandLogo /></a>
          <p className={styles.description}>{footer.description}</p>
        </div>
        {footer.columns.map((column) => (
          <div className={styles.column} key={column.id}>
            <h2 className={styles.title}>{column.title}</h2>
            <ul className={styles.list}>
              {column.links.map((link) => <li key={link.label}><a href={hrefSezioneHome(link.href)}>{link.label}</a></li>)}
            </ul>
          </div>
        ))}
        <div className={styles.column}>
          <h2 className={styles.title}>{footer.contactTitle}</h2>
          <ul className={styles.list}>
            <li><a href={`mailto:${contact.email}`}>{contact.email}</a></li>
            <li><a href={`tel:${contact.phone.dial}`}>{contact.phone.display}</a></li>
            <li>{contact.address}</li>
          </ul>
          {socialLinks.length > 0 && (
            <ul className={styles.socialLinks}>
              {socialLinks.map((social) => <li key={social.id}><a href={social.href}>{social.label}</a></li>)}
            </ul>
          )}
        </div>
      </div>
      <hr className={styles.divider} />
      <div className={styles.bottom}>
        <p>© {footer.copyrightYear} {brand.name.toLowerCase()}. {footer.rights}</p>
        <ul className={styles.legal}>
          {footer.legalLinks.map((link) => <li key={link.label}><a href={link.href}>{link.label}</a></li>)}
        </ul>
      </div>
    </footer>
  );
}
