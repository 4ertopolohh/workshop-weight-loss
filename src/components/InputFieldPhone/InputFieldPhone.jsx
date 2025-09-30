import '../InputFieldPhone/InputFieldPhone.scss'
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'
import { useState, useEffect } from 'react';

const InputFieldPhone = ({ hasError = false, onPhoneChange, phoneValue }) => {
    const [phone, setPhone] = useState(phoneValue || '');

    useEffect(() => {
        setPhone(phoneValue || '');
    }, [phoneValue]);

    const handlePhoneChange = (value) => {
        setPhone(value);
        onPhoneChange(value);
    };

    return(
        <div className={`formPhoneField ${hasError ? 'error' : ''}`}>
            <PhoneInput
                defaultCountry="RU"
                value={phone}
                onChange={handlePhoneChange}
                international
                placeholder="Введите номер телефона"
                className="formInputPhone"
                required
            />
        </div>
    )
}

export default InputFieldPhone;