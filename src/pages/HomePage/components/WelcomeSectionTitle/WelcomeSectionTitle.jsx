import '../WelcomeSectionTitle/WelcomeSectionTitle.scss'

const WelcomeSectionTitle = ({ textPart1, textPart2 }) => {
    return(
        <div className='welcomeSectionTitle'>
            <h1>{textPart1}<br />{textPart2}</h1>
        </div>
    )
}

export default WelcomeSectionTitle;