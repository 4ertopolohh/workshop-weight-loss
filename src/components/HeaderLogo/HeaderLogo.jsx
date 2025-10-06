import { Link } from 'react-router-dom'; 
import '../HeaderLogo/HeaderLogo.scss';
import '../HeaderLogo/HeaderLogo1050.scss';
import '../HeaderLogo/HeaderLogoMobile.scss';

const HeaderLogo = ({ logo, text }) => {
    return(
        <div className='headerLogo'>
            <Link to="/" className='headerLogoLink'> 
                <img src={logo} alt="" loading='lazy'/>
                {text}
            </Link>
        </div>
    )
}

export default HeaderLogo;