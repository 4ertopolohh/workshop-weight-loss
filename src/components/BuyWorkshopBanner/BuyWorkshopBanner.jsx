import LinkPageButton from '../../pages/HomePage/components/LinkPageButton/LinkPageButton'
import '../BuyWorkshopBanner/BuyWorkshopBanner.scss'
import '../BuyWorkshopBanner/BuyWorkshopBanner1050.scss'
import '../BuyWorkshopBanner/BuyWorkshopBannerMobile.scss'
import { useMediaQuery } from 'react-responsive';

const BuyWorkshopBanner = ({ 
    height, 
    backgroundColor, 
    previewBackground, 
    title, 
    itemsPreview = [], 
    itemsDescription = [], 
    subtitle, 
    subtitleTitle,
    buttonColor,
    fullPrice,
    monthPrice,
    children,
    children2,
    hoverColor
}) => {

    const isTablet1050 = useMediaQuery({ maxWidth: 1051 })
    const isMobile = useMediaQuery({ maxWidth: 451 })

    const buyWorkshopBannerStyle = {
        height: height,
        background: backgroundColor
    }

    const buyWorkshopBannerPreviewStyle = {
        background: previewBackground
    }

    return(
        <div className='buyWorkshopBanner' style={buyWorkshopBannerStyle}>
            <div className='buyWorkshopBannerPreview' style={buyWorkshopBannerPreviewStyle}>
                <div className='container'>
                    <div>
                        <h3 className='buyWorkshopBannerPreviewTitle'>{title}</h3>
                        <ul className='buyWorkshopBannerPreviewList'>
                            {itemsPreview.map((item, index) => (
                                <li key={index} style={{ '--list-icon': `url(${item.icon})` }}>
                                    {item.text}
                                </li>
                            ))} 
                        </ul>
                    </div>
                    <div className='buyWorkshopBannerPreviewSubtitle'>
                        <p>{subtitle}</p>
                        <h5>{subtitleTitle}</h5>
                    </div>
                </div>
            </div>
            <div className='buyWorkshopBannerDescription'>
                <div className='container'>
                    <ul className='buyWorkshopBannerDescriptionList'>
                        {itemsDescription.map((item, index) => (
                            <li key={index} style={{ color: item.color || '#000000' }}>
                                {item.text}
                            </li>
                        ))} 
                    </ul>
                    {isTablet1050 ? (
                        <div className='buyWorkshopBannerDescriptionPrice'>
                            {children2}
                            <div className='defaultPrice'>
                                <h3>{fullPrice}₽</h3>
                                <h5>{monthPrice}</h5>
                            </div>
                            {children}
                        </div>
                    ) : (
                        <div className='buyWorkshopBannerDescriptionPrice'>
                            {children}
                            <div className='defaultPrice'>
                                <h3>{fullPrice}₽</h3>
                                <h5>{monthPrice}</h5>
                            </div>
                            {children2}
                        </div>
                    )}
                    
                    <LinkPageButton 
                        background={buttonColor}
                        fontSize={18}
                        fontWeight={600}
                        color={'#fff'}
                        width={'100%'}
                        height={62}
                        page={'/'}
                        text={'Купить'}
                        hoverBackground={hoverColor}
                    />
                </div>
            </div>
        </div>
    )
}

export default BuyWorkshopBanner;