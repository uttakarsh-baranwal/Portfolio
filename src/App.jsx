import { useEffect } from 'react';
import "./App.css";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppRouter from './AppRouter';
import { BrowserRouter } from 'react-router-dom';

export default function App() {

  useEffect(() => {
    const navbar = document.querySelector(".navbar-container");

    const handleScroll = () => {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <BrowserRouter>
        <div className="app-container">
          <Navbar />
          <div className='main-content'>
            <AppRouter />
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );

}