import '../MarafonWorksSection/MarafonWorksSection.scss'
import '../MarafonWorksSection/MarafonWorksSection1050.scss'
import '../MarafonWorksSection/MarafonWorksSection750.scss'
import '../MarafonWorksSection/MarafonWorksSectionMobile.scss'
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

import marafonWorks from '../../../../assets/images/pictures/marafonWorks.jpg'
import marafonWorksMobile from '../../../../assets/images/pictures/marafonWorksMobile.png'
import MarafonWorksBigBanner from '../MarafonWorksBigBanner/MarafonWorksBigBanner';
import MarafonWorksMiniBanners from '../MarafonWorksMiniBanners/MarafonWorksMiniBanners';
import SavingBanner from '../SavingBanner/SavingBanner';

import savingBannerIcon from '../../../../assets/images/pictures/savingBannerIcon.png'

const MarafonWorksSection = () => {

    const isTablet950 = useMediaQuery({ maxWidth: 951 })
    const isTablet650 = useMediaQuery({ maxWidth: 651 })

    const savingBannerItems = [
        { text: 'Сэкономите время и десятки тысяч рублей на БАДах, спортивном питании и таблетках для похудения.' },
        { text: 'По сравнению с комплексными затратами на тренеров, диетологов, нутрициологов и других инструментов, способов и специалистов  помогающих худеть.' }
    ]

    return (
        <section className='marafonWorksSection'>
            {isTablet950 ? (
                <div className='container'>
                    <h1 className='marafonWorksSectionTitle'>
                        Практикум <span>марафон</span> работает!
                    </h1>
                    
                    <div className='marafonWorksAboutMeImage'>
                        {isTablet650 ? (
                            <img src={marafonWorksMobile} alt="" loading='lazy' />
                        ) : (
                            <img src={marafonWorks} alt="" loading='lazy' />
                        )}
                    </div>
                    <MarafonWorksBigBanner />
                    <MarafonWorksMiniBanners />

                    <div className='savigBannerAnimation'>
                        <SavingBanner 
                            height={153}
                            items={savingBannerItems}
                            title={'Экономия и доступная цена. '}
                            icon={savingBannerIcon}
                            color={'#1257E0'}
                        />
                    </div>
                </div>
            ) : (
                <div className='container'>
                    <motion.h1
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        Практикум <span>марафон</span> работает!
                    </motion.h1>
                    
                    <div className='marafonWorksAboutMeImage'>
                        <img src={marafonWorks} alt="" loading='lazy' />
                    </div>
                    <MarafonWorksBigBanner />
                    <MarafonWorksMiniBanners />

                    <motion.div
                        className='savigBannerAnimation'
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    >
                        <SavingBanner 
                            height={153}
                            items={savingBannerItems}
                            title={'Экономия и доступная цена. '}
                            icon={savingBannerIcon}
                            color={'#1257E0'}
                        />
                    </motion.div>
                </div>
            )}
                
        </section>
    )
}

export default MarafonWorksSection;