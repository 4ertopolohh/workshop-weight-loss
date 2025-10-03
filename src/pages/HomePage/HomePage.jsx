import FeedbackSection from '../../components/FeedbackSection/FeedbackSection';
import '../HomePage/HomePage.scss'
import '../HomePage/HomePage375.scss'
import AllReviewsSection from './components/AllReviewsSection/AllReviewsSection';
import FAQSection from './components/FAQSection/FAQSection';
import FreeContentSection from './components/FreeContentSection/FreeContentSection';
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
      <FAQSection />
      <FreeContentSection />
    </main>
  );
}

export default HomePage;