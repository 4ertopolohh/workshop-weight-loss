import './App.scss';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect, lazy, Suspense } from 'react';
import { AnimatePresence } from 'framer-motion';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Cookie from './components/Cookie/Cookie';
import Loader from './components/Loader/Loader';

import homeIcon from './assets/images/icons/homeIcon.svg';
import reviewsIcon from './assets/images/icons/reviewsIcon.svg';
import programIcon from './assets/images/icons/programIcon.svg';
import expertsIcon from './assets/images/icons/expertsIcon.svg';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const ReviewsPage = lazy(() => import('./pages/ReviewsPage/ReviewsPage'));
const ProgramPage = lazy(() => import('./pages/ProgramPage/ProgramPage'));
const ExpertsPage = lazy(() => import('./pages/ExpertsPage/ExpertsPage'));

const App = () => {
  const [showCookie, setShowCookie] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCookie(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const navListItems = [
    { text: "Главная", link: "/", img: homeIcon },
    { text: "Отзывы", link: "/#/reviews", img: reviewsIcon },
    { text: "Программа практикума", link: "/#/program", img: programIcon },
    { text: "Эксперты", link: "/#/experts", img: expertsIcon }
  ];

  const footerMenuItems = [
    { text: "Почему практикум работает ", link: "/", img: homeIcon },
    { text: "Отзывы и результаты", link: "/#/reviews", img: reviewsIcon },
    { text: "Программа практикума", link: "/#/program", img: programIcon },
    { text: "Эксперты практикума", link: "/#/experts", img: expertsIcon },
    { text: "Вопросы и ответы", link: "/#/experts", img: expertsIcon },
    { text: "Стоимость", link: "/#/experts", img: expertsIcon },
    { text: "Обратная связь", link: "/#/experts", img: expertsIcon },
    { text: "Бесплатные материалы", link: "/#/experts", img: expertsIcon },
  ];

  return (
    <Router>
      <div className="App">
        <Header navListItems={navListItems} />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/program" element={<ProgramPage />} />
            <Route path="/experts" element={<ExpertsPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </Suspense>
        <AnimatePresence>
          {showCookie && <Cookie onAccept={() => setShowCookie(false)} />}
        </AnimatePresence>
        <Footer footerMenuItems={footerMenuItems} />
      </div>
    </Router>
  );
}

export default App;