import FreeContentBanner from '../FreeContentBanner/FreeContentBanner';
import '../FreeContentSection/FreeContentSection.scss'
import '../FreeContentSection/FreeContentSection750.scss'
import '../FreeContentSection/FreeContentSection650.scss'
import '../FreeContentSection/FreeContentSectionMobile.scss'
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import weigthLossIcon from '../../../../assets/images/icons/weightLossIcon.svg'
import ruletIcon from '../../../../assets/images/icons/ruletIcon.svg'
import { useMediaQuery } from 'react-responsive';

const FreeContentSection = () => {

    const isTablet1050 = useMediaQuery({ maxWidth: 1051 })
    const isMobile = useMediaQuery({ maxWidth: 451 })

    return(
        <section className='freeContentSection'>
            <div className='container'>
                {isTablet1050 ? (
                    <h1 className='freeContentSectionTitle'>
                        Бесплатные материалы
                    </h1>
                ) : (
                    <motion.h1 
                        className='freeContentSectionTitle'
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        Бесплатные материалы
                    </motion.h1>
                )}
                <div className='freeContentSectionBanners'>
                    {isTablet1050 ? (
                        <>
                            {isMobile ? (
                                <div className="freeContentSliderWrapper">
                                    <Swiper
                                        modules={[Pagination, Autoplay]} 
                                        slidesPerView={1}
                                        spaceBetween={20}
                                        loop={true}
                                        autoplay={{
                                            delay: 5000, 
                                            disableOnInteraction: false, 
                                        }}
                                        pagination={{
                                            el: '.freeContent-pagination',
                                            clickable: true,
                                        }}
                                        className="freeContentSwiper"
                                    >
                                        <SwiperSlide>
                                            <FreeContentBanner 
                                                subtitle={'Миф или правда'}
                                                title={'Самые популярные способы похудения'}
                                                author={'Никита Агапов'}
                                                description={'Почти все пробовали выше перечисленное, чтобы избавиться от лишнего веса, но всё безрезультатно или имеет кратковременный эффект, так худеть точно не нужно. Многое из этого работает в теории, но не в реальной жизни. У больши...'}
                                                color={'#FF6B16'}
                                                subtitleIcon={weigthLossIcon}
                                            />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <FreeContentBanner 
                                                subtitle={'Факты о похудении'}
                                                title={'Почему не получается похудеть'}
                                                author={'Никита Агапов'}
                                                description={'Нереалистичные планы: тебе обещали быстрый результат, но вес не набирается за неделю и не уходит так же быстро. Способы, которые дают быстрый эффект, не дают длительного результата. Попытки пересилить себя через жёсткие о...'}
                                                color={'#1257E0'}
                                                subtitleIcon={ruletIcon}
                                            />
                                        </SwiperSlide>
                                    </Swiper>
                                    <div className="freeContent-pagination"></div>
                                </div>
                            ) : (
                                <>
                                    <FreeContentBanner 
                                        subtitle={'Миф или правда'}
                                        title={'Самые популярные способы похудения'}
                                        author={'Никита Агапов'}
                                        description={'Почти все пробовали выше перечисленное, чтобы избавиться от лишнего веса, но всё безрезультатно или имеет кратковременный эффект, так худеть точно не нужно. Многое из этого работает в теории, но не в реальной жизни. У больши...'}
                                        color={'#FF6B16'}
                                        subtitleIcon={weigthLossIcon}
                                    />
                                    <FreeContentBanner 
                                        subtitle={'Факты о похудении'}
                                        title={'Почему не получается похудеть'}
                                        author={'Никита Агапов'}
                                        description={'Нереалистичные планы: тебе обещали быстрый результат, но вес не набирается за неделю и не уходит так же быстро. Способы, которые дают быстрый эффект, не дают длительного результата. Попытки пересилить себя через жёсткие о...'}
                                        color={'#1257E0'}
                                        subtitleIcon={ruletIcon}
                                    />
                                </>
                            )}
                            
                        </>
                    ) : (
                        <>
                            <motion.div
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                <FreeContentBanner 
                                    subtitle={'Миф или правда'}
                                    title={'Самые популярные способы похудения'}
                                    author={'Никита Агапов'}
                                    description={'Почти все пробовали выше перечисленное, чтобы избавиться от лишнего веса, но всё безрезультатно или имеет кратковременный эффект, так худеть точно не нужно. Многое из этого работает в теории, но не в реальной жизни. У больши...'}
                                    color={'#FF6B16'}
                                    subtitleIcon={weigthLossIcon}
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                            >
                                <FreeContentBanner 
                                    subtitle={'Факты о похудении'}
                                    title={'Почему не получается похудеть'}
                                    author={'Никита Агапов'}
                                    description={'Нереалистичные планы: тебе обещали быстрый результат, но вес не набирается за неделю и не уходит так же быстро. Способы, которые дают быстрый эффект, не дают длительного результата. Попытки пересилить себя через жёсткие о...'}
                                    color={'#1257E0'}
                                    subtitleIcon={ruletIcon}
                                />
                            </motion.div>
                        </>
                    )}
                </div>
            </div>
        </section>
    )
}

export default FreeContentSection;