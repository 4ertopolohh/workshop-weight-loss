import '../TypeWorkshopCheckbox/TypeWorkshopCheckbox.scss'
import { createContext, useContext } from 'react'; // Добавлен createContext

const WorkshopContext = createContext();

export const WorkshopProvider = ({ children, selected, onSelect }) => {
  return (
    <WorkshopContext.Provider value={{ selected, onSelect }}>
      {children}
    </WorkshopContext.Provider>
  );
};

const TypeWorkshopCheckbox = ({ title, subtitle, value, hasError = false }) => {
  const { selected, onSelect } = useContext(WorkshopContext);
  const isChecked = selected === value;

  return(
    <div 
      className={`typeWorkshopCheckbox ${isChecked ? 'active' : ''} ${hasError ? 'error' : ''}`}
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
          <h4 className='payFormCheckboxTitle'>{title}</h4>
          <p className='payFormCheckboxSubtitle'>{subtitle}</p>
        </div> 
      </div>
    </div>
  )
}

export default TypeWorkshopCheckbox;