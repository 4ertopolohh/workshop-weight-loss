import '../AboutMeButton/AboutMeButton.scss'

const AboutMeButton = ({ onClick }) => {
    return(
        <button className='aboutMeButton' onClick={onClick}>
            обо мне
        </button>
    )
}

export default AboutMeButton;