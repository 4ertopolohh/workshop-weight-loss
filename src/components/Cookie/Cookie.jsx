import '../Cookie/Cookie.scss'
import '../Cookie/Cookie1394.scss'
import '../Cookie/Cookie1300.scss'
import '../Cookie/Cookie1212.scss'
import '../Cookie/Cookie1135.scss'
import '../Cookie/Cookie1050.scss'
import '../Cookie/Cookie950.scss'
import '../Cookie/CookieMobile.scss'
import CookieButton from '../CookieButton/CookieButton';
import { motion } from 'framer-motion';

const Cookie = ({ onAccept }) => {
    return (
        <motion.div
            className='cookie'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
        >
            <div className='cookieDescription'>
                <h5>Мы используем файлы cookie</h5>
                <p>
                    Для обеспечения оптимальной работы анализа, использования и улучшения пользовательского опыта на сайте используются технологии cookie. Продолжая пользоваться сайтом, Вы соглашаетесь с размещением cookie-файлов на Вашем устройстве на условиях, изложенных в&nbsp;
                    <span>
                        <a className='privacyPolicy' href='/'>
                            Политике конфиденциальности.
                        </a>
                    </span>
                </p>
            </div>
            <a href="/" className='cookiesMoreDetails'>Подробнее</a>
            <CookieButton onClick={onAccept} />
        </motion.div>
    )
}

export default Cookie;
