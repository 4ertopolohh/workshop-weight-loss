import '../GradientBanner/GradientBanner.scss'

const GradientBanner = ({
    width,
    height,
    background
}) => {

    const bannerStyle = {
        width: width,
        height: height,
        background: background
    }

    return(
        <div className='gradientBanner' style={bannerStyle}>

        </div>
    )
}

export default GradientBanner;