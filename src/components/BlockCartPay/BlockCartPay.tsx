import type { FC, FormEvent } from 'react';
import { useState } from 'react';
import { type ChangeEvent } from 'react';
import infoCartPay from '/images/decors/image40.png';
import card from '/images/decors/image 36.jpg';
import './BlockCartPay.css';

interface CartForm {
    numberCart: string;
    dateCart: string;
    cartCvc: string;
}
export const BlockCartPay: FC = () => {
    const [cartForm, setCartForm] = useState<CartForm>({
        numberCart: '',
        dateCart: '',
        cartCvc: '',
    });
    const onChangeInputCartNumber = (e: ChangeEvent<HTMLInputElement>) => {
        setCartForm({ ...cartForm, numberCart: e.target.value });
    };
    const onChangeInputCartDate = (e: ChangeEvent<HTMLInputElement>) => {
        setCartForm({ ...cartForm, dateCart: e.target.value });
    };
    const onChangeInputCartCvc = (e: ChangeEvent<HTMLInputElement>) => {
        setCartForm({ ...cartForm, cartCvc: e.target.value });
    };
    const [errorCartNum, setErrorCartNum] = useState<string>('');
    const [errorCartDate, setErrorCartDate] = useState<string>('');
    const [errorCartCvc, setErrorCartCvc] = useState<string>('');
    let flag1: boolean = false;
    let flag2: boolean = false;
    let flag3: boolean = false;
    function validCardForm(): boolean {
        const cart = cartForm.numberCart;
        const arrNumCart = [];
        arrNumCart.push(cart);
        const str = arrNumCart.join(',');
        const now = new Date();
        const year = now.getFullYear();

        const dateCart = cartForm.dateCart.slice(0, 4);

        if (str === '') {
            setErrorCartNum('Введите номер карты');
            flag1 = false;
        } else if (str.length > 16) {
            setErrorCartNum(
                `Номер карты превышает 16 символов! Вы ввели ${str.length} символов`
            );

            flag1 = false;
        } else if (str.length < 16) {
            setErrorCartNum(
                `Номер карты меньше 16 символов!  Вы ввели ${str.length} символов`
            );
            flag1 = false;
        } else {
            setErrorCartNum('');
            flag1 = true;
        }
        if (dateCart === '') {
            setErrorCartDate('Выберите дату');
            flag2 = false;
        } else if (+dateCart > year) {
            setErrorCartDate('Срок действия карты истек');
            flag2 = false;
        } else {
            setErrorCartDate('');
            flag2 = true;
        }
        if (cartForm.cartCvc === '') {
            setErrorCartCvc('Введите трехзначное число');
            flag3 = false;
        } else if (cartForm.cartCvc.length > 3) {
            setErrorCartCvc('Веденое число содержит больше трех цифр');
            flag3 = false;
        } else if (cartForm.cartCvc.length < 3) {
            setErrorCartCvc('Веденое число содержит меньше трех цифр');
            flag3 = false;
        } else {
            setErrorCartCvc('');
            flag3 = true;
        }

        const arr = [];
        arr.push(flag1, flag2, flag3);
        const flag = arr.every((item) => item === true);
        return flag;
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const mark = validCardForm();
        if (mark === true) {
            alert('Оплата прошла успешно');
        } else {
            alert('Оплата не прошла');
        }
    };

    return (
        <>
            <div className="wrapper__cart-pay">
                <div className="block__cart-pay">
                    <form onSubmit={handleSubmit} noValidate method="post">
                        <div className="block-info-error__cart">
                            {errorCartNum && (
                                <span className="error">{errorCartNum}</span>
                            )}
                            {errorCartDate && (
                                <span className="error">{errorCartDate}</span>
                            )}
                            {errorCartCvc && (
                                <span className="error">{errorCartCvc}</span>
                            )}
                        </div>

                        <input
                            type="number"
                            placeholder="Номер карты"
                            className="input-decor__cart"
                            name="numberCartForm"
                            value={cartForm.numberCart}
                            onChange={onChangeInputCartNumber}
                        />

                        <div className="inputs__cart-pay_bottom">
                            <input
                                type="date"
                                placeholder="Срок действия карты"
                                className="input-decor__cart"
                                name="DateCartForm"
                                value={cartForm.dateCart}
                                onChange={onChangeInputCartDate}
                            />

                            <input
                                type="number"
                                placeholder="CVC"
                                className="input-decor__cart "
                                name="CartFormCVC"
                                value={cartForm.cartCvc}
                                onChange={onChangeInputCartCvc}
                            />

                            <img
                                src={card}
                                alt="Картинка карточки"
                                className="img-card__position"
                            />
                        </div>
                        <button className="btn-submit__cart" type="submit">
                            Оплатить картой
                        </button>
                    </form>
                </div>
                <img
                    src={infoCartPay}
                    alt="Рисунок с информацией по карте"
                    className="img-decor__cart"
                />
            </div>
        </>
    );
};
