import '../FooterContacts/FooterContacts.scss'
import FooterSocials from '../FooterSocials/FooterSocials';

const FooterContacts = ({ socials = [] }) => {
    return(
        <div className='footerContacts'>
            <h6 className='footerContactsTitle'>Контакты</h6>
            <a href="tel:+79063114911" className='footerContactsTel'>+7 (906) 311-49-11</a>
            <FooterSocials socials={socials} />
        </div>
    )
}

export default FooterContacts;