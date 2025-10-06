import '../AboutMeButton/AboutMeButton.scss'

const AboutMeButton = ({ onClick }) => {
    return(
        <button className='aboutMeButton' onClick={onClick}>
            Обо мне
        </button>
    )
}

export default AboutMeButton;