import '../ReviewsSection/ReviewsSection.scss'
import ReviewsSectionBanner from '../ReviewsSectionBanner/ReviewsSectionBanner';
import ReviewsSectionBanners from '../ReviewsSectionBanners/ReviewsSectionBanners';
import { useState } from 'react';

// import reviewNataliaMihailova from '../../../../assets/images/pictures/reviewNataliaMihailova.png'
import reviewNataliaMihailova from '../../../../assets/images/pictures/reviewNataliaMihailova.svg'
// import reviewVladimirPotatuev from '../../../../assets/images/pictures/reviewVladimirPotatuev.png'
import reviewVladimirPotatuev from '../../../../assets/images/pictures/reviewVladimirPotatuev.svg'
// import reviewGalinaBaude from '../../../../assets/images/pictures/reviewGalinaBaude.png'
import reviewGalinaBaude from '../../../../assets/images/pictures/reviewGalinaBaude.svg'
// import reviewOlecaBogdanova from '../../../../assets/images/pictures/reviewOlecaBogdanova.png'
import reviewOlecaBogdanova from '../../../../assets/images/pictures/reviewOlecaBogdanova.svg'
// import reviewMariaTuycina from '../../../../assets/images/pictures/reviewMariaTuycina.png'
import reviewMariaTuycina from '../../../../assets/images/pictures/reviewMariaTuycina.svg'
// import reviewKristinaKopatkova from '../../../../assets/images/pictures/reviewKristinaKopatkova.png'
import reviewKristinaKopatkova from '../../../../assets/images/pictures/reviewKristinaKopatkova.svg'
// import reviewAnastasiaGuseva from '../../../../assets/images/pictures/reviewAnastasiaGuseva.png'
import reviewAnastasiaGuseva from '../../../../assets/images/pictures/reviewAnastasiaGuseva.svg'
// import reviewMarinaMovsesova from '../../../../assets/images/pictures/reviewMarinaMovsesova.png'
import reviewMarinaMovsesova from '../../../../assets/images/pictures/reviewMarinaMovsesova.svg'
// import reviewUriGorshkov from '../../../../assets/images/pictures/reviewUriGorshkov.png'
import reviewUriGorshkov from '../../../../assets/images/pictures/reviewUriGorshkov.svg'
// import reviewIrinaProtasova from '../../../../assets/images/pictures/reviewIrinaProtasova.png'
import reviewIrinaProtasova from '../../../../assets/images/pictures/reviewIrinaProtasova.svg'
// import reviewElenaAlekseeva from '../../../../assets/images/pictures/reviewElenaAlekseeva.png'
import reviewElenaAlekseeva from '../../../../assets/images/pictures/reviewElenaAlekseeva.svg'
// import reviewUriIvanov from '../../../../assets/images/pictures/reviewUriIvanov.png'
import reviewUriIvanov from '../../../../assets/images/pictures/reviewUriIvanov.svg'
// import reviewUliaShevcova from '../../../../assets/images/pictures/reviewUliaShevcova.png'
import reviewUliaShevcova from '../../../../assets/images/pictures/reviewUliaShevcova.svg'
// import reviewValentinaZaharova from '../../../../assets/images/pictures/reviewValentinaZaharova.png'
import reviewValentinaZaharova from '../../../../assets/images/pictures/reviewValentinaZaharova.svg'
// import reviewAllaMonahova from '../../../../assets/images/pictures/reviewAllaMonahova.png'
import reviewAllaMonahova from '../../../../assets/images/pictures/reviewAllaMonahova.svg'
// import reviewNikitaKudravcev from '../../../../assets/images/pictures/reviewNikitaKudravcev.png'
import reviewNikitaKudravcev from '../../../../assets/images/pictures/reviewNikitaKudravcev.svg'
// import reviewNataliaGrigoreva from '../../../../assets/images/pictures/reviewNataliaGrigoreva.png'
import reviewNataliaGrigoreva from '../../../../assets/images/pictures/reviewNataliaGrigoreva.svg'
// import reviewElenaBelishkina from '../../../../assets/images/pictures/reviewElenaBelishkina.png'
import reviewElenaBelishkina from '../../../../assets/images/pictures/reviewElenaBelishkina.svg'
// import reviewElenaKirichenko from '../../../../assets/images/pictures/reviewElenaKirichenko.png'
import reviewElenaKirichenko from '../../../../assets/images/pictures/reviewElenaKirichenko.svg'
// import reviewVladimirParamonov from '../../../../assets/images/pictures/reviewVladimirParamonov.png'
import reviewVladimirParamonov from '../../../../assets/images/pictures/reviewVladimirParamonov.svg'
// import reviewAlekseiDrozdov from '../../../../assets/images/pictures/reviewAlekseiDrozdov.png'
import reviewAlekseiDrozdov from '../../../../assets/images/pictures/reviewAlekseiDrozdov.svg'
// import reviewAlekseiAkudinov from '../../../../assets/images/pictures/reviewAlekseiAkudinov.png'
import reviewAlekseiAkudinov from '../../../../assets/images/pictures/reviewAlekseiAkudinov.svg'
// import reviewElenaBic from '../../../../assets/images/pictures/reviewElenaBic.png'
import reviewElenaBic from '../../../../assets/images/pictures/reviewElenaBic.svg'
// import reviewRomanChatanov from '../../../../assets/images/pictures/reviewRomanChatanov.png'
import reviewRomanChatanov from '../../../../assets/images/pictures/reviewRomanChatanov.svg'

import avatarNataliaMihailova from '../../../../assets/images/pictures/avatarNataliaMihailova.png'
import avatarVladimirPotatuev from '../../../../assets/images/pictures/avatarVladimirPotatuev.png'
import avatarGalinaBaude from '../../../../assets/images/pictures/avatarGalinaBaude.png'
import avatarOlecaBogdanova from '../../../../assets/images/pictures/avatarOlecaBogdanova.png'
import avatarMariaTuycina from '../../../../assets/images/pictures/avatarMariaTuycina.png'
import avatarKristinaKopatkova from '../../../../assets/images/pictures/avatarKristinaKopatkova.png'
import avatarAnastasiaGuseva from '../../../../assets/images/pictures/avatarAnastasiaGuseva.png'
import avatarMarinaMovsesova from '../../../../assets/images/pictures/avatarMarinaMovsesova.png'
import avatarUriGorshkov from '../../../../assets/images/pictures/avatarUriGorshkov.png'
import avatarIrinaProtasova from '../../../../assets/images/pictures/avatarIrinaProtasova.png'
import avatarElenaAlekseeva from '../../../../assets/images/pictures/avatarElenaAlekseeva.png'
import avatarUriIvanov from '../../../../assets/images/pictures/avatarUriIvanov.png'
import avatarUliaShevcova from '../../../../assets/images/pictures/avatarUliaShevcova.png'
import avatarValentinaZaharova from '../../../../assets/images/pictures/avatarValentinaZaharova.png'
import avatarAllaMonahova from '../../../../assets/images/pictures/avatarAllaMonahova.png'
import avatarNikitaKudravcev from '../../../../assets/images/pictures/avatarNikitaKudravcev.png'
import avatarNataliaGrigoreva from '../../../../assets/images/pictures/avatarNataliaGrigoreva.png'
import avatarElenaBelishkina from '../../../../assets/images/pictures/avatarElenaBelishkina.png'
import avatarElenaKirichenko from '../../../../assets/images/pictures/avatarElenaKirichenko.png'
import avatarVladimirParamonov from '../../../../assets/images/pictures/avatarVladimirParamonov.png'
import avatarAlekseiDrozdov from '../../../../assets/images/pictures/avatarAlekseiDrozdov.png'
import avatarAlekseiAkudinov from '../../../../assets/images/pictures/avatarAlekseiAkudinov.png'
import avatarElenaBic from '../../../../assets/images/pictures/avatarElenaBic.png'
import avatarRomanChatanov from '../../../../assets/images/pictures/avatarRomanChatanov.png'
import ReviewsSectionButton from '../ReviewsSectionButton/ReviewsSectionButton';

