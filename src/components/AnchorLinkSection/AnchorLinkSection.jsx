import '../AnchorLinkSection/AnchorLinkSection.scss'
import '../AnchorLinkSection/AnchorLinkSectionMobile.scss'
import AnchorLinkTab from '../AnchorLinkTab/AnchorLinkTab';

const AnchorLinkSection = () => {
    return(
        <section className='anchorLinkSection'>
            <div className='container'>
                <AnchorLinkTab 
                    text={'Как проходит практикум'}
                    page="/"
                    sectionId="howDoesSection"
                />
                <AnchorLinkTab 
                    text={'Вопросы и ответы'}
                    page="/"
                    sectionId="FAQSection"
                />
            </div>
        </section>
    )
}

export default AnchorLinkSection;