import '../HeaderButton/HeaderButton.scss'
import { Link } from 'react-router-dom'
import fireLogo from '../../assets/images/icons/fireLogo.svg'

const HeaderButton = ({ text, page = '/' }) => {
    return(
        <div className='headerButton'>
            <img src={fireLogo} alt="Fire Icon" loading='lazy'/>
            <Link to={page} className='headerButtonLink'>
                { text }
            </Link>
        </div>
    )
}

export default HeaderButton;