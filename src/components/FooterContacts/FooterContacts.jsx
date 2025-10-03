import '../FooterContacts/FooterContacts.scss'
import '../FooterContacts/FooterContactsMobile.scss'
import FooterSocials from '../FooterSocials/FooterSocials';
import { useMediaQuery } from 'react-responsive';

const FooterContacts = ({ socials = [] }) => {
    const isMobile = useMediaQuery({ maxWidth: 451 })
    return(
        <div className='footerContacts'>
            {isMobile ? (
                <>
                    <h6 className='footerContactsTitle'>Контакты</h6>
                    <div className='footerContactsMobile'>
                        <a href="tel:+79063114911" className='footerContactsTel'>+7 (906) 311-49-11</a>
                        <FooterSocials socials={socials} />
                    </div>
                </>
            ) : (
                <>
                    <h6 className='footerContactsTitle'>Контакты</h6>
                    <a href="tel:+79063114911" className='footerContactsTel'>+7 (906) 311-49-11</a>
                    <FooterSocials socials={socials} />
                </>
            )}
        </div>
    )
}

export default FooterContacts;