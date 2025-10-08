import '../WeekNavigating/WeekNavigating.scss'
import '../WeekNavigating/WeekNavigatingMobile.scss'
import { useEffect, useState, useRef } from 'react';

const WeekNavigating = ({items, weeksSectionRef}) => {
    const [activeWeek, setActiveWeek] = useState(1);
    const [isFixed, setIsFixed] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const observerRef = useRef(null);
    const navRef = useRef(null);
    const initialPositionRef = useRef(null);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 1051);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => {
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    useEffect(() => {
        if (isMobile && navRef.current) {
            initialPositionRef.current = navRef.current.offsetTop;
        }
    }, [isMobile]);

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

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, [weeksSectionRef]);

    useEffect(() => {
        if (!isMobile || !navRef.current || !weeksSectionRef.current) return;

        let lastScrollY = window.pageYOffset;
        let ticking = false;

        const updatePosition = () => {
            const scrollY = window.pageYOffset;
            const navRect = navRef.current.getBoundingClientRect();
            const weeksSectionRect = weeksSectionRef.current.getBoundingClientRect();
            
            const navTop = navRect.top;
            const scrollDirection = scrollY > lastScrollY ? 'down' : 'up';
            lastScrollY = scrollY;

            const isSectionVisible = weeksSectionRect.bottom > 100 && weeksSectionRect.top < window.innerHeight;

            if (navTop <= 90 && 
                isSectionVisible && 
                scrollY >= initialPositionRef.current) {
                setIsFixed(true);
                setIsVisible(true);
            } 
            else if (scrollY < initialPositionRef.current) {
                setIsFixed(false);
                setIsVisible(true);
            }
            else if (!isSectionVisible) {
                setIsVisible(false);
            }
        };

        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    updatePosition();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        requestAnimationFrame(updatePosition);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isMobile, weeksSectionRef]);

    useEffect(() => {
        if (isMobile || !weeksSectionRef.current) return;

        const sectionObserver = new IntersectionObserver(
            ([entry]) => {
                setIsFixed(entry.isIntersecting);
                setIsVisible(entry.isIntersecting);
            },
            {
                rootMargin: '-100px 0px 0px 0px',
                threshold: 0
            }
        );

        sectionObserver.observe(weeksSectionRef.current);

        return () => {
            sectionObserver.disconnect();
        };
    }, [isMobile, weeksSectionRef]);

    const scrollToWeek = (weekNumber) => {
        if (!weeksSectionRef.current) return;
        
        const weekElement = weeksSectionRef.current.querySelector(`[data-week-number="${weekNumber}"]`);
        if (weekElement) {
            const elementRect = weekElement.getBoundingClientRect();
            const absoluteElementTop = elementRect.top + window.pageYOffset;
            
            const offset = isMobile && isFixed ? navRef.current?.offsetHeight || 0 : 0;
            const centerPosition = absoluteElementTop - (window.innerHeight / 2) + (elementRect.height / 2) - offset;

            window.scrollTo({
                top: centerPosition,
                behavior: 'smooth'
            });
        }
    };

    return(
        <nav 
            className={`weekNavigating ${isFixed ? 'weekNavigating--fixed' : 'weekNavigating--absolute'} ${!isVisible ? 'weekNavigating--hidden' : ''}`}
            ref={navRef}
        >
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        <button 
                            className={activeWeek === item.weekNumber ? 'active' : 'notActive'}
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