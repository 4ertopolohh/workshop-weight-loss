import { motion } from 'framer-motion';
import '../Header/Header.scss'
import HeaderButton from '../HeaderButton/HeaderButton';
import HeaderLogo from '../HeaderLogo/HeaderLogo';
import HeaderNavList from '../HeaderNavList/HeaderNavList';
import headerLogo from '../../assets/images/pictures/headerLogo.svg'

const Header = ({ navListItems = [] }) => {
    return(
        <motion.header 
            className='header'
            initial={{ opacity: 0, y: -100, x: -700}}
            animate={{ opacity: 1, y: 0, x: -700}}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className='container'>
                <HeaderLogo logo={headerLogo} text={'Практикум'}/>
                <nav className='headerNav'>
                    <HeaderNavList navListItems={navListItems}/>
                    <HeaderButton text={'Я в деле!'}/>
                </nav>
            </div>
        </motion.header>
    )
}

export default Header;