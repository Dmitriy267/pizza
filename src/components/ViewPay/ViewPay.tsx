import { useState, type ChangeEvent, type FC } from 'react';
import cartMoney from '../../../public/images/decors/image36.png';
import { BlockCartPay } from '../BlockCartPay/BlockCartPay';
import './ViewPay.css';
export const ViewPay: FC = () => {
    const [hand, setHand] = useState<boolean>(true);
    const [cart, setCart] = useState<boolean>(false);
    const [selectHand, setSelectHand] = useState<string>(' ');
    const handleChangeViewCart = (e: ChangeEvent<HTMLInputElement>) => {
        setSelectHand(e.target.value);
        setHand(false);
        setCart(true);
    };
    const handleChangeView = (e: ChangeEvent<HTMLInputElement>) => {
        setSelectHand(e.target.value);
        setHand(true);
        setCart(false);
    };
    return (
        <>
            <div className="view__pay">
                <h2 className="h2__view">Способы оплаты</h2>
                <label>
                    <input
                        type="radio"
                        name="money"
                        className="input__view_yellow-first "
                        value="Картой"
                        checked={selectHand === 'Картой'}
                        onChange={handleChangeViewCart}
                    />
                    <img src={cartMoney} alt="Карта оплаты" />
                    Картой на сайте
                </label>
                {cart ? <BlockCartPay /> : null}
                <label>
                    <input
                        type="radio"
                        name="money"
                        className="input__view_yellow-second "
                        value="Наличными"
                        checked={selectHand === 'Наличными'}
                        onChange={handleChangeView}
                    />{' '}
                    Наличными
                </label>

                {hand ? (
                    <div className="block__nal">
                        <p>С какой суммы подготовить сдачу?</p>
                        <div className="block-decor-input__nal">
                            <input
                                type="text"
                                className="input__nal"
                                placeholder="₽"
                            />

                            <label className="label_flex">
                                <input
                                    type="checkbox"
                                    className="input-checkbox__nal"
                                />
                                Без сдачи
                            </label>
                        </div>
                    </div>
                ) : null}
            </div>
        </>
    );
};
