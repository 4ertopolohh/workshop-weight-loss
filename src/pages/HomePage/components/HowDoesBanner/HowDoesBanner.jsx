import '../HowDoesBanner/HowDoesBanner.scss'
import '../HowDoesBanner/HowDoesBannerMobile.scss'

const HowDoesBanner = ({ icon, title, description, width, height, containerWidth }) => {
    return(
        <div className='howDoesBanner' style={{ width: width, height: height }}>
            <div className='container' style={{ width: containerWidth }}>
                <img src={icon} alt="" loading='lazy' className='howDoesBannerIcon'/>
                <h4 className='howDoesBannerTitle' style={{ width: containerWidth }}>{title}</h4>
                <p className='howDoesBannerDescription' style={{ width: containerWidth }}>{description}</p>
            </div>
        </div>
    )
}

export default HowDoesBanner;