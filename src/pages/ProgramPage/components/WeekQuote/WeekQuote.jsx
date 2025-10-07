import '../WeekQuote/WeekQuote.scss'
import blueQuotes from '../../../../assets/images/icons/blueQuotes.svg'

const WeekQuote = ({ text }) => {
    return(
        <div className='weekQuote'>
            <div className='container'>
                <img src={blueQuotes} alt="" loading='lazy'/>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default WeekQuote;