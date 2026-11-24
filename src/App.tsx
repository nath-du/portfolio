import { useEffect, type ReactNode } from 'react';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { PaginaSviluppoWeb } from './pages/PaginaSviluppoWeb';
import { siteContent } from './data/siteContent';

type PaginaRoute = {
    contenuto: ReactNode;
    titolo: string;
    descrizione: string;
};

const pagineRoute: Record<string, PaginaRoute> = {
    '/': {
        contenuto: <HomePage />,
        titolo: siteContent.seo.title,
        descrizione: siteContent.seo.description,
    },
    [siteContent.pages.sviluppoWeb.percorso]: {
        contenuto: <PaginaSviluppoWeb />,
        titolo: siteContent.pages.sviluppoWeb.titoloSeo,
        descrizione: siteContent.pages.sviluppoWeb.descrizioneSeo,
    },
};

export function App() {
    const percorso = window.location.pathname.replace(/\/+$/, '') || '/';
    const pagina = pagineRoute[percorso];

    useEffect(() => {
        document.title = pagina?.titolo ?? `Pagina non trovata — ${siteContent.brand.name}`;
        const metaDescrizione = document.querySelector<HTMLMetaElement>('meta[name="description"]');
        if (metaDescrizione) {
            metaDescrizione.content = pagina?.descrizione ?? 'La pagina richiesta non è disponibile.';
        }
    }, [pagina]);

    return pagina?.contenuto ?? <NotFoundPage />;
}
