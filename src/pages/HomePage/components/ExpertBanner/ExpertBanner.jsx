import '../ExpertBanner/ExpertBanner.scss'

const ExpertBanner = ({ color, title, subtitle, image, quotes, quote, description, items = [] }) => {

    const expertBannerStyle = {
        background: color
    }

    return(
        <div className='expertBanner' style={expertBannerStyle}>
            <div className='container'>
                <div className='expertBannerTitle'>
                    <h2>{title}</h2>
                    <p>{subtitle}</p>
                </div>
                <img src={image} alt="" loading='lazy' className='expertResultImage'/>
                <div className='expertBannerQuote'>
                    <img src={quotes} alt="" loading='lazy'/>
                    <p>«{quote}»</p>
                </div>
                <p className='expertDescription'>{description}</p>
                <ul className='expertSkillsList'>
                    {items.map((item, index) => (
                        <li key={index} style={{ '--list-icon': `url(${item.icon})` }} className='expertSkillsListItem'>
                            {item.text}
                        </li>
                    ))} 
                </ul>
            </div>
        </div>
    )
}

export default ExpertBanner;