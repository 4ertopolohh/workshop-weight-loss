import AnchorLinkSection from '../../components/AnchorLinkSection/AnchorLinkSection';
import AnchorLinkTab from '../../components/AnchorLinkTab/AnchorLinkTab';
import FeedbackSection from '../../components/FeedbackSection/FeedbackSection';
import NavigatingBar from '../../components/NavigatingBar/NavigatingBar';
import PageTitle from '../../components/PageTitle/PageTitle';
import SaleSectionAnalog from '../../components/SaleSectionAnalog/SaleSectionAnalog';
import TopBarMobile from '../../components/TopBarMobile/TopBarMobile';
import '../ReviewsPage/ReviewsPage.scss'
import ReviewsSection from './components/ReviewsSection/ReviewsSection';

import { useMediaQuery } from 'react-responsive';

const ReviewsPage = () => {

  const anchorItems = [
    { text: 'Как проходит практикум', page: '/', sectionId: 'howDoesSection' },
    { text: 'Вопросы и ответы', page: '/', sectionId: 'FAQSection' }
  ];

  const isTablet1050 = useMediaQuery({ maxWidth: 1051 })

  return (
    <main className="reviews-page">
      {isTablet1050 ? (
        <TopBarMobile text={'Отзывы'} page={'/'}/>
      ) : (
        <div></div>
      )}
      <NavigatingBar />
      <PageTitle text={'Отзывы и результаты'}/>
      <ReviewsSection />
      <SaleSectionAnalog />
      <FeedbackSection />
      <AnchorLinkSection items={anchorItems}/>
    </main>
  );
}

export default ReviewsPage;