import '../PayFormComplete/PayFormComplete.scss'
import '../PayFormComplete/PayFormCompleteMobile.scss'
import CloseButton from '../../../HomePage/components/CloseButton/CloseButton';
import PayFormCompleteCongratulation from '../PayFormCompleteCongratulation/PayFormCompleteCongratulation';
import PayFormCompleteBanner from '../PayFormCompleteBanner/PayFormCompleteBanner';
import FeedbackLinks from '../../../../components/FeedbackLinks/FeedbackLinks';
import { useMediaQuery } from 'react-responsive';

import tgIcon from '../../../../assets/images/icons/telegramIcon.svg'
import whatsappIcon from '../../../../assets/images/icons/whatsappIcon.svg'

const PayFormComplete = ({ selectedData }) => {

    const payLinksItems = [
        {icon: tgIcon, link: '/'},
        {icon: whatsappIcon, link: '/'},
    ]

    const isMobile = useMediaQuery({ maxWidth: 651 })

    // Функция для получения подписи способа оплаты
    const getPaymentSubtitle = (paymentType) => {
        return paymentType === 'full' ? 'Оплачено единовременным платежом' : 'Оплачено в рассрочку';
    };

    return(
        <div className='payFormComplete'>
            <div className='container'>
                <CloseButton navigateBack={true} />
                {isMobile ? (
                    <h5 className='payFormTitle'>Покупка</h5>
                ) : (
                    <h5 className='payFormTitle'>Покупка места на практикуме снижения веса</h5>
                )}
                <PayFormCompleteCongratulation />
                <div className='payFormCompleteContent'>
                    <PayFormCompleteBanner 
                        subtitle={'Форма участия'}
                        title={selectedData.workshop.title}
                        fullPrice={''}
                    />
                    <PayFormCompleteBanner 
                        subtitle={getPaymentSubtitle(selectedData.payment.type)}
                        title={`${selectedData.payment.title}₽`}
                        fullPrice={selectedData.payment.fullPrice}
                    />
                </div>
            </div>
            <FeedbackLinks items={payLinksItems}/>
        </div>
    )
}

export default PayFormComplete;