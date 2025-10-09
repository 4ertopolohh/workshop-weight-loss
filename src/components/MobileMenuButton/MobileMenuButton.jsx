import '../MobileMenuButton/MobileMenuButton.scss'
import { Link, useLocation } from 'react-router-dom';

const MobileMenuButton = ({ imgSrc, link, className = "default" }) => {
    const location = useLocation();
    
    const isActive = () => {
        const currentPath = location.pathname || '/';
        const itemPath = link.replace('/#', '');
        return currentPath === itemPath;
    };
    
    return(
        <Link 
            to={link.replace('/#', '')} 
            className={`mobileMenuButton ${className} ${isActive() ? 'active' : ''}`}
        >
            <img src={imgSrc} alt="" loading='lazy'/>
        </Link>
    )
}

export default MobileMenuButton;