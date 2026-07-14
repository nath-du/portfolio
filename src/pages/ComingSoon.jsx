import { Link } from 'react-router-dom';

const ComingSoon = ({ pageName = "Questa pagina" }) => {
  return (
    <section className="coming-hero">
      <div className="deco deco-1"></div>
      <div className="deco deco-2"></div>

      <div className="coming-box">
        <h1>Coming<span> Sooooooon...</span></h1>
        <p>
          {pageName} è in fase di sviluppo e non è ancora disponibile. 
          Nel frattempo puoi tornare alla home o contattarmi direttamente via email.
        </p>

        <div className="coming-actions">
          <Link to="/" className="btn btn-outline-white">
            <i className="fas fa-arrow-left"></i> Torna alla Home
          </Link>
          <a 
            href="mailto:nathdev10@outlook.com" 
            className="btn btn-accent"
          >
            Invia una mail <i className="fas fa-paper-plane"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;