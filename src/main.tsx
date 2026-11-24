import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import { siteContent } from './data/siteContent';
import './styles/global.css';

const { brand, language, seo } = siteContent;
document.documentElement.lang = language;
document.title = window.location.pathname === '/' ? seo.title : `Pagina non trovata — ${brand.name}`;

const descriptionMeta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
if (descriptionMeta) descriptionMeta.content = seo.description;

brand.fontPreconnectUrls.forEach((url) => {
  const preconnect = document.createElement('link');
  preconnect.rel = 'preconnect';
  preconnect.href = url;
  if (url.includes('gstatic')) preconnect.crossOrigin = 'anonymous';
  document.head.append(preconnect);
});

const fontStylesheet = document.createElement('link');
fontStylesheet.rel = 'stylesheet';
fontStylesheet.href = brand.fontStylesheetUrl;
document.head.append(fontStylesheet);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
