import '../PageTitle/PageTitle.scss'
import '../PageTitle/PageTitleMobile.scss'
import { motion } from 'framer-motion';

const PageTitle = ({ text }) => {
    return(
        <section className='pageTitle'>
            <div className='container'>
                <motion.h1
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    {text}
                </motion.h1>
            </div>
        </section>
    )
}

export default PageTitle;