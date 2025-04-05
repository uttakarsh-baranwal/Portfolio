import "../styles/Footer.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"; // Correct import
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-links">
                    <a href="https://www.instagram.com/utkar_shhhhhhhh/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
                    <a href="https://www.linkedin.com/in/uttakarsh-baranwal/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                    <a href="https://github.com/uttakarsh-baranwal" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                    <a href="mailto:utkarshbarnwal85366@gmail.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelope} /></a>
                </div>
                <p>Designed and Developed by Uttakarsh.</p>
                <p>&copy; {new Date().getFullYear()}</p>
            </div>
        </footer>
    );
}