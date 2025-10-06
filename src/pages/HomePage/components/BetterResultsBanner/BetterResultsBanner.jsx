import BetterResult from '../BetterResult/BetterResult';
import '../BetterResultsBanner/BetterResultsBanner.scss'
import '../BetterResultsBanner/BetterResultsBannerMobile.scss'

const BetterResultsBanner = () => {
    return(
        <div className='betterResultsBanner'>
            <h3>Лучшие результаты участников в цифрах</h3>
            <BetterResult name={'Среди мужчин'} value={'31'}/>
            <BetterResult name={'Среди женщин'} value={'32'}/>
        </div>
    )
}

export default BetterResultsBanner;