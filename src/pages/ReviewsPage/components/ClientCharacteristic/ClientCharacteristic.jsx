import '../ClientCharacteristic/ClientCharacteristic.scss'

const ClientCharacteristic = ({ name, value }) => {
    return(
        <div className='clientCharacteristic'>
            <span className='clientCharacteristicName'>{name}</span>
            <span className='clientCharacteristicValue'>{value}</span>
        </div>
    )
}

export default ClientCharacteristic;