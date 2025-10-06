import '../SavingBanner/SavingBanner.scss'
import '../SavingBanner/SavingBanner950.scss'
import '../SavingBanner/SavingBannerMobile.scss'

const SavingBanner = ({ height, items=[], title, icon, color }) => {
    
    const savingBannerStyle = {
        height: height,
        borderColor: color
    }

    const savingBannerPreviewStyle = {
        background: color
    }

    return(
        <div className='savingBanner' style={savingBannerStyle}>
            <div className='savingBannerPreview' style={savingBannerPreviewStyle}>
                <div className='container'>
                    <img src={icon} alt="" loading='lazy'/>
                    <h3>{title}</h3>
                </div>
            </div>
            <div className='savingBannerDescription'>
                <div className='container'>
                    <ul>
                        {items.map((item, index) => (
                            <li key={index} className='welcomeListItem'>
                                {item.text}
                            </li>
                        ))} 
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SavingBanner;