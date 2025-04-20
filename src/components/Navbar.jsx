import "../styles/Navbar.css";
import logo from "../assets/Portfolio_Logo.png";
import profile from "../assets/Portfolio_Profile.jpg";
import { useNavigate } from "react-router-dom";
import { FaCodeBranch } from 'react-icons/fa';
import { useState } from "react";

export default function Navbar() {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    const handleNavigate = (path) => {
        navigate(path);
        setIsMenuOpen(false);
    }

    return (
        <>
            <nav className="navbar-container">
                {/* onClick={() => navigate("/about")} */}
                <div className="navbar-start">
                    <img src={logo} alt="UB" />
                </div>
                <div className={`navbar-middle ${isMenuOpen ? "active" : ""}`}>
                    <button className="nav-btn" onClick={() => handleNavigate("/")}>Home</button>
                    <button className="nav-btn" onClick={() => handleNavigate("/about")}>About</button>
                    <button className="nav-btn" onClick={() => handleNavigate("/projects")}>Projects</button>
                    <button className="nav-btn" onClick={() => handleNavigate("/resume")}>Resume</button>
                    <a className="code-btn nav-btn" href="https://github.com/uttakarsh-barnwal/Portfolio" target="_blank" rel="noopener noreferrer">
                        <FaCodeBranch />
                    </a>
                </div>
                <div className="nav-last">
                    <div className="navbar-end">
                        {/* onClick={() => navigate("/about")} */}
                        <div className="navbar-profile">
                            <img src={profile} alt="UB" width="55" height="55" />
                        </div>
                    </div>
                    <div className="navaccess" onClick={toggleMenu}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </nav>
        </>
    )
}