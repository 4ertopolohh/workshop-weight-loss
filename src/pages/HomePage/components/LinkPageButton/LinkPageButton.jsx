import { Link } from 'react-router-dom';
import '../LinkPageButton/LinkPageButton.scss'

const LinkPageButton = ({
    width,
    height,
    background,
    text,
    color,
    fontSize,
    fontWeight,
    page,
    hoverBackground
}) => {

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
        <Link 
            to={page || '/'} 
            className='linkPageButton'
            style={buttonStyle}
        >
            <span>{text}</span>
        </Link>
    )
}

export default LinkPageButton;