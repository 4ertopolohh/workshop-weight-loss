import { motion } from 'framer-motion';
import FeedbackForm from '../FeedbackForm/FeedbackForm';
import FeedbackLinks from '../FeedbackLinks/FeedbackLinks';
import '../FeedbackSection/FeedbackSection.scss'
import '../FeedbackSection/FeedbackSection950.scss'
import '../FeedbackSection/FeedbackSectionMobile.scss'
import { useMediaQuery } from 'react-responsive';

import tgIcon from '../../assets/images/icons/telegramIcon.svg'
import whatsappIcon from '../../assets/images/icons/whatsappIcon.svg'

const FeedbackSection = () => {

    const feedbackLinksItems = [
        {icon: tgIcon, link: '/'},
        {icon: whatsappIcon, link: '/'},
    ]
    const isTablet1050 = useMediaQuery({ maxWidth: 1051 })

    return(
        <>
            {isTablet1050 ? (
                <section className='feedbackSection'>
                    <div className='container'>
                        <FeedbackForm />
                        <FeedbackLinks items={feedbackLinksItems}/>
                    </div>
                </section>
            ) : (
                <motion.section 
                    className='feedbackSection'
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px 0px 0px 0px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className='container'>
                        <FeedbackForm />
                        <FeedbackLinks items={feedbackLinksItems}/>
                    </div>
                </motion.section>
            )}
            
        </>
    )
}

export default FeedbackSection;