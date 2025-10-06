import '../ReviewsSectionButton/ReviewsSectionButton.scss'

const ReviewsSectionButton = ({ onClick, showAll }) => {
    return(
        <button className='reviewsSectionButton' onClick={onClick}>
            {showAll ? 'Свернуть' : 'Смотреть еще'}
        </button>
    )
}

export default ReviewsSectionButton;