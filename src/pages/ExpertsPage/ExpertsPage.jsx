import '../ExpertsPage/ExpertsPage.scss'
// import { useMediaQuery } from 'react-responsive';

const ExpertsPage = () => {

  // const isTablet1050 = useMediaQuery({ maxWidth: 1051 })

  return (
    <main className="experts-page">
      {/* {isTablet1050 ? (
        <TopBarMobile text={'Отзывы'} page={'/'}/>
      ) : (
        <div></div>
      )} */}
      <div className='container' id='inDev'>
        <h1>Страница экспертов (в разработке)</h1>
      </div>
    </main>
  );
}

export default ExpertsPage;