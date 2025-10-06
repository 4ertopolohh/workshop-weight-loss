import '../FooterInfo/FooterInfo.scss'
import '../FooterInfo/FooterInfo1394.scss'

const FooterInfo = () => {
    return(
        <div className='footerInfo'>
            <div className='footerInfoLinks'>
                <a 
                    href="https://minus-12.tilda.ws/" 
                    className='privacyPolicy'
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Политика конфиденциальности
                </a>
                <a 
                    href="https://minus-12.tilda.ws/" 
                    className='offerAgreement'
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Договор оферты
                </a>
            </div>
            <p className='infoYear'>2025 все права защищены</p>
            <p className='infoDesigner'>Дизайн: Наталья Романова</p>
            <p className='infoDeveloper'>Разработка: <span><a href="https://kwork.ru/user/4ertopolohh" target="_blank">Соколов Иван</a></span></p>
        </div>
    )
}

export default FooterInfo;
