import "./Realisation.css";
import ohmyfood from "../../assets/image/ohmyfood.webp";
import sophieBluel from "../../assets/image/sophie-bluel-colle.webp";
import argentBank from "../../assets/image/argentBank.webp";
import { useSelector } from "react-redux";

function Realisation() {
  const { translations } = useSelector((state) => state.content);
  return (
    <>
      <div className="myRealisations-header" id="projets">
        <h2>{translations?.header?.menu?.realisation}</h2>
        <hr />
      </div>
      <section className="realisations">
        <div className="project">
          {translations?.realisation?.map((realise) => (
            <div className="projectContent" key={realise?.id}>
              <div className="projetDetail">
                <img
                  className={realise?.id}
                  src={realise?.imageSrc}
                  alt={realise?.id}
                />
                <div className="projectText">
                  <div>
                    <h3>{realise?.title}</h3>
                    <p
                      className="projectCompetence"
                      dangerouslySetInnerHTML={{
                        __html: realise?.text?.join(""),
                      }}
                    ></p>
                    <a href={realise?.url} className="info">
                      {" "}
                      {translations?.voirplus}{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Realisation;
