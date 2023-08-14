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
          <p className="textHome">{translations?.header?.poste}</p>
        </a>
      </div>

      <div className="headBandDetail">
        <nav>
          <a className="projets btn" href="#projets">
            <span>{translations?.header?.menu?.realisation}</span>
          </a>
          <a className="competences btn" href="#competences">
            <span>{translations?.header?.menu?.competences}</span>
          </a>
          <a className="Contact btn" href="#contact">
            <span>{translations?.header?.menu?.contact}</span>
          </a>
          <LanguageSelector></LanguageSelector>
        </nav>
      </div>
    </section>
  );
}

export default Header;
