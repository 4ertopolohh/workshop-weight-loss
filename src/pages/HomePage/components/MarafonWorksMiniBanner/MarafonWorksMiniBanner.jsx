import '../MarafonWorksMiniBanner/MarafonWorksMiniBanner.scss'

const MarafonWorksMiniBanner = ({ icon, text }) => {
    return(
        <div className='marafonWorksMiniBanner'>
            <img src={icon} alt="" loading='lazy' className='miniBannerImage'/>
            <h6>{text}</h6>
        </div>
    )
}

export default MarafonWorksMiniBanner;