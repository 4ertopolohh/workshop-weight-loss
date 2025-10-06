import '../Loader/Loader.scss';

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader-spinner"></div>
      <p>Страница загружается...</p>
    </div>
  );
};

export default Loader;