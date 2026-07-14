import { Link } from 'react-router-dom';

const Unavailable = () => {
  return (
    <section className="coming-hero">
      <div className="deco deco-1"></div>
      <div className="deco deco-2"></div>

      <div className="coming-box">
        <h1>Codice <span>non disponibile</span></h1>
        <p>
          Il codice di questo progetto non è open-source.
        </p>

        <div className="coming-actions">
          <Link to="/" className="btn btn-outline-white">
            <i className="fas fa-arrow-left"></i> Torna alla Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Unavailable;