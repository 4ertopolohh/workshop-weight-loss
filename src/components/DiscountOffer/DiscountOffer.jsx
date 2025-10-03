import '../DiscountOffer/DiscountOffer.scss'
import '../DiscountOffer/DiscountOffer1050.scss'

const DiscountOffer = ({ oldPrice, newPrice }) => {
    return(
        <div className='discountOffer'>
            <div className='container'>
                <p className='discountOfferDescription'>Или оплата единым платежом<span> со скидкой</span></p>
                <div className='discountOfferPrice'>
                    <h6 className='discountOfferOldPrice'>{oldPrice}₽</h6>
                    <h3 className='discountOfferNewPrice'>{newPrice}₽</h3>
                </div>
            </div>
        </div>
    )
}

export default DiscountOffer;