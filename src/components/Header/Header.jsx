import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import '../Header/Header.scss'
import '../Header/Header1394.scss'
import '../Header/Header1300.scss'
import '../Header/Header1212.scss'
import '../Header/Header1135.scss'
import '../Header/Header1050.scss'
import '../Header/Header950.scss'
import '../Header/HeaderMobile.scss'
import HeaderButton from '../HeaderButton/HeaderButton';
import HeaderLogo from '../HeaderLogo/HeaderLogo';
import HeaderNavList from '../HeaderNavList/HeaderNavList';
import headerLogo from '../../assets/images/pictures/headerLogo.svg'

const Header = ({ navListItems = [] }) => {
    const isDesktop = useMediaQuery({ minWidth: 1051 })

    return(
        <motion.header 
            className='header'
            initial={{ opacity: 0, y: -100}}
            animate={{ opacity: 1, y: 0}}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className='container'>
                <HeaderLogo logo={headerLogo} text={'Практикум'}/>
                {isDesktop && (
                    <nav className='headerNav'>
                        <HeaderNavList navListItems={navListItems}/>
                        <HeaderButton text={'Я в деле!'} page="/i-in"/>
                    </nav>
                )}
            </div>
        </motion.header>
    )
}

export default Header;