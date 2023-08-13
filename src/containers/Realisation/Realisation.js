import "./Realisation.css";
import ohmyfood from "../../assets/image/ohmyfood.webp";
import sophieBluel from "../../assets/image/sophie-bluel-colle.webp";
import argentBank from "../../assets/image/argentBank.webp";

function Realisation() {
  return (
    <>
      <h2 className="" id="projets">
        Mes réalisations
      </h2>
      <section className="realisations">
        <div className="project">
          <div className="projectContent">
            <div className="projetDetail">
              <img
                className="ohmyfood"
                src={ohmyfood}
                alt="image ohmyfood projet portfolio"
              />
              <div className="projectText">
                <div>
                  <h3>
                    Améliorez l'interface d'un site mobile avec des animations
                    CSS
                  </h3>
                  <p className="projectCompetence">
                    Intégrer une maquette en mobile-first <br />
                    Versionner son projet avec Git et Github <br />
                    Mettre en œuvre des animations CSS
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="project">
          <div className="projectContent">
            <div className="projetDetail">
              <img
                className="architecte"
                src={sophieBluel}
                alt="image architecte projet portfolio"
              />
              <div className="projectText">
                <div>
                  <h3> Créez une page web dynamique avec JavaScript </h3>
                  <p className="projectCompetence">
                    Manipuler les éléments du DOM avec JavaScript <br />
                    Récupérer les données utilisateurs dans le JavaScript via
                    des formulaires <br />
                    Gérer les événements utilisateurs avec JavaScript
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="project">
          <div className="projectContent">
            <div className="projetDetail">
              <img
                className="argentBank"
                src={argentBank}
                alt="image représantant mon portfolio"
              />
              <div className="projectText">
                <div>
                  <h3>
                    Implémentez le front-end d'une application bancaire avec
                    React
                  </h3>
                  <p className="projectCompetence">
                    Afficher les données du back end sur l'interface via des
                    appels API
                    <br />
                    Configurer des routes API pour la communication client /
                    serveur <br />
                    Implémenter la gestion des données avec Redux pour assurer
                    le fonctionnement du front.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Realisation;
