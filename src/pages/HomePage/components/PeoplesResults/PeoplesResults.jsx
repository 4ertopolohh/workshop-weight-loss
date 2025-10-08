import '../PeoplesResults/PeoplesResults.scss'
import '../PeoplesResults/PeoplesResults1135.scss'
import '../PeoplesResults/PeoplesResults1050.scss'
import '../PeoplesResults/PeoplesResults850.scss'
import '../PeoplesResults/PeoplesResults750.scss'
import '../PeoplesResults/PeoplesResults650.scss'
import '../PeoplesResults/PeoplesResultsMobile.scss'
import PeopleResultBanner from '../PeopleResultBanner/PeopleResultBanner'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { useRef } from 'react'
import { useMediaQuery } from 'react-responsive'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import leftArrowBlack from '../../../../assets/images/icons/sliderLeftArrowBlack.svg'
import rightArrowBlack from '../../../../assets/images/icons/sliderRightArrowBlack.svg'

import anastasiaSlide1 from '../../../../assets/images/pictures/anastasiaSlide1.png'
import anastasiaSlide2 from '../../../../assets/images/pictures/anastasiaSlide2.png'
import anastasiaSlide3 from '../../../../assets/images/pictures/anastasiaSlide3.png'

import alekseiSlide1 from '../../../../assets/images/pictures/alekseiSlide1.png'
import alekseiSlide2 from '../../../../assets/images/pictures/alekseiSlide2.png'
import alekseiSlide3 from '../../../../assets/images/pictures/alekseiSlide3.png'

import vladimirSlide1 from '../../../../assets/images/pictures/vladimirSlide1.png'
import vladimirSlide2 from '../../../../assets/images/pictures/vladimirSlide2.png'
import vladimirSlide3 from '../../../../assets/images/pictures/vladimirSlide3.png'

import elenaSlide1 from '../../../../assets/images/pictures/elenaSlide1.png'
import elenaSlide2 from '../../../../assets/images/pictures/elenaSlide2.png'
import elenaSlide3 from '../../../../assets/images/pictures/elenaSlide3.png'

import kristinaSlide1 from '../../../../assets/images/pictures/kristinaSlide1.png'
import kristinaSlide2 from '../../../../assets/images/pictures/kristinaSlide2.png'

import uriSlide1 from '../../../../assets/images/pictures/uriSlide1.png'
import uriSlide2 from '../../../../assets/images/pictures/uriSlide2.png'
import uriSlide3 from '../../../../assets/images/pictures/uriSlide3.png'

import nikitaSlide1 from '../../../../assets/images/pictures/nikitaSlide1.png'

import marinaSlide1 from '../../../../assets/images/pictures/marinaSlide1.png'
import marinaSlide2 from '../../../../assets/images/pictures/marinaSlide2.png'

import olegSlide1 from '../../../../assets/images/pictures/olegSlide1.png'
import olegSlide2 from '../../../../assets/images/pictures/olegSlide2.png'


const PeoplesResults = () => {
    const swiperRef = useRef(null)
    const isTablet1135 = useMediaQuery({ maxWidth: 1135 })
    const isTablet1050 = useMediaQuery({ maxWidth: 1051 })
    const isTablet850 = useMediaQuery({ maxWidth: 851 })
    const isTablet750 = useMediaQuery({ maxWidth: 751 })

    const getSlidesPerView = () => {
        if (isTablet850) return 1
        if (isTablet1135) return 2
        return 3
    }

    return (
        <div className="peoplesResultsWrapper">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]} 
                slidesPerView={getSlidesPerView()}
                spaceBetween={20}
                loop={true}
                autoplay={{
                    delay: 5000, 
                    disableOnInteraction: false, 
                }}
                navigation={{
                    prevEl: `.peoples-prev`,
                    nextEl: `.peoples-next`,
                }}
                pagination={{
                    el: '.peoples-pagination',
                    clickable: true,
                }}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                className={`peoplesResultsSwiper ${
                    isTablet1135 ? 'tablet1135' : '', 
                    isTablet1050 ? 'tablet1050' : '', 
                    isTablet850 ? 'tablet850' : '',
                    isTablet750 ? 'tablet750' : ''
                }`}
            >
                <SwiperSlide>
                    <PeopleResultBanner 
                        slides={[anastasiaSlide1, anastasiaSlide2, anastasiaSlide3]}
                        name={'Анастасия'} 
                        weight={'8'} 
                        age={'35 лет'} 
                        review={'Никита, проект крутой! Сегодня супер минимальный вес, такого года 3 не было! Это дело нужно отметить'}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <PeopleResultBanner 
                        slides={[alekseiSlide1, alekseiSlide2, alekseiSlide3]}
                        name={'Алексей'} 
                        weight={'12,5'} 
                        age={'37 лет'} 
                        review={'В ходе совместной работы получил много новой для себя информации о том. Сильно улучшилась фору и ощущения от жизни...'}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <PeopleResultBanner 
                        slides={[vladimirSlide1, vladimirSlide2, vladimirSlide3]}
                        name={'Владимир'} 
                        weight={'8'} 
                        age={'43 года'} 
                        review={'Я по весу уже меньше, чем планировал. Скоро сформулирую вопросы, как дальше тормозить похудение)) Спасибо, очень...'}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <PeopleResultBanner 
                        slides={[elenaSlide1, elenaSlide2, elenaSlide3]}
                        name={'Елена'} 
                        weight={'7'} 
                        age={'39 лет'} 
                        review={'Десять лет назад худела но потом случился откат, после потока вес стабилизировался'}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <PeopleResultBanner 
                        slides={[kristinaSlide1, kristinaSlide2]}
                        name={'Кристина'} 
                        weight={'32'} 
                        age={'21 год'} 
                        review={'Спасибо большое, что сдвинул меня с мертвой точки. Самостоятельно похудеть не получалось. Из 52 размера стала 46...'}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <PeopleResultBanner 
                        slides={[uriSlide1, uriSlide2, uriSlide3]}
                        name={'Юрий'} 
                        weight={'31'} 
                        age={'43 года'} 
                        review={'Одно из лучших решений в жизни было: обратиться к Никите, чтобы похудеть, это изменило мою жизнь в лучшую сторону.'}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <PeopleResultBanner 
                        slides={[nikitaSlide1]}
                        name={'Никита'} 
                        weight={'14'} 
                        age={'25 лет'} 
                        review={'Я вкладывал и продолжаю вкладывать время, усилия и деньги в этот проект, потому, что он реально помогает людям'}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <PeopleResultBanner 
                        slides={[olegSlide1, olegSlide2]}
                        name={'Олег'} 
                        weight={'12,5'} 
                        age={'49 лет'} 
                        review={'Я вкладывал и продолжаю вкладывать время, усилия и деньги в этот проект, потому, что он реально помогает людям'}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <PeopleResultBanner 
                        slides={[marinaSlide1, marinaSlide2]}
                        name={'Марина'} 
                        weight={'4,5'} 
                        age={'36 лет'} 
                        review={'Я получила ровно то, чего и хотела. Минус килограммы и улучшение отражения в зеркале - как неизбежные последствия.'}
                    />
                </SwiperSlide>
            </Swiper>

            <button className="peoples-prev nav-btn">
                <img src={leftArrowBlack} alt="prev"/>
            </button>
            <button className="peoples-next nav-btn">
                <img src={rightArrowBlack} alt="next"/>
            </button>

            <div className="peoples-pagination"></div>
        </div>
    )
}

export default PeoplesResults