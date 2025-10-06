import '../CookieButton/CookieButton.scss'

const CookieButton = ({ onClick }) => {
    return(
        <button className='cookieButton' onClick={onClick}>Согласен</button>
    )
}

export default CookieButton;
