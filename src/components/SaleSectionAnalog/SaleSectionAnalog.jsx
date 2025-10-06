import SaleBannerAnalog from '../SaleBannerAnalog/SaleBannerAnalog';
import SaleBannerSalePrice from '../SaleBannerSalePrice/SaleBannerSalePrice';
import '../SaleSectionAnalog/SaleSectionAnalog.scss'
import '../SaleSectionAnalog/SaleSectionAnalogMobile.scss'
import { motion } from 'framer-motion';

import calendarIcon from '../../assets/images/icons/calendarIconWhite.svg'
import snowIcon from '../../assets/images/icons/snowIconWhite.svg'
import clockIcon from '../../assets/images/icons/clockIconWhite.svg'
import userIcon from '../../assets/images/icons/userIconWhite.svg'
import volumeOffIcon from '../../assets/images/icons/volumeOffIconWhite.svg'
import DiscountOfferAnalog from '../DiscountOfferAnalog/DiscountOfferAnalog';
import { useMediaQuery } from 'react-responsive';

const SaleSectionAnalog = () => {

    const isTablet1050 = useMediaQuery({ maxWidth: 1051 })

    const groupItems = [
        { text: '12 недель', icon: calendarIcon }
    ]

    const personalItems = [
        { text: '12 недель', icon: calendarIcon },
        { text: '+ 4 недели заморозки', icon: snowIcon },
    ]

    const independentItems = [
        { text: 'Доступ 6 месяцев', icon: clockIcon },
        { text: 'Без обратной связи', icon: volumeOffIcon },
    ]

    const introductoryItems = [
        { text: 'Доступ 1 месяц', icon: clockIcon },
        { text: 'Личный разбор', icon: userIcon },
    ]

    const animationDivStyle = {
        width: 522
    }

    return(
        <section className='saleSectionAnalog'>
            {isTablet1050 ? (
                <div className='container'>
                    <div className='saleSectionAnalogContent'>
                            <SaleBannerAnalog 
                                title = {'Групповая'}
                                items = {groupItems}
                                description = {'Работа над результатом с Никитой Агаповым и Юрием  Горшковым'}
                                fullPrice = {'30 000'}
                                monthPrice = {'Оплата: 10 000 ₽ в месяц'}
                                backgroundColor = {'linear-gradient(135deg, #FF7A00 0%, #FF8C29 50%, #FF4E00 100%)'}
                                color = {'#FF6B16'}
                            >
                                <SaleBannerSalePrice 
                                    fullPrice={'30 000'}
                                    salePrice={'24 900'}
                                    color={'#FF6B16'}
                                />
                            </SaleBannerAnalog>
                        
                            <SaleBannerAnalog 
                                title = {'Личная'}
                                items = {personalItems}
                                description = {'Работа над результатом индивидуально с Никитой Агаповым'}
                                fullPrice = {'60 000'}
                                monthPrice = {'Оплата: 20 000 ₽ в месяц'}
                                backgroundColor = {'linear-gradient(135deg, #1E5BFF 0%, #2E7DFF 50%, #006BFF 100%)'}
                                color = {'#1257E0'}
                            >
                                <SaleBannerSalePrice 
                                    fullPrice={'60 000'}
                                    salePrice={'49 900'}
                                    color={'#1257E0'}
                                />
                            </SaleBannerAnalog>
                    </div>
                    <div className='saleSectionAnalogContent'>
                        
                            <SaleBannerAnalog 
                                title = {'Самостоятельный'}
                                items = {independentItems}
                                description = {'База знаний для самостоятельной работы'}
                                fullPrice = {'14 900'}
                                monthPrice = {'Единый платеж'}
                                backgroundColor = {'linear-gradient(178deg,rgba(255, 136, 0, 1) 0%, rgba(196, 105, 0, 1) 6%, rgba(0, 0, 0, 1) 68%)'}
                                color = {'#000'}
                            >
                            </SaleBannerAnalog>
                        
                            <SaleBannerAnalog 
                                title = {'Ознакомительный'}
                                items = {introductoryItems}
                                description = {'Идеально, чтобы понять подходит ли вам метод'}
                                fullPrice = {'3 900'}
                                monthPrice = {'Единый платеж'}
                                backgroundColor = {'linear-gradient(178deg,rgba(0, 84, 181, 1) 0%, rgba(0, 92, 173, 1) 6%, rgba(0, 0, 0, 1) 68%)'}
                                color = {'#000'}
                            >
                                <DiscountOfferAnalog />
                            </SaleBannerAnalog>
                    </div>
                </div>
            ) : (
                <div className='container'>
                    <div className='saleSectionAnalogContent'>
                        <motion.div
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            style={animationDivStyle}
                        >
                            <SaleBannerAnalog 
                                title = {'Групповая'}
                                items = {groupItems}
                                description = {'Работа над результатом с Никитой Агаповым и Юрием  Горшковым'}
                                fullPrice = {'30 000'}
                                monthPrice = {'Оплата: 10 000 ₽ в месяц'}
                                backgroundColor = {'linear-gradient(135deg, #FF7A00 0%, #FF8C29 50%, #FF4E00 100%)'}
                                color = {'#FF6B16'}
                            >
                                <SaleBannerSalePrice 
                                    fullPrice={'30 000'}
                                    salePrice={'24 900'}
                                    color={'#FF6B16'}
                                />
                            </SaleBannerAnalog>
                        </motion.div>
                        <motion.div
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            style={animationDivStyle}
                        >
                            <SaleBannerAnalog 
                                title = {'Личная'}
                                items = {personalItems}
                                description = {'Работа над результатом индивидуально с Никитой Агаповым'}
                                fullPrice = {'60 000'}
                                monthPrice = {'Оплата: 20 000 ₽ в месяц'}
                                backgroundColor = {'linear-gradient(135deg, #1E5BFF 0%, #2E7DFF 50%, #006BFF 100%)'}
                                color = {'#1257E0'}
                            >
                                <SaleBannerSalePrice 
                                    fullPrice={'60 000'}
                                    salePrice={'49 900'}
                                    color={'#1257E0'}
                                />
                            </SaleBannerAnalog>
                        </motion.div>
                    </div>
                    <div className='saleSectionAnalogContent'>
                        <motion.div
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            style={animationDivStyle}
                        >
                            <SaleBannerAnalog 
                                title = {'Самостоятельный'}
                                items = {independentItems}
                                description = {'База знаний для самостоятельной работы'}
                                fullPrice = {'14 900'}
                                monthPrice = {'Единый платеж'}
                                backgroundColor = {'linear-gradient(178deg,rgba(255, 136, 0, 1) 0%, rgba(196, 105, 0, 1) 6%, rgba(0, 0, 0, 1) 68%)'}
                                color = {'#000'}
                            >
                            </SaleBannerAnalog>
                        </motion.div>
                        <motion.div
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            style={animationDivStyle}
                        >
                            <SaleBannerAnalog 
                                title = {'Ознакомительный'}
                                items = {introductoryItems}
                                description = {'Идеально, чтобы понять подходит ли вам метод'}
                                fullPrice = {'3 900'}
                                monthPrice = {'Единый платеж'}
                                backgroundColor = {'linear-gradient(178deg,rgba(0, 84, 181, 1) 0%, rgba(0, 92, 173, 1) 6%, rgba(0, 0, 0, 1) 68%)'}
                                color = {'#000'}
                            >
                                <DiscountOfferAnalog />
                            </SaleBannerAnalog>
                        </motion.div>
                    </div>
                </div>
            )}
                
        </section>
    )
}

export default SaleSectionAnalog;