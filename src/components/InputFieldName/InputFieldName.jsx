import '../InputFieldName/InputFieldName.scss'
import { useState, useEffect } from 'react';

const InputFieldName = ({ hasError = false, onNameChange, nameValue }) => {
    const [name, setName] = useState(nameValue || '');

    useEffect(() => {
        setName(nameValue || '');
    }, [nameValue]);

    const handleChange = (e) => {
        const value = e.target.value;
        setName(value);
        onNameChange(value);
    };

    return( 
        <input
            type="text"
            id="feedbackFormName"
            name="name"
            className={`formInputName ${hasError ? 'error' : ''}`}
            placeholder="Имя"
            value={name}
            onChange={handleChange}
            required
        />
    )
}

export default InputFieldName;