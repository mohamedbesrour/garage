import React from "react";
import "../style/footer.css";

function Footer() {
  return (
    <div>
      <footer className="footer">
        <h3 className="footer-title">Nos Horaires d'ouverture</h3>

        <div className="hourly foot-bloc">
          <li className="hourly-li">lun : 08:45 - 12:00 | 14:00 - 18:00</li>
          <li className="hourly-li">mar : 08:45 - 12:00 | 14:00 - 18:00</li>
          <li className="hourly-li">mer : 08:45 - 12:00 | 14:00 - 18:00</li>
          <li className="hourly-li">jeu : 08:45 - 12:00 | 14:00 - 18:00</li>
          <li className="hourly-li">ven : 08:45 - 12:00 | 14:00 - 18:00</li>
          <li className="hourly-li">sam : 08:45 - 12:00 | </li>
          <li className="hourly-li">dim : Fermé | </li>
        </div>

        <div className="copyright foot-bloc">
          <p>Copyright 2023 Mohamed Besrour GARAGE</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
