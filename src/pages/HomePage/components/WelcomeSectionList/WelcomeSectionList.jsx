import '../WelcomeSectionList/WelcomeSectionList.scss'
import '../WelcomeSectionList/WelcomeSectionList650.scss'

const WelcomeSectionList = ({ welcomeItems = [] }) => {
    return(
        <div className='welcomeSectionList'>
            <ul>
                {welcomeItems.map((item, index) => (
                    <li key={index} style={{ '--list-icon': `url(${item.icon})` }} className='welcomeListItem'>
                        {item.text}
                    </li>
                ))} 
            </ul>
        </div>
    )
}

export default WelcomeSectionList;