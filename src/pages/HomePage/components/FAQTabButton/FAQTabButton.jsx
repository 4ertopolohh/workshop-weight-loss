import '../FAQTabButton/FAQTabButton.scss'
import FAQTabButtonClose from '../../../../assets/images/icons/FAQTabButtonClose.svg'
import FAQTabButtonOpen from '../../../../assets/images/icons/FAQTabButtonOpen.svg'

const FAQTabButton = ({ isOpen, onClick }) => {
    return(
        <button className={`FAQTabButton ${isOpen ? 'open' : ''}`} onClick={onClick}>
            <img 
                src={isOpen ? FAQTabButtonOpen : FAQTabButtonClose} 
                alt="" 
                loading='lazy'
            />
        </button>
    )
}

export default FAQTabButton;