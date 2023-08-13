import "./Home.css";
import Presentation from "../../containers/Presentation/Presentation";
import Realisation from "../../containers/Realisation/Realisation";
import Skill from "../../containers/Skill/Skill";
import Contact from "../../containers/Contact/Contact";

function Home() {
  return (
    <>
      <Presentation></Presentation>
      <Realisation></Realisation>
      <Skill></Skill>
      <Contact></Contact>
    </>
  );
}

export default Home;
