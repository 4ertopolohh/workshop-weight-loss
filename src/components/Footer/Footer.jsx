import '../Footer/Footer.scss'
import '../Footer/Footer1394.scss'
import '../Footer/Footer1300.scss'
import '../Footer/Footer1212.scss'
import '../Footer/Footer1135.scss'
import '../Footer/Footer1050.scss'
import '../Footer/Footer950.scss'
import '../Footer/FooterMobile.scss'
import FooterMain from '../FooterMain/FooterMain';
import FooterTitle from '../FooterTitle/FooterTitle';

import whatsappIcon from '../../assets/images/icons/whatsappIcon.svg';
import telegramIcon from '../../assets/images/icons/telegramIcon.svg';
import vkIcon from '../../assets/images/icons/vkIcon.svg';
import teletypeIcon from '../../assets/images/icons/teletypeIcon.svg';
import FooterInfo from '../FooterInfo/FooterInfo';

const Footer = ({ footerMenuItems = [] }) => {
    const socials = [
        { 
            icon: whatsappIcon, 
            link: "", 
            alt: "WhatsApp" 
        },
        { 
            icon: telegramIcon, 
            link: "", 
            alt: "Telegram" 
        },
        { 
            icon: vkIcon, 
            link: "", 
            alt: "VK" 
        },
        { 
            icon: teletypeIcon, 
            link: "", 
            alt: "Teletype" 
        }
    ];

    return(
        <footer className='footer'>
            <div className='container'>
                <FooterTitle />
                <FooterMain socials={socials} footerMenuItems={footerMenuItems} />
                <FooterInfo />
            </div>
        </footer>
    )
}

export default Footer;