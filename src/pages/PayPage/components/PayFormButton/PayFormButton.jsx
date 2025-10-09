import '../PayFormButton/PayFormButton.scss'

const PayFormButton = ({ isActive }) => {
    return(
        <button className={`payFormButton ${isActive ? 'active' : ''}`}>
            {isActive ? 'Оплатить' : 'Не указаны данные'}
        </button>
    )
}

export default PayFormButton;