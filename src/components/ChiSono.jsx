import { Link } from "react-router-dom";

function ChiSono() {
    return (
        <section className="sezione sezione-bianca">
            <div className="container">
                <div className="griglia-about">
                    <div className="about-info">
                        <div className="intestazione-sezione" style={{ marginBottom: "2rem", textAlign: "left" }}>
                            <div className="titolo-wrapper">
                                <h2>Chi sono</h2>
                                <p style={{ marginTop: "-10px" }}>Jr. Developer Padovano</p>
                            </div>
                        </div>
                        <div className="testo">
                            <p>
                                Sono una persona a cui piace capire come funzionano le cose e non fermarmi alla prima
                                soluzione. Quando qualcosa non va, mi piace analizzare il problema e trovare un modo per
                                risolverlo, e ogni volta che lo faccio, imparo sempre qualcosa di nuovo.
                            </p>
                            <p>
                                Mi piace imparare cose nuove e mettermi alla prova con progetti sempre diversi. Gran parte
                                di quello che so l'ho imparato sperimentando, seguendo spiegazioni su youtube, leggendo
                                documentazioni e cercando di creare soluzioni per i problemi che incontravo.
                            </p>
                            <p>
                                Attualmente studio Meccatronica all'istituto professionale ENAIP (Padova) e continuo a
                                coltivare la mia passione per lo sviluppo software. Oltre alle applicazioni, mi interessano
                                anche reti, sistemi e cybersecurity, settori in cui vorrei continuare a crescere.
                            </p>
                        </div>

                        <div className="about-metriche">
                            <div className="metrica-item">
                                <p>Creo BUG dal</p>
                                <h4>2021</h4>
                            </div>
                            <div className="metrica-item">
                                <h4>5+ Anni</h4>
                                <p>Studio da Autodidatta</p>
                            </div>
                        </div>

                        <Link to="/about" className="btn btn-primary" style={{ marginTop: "2.5rem" }}>
                            Altro<i className="fas fa-arrow-right"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ChiSono;
