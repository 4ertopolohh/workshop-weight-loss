import '../ProgramPage/ProgramPage.scss'
import { useMediaQuery } from 'react-responsive';
import TopBarMobile from '../../components/TopBarMobile/TopBarMobile';
import NavigatingBar from '../../components/NavigatingBar/NavigatingBar';
import PageTitle from '../../components/PageTitle/PageTitle';
import WeeksSection from './components/WeeksSection/WeeksSection';
import FeedbackSection from '../../components/FeedbackSection/FeedbackSection';
import SaleSectionAnalog from '../../components/SaleSectionAnalog/SaleSectionAnalog';

const ProgramPage = () => {

  const navItems = [
    { text: 'Главная' },
    { text: 'Программа практикума' }
  ]

  const isTablet1050 = useMediaQuery({ maxWidth: 1051 })

  return (
    <main className="program-page">
      {isTablet1050 ? (
        <TopBarMobile text={'Отзывы'} page={'/'}/>
      ) : (
        <div></div>
      )}
      <NavigatingBar items={navItems}/>
      <PageTitle text={<>12 модулей<br/>12 недель</>}/>
      <WeeksSection />
      <FeedbackSection />
      <SaleSectionAnalog />
    </main>
  );
}

export default ProgramPage;