import FooterContacts from '../FooterContacts/FooterContacts';
import '../FooterMain/FooterMain.scss'
import '../FooterMain/FooterMain1394.scss'
import '../FooterMain/FooterMain1300.scss'
import '../FooterMain/FooterMain1212.scss'
import '../FooterMain/FooterMain1135.scss'
import '../FooterMain/FooterMain1050.scss'
import '../FooterMain/FooterMain950.scss'
import '../FooterMain/FooterMainMobile.scss'
import FooterMenu from '../FooterMenu/FooterMenu';

const FooterMain = ({ socials = [], footerMenuItems = [] }) => {
    return(
        <div className='footerMain'>
            <div className='container'>
                <FooterContacts socials={socials} />
                <FooterMenu footerMenuItems={footerMenuItems} />
            </div>
        </div>
    )
}

export default FooterMain;