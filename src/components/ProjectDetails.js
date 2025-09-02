import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import logoN from '../img/logo/N.svg';
import ImageModal from './ImageModal';

const ProjectDetails = ({ projects }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const projectId = parseInt(id);
    
    const project = projects ? projects[projectId] : null;
    
    // Стан для модального вікна
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedImageAlt, setSelectedImageAlt] = useState('');
    
    useEffect(() => {
        if (!project) {
            navigate('/');
        }
        window.scrollTo(0, 0);
    }, [project, navigate]);
    
    if (!project) {
        return null;
    }
    
    const goBack = () => {
        navigate('/');
        // Після перенаправлення на головну сторінку, прокручуємо до секції work
        setTimeout(() => {
            const element = document.getElementById('work');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };
    
    // Відкриття модального вікна при кліку на зображення
    const openModal = (img, alt) => {
        setSelectedImage(img);
        setSelectedImageAlt(alt);
        setModalOpen(true);
    };
    
    // Закриття модального вікна
    const closeModal = () => {
        setModalOpen(false);
    };
    
    return (
        <div className="page">
            <Header />
            <div className="header-bg"></div>
            <main className="container project-details">
                <div className="back-button">
                    <button onClick={goBack}>
                        <img src={logoN} alt="Back" />
                    </button>
                </div>
                
                <div className="project-header">
                    <div className="project-tag">{project.tag}</div>
                    <h1>{project.title}</h1>
                    <h3 className="project-subtitle">{project.subtitle}</h3>
                </div>
                

                
                <div className="project-info-grid">
                    <div className="project-info-left">
                        <div className="project-main-image">
                            <img src={project.img} alt={project.title} />
                        </div>
                    </div>
                    <div className="project-info-right">
                        <div className="project-description">
                            <h2>Project description</h2>
                            <p>{project.description}</p>
                        </div>

                        <div className="project-meta">
                            <div className="meta-item">
                                <h4>Client:</h4>
                                <p>{project.client}</p>
                            </div>

                            <div className="meta-item">
                                <h4>Technologies:</h4>
                                <div className="tech-tags">
                                    {project.technologies.map((tech, index) => (
                                        <span key={index} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                
                <div className="project-gallery">
                    <h2>Project gallery</h2>
                    <div className="gallery-grid">
                        {project.galleryImages.map((img, index) => (
                            <div key={index} className="gallery-item" onClick={() => openModal(img, `${project.title} - скріншот ${index + 1}`)}>
                                <img 
                                    src={img} 
                                    alt={`${project.title} - скріншот ${index + 1}`} 
                                />
                            </div>
                        ))}
                    </div>
                </div>
                
                {/* Модальне вікно для перегляду зображень */}
                <ImageModal 
                    image={selectedImage}
                    alt={selectedImageAlt}
                    isOpen={modalOpen}
                    onClose={closeModal}
                />
            </main>
            
            <Footer />
        </div>
    );
};

export default ProjectDetails;
