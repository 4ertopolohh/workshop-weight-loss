import { motion } from 'framer-motion'
import '../HotOfferSection/HotOfferSection.scss'
import ButtonScroll from '../ButtonScroll/ButtonScroll';

const HotOfferSection = () => {
    return(
        <motion.section 
            className='hotOfferSection'
            initial={{ opacity: 0, y: 50 }}          
            animate={{ opacity: 1, y: 0 }}        
            transition={{ duration: 1, ease: "easeOut" }} 
        >
            <div className='container'>
                <div className='hotOfferTitles'>
                    <h5>Не пропусти</h5>
                    <h3>Скоро стартуем</h3>
                </div>
                <ButtonScroll 
                    width={311}
                    height={62}
                    background={'linear-gradient(180deg, #FF8C00 0%, #FF4500 100%)'}
                    text={'Хочу присоединиться'}
                    color={'#fff'}
                    pixels={5750}
                    direction={'down'}
                    fontWeight={600}
                    fontSize={18}
                />
            </div>
        </motion.section>
    )
}

export default HotOfferSection;
