import "./Presentation.css";
import photoProfil from "../../assets/image/photo-profil.jpg";

function Presentation() {
  return (
    <div className="presentation">
      <div className="profil">
        <img src={photoProfil} alt="Ma photo de profil" />
      </div>
      <p className="presentationText">
        Salutation! <br /> Je m'appelle Eugénie <br /> Je m'appelle Eugenie et
        Je suis passionné par la création de des sites web responsives,
        accessibles et esthétiques, en respectant les bonnes pratiques du web.
        Effectivement, je suis un développeur / intégrateur web diplômé d'une
        formation de 9 mois chez OpenClassroom. Je maîtrise les langages HTML,
        CSS et JavaScript, React ainsi que les outils de développement web tels
        que Git, visual studio code. Je suis à la recherche d'un poste
        d'intégrateur web au sein d'une entreprise dynamique et innovante, où je
        pourrais mettre en œuvre mes compétences et apprendre de nouvelles
        technologies. Je suis disponible immédiatement et je peux vous envoyer
        mon portfolio sur demande.
      </p>
    </div>
  );
}

export default Presentation;