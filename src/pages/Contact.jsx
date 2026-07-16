import "./Contact.css";

function Contact() {
    return (
        <section className="sezione sezione-bianca">
            <div className="container">
                <div className="intestazione-sezione">
                    <div className="titolo-wrapper">
                        <h2>Contatti</h2>
                        <p>Scrivimi o seguimi sui social</p>
                    </div>
                </div>

                <div className="griglia-contatti">
                    {/* # Form (Coming Soon) */}
                    <div className="card-form">
                        <h3>Invia un messaggio</h3>
                        <p className="coming-soon">🚧 Coming Sooooooon...</p>

                        <div className="form-placeholder">
                            <div className="campo"></div>
                            <div className="campo"></div>
                            <div className="campo-grande"></div>
                            <div className="btn-disabled"></div>
                        </div>
                    </div>

                    {/* # Social */}
                    <div className="card-social">
                        <h3>Trovami online</h3>
                        <div className="lista-social">
                            <a href="https://www.instagram.com/nathdev10/">
                                <span className="icona rosa"><i className="fab fa-instagram"></i></span>
                                Instagram
                            </a>
                            <a href="#">
                                <span className="icona nera"><i className="fab fa-tiktok"></i></span>
                                TikTok
                            </a>
                            <a href="#">
                                <span className="icona nera"><i className="fab fa-facebook"></i></span>
                                Facebook
                            </a>
                            <a href="https://github.com/nath-du">
                                <span className="icona nera"><i className="fab fa-github"></i></span>
                                GitHub
                            </a>
                        </div>

                        <div style={{ marginTop: "2rem" }}>
                            <a href="mailto:nathdev10@outlook.com" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                                Scrivimi via email
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;