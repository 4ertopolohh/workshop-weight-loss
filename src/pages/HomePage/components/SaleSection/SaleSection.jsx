import BuyBanner from '../BuyBanner/BuyBanner';
import '../SaleSection/SaleSection.scss'
import LinkPageButton from '../LinkPageButton/LinkPageButton'
import { motion } from 'framer-motion'; 

import groupBanner from '../../../../assets/images/pictures/groupBanner.png'
import individualBanner from '../../../../assets/images/pictures/individualBanner.png'

const SaleSection = () => {

    const individualList = [
        {text: 'Можно начать в любой день'},
        {text: 'Индивидуальный график онлайн встреч с основателем проекта Никитой Агаповым'},
        {text: 'Еженедельный анализ результатов и их корректировка '},
        {text: 'Доступ к базе знаний материалов (видео и статьи)'},
        {text: 'Еженедельные планы и их проверка куратором'},
        {text: 'Ежедневная поддержка и помощь в Telegram-чате'},
        {text: '4 недели заморозки'}
    ]

    const groupList = [
        {text: 'Старт практикума: 15 сентября'},
        {text: 'Еженедельные встречи на онлайн-эфирах в Zoom '},
        {text: 'Теоретических знания и практические способы похудеть'},
        {text: 'Доступ к базе знаний материалов (видео и статьи)'},
        {text: 'Еженедельные планы и их проверка куратором'},
        {text: 'Еженедельный анализ результатов и их корректировка '},
        {text: 'Поддержка и помощь в Telegram-чате'}
    ]

    return(
        <section className='saleSection'>
            <div className='container'>
                <motion.div 
                    className='saleSectionName'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className='saleSectionTitle'>
                        Готовы начать?
                    </h1>
                    <h1 className='saleSectionSubtitle'>
                        Погнали!
                    </h1>
                </motion.div>
                <div className='saleSectionContent'>
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                    >
                        <BuyBanner 
                            background={groupBanner}
                            items={groupList}
                            fullCost={'29 900'}
                            monthCost={'9 966'}
                            saleCost={'24 900'}
                            backgroundColor={'#FFF4ED'}
                            width={522}
                            height={807}
                        >
                            <LinkPageButton 
                                width = {482}
                                height = {62}
                                background = {'#FF6B16'}
                                text = {'Купить'}
                                color = {'#fff'}
                                fontSize = {18}
                                fontWeight = {600}
                                page = {''}
                            />
                        </BuyBanner>
                    </motion.div>

                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                    >
                        <BuyBanner 
                            background={individualBanner}
                            items={individualList}
                            fullCost={'60 000'}
                            monthCost={'20 000'}
                            saleCost={'47 000'}
                            backgroundColor={'#F3F8FF'}
                            width={522}
                            height={807}
                        >
                            <LinkPageButton 
                                width = {482}
                                height = {62}
                                background = {'#1257E0'}
                                text = {'Купить'}
                                color = {'#fff'}
                                fontSize = {18}
                                fontWeight = {600}
                                page = {''}
                            />
                        </BuyBanner>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default SaleSection;