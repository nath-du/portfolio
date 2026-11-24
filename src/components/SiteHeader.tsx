import { useState } from 'react';
import { siteContent } from '../data/siteContent';
import { BrandLogo } from './BrandLogo';
import styles from './SiteHeader.module.css';

function hrefSezioneHome(href: string) {
  return href.startsWith('#') && window.location.pathname !== '/' ? `/${href}` : href;
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { navigation } = siteContent;
  const menuLabel = menuOpen ? navigation.closeMenuLabel : navigation.openMenuLabel;

  return (
    <header className={styles.header}>
      <a className={styles.logoLink} href="/" aria-label={siteContent.brand.name}>
        <BrandLogo />
      </a>
      <nav aria-label={navigation.label}>
        <ul id="navigation-mobile" className={[styles.links, menuOpen && styles.open].filter(Boolean).join(' ')}>
          {navigation.items.map((item) => (
            <li key={item.id}>
              <a href={hrefSezioneHome(item.href)} onClick={() => setMenuOpen(false)}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
      <a className={styles.cta} href={hrefSezioneHome(navigation.cta.href)}>{navigation.cta.label}</a>
      <button
        className={styles.menuButton}
        type="button"
        aria-label={menuLabel}
        aria-controls="navigation-mobile"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  );
}
