import MarafonWorksMiniBanner from '../MarafonWorksMiniBanner/MarafonWorksMiniBanner';
import '../MarafonWorksMiniBanners/MarafonWorksMiniBanners.scss'

import burgerImage from '../../../../assets/images/pictures/burgerImage.png'
import dumbbelImage from '../../../../assets/images/pictures/dumbbelImage.png'
import runningImage from '../../../../assets/images/pictures/runningImage.png'
import MarafonWorksGarantBanner from '../MarafonWorksGarantBanner/MarafonWorksGarantBanner';
import starEmoji from '../../../../assets/images/pictures/starEmoji.png'
import HowDoesCollorBanner from '../HowDoesColorBanner/HowDoesColorBanner';

const MarafonWorksMiniBanners = () => {
    return(
        <div className='marafonWorksMiniBanners'>
            {/* <MarafonWorksGarantBanner 
                title={'Даем гарантию!'} 
                desc={'Если ты не увидишь прогресс за первый месяц — вернём деньги! Без лишних вопросов'} 
                icon={starEmoji}
            /> */}
            <HowDoesCollorBanner 
                title={'Важно'} 
                description={'Научим встраивать похудение в свою жизнь, а не подстраивать жизнь под похудение.'} 
                icon={starEmoji} 
                baseColor={'#FF6B16'}
                background={'#FFF4ED'}
                width={402}
                height={196}
            />
            <MarafonWorksMiniBanner 
                icon={burgerImage} 
                text={'С нами сбрасывают лишний вес без запретов и срывов.'}
            />
            <MarafonWorksMiniBanner 
                icon={dumbbelImage} 
                text={'Без изнурительных тренировок'}
            />
            {/* <MarafonWorksMiniBanner 
                icon={runningImage} 
                text={'В комфортном темпе'}
            /> */}
        </div>
    )
}

export default MarafonWorksMiniBanners;