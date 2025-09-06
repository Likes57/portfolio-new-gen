import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logoImage from '../img/logo/logo.svg';

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    
    const scrollToSection = (sectionId) => {
        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };
    
    return (
        <header className="header">
            <div className="logo">
                <Link to="/">
                    <img src={logoImage} alt="NewGen" />
                </Link>
            </div>
            <nav className="nav-container" aria-label="primary">
                <div className="nav">
                    <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>// home</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('expertise'); }}>// expertise</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('work'); }}>// work</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>// contact</a>
                </div>
            </nav>
        </header>
    );
};

export default Header;
