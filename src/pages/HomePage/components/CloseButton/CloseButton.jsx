import '../CloseButton/CloseButton.scss'
import closeIcon from '../../../../assets/images/icons/closeIcon.svg'

const CloseButton = ({ onClick }) => {
    return(
        <button className='closeButton' onClick={onClick}>
            <img src={closeIcon} alt="" loading='lazy'/>
        </button>
    )
}

export default CloseButton;