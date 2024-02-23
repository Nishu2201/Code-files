import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section about">
          <h3>SRC</h3>
          <ul>
            <li>img <a href="/">ethereum</a></li>
            <li>txt <a href="/">chatgpt</a></li>
            <li>code <a href="https://github.com/berru-g/web3.0">berru-g</a></li>
          </ul>
        </div>
        <div className="footer-section links">
          <h3>Liens rapides</h3>
          <ul>
            <li><a href="/">Accueil</a></li>
            <li><a href="/">À propos</a></li>
            <li><a href="/">Services</a></li>
            <li><a href="/">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h3>Contact</h3>
          <p><i className="material-icons">location_on</i>L.A NTS Fr</p>
          <p><i className="material-icons">email</i>contact@example.com</p>
          <p><i className="material-icons">phone</i>+1 234 567 890</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Tous droits réservés &copy; 2023 | coding by <a href="https://github.com/berru-g/">Berru-g</a></p>
      </div>
    </footer>
  );
};

export default Footer;
