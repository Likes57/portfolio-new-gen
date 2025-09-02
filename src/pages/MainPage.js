import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import pcImage from '../img/card/vector-pc.svg';
import reactImage from '../img/card/vector-react.svg';
import wpImage from '../img/card/vector-wp.svg';
import pwaImage from '../img/decor/decor-pwa.svg';
import StarfieldCanvas from '../components/StarfieldCanvas';
import Header from '../components/Header';
import Footer from '../components/Footer';
import portfolioData from '../data/portfolioData';

export default function NewGenMainPage() {
    useEffect(() => {
        const style = document.createElement('style');
        style.setAttribute('data-made-by', 'newgen-react');
        document.head.appendChild(style);
        return () => document.head.removeChild(style);
    }, []);

    return (
        <div className="page">
            <Header />
            <div className="header-bg"></div>
            <section className="hero" id="home">
                <StarfieldCanvas />
                <div className="hero-shapes"></div>
                <div className="hero-center">
                    <div className="brand"><span className="hero-red">N</span>EW <span className="hero-blue">G</span>EN <br /><span className="hero-subtitle">Solutions</span></div>
                    <div className="subtitle">Modern web & product design</div>
                </div>
            </section>

            <main className="container">
                <section id="expertise" className="section">
                    <h2 className="section-title">Our Expertise</h2>
                    <div className="expertise-grid">
                        <div className="expertise-card">
                            <div className="card-top">
                                <div className="card-icon"><img src={pcImage} alt="" /></div>
                                <h2><span className="decor-red">Web APP</span> Development</h2>
                            </div>
                            <div className="card-bottom">
                                <div className="cell-left">
                                    <div className="cell-tag">{"<h3>"}</div>
                                    <div className="cell-line"></div>
                                    <div className="cell-tag">{"</h3>"}</div>
                                </div>
                                <div className="cell-right">
                                    <div className="cell-tag"></div>
                                    <div className="cell-text"><h3>We design and implement front-end and back-end solutions — from prototype to production: API, authorization, testing, CI/CD, and monitoring.</h3></div>
                                    <div className="cell-tag"></div>
                                </div>
                            </div>
                        </div>

                        <div className="expertise-card">
                            <div className="card-top">
                                <div className="card-icon"><img src={reactImage} alt="" /></div>
                                <h2><span className="decor-blue">Fullstack</span> Development</h2>
                            </div>
                            <div className="card-bottom">
                                <div className="cell-left">
                                    <div className="cell-tag">{"<h3>"}</div>
                                    <div className="cell-line"></div>
                                    <div className="cell-tag">{"</h3>"}</div>
                                </div>
                                <div className="cell-right">
                                    <div className="cell-tag"></div>
                                    <div className="cell-text"><h3>We work with REST/GraphQL, microservices, and infrastructure: security, scaling, query optimization, and production support.</h3></div>
                                    <div className="cell-tag"></div>
                                </div>
                            </div>
                        </div>

                        <div className="expertise-card">
                            <div className="card-top">
                                <div className="card-icon"><img src={wpImage} alt="" /></div>
                                <h2><span className="decor-green">WordPress</span> Development</h2>
                            </div>
                            <div className="card-bottom">
                                <div className="cell-left">
                                    <div className="cell-tag">{"<h3>"}</div>
                                    <div className="cell-line"></div>
                                    <div className="cell-tag">{"</h3>"}</div>
                                </div>
                                <div className="cell-right">
                                    <div className="cell-tag"></div>
                                    <div className="cell-text"><h3>Full cycle of WordPress development — from landing pages to corporate portals: SEO optimization, user-friendly admin panel for content managers.</h3></div>
                                    <div className="cell-tag"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section" id="work">
                    <div className="works">
                        <div className="works-container">
                            <div className="works-left">
                                <h3>Our<br />Works</h3>
                                <p>Our team develops websites and web applications for various fields of activity. We will
                                    take into account your wishes and create the optimal solution for your tasks.</p>
                            </div>

                            <div className="works-right">
                                <img src={pwaImage} alt="PWA network" />
                            </div>
                        </div>
                        <div className="portfolio-grid" style={{ marginTop: 20 }}>
                            {portfolioData.map((p, i) => (
                                <article className="project" key={i}>
                                    <Link to={`/project/${i}`}>
                                        <img src={p.img} alt={p.title} />
                                        <div className="meta">
                                            <h5>{p.title}</h5>
                                            <p>{p.tag}</p>
                                        </div>
                                    </Link>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

// Експортуємо дані проектів для зручності
export { portfolioData };
