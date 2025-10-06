import '../SaleBannerSalePrice/SaleBannerSalePrice.scss'
import '../SaleBannerSalePrice/SaleBannerSalePriceMobile.scss'

const SaleBannerSalePrice = ({ salePrice, fullPrice, color }) => {

    const subtitleStyle = {
        color: color
    }

    return(
        <div className='saleBannerSalePrice'>
            <div className='container'>
                <p className='subtitle' style={subtitleStyle}>При оплате единым платежом <span>{fullPrice}</span>₽</p>
                <h5 className='salePrice'>{salePrice} ₽</h5>
            </div>
        </div>
    )
}

export default SaleBannerSalePrice;