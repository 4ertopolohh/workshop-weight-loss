import '../HowDoesColorBanner/HowDoesColorBanner.scss'
import '../HowDoesColorBanner/HowDoesColorBanner1050.scss'
import '../HowDoesColorBanner/HowDoesColorBannerMobile.scss'

const HowDoesCollorBanner = ({
    baseColor,
    background,
    width,
    height,
    title,
    subtitle = '',
    description,
    children
}) => {
    
    const containerStyle = {
        background: background || 'initial',
        width: width || 'auto',
        height: height || 'auto',
        border: baseColor ? `2px solid ${baseColor}` : 'none'
    };

    const titleStyle = {
        background: baseColor || 'initial',
        width: width || 'auto'
    };

    const descStyle = {
        width: width
    }

    return(
        <div 
            className='howDoesCollorBanner'
            style={containerStyle}
        >
            <h3 
                className='title'
                style={titleStyle}
            >
                ㅤ  {title}
                <span className='subtitle'>ㅤ  ㅤ  {subtitle}</span>
            </h3>
            <div className='howDoesCollorBannerContent'>
                <p className='description' style={descStyle}>{description}</p>
                {children}
            </div>
        </div>
    )
}

export default HowDoesCollorBanner;