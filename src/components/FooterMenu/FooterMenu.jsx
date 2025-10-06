import '../FooterMenu/FooterMenu.scss'
import FooterMenuList from '../FooterMenuList/FooterMenuList';

const FooterMenu = ({ footerMenuItems = [] }) => {
    return(
        <div className='footerMenu'>
            <h6 className='footerMenuTitle'>Меню</h6>
            <FooterMenuList footerMenuItems={footerMenuItems} />
        </div>
    )
}

export default FooterMenu;