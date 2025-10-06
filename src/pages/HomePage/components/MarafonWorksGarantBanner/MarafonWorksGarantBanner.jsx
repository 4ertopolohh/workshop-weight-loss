import '../MarafonWorksGarantBanner/MarafonWorksGarantBanner.scss'

const MarafonWorksGarantBanner = ({ title, desc, icon }) => {
    return(
        <div className='marafonWorksGarantBanner'>
            <h3 className='title'>ㅤ  {title}</h3>
            <img src={icon} alt="" />
            <p className='description'>{desc}</p>
        </div>
    )
}

export default MarafonWorksGarantBanner;