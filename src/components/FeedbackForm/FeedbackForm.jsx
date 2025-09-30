import { motion } from 'framer-motion';
import '../FeedbackForm/FeedbackForm.scss';
import { useState, useEffect } from 'react';
import FeedbackSendButton from '../FeedbackSendButton/FeedbackSendButton';
import InputFieldName from '../InputFieldName/InputFieldName';
import InputFieldPhone from '../InputFieldPhone/InputFieldPhone';

const FeedbackForm = () => {
  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [serviceTypeError, setServiceTypeError] = useState(false);
  const [agreementError, setAgreementError] = useState(false);
  const [cooldownTime, setCooldownTime] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceType: '',
    newsletterAgreement: false
  });
  const [personalDataAgreement, setPersonalDataAgreement] = useState(false);

  useEffect(() => {
    const savedEndTime = localStorage.getItem('feedbackCooldownEndTime');
    if (savedEndTime) {
      const remainingTime = Math.max(0, Math.floor((parseInt(savedEndTime) - Date.now()) / 1000));
      if (remainingTime > 0) {
        setCooldownTime(remainingTime);
      }
    }
  }, []);

  useEffect(() => {
    if (cooldownTime > 0) {
      const timer = setInterval(() => {
        setCooldownTime(prev => {
          if (prev <= 1) {
            localStorage.removeItem('feedbackCooldownEndTime');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [cooldownTime]);

  const handleNameChange = (name) => {
    setFormData(prev => ({ ...prev, name }));
    if (nameError) setNameError(false);
  };

  const handlePhoneChange = (phone) => {
    setFormData(prev => ({ ...prev, phone: phone || '' }));
    if (phoneError) setPhoneError(false);
  };

  const handleServiceTypeChange = (type) => {
    setFormData(prev => ({ ...prev, serviceType: type }));
    if (serviceTypeError) setServiceTypeError(false);
  };

  const handlePersonalDataAgreement = (value) => {
    setPersonalDataAgreement(value);
    if (agreementError) setAgreementError(false);
  };

  const handleNewsletterAgreement = (value) => {
    setFormData(prev => ({ ...prev, newsletterAgreement: value }));
  };

  const prepareFormData = () => {
    return {
      name: formData.name.trim(),
      phone: formData.phone,
      service_type: formData.serviceType,
      newsletter_agreement: formData.newsletterAgreement,
      timestamp: new Date().toISOString()
    };
  };

  const handleSubmit = async () => {
    if (cooldownTime > 0) return;

    let hasError = false;

    if (!formData.name.trim()) {
      setNameError(true);
      hasError = true;
    } else {
      setNameError(false);
    }

    if (!formData.phone || formData.phone === '+7') {
      setPhoneError(true);
      hasError = true;
    } else {
      setPhoneError(false);
    }

    if (!formData.serviceType) {
      setServiceTypeError(true);
      hasError = true;
    } else {
      setServiceTypeError(false);
    }

    if (!personalDataAgreement) {
      setAgreementError(true);
      hasError = true;
    } else {
      setAgreementError(false);
    }

    if (hasError) {
      const nameInput = document.getElementById('feedbackFormName');
      const phoneInput = document.querySelector('.PhoneInput input');
      
      if (!formData.name.trim()) {
        nameInput.focus();
      } else if (!formData.phone || formData.phone === '+7') {
        phoneInput.focus();
      }
    } else {
      const submissionData = prepareFormData();
      
      try {
        console.log('Данные для отправки:', submissionData);
        
        console.log('REST запрос был бы отправлен с данными:', JSON.stringify(submissionData, null, 2));
        
        const endTime = Date.now() + 120000;
        localStorage.setItem('feedbackCooldownEndTime', endTime.toString());
        setCooldownTime(120);
        
      } catch (error) {
        console.error('Ошибка при отправке формы:', error);
        alert('Произошла ошибка при отправке формы');
      }
    }
  };

  return (
    <motion.div 
      className="feedbackForm"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
    >
      <div className="container">
        <div className="feedbackFormDescription">
          <div className="feedbackFormTitle">
            <h4 id="feedbackFormTitleOrange">Записаться на практикум</h4>
            <h4 id="feedbackFormTitleBlack">или получить</h4>
            <h4 id="feedbackFormTitleBlue">бесплатную консультацию</h4>
          </div>
          <p>
            Мы готовы ответить на любые вопросы, укажите ваши контактные данные и мы
            свяжемся с вами в ближайшее время
          </p>
        </div>

        <div className="feedbackFormFields">
          <InputFieldName 
            hasError={nameError} 
            onNameChange={handleNameChange}
            nameValue={formData.name}
          />

          <InputFieldPhone 
            hasError={phoneError} 
            onPhoneChange={handlePhoneChange}
            phoneValue={formData.phone}
          />

          <div className='feedbackFormCheckboxes'>
            <label className={`feedbackFormCheckbox ${serviceTypeError ? 'error' : ''}`}>
              <input 
                type="radio" 
                name="choice" 
                value="practice"
                checked={formData.serviceType === 'practice'}
                onChange={() => handleServiceTypeChange('practice')}
              />
              <span>Записаться на практикум</span>
            </label>
            <label className={`feedbackFormCheckbox ${serviceTypeError ? 'error' : ''}`}>
              <input 
                type="radio" 
                name="choice" 
                value="consultation"
                checked={formData.serviceType === 'consultation'}
                onChange={() => handleServiceTypeChange('consultation')}
              />
              <span>Нужна консультация</span>
            </label>
          </div>
          {serviceTypeError && <div className="error-message">Выберите тип услуги</div>}

          <div className='feedbackFormAgreements'>
            <div className={`feedbackFormAgreement ${agreementError ? 'error' : ''}`} id='personalData'>
              <input 
                type="checkbox" 
                className='agreementCheckBox'
                checked={personalDataAgreement}
                onChange={(e) => handlePersonalDataAgreement(e.target.checked)}
              />
              <span>Нажимая на кнопку, я соглашаюсь на обработку персональных данных и с условиями договора Оферты</span>
            </div>
            <div className='feedbackFormAgreement' id='newsletter'>
              <input 
                type="checkbox" 
                className='agreementCheckBox'
                checked={formData.newsletterAgreement}
                onChange={(e) => handleNewsletterAgreement(e.target.checked)}
              />
              <span>Я согласен(на) получать информационную и <span><a href="">рекламную рассылку</a></span></span>
            </div> 
          </div>
          {agreementError && <div className="error-message">Необходимо ваше согласие</div>}

          <FeedbackSendButton onClick={handleSubmit} cooldownTime={cooldownTime} />
        </div>
      </div>
    </motion.div>
  );
};

export default FeedbackForm;