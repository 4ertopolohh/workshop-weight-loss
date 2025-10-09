import '../HeaderButton/HeaderButton.scss'
import { Link, useLocation } from 'react-router-dom'
import fireLogo from '../../assets/images/icons/fireLogo.svg'

const HeaderButton = ({ text, page = '/' }) => {
    const location = useLocation();
    const isActive = location.pathname === page;

    return(
        <Link to={page} className="headerButtonLink">
            <div className={`headerButton ${isActive ? 'active' : ''}`}>
                <img src={fireLogo} alt="Fire Icon" loading='lazy'/>
                <span>{ text }</span>
            </div>
        </Link>
    )
}

export default HeaderButton;