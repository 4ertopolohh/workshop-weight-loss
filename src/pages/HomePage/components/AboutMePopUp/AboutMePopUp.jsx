import '../AboutMePopUp/AboutMePopUp.scss'
import CloseButton from '../CloseButton/CloseButton';
import { motion } from 'framer-motion';

const AboutMePopUp = ({ description, items = [], onClose }) => {
    return(
        <motion.div 
            className='aboutMePopUp'
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '-100%', opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
        >
            <div className='container' id='aboutMePopUpContainer'>
                <div className='header'>
                    <h5>Обо мне</h5>
                    <CloseButton onClick={onClose} />
                </div>
                <div className='aboutMePopUpBody'>
                    <p className='description'>
                        {description}
                    </p>
                    <div className='list'>
                        <p className='listTitle'>Мой принцип работы:</p>
                        <ul>
                            {items.map((item, index) => (
                                <li key={index} className='item'>
                                    {item.text}
                                </li>
                            ))} 
                        </ul>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default AboutMePopUp;
