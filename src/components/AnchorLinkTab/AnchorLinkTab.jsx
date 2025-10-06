import AnchorLinkButton from '../AnchorLinkButton/AnchorLinkButton';
import '../AnchorLinkTab/AnchorLinkTab.scss'
import { motion } from 'framer-motion';

const AnchorLinkTab = ({ text, page = "/", sectionId }) => {
    return(
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className='anchorLinkTab'
        >
            <h6>{text}</h6>
            <AnchorLinkButton page={page} sectionId={sectionId} />
        </motion.div>
    ) 
}

export default AnchorLinkTab;