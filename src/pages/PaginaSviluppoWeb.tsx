import { Contact } from '../components/Contact';
import { ProcessoScrollStack } from '../components/ProcessoScrollStack';
import { SiteFooter } from '../components/SiteFooter';
import { SiteHeader } from '../components/SiteHeader';
import { siteContent } from '../data/siteContent';
import styles from './PaginaSviluppoWeb.module.css';

export function PaginaSviluppoWeb() {
    const contenuto = siteContent.pages.sviluppoWeb;

    return (
        <>
            <SiteHeader />
            <main className={styles.pagina}>
                <section className={styles.hero}>
                    <video
                        className={styles.videoSfondo}
                        autoPlay
                        muted
                        loop
                        playsInline
                    >
                        <source src="/background-vid-websites.mp4" type="video/mp4" />
                    </video>
                    <div className={styles.overlaySfondo} />
                    <div className={`container ${styles.heroContenuto}`}>
                        <h1>{contenuto.hero.titolo}</h1>
                        <p className={styles.sottotitolo}>{contenuto.hero.sottotitolo}</p>
                        <p className={styles.heroTesto}>{contenuto.hero.testo}</p>
                        <a className={styles.ctaPrincipale} href="#siti-inclusi">
                            {contenuto.hero.cta}
                        </a>
                    </div>
                </section>


                <section id="siti-inclusi" className={styles.sezione}>
                    <div className="container">
                        <h2>{contenuto.incluso.titolo}</h2>
                        <p className={styles.introduzione}>{contenuto.incluso.testo}</p>
                        <dl className={styles.elencoIncluso}>
                            {contenuto.incluso.voci.map((voce) => (
                                <div className={styles.voceInclusa} key={voce.titolo}>
                                    <dt>{voce.titolo}</dt>
                                    <dd>{voce.descrizione}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </section>

                <section className={styles.sezioneProcesso}>
                    <div className="container">
                        <h2>{contenuto.processo.titolo}</h2>
                        <p className={styles.introduzione}>{contenuto.processo.testo}</p>
                        <ProcessoScrollStack fasi={contenuto.processo.fasi} />
                    </div>
                </section>

                <section className={styles.sezioneManutenzione}>
                    <div className="container">
                        <h2>{contenuto.manutenzione.titolo}</h2>
                        <p className={styles.introduzione}>{contenuto.manutenzione.testo}</p>
                        <div className={styles.piani}>
                            {contenuto.manutenzione.piani.map((piano) => (
                                <article className={styles.piano} key={piano.nome}>
                                    <h3>{piano.nome}</h3>
                                    <p className={styles.prezzo}>{piano.prezzo}</p>
                                    <p className={styles.alternativa}>{piano.alternativa}</p>
                                    <ul>
                                        {piano.voci.map((voce) => <li key={voce}>{voce}</li>)}
                                    </ul>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Sezione altri progetti temporaneamente disattivata
                <section className={styles.sezione}>
                    <div className="container">
                        <h2>{contenuto.altriProgetti.titolo}</h2>
                        <ul className={styles.altriProgetti}>
                            {contenuto.altriProgetti.voci.map((progetto) => (
                                <li key={progetto.nome}>
                                    <strong>{progetto.nome}</strong>
                                    <span>{progetto.descrizione}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
                */}

                    {/* <section className={styles.sezione}>
                        <div className="container">
                            <h2>{contenuto.testimonianze.titolo}</h2>
                            <div className={styles.testimonianze}>
                                {contenuto.testimonianze.voci.map((voce) => (
                                    <figure className={styles.testimonianza} key={voce.nome}>
                                        <blockquote>“{voce.citazione}”</blockquote>
                                        <figcaption>{voce.nome}</figcaption>
                                    </figure>
                                ))}
                            </div>
                        </div>
                    </section> */}

                <Contact />
            </main>
            <SiteFooter />
        </>
    );
}