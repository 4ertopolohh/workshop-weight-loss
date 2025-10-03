import '../MobileMenu/MobileMenu.scss'
import MobileMenuButton from '../MobileMenuButton/MobileMenuButton';

const MobileMenu = ({ menuItems=[] }) => {
    return(
        <div className='mobileMenu'>
            <nav className='mobileMenuNav'>
                <ul className='mobileMenuNavList'>
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <MobileMenuButton 
                                imgSrc={item.icon} 
                                link={item.link} 
                                className={item.className}
                            />
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default MobileMenu;