import FooterContacts from '../FooterContacts/FooterContacts';
import '../FooterMain/FooterMain.scss'
import FooterMenu from '../FooterMenu/FooterMenu';
// import FooterLinks from '../FooterLinks/FooterLinks';

const FooterMain = ({ socials = [], footerMenuItems = [] }) => {
    return(
        <div className='footerMain'>
            <div className='container'>
                <FooterContacts socials={socials} />
                <FooterMenu footerMenuItems={footerMenuItems} />
                {/* <FooterLinks links={links} /> */}
            </div>
        </div>
    )
}

export default FooterMain;