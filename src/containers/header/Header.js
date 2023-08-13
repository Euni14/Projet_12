import "./Header.css";
import { LanguageSelector } from "../../components/LanguageSelector/LanguageSelector";
import { useSelector } from "react-redux";

function Header() {
  const { translations } = useSelector((state) => state.content);
  return (
    <section className="headBand">
      <div className="headBandNav">
        <a className="home" href="#home">
          <h1> Eugénie M. </h1>
          <p className="textHome"> DEVELOPPEUR / INTEGRATEUR FRONT-END</p>
        </a>
      </div>

      <div className="headBandDetail">
        <nav>
          <a className="projets btn" href="#projets">
            <span> Mes Réalisations</span>
          </a>
          <a className="competences btn" href="#competences">
            <span>Mes Compétences</span>
          </a>
          <a className="Contact btn" href="#contact">
            <span> Contactez-moi! </span>
          </a>
        </nav>
        <LanguageSelector></LanguageSelector>
      </div>
    </section>
  );
}

export default Header;
