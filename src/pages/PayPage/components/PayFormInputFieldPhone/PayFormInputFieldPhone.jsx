import '../PayFormInputFieldPhone/PayFormInputFieldPhone.scss'

const PayFormInputFieldPhone = ({ value, onChange }) => {
    const handlePhoneChange = (e) => {
        let input = e.target.value.replace(/\D/g, '');
        
        if (!input.startsWith('7') && input.length > 0) {
            input = '7' + input;
        }
        
        if (input.length > 11) {
            input = input.slice(0, 11);
        }
        
        let formattedValue = '+7';
        if (input.length > 1) {
            formattedValue = '+' + input;
        }
        
        onChange(formattedValue);
    };

    return(
        <input 
            className='payFormInputField phone' 
            type='tel' 
            placeholder='+7 916 345 67 89'
            value={value}
            onChange={handlePhoneChange}
        />
    )
}

export default PayFormInputFieldPhone;