import '../PayFormCompleteBanner/PayFormCompleteBanner.scss'

const PayFormCompleteBanner = ({ subtitle, title, fullPrice}) => {
    return(
        <div className='payFormCompleteBanner'>
            <div className='container'>
                <p>{subtitle}</p>
                <h5>{title} <span>{fullPrice}</span></h5>
            </div>
        </div>
    )
}

export default PayFormCompleteBanner;