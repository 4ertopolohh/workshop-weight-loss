import '../FooterSocials/FooterSocials.scss'

const FooterSocials = ({ socials = [] }) => {
    return(
        <div className='footerSocials'>
            <ul className='footerSocialsList'>
                {socials.map((social, index) => (
                    <li key={index} className='footerSocialsListItem'>
                        <a 
                            href={social.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className='footerSocialsLink'
                        >
                            <img 
                                src={social.icon} 
                                alt={social.alt} 
                                className='footerSocialsIcon'
                                loading='lazy'
                            />
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FooterSocials;