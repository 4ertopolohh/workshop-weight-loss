import '../CloseButton/CloseButton.scss'
import closeIcon from '../../../../assets/images/icons/closeIcon.svg'
import { useNavigate } from 'react-router-dom'

const CloseButton = ({ onClick, navigateBack = false }) => {
    const navigate = useNavigate()
    
    const handleClick = (e) => {
        if (navigateBack) {
            navigate(-1) 
        } else if (onClick) {
            onClick(e) 
        }
    }

    return(
        <button className='closeButton' onClick={handleClick}>
            <img src={closeIcon} alt="" loading='lazy'/>
        </button>
    )
}

export default CloseButton;