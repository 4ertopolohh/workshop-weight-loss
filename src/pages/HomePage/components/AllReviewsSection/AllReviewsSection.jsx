import { motion } from 'framer-motion';
import '../AllReviewsSection/AllReviewsSection.scss'
import '../AllReviewsSection/AllReviewsSection1050.scss'
import '../AllReviewsSection/AllReviewsSection950.scss'
import '../AllReviewsSection/AllReviewsSectionMobile.scss'
import { useMediaQuery } from 'react-responsive';

import allReviewsAvatars from '../../../../assets/images/pictures/allReviewsAvatars.png'
import allReviewsAvatarsMobile from '../../../../assets/images/pictures/allReviewsAvatarsMobile.png'
import LinkPageButton from '../LinkPageButton/LinkPageButton';

const AllReviewsSection = () => {

    const isTablet1050 = useMediaQuery({ maxWidth: 1051 })
    const isMobile = useMediaQuery({ maxWidth: 451 })

    return(
        <>
        {isTablet1050 ? (
            <section className='allReviewsSection'>
                <div className='container'>
                    <div className='allReviewsSectionTitle'>
                        {isMobile ? (
                            <img src={allReviewsAvatarsMobile} alt="" loading='lazy'/>
                        ) : (
                            <img src={allReviewsAvatars} alt="" loading='lazy'/>
                        )}
                        <p>Эффективность практикума подтверждена участниками</p>
                        <h1>И вот что они говорят!</h1>
                    </div>
                    {isMobile ? (
                        <LinkPageButton 
                            width={'100%'}
                            height={62}
                            background={'#fff'}
                            text={'Смотреть все отзывы'}
                            color={'#000'}
                            fontSize={18}
                            fontWeight={600}
                            page={'/reviews'}
                        />
                    ) : (
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
                    )}
                </div>
            </section>
        ) : (
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
        )}
        
        </>
    )
}

export default AllReviewsSection;