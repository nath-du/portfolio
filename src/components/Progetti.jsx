import { progetti } from "../data/progetti";
import { Link } from "react-router-dom";

function Progetti() {
    return (
        <section className="sezione sezione-muted" id="progetti">
            <div className="container">
                <div className="intestazione-sezione">
                    <div className="titolo-wrapper">
                        <h2>Progetti Recenti</h2>
                        <p>Sviluppati su commissione o per interesse personale</p>
                    </div>
                    <Link to="/projects" className="btn btn-outline">Vedi tutti i Progetti</Link>
                </div>

                <div className="griglia-progetti">
                    {progetti.map((progetto) => (
                        <div className="card-progetto" key={progetto.id}>
                            <div className={`header-immagine ${progetto.classeHeader}`}>
                                <img src={progetto.immagine} alt={progetto.titolo} />
                                <span className="badge-categoria">{progetto.categoria}</span>
                            </div>
                            <div className="corpo-card">
                                <h3>{progetto.titolo}</h3>
                                <p style={progetto.stileDescrizione}>{progetto.descrizione}</p>
                                <div className="stack">
                                    {progetto.stack.map((tecnologia) => (
                                        <span key={tecnologia}>{tecnologia}</span>
                                    ))}
                                </div>
                                <div className="azioni">
                                    <a href={progetto.linkLive} className="btn btn-primary">
                                        <i className="fas fa-external-link-alt"></i> Live
                                    </a>
                                    <a href={progetto.linkCode} className="btn btn-secondary">
                                        <i className="fab fa-github"></i> Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Progetti;
