import "./Presentation.css";
import photoProfil from "../../assets/image/photo-profil.webp";
import { useSelector } from "react-redux";

function Presentation() {
  const { translations } = useSelector((state) => state.content);

  return (
    <div className="presentation">
      <div className="profil">
        <img src={photoProfil} alt="Ma photo de profil" />
      </div>
      <p
        className="presentationText"
        dangerouslySetInnerHTML={{
          __html: translations?.presentation?.text.join(""),
        }}
      >
        {/*   Salutation! <br /> Je m'appelle Eugénie <br /> Je suis passionnée par le
        développement web et diplômée d'une formation chez OpenClassroom.
        <br />
        Je maîtrise les langages HTML, CSS et JavaScript, React ainsi que les
        outils de développement web tels que Git, visual studio code.
        <br /> Je recherche un poste d'intégrateur web au sein d'une entreprise
        dynamique et innovante, où je pourrais mettre en œuvre mes compétences
        et apprendre de nouvelles technologies. Disponible dans l'immédiat. */}
      </p>
    </div>
  );
}

export default Presentation;
