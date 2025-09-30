import { motion } from 'framer-motion';
import '../AllReviewsSection/AllReviewsSection.scss'

import allReviewsAvatars from '../../../../assets/images/pictures/allReviewsAvatars.png'
import LinkPageButton from '../LinkPageButton/LinkPageButton';

const AllReviewsSection = () => {
    return(
        <motion.section 
            className='allReviewsSection'
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px 0px 0px 0px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className='container'>
                <div className='allReviewsSectionTitle'>
                    <img src={allReviewsAvatars} alt="" loading='lazy'/>
                    <p>Эффективность практикума подтверждена участниками</p>
                    <h1>И вот что они говорят!</h1>
                </div>
                <LinkPageButton 
                    width={287}
                    height={62}
                    background={'#fff'}
                    text={'Смотреть все отзывы'}
                    color={'#000'}
                    fontSize={18}
                    fontWeight={600}
                    page={'/reviews'}
                />
            </div>
        </motion.section>
    )
}

export default AllReviewsSection;