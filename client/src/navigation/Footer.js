import React from "react";
import { FaFacebook, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import "../style/outils/footer.css";
function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footainer">
          <div className="row">
            <div className="footer-col">
              <h4>INFORMATIONS LÉGALES</h4>
              <ul>
                <li>
                  <a href="https://www.cnil.fr/fr/guide-de-la-securite-des-donnees-personnelles">
                    CNIL Sécurité
                  </a>
                </li>
                <li>
                  <a href="https://www.francenum.gouv.fr/guides-et-conseils/developpement-commercial/site-web/rediger-des-conditions-generales-dutilisation">
                    C.G.U 
                  </a>
                </li>
                <li>
                  <a href="https://entreprendre.service-public.fr/vosdroits/F33527">
                    C.G.V
                  </a>
                </li>
                <li>
                  <a href="https://www.economie.gouv.fr/politique-confidentialite">
                    Politique de confidentialité
                  </a>
                </li>
                <li>
                  <a href="https://www.tresor.economie.gouv.fr/Institutionnel/politique-de-cookies">
                    Politique des cookies
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>À PROPOS</h4>
              <ul>
                <li>
                  <a href="/" aria-label="Accueil">Accueil</a>
                </li>
                <li>
                  <a href="/services" aria-label="Services">Services</a>
                </li>
                <li>
                  <a href="/vente" aria-label="Occasion">Occasion</a>
                </li>
                <li>
                  <a href="/connexion" aria-label="Gestion">Gestion</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>CONTACT</h4>
              <ul>
                <li>
                  <a href="#">AutoPro Garage</a>
                </li>
                <li>
                  <a href="#">66 AV DES CHAMPS ELYSEES</a>
                </li>
                <li>
                  <a href="#">75008 PARIS</a>
                </li>
                <li>
                  <a href="#">France</a>
                </li>
                <li>
                  <a href="#">autopro@garage.com</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Suivez-nous</h4>
              <div className="social-links">
                <a href="https://www.facebook.com/?locale=fr_FR" className="icon-container">
                  <FaFacebook className="icon" />
                </a>
                <a href="https://twitter.com/?lang=fr" className="icon-container">
                  <FaTwitter className="icon" />
                </a>
                <a href="https://github.com/mohamedbesrour" className="icon-container">
                  <FaGithub className="icon" />
                </a>
                <a href="www.linkedin.com/in/mohamed-besrour" className="icon-container">
                  <FaLinkedin className="icon" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright">
          <p>Copyright 2024 Mohamed Besrour GARAGE</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
