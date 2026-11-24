import { BrandLogo } from '../components/BrandLogo';
import styles from './NotFoundPage.module.css';

export function NotFoundPage() {
  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <a className={styles.logo} href="/" aria-label="NATH.DEV — torna alla home">
          <BrandLogo />
        </a>
        <section className={styles.message} aria-labelledby="not-found-title">
          <h1 id="not-found-title">Non troviamo questa pagina.</h1>
          <p>L’indirizzo potrebbe essere sbagliato oppure la pagina è stata spostata. Torna alla home per continuare.</p>
          <a className={styles.homeLink} href="/">Torna alla home</a>
        </section>
      </div>
    </main>
  );
}
