import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
    const [menuAperto, setMenuAperto] = useState(false);

    function gestisciMenu() {
        setMenuAperto(!menuAperto);
    }

    function chiudiMenu() {
        setMenuAperto(false);
    }

    return (
        <>
            <header className="navbar">
                <Link to="/" className="logo">
                    Nath.dev{" "}
                    <p style={{ fontSize: "13px", fontWeight: 400 }}>BETA-0.2.1</p>
                </Link>

                <ul className="nav-links">
                    <li>
                        <NavLink to="/" end className={({ isActive }) => (isActive ? "attivo" : "")}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                         <NavLink to="/projects" className={({ isActive }) => (isActive ? "attivo" : "")}>
                            Progetti
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({ isActive }) => (isActive ? "attivo" : "")}>
                            Chi Sono
                        </NavLink>
                    </li>
                    <li>
                        <Link
                            to="/contact"
                            className="btn btn-primary"
                            style={{ height: "44px", padding: "0 1.5rem", fontSize: "0.875rem", color: "white" }}
                        >
                            Contattami
                        </Link>
                    </li>
                </ul>

                <button className="hamburger" id="pulsanteMenu" aria-label="Menu" onClick={gestisciMenu}>
                    <i className="fas fa-bars"></i>
                </button>
            </header>

            {/* Menu Mobile */}
            <div className={`menu-mobile ${menuAperto ? "aperto" : ""}`} id="menuMobile">
                <Link to="/" onClick={chiudiMenu}>Home</Link>
                <Link to="/#progetti" onClick={chiudiMenu}>Progetti</Link>
                <Link to="/about" onClick={chiudiMenu}>About</Link>
                <Link
                    to="/contact"
                    onClick={chiudiMenu}
                    className="btn btn-primary"
                    style={{ width: "100%", textAlign: "center", marginTop: "0.5rem" }}
                >
                    Contattami
                </Link>
            </div>
        </>
    );
}

export default Navbar;