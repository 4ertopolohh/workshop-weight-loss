import '../BuyBanner/BuyBanner.scss'

const BuyBanner = ({
    background, 
    items = [],
    fullCost,
    monthCost,
    saleCost,
    backgroundColor,
    children,
    width,
    height
}) => {

    const buyBannerStyle = {
        width: width ? `${width}px` : 'auto',
        height: height ? `${height}px` : 'auto',
        backgroundColor: backgroundColor,
        backgroundImage: background ? `url(${background})` : 'none' 
    }

    return(
        <div className='buyBanner' style={buyBannerStyle}>
            <div className='container' id='buyBannerContainer'>
                <div className='buyBannerList'>
                    <ul>
                        {items.map((item, index) => (
                            <li key={index} className='buyBannerListItem'>
                                {item.text}
                            </li>
                        ))} 
                    </ul>
                </div>
                <div className='buyBannerCost'>
                    <div className='defaultCost'>
                        <h3 className='fullCost'>{fullCost}₽</h3>
                        <h4 className='monthCost'>Оплата: {monthCost}₽ в месяц</h4>
                    </div>
                    <div className='buyBannerSaleCost'>
                        <h4 className='saleCostTitle'>Или оплата единым платежом<span> со скидкой</span></h4>
                        <h4 className='saleCost'><span>{fullCost}₽</span>{saleCost}₽</h4>
                    </div>
                </div>
                <div className='buyBannerButton'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default BuyBanner;