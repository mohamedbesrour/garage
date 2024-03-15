import React from "react";
import './footer.css'
export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footainer">
          <div className="row">
            <div className="footer-col">
              <h4>INFORMATIONS LÉGALES</h4>
              <ul>
                <li>
                  <a href="#">Mentions légales</a>
                </li>
                <li>
                  <a href="#">C.G.U</a>
                </li>
                <li>
                  <a href="#">C.G.V</a>
                </li>
                <li>
                  <a href="#">Politique de confidentialité</a>
                </li>
                <li>
                  <a href="#">Politique des cookies</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>À PROPOS</h4>
              <ul>
                <li>
                  <a href="#">Qui Sommes-Nous ?</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Livraisons</a>
                </li>
                <li>
                  <a href="#">Récompenses & Fidélité</a>
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
      </footer>
    </>
  );
}
