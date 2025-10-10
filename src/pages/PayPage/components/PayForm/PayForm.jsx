import CloseButton from '../../../HomePage/components/CloseButton/CloseButton';
import '../PayForm/PayForm.scss'
import '../PayForm/PayFormMobile.scss'
import PayFormButton from '../PayFormButton/PayFormButton';
import PayFormFieldTitle from '../PayFormFieldTitle/PayFormFieldTitle';
import PayFormInputFieldName from '../PayFormInputFieldName/PayFormInputFieldName';
import PayFormInputFieldPhone from '../PayFormInputFieldPhone/PayFormInputFieldPhone';
import PayFormOfferAgreement from '../PayFormOfferAgreement/PayFormOfferAgreement';
import PayFormPrivacyPolicyAgreement from '../PayFormPrivacyPolicyAgreement/PayFormPrivacyPolicyAgreement';
import PayFromInputFieldEmail from '../PayFromInputFieldEmail/PayFromInputFieldEmail';
import TypeCashCheckbox, { CashProvider } from '../TypeCashCheckbox/TypeCashCheckbox';
import TypePaymentCheckbox, { PaymentProvider } from '../TypePaymentCheckbox/TypePaymentCheckbox';
import TypeWorkshopCheckbox, { WorkshopProvider } from '../TypeWorkshopCheckbox/TypeWorkshopCheckbox';

import uMoneyPreview from '../../../../assets/images/pictures/uMoneyPreview.png'
import { useState, useEffect } from 'react';

