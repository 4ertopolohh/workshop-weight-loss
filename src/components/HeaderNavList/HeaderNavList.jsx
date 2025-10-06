import { useLocation, Link } from 'react-router-dom';
import '../HeaderNavList/HeaderNavList.scss';

const HeaderNavList = ({ navListItems = [] }) => {
  const location = useLocation();
  
  const isActive = (link) => {
    const currentPath = location.pathname || '/';
    const itemPath = link.replace('/#', '');
    return currentPath === itemPath;
  };

  return(
    <ul className='headerNavList'>
      {navListItems.map((item, index) => (
        <li 
          key={index} 
          className={`headerNavListItem ${isActive(item.link) ? 'headerNavListItem--active' : ''}`}
          style={{ '--nav-icon': `url(${item.img})` }}
        >
          <Link to={item.link.replace('/#', '')} className='headerNavListLink'>
            {item.text}
          </Link>
        </li>
      ))} 
    </ul>
  )
}

export default HeaderNavList;