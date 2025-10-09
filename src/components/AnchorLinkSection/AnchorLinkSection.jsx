import '../AnchorLinkSection/AnchorLinkSection.scss'
import '../AnchorLinkSection/AnchorLinkSectionMobile.scss'
import AnchorLinkTab from '../AnchorLinkTab/AnchorLinkTab';

const AnchorLinkSection = ({items = []}) => {
    return(
        <section className='anchorLinkSection'>
            <div className='container'>
                {items.map((item, index) => (
                    <AnchorLinkTab 
                        key={index}
                        text={item.text}
                        page={item.page}
                        sectionId={item.sectionId}
                    />
                ))}
            </div>
        </section>
    )
}

export default AnchorLinkSection;