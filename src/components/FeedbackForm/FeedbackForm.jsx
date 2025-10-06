import { motion } from 'framer-motion';
import '../FeedbackForm/FeedbackForm.scss';
import '../FeedbackForm/FeedbackForm1050.scss';
import '../FeedbackForm/FeedbackForm950.scss';
import '../FeedbackForm/FeedbackFormMobile.scss';
import { useState, useEffect } from 'react';
import FeedbackSendButton from '../FeedbackSendButton/FeedbackSendButton';
import InputFieldName from '../InputFieldName/InputFieldName';
import InputFieldPhone from '../InputFieldPhone/InputFieldPhone';
import { useMediaQuery } from 'react-responsive';

const FeedbackForm = () => {
  const isTablet1050 = useMediaQuery({ maxWidth: 1051 })
  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [serviceTypeError, setServiceTypeError] = useState(false);
  const [agreementError, setAgreementError] = useState(false);
  const [cooldownTime, setCooldownTime] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceType: '',
    newsletterAgreement: false
  });
  const [personalDataAgreement, setPersonalDataAgreement] = useState(false);

  const API_CONFIG = {
    baseURL: process.env.REACT_APP_API_URL || '/api',
    endpoints: {
      feedback: '/feedback'
    },
    timeout: 10000
  };

  const getCSRFToken = () => {
    const cookieValue = document.cookie
      .split('; ')
      .find(row => row.startsWith('csrftoken='))
      ?.split('=')[1];
    return cookieValue || '';
  };

  const isValidPhone = (phone) => {
    return phone && phone.length >= 12 && phone !== '+7' && /^\+7\d{10}$/.test(phone);
  };

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
    setSubmitStatus(null);
  };

  const handlePhoneChange = (phone) => {
    setFormData(prev => ({ ...prev, phone: phone || '' }));
    if (phoneError) setPhoneError(false);
    setSubmitStatus(null);
  };

  const handleServiceTypeChange = (type) => {
    setFormData(prev => ({ ...prev, serviceType: type }));
    if (serviceTypeError) setServiceTypeError(false);
    setSubmitStatus(null);
  };

  const handlePersonalDataAgreement = (value) => {
    setPersonalDataAgreement(value);
    if (agreementError) setAgreementError(false);
    setSubmitStatus(null);
  };

  const handleNewsletterAgreement = (value) => {
    setFormData(prev => ({ ...prev, newsletterAgreement: value }));
    setSubmitStatus(null);
  };

  const prepareFormData = () => {
    return {
      name: formData.name.trim(),
      phone: formData.phone,
      service_type: formData.serviceType,
      newsletter_agreement: formData.newsletterAgreement,
      timestamp: new Date().toISOString(),
      source: 'website_form' 
    };
  };

  const sendFormData = async (data) => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), API_CONFIG.timeout);

    try {
      const response = await fetch(`${API_CONFIG.baseURL}${API_CONFIG.endpoints.feedback}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
          'X-CSRFToken': getCSRFToken()
        },
        body: JSON.stringify(data),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      return { success: true, data: result };

    } catch (error) {
      clearTimeout(timeoutId);
      
      if (error.name === 'AbortError') {
        throw new Error('Request timeout: Сервер не ответил вовремя');
      }
      
      throw new Error(`Network error: ${error.message}`);
    }
  };

  const handleSubmit = async () => {
    if (cooldownTime > 0 || isLoading) return;

    let hasError = false;

    if (!formData.name.trim()) {
      setNameError(true);
      hasError = true;
    } else {
      setNameError(false);
    }

    if (!isValidPhone(formData.phone)) {
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
      const phoneInput = document.querySelector('.formInputPhone');
      
      if (!formData.name.trim()) {
        nameInput.focus();
      } else if (!isValidPhone(formData.phone)) {
        phoneInput.focus();
      }
      return;
    }

    setIsLoading(true);
    setSubmitStatus(null);

    const submissionData = prepareFormData();
    
    try {
      const result = await sendFormData(submissionData);
      
      const endTime = Date.now() + 1200000;
      localStorage.setItem('feedbackCooldownEndTime', endTime.toString());
      setCooldownTime(1200);
      setSubmitStatus('success');
      
      setFormData({ 
        name: '', 
        phone: '+7', 
        serviceType: '', 
        newsletterAgreement: false 
      });
      setPersonalDataAgreement(false);
      
      setNameError(false);
      setPhoneError(false);
      setServiceTypeError(false);
      setAgreementError(false);
      
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isTablet1050 ? (
        <div className="feedbackForm">
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
                  <span id='feedbackFistAgreement'>Нажимая на кнопку, я соглашаюсь на <span id='processingOfPersonalData'><a href="">обработку персональных данных</a></span> и с условиями <span id='offerAgreement'><a href="">договора Оферты</a></span></span>
                </div>
                <div className='feedbackFormAgreement' id='newsletter'>
                  <input 
                    type="checkbox" 
                    className='agreementCheckBox'
                    checked={formData.newsletterAgreement}
                    onChange={(e) => handleNewsletterAgreement(e.target.checked)}
                  />
                  <span id='feedbackSecondAgreement'>Я согласен(на) получать информационную и <span><a href="">рекламную рассылку</a></span></span>
                </div> 
              </div>
              {agreementError && <div className="error-message">Необходимо ваше согласие</div>}

              {submitStatus === 'success' && (
                <div className="success-message">
                  Форма успешно отправлена! Мы свяжемся с вами в ближайшее время.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="error-message">
                  Произошла ошибка при отправке. Попробуйте еще раз.
                </div>
              )}

              <FeedbackSendButton 
                onClick={handleSubmit} 
                cooldownTime={cooldownTime}
                isLoading={isLoading}
              />
            </div>
          </div>
        </div>
      ) : (
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

              {submitStatus === 'success' && (
                <div className="success-message">
                  Форма успешно отправлена! Мы свяжемся с вами в ближайшее время.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="error-message">
                  Произошла ошибка при отправке. Попробуйте еще раз.
                </div>
              )}

              <FeedbackSendButton 
                onClick={handleSubmit} 
                cooldownTime={cooldownTime}
                isLoading={isLoading}
              />
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default FeedbackForm;