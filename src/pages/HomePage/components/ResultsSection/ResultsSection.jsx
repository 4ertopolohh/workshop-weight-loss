import BetterResultsBanner from '../BetterResultsBanner/BetterResultsBanner';
import PeoplesResults from '../PeoplesResults/PeoplesResults';
import '../ResultsSection/ResultsSection.scss'
import '../ResultsSection/ResultsSection1050.scss'
import ResultsTitle from '../ResultsTitle/ResultsTitle';
import { useMediaQuery } from 'react-responsive';

const ResultsSection = () => {

    const isTablet950 = useMediaQuery({ maxWidth: 951 })

    return(
        <section className='resultsSection'>
            {isTablet950 ? (
                <div className='container'>
                    <ResultsTitle />
                    <PeoplesResults />
                    <BetterResultsBanner />
                </div>
            ) : (
                <div className='container'>
                    <div className='resultsFirstSection'>
                        <ResultsTitle />
                        <BetterResultsBanner />
                    </div>
                    <PeoplesResults />
                </div>
            )}
                
        </section>
    )
}

export default ResultsSection;