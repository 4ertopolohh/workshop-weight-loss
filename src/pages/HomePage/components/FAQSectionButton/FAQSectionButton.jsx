import '../FAQSectionButton/FAQSectionButton.scss'

const FAQSectionButton = ({ onClick, showAll }) => {
    return(
        <button className='FAQSectionButton' onClick={onClick}>
            {showAll ? 'Свернуть' : 'Смотреть еще'}
        </button>
    )
}

export default FAQSectionButton;