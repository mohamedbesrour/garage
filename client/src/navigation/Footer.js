import React from "react";
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
                  <a href="/">Accueil</a>
                </li>
                <li>
                  <a href="/services">Services</a>
                </li>
                <li>
                  <a href="/vente">Occasion</a>
                </li>
                <li>
                  <a href="/connexion">Gestion</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>CONTACT</h4>
              <ul>
                <li>
                  <a href="#">Jungle Vape</a>
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
                  <a href="#">contact@jungle-vape.com</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>follow us</h4>
              <div className="social-links">
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#">
                  <i className="fab fa-instagram" />
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in" />
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
