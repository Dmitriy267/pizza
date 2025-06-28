import { useState, type ChangeEvent, type FC, type FormEvent } from 'react';
import './FormOrder.css';
import { useNavigate } from 'react-router-dom';

export interface FormOrderObj {
    lastName: string;
    firstName: string;
    patron: string;
    tel: string;
    email: string;
    deliver: string;
    comment: string;
    adress: string;
}
const reTel = /^\+7|8\d{10}$/i;
const emailRe = /^\S+@\S+\.\S+$/;

export const FormOrder: FC = () => {
    const [formOrder, setFormOrder] = useState<FormOrderObj>({
        lastName: '',
        firstName: '',
        patron: '',
        tel: '',
        email: '',
        deliver: '',
        comment: '',
        adress: '',
    });

    const [errorsLastName, setErrorsLastName] = useState<string>('');
    const [errorsFirstName, setErrorsFirstName] = useState<string>('');
    const [errorsPatronName, setErrorsPatronName] = useState<string>('');
    const [errorsTel, setErrorsTel] = useState<string>('');
    const [errorsEmail, setErrorsEmail] = useState<string>('');
    const [errorsDeliver, setErrorsDeliver] = useState<string>('');
    const [errorsAdress, setErrorsAdress] = useState<string>('');

    const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormOrder({ ...formOrder, [name]: value });
    };
    const handleChangeLastName = (e: ChangeEvent<HTMLInputElement>) => {
        setFormOrder({ ...formOrder, lastName: e.target.value });
    };
    const handleChangeTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setFormOrder({ ...formOrder, comment: e.target.value });
    };
    let flag = false;
    const validate = () => {
        if (formOrder) {
            if (formOrder.lastName.length === 0) {
                setErrorsLastName('Не заполнено поле!');
                flag = false;
            } else {
                setErrorsLastName('');
                flag = true;
            }
            if (formOrder.firstName.length === 0) {
                setErrorsFirstName('Не заполнено поле!');
                flag = false;
            } else {
                setErrorsFirstName('');
                flag = true;
            }
            if (formOrder.patron.length === 0) {
                setErrorsPatronName('Не заполнено поле!');
                flag = false;
            } else {
                setErrorsPatronName('');
                flag = true;
            }
            if (formOrder.tel.length === 0) {
                setErrorsTel('Не заполнено поле!');
                flag = false;
            } else if (!reTel.test(formOrder.tel)) {
                setErrorsTel('Неправильно введен номер!');
                flag = false;
            } else {
                setErrorsTel('');
                flag = true;
            }
            if (formOrder.email.length === 0) {
                setErrorsEmail('Не заполнено поле!');
                flag = false;
            } else if (!emailRe.test(formOrder.email)) {
                setErrorsEmail('Неправильно введена электронная почта!');
                flag = false;
            } else {
                setErrorsEmail(' ');
                flag = true;
            }
            if (formOrder.deliver.length === 0) {
                setErrorsDeliver('Выберите доставку');
                flag = false;
            } else {
                setErrorsDeliver('');
                flag = true;
            }

            if (formOrder.adress.length === 0) {
                setErrorsAdress('Не заполнено поле!');
                flag = false;
            } else {
                setErrorsAdress('');
                flag = true;
            }
        }
        console.log(`flag`, flag);
        return flag;
    };
    const navigate = useNavigate();
    const handleSubmitOrder = (e: FormEvent) => {
        e.preventDefault();

        validate();

        if (flag) {
            console.log(`formOrder`, formOrder);
            navigate('/оплата');
        }
    };

    return (
        <>
            <form
                className="form__order"
                onSubmit={handleSubmitOrder}
                noValidate
            >
                <label>
                    Фамилия{' '}
                    <input
                        type="text"
                        placeholder="Ваша фамилия"
                        name="lastName"
                        value={formOrder.lastName}
                        onChange={handleChangeLastName}
                        required
                    />
                </label>
                {errorsLastName ? (
                    <span className="error">{errorsLastName}</span>
                ) : null}

                <label>
                    Имя{' '}
                    <input
                        type="text"
                        placeholder="Ваше имя"
                        name="firstName"
                        value={formOrder.firstName}
                        onChange={handleChangeInput}
                        required
                    />
                </label>
                {errorsFirstName ? (
                    <span className="error">{errorsFirstName}</span>
                ) : null}

                <label>
                    Отчество{' '}
                    <input
                        type="text"
                        placeholder="Ваше отчество"
                        name="patron"
                        value={formOrder.patron}
                        onChange={handleChangeInput}
                        required
                    />
                </label>
                {errorsPatronName ? (
                    <span className="error">{errorsPatronName}</span>
                ) : null}

                <label>
                    Телефон{' '}
                    <input
                        type="tel"
                        placeholder="Ваш телефон"
                        name="tel"
                        value={formOrder.tel}
                        onChange={handleChangeInput}
                        required
                    />{' '}
                </label>
                {errorsTel ? <span className="error">{errorsTel}</span> : null}

                <label>
                    Email{' '}
                    <input
                        type="email"
                        placeholder="Ваша эл.почта"
                        name="email"
                        value={formOrder.email}
                        onChange={handleChangeInput}
                        required
                    />
                </label>
                {errorsEmail ? (
                    <span className="error">{errorsEmail}</span>
                ) : null}

                <p>Доставка</p>
                <div className="block-deliver__order">
                    <div className="div__order_flex">
                        <label>
                            <input
                                type="radio"
                                name="deliver"
                                value="Постамат"
                                checked={formOrder.deliver === 'Постамат'}
                                onChange={handleChangeInput}
                                required
                            />
                            Постамат
                        </label>
                    </div>
                    <div className="div__order_flex">
                        <label>
                            <input
                                type="radio"
                                name="deliver"
                                value="Курьер"
                                checked={formOrder.deliver === 'Курьер'}
                                onChange={handleChangeInput}
                            />
                            Курьер
                        </label>
                    </div>
                    <div className="div__order_flex">
                        <label>
                            <input
                                type="radio"
                                name="deliver"
                                value="Самовывоз"
                                checked={formOrder.deliver === 'Самовывоз'}
                                onChange={handleChangeInput}
                            />
                            Самовывоз
                        </label>
                        {errorsDeliver ? (
                            <span className="error">{errorsDeliver}</span>
                        ) : null}
                    </div>
                </div>

                <label htmlFor="adress">Адрес доставки</label>
                <input
                    type="text"
                    placeholder="Введите свой адрес"
                    id="adress"
                    name="adress"
                    value={formOrder.adress}
                    onChange={handleChangeInput}
                    required
                />
                {errorsAdress ? (
                    <span className="error">{errorsAdress}</span>
                ) : null}
                <label>
                    Коментарий к заказу
                    <textarea
                        name="comment"
                        placeholder="Ваш комментарий"
                        className="textarea_resize"
                        rows={4}
                        cols={20}
                        value={formOrder.comment}
                        onChange={handleChangeTextArea}
                    />
                </label>
                <button type="submit" className="btn__order_submit">
                    Подтвердить
                </button>
            </form>
        </>
    );
};
