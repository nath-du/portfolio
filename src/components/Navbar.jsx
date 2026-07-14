import { useState } from "react";

function Navbar() {
    const [menuAperto, setMenuAperto] = useState(false);

    function gestisciMenu() {
        setMenuAperto(!menuAperto);
    }

    return (
        <>
            <header className="navbar">
                <div className="logo">
                    Nath.dev{" "}
                    <p style={{ fontSize: "13px", fontWeight: 400 }}>BETA-0.1.3</p>
                </div>

                <ul className="nav-links">
                    <li>
                        <a href="index.html" className="attivo">Home</a>
                    </li>
                    <li>
                        <a href="#progetti">Progetti</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a
                            href="contact.html"
                            className="btn btn-primary"
                            style={{ height: "44px", padding: "0 1.5rem", fontSize: "0.875rem", color: "white" }}
                        >
                            Contattami
                        </a>
                    </li>
                </ul>

                <button className="hamburger" id="pulsanteMenu" aria-label="Menu" onClick={gestisciMenu}>
                    <i className="fas fa-bars"></i>
                </button>
            </header>

            {/* Menu Mobile */}
            <div className={`menu-mobile ${menuAperto ? "aperto" : ""}`} id="menuMobile">
                <a href="index.html">Home</a>
                <a href="#progetti">Progetti</a>
                <a href="about.html">About</a>
                <a href="contact.html" className="btn btn-primary" style={{ width: "100%", textAlign: "center", marginTop: "0.5rem" }}>
                    Contattami
                </a>
            </div>
        </>
    );
}

export default Navbar;
