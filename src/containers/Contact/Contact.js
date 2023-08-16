import "./Contact.css";
import { useSelector } from "react-redux";

function Contact() {
  const { translations } = useSelector((state) => state.content);
  return (
    <section className="myContacts">
      <div className="myContacts-header">
        <h2>{translations?.header?.menu?.contact}</h2>
        <hr />
      </div>
      <div className="myContacts-content">
        <div className="premice-contact">
          <p>{translations?.contact?.text}</p>
          <p>
            <i className="fa fa-map-marker"></i> Ile de France, FR
          </p>
          <p>
            <i className="fa fa-envelope-o"></i> admin@euni14.com
          </p>
        </div>
        <div className="social-link">
          <a href="https://github.com/Euni14" target="_blank">
            <i className="fa fa-github fa-4x"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
