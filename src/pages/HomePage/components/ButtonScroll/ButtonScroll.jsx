import '../ButtonScroll/ButtonScroll.scss'

const ButtonScroll = ({
    width,
    height,
    background,
    text,
    color,
    fontSize,
    fontWeight,
    pixels,
    direction,
    hoverBackground
}) => {
    
    const scrollPage = () => {
        const scrollAmount = direction === 'down' ? pixels : -pixels;
        window.scrollBy({
            top: scrollAmount,
            behavior: 'smooth' 
        });
    };

    const buttonStyle = {
        width: width || 'auto',
        height: height || 'auto',
        background: background || 'initial',
        backgroundColor: background || 'initial',
        color: color || '#000',
        fontSize: fontSize || 14,
        fontWeight: fontWeight || 400,
        '--hover-background': hoverBackground,
    };

    return(
        <button  className='buttonScroll'
            style={buttonStyle}
            onClick={scrollPage}
        >
            <span>{text}</span>
        </button>
    )
}

export default ButtonScroll;