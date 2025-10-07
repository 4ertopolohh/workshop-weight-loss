import '../ProgramPage/ProgramPage.scss'
import { useMediaQuery } from 'react-responsive';
import TopBarMobile from '../../components/TopBarMobile/TopBarMobile';
import NavigatingBar from '../../components/NavigatingBar/NavigatingBar';
import PageTitle from '../../components/PageTitle/PageTitle';
import WeeksSection from './components/WeeksSection/WeeksSection';
import FeedbackSection from '../../components/FeedbackSection/FeedbackSection';
import SaleSectionAnalog from '../../components/SaleSectionAnalog/SaleSectionAnalog';

const ProgramPage = () => {
  const isTablet1050 = useMediaQuery({ maxWidth: 1051 })

  return (
    <main className="program-page">
      {isTablet1050 ? (
        <TopBarMobile text={'Программа'} page={'/'}/>
      ) : (
        <div></div>
      )}
      <NavigatingBar />
      <PageTitle text={<>12 модулей<br/>12 недель</>}/>
      <WeeksSection />
      <FeedbackSection />
      <SaleSectionAnalog />
    </main>
  );
}

export default ProgramPage;