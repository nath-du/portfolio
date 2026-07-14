import { Link } from "react-router-dom";

function Cta() {
    return (
        <section className="sezione sezione-accent">
            <div className="container cta">
                <div className="cta-box">
                    <h2>Hai un progetto in mente?</h2>
                    <p>Sono sempre alla ricerca di nuove collaborazioni, commissioni e opportunità di crescita.</p>
                    <Link to="/contact" className="btn btn-accent" style={{ padding: "0 3rem", fontSize: "1.1rem" }}>
                        Contattami<i className="fas fa-paper-plane" style={{ marginLeft: "0.5rem" }}></i>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Cta;
