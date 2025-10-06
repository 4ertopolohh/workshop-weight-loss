import '../AnchorLinkButton/AnchorLinkButton.scss'
import { useNavigate } from 'react-router-dom';
import anchorLinkButton from '../../assets/images/pictures/anchorLinkButton.svg'

const AnchorLinkButton = ({ page = "/", sectionId }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        const currentPath = window.location.hash.replace('#', '') || '/';
        const targetPath = page === '/' ? '/' : `/${page}`;
        
        console.log('Current path:', currentPath);
        console.log('Target path:', targetPath);
        console.log('Section ID:', sectionId);

        if (currentPath === targetPath) {
            const element = document.getElementById(sectionId);
            if (element) {
                console.log('Scrolling to element:', element);
                element.scrollIntoView({ behavior: 'smooth' });
            } else {
                console.log('Element not found with id:', sectionId);
            }
        } else {
            console.log('Navigating to:', `${page}#${sectionId}`);
            navigate(`${page}#${sectionId}`);
        }
    };

    return(
        <button className='anchorLinkButton' onClick={handleClick}>
            <img src={anchorLinkButton} alt="" loading='lazy'/>
        </button>
    )
}

export default AnchorLinkButton;