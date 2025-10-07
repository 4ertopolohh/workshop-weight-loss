import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import '../HowDoesSection/HowDoesSection.scss'
import '../HowDoesSection/HowDoesSection1050.scss'
import '../HowDoesSection/HowDoesSection750.scss'
import '../HowDoesSection/HowDoesSectionMobile.scss'

import howDoesSectionTitleLogo from '../../../../assets/images/pictures/howDoesSectionTitleLogo.svg'
import howDoesSectionTitleIcon from '../../../../assets/images/pictures/howDoesSectionTitleIcon.svg'
import FormatBanner from '../FormatBanner/FormatBanner'
import HowDoesBanner from '../HowDoesBanner/HowDoesBanner'
import cameraIcon from '../../../../assets/images/icons/cameraIcon.svg'
import ruletIcon from '../../../../assets/images/icons/ruletIcon.svg'
import individuaIcon from '../../../../assets/images/icons/individualIcon.svg'
import planIcon from '../../../../assets/images/icons/planIcon.svg'
import supportIcon from '../../../../assets/images/icons/supportIcon.svg'
import nikitaAvatar from '../../../../assets/images/pictures/nikitaAvatar.png'
import starEmoji from '../../../../assets/images/pictures/starEmoji.png'

import HowDoesColorBanner from '../HowDoesColorBanner/HowDoesColorBanner'
import ButtonScroll from '../ButtonScroll/ButtonScroll'
import LinkPageButton from '../LinkPageButton/LinkPageButton'

