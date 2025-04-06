import { Link } from "react-router-dom";
import "../styles/Default.css";

export default function Default() {
    return (
        <div className="notfound-container">
            <h1 className="error-code">404</h1>
            <p className="error-message">Oops! The page you're looking for doesn't exist.</p>
            <Link to="/" className="home-button">Go Back Home</Link>
        </div>
    );
}
