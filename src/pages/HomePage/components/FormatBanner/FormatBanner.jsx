import '../FormatBanner/FormatBanner.scss'
import '../FormatBanner/FormatBannerMobile.scss'

const FormatBanner = ({ title, formatBanneritems = [], width, height, containerWidth, icon }) => {
    return (
        <div 
            className='formatBanner'
            style={{ width: width, height: height }}
        >
            <div className='container' style={{ width: containerWidth }}>
                <img src={icon} alt="" loading='lazy'/>
                <h3 className='formatBannerTitle'>{title}</h3>
                <ul className='formatBannerList'>
                    {formatBanneritems.map((item, index) => (
                        <>
                            <li key={index} className='formatBannerListItem'>
                                {item.text}
                            </li>
                            <p className='formatBannerSubtitle'>{item.subtitle}</p>
                        </>
                    ))}
                </ul>
            </div>
        </div>
    )
}


export default FormatBanner;