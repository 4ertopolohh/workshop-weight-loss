import '../Week/Week.scss'
import '../Week/WeekMobile.scss'
import WeekButton from '../WeekButton/WeekButton';
import { useState, forwardRef, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

const Week = forwardRef(({
    weekNumber,
    previewTitle,
    itemsPrev = [],
    itemsDesc = [],
    itemsHeader = [],
    height,
    children
}, ref) => {
    const [isExpanded, setIsExpanded] = useState(false);
    
    const viewRef = useRef();
    const isInViewport = useInView(viewRef, {
        once: true, 
        margin: "-100px" 
    });

    const weekStyle = {
        maxHeight: isExpanded ? height : 'auto',
        transition: 'height 0.3s ease'
    }

    const descriptionStyle = {
        maxHeight: isExpanded ? height : 'auto',
        transition: 'height 0.3s ease'
    }

    const weekPreviewStyle = {
        maxHeight: height
    }

    const getTitleClassName = () => {
        return previewTitle.length > 10 ? 'title--small' : '';
    }

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    }

    const variants = {
        hidden: {
            opacity: 0,
            x: 100
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const isTablet1050 = useMediaQuery({ maxWidth: 1051 })

    return(
        <>
            {isTablet1050 ? (
                <div 
                    className='week' 
                    style={weekStyle}
                    data-week-number={weekNumber}
                    ref={viewRef}
                    variants={variants}
                    initial="hidden"
                    animate={isInViewport ? "visible" : "hidden"}
                >
                    <div className='weekPreview' style={weekPreviewStyle}>
                        <div className='container'>
                            <h4 className={`title ${getTitleClassName()}`}>{previewTitle}</h4>
                            <ul className='weekPreviewList'>
                                {itemsPrev.map((item, index) => (
                                    <li key={index} style={{ '--list-icon': `url(${item.icon})` }}>
                                        {item.text}
                                    </li>
                                ))} 
                            </ul>
                        </div>
                    </div>
                    <div className='weekDescription' style={descriptionStyle}>
                        <div className='container'>
                            <div className='header'>
                                <p className='subtitle'>Темы</p>
                                <ul className='weekDescriptionHeaderTitleList'>
                                    {itemsHeader.map((item, index) => (
                                        <li key={index}>
                                            {item.text}
                                        </li>
                                    ))} 
                                </ul>
                            </div>
                            {isExpanded && (
                                <>
                                    {children}
                                    <ol className='weekDescriptionList'>
                                        {itemsDesc.map((item, index) => (
                                            <li key={index}>
                                                {item.text}
                                            </li>
                                        ))} 
                                    </ol>
                                </>
                            )}
                            <WeekButton 
                                isExpanded={isExpanded} 
                                onClick={toggleExpand}
                            />
                        </div>
                    </div>
                </div>
            ) : (
                <motion.div 
                    className='week' 
                    style={weekStyle}
                    data-week-number={weekNumber}
                    ref={viewRef}
                    variants={variants}
                    initial="hidden"
                    animate={isInViewport ? "visible" : "hidden"}
                >
                    <div className='weekPreview' style={weekPreviewStyle}>
                        <div className='container'>
                            <h4 className={`title ${getTitleClassName()}`}>{previewTitle}</h4>
                            <ul className='weekPreviewList'>
                                {itemsPrev.map((item, index) => (
                                    <li key={index} style={{ '--list-icon': `url(${item.icon})` }}>
                                        {item.text}
                                    </li>
                                ))} 
                            </ul>
                        </div>
                    </div>
                    <div className='weekDescription' style={descriptionStyle}>
                        <div className='container'>
                            <div className='header'>
                                <p className='subtitle'>Темы</p>
                                <ul className='weekDescriptionHeaderTitleList'>
                                    {itemsHeader.map((item, index) => (
                                        <li key={index}>
                                            {item.text}
                                        </li>
                                    ))} 
                                </ul>
                            </div>
                            {isExpanded && (
                                <>
                                    {children}
                                    <ol className='weekDescriptionList'>
                                        {itemsDesc.map((item, index) => (
                                            <li key={index}>
                                                {item.text}
                                            </li>
                                        ))} 
                                    </ol>
                                </>
                            )}
                            <WeekButton 
                                isExpanded={isExpanded} 
                                onClick={toggleExpand}
                            />
                        </div>
                    </div>
                </motion.div>
            )}
        </>
                
    )
})

export default Week;