import "./Projects.css";
import { progettiCompleti } from "../data/paginaProgetti/";

function Projects() {
    return (
        <section className="sezione sezione-muted">
            <div className="container">
                <div className="intestazione-sezione">
                    <div className="titolo-wrapper">
                        <h2>Tutti i progetti</h2>
                        <p>Una selezione dei miei lavori</p>
                    </div>
                </div>

                <div className="griglia-progetti-completa">
                    {progettiCompleti.map((progetto) => (
                        <div className="card-progetto-completo" key={progetto.id}>
                            {/* Immagine o placeholder */}
                            {progetto.immagine ? (
                                <img 
                                    src={progetto.immagine} 
                                    alt={progetto.titolo}
                                    className="immagine-progetto"
                                />
                            ) : (
                                <div className="placeholder-immagine">
                                    <i className="fas fa-image" style={{ fontSize: "2rem", opacity: 0.3 }}></i>
                                    <span>Nessuna immagine</span>
                                </div>
                            )}
                            
                            {/* titolo */}
                            <h3>{progetto.titolo}</h3>
                            
                            {/* descrizione */}
                            <p>{progetto.descrizione}</p>
                            <div className="stack">
                                {progetto.stack.map((tecnologia) => (
                                    <span key={tecnologia}>{tecnologia}</span>
                                ))}
                            </div>
                            
                            {/* btn live e codice */}
                            <div className="azioni">
                                {progetto.linkLive && (
                                    <a 
                                        href={progetto.linkLive} 
                                        className="btn btn-primary"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="fas fa-external-link-alt" style={{ marginRight: "0.5rem" }}></i> 
                                        Demo
                                    </a>
                                )}
                                {progetto.linkCode && (
                                    <a 
                                        href={progetto.linkCode} 
                                        className="btn btn-outline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="fab fa-github" style={{ marginRight: "0.5rem" }}></i> 
                                        Repo
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;