import { useEffect, useRef } from 'react';
import styles from './ProcessoScrollStack.module.css';

interface Fase {
    numero: string;
    titolo: string;
    durata: string;
    descrizione: string;
}

interface ProcessoScrollStackProps {
    fasi: readonly Fase[];
}

export function ProcessoScrollStack({ fasi }: ProcessoScrollStackProps) {
    const stackRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const cards = stackRef.current?.querySelectorAll<HTMLElement>(`.${styles.card}`);
        if (!cards) return;

        // Mostra card quando entra nel viewport
        const osservatore = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.visibile);
                    }
                });
            },
            { threshold: 0.15, rootMargin: '0px 0px -80px 0px' }
        );

        cards.forEach((card) => osservatore.observe(card));
        return () => osservatore.disconnect();
    }, []);

    return (
        <div className={styles.stack} ref={stackRef}>
            {fasi.map((fase, index) => (
                <article
                    key={fase.numero}
                    className={styles.card}
                    style={{ top: `${96 + index * 14}px` }}
                >
                    <span className={styles.numero}>{fase.numero}</span>
                    <div className={styles.corpo}>
                        <h3>{fase.titolo}</h3>
                        <p className={styles.durata}>{fase.durata}</p>
                        <p className={styles.descrizione}>{fase.descrizione}</p>
                    </div>
                </article>
            ))}
        </div>
    );
}