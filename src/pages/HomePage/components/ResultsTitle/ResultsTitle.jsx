import { motion } from 'framer-motion';
import '../ResultsTitle/ResultsTitle.scss'
import '../ResultsTitle/ResultsTitle750.scss'
import '../ResultsTitle/ResultsTitleMobile.scss'

import resultsPeople from '../../../../assets/images/pictures/resultsPeoples.png'

const ResultsTitle = () => {
    return(
        <motion.div 
            className='resultsTitle'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <h1>
                Более
                <span className='resultsTitleSelectedText'>100</span>
                <br/>
                участников уже
                <br/>
                похудели
                <img src={resultsPeople} alt="" className='resultsTitlePeoples' loading='lazy'/>
                <br/>
                с нами
            </h1>
        </motion.div>
    )
}

export default ResultsTitle;