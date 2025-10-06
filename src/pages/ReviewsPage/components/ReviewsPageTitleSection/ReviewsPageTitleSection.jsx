import '../ReviewsPageTitleSection/ReviewsPageTitleSection.scss'

const ReviewsPageTitleSection = ({ text }) => {
    return(
        <section className='reviewsPageTitleSection'>
            <div className='container'>
                <h1>{text}</h1>
            </div>
        </section>
    )
}

export default ReviewsPageTitleSection;