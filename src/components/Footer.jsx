import { Link } from "react-router-dom";


function Footer() {
    return (
        <footer className="footer">
            <div className="griglia-footer">
                <div className="brand-info">
                    <h4 style={{ color: "var(--white)", fontWeight: 800, fontSize: "1.25rem", letterSpacing: "-0.02em" }}>
                        Nath.dev
                    </h4>
                    <p>Jr. Developer Padovano.</p>
                    <p>Sto imparando a programmare da quando ho 11 anni. Mentre l'AI rimpiazza il mio lavoro, io mi bevo uno spritz.</p>
                    <div className="icone-social">
                        <a href="https://github.com/nath-du" aria-label="GitHub"><i className="fab fa-github"></i></a>
                        <a href="https://www.instagram.com/nathdev10/" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                        <a href="#" aria-label="Email"><i className="fas fa-envelope"></i></a>
                    </div>
                </div>

                <div>
                    <h4>Navigazione</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/projects">Progetti</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contatti</Link></li>
                    </ul>
                </div>

                <div>
                    <h4>Social</h4>
                    <ul>
                        <li><a href="https://www.instagram.com/nathdev10/">Instagram</a></li>
                        <li><a href="#">TikTok</a></li>
                        <li><a href="https://github.com/nath-du">GitHub</a></li>
                    </ul>
                </div>

                <div>
                    <h4>Contatti</h4>
                    <ul>
                        <li><a href="mailto:nathdev10@outlook.com">nathdev10@outlook.com</a></li>
                        <li style={{ fontSize: "0.95rem", marginTop: "0.5rem" }}>
                            <i className="fas fa-map-marker-alt"></i> Padova, IT
                        </li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-copy">© 2026 Nath.dev. Tutti i diritti riservati.</div>
                <div className="footer-release">
                    BETA-0.1.3<br />Ultimo <br />aggiornamento: <br />12-07-2026
                </div>
            </div>
        </footer>
    );
}

export default Footer;
