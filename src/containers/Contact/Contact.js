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
            <i className="fa fa-map-marker"></i> Dammarie Les Lys,77190 FR
          </p>
          <p>
            <i className="fa fa-phone"></i> +XX XX XX XX XX XX
          </p>
          <p>
            <i className="fa fa-envelope-o"></i> admin@euni14.com
          </p>
        </div>
        <div className="social-link">
          <a href="#" target="_blank">
            <i className="fa fa-twitter-square fa-4x"></i>
          </a>
          <a href="#" target="_blank">
            <i className="fa fa-google-plus-square fa-4x"></i>
          </a>
          <a href="#" target="_blank">
            <i className="fa fa-linkedin-square fa-4x"></i>
          </a>
          <a href="#" target="_blank">
            <i className="fa fa-github fa-4x"></i>
          </a>
          <a href="#" target="_blank">
            <i className="fa fa-instagram fa-4x"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
