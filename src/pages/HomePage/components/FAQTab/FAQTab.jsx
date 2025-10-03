import '../FAQTab/FAQTab.scss'
import FAQTabButton from '../FAQTabButton/FAQTabButton';
import { useState, useRef, useEffect } from 'react';

const FAQTab = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [contentHeight, setContentHeight] = useState(0);
    const contentRef = useRef(null);

    useEffect(() => {
        if (contentRef.current) {
            setContentHeight(isOpen ? contentRef.current.scrollHeight : 0);
        }
    }, [isOpen]);

    const toggleAnswer = () => {
        setIsOpen(!isOpen);
    };

    return(
        <div className='FAQTab'>
            <div className='FAQTabQuestion'>
                <h5>{question}</h5>
                <FAQTabButton isOpen={isOpen} onClick={toggleAnswer}/>
            </div>
            <div 
                ref={contentRef}
                className='FAQTabAnswer' 
                style={{ 
                    maxHeight: `${contentHeight}px`,
                    opacity: isOpen ? 1 : 0
                }}
            >
                <p>{answer}</p>
            </div>
        </div>
    )
}

export default FAQTab;