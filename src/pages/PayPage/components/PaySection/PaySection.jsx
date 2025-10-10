import PayForm from '../PayForm/PayForm'
import PayFormComplete from '../PayFormComplete/PayFormComplete';
import '../PaySection/PaySection.scss'
import { useState } from 'react';

const PaySection = () => {
    const [isPaymentComplete, setIsPaymentComplete] = useState(false);
    const [selectedData, setSelectedData] = useState(null);

    const handlePaymentSuccess = (data) => {
        setSelectedData(data);
        setIsPaymentComplete(true);
    };

    return(
        <section className='paySection'>
            <div className='container'>
                {!isPaymentComplete && (
                    <PayForm onPaymentSuccess={handlePaymentSuccess} />
                )}
                {isPaymentComplete && selectedData && (
                    <PayFormComplete selectedData={selectedData} />
                )}
            </div>
        </section>
    )
}

export default PaySection;