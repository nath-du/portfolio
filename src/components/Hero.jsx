import { skillCloud } from "../data/skillCloud";
import { Link } from "react-router-dom";

function Hero() {
    return (
        <section className="hero">
            <div className="deco deco-1"></div>
            <div className="deco deco-2"></div>

            <div className="container">
                <div className="hero-info">
                    <h1>
                        Ciao, sono <span>Nath</span> <br />
                    </h1>
                    <h3>Jr. Developer</h3>

                    <p>
                        Ho 16 anni, studio Meccatronica e programmo per passione da quando ne avevo 11. Attualmente sto
                        approfondendo il mondo dei sistemi, delle reti e della cybersecurity, mentre nel tempo libero
                        continuo a imparare da autodidatta il linguaggio C.
                    </p>

                    <div className="gruppo-pulsanti">
                        <a href="#progetti" className="btn btn-white">
                            Esplora Progetti <i className="fas fa-arrow-down"></i>
                        </a>
                        <Link to="/contact" className="btn btn-outline-white">Contattami</Link>
                    </div>
                </div>

                {/* Nuvoletta skills */}
                <div className="hero-visual">
                    <div className="tech-cloud">
                        {skillCloud.map((skill) => (
                            <div
                                key={skill.i}
                                className="tech-item"
                                style={{ "--i": skill.i, "--size": skill.dimensione, "--x": skill.x, "--y": skill.y }}
                            >
                                <i className={skill.icona}></i>
                                <span className="label">{skill.etichetta}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
