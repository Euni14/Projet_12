import "./Skill.css";
import js from "../../assets/logo/js.png";
import html from "../../assets/logo/html.png";
import css from "../../assets/logo/css.png";
import reactpng from "../../assets/logo/react.png";
import reduxpng from "../../assets/logo/redux.png";
import notion from "../../assets/logo/notion.png";
import sasspng from "../../assets/logo/sass.png";
import seo from "../../assets/logo/seo.png";
import nodepng from "../../assets/logo/node.png";
import gitpng from "../../assets/logo/git.png";
import vscode from "../../assets/logo/vscode.png";
import figma from "../../assets/logo/figma.png";

function Skill() {
  return (
    <section className="myskills" id="competences">
      <div className="myskills-header">
        <h2>Mes compétences</h2>
        <hr />
      </div>
      <div className="myskills-content">
        <img src={js} alt="logo js" />
        <img src={html} alt="logo html" />
        <img src={css} alt="logo css" />
        <img src={reactpng} alt="logo reactjs" />
        <img src={reduxpng} alt="logo redux" />
        <img src={notion} alt="logo notion" />
        <img src={sasspng} alt="logo sass" />
        <img src={seo} alt="logo seo" />
        <img src={nodepng} alt="logo nodejs" />
        <img src={gitpng} alt="logo git" />
        <img src={vscode} alt="logo vscode" />
        <img src={figma} alt="logo figma" />
      </div>
    </section>
  );
}

export default Skill;
