import FeedbackSection from '../../components/FeedbackSection/FeedbackSection';
import '../HomePage/HomePage.scss'
import AboutMePopUp from './components/AboutMePopUp/AboutMePopUp';
import AllReviewsSection from './components/AllReviewsSection/AllReviewsSection';
import HotOfferSection from './components/HotOfferSection/HotOfferSection';
import HowDoesSection from './components/HowDoesSection/HowDoesSection';
import MarafonWorksSection from './components/MarafonWorksSection/MarafonWorksSection';
import ResultsSection from './components/ResultsSection/ResultsSection';
import SaleSection from './components/SaleSection/SaleSection';
import WelcomeSection from './components/WelcomeSection/WelcomeSection'
import WhoWillHelpSection from './components/WhoWillHelpSection/WhoWillHelpSection';

const HomePage = () => {

  return (
    <main className="home-page">
      <WelcomeSection />
      <HotOfferSection />
      <ResultsSection />
      <AllReviewsSection />
      <MarafonWorksSection />
      <HowDoesSection />
      <WhoWillHelpSection />
      <SaleSection />
      <FeedbackSection />
      <div className='container' id='inDev'>
        <h1>В разработке...</h1>
      </div>
    </main>
  );
}

export default HomePage;