import '../HeaderButton/HeaderButton.scss'

import fireLogo from '../../assets/images/icons/fireLogo.svg'

const HeaderButton = ({ text }) => {
    return(
        <div className='headerButton'>
            <img src={fireLogo} alt="Fire Icon" loading='lazy'/>
            <button>{ text }</button>
        </div>
    )
}

export default HeaderButton;