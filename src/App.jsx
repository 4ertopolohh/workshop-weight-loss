import './App.scss';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect, lazy, Suspense } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Cookie from './components/Cookie/Cookie';
import Loader from './components/Loader/Loader';
import { NavigationProvider } from './contexts/NavigationContext';

import homeIcon from './assets/images/icons/homeIcon.svg';
import reviewsIcon from './assets/images/icons/reviewsIcon.svg';
import programIcon from './assets/images/icons/programIcon.svg';
import expertsIcon from './assets/images/icons/expertsIcon.svg';
import MobileMenu from './components/MobileMenu/MobileMenu';

import mobileHomePage from './assets/images/icons/mobileMenuHomePage.svg'
import mobileReviewsPage from './assets/images/icons/mobileMenuReviewsPage.svg'
import mobileIIN from './assets/images/pictures/mobileMenuIIN.svg'
import mobileProgramPage from './assets/images/icons/mobileMenuProgramPage.svg'
import mobileExpertsPage from './assets/images/icons/mobileMenuExpertsPage.svg'

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const ReviewsPage = lazy(() => import('./pages/ReviewsPage/ReviewsPage'));
const ProgramPage = lazy(() => import('./pages/ProgramPage/ProgramPage'));
const ExpertsPage = lazy(() => import('./pages/ExpertsPage/ExpertsPage'));
const IInPage = lazy(() => import('./pages/IInPage/IInPage'));

const App = () => {
  const [showCookie, setShowCookie] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 1051 })

  useEffect(() => {
    const handleHashChange = () => {
        const hash = window.location.hash;
        console.log('Hash changed:', hash);
        
        const anchorMatch = hash.match(/#([^#/]+)$/);
        if (anchorMatch) {
            const anchorId = anchorMatch[1];
            console.log('Anchor ID:', anchorId);
            
            const element = document.getElementById(anchorId);
            if (element) {
                console.log('Found element, scrolling...');
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 300); 
            } else {
                console.log('Element not found with id:', anchorId);
            }
        }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);

    return () => {
        window.removeEventListener('hashchange', handleHashChange);
    };
}, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCookie(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const navListItems = [
    { text: "Главная", link: "/", img: homeIcon },
    { text: "Отзывы", link: "/reviews", img: reviewsIcon },
    { text: "Программа практикума", link: "/program", img: programIcon },
    { text: "Эксперты", link: "/experts", img: expertsIcon }
];

const footerMenuItems = [
    { text: "Почему практикум работает ", link: "/", img: homeIcon },
    { text: "Отзывы и результаты", link: "/reviews", img: reviewsIcon },
    { text: "Программа практикума", link: "/program", img: programIcon },
    { text: "Эксперты практикума", link: "/experts", img: expertsIcon },
    { text: "Вопросы и ответы", link: "/experts", img: expertsIcon },
    { text: "Стоимость", link: "/experts", img: expertsIcon },
    { text: "Обратная связь", link: "/experts", img: expertsIcon },
    { text: "Бесплатные материалы", link: "/experts", img: expertsIcon },
];

  const mobileMenuItems = [
    { icon: mobileHomePage, link: "/", className: "default" },
    { icon: mobileReviewsPage, link: "/reviews", className: "default" },
    { icon: mobileIIN, link: "/i-in", className: "home" },
    { icon: mobileProgramPage, link: "/program", className: "default" },
    { icon: mobileExpertsPage, link: "/experts", className: "default" }
  ];

  return (
    <Router>
      <NavigationProvider>
        <div className="App">
          <Header navListItems={navListItems} />
          {isMobile ? (
            <MobileMenu menuItems={mobileMenuItems}/>
          ) : (
            <><div></div></>
          )}
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/reviews" element={<ReviewsPage />} />
              <Route path="/program" element={<ProgramPage />} />
              <Route path="/experts" element={<ExpertsPage />} />
              <Route path="*" element={<HomePage />} />
              <Route path='/i-in' element={<IInPage />}/>
            </Routes>
          </Suspense>
          <AnimatePresence>
            {showCookie && <Cookie onAccept={() => setShowCookie(false)} />}
          </AnimatePresence>
          <Footer footerMenuItems={footerMenuItems} />
        </div>
      </NavigationProvider>
    </Router>
  );
}

export default App;