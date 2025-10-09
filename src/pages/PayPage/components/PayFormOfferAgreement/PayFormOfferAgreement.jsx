import '../PayFormOfferAgreement/PayFormOfferAgreement.scss'

const PayFormOfferAgreement = ({ isChecked, onChange, hasError = false }) => {
    return(
        <div 
            className={`payFormOfferAgreement ${hasError ? 'error' : ''}`}
            onClick={() => onChange(!isChecked)}
        >
            <div className='customCheckboxSquare'>
                <input 
                    type="checkbox" 
                    checked={isChecked}
                    onChange={() => {}} 
                    className="checkboxInput"
                />
                <span className="checkmarkSquare"></span>
            </div>
            <p>Я ознакомлен(на) и согласен(на) с условиями <span><a href="">договора Оферты</a></span></p>
        </div>
    )
}

export default PayFormOfferAgreement;