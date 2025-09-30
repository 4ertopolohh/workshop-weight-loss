import { Link } from 'react-router-dom'; // ← Добавил импорт
import '../HeaderLogo/HeaderLogo.scss';

const HeaderLogo = ({ logo, text }) => {
    return(
        <div className='headerLogo'>
            <Link to="/" className='headerLogoLink'> {/* ← Заменил a на Link */}
                <img src={logo} alt="" loading='lazy'/>
                {text}
            </Link>
        </div>
    )
}

export default HeaderLogo;