import '../MarafonWorksList/MarafonWorksList.scss'

const MarafonWorksList = ({ marafonWorksItems = [] }) => {
    return(
        <ul className='marafonWorksList'>
            {marafonWorksItems.map((item, index) => (
                <li key={index} className='marafonWorksListItem'>
                    {item.text}
                </li>
            ))} 
        </ul>
    )
}

export default MarafonWorksList;