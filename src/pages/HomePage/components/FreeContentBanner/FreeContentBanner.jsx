import '../FreeContentBanner/FreeContentBanner.scss';
import LinkPageButton from '../LinkPageButton/LinkPageButton';

const FreeContentBanner = ({
    subtitle,
    subtitleIcon,
    title,
    author,
    description,
    color
}) => {

    const freeContentBannerPreviewStyle = {
        background: color
    }

    const freeContentBannerSubtitleStyle = {
        color: color
    }

    return(
        <div className='freeContentBanner'>
            <div className='freeContentBannerPreview' style={freeContentBannerPreviewStyle}>
                <div className='container'>
                    <div 
                        className='freeContentBannerPreviewSubtitle'
                        style={{ '--subtitle-icon': `url(${subtitleIcon})` }}
                    >
                        <p style={freeContentBannerSubtitleStyle}>{subtitle}</p>
                    </div>
                    <div className='freeContentBannerPreviewTitle'>
                        <h6>{title}</h6>
                    </div>
                    <div className='freeContentBannerPreviewAuthor'>
                        <p>Автор: {author}</p>
                    </div>
                </div>
            </div>
            <div className='freeContentBannerDescription'>
                <div className='container'>
                    <p className='freeContentBannerDescriptionText'>{description}</p>
                    <LinkPageButton 
                        width={'100%'}
                        height={20}
                        background={'none'}
                        text={'Читать подробнее'}
                        color={'#2471FF'}
                        fontSize={15}
                        fontWeight={600}
                        page={'/'}
                    />
                </div>
            </div>
        </div>
    )
}

export default FreeContentBanner;