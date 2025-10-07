import '../NavigatingBar/NavigatingBar.scss'
import { Link, useLocation } from 'react-router-dom';
import { useNavigation } from '../../contexts/NavigationContext';

const NavigatingBar = ({ items = [] }) => {
    const location = useLocation();
    const { getNavigationChain } = useNavigation();
    
    const navigationItems = items.length > 0 ? items : getNavigationChain(location.pathname);

    return(
        <section className='navigatingBar'>
            <div className='container'>
                <ul>
                    {navigationItems.map((item, index) => (
                        <li key={index} className={index < navigationItems.length - 1 ? 'faded' : ''}>
                            <Link to={item.link}>
                                <p>{item.text}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default NavigatingBar;