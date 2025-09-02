import frame40 from '../img/portfolio/FoodLine/main-photo/Frame 40.svg';

import frame41 from '../img/portfolio/BusTicket/main-photo/Frame 41.svg';
import frame411 from '../img/portfolio/BusTicket/project-gallery/MainPage.png';
import frame4111 from '../img/portfolio/BusTicket/project-gallery/AutoParkPage.png';
import frame41111 from '../img/portfolio/BusTicket/project-gallery/BusRoutePage.png';

import frame42 from '../img/portfolio/Chronos/main-photo/Frame 42.svg';

import frame43 from '../img/portfolio/LSpick/main-photo/Frame 43.svg';

import frame44 from '../img/portfolio/CarsRent/main-photo/Frame 44.svg';

import frame45 from '../img/portfolio/MetalWest/main-photo/Frame 45.svg';

const portfolioData = [
    { 
        img: frame40, 
        title: 'E-commerce website', 
        subtitle: 'Інтернет-магазин з повним функціоналом',
        tag: 'Web Development', 
        description: 'Повноцінний інтернет-магазин з каталогом товарів, системою фільтрації, корзиною та оформленням замовлень. Проект включає адаптивний дизайн для всіх пристроїв та оптимізований для високої швидкості завантаження.',
        client: 'RetailTech Inc.',
        technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe API'],
        galleryImages: [frame40, frame41, frame42]
    },
    { 
        img: frame41, 
        title: 'Ticket Sales',
        subtitle: '(Solutions for Selling Services)',
        tag: 'Web Development', 
        description: 'The site was developed to replace the old version of the site. An increase in the flow of new customers was achieved. Ticket sales and data storage in Google Sheets were implemented for display to dispatchers.',
        client: 'Fashion Brand',
        technologies: ['React', 'Redux', 'WordPress', 'Custom Themes'],
        galleryImages: [frame411, frame4111, frame41111]
    },
    { 
        img: frame42, 
        title: 'Chronos for University', 
        subtitle: 'Система управління розкладом',
        tag: 'Web Development', 
        description: 'Веб-додаток для планування та керування розкладом занять в університеті. Система має функціонал для студентів, викладачів та адміністраторів з різними рівнями доступу.',
        client: 'National University',
        technologies: ['React', 'Redux', 'MongoDB', 'Express', 'Docker'],
        galleryImages: [frame42, frame44, frame45]
    },
    { 
        img: frame43, 
        title: 'Professional Website', 
        subtitle: 'Корпоративний веб-сайт',
        tag: 'Web Development', 
        description: 'Професійний веб-сайт для компанії з динамічним контентом, інтерактивними елементами та системою зворотного звʼязку. Сайт оптимізований для пошукових систем.',
        client: 'Corporate Solutions LLC',
        technologies: ['WordPress', 'PHP', 'JavaScript', 'MySQL'],
        galleryImages: [frame43, frame40, frame44]
    },
    { 
        img: frame44, 
        title: 'New Website Launch', 
        subtitle: 'Запуск нового проекту',
        tag: 'Web Development', 
        description: 'Розробка та запуск нового веб-сайту з нуля, включаючи дизайн, розробку, тестування та SEO-оптимізацію. Проект включає інтеграцію з соціальними мережами та аналітичними сервісами.',
        client: 'StartUp Vision',
        technologies: ['React', 'Next.js', 'Tailwind CSS', 'Vercel'],
        galleryImages: [frame44, frame42, frame45]
    },
    { 
        img: frame45, 
        title: 'Corporate Websites', 
        subtitle: 'Портфоліо корпоративних сайтів',
        tag: 'Web Development', 
        description: 'Розробка серії корпоративних веб-сайтів для різних компаній з єдиним стилем, але унікальними елементами для кожного клієнта. Проекти включають системи управління контентом та інтеграцію з CRM.',
        client: 'Multiple Corporate Clients',
        technologies: ['WordPress', 'Custom Themes', 'PHP', 'jQuery', 'REST API'],
        galleryImages: [frame45, frame43, frame41]
    },
];

export default portfolioData;
