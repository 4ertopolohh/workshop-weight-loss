import '../SaleSectionBannerContentAnalog/SaleSectionBannerContentAnalog.scss'
import '../SaleSectionBannerContentAnalog/SaleSectionBannerContentAnalogMobile.scss'

const SaleSectionBannerContentAnalog = ({ 
    title,
    items = [],
    description,
    fullPrice,
    monthPrice,
    backgroundColor,
    children1,
    children2,
    defaultPriceClass
}) => {

    const saleSectionBannerContentAnalogStyle = {
        background: backgroundColor
    }

    return(
        <div className='saleSectionBannerContentAnalog' style={saleSectionBannerContentAnalogStyle}>
            <div className='container'>
                <div className='headerTitleWrapper'>
                    <div className='header'>
                        <h5 className='title'>{title}</h5>
                        <ul className='saleSectionBannerContentAnalogList'>
                            {items.map((item, index) => (
                                <li key={index} style={{ '--list-icon': `url(${item.icon})` }}>
                                    {item.text}
                                </li>
                            ))} 
                        </ul>
                    </div>
                    <p className='description'>{description}</p>
                </div>
                <div className='price'>
                    {children1}
                    <div className={`defaultPrice ${defaultPriceClass || ''}`}>
                        <h5 className='fullPrice'>{fullPrice} ₽</h5>
                        <p className='monthPrice'>{monthPrice}</p>
                    </div>
                    {children2}
                </div>
            </div>
        </div>
    )
}

export default SaleSectionBannerContentAnalog;