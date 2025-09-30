import { motion } from 'framer-motion';
import ExpertBanner from '../ExpertBanner/ExpertBanner';
import '../WhoWillHelpSection/WhoWillHelpSection.scss';

import diplomIconBlue from '../../../../assets/images/icons/diplomIconBlue.svg';
import diplomIconOrange from '../../../../assets/images/icons/diplomIconOrange.svg';
import dumbbellIconBlue from '../../../../assets/images/icons/dumbbellIconBlue.svg';
import dumbbellIconOrange from '../../../../assets/images/icons/dumbbellIconOrange.svg';
import cupIcon from '../../../../assets/images/icons/cupIcon.svg';
import starIcon from '../../../../assets/images/icons/starIcon.svg'

import nikitaResult from '../../../../assets/images/pictures/nikitaResult.png'
import uriResult from '../../../../assets/images/pictures/uriResult.png'

import orangeQuotes from '../../../../assets/images/icons/orangeQuotes.svg'
import blueQuotes from '../../../../assets/images/icons/blueQuotes.svg'
import LinkPageButton from '../LinkPageButton/LinkPageButton';

const WhoWillHelpSection = () => {

    const nikitaSkillsItems = [
        { text: 'Диплом Нутрициолога МУПП',icon: diplomIconBlue },
        { text: 'Диплом фитнес тренер МУПП',icon: diplomIconBlue },
        { text: 'Более 5 лет инструктор общей физической подготовки',icon: dumbbellIconBlue },
        { text: '20 лет в профессиональном спорте',icon: dumbbellIconBlue },
        { text: 'Тренер по горным лыжам, роликам и skytech',icon: dumbbellIconBlue },
        { text: 'Победитель и призер всероссийского турнира по пауэрлифтингу',icon: cupIcon },
        { text: 'Победитель Поволжского Федерального округа по горным лыжам',icon: cupIcon }
    ]

    const uriSkillsItems = [
        { text: 'Диплом Нутрициолога МУПП', icon: diplomIconOrange },
        { text: 'Диплом фитнес тренера МУПП', icon: diplomIconOrange },
        { text: '8 лет в любительском спорте', icon: dumbbellIconOrange },
        { text: 'Более 18 лет организатор активных туров', icon: dumbbellIconOrange },
        { text: 'Более 16 лет инструктор по сноуборду', icon: dumbbellIconOrange },
        { text: 'Знает, как найти индивидуальный подход, находить тот формат, который действительно помогает', icon: starIcon },
    ]

    return (
        <motion.section 
            className='whoWillHelpSection'
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px 0px 0px 0px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className='container'>
                <motion.h1 
                    className='whoWillHelpSectionTitle'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    Кто будет помогать худеть?
                </motion.h1>
                <div className='whoWillHelpSectionContent'>
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <ExpertBanner 
                            color={'#1257E0'}
                            title={'Никита Агапов'}
                            subtitle={'Основатель и эксперт практикума'}
                            image={nikitaResult}
                            quotes={blueQuotes}
                            quote={'Мне удалось похудеть по собственной программе практикума на 14 килограмм и уже более 5 лет помогаю другим сбросить вес без жестких ограничений и отката назад'}
                            description={'На практикуме отвечает за ведение теории и наставничество участников.'}
                            items={nikitaSkillsItems}
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    >
                        <ExpertBanner 
                            color={'#FF6B16'}
                            title={'Юрий Горшков'}
                            subtitle={'Основатель и куратор практикума'}
                            image={uriResult}
                            quotes={orangeQuotes}
                            quote={'«Проверил эффективность программы лично на себе, сбросив сумарно 31 килограмм в личной работе с Никитой Агаповым 😎»'}
                            description={'Отвечает за организационные вопросы, мотивацию, помогает и заботится об участниках практикума.'}
                            items={uriSkillsItems}
                        />
                    </motion.div>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                    style={{ display: 'flex', justifyContent: 'center' }}
                >
                    <LinkPageButton
                        width={322}
                        height={62}
                        background={'#000'}
                        color={'#fff'}
                        fontSize={18}
                        fontWeight={600}
                        page={'/experts'}
                        text={'Подробнее о экспертах'}
                    />
                </motion.div>
            </div>
        </motion.section>
    );
};

export default WhoWillHelpSection;