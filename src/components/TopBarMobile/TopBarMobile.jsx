import TopBarButton from '../TopBarButton/TopBarButton';
import '../TopBarMobile/TopBarMobile.scss'

const TopBarMobile = ({ text, page }) => {
    return(
        <section className='topBarMobile'>
            <div className='container'>
                <TopBarButton link={page}/>
                <h6>{text}</h6>
            </div>
        </section>
    )
}

export default TopBarMobile;