import '../PageTitle/PageTitle.scss'
import '../PageTitle/PageTitleMobile.scss'

const PageTitle = ({ text }) => {
    return(
        <section className='pageTitle'>
            <div className='container'>
                <h1>{text}</h1>
            </div>
        </section>
    )
}

export default PageTitle;