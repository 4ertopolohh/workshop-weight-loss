import '../WelcomeSection/WelcomeSection.scss'
import '../WelcomeSection/WelcomeSection1394.scss'
import '../WelcomeSection/WelcomeSection1300.scss'
import '../WelcomeSection/WelcomeSection1212.scss'
import '../WelcomeSection/WelcomeSection1135.scss'
import '../WelcomeSection/WelcomeSection1050.scss'
import '../WelcomeSection/WelcomeSection950.scss'
import '../WelcomeSection/WelcomeSection850.scss'
import '../WelcomeSection/WelcomeSection750.scss'
import '../WelcomeSection/WelcomeSection650.scss'
import '../WelcomeSection/WelcomeSectionMobile.scss'
import WelcomeSectionList from '../WelcomeSectionList/WelcomeSectionList';
import WelcomeSectionTitle from '../WelcomeSectionTitle/WelcomeSectionTitle';

import { useMediaQuery } from 'react-responsive';

import calendarIcon from '../../../../assets/images/icons/calendarIcon.svg';
import heartIcon from '../../../../assets/images/icons/heartIcon.svg';
import toolsIcon from '../../../../assets/images/icons/toolsIcon.svg';
import gpsIcon from '../../../../assets/images/icons/gpsIcon.svg';
import garantIcon from '../../../../assets/images/icons/garantIcon.svg';
import welcomeBackground from '../../../../assets/images/pictures/welcomeBackground.png';
import welcomeBackgroundMobile from '../../../../assets/images/pictures/welcomeBackgroundMobile.png';
import HeaderLogo from '../../../../components/HeaderLogo/HeaderLogo'
import headerLogo from '../../../../assets/images/pictures/headerLogo.svg'

const WelcomeSection = () => {

    const isTablet1050 = useMediaQuery({ maxWidth: 1051 })
    const isMobile = useMediaQuery({ maxWidth: 451 })

    const welcomeItems = [
        {text: 'Здоровый подход.', icon: heartIcon},
        {text: 'Можно есть любую еду.', icon: toolsIcon},
        {text: 'Без диет и БАДов.', icon: garantIcon},
        {text: 'За 12 недель до 12кг.', icon: calendarIcon},
        {text: 'Эффективность проверена.', icon: gpsIcon},
    ]

    return(
        <section className='welcomeSection'>
            {isTablet1050 ? (
                <>
                    {isMobile ? (
                        <>
                            <div className='container'>
                                <HeaderLogo logo={headerLogo} text={'Практикум'}/>
                                <WelcomeSectionTitle textPart1={`Помогаем сбросить вес`} textPart2={'без отката назад!'}/>
                                <WelcomeSectionList welcomeItems={welcomeItems}/>
                            </div>
                            <img src={welcomeBackgroundMobile} alt="" loading='lazy' className='welcomeBackground'/>
                        </>
                    ) : (
                        <>
                            <div className='container'>
                                <WelcomeSectionTitle textPart1={`Помогаем сбросить вес`} textPart2={'без отката назад!'}/>
                                <WelcomeSectionList welcomeItems={welcomeItems}/>
                            </div>
                            <img src={welcomeBackground} alt="" loading='lazy' className='welcomeBackground'/>
                        </>
                    )}
                </>
            ) : (
                <>
                    <div className='container'>
                        <WelcomeSectionTitle textPart1={`Помогаем сбросить вес`} textPart2={'без отката назад!'}/>
                        <WelcomeSectionList welcomeItems={welcomeItems}/>
                    </div>
                    <img src={welcomeBackground} alt="" loading='lazy' className='welcomeBackground'/>
                </>
            )}
            
        </section>
    )
}

export default WelcomeSection;