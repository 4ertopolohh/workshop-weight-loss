import NavigatingBar from '../../components/NavigatingBar/NavigatingBar';
import '../PayPage/PayPage.scss'
import { useMediaQuery } from 'react-responsive';
import TopBarMobile from '../../components/TopBarMobile/TopBarMobile';
import PayForm from './components/PayForm/PayForm';
import PaySection from './components/PaySection/PaySection';

const PayPage = () => {

    const isTablet1050 = useMediaQuery({ maxWidth: 1051 })

    return(
        <main className='pay-page'>
            {isTablet1050 ? (
                <TopBarMobile text={'Оплата'} page={'/'}/>
            ) : (
                <div></div>
            )}
            <NavigatingBar />
            <PaySection />
        </main>
    )
}

export default PayPage;