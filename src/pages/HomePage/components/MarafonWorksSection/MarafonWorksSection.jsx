import '../MarafonWorksSection/MarafonWorksSection.scss'
import '../MarafonWorksSection/MarafonWorksSection1050.scss'
import { motion } from 'framer-motion';

import marafonWorks from '../../../../assets/images/pictures/marafonWorks.png'
import MarafonWorksBigBanner from '../MarafonWorksBigBanner/MarafonWorksBigBanner';
import MarafonWorksMiniBanners from '../MarafonWorksMiniBanners/MarafonWorksMiniBanners';
import SavingBanner from '../SavingBanner/SavingBanner';

import savingBannerIcon from '../../../../assets/images/pictures/savingBannerIcon.png'

const MarafonWorksSection = () => {

    const savingBannerItems = [
        { text: 'Сэкономите время и десятки тысяч рублей на БАДах, спортивном питании и таблетках для похудения.' },
        { text: 'По сравнению с комплексными затратами на тренеров, диетологов, нутрициологов и других инструментов, способов и специалистов  помогающих худеть.' }
    ]

    return (
        <section className='marafonWorksSection'>
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
        </section>
    )
}

export default MarafonWorksSection;