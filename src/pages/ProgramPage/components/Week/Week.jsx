import '../Week/Week.scss'
import WeekButton from '../WeekButton/WeekButton';
import { useState } from 'react';

const Week = ({
    previewTitle,
    itemsPrev = [],
    itemsDesc = [],
    itemsHeader = [],
    height
}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const weekStyle = {
        height: isExpanded ? height : 'auto',
        transition: 'height 0.3s ease'
    }

    const getTitleClassName = () => {
        return previewTitle.length > 10 ? 'title--small' : '';
    }

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    }

    return(
        <div className='week' style={weekStyle}>
            <div className='weekPreview'>
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
            <div className='weekDescription'>
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
                        <ol className='weekDescriptionList'>
                            {itemsDesc.map((item, index) => (
                                <li key={index}>
                                    {item.text}
                                </li>
                            ))} 
                        </ol>
                    )}
                    <WeekButton 
                        isExpanded={isExpanded} 
                        onClick={toggleExpand}
                    />
                </div>
            </div>
        </div>
    )
}

export default Week;