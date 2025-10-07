import '../WeekButton/WeekButton.scss'

const WeekButton = ({ isExpanded, onClick }) => {
    return(
        <button 
            className={`weekButton ${isExpanded ? 'weekButton--expanded' : ''}`}
            onClick={onClick}
        >
            {isExpanded ? 'Свернуть' : 'Подробнее'}
        </button>
    )
}

export default WeekButton;