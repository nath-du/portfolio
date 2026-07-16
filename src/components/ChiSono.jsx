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
                               Studio Meccatronica all'ENAIP di Padova e programmo per passione da quando avevo 11 anni.
                            Realizzo siti web moderni e applicazioni, continuando a imparare attraverso ogni nuovo progetto.
                            </p>
                            <p>
                                Offro la realizzazione di siti web a poco prezzo, accessibili a tutti, con l'obiettivo di fare esperienza,
                                ampliare il mio portfolio e aiutare attività e professionisti a costruire una presenza online semplice, funzionale e accessibile.
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
