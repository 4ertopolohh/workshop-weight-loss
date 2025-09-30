import '../FooterTitle/FooterTitle.scss'

import footerLogo from '../../assets/images/pictures/footerLogo.svg'

const FooterTitle = () => {
    return(
        <div className='footerTitle'>
            <img src={footerLogo} alt="" className='footerLogo'/>
            <p className='footerTitleText'>Практикум «Как начать худеть в понедельник и не бросить во вторник»</p>
        </div>
    )
}

export default FooterTitle;