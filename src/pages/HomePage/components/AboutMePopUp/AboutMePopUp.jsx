import '../AboutMePopUp/AboutMePopUp.scss'
import '../AboutMePopUp/AboutMePopUp1300.scss'
import CloseButton from '../CloseButton/CloseButton';
import { motion } from 'framer-motion';

const AboutMePopUp = ({ description, itemsType = [], itemsAchives = [], onClose, image }) => {
    return(
        <motion.div 
            className='aboutMePopUp'
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '-100%', opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
        >
            <img src={image} alt="" loading='lazy' className='aboutMePopUpBackground'/>
            <div className='container'>
                <div className='header'>
                    <h6>Обо мне</h6>
                    <CloseButton onClick={onClose}/>
                </div>
                <div className='description'>
                    <p>{description}</p>
                    <div className='typeList'>
                        <h6 className='listTitle'>Мой принцип работы:</h6>
                        <ul>
                            {itemsType.map((item, index) => (
                                <li key={index} className='item'>
                                    {item.text}
                                </li>
                            ))} 
                        </ul>
                    </div>
                    <div className='achivesList'>
                        <h6 className='listTitle'>Мои достижения:</h6>
                        <ul>
                            {itemsAchives.map((item, index) => (
                                <li key={index} className='item'>
                                    {item.text}
                                </li>
                            ))} 
                        </ul>
                    </div>
                </div>
                
            </div>
            {/* <div className='container' id='aboutMePopUpContainer'>
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
            </div> */}
        </motion.div>
    )
}

export default AboutMePopUp;