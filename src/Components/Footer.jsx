import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () =>{
  return (
    <div className="container">
  <footer className="py-5">
    <div className="row justify-content-center">
      <div className="col-6 col-md-2 mb-3">
        <h5>THE ENTERTAINMENT HUB</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Careers</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Brand Center</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Blog</a></li>
        </ul>
      </div>

      <div className="col-6 col-md-2 mb-3">
        <h5>HELP CENTER</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Discord Server</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Twitter</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Facebook</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Instagram</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Contact Us</a></li>
        </ul>
      </div>

      <div className="col-6 col-md-2 mb-3">
        <h5>LEGAL</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Privacy Policy</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Licensing</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Terms & Conditions</a></li>
        </ul>
      </div>

      <div className="col-6 col-md-2 mb-3">
        <h5>DOWNLOAD</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">iOS</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Android</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Windows</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">MacOS</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Linux</a></li>
        </ul>
      </div>
    </div>

    <div className="d-flex flex-column flex-sm-row justify-content-end py-4 border-top">
      <p>© 2024 Company, Inc. All rights reserved. Creator:- Vishwajit Suryawanshi</p>
      <div className="button-footer">
      <button className="nav-button-footer">
        <a href="https://github.com/VishwajitSuryawanshi" className="nav-link">
        <FaGithub className="footer-button" />
        </a>
      </button>

      <button className="nav-button-footer">
        <a href="https://www.linkedin.com/in/vishwajit-suryawanshi-041586227" className="nav-link">
        <FaLinkedin className="footer-button"/>
        </a>
      </button>

      <button className="nav-button-footer">
        <a href="https://www.instagram.com/vishwajitsuryawanshi.official/" className="nav-link">
        <FaInstagramSquare className="footer-button"/>
        </a>
      </button>

      <button className="nav-button-footer">
        <a href="https://www.facebook.com/vishwajit.suryawanshi.90" className="nav-link">
        <FaFacebook className="footer-button"/>
        </a>
      </button>

      <button className="nav-button-footer">
        <a href="#" className="nav-link">
        <FaTwitter className="footer-button"/>
        </a>
      </button>
      </div>
    </div>
  </footer>
</div>
  );
};
export default Footer;