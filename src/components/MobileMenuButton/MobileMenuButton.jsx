import '../MobileMenuButton/MobileMenuButton.scss'
import { Link, useLocation } from 'react-router-dom';

import mobileMenuButtonBackground from '../../assets/images/pictures/mobileMenuButtonBackground.png'
import mobileMenuButtonBackgroundActive from '../../assets/images/pictures/mobileMenuButtonBackgroundActive.png'
import mobileMenuButtonBackgroundIIN from '../../assets/images/icons/mobileMenuIIN.svg'
import mobileMenuButtonBackgroundIINActive from '../../assets/images/icons/mobileMenuIINActive.svg'
import mobileMenuButtonHomePage from '../../assets/images/icons/mobileMenuHomePage.svg'

const MobileMenuButton = ({ imgSrc, link, className = "default" }) => {
    const location = useLocation();
    const isActive = location.pathname === link;
    
    return(
        <Link to={link} className={`mobileMenuButton ${className} ${isActive ? 'active' : ''}`}>
            <img src={imgSrc} alt="" loading='lazy'/>
        </Link>
    )
}

export default MobileMenuButton;