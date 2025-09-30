import '../MarafonWorksSection/MarafonWorksSection.scss'
// import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import marafonWorks from '../../../../assets/images/pictures/marafonWorks.png'
import MarafonWorksBigBanner from '../MarafonWorksBigBanner/MarafonWorksBigBanner';
import MarafonWorksMiniBanners from '../MarafonWorksMiniBanners/MarafonWorksMiniBanners';
// import AboutMeButton from '../AboutMeButton/AboutMeButton';
import AboutMePopUp from '../AboutMePopUp/AboutMePopUp';

const MarafonWorksSection = () => {
    // const [isPopUpOpen, setIsPopUpOpen] = useState(false);

    // const openPopUp = () => setIsPopUpOpen(true);
    // const closePopUp = () => setIsPopUpOpen(false);

    // const aboutMePopUpItems = [
    //     { text: 'Плавный подход — учу снижать вес постепенно и удерживать результат навсегда' },
    //     { text: 'Вместо диет — работа с пищевыми привычками и мышлением, которые естественным образом остаются навсегда' },
    //     { text: 'Повышение осознанности питания — без запретов и насилия над собой. Жизнь в новом теле без страха перед едой' },
    //     { text: 'Учу идти самостоятельно и не зависеть от тренеров и марафонов' },
    // ];

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
                    {/* <AboutMeButton onClick={openPopUp} /> */}
                </div>
                <MarafonWorksBigBanner />
                <MarafonWorksMiniBanners />

                {/* <AnimatePresence>
                    {isPopUpOpen && (
                        <>
                            <motion.div
                                className='overlay'
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.6 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                onClick={closePopUp}
                            />

                            <AboutMePopUp
                                description={'Вот уже пятый год веду собственный проект по снижению веса и уже помог многим в личной и групповой работе. В мире много способов похудеть, я изучил большинство из них и сформулировал самый легкий и эффективный'}
                                items={aboutMePopUpItems}
                                onClose={closePopUp}
                            />
                        </>
                    )}
                </AnimatePresence> */}
            </div>
        </section>
    )
}

export default MarafonWorksSection;