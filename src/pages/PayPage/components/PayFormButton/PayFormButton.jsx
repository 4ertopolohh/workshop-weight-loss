import '../PayFormButton/PayFormButton.scss'

const PayFormButton = ({ isActive, onClick, text }) => {
    return(
        <button 
            className={`payFormButton ${isActive ? 'active' : ''}`}
            onClick={onClick}
            disabled={!isActive}
        >
            {text}
        </button>
    )
}

export default PayFormButton;