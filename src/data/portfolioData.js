import FoodLineMockup from '../img/portfolio/FoodLine/main-photo/FoodLineMockup.svg';
import FoodLineMainPage from '../img/portfolio/FoodLine/project-gallery/FoodLineMainPage.png';
import FoodLineProductPage from '../img/portfolio/FoodLine/project-gallery/FoodLineProductPage.png';
import FoodLineProductDetailPage from '../img/portfolio/FoodLine/project-gallery/FoodLineProductDetailPage.png';

import BusMockup from '../img/portfolio/BusTicket/main-photo/BusMockup.svg';
import MainPageBus from '../img/portfolio/BusTicket/project-gallery/MainPage.png';
import AutoParkPageBus from '../img/portfolio/BusTicket/project-gallery/AutoParkPage.png';
import BusRoutePage from '../img/portfolio/BusTicket/project-gallery/BusRoutePage.png';

import ChronosMockup from '../img/portfolio/Chronos/main-photo/ChronosMockup.svg';
import ChronosBasicInformation from '../img/portfolio/Chronos/project-gallery/ChronosBasicInformation.png';
import ChronosTask from '../img/portfolio/Chronos/project-gallery/ChronosTask.png';
import ChronosShedule from '../img/portfolio/Chronos/project-gallery/ChronosShedule.png';

import LSpickMockup from '../img/portfolio/LSpick/main-photo/LSpickMockup.svg';
import LSMainPage from '../img/portfolio/LSpick/project-gallery/LSMainPage.png';
import LSPhone from '../img/portfolio/LSpick/project-gallery/LSPhone.png';
import LSProductDetailPage from '../img/portfolio/LSpick/project-gallery/LSProductDetailPage.png';

import CarsMockup from '../img/portfolio/CarsRent/main-photo/CarsMockup.png';
import CarAccountPage from '../img/portfolio/CarsRent/project-gallery/CarAccountPage.png';
import CarClioPage from '../img/portfolio/CarsRent/project-gallery/CarClioPage.png';
import CarMainPage from '../img/portfolio/CarsRent/project-gallery/CarMainPage.png';

import MetalMockup from '../img/portfolio/MetalWest/main-photo/MetalMockup.svg';
import MetalInfoPage from '../img/portfolio/MetalWest/project-gallery/MetalInfoPage.png';
import MetalSubCategoryPage from '../img/portfolio/MetalWest/project-gallery/MetalSubCategoryPage.png';
import MetalProductPage from '../img/portfolio/MetalWest/project-gallery/MetalProductPage.png';

const portfolioData = [
    { 
        img: FoodLineMockup,
        title: 'Food price monitoring system',
        subtitle: '(Food price comparison service)',
        tag: 'Web Development', 
        description: 'The project aims to create a web service for monitoring and comparing food prices from different stores. The system automatically collects data via ParseHub, processes it using NLP models, and records it in a database. The result is a web service that allows users to quickly compare prices and find the best deals.',
        client: 'RetailTech Inc.',
        technologies: ['ParseHub', 'React', 'Node.js', 'MongoDB', 'Express', 'Redux', 'Python'],
        galleryImages: [FoodLineProductPage, FoodLineMainPage,  FoodLineProductDetailPage]
    },
    { 
        img: BusMockup,
        title: 'Ticket Sales',
        subtitle: '(Solutions for Selling Services)',
        tag: 'Web Development', 
        description: 'The site was developed to replace the old version of the site. An increase in the flow of new customers was achieved. Ticket sales and data storage in Google Sheets were implemented for display to dispatchers.',
        client: 'BusAuto star',
        technologies: ['React', 'Redux', 'WordPress', 'Custom Themes', 'Docker', 'MySQL'],
        galleryImages: [MainPageBus, BusRoutePage, AutoParkPageBus]
    },
    { 
        img: ChronosMockup,
        title: 'Chronos for University', 
        subtitle: '(Schedule management system)',
        tag: 'Web Development', 
        description: 'A web application for planning and managing university class schedules. The system has functionality for students, teachers, and administrators with different levels of access.',
        client: 'National Technical University «Kharkiv Polytechnic Institute»',
        technologies: ['React', 'Redux', 'Express', 'MongoDB',  'Docker'],
        galleryImages: [ChronosShedule, ChronosTask, ChronosBasicInformation ]
    },
    { 
        img: LSpickMockup,
        title: 'Smart choice of gadgets',
        subtitle: '(Smart gadget choices)',
        tag: 'Web Development', 
        description: 'A service for collecting reviews from various online stores using ParseHub and displaying content in a user-friendly format. Additional functionality has been developed, such as visualization of the popularity of models and brands.',
        client: 'Corporate Solutions LLC',
        technologies: ['React', 'Redux', 'Express', 'MongoDB',  'Docker'],
        galleryImages: [LSProductDetailPage, LSMainPage, LSPhone]
    },
    { 
        img: CarsMockup,
        title: 'New Website Launch', 
        subtitle: 'Запуск нового проекту',
        tag: 'Web Development', 
        description: 'Development and launch of a new website from scratch, including design, development, testing, and SEO optimization. The project includes integration with social networks and analytics services.',
        client: 'StartUp Vision',
        technologies: ['React', 'Next.js', 'Tailwind CSS', 'Vercel'],
        galleryImages: [CarMainPage,CarAccountPage, CarClioPage ]
    },
    { 
        img: MetalMockup,
        title: 'Corporate Websites', 
        subtitle: 'Портфоліо корпоративних сайтів',
        tag: 'Web Development', 
        description: 'A professional website for a company with dynamic content, interactive elements, and a feedback system. The site is optimized for search engines.',
        client: 'Multiple Corporate Clients',
        technologies: ['WordPress', 'Custom Themes', 'PHP', 'jQuery', 'REST API'],
        galleryImages: [MetalSubCategoryPage, MetalInfoPage, MetalProductPage]
    },
];

export default portfolioData;