const PayForm = () => {
    const [selectedWorkshop, setSelectedWorkshop] = useState(null);
    const [selectedPayment, setSelectedPayment] = useState(null);
    const [selectedCash, setSelectedCash] = useState(null);
    const [isOfferAgreed, setIsOfferAgreed] = useState(false);
    const [isPrivacyAgreed, setIsPrivacyAgreed] = useState(false);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('+7');
    const [email, setEmail] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);
    
    const [errors, setErrors] = useState({
        workshop: false,
        payment: false,
        cash: false,
        offer: false,
        privacy: false,
        name: false,
        phone: false,
        email: false
    });

    const [errorMessages, setErrorMessages] = useState({
        name: '',
        phone: '',
        email: ''
    });

    const getPaymentOptions = () => {
        if (selectedWorkshop === 'personal') {
            return {
                showInstallment: true,
                full: {
                    title: '49 900',
                    subtitle: 'Единовременный платеж',
                    fullPrice: '60 000 ₽'
                },
                installment: {
                    title: '20 000',
                    subtitle: 'Всего 60 000 ₽ на 3 месяца',
                    fullPrice: '/ первый платеж'
                }
            };
        } else if (selectedWorkshop === 'self') {
            return {
                showInstallment: false,
                full: {
                    title: '14 900',
                    subtitle: 'Единовременный платеж',
                    fullPrice: ''
                }
            };
        } else if (selectedWorkshop === 'intro') {
            return {
                showInstallment: false,
                full: {
                    title: '3 900',
                    subtitle: 'Единовременный платеж',
                    fullPrice: ''
                }
            };
        } else {
            return {
                showInstallment: true,
                full: {
                    title: '24 900',
                    subtitle: 'Единовременный платеж',
                    fullPrice: '30 000 ₽'
                },
                installment: {
                    title: '10 000',
                    subtitle: 'Всего 30 000 ₽ на 3 месяца',
                    fullPrice: '/ первый платеж'
                }
            };
        }
    };

    const paymentOptions = getPaymentOptions();

    useEffect(() => {
        setSelectedPayment(null);
    }, [selectedWorkshop]);

    useEffect(() => {
        const validateForm = () => {
            const newErrors = {
                workshop: !selectedWorkshop,
                payment: !selectedPayment,
                cash: !selectedCash,
                offer: !isOfferAgreed,
                privacy: !isPrivacyAgreed,
                name: false,
                phone: false,
                email: false
            };

            const newErrorMessages = {
                name: '',
                phone: '',
                email: ''
            };

            if (!name.trim()) {
                newErrors.name = true;
                newErrorMessages.name = 'Обязательное поле';
            } else if (name.trim().length < 2) {
                newErrors.name = true;
                newErrorMessages.name = 'Минимум 2 буквы';
            } else if (!/^[a-zA-Zа-яА-ЯёЁ\s]+$/.test(name.trim())) {
                newErrors.name = true;
                newErrorMessages.name = 'Только буквы и пробелы';
            }

            const phoneDigits = phone.replace(/\D/g, '');
            if (!phoneDigits) {
                newErrors.phone = true;
                newErrorMessages.phone = 'Обязательное поле';
            } else if (phoneDigits.length !== 11 || !phoneDigits.startsWith('7')) {
                newErrors.phone = true;
                newErrorMessages.phone = 'Некорректный номер';
            }

            if (!email) {
                newErrors.email = true;
                newErrorMessages.email = 'Обязательное поле';
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                newErrors.email = true;
                newErrorMessages.email = 'Некорректный формат';
            } else if (!/@(gmail\.com|mail\.ru|yandex\.ru|yandex\.ua|yahoo\.com|outlook\.com|hotmail\.com|icloud\.com|protonmail\.com)$/i.test(email)) {
                newErrors.email = true;
                newErrorMessages.email = 'Неподдерживаемый домен';
            }

            setErrors(newErrors);
            setErrorMessages(newErrorMessages);

            const areCheckboxesValid = selectedWorkshop && selectedPayment && selectedCash && isOfferAgreed && isPrivacyAgreed;
            const isNameValid = !newErrors.name;
            const isPhoneValid = !newErrors.phone;
            const isEmailValid = !newErrors.email;

            return areCheckboxesValid && isNameValid && isPhoneValid && isEmailValid;
        };

        setIsFormValid(validateForm());
    }, [selectedWorkshop, selectedPayment, selectedCash, isOfferAgreed, isPrivacyAgreed, name, phone, email]);

    return(
        <div className='payForm'>
            <div className='container'>
                <CloseButton navigateBack={true} />
                <h5 className='payFormTitle'>Покупка</h5>
                
                <div className='payFormElement'>
                    <PayFormFieldTitle text={'Формат участия'}/>
                    <WorkshopProvider selected={selectedWorkshop} onSelect={setSelectedWorkshop}>
                        <div className='payFormContent'>
                            <TypeWorkshopCheckbox 
                                title={'Групповой'}
                                subtitle={'Старт 15 сентября'}
                                value="group"
                                hasError={errors.workshop}
                            />
                            <TypeWorkshopCheckbox 
                                title={'Личный'}
                                subtitle={'Старт в любое время по согласованию'}
                                value="personal"
                                hasError={errors.workshop}
                            />
                        </div>
                        <div className='payFormContent'>
                            <TypeWorkshopCheckbox 
                                title={'Самостоятельный'}
                                subtitle={'Материалы и задания для самостоятельного изучения'}
                                value="self"
                                hasError={errors.workshop}
                            />
                            <TypeWorkshopCheckbox 
                                title={'Ознакомительный'}
                                subtitle={'3 видео урока'}
                                value="intro"
                                hasError={errors.workshop}
                            />
                        </div>
                    </WorkshopProvider>
                </div>

                <div className='payFormElement'>
                    <PayFormFieldTitle text={'Укажите контактные данные'}/>
                    <div className='payFormContent'>
                        <PayFormInputFieldName 
                            value={name} 
                            onChange={setName} 
                            hasError={errors.name}
                            errorMessage={errorMessages.name}
                        />
                    </div>
                    <div className='payFormContent'>
                        <PayFormInputFieldPhone 
                            value={phone} 
                            onChange={setPhone} 
                            hasError={errors.phone}
                            errorMessage={errorMessages.phone}
                        />
                        <PayFromInputFieldEmail 
                            value={email} 
                            onChange={setEmail} 
                            hasError={errors.email}
                            errorMessage={errorMessages.email}
                        />
                    </div>
                </div>

                <div className='payFormElement'>
                    <PayFormFieldTitle text={'Выберите вариант оплаты'}/>
                    <PaymentProvider selected={selectedPayment} onSelect={setSelectedPayment}>
                        <div className='payFormContent'>
                            <TypePaymentCheckbox 
                                title={paymentOptions.full.title}
                                subtitle={paymentOptions.full.subtitle}
                                fullPrice={paymentOptions.full.fullPrice}
                                value="full"
                                hasError={errors.payment}
                                priceClass={paymentOptions.full.fullPrice ? "price" : "text"} // Добавлено
                            />
                            {paymentOptions.showInstallment && (
                                <TypePaymentCheckbox 
                                    title={paymentOptions.installment.title}
                                    subtitle={paymentOptions.installment.subtitle}
                                    fullPrice={paymentOptions.installment.fullPrice}
                                    value="installment"
                                    hasError={errors.payment}
                                    priceClass={paymentOptions.installment.fullPrice.includes('/') ? "text" : "price"} // Добавлено
                                />
                            )}
                        </div>
                    </PaymentProvider>
                </div>

                <div className='payFormElement cash'>
                    <PayFormFieldTitle text={'Выберите способ оплаты'}/>
                    <CashProvider selected={selectedCash} onSelect={setSelectedCash}>
                        <div className='payFormCheckboxesCashTypeContent'>
                            <TypeCashCheckbox 
                                image={uMoneyPreview}
                                value="umoney"
                                hasError={errors.cash}
                            />
                        </div>
                    </CashProvider>
                </div>

                <p className='payFormDescription'>
                    После оплаты пришлем ссылку на чат для участников практикума в Telegram
                </p>
                <div className='payFormElement agreements'>
                    <PayFormOfferAgreement 
                        isChecked={isOfferAgreed} 
                        onChange={setIsOfferAgreed}
                        hasError={errors.offer}
                    />
                    <PayFormPrivacyPolicyAgreement 
                        isChecked={isPrivacyAgreed} 
                        onChange={setIsPrivacyAgreed}
                        hasError={errors.privacy}
                    />
                </div>
                <PayFormButton isActive={isFormValid} />
            </div>
        </div>
    )
}

export default PayForm;