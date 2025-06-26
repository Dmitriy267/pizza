import { type FormOrderObj } from './FormOrder';
export const validateFormOrder = (value: FormOrderObj) => {
    const errors = {
        lastName: '',
        firstName: '',
        patron: '',
        tel: '',
        email: '',
        deliver: '',
        adress: '',
    };
    const reTel = /^\+7|8\d{10}$/i;
    const emailRe = /^\S+@\S+\.\S+$/;
    if (value.lastName.length === 0) {
        errors.lastName = 'Не заполнено поле';
    }
    if (value.firstName.length === 0) {
        errors.firstName = 'Не заполнено поле';
    }
    if (value.patron.length === 0) {
        errors.patron = 'Не заполнено поле';
    }
    if (value.tel.length === 0) {
        errors.tel = 'Не заполнено поле';
    } else if (!reTel.test(value.tel)) {
        errors.tel = 'Неправильно введен номер';
    } else {
        errors.tel = '';
    }
    if (value.email.length === 0) {
        errors.email = 'Не заполнено поле';
    } else if (!emailRe.test(value.email)) {
        errors.email = 'Неправильно введена электронная почта';
    } else {
        errors.email = '';
    }
    if (value.deliver.length === 0) {
        errors.deliver = 'Не заполнено поле';
    }
    if (value.adress.length === 0) {
        errors.adress = 'Не заполнено поле';
    }
    return errors;
};
