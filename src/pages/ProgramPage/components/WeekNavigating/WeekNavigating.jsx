import '../WeekNavigating/WeekNavigating.scss'
import { useEffect, useState, useRef } from 'react';

const WeekNavigating = ({items, weeksSectionRef}) => {
    const [activeWeek, setActiveWeek] = useState(1);
    const [isFixed, setIsFixed] = useState(true);
    const observerRef = useRef(null);
    const navRef = useRef(null);

    useEffect(() => {
        if (!weeksSectionRef.current) return;

        const weekElements = weeksSectionRef.current.querySelectorAll('[data-week-number]');
        
        if (observerRef.current) {
            observerRef.current.disconnect();
        }

        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const weekNumber = parseInt(entry.target.getAttribute('data-week-number'));
                        setActiveWeek(weekNumber);
                    }
                });
            },
            {
                rootMargin: '-50% 0px -50% 0px',
                threshold: 0
            }
        );

        weekElements.forEach((element) => {
            observerRef.current.observe(element);
        });

        // Observer для отслеживания конца WeeksSection
        const sectionObserver = new IntersectionObserver(
            ([entry]) => {
                setIsFixed(entry.isIntersecting);
            },
            {
                rootMargin: '-100px 0px 0px 0px',
                threshold: 0
            }
        );

        sectionObserver.observe(weeksSectionRef.current);

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
            sectionObserver.disconnect();
        };
    }, [weeksSectionRef]);

    const scrollToWeek = (weekNumber) => {
        if (!weeksSectionRef.current) return;
        
        const weekElement = weeksSectionRef.current.querySelector(`[data-week-number="${weekNumber}"]`);
        if (weekElement) {
            const elementRect = weekElement.getBoundingClientRect();
            const absoluteElementTop = elementRect.top + window.pageYOffset;
            const centerPosition = absoluteElementTop - (window.innerHeight / 2) + (elementRect.height / 2);

            window.scrollTo({
                top: centerPosition,
                behavior: 'smooth'
            });
        }
    };

    return(
    <nav 
        className={`weekNavigating ${isFixed ? 'weekNavigating--fixed' : 'weekNavigating--absolute'}`}
        ref={navRef}
    >
        <ul>
            {items.map((item, index) => (
                <li key={index}>
                    <button 
                        className={activeWeek === item.weekNumber ? 'active' : ''}
                        onClick={() => scrollToWeek(item.weekNumber)}
                    >
                        {item.icon ? (
                            <img 
                                src={item.icon} 
                                alt="star" 
                                className={activeWeek === item.weekNumber ? 'icon-active' : ''}
                            />
                        ) : (
                            item.text
                        )}
                    </button>
                </li>
            ))} 
        </ul>
    </nav>
)
}

export default WeekNavigating;