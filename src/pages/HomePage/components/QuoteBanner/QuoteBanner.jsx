import '../QuoteBanner/QuoteBanner.scss'

const QuoteBanner = ({
    width,
    height,
    background,
    title,
    subtitle,
    description,
    marker
}) => {

    const quoteBannerStyle = {
        width: width,
        height: height,
        background: background
    }

    const quoteBannerNameStyle = {
        width: width - 40
    }

    const quoteBannerDescStyle = {
        width: width - 18
    }

    return(
        <div className='quoteBanner' style={quoteBannerStyle}>
            <div className='quoteBannerName' style={quoteBannerNameStyle}>
                <h3>{title}</h3>
                <p>{subtitle}</p>
            </div>
            <div className='quoteBannerDescription' style={quoteBannerDescStyle}>
                <p>«{description}»</p>
                <img src={marker} alt="" loading='lazy'/>
            </div>
        </div>
    )
}

export default QuoteBanner;