const ReviewsSection = () => {

    const [showAll, setShowAll] = useState(false);

    const characteristicNataliaMihailova = [
        { name: 'Цель', value: '-5кг' },
        { name: 'Результат', value: '-3 см / -3 кг' },
        { name: 'Срок', value: '12 недель' },
    ]

    const characteristicVladimirPotatuev = [
        { name: 'Цель', value: '-3кг' },
        { name: 'Результат', value: '-8 см / -8,1 кг' },
        { name: 'Срок', value: '12 недель' },
    ]

    const characteristicGalinaBaude = [
        { name: 'Цель', value: '-13кг' },
        { name: 'Результат', value: '-5 см / -6 кг' },
        { name: 'Срок', value: '12 недель' },
    ]

    const characteristicOlecaBogdanova = [
        { name: 'Цель', value: '-5кг' },
        { name: 'Результат', value: '-3 см / -4,1 кг' },
        { name: 'Срок', value: '12 недель' },
    ]

    const characteristicMariaTuycina = [
        { name: 'Цель', value: '-6кг' },
        { name: 'Результат', value: '-9 см / -16 кг' },
        { name: 'Срок', value: '12 недель' },
    ]

    const characteristicKristinaKopatkova = [
        { name: 'Цель', value: '-25кг' },
        { name: 'Результат', value: '-21 см / -32 кг' },
        { name: 'Срок', value: '52 недели' },
    ]

    const characteristicAnastasiaGuseva = [
        { name: 'Цель', value: '-7кг' },
        { name: 'Результат', value: '-5 см / -8 кг' },
        { name: 'Срок', value: '12 недель' },
    ]

    const characteristicMarinaMovsesova = [
        { name: 'Цель', value: '-3,5кг' },
        { name: 'Результат', value: '-2 см / -4,5 кг' },
        { name: 'Срок', value: '12 недель' },
    ]

    const characteristicUriGorshkov = [
        { name: 'Цель', value: '-20кг' },
        { name: 'Результат', value: '-20 см / -31 кг' },
        { name: 'Срок', value: '34 недели' },
    ]

    const characteristicIrinaProtasova = [
        { name: 'Цель', value: '-9кг' },
        { name: 'Результат', value: '-2 см / -3,5 кг' },
        { name: 'Срок', value: '12 недель' },
    ]

    const characteristicElenaAlekseeva = [
        { name: 'Цель', value: '-4кг' },
        { name: 'Результат', value: '-2 см / -3,2 кг' },
        { name: 'Срок', value: '12 недель' },
    ]

    const characteristicUriIvanov = [
        { name: 'Цель', value: '-5кг' },
        { name: 'Результат', value: '-5 см / -5,5 кг' },
        { name: 'Срок', value: '12 недель' },
    ]

    const characteristicUliaShevcova = [
        { name: 'Цель', value: '-22кг' },
        { name: 'Результат', value: '-16 см / -18,5 кг' },
        { name: 'Срок', value: '24 недели' },
    ]

    const characteristicValentinaZaharova = [
        { name: 'Цель', value: '-5кг' },
        { name: 'Результат', value: '-5 см / -3 кг' },
        { name: 'Срок', value: '12 недель' },
    ]

    const characteristicAllaMonahova = [
        { name: 'Цель', value: '-12кг' },
        { name: 'Результат', value: '-3 см / -2 кг' },
        { name: 'Срок', value: '12 недель' },
    ]

    const characteristicNikitaKudravcev = [
        { name: 'Цель', value: '-10кг' },
        { name: 'Результат', value: '-8 см / -10 кг' },
        { name: 'Срок', value: '24 недели' },
    ]

    const characteristicNataliaGrigoreva = [
        { name: 'Цель', value: '-9кг' },
        { name: 'Результат', value: '-7 см / -7,5 кг' },
        { name: 'Срок', value: '12 недель' },
    ]

    const characteristicElenaBelishkina = [
        { name: 'Цель', value: '-10кг' },
        { name: 'Результат', value: '-7 см / -6,7 кг' },
        { name: 'Срок', value: '12 недель' },
    ]

    const characteristicElenaKirichenko = [
        { name: 'Цель', value: '-8кг' },
        { name: 'Результат', value: '-4 см / -3,6 кг' },
        { name: 'Срок', value: '12 недель' },
    ]

    const characteristicVladimirParamonov = [
        { name: 'Цель', value: '-10кг' },
        { name: 'Результат', value: '-9 см / -9 кг' },
        { name: 'Срок', value: '12 недель' },
    ]

    const characteristicAlekseiDrozdov = [
        { name: 'Цель', value: '-17кг' },
        { name: 'Результат', value: '-10 см / -18 кг' },
        { name: 'Срок', value: '12 недель' },
    ]

    const characteristicAlekseiAkudinov = [
        { name: 'Цель', value: '-10кг' },
        { name: 'Результат', value: '-8 см / -12,5 кг' },
        { name: 'Срок', value: '16 недель' },
    ]

    const characteristicElenaBic = [
        { name: 'Цель', value: '-8кг' },
        { name: 'Результат', value: '-4 см / -6,5 кг' },
        { name: 'Срок', value: '12 недель' },
    ]

    const characteristicRomanChatanov = [
        { name: 'Цель', value: '-15кг' },
        { name: 'Результат', value: '-7 см / -15 кг' },
        { name: 'Срок', value: '12 недель' },
    ]

    const allBanners = [
        <ReviewsSectionBanners 
            key={1}
            child1={<ReviewsSectionBanner 
                review={reviewNataliaMihailova}
                avatar={avatarNataliaMihailova}
                name={'Наталия Михайлова'}
                age={'39 лет'}
                items={characteristicNataliaMihailova}
                schedule={'5/2 с 9:00 до 18:00'}
            />}
            child2={<ReviewsSectionBanner 
                review={reviewVladimirPotatuev}
                avatar={avatarVladimirPotatuev}
                name={'Владимир Потатуев'}
                age={'43 года'}
                items={characteristicVladimirPotatuev}
                schedule={'5/2 с 9:00 до 19:00'}
            />}
            child3={<ReviewsSectionBanner 
                review={reviewGalinaBaude}
                avatar={avatarGalinaBaude}
                name={'Галина Бауде'}
                age={'43 года'}
                items={characteristicGalinaBaude}
                schedule={'свободный, фрилансер'}
            />}
        />,
        <ReviewsSectionBanners 
            key={2}
            child1={<ReviewsSectionBanner 
                review={reviewOlecaBogdanova}
                avatar={avatarOlecaBogdanova}
                name={'Олеся Богданова'}
                age={'28 лет'}
                items={characteristicOlecaBogdanova}
                schedule={'7/0'}
            />}
            child2={<ReviewsSectionBanner 
                review={reviewRomanChatanov}
                avatar={avatarRomanChatanov}
                name={'Олеся Богданова'}
                age={'28 лет'}
                items={characteristicRomanChatanov}
                schedule={'7/0'}
            />}
            child3={<ReviewsSectionBanner 
                review={reviewMariaTuycina}
                avatar={avatarMariaTuycina}
                name={'Мария Туйцына'}
                age={'71 год'}
                items={characteristicMariaTuycina}
                schedule={'сезонная занятость'}
            />}
        />,
        <ReviewsSectionBanners 
            key={3}
            child1={<ReviewsSectionBanner 
                review={reviewKristinaKopatkova}
                avatar={avatarKristinaKopatkova}
                name={'Кристина Копаткова'}
                age={'21 год'}
                items={characteristicKristinaKopatkova}
                schedule={'5/2 с 9:00 до 19:00'}
            />}
            child2={<ReviewsSectionBanner 
                review={reviewAnastasiaGuseva}
                avatar={avatarAnastasiaGuseva}
                name={'Анастасия Гусева'}
                age={'35 лет'}
                items={characteristicAnastasiaGuseva}
                schedule={'5/2 с 10:00 до 19:00'}
            />}
            child3={<ReviewsSectionBanner 
                review={reviewMarinaMovsesova}
                avatar={avatarMarinaMovsesova}
                name={'Марина Мовсесова'}
                age={'36 лет'}
                items={characteristicMarinaMovsesova}
                schedule={'5/2 с 10:00 до 19:00'}
            />}
        />,
        <ReviewsSectionBanners 
            key={4}
            child1={<ReviewsSectionBanner 
                review={reviewUriGorshkov}
                avatar={avatarUriGorshkov}
                name={'Юрий Горшков'}
                age={'42 года'}
                items={characteristicUriGorshkov}
                schedule={'Сезонна занятость'}
            />}
            child2={<ReviewsSectionBanner 
                review={reviewIrinaProtasova}
                avatar={avatarIrinaProtasova}
                name={'Ирина Протасова'}
                age={'45 лет'}
                items={characteristicIrinaProtasova}
                schedule={'5/2 с 9:00 до 18:00'}
            />}
            child3={<ReviewsSectionBanner 
                review={reviewElenaAlekseeva}
                avatar={avatarElenaAlekseeva}
                name={'Елена Алексеева'}
                age={'35 лет'}
                items={characteristicElenaAlekseeva}
                schedule={'5/2 с 9:00 до 17:00'}
            />}
        />,
        <ReviewsSectionBanners 
            key={5}
            child1={<ReviewsSectionBanner 
                review={reviewUriIvanov}
                avatar={avatarUriIvanov}
                name={'Юрий Иванов'}
                age={'39 лет'}
                items={characteristicUriIvanov}
                schedule={'«плавающая занятость»'}
            />}
            child2={<ReviewsSectionBanner 
                review={reviewUliaShevcova}
                avatar={avatarUliaShevcova}
                name={'Юлия Шевцова'}
                age={'43 года'}
                items={characteristicUliaShevcova}
                schedule={'5/2 с 9:00 до 18:00'}
            />}
            child3={<ReviewsSectionBanner 
                review={reviewValentinaZaharova}
                avatar={avatarValentinaZaharova}
                name={'Валентина Захарова'}
                age={'41 год'}
                items={characteristicValentinaZaharova}
                schedule={'5/2 с 9:00 до 18:00'}
            />}
        />,
        <ReviewsSectionBanners 
            key={6}
            child1={<ReviewsSectionBanner 
                review={reviewAllaMonahova}
                avatar={avatarAllaMonahova}
                name={'Алла Монахова'}
                age={'56 лет'}
                items={characteristicAllaMonahova}
                schedule={'на дому, не постоянный'}
            />}
            child2={<ReviewsSectionBanner 
                review={reviewNikitaKudravcev}
                avatar={avatarNikitaKudravcev}
                name={'Никита Кудрявцев'}
                age={'28 лет'}
                items={characteristicNikitaKudravcev}
                schedule={'5/2 с 9:00 до 18:00'}
            />}
            child3={<ReviewsSectionBanner 
                review={reviewNataliaGrigoreva}
                avatar={avatarNataliaGrigoreva}
                name={'Наталия Григорьева'}
                age={'37 лет'}
                items={characteristicNataliaGrigoreva}
                schedule={'5/2 с 8:00 до 17:00'}
            />}
        />,
        <ReviewsSectionBanners 
            key={7}
            child1={<ReviewsSectionBanner 
                review={reviewElenaBelishkina}
                avatar={avatarElenaBelishkina}
                name={'Елена Белышкина'}
                age={'39 лет'}
                items={characteristicElenaBelishkina}
                schedule={'Самозанятая'}
            />}
            child2={<ReviewsSectionBanner 
                review={reviewElenaKirichenko}
                avatar={avatarElenaKirichenko}
                name={'Елена Кириченко'}
                age={'36 лет'}
                items={characteristicElenaKirichenko}
                schedule={'В декрете'}
            />}
            child3={<ReviewsSectionBanner 
                review={reviewVladimirParamonov}
                avatar={avatarVladimirParamonov}
                name={'Владимир Парамонов'}
                age={'42 года'}
                items={characteristicVladimirParamonov}
                schedule={'каждый день по 9-12 час.'}
            />}
        />,
        <ReviewsSectionBanners 
            key={8}
            child1={<ReviewsSectionBanner 
                review={reviewAlekseiDrozdov}
                avatar={avatarAlekseiDrozdov}
                name={'Алексей Дроздов'}
                age={'37 лет'}
                items={characteristicAlekseiDrozdov}
                schedule={'5/2 с 9:00 до 18:00'}
            />}
            child2={<ReviewsSectionBanner 
                review={reviewAlekseiAkudinov}
                avatar={avatarAlekseiAkudinov}
                name={'Алексей Акудинов'}
                age={'37 лет'}
                items={characteristicAlekseiAkudinov}
                schedule={'гибкий + командировки'}
            />}
            child3={<ReviewsSectionBanner 
                review={reviewElenaBic}
                avatar={avatarElenaBic}
                name={'Елена Бик'}
                age={'35 лет'}
                items={characteristicElenaBic}
                schedule={'5/2 с 9:00 до 17:00'}
            />}
        />
    ];

    const visibleBanners = showAll ? allBanners : allBanners.slice(0, 4);

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    return(
        <section className='reviewsSection'>
            <div className='container'>
                {visibleBanners}
                {allBanners.length > 4 && (
                    <ReviewsSectionButton 
                        onClick={toggleShowAll} 
                        showAll={showAll}
                    />
                )}
            </div>
        </section>
    )
}

export default ReviewsSection;