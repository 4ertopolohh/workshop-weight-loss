import { motion } from 'framer-motion';
import '../FeedbackLinks/FeedbackLinks.scss'

const FeedbackLinks = ({ items = [] }) => {
    return(
        <motion.div 
            className='feedbackLinks'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
            <div className='container'>
                <h3>Связаться</h3>
                <ul className='feedbackLinksSocials'>
                    {items.map((item, index) => (
                        <li key={index} className='feedbackSocialsListItem'>
                            <a href={item.link}>
                                <img src={item.icon} alt="" loading='lazy'/>
                            </a>
                        </li>
                    ))} 
                </ul>
            </div>
        </motion.div>
    )
}

export default FeedbackLinks;