import '../PayFromInputFieldEmail/PayFromInputFieldEmail.scss'

const PayFromInputFieldEmail = ({ value, onChange }) => {
    return(
        <input 
            className='payFormInputField' 
            placeholder='Email'
            type='email'
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    )
}

export default PayFromInputFieldEmail;