import { Link, useLocation } from 'react-router-dom';
import '../FooterMenuList/FooterMenuList.scss'

const FooterMenuList = ({ footerMenuItems = [] }) => {
    const location = useLocation();

    const isActive = (link) => {
        const currentPath = location.pathname || '/';
        const itemPath = link.replace('/#', '');
        return currentPath === itemPath;
    };

    return (
        <div className='footerMenuList'>
            <ul>
                {footerMenuItems.map((item, index) => (
                    <li key={index}>
                        <Link 
                            to={item.link.replace('/#', '')} 
                            className={`footerMenuLink ${isActive(item.link) ? 'footerMenuLink--active' : ''}`}
                        >
                            {item.text}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FooterMenuList;