const HowDoesSection = () => {

    const formatBanneritems = [
        { text: 'Видео с теорией на каждую неделю', subtitle: '' },
        { text: 'Прямые эфиры 1 раз в неделю.', subtitle: '' },
        { text: 'Простые задания на неделю.', subtitle: '' },
        { text: 'Поддержка в Telegram-чате.', subtitle: '' },
        { text: 'Длительность: 12 недель.', subtitle: '' },
        { text: 'Доступ ко всем материалам 3 месяца после окончания практикума.', subtitle: '' }
    ]

    const isTablet1050 = useMediaQuery({ maxWidth: 1051 })
    const isTablet750 = useMediaQuery({ maxWidth: 751 })
    const isMobile = useMediaQuery({ maxWidth: 451 })

    return(
        <section className='howDoesSection'>
            {isTablet1050 ? (
                <div className='container'>
                    <div className='howDoesSectionTitle'>
                        <h1>
                            Как
                            <span className='logo'>
                                <img src={howDoesSectionTitleLogo} alt="" loading='lazy' className='logo'/>
                            </span>
                        </h1>
                        <h1>
                            <span className='icon'>
                                <img src={howDoesSectionTitleIcon} alt="" loading='lazy' className='icon'/>
                            </span>
                            проходит
                        </h1>
                        <h1>
                            пратикум
                        </h1>
                    </div>
                    {isTablet750 ? (
                        <>
                            {isMobile ? (
                                <>
                                    <FormatBanner 
                                        title={'Формат онлайн.'} 
                                        formatBanneritems={formatBanneritems} 
                                        width={'100%'} 
                                        height={310} 
                                        containerWidth={482}
                                        icon={cameraIcon}
                                        id='howDoesSection'
                                    />
                                    <HowDoesBanner 
                                        icon={cameraIcon}
                                        title={'Теория и практические шаги для похудения на 13 прямых эфирах и 12 видео уроках.'}
                                        description={`Эксперт практикума Никита Агапов подробно расскажет о теории питания, добавках и почему можно есть любые продукты и худеть.ㅤㅤㅤㅤㅤㅤㅤㅤㅤВы узнаете о физиологии похудения и сможете составить подходящий именно вам рацион питания и подобрать индивидуальную физическую нагрузку.ㅤㅤㅤㅤㅤㅤㅤㅤВсе эфиры будут доступны в записи.`}
                                        width={'100%'}
                                        height={426}
                                        containerWidth={482}
                                    />
                                    <HowDoesBanner 
                                        icon={ruletIcon}
                                        title={'Пошаговый алгоритм действий для снижения веса.'}
                                        description={'Который будет работать даже после окончания практикума. Мы —  про здоровье, а не только про лишние килограммы.'}
                                        width={'100%'}
                                        height={251}
                                        containerWidth={482}
                                    />

                                    <HowDoesColorBanner 
                                        title={'Никита Агапов'}
                                        subtitle={'Основатель практикума'}
                                        description={'«Это не просто список советов и универсальных диет!»'}
                                        icon={nikitaAvatar}
                                        baseColor={'#2471FF'}
                                        background={'#F3F8FF'}
                                        width={'100%'}
                                        height={234}
                                    >
                                        <LinkPageButton
                                            width={'95%'}
                                            height={62}
                                            background={'linear-gradient(90deg, #4dafff 0%, #1a87ff 100%)'}
                                            text={'Программа практикума'}
                                            color={'#fff'}
                                            fontSize={18}
                                            fontWeight={600}
                                            page="/program" 
                                        />  
                                    </HowDoesColorBanner>
                                    <HowDoesBanner 
                                        icon={individuaIcon}
                                        title={'Дадим индивидуальные рекомендации.'}
                                        description={'Разберем ваше питание и тренировки, на основе этого дадим индивидуальные рекомендации и ответим на вопросы.'}
                                        width={'100%'}
                                        height={218}
                                        containerWidth={302}
                                    />
                                    <HowDoesBanner 
                                        icon={planIcon}
                                        title={'План шагов на каждую неделю.'}
                                        description={'Для эффективного похудения и сохранения мотивации каждую неделю мы даем задания, которые проверяет куратор практикума.'}
                                        width={'100%'}
                                        height={218}
                                        containerWidth={302}
                                    />
                                    <HowDoesBanner 
                                        icon={supportIcon}
                                        title={'Поддержка и помощь.'}
                                        description={'В течении всего практикума, отвечаем на любые вопросы на онлайн эфирах и в Telegram-чате, мы всегда готовы вам помочь и поддержать.'}
                                        width={'100%'}
                                        height={218}
                                        containerWidth={302}
                                    />
                                    <HowDoesColorBanner
                                        title={'Бонус!'}
                                        description={'Дополнительные материалы для улучшения фигуры и физической формы с помощью конструктора фитнес программ.'}
                                        icon={starEmoji}
                                        baseColor={'#FF6B16'}
                                        background={'#FFF4ED'}
                                        width={'100%'}
                                        height={190}
                                    />
                                    <ButtonScroll 
                                        width={'100%'}
                                        height={62}
                                        background={'linear-gradient(180deg, #FF8C00 0%, #FF4500 100%)'}
                                        text={'Записаться на практикум'}
                                        color={'#fff'}
                                        fontSize={18}
                                        fontWeight={600}
                                        pixels={2500}
                                        direction={'down'}
                                    />
                                </>
                            ) : (
                                <>
                                    <FormatBanner 
                                        title={'Формат онлайн.'} 
                                        formatBanneritems={formatBanneritems} 
                                        width={'100%'} 
                                        height={310} 
                                        containerWidth={482}
                                        icon={cameraIcon}
                                        id='howDoesSection'
                                    />
                                    <HowDoesBanner 
                                        icon={cameraIcon}
                                        title={'Теория и практические шаги для похудения на 13 прямых эфирах и 12 видео уроках.'}
                                        description={`Эксперт практикума Никита Агапов подробно расскажет о теории питания, добавках и почему можно есть любые продукты и худеть.ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤВы узнаете о физиологии похудения и сможете составить подходящий именно вам рацион питания и подобрать индивидуальную физическую нагрузку.ㅤㅤㅤㅤㅤㅤㅤㅤㅤ Все эфиры будут доступны в записи.`}
                                        width={'100%'}
                                        height={344}
                                        containerWidth={482}
                                    />
                                    <HowDoesBanner 
                                        icon={ruletIcon}
                                        title={'Пошаговый алгоритм действий для снижения веса.'}
                                        description={'Который будет работать даже после окончания практикума. Мы —  про здоровье, а не только про лишние килограммы.'}
                                        width={'100%'}
                                        height={200}
                                        containerWidth={482}
                                    />

                                    <HowDoesColorBanner 
                                        title={'Никита Агапов'}
                                        subtitle={'Основатель практикума'}
                                        description={'«Это не просто список советов и универсальных диет!»'}
                                        icon={nikitaAvatar}
                                        baseColor={'#2471FF'}
                                        background={'#F3F8FF'}
                                        width={'100%'}
                                        height={277}
                                    >
                                        <LinkPageButton
                                            width={'100%'}
                                            height={62}
                                            background={'linear-gradient(90deg, #4dafff 0%, #1a87ff 100%)'}
                                            text={'Программа практикума'}
                                            color={'#fff'}
                                            fontSize={18}
                                            fontWeight={600}
                                            page="/program" 
                                        />  
                                    </HowDoesColorBanner>
                                    <HowDoesBanner 
                                        icon={individuaIcon}
                                        title={'Дадим индивидуальные рекомендации.'}
                                        description={'Разберем ваше питание и тренировки, на основе этого дадим индивидуальные рекомендации и ответим на вопросы.'}
                                        width={'100%'}
                                        height={259}
                                        containerWidth={302}
                                    />
                                    <HowDoesBanner 
                                        icon={planIcon}
                                        title={'План шагов на каждую неделю.'}
                                        description={'Для эффективного похудения и сохранения мотивации каждую неделю мы даем задания, которые проверяет куратор практикума.'}
                                        width={'100%'}
                                        height={259}
                                        containerWidth={302}
                                    />
                                    <HowDoesBanner 
                                        icon={supportIcon}
                                        title={'Поддержка и помощь.'}
                                        description={'В течении всего практикума, отвечаем на любые вопросы на онлайн эфирах и в Telegram-чате, мы всегда готовы вам помочь и поддержать.'}
                                        width={'100%'}
                                        height={259}
                                        containerWidth={302}
                                    />
                                    <HowDoesColorBanner
                                        title={'Бонус!'}
                                        description={'Дополнительные материалы для улучшения фигуры и физической формы с помощью конструктора фитнес программ.'}
                                        icon={starEmoji}
                                        baseColor={'#FF6B16'}
                                        background={'#FFF4ED'}
                                        width={'100%'}
                                        height={277}
                                    >
                                        <ButtonScroll 
                                            width={'100%'}
                                            height={62}
                                            background={'linear-gradient(180deg, #FF8C00 0%, #FF4500 100%)'}
                                            text={'Записаться на практикум'}
                                            color={'#fff'}
                                            fontSize={18}
                                            fontWeight={600}
                                            pixels={1700}
                                            direction={'down'}
                                        />
                                    </HowDoesColorBanner>
                                </>
                            )}
                        </>
                    ) : (
                        <>
                            <FormatBanner 
                                title={'Формат онлайн.'} 
                                formatBanneritems={formatBanneritems} 
                                width={'60%'} 
                                height={310} 
                                containerWidth={482}
                                icon={cameraIcon}
                                id='howDoesSection'
                            />
                            <HowDoesBanner 
                                icon={cameraIcon}
                                title={'Теория и практические шаги для похудения на 13 прямых эфирах и 12 видео уроках.'}
                                description={`Эксперт практикума Никита Агапов подробно расскажет о теории питания, добавках и почему можно есть любые продукты и худеть.ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤВы узнаете о физиологии похудения и сможете составить подходящий именно вам рацион питания и подобрать индивидуальную физическую нагрузку.ㅤㅤㅤㅤㅤㅤㅤㅤㅤ Все эфиры будут доступны в записи.`}
                                width={'60%'}
                                height={344}
                                containerWidth={482}
                            />
                            <HowDoesBanner 
                                icon={ruletIcon}
                                title={'Пошаговый алгоритм действий для снижения веса.'}
                                description={'Который будет работать даже после окончания практикума. Мы —  про здоровье, а не только про лишние килограммы.'}
                                width={'60%'}
                                height={200}
                                containerWidth={482}
                            />

                            <HowDoesColorBanner 
                                title={'Никита Агапов'}
                                subtitle={'Основатель практикума'}
                                description={'«Это не просто список советов и универсальных диет!»'}
                                icon={nikitaAvatar}
                                baseColor={'#2471FF'}
                                background={'#F3F8FF'}
                                width={700}
                                height={277}
                            >
                                <LinkPageButton
                                    width={'100%'}
                                    height={62}
                                    background={'linear-gradient(90deg, #4dafff 0%, #1a87ff 100%)'}
                                    text={'Программа практикума'}
                                    color={'#fff'}
                                    fontSize={18}
                                    fontWeight={600}
                                    page="/program" 
                                />  
                            </HowDoesColorBanner>
                            <HowDoesBanner 
                                icon={individuaIcon}
                                title={'Дадим индивидуальные рекомендации.'}
                                description={'Разберем ваше питание и тренировки, на основе этого дадим индивидуальные рекомендации и ответим на вопросы.'}
                                width={'40%'}
                                height={259}
                                containerWidth={302}
                            />
                            <HowDoesBanner 
                                icon={planIcon}
                                title={'План шагов на каждую неделю.'}
                                description={'Для эффективного похудения и сохранения мотивации каждую неделю мы даем задания, которые проверяет куратор практикума.'}
                                width={'40%'}
                                height={259}
                                containerWidth={302}
                            />
                            <HowDoesBanner 
                                icon={supportIcon}
                                title={'Поддержка и помощь.'}
                                description={'В течении всего практикума, отвечаем на любые вопросы на онлайн эфирах и в Telegram-чате, мы всегда готовы вам помочь и поддержать.'}
                                width={'40%'}
                                height={259}
                                containerWidth={302}
                            />
                            <HowDoesColorBanner
                                title={'Бонус!'}
                                description={'Дополнительные материалы для улучшения фигуры и физической формы с помощью конструктора фитнес программ.'}
                                icon={starEmoji}
                                baseColor={'#FF6B16'}
                                background={'#FFF4ED'}
                                width={700}
                                height={277}
                            >
                                <ButtonScroll 
                                    width={'100%'}
                                    height={62}
                                    background={'linear-gradient(180deg, #FF8C00 0%, #FF4500 100%)'}
                                    text={'Записаться на практикум'}
                                    color={'#fff'}
                                    fontSize={18}
                                    fontWeight={600}
                                    pixels={1700}
                                    direction={'down'}
                                />
                            </HowDoesColorBanner>
                        </>
                    )}
                        
                        {/* <HowDoesBanner 
                            icon={cameraIcon}
                            title={'Теория и практические шаги для похудения на 13 прямых эфирах и 12 видео уроках.'}
                            description={`Эксперт практикума Никита Агапов подробно расскажет о теории питания, добавках и почему можно есть любые продукты и худеть.ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤВы узнаете о физиологии похудения и сможете составить подходящий именно вам рацион питания и подобрать индивидуальную физическую нагрузку.ㅤㅤㅤㅤㅤㅤㅤㅤㅤ Все эфиры будут доступны в записи.`}
                            width={'60%'}
                            height={344}
                            containerWidth={482}
                        />
                        <HowDoesBanner 
                            icon={ruletIcon}
                            title={'Пошаговый алгоритм действий для снижения веса.'}
                            description={'Который будет работать даже после окончания практикума. Мы —  про здоровье, а не только про лишние килограммы.'}
                            width={'60%'}
                            height={200}
                            containerWidth={482}
                        />

                        <HowDoesColorBanner 
                            title={'Никита Агапов'}
                            subtitle={'Основатель практикума'}
                            description={'«Это не просто список советов и универсальных диет!»'}
                            icon={nikitaAvatar}
                            baseColor={'#2471FF'}
                            background={'#F3F8FF'}
                            width={700}
                            height={277}
                        >
                            <LinkPageButton
                                width={'100%'}
                                height={62}
                                background={'linear-gradient(90deg, #4dafff 0%, #1a87ff 100%)'}
                                text={'Программа практикума'}
                                color={'#fff'}
                                fontSize={18}
                                fontWeight={600}
                                page="/program" 
                            />  
                        </HowDoesColorBanner>
                        <HowDoesBanner 
                            icon={individuaIcon}
                            title={'Дадим индивидуальные рекомендации.'}
                            description={'Разберем ваше питание и тренировки, на основе этого дадим индивидуальные рекомендации и ответим на вопросы.'}
                            width={'40%'}
                            height={259}
                            containerWidth={302}
                        />
                        <HowDoesBanner 
                            icon={planIcon}
                            title={'План шагов на каждую неделю.'}
                            description={'Для эффективного похудения и сохранения мотивации каждую неделю мы даем задания, которые проверяет куратор практикума.'}
                            width={'40%'}
                            height={259}
                            containerWidth={302}
                        />
                        <HowDoesBanner 
                            icon={supportIcon}
                            title={'Поддержка и помощь.'}
                            description={'В течении всего практикума, отвечаем на любые вопросы на онлайн эфирах и в Telegram-чате, мы всегда готовы вам помочь и поддержать.'}
                            width={'40%'}
                            height={259}
                            containerWidth={302}
                        />
                        <HowDoesColorBanner
                            title={'Бонус!'}
                            description={'Дополнительные материалы для улучшения фигуры и физической формы с помощью конструктора фитнес программ.'}
                            icon={starEmoji}
                            baseColor={'#FF6B16'}
                            background={'#FFF4ED'}
                            width={700}
                            height={277}
                        >
                            <ButtonScroll 
                                width={'100%'}
                                height={62}
                                background={'linear-gradient(180deg, #FF8C00 0%, #FF4500 100%)'}
                                text={'Записаться на практикум'}
                                color={'#fff'}
                                fontSize={18}
                                fontWeight={600}
                                pixels={1700}
                                direction={'down'}
                            />
                        </HowDoesColorBanner> */}
                </div>
            ) : (
                <div className='container'>
                    <div className='howDoesSectionContent'>
                        <motion.div 
                            className='howDoesSectionTitle'
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1>
                                Как
                                <span className='logo'>
                                    <img src={howDoesSectionTitleLogo} alt="" loading='lazy' className='logo'/>
                                </span>
                            </h1>
                            <h1>
                                <span className='icon'>
                                    <img src={howDoesSectionTitleIcon} alt="" loading='lazy' className='icon'/>
                                </span>
                                проходит
                            </h1>
                            <h1>
                                пратикум
                            </h1>
                        </motion.div>
                        <FormatBanner 
                            title={'Формат онлайн.'} 
                            formatBanneritems={formatBanneritems} 
                            width={522} 
                            height={310} 
                            containerWidth={482}
                            icon={cameraIcon}
                            id='howDoesSection'
                        />
                    </div>
                    <div className='howDoesSectionContent--banners'>
                        <HowDoesBanner 
                            icon={cameraIcon}
                            title={'Теория и практические шаги для похудения на 13 прямых эфирах и 12 видео уроках.'}
                            description={`Эксперт практикума Никита Агапов подробно расскажет о теории питания, добавках и почему можно есть любые продукты и худеть.ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤВы узнаете о физиологии похудения и сможете составить подходящий именно вам рацион питания и подобрать индивидуальную физическую нагрузку.ㅤㅤㅤㅤㅤㅤㅤㅤㅤ Все эфиры будут доступны в записи.`}
                            width={522}
                            height={344}
                            containerWidth={482}
                        />
                        <HowDoesBanner 
                            icon={ruletIcon}
                            title={'Пошаговый алгоритм действий для снижения веса.'}
                            description={'Который будет работать даже после окончания практикума. Мы —  про здоровье, а не только про лишние килограммы.'}
                            width={522}
                            height={344}
                            containerWidth={482}
                        />
                    </div>
                    <div className='howDoesSectionContent--banners'>
                        <HowDoesBanner 
                            icon={individuaIcon}
                            title={'Дадим индивидуальные рекомендации.'}
                            description={'Разберем ваше питание и тренировки, на основе этого дадим индивидуальные рекомендации и ответим на вопросы.'}
                            width={342}
                            height={259}
                            containerWidth={302}
                        />
                        <HowDoesBanner 
                            icon={planIcon}
                            title={'План шагов на каждую неделю.'}
                            description={'Для эффективного похудения и сохранения мотивации каждую неделю мы даем задания, которые проверяет куратор практикума.'}
                            width={342}
                            height={259}
                            containerWidth={302}
                        />
                        <HowDoesBanner 
                            icon={supportIcon}
                            title={'Поддержка и помощь.'}
                            description={'В течении всего практикума, отвечаем на любые вопросы на онлайн эфирах и в Telegram-чате, мы всегда готовы вам помочь и поддержать.'}
                            width={342}
                            height={259}
                            containerWidth={302}
                        />
                    </div>
                    <div className='howDoesSectionContent--colorBanners'>
                        <motion.div
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <HowDoesColorBanner 
                                title={'Никита Агапов'}
                                subtitle={'Основатель практикума'}
                                description={'«Это не просто список советов и универсальных диет!»'}
                                icon={nikitaAvatar}
                                baseColor={'#2471FF'}
                                background={'#F3F8FF'}
                                width={420}
                                height={277}
                            >
                                <LinkPageButton
                                    width={308}
                                    height={62}
                                    background={'linear-gradient(90deg, #4dafff 0%, #1a87ff 100%)'}
                                    text={'Программа практикума'}
                                    color={'#fff'}
                                    fontSize={18}
                                    fontWeight={600}
                                    page="/program" 
                                    hoverBackground={'linear-gradient(90deg, #4dafff 0%, #0775ebff 100%)'}
                                />  
                            </HowDoesColorBanner>
                        </motion.div>

                        <motion.div
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <HowDoesColorBanner
                                title={'Бонус!'}
                                description={'Дополнительные материалы для улучшения фигуры и физической формы с помощью конструктора фитнес программ.'}
                                icon={starEmoji}
                                baseColor={'#FF6B16'}
                                background={'#FFF4ED'}
                                width={624}
                                height={277}
                            >
                                <ButtonScroll 
                                    width={308}
                                    height={62}
                                    background={'linear-gradient(180deg, #fdae4eff 0%, #f3551cff 100%)'}
                                    text={'Записаться на практикум'}
                                    color={'#fff'}
                                    fontSize={18}
                                    fontWeight={600}
                                    pixels={1700}
                                    direction={'down'}
                                    hoverBackground={'linear-gradient(180deg, #FF8C00 0%, #FF4500 100%)'}
                                />
                            </HowDoesColorBanner>
                        </motion.div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default HowDoesSection;