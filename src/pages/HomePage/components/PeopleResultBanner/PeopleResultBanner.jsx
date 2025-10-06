import '../PeopleResultBanner/PeopleResultBanner.scss'
import '../PeopleResultBanner/PeopleResultBanner1135.scss'
import ResultBannerText from '../ResultBannerText/ResultBannerText'
import { useRef } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

import leftArrow from '../../../../assets/images/icons/sliderLeftArrow.svg'
import rightArrow from '../../../../assets/images/icons/sliderRightArrow.svg'

const PeopleResultBanner = ({ slides, name, avatar, weight, age, review }) => {
    const swiperRef = useRef(null)
    const sliderId = name.replace(/\s+/g, '-')

    return (
        <div className="peopleResultBanner">
            <Swiper
                modules={[Navigation]}
                navigation={{
                    prevEl: `.custom-prev-${sliderId}`,
                    nextEl: `.custom-next-${sliderId}`,
                }}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper
                }}
                slidesPerView={1}
                spaceBetween={0}
                className="peopleResultSwiper"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <img src={slide} alt="" className="peopleResultBannerSlide" loading="lazy"/>
                    </SwiperSlide>
                ))}
            </Swiper>

            <button className={`custom-prev-${sliderId} nav-btn nav-btn-prev`}>
                <img src={leftArrow} alt="prev"/>
            </button>
            <button className={`custom-next-${sliderId} nav-btn nav-btn-next`}>
                <img src={rightArrow} alt="next"/>
            </button>

            <ResultBannerText 
                name={name} 
                avatar={avatar} 
                weight={weight} 
                age={age} 
                review={review} 
            />
        </div>
    )
}

export default PeopleResultBanner