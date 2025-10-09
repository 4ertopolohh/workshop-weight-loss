import LinkPageButton from '../../pages/HomePage/components/LinkPageButton/LinkPageButton';
import '../SaleBannerAnalog/SaleBannerAnalog.scss'
import '../SaleBannerAnalog/SaleBannerAnalogMobile.scss'
import SaleSectionBannerContentAnalog from '../SaleSectionBannerContentAnalog/SaleSectionBannerContentAnalog';

const SaleBannerAnalog = ({
    title,
    items = [],
    description,
    fullPrice,
    monthPrice,
    backgroundColor,
    color,
    hoverColor,
    children1,
    children2,
    defaultPriceClass
}) => {
    return(
        <div className='saleBannerAnalog'>
            <SaleSectionBannerContentAnalog 
                title = {title}
                items = {items}
                description = {description}
                fullPrice = {fullPrice}
                monthPrice = {monthPrice}
                backgroundColor = {backgroundColor}
                children1={children1}
                children2={children2}
                defaultPriceClass={defaultPriceClass}
            >
            </SaleSectionBannerContentAnalog>
            <LinkPageButton 
                width = {'100%'}
                height = {62}
                background = {color}
                text = {'Купить'}
                color = {'#fff'}
                fontSize = {18}
                fontWeight = {600}
                page = {'/pay'}
                hoverBackground={hoverColor}
                hoverColor={hoverColor}
            />
        </div>
    )
}

export default SaleBannerAnalog;