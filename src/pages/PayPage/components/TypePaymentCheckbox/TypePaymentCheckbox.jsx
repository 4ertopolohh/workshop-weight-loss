import '../TypePaymentCheckbox/TypePaymentCheckbox.scss'
import { createContext, useContext } from 'react';

const PaymentContext = createContext();

export const PaymentProvider = ({ children, selected, onSelect }) => {
  return (
    <PaymentContext.Provider value={{ selected, onSelect }}>
      {children}
    </PaymentContext.Provider>
  );
};

const TypePaymentCheckbox = ({ title, subtitle, fullPrice, value, hasError = false, priceClass = "text" }) => {
  const { selected, onSelect } = useContext(PaymentContext);
  const isChecked = selected === value;

  return(
    <div 
      className={`typePaymentCheckbox ${isChecked ? 'active' : ''} ${hasError ? 'error' : ''}`}
      onClick={() => onSelect(value)}
    >
      <div className='payFormCheckboxContainer'>
        <div className='customCheckbox'>
          <input 
            type="checkbox" 
            checked={isChecked}
            onChange={() => {}}
            className="checkboxInput"
          />
          <span className="checkmark"></span>
        </div>
        <div className='payFormCheckboxDescription'>
          <h4 className='payFormCheckboxTitle'>{title}₽ <span className={priceClass}>{fullPrice}</span></h4>
          <p className='payFormCheckboxSubtitle'>{subtitle}</p>
        </div> 
      </div>
    </div>
  )
}

export default TypePaymentCheckbox;