import '../InputFieldPhone/InputFieldPhone.scss'
import { useState, useEffect } from 'react';

const InputFieldPhone = ({ hasError = false, onPhoneChange, phoneValue }) => {
    const [phone, setPhone] = useState(phoneValue || '+7');

    useEffect(() => {
        setPhone(phoneValue || '+7');
    }, [phoneValue]);

    const handlePhoneChange = (e) => {
        const value = e.target.value;
        setPhone(value);
        onPhoneChange(value);
    };

    return(
        <div className={`formPhoneField ${hasError ? 'error' : ''}`}>
            <input
                type="tel"
                value={phone}
                onChange={handlePhoneChange}
                placeholder="Введите номер телефона"
                className="formInputPhone"
                required
            />
        </div>
    )
}

export default InputFieldPhone;