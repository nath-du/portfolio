import styles from './SezioneChiSono.module.css';

interface SezioneChiSonoProps {
    titolo: string;
    punti: readonly string[];
}

export function SezioneChiSono({ titolo, punti }: SezioneChiSonoProps) {
    return (
        <section className={styles.sezione}>
            <div className={`container ${styles.griglia}`}>
                <h2 className={styles.titolo}>{titolo}</h2>
                <ul className={styles.elenco}>
                    {punti.map((punto, index) => (
                        <li className={styles.voce} key={punto}>
                            <span className={styles.numero}>{String(index + 1).padStart(2, '0')}</span>
                            <span className={styles.testo}>{punto}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}