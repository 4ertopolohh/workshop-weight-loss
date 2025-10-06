import '../NavigatingBar/NavigatingBar.scss'

const NavigatingBar = ({ items = [] }) => {
    return(
        <section className='navigatingBar'>
            <div className='container'>
                <ul>
                    {items.map((item, index) => (
                        <li key={index} className={index < items.length - 1 ? 'faded' : ''}>
                            <p>{item.text}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default NavigatingBar;