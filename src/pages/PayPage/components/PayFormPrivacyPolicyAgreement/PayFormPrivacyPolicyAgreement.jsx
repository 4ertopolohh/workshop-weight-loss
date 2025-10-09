import '../PayFormPrivacyPolicyAgreement/PayFormPrivacyPolicyAgreement.scss'

const PayFormPrivacyPolicyAgreement = ({ isChecked, onChange, hasError = false }) => {
    return(
        <div 
            className={`payFormPrivacyPolicyAgreement ${hasError ? 'error' : ''}`}
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
            <p>Я согласен(на) на <span><a href="">обработку персональных данных</a></span></p>
        </div>
    )
}

export default PayFormPrivacyPolicyAgreement;