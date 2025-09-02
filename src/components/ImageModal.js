import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const ImageModal = ({ image, alt, isOpen, onClose }) => {
  const modalRef = useRef(null);
  const contentRef = useRef(null);
  const imageContainerRef = useRef(null);
  const overlayRef = useRef(null);
  const closeBtnRef = useRef(null);
  
  // Ефект для відкриття модального вікна
  useEffect(() => {
    if (isOpen) {
      // Встановлюємо початковий стан і блокуємо прокрутку
      document.body.style.overflow = 'hidden';
      gsap.set(modalRef.current, { visibility: 'visible', display: 'flex' });
      
      // Анімація відкриття
      const tl = gsap.timeline();
      
      tl.fromTo(overlayRef.current, 
        { opacity: 0 }, 
        { opacity: 1, duration: 0.3 }
      );
      
      tl.fromTo(contentRef.current, 
        { y: 50, opacity: 0, scale: 0.9 }, 
        { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" },
        "-=0.1"
      );
      
      tl.fromTo(closeBtnRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.2 },
        "-=0.2"
      );
    }
  }, [isOpen]);

  // Функція закриття модального вікна
  const handleClose = () => {
    // Анімація закриття 
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.set(modalRef.current, { visibility: 'hidden', display: 'none' });
        document.body.style.overflow = '';
        onClose();
      }
    });
    
    tl.to(closeBtnRef.current, { 
      opacity: 0, duration: 0.2 
    });
    
    tl.to(contentRef.current, {
      y: 50, opacity: 0, scale: 0.9, duration: 0.3
    }, "-=0.1");
    
    tl.to(overlayRef.current, {
      opacity: 0, duration: 0.3
    }, "-=0.2");
  };

  // Закриття по Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div 
      ref={modalRef}
      className="image-modal"
      style={{ visibility: 'hidden', display: 'none' }}
    >
      <div 
        ref={overlayRef}
        className="modal-overlay" 
        onClick={handleClose}
      ></div>
      
      <div ref={contentRef} className="modal-content">
        <button ref={closeBtnRef} className="modal-close" onClick={handleClose}>×</button>
        <div ref={imageContainerRef} className="modal-image-container">
          <img src={image} alt={alt} />
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
