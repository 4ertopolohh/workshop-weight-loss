import '../SaleSection/SaleSection.scss'
import '../SaleSection/SaleSection950.scss'
import '../SaleSection/SaleSectionMobile.scss'
import { motion } from 'framer-motion'; 
import { useMediaQuery } from 'react-responsive';

import BuyWorkshopBanner from '../../../../components/BuyWorkshopBanner/BuyWorkshopBanner';

import calendarIconWhite from '../../../../assets/images/icons/calendarIconWhite.svg'
import clockIconWhite from '../../../../assets/images/icons/clockIconWhite.svg'
import snowIconWhite from '../../../../assets/images/icons/snowIconWhite.svg'
import userIconWhite from '../../../../assets/images/icons/userIconWhite.svg'
import volumeOffIconWhite from '../../../../assets/images/icons/volumeOffIconWhite.svg'

import DiscountOffer from '../../../../components/DiscountOffer/DiscountOffer';
import IntroductoryDiscountOffer from '../../../../components/IntroductoryDiscountOffer/IntroductoryDiscountOffer';

const SaleSection = () => {

    const isTablet1050 = useMediaQuery({ maxWidth: 1051 })
    const isMobile = useMediaQuery({ maxWidth: 451 })

    const individualPreviewList = [
        {text: 'Длительность 12 недель', icon: calendarIconWhite },
        {text: 'Доступ 6 месяцев', icon: clockIconWhite },
        {text: '4 недели заморозки', icon: snowIconWhite }
    ]

    const individualList = [
        {text: 'Индивидуальный график онлайн сопровождения с основателем проекта Никитой Агаповым', color: '#2471FF'},
        {text: 'Теоретические материалы и практические способы похудеть', color: '#000'},
        {text: 'Доступ к базе знаний материалов (видео и статьи)', color: '#000'},
        {text: 'Еженедельные планы и их проверка Никитой Агаповым', color: '#000'},
        {text: 'Еженедельный анализ результатов и их корректировка ', color: '#000'},
        {text: 'Ежедневная поддержка и помощь в Telegram-чате ', color: '#000'},
        {text: 'Доступ на 6 месяцев с момента оплаты', color: '#000'},
        {text: 'Можно начать в любой день', color: '#2471FF'},
        {text: '4 недели заморозки', color: '#2471FF'}
    ]

    const groupPreviewList = [
        {text: 'Длительность 12 недель', icon: calendarIconWhite },
        {text: 'Доступ 6 месяцев', icon: clockIconWhite }
    ]

    const groupList = [
        {text: 'Еженедельные встречи на онлайн-эфирах в Zoom', color: '#000'},
        {text: 'Теоретические материалы и практические способы похудеть', color: '#000'},
        {text: 'Доступ к базе знаний материалов (видео и статьи)', color: '#000'},
        {text: 'Еженедельные планы и их проверка куратором', color: '#000'},
        {text: 'Еженедельный анализ результатов и их корректировка', color: '#000'},
        {text: 'Ежедневная поддержка и помощь в Telegram-чате', color: '#000'},
        {text: 'Доступ на 6 месяцев с момента оплаты', color: '#000'}
    ]

    const introductoryPreviewList = [
        {text: 'Доступ 1 месяц', icon: clockIconWhite },
        {text: 'Личный разбор с рекомендациями', icon: userIconWhite },
    ]

    const introductoryList = [
        {text: '3 ознакомительных видео-урока по темам практикума', color: '#000' },
        {text: 'Личный разбор и рекомендации от Никитой Агаповым', color: '#000' },
        {text: 'Чек-лист привычек которые помогают похудеть', color: '#000' },
        {text: 'Доступ к материалам на 1 месяц', color: '#000' }
    ]

    const independentPreviewList = [
        {text: 'Доступ 6 месяцев', icon: clockIconWhite },
        {text: 'Без обратной связи', icon: volumeOffIconWhite },
    ]

    const independentList = [
        {text: 'Теоретические материалы и практические способы похудеть', color: '#000' },
        {text: '12 основных видео-уроков практикума', color: '#000' },
        {text: 'Еженедельные самостоятельные задания без проверки куратором', color: '#000' },
        {text: 'Доступ к материалам на 6 месяцев', color: '#000' }
    ]

    return(
        <section className='saleSection'>

            {isTablet1050 ? (
                <div className='container'>
                    <div className='saleSectionName'>
                        <h1 className='saleSectionTitle'>
                            Готовы начать?
                        </h1>
                        <h1 className='saleSectionSubtitle'>
                            Погнали!
                        </h1>
                        <p className='saleSectionSubtitle2'>
                            Выбирайте формат участия
                        </p>
                    </div>
                    {isMobile ? (
                        <>
                            <BuyWorkshopBanner 
                                height={895}
                                backgroundColor={'#FFF4ED'}
                                previewBackground={'linear-gradient(135deg, #FF7A00 0%, #FF8C29 50%, #FF4E00 100%)'}
                                title={'Групповой'}
                                subtitle={'Работа над результатом с'}
                                subtitleTitle={'Никитой Агаповым и Юрием Горшковым'}
                                itemsPreview={groupPreviewList}
                                buttonColor={'#FF6B16'}
                                itemsDescription={groupList}
                                fullPrice={'30 000'}
                                monthPrice={'Оплата: 10 000 ₽ в месяц'}
                            >
                                <DiscountOffer 
                                    oldPrice={'30 000'}
                                    newPrice={'24 900'}
                                />
                            </BuyWorkshopBanner>
                            <BuyWorkshopBanner 
                                height={975}
                                backgroundColor={'#F3F8FF'}
                                previewBackground={'linear-gradient(135deg, #1E5BFF 0%, #2E7DFF 50%, #006BFF 100%)'}
                                title={'Личный'}
                                subtitle={'Работа над результатом с'}
                                subtitleTitle={'Никитой Агаповым'}
                                itemsPreview={individualPreviewList}
                                buttonColor={'#1257E0'}
                                itemsDescription={individualList}
                                fullPrice={'60 000'}
                                monthPrice={'Оплата: 20 000 ₽ в месяц'}
                            >
                                <DiscountOffer 
                                    oldPrice={'60 000'}
                                    newPrice={'49 900'}
                                />
                            </BuyWorkshopBanner>
                            <BuyWorkshopBanner 
                                height={595}
                                backgroundColor={'#F7F7F7'}
                                previewBackground={'linear-gradient(178deg,rgba(255, 136, 0, 1) 0%, rgba(196, 105, 0, 1) 6%, rgba(0, 0, 0, 1) 68%)'}
                                title={'Самостоятельный'}
                                subtitle={'База знаний для самостоятельной работы'}
                                subtitleTitle={''}
                                itemsPreview={independentPreviewList}
                                buttonColor={'#000'}
                                itemsDescription={independentList}
                                fullPrice={'14 900'}
                                monthPrice={'Единый платеж'}
                            >
                            </BuyWorkshopBanner>
                            <BuyWorkshopBanner 
                                height={695}
                                backgroundColor={'#F7F7F7'}
                                previewBackground={'linear-gradient(178deg,rgba(0, 84, 181, 1) 0%, rgba(0, 92, 173, 1) 6%, rgba(0, 0, 0, 1) 68%)'}
                                title={'Ознакомительный'}
                                subtitle={'Идеально, чтобы понять подходит ли вам метод'}
                                subtitleTitle={''}
                                itemsPreview={introductoryPreviewList}
                                buttonColor={'#000'}
                                itemsDescription={introductoryList}
                                fullPrice={'3 900'}
                                monthPrice={'Единый платеж'}
                                children2={<IntroductoryDiscountOffer/>}
                            >
                            </BuyWorkshopBanner>
                        </>
                    ) : (
                        <>
                            <BuyWorkshopBanner 
                                height={850}
                                backgroundColor={'#FFF4ED'}
                                previewBackground={'linear-gradient(135deg, #FF7A00 0%, #FF8C29 50%, #FF4E00 100%)'}
                                title={'Групповой'}
                                subtitle={'Работа над результатом с'}
                                subtitleTitle={'Никитой Агаповым и Юрием Горшковым'}
                                itemsPreview={groupPreviewList}
                                buttonColor={'#FF6B16'}
                                itemsDescription={groupList}
                                fullPrice={'30 000'}
                                monthPrice={'Оплата: 10 000 ₽ в месяц'}
                            >
                                <DiscountOffer 
                                    oldPrice={'30 000'}
                                    newPrice={'24 900'}
                                />
                            </BuyWorkshopBanner>
                            <BuyWorkshopBanner 
                                height={840}
                                backgroundColor={'#F3F8FF'}
                                previewBackground={'linear-gradient(135deg, #1E5BFF 0%, #2E7DFF 50%, #006BFF 100%)'}
                                title={'Личный'}
                                subtitle={'Работа над результатом с'}
                                subtitleTitle={'Никитой Агаповым'}
                                itemsPreview={individualPreviewList}
                                buttonColor={'#1257E0'}
                                itemsDescription={individualList}
                                fullPrice={'60 000'}
                                monthPrice={'Оплата: 20 000 ₽ в месяц'}
                            >
                                <DiscountOffer 
                                    oldPrice={'60 000'}
                                    newPrice={'49 900'}
                                />
                            </BuyWorkshopBanner>
                
                            <BuyWorkshopBanner 
                                height={640}
                                backgroundColor={'#F7F7F7'}
                                previewBackground={'linear-gradient(178deg,rgba(0, 84, 181, 1) 0%, rgba(0, 92, 173, 1) 6%, rgba(0, 0, 0, 1) 68%)'}
                                title={'Ознакомительный'}
                                subtitle={'Идеально, чтобы понять подходит ли вам метод'}
                                subtitleTitle={''}
                                itemsPreview={introductoryPreviewList}
                                buttonColor={'#000'}
                                itemsDescription={introductoryList}
                                fullPrice={'3 900'}
                                monthPrice={'Единый платеж'}
                                children2={<IntroductoryDiscountOffer/>}
                            >
                            </BuyWorkshopBanner>

                            <BuyWorkshopBanner 
                                height={540}
                                backgroundColor={'#F7F7F7'}
                                previewBackground={'linear-gradient(178deg,rgba(255, 136, 0, 1) 0%, rgba(196, 105, 0, 1) 6%, rgba(0, 0, 0, 1) 68%)'}
                                title={'Самостоятельный'}
                                subtitle={'База знаний для самостоятельной работы'}
                                subtitleTitle={''}
                                itemsPreview={independentPreviewList}
                                buttonColor={'#000'}
                                itemsDescription={independentList}
                                fullPrice={'14 900'}
                                monthPrice={'Единый платеж'}
                            >
                            </BuyWorkshopBanner>
                        </>
                    )}
                </div>
            ) : (
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
                    <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 1, ease: 'easeOut' }}
                        >
                            <BuyWorkshopBanner 
                                height={450}
                                backgroundColor={'#FFF4ED'}
                                previewBackground={'linear-gradient(135deg, #FF7A00 0%, #FF8C29 50%, #FF4E00 100%)'}
                                title={'Групповой'}
                                subtitle={'Работа над результатом с'}
                                subtitleTitle={'Никитой Агаповым и Юрием Горшковым'}
                                itemsPreview={groupPreviewList}
                                buttonColor={'#FF6B16'}
                                itemsDescription={groupList}
                                fullPrice={'30 000'}
                                monthPrice={'Оплата: 10 000 ₽ в месяц'}
                            >
                                <DiscountOffer 
                                    oldPrice={'30 000'}
                                    newPrice={'24 900'}
                                />
                            </BuyWorkshopBanner>
                    </motion.div>

                    <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                        >
                            <BuyWorkshopBanner 
                                height={531}
                                backgroundColor={'#F3F8FF'}
                                previewBackground={'linear-gradient(135deg, #1E5BFF 0%, #2E7DFF 50%, #006BFF 100%)'}
                                title={'Личный'}
                                subtitle={'Работа над результатом с'}
                                subtitleTitle={'Никитой Агаповым'}
                                itemsPreview={individualPreviewList}
                                buttonColor={'#1257E0'}
                                itemsDescription={individualList}
                                fullPrice={'60 000'}
                                monthPrice={'Оплата: 20 000 ₽ в месяц'}
                            >
                                <DiscountOffer 
                                    oldPrice={'60 000'}
                                    newPrice={'49 900'}
                                />
                            </BuyWorkshopBanner>
                    </motion.div>
                    <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 1, ease: 'easeOut' }}
                        >
                            <BuyWorkshopBanner 
                                height={328}
                                backgroundColor={'#F7F7F7'}
                                previewBackground={'linear-gradient(178deg,rgba(0, 84, 181, 1) 0%, rgba(0, 92, 173, 1) 6%, rgba(0, 0, 0, 1) 68%)'}
                                title={'Ознакомительный'}
                                subtitle={'Идеально, чтобы понять подходит ли вам метод'}
                                subtitleTitle={''}
                                itemsPreview={introductoryPreviewList}
                                buttonColor={'#000'}
                                itemsDescription={introductoryList}
                                fullPrice={'3 900'}
                                monthPrice={'Единый платеж'}
                                children2={<IntroductoryDiscountOffer/>}
                            >
                            </BuyWorkshopBanner>
                    </motion.div>
                    <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                        >
                            <BuyWorkshopBanner 
                                height={311}
                                backgroundColor={'#F7F7F7'}
                                previewBackground={'linear-gradient(178deg,rgba(255, 136, 0, 1) 0%, rgba(196, 105, 0, 1) 6%, rgba(0, 0, 0, 1) 68%)'}
                                title={'Самостоятельный'}
                                subtitle={'База знаний для самостоятельной работы'}
                                subtitleTitle={''}
                                itemsPreview={independentPreviewList}
                                buttonColor={'#000'}
                                itemsDescription={independentList}
                                fullPrice={'14 900'}
                                monthPrice={'Единый платеж'}
                            >
                            </BuyWorkshopBanner>
                    </motion.div>
                </div>
            )} 
        </section>
    )
}

export default SaleSection;