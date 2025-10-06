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
}) => {

    const buttonStyle = {
        width: width || 'auto',
        height: height || 'auto',
        background: background || 'initial',
        color: color || '#000',
        fontSize: fontSize || 14,
        fontWeight: fontWeight || 400
    };

    return(
        <Link 
            to={page || '/'} 
            className='linkPageButton'
            style={buttonStyle}
        >
            {text}
        </Link>
    )
}

export default LinkPageButton;