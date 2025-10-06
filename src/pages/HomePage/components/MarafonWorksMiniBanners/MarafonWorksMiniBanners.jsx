import MarafonWorksMiniBanner from '../MarafonWorksMiniBanner/MarafonWorksMiniBanner';
import '../MarafonWorksMiniBanners/MarafonWorksMiniBanners.scss'
import '../MarafonWorksMiniBanners/MarafonWorksMiniBanners1050.scss'
import '../MarafonWorksMiniBanners/MarafonWorksMiniBanners950.scss'
import { useMediaQuery } from 'react-responsive';

import burgerImage from '../../../../assets/images/pictures/burgerImage.png'
import dumbbelImage from '../../../../assets/images/pictures/dumbbelImage.png'
import starEmoji from '../../../../assets/images/pictures/starEmoji.png'
import HowDoesCollorBanner from '../HowDoesColorBanner/HowDoesColorBanner';


const MarafonWorksMiniBanners = () => {

    const isTablet1050 = useMediaQuery({ maxWidth: 1051 })
    const isMobile = useMediaQuery({ maxWidth: 451 })

    return(
        <div className='marafonWorksMiniBanners'>
            {isTablet1050 ? (
                <>
                    {isMobile ? (
                        <HowDoesCollorBanner 
                            title={'Важно!'} 
                            description={'Научим встраивать похудение в свою жизнь, а не подстраивать жизнь под похудение.'} 
                            icon={starEmoji} 
                            baseColor={'#FF6B16'}
                            background={'#FFF4ED'}
                            width={'89%'}
                            height={175}
                        />
                    ) : (
                        <HowDoesCollorBanner 
                            title={'Важно!'} 
                            description={'Научим встраивать похудение в свою жизнь, а не подстраивать жизнь под похудение.'} 
                            icon={starEmoji} 
                            baseColor={'#FF6B16'}
                            background={'#FFF4ED'}
                            width={'100%'}
                            height={160}
                        />
                    )}
                </>
            ) : (
                <HowDoesCollorBanner 
                    title={'Важно!'} 
                    description={'Научим встраивать похудение в свою жизнь, а не подстраивать жизнь под похудение.'} 
                    icon={starEmoji} 
                    baseColor={'#FF6B16'}
                    background={'#FFF4ED'}
                    width={402}
                    height={196}
                />
            )}
            <MarafonWorksMiniBanner 
                icon={burgerImage} 
                text={'С нами сбрасывают лишний вес без запретов и срывов.'}
            />
            <MarafonWorksMiniBanner 
                icon={dumbbelImage} 
                text={'Без изнурительных тренировок'}
            />
        </div>
    )
}

export default MarafonWorksMiniBanners;