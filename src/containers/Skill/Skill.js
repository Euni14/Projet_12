import "./Skill.css";
import js from "../../assets/logo/js.png";
import html from "../../assets/logo/html.png";
import css from "../../assets/logo/css.png";
import reactpng from "../../assets/logo/react.png";
import reduxpng from "../../assets/logo/redux.png";
import notion from "../../assets/logo/notion.png";
import sasspng from "../../assets/logo/sass.png";
import agile from "../../assets/logo/agile.png";
import seo from "../../assets/logo/seo.png";
import nodepng from "../../assets/logo/node.png";
import gitpng from "../../assets/logo/git.png";
import vscode from "../../assets/logo/vscode.png";

function Skill() {
  return (
    <section class="myskills">
      <div class="myskills-header">
        <h1>Mes compétences</h1>
        <hr />
      </div>
      <div class="myskills-content">
        <img src={js} alt="" />
        <img src={html} />
        <img src={css} />
        <img src={reactpng} />
        <img src={reduxpng} />
        <img src={notion} />
        <img src={sasspng} />
        <img src={agile} />
        <img src={seo} />
        <img src={nodepng} />
        <img src={gitpng} />
        <img src={vscode} />
      </div>
    </section>
  );
}

export default Skill;
