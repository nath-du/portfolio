import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

// STRUTTURA HEADERBAR - CONTENUTO - FOOTERBAR PER OGNI PAGINA
function Layout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
}

export default Layout;