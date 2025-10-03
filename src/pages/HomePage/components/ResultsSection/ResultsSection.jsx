import BetterResultsBanner from '../BetterResultsBanner/BetterResultsBanner';
import PeoplesResults from '../PeoplesResults/PeoplesResults';
import '../ResultsSection/ResultsSection.scss'
import '../ResultsSection/ResultsSection1050.scss'
import ResultsTitle from '../ResultsTitle/ResultsTitle';

const ResultsSection = () => {
    return(
        <section className='resultsSection'>
            <div className='container'>
                <div className='resultsFirstSection'>
                    <ResultsTitle />
                    <BetterResultsBanner />
                </div>
                <PeoplesResults />
            </div>
        </section>
    )
}

export default ResultsSection;