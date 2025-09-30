import '../WelcomeSection/WelcomeSection.scss'
import WelcomeSectionList from '../WelcomeSectionList/WelcomeSectionList';
import WelcomeSectionTitle from '../WelcomeSectionTitle/WelcomeSectionTitle';

import calendarIcon from '../../../../assets/images/icons/calendarIcon.svg';
import heartIcon from '../../../../assets/images/icons/heartIcon.svg';
import toolsIcon from '../../../../assets/images/icons/toolsIcon.svg';
import gpsIcon from '../../../../assets/images/icons/gpsIcon.svg';
import garantIcon from '../../../../assets/images/icons/garantIcon.svg';
import welcomeBackground from '../../../../assets/images/pictures/welcomeBackground.png';

const WelcomeSection = () => {

    const welcomeItems = [
        {text: 'За 12 недель до 12кг', icon: calendarIcon},
        {text: 'Здоровый подход', icon: heartIcon},
        {text: 'Без ограничений', icon: toolsIcon},
        {text: 'Эффективность проверена', icon: gpsIcon},
        {text: 'Гарантия результата', icon: garantIcon}
    ]

    return(
        <section className='welcomeSection'>

            <div className='container'>
                <WelcomeSectionTitle textPart1={`Помогаем сбросить вес`} textPart2={'без отката назад!'}/>
                <WelcomeSectionList welcomeItems={welcomeItems}/>
            </div>

            <img src={welcomeBackground} alt="" loading='lazy' className='welcomeBackground'/>
        </section>
    )
}

export default WelcomeSection;