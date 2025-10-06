import ClientCharacteristic from '../ClientCharacteristic/ClientCharacteristic';
import '../ReviewsSectionBanner/ReviewsSectionBanner.scss'

const ReviewsSectionBanner = ({ 
    review, 
    avatar, 
    name, 
    age, 
    items=[],
    schedule 
}) => {
    return(
        <div className='reviewsSectionBanner'>
            <div className='preview'>
                <img src={review} alt="" loading='lazy'/>
            </div>
            <div className='description'>
                <img src={avatar} alt="" loading='lazy' className='clientAvatar'/>
                <div className='container'>
                    <div className='clientInfo'>
                        <p className='clientInfoName'>{name}</p>
                        <p className='clientInfoAge'>{age}</p>
                    </div>
                    <div className='clientСharacteristics'>
                        <ul className='clientСharacteristicsList'>
                            {items.map((item, index) => (
                                <li key={index}>
                                    <ClientCharacteristic name={item.name} value={item.value}/>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='clientWorkSchedule'>
                        <p>График работы: <span>{schedule}</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewsSectionBanner;