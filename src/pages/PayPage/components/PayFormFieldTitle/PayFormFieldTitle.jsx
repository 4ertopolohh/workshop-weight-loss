import '../PayFormFieldTitle/PayFormFieldTitle.scss'

const PayFormFieldTitle = ({ text }) => {
    return(
        <h6 className='payFormFieldTitle'>
            {text}
        </h6>
    )
}

export default PayFormFieldTitle;