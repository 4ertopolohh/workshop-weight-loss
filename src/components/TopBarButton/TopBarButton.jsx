import '../TopBarButton/TopBarButton.scss'
import { Link } from 'react-router-dom';

const TopBarButton = ({ link }) => {
    return(
        <Link to={link.replace('/#', '')} className='topBarButton'>Назад</Link>
    )
}

export default TopBarButton;