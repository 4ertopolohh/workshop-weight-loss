import NavigatingBar from '../../components/NavigatingBar/NavigatingBar';
import '../IInPage/IInPage.scss'
import { useMediaQuery } from 'react-responsive';
import TopBarMobile from '../../components/TopBarMobile/TopBarMobile';
import SaleSection from '../HomePage/components/SaleSection/SaleSection';
import FeedbackSection from '../../components/FeedbackSection/FeedbackSection';
import PageTitle from '../../components/PageTitle/PageTitle';
import AnchorLinkSection from '../../components/AnchorLinkSection/AnchorLinkSection';

const IInPage = () => {

    const isTablet1050 = useMediaQuery({ maxWidth: 1051 })

    const anchorItems = [
        { text: 'Как проходит практикум', page: '/', sectionId: 'howDoesSection' },
        { text: 'Вопросы и ответы', page: '/', sectionId: 'FAQSection' }
    ];

    return(
        <main className='i-in-page'>
            {isTablet1050 ? (
                <TopBarMobile text={'Я в деле'} page={'/'}/>
            ) : (
                <div></div>
            )}
            <NavigatingBar />
            <PageTitle text={'Ты на правильном пути!'}/>
            <SaleSection />
            <FeedbackSection />
            <AnchorLinkSection items={anchorItems}/> 
        </main>
    )
}

export default IInPage;