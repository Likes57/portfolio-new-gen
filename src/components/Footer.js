import React from 'react';

const Footer = () => {
    return (
        <footer id="contact" className="footer">
            <div className="footer-inner">
                <div className="footer-left">
                    <h4 className="footer-title">Available for select <br/> freelance <br/> opportunities</h4>
                    <h4 className="footer-mobile-title" >Available for select freelance opportunities</h4>
                    <p>Have an exciting project you need help with? Send me an email or contact me via instant message!</p>
                </div>
                <div className="footer-right">
                    <div className="email"><span className="footer-red">n</span>ew<span className="footer-blue">g</span>en@gmail.dev</div>
                    <div>
                        <div className="footer-link">Messenger</div>
                        <div className="footer-link">LinkedIn</div>
                        <div className="footer-link">Instagram</div>
                        <div className="footer-link">GitHub</div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
