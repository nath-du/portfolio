import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { Hero } from '../components/Hero';
import { Marquee } from '../components/Marquee';
import { Projects } from '../components/Projects';
import { Services } from '../components/Services';
import { SiteFooter } from '../components/SiteFooter';
import { SiteHeader } from '../components/SiteHeader';

export function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Projects />
        <About />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
