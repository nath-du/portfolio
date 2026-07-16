import "./About.css";
import { statistiche, skills } from "../data/about";

function About() {
    return (
        <section className="sezione sezione-bianca">
            <div className="container">
                <div className="intestazione-sezione">
                    <div className="titolo-wrapper">
                        <h2>Chi sono</h2>
                        <p>Il mio percorso e le mie skills</p>
                    </div>
                </div>

                <div className="testo-completo">
                    <p>Mi piace capire come funzionano le cose e non fermarmi alla prima soluzione. Quando qualcosa non va, preferisco analizzare il problema, provare strade diverse e trovare un modo per risolverlo. È proprio questo approccio che mi ha avvicinato alla programmazione e che continua a motivarmi ogni giorno.</p>

                    <p>Gran parte di quello che so l'ho imparato sperimentando, seguendo spiegazioni, leggendo documentazione e mettendomi continuamente alla prova con progetti personali. Per me il modo migliore per imparare è costruire qualcosa di concreto, fare errori e capire come migliorare.</p>

                    <p>Attualmente studio Meccatronica all'istituto professionale ENAIP di Padova e continuo a coltivare la mia passione per lo sviluppo software. Negli ultimi anni ho realizzato diversi progetti, sia personali che per clienti, cercando sempre di sviluppare applicazioni semplici da usare, affidabili e pensate per le esigenze di chi le utilizzerà.</p>

                    <p>Oltre allo sviluppo web mi interessano anche reti, sistemi e cybersecurity. Sono ambiti che sto approfondendo con l'obiettivo di trasformare questa passione nel mio futuro professionale.</p>

                    <p>Per questo motivo realizzo anche siti web a costi contenuti. Non lo faccio principalmente per guadagnare, ma per confrontarmi con progetti reali, fare esperienza, arricchire il mio portfolio e continuare a crescere come sviluppatore. Ogni nuovo lavoro è un'occasione per imparare qualcosa di nuovo e migliorare le mie skills.</p>
                </div>

                {/* # Statistiche */}
                <div className="griglia-statistiche">
                    {statistiche.map((stat) => (
                        <div className="statistica" key={stat.id}>
                            <div className={`valore ${stat.colore}`}>{stat.valore}</div>
                            <div className="etichetta">{stat.etichetta}</div>
                        </div>
                    ))}
                </div>

                {/* # skills */}
                <div style={{ marginTop: "4rem" }}>
                    <h3 style={{ fontSize: "2rem", fontWeight: 800, color: "var(--foreground)", marginBottom: "1.5rem" }}>
                        skills
                    </h3>

                    {skills.map((gruppo, indice) => (
                        <div key={gruppo.categoria}>
                            <h4
                                style={{
                                    fontSize: "1.25rem",
                                    fontWeight: 600,
                                    color: "#4B5563",
                                    margin: indice === 0 ? "0 0 1rem" : "2rem 0 1rem",
                                }}
                            >
                                {gruppo.categoria}
                            </h4>
                            <div className="griglia-skills">
                                {gruppo.lista.map((skill) => (
                                    <div className="card-competenza" key={skill.nome}>
                                        <div className={`icona ${skill.colore}`}><i className={skill.icona}></i></div>
                                        <div className="nome">{skill.nome}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default About;