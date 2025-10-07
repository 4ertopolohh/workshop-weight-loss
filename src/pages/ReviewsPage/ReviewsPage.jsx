import AnchorLinkSection from '../../components/AnchorLinkSection/AnchorLinkSection';
import FeedbackSection from '../../components/FeedbackSection/FeedbackSection';
import NavigatingBar from '../../components/NavigatingBar/NavigatingBar';
import PageTitle from '../../components/PageTitle/PageTitle';
import SaleSectionAnalog from '../../components/SaleSectionAnalog/SaleSectionAnalog';
import TopBarMobile from '../../components/TopBarMobile/TopBarMobile';
import '../ReviewsPage/ReviewsPage.scss'
import ReviewsSection from './components/ReviewsSection/ReviewsSection';

import { useMediaQuery } from 'react-responsive';

const ReviewsPage = () => {

  const isTablet1050 = useMediaQuery({ maxWidth: 1051 })

  const navItems = [
    { text: 'Главная страница' },
    { text: 'Отзывы' },
  ]

  return (
    <main className="reviews-page">
      {isTablet1050 ? (
        <TopBarMobile text={'Отзывы'} page={'/'}/>
      ) : (
        <div></div>
      )}
      <NavigatingBar items={navItems}/>
      {/* <ReviewsPageTitleSection text={'Отзывы и результаты'}/> */}
      <PageTitle text={'Отзывы и результаты'}/>
      <ReviewsSection />
      <SaleSectionAnalog />
      <FeedbackSection />
      <AnchorLinkSection />
    </main>
  );
}

export default ReviewsPage;