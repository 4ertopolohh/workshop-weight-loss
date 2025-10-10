import '../PayFormInputFieldName/PayFormInputFieldName.scss'
import '../PayFormInputFieldName/PayFormInputFieldNameMobile.scss'

const PayFormInputFieldName = ({ value, onChange }) => {
    return(
        <input 
            className='payFormInputField name' 
            type='text' 
            placeholder='Имя'
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    )
}

export default PayFormInputFieldName;