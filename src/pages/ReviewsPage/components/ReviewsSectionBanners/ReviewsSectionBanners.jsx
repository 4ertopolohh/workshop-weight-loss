import '../ReviewsSectionBanners/ReviewsSectionBanners.scss'
import '../ReviewsSectionBanners/ReviewsSectionBannersMobile.scss'

const ReviewsSectionBanners = ({ child1, child2, child3 }) => {
    return(
        <div className='reviewsSectionBanners'>
            {child1}
            {child2}
            {child3}
        </div>
    )
}

export default ReviewsSectionBanners;