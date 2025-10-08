import '../ProgramPage/ProgramPage.scss'
import { useMediaQuery } from 'react-responsive';
import TopBarMobile from '../../components/TopBarMobile/TopBarMobile';
import NavigatingBar from '../../components/NavigatingBar/NavigatingBar';
import PageTitle from '../../components/PageTitle/PageTitle';
import WeeksSection from './components/WeeksSection/WeeksSection';
import FeedbackSection from '../../components/FeedbackSection/FeedbackSection';
import SaleSectionAnalog from '../../components/SaleSectionAnalog/SaleSectionAnalog';
import WeekNavigating from './components/WeekNavigating/WeekNavigating';
import starIconBlue from '../../assets/images/icons/starIconBlue.svg'
import { useRef } from 'react';

const ProgramPage = () => {
  const isTablet1050 = useMediaQuery({ maxWidth: 1051 })
  const weeksSectionRef = useRef(null);

  const weekItems = [
    { text: '1', weekNumber: 1 },
    { text: '2', weekNumber: 2 },
    { text: '3', weekNumber: 3 },
    { text: '4', weekNumber: 4 },
    { text: '5', weekNumber: 5 },
    { text: '6', weekNumber: 6 },
    { text: '7', weekNumber: 7 },
    { text: '8', weekNumber: 8 },
    { text: '9', weekNumber: 9 },
    { text: '10', weekNumber: 10 },
    { text: '11', weekNumber: 11 },
    { text: '12', weekNumber: 12 },
    { text: 'star', weekNumber: 13, icon: starIconBlue }
];

  return (
    <main className="program-page">
      {isTablet1050 ? (
        <TopBarMobile text={'Программа практикума'} page={'/'}/>
      ) : (
        <div></div>
      )}
      <NavigatingBar />
      <PageTitle text={<>12 недель<br/>12 модулей</>}/>
      <WeekNavigating items={weekItems} weeksSectionRef={weeksSectionRef} />
      <WeeksSection ref={weeksSectionRef} />
      <FeedbackSection />
      <SaleSectionAnalog />
    </main>
  );
}

export default ProgramPage;





