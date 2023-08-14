import "./Skill.css";
import { useSelector } from "react-redux";

function Skill() {
  const { translations } = useSelector((state) => state.content);
  return (
    <section className="myskills" id="competences">
      <div className="myskills-header">
        <h2>{translations?.header?.menu?.competences}</h2>
        <hr />
      </div>
      <div className="myskills-content">
        {translations?.competence?.map((skill) => (
          <img src={skill.imageSrc} alt={skill.imageAlt} />
        ))}
      </div>
    </section>
  );
}

export default Skill;
