import { Heart } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer section-padding">
            <div className="container footer-container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <span className="logo gradient-text">G.C.</span>
                        <p className="footer-tagline">Crafting digital experiences with elegance and purpose.</p>
                    </div>

                    <div className="footer-links">
                        <div className="footer-link-group">
                            <h4>Navigation</h4>
                            <ul>
                                <li><a href="#home">Home</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#skills">Skills</a></li>
                                <li><a href="#portfolio">Portfolio</a></li>
                            </ul>
                        </div>

                        <div className="footer-link-group">
                            <h4>Legal</h4>
                            <ul>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms of Service</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="copyright">
                        &copy; {currentYear} Gayani Chinthika. All rights reserved.
                    </p>
                    <p className="made-with">
                        Designed & Built with <Heart size={14} className="heart-icon" />
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
