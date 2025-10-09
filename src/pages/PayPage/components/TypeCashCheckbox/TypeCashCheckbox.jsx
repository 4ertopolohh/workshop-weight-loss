import '../TypeCashCheckbox/TypeCashCheckbox.scss'
import { createContext, useContext } from 'react'; // Добавлен createContext

const CashContext = createContext();

export const CashProvider = ({ children, selected, onSelect }) => {
  return (
    <CashContext.Provider value={{ selected, onSelect }}>
      {children}
    </CashContext.Provider>
  );
};

const TypeCashCheckbox = ({ image, value, hasError = false }) => {
  const { selected, onSelect } = useContext(CashContext);
  const isChecked = selected === value;

  return(
    <div 
      className={`TypeCashCheckbox ${isChecked ? 'active' : ''} ${hasError ? 'error' : ''}`}
      onClick={() => onSelect(value)}
    >
      <div className='customCheckbox'>
        <input 
          type="checkbox" 
          checked={isChecked}
          onChange={() => {}}
          className="checkboxInput"
        />
        <span className="checkmark"></span>
      </div>
      <img src={image} alt="" loading='lazy'/>
    </div>
  )
}

export default TypeCashCheckbox;