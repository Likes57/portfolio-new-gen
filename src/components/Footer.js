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
                    <a className="email" href="mailto:new.gens.devs@gmail.com" aria-label="Написать на new.gens.devs@gmail.com">
                        <span className="footer-red">n</span>ew.<span className="footer-blue">g</span>ens.devs@gmail.com
                    </a>
                    <div>
                        <a
                            className="footer-link"
                            href="https://t.me/Likes57"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Messenger
                        </a>
                    </div>
                        {/*<div className="footer-link">LinkedIn</div>*/}
                        {/*<div className="footer-link">Instagram</div>*/}
                    <div>
                        <a
                            className="footer-link"
                            href="https://t.me/Likes57"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
