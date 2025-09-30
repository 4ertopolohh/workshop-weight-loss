import '../ResultBannerText/ResultBannerText.scss'

const ResultBannerText = ({ name, weight, age, review }) => {
    return (
        <div className='resultBannerText'>
            <div className='resultBannerInfo'>
                <div className='resultBannerInfoText'>
                    <div className='resultBannerInfoTitle'>
                        <h5 className='resultBannerInfoName'>{name}</h5>
                        <span className='resultBannerInfoWeight'>-{weight} кг</span>
                    </div>
                    <span className='resultBannerInfoAge'>{age}</span>
                </div>
            </div>
            <div className='resultBannerReview'>
                <p>«{review}»</p>
            </div>
        </div>
    )
}

export default ResultBannerText
