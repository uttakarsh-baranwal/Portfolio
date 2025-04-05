import "../styles/Navbar.css";
import logo from "../assets/Portfolio_Logo.png";
import profile from "../assets/Portfolio_Profile.jpg";
import { useNavigate } from "react-router-dom";
import { FaCodeBranch } from 'react-icons/fa';

export default function Navbar() {
    const navigate = useNavigate();

    return (
        <>
            <nav className="navbar-container">
                {/* onClick={() => navigate("/about")} */}
                <div className="navbar-start">
                    <img src={logo} alt="UB" width="55" height="55" />
                </div>
                <div className="navbar-middle">
                    <button className="nav-btn" onClick={() => navigate("/")}>Home</button>
                    <button className="nav-btn" onClick={() => navigate("/about")}>About</button>
                    <button className="nav-btn" onClick={() => navigate("/projects")}>Projects</button>
                    <button className="nav-btn" onClick={() => navigate("/resume")}>Resume</button>
                    <a className="code-btn nav-btn" href="https://github.com/uttakarsh-baranwal/Portfolio" target="_blank" rel="noopener noreferrer">
                        <FaCodeBranch />
                    </a>
                </div>
                <div className="navbar-end">
                    {/* onClick={() => navigate("/about")} */}
                    <div className="navbar-profile">
                        <img src={profile} alt="UB" width="55" height="55" />
                    </div>
                </div>
            </nav>
        </>
    )
}