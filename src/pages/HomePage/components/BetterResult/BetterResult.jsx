import '../BetterResult/BetterResult.scss'

const BetterResult = ({ name, value}) => {
    return(
        <div className='betterResult'>
            <p className='nameResultCategory'>{name}:</p>
            <div className='resultValue'>
                <h4>-{value}</h4>
                <span>кг</span>
            </div>
        </div>
    )
}

export default BetterResult;