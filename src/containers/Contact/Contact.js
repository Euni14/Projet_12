import "./Contact.css";
import photoProfil from "../../assets/image/photo-profil.jpg";

function Contact() {
  return (
    <section className="myskills">
      <div className="myskills-header">
        <h1>Contact</h1>
        <hr />
      </div>
      <div className="myskills-content">
        <div className="premice-contact">
          <p>
            Pour plus d'informations sur mes services, n'hésitez pas à me
            contacter et je vous répondrai dans les 24 heures.
          </p>
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
