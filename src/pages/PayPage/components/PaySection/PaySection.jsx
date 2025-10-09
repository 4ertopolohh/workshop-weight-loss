import PayForm from '../PayForm/PayForm'
import '../PaySection/PaySection.scss'

const PaySection = () => {
    return(
        <section className='paySection'>
            <div className='container'>
                <PayForm />
            </div>
        </section>
    )
}

export default PaySection;