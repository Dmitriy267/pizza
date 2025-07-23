import type { FC } from 'react';
import infoCartPay from '../../../public/images/decors/image40.png';
import card from '../../../public/images/decors/image 36.jpg';
import './BlockCartPay.css';

export const BlockCartPay: FC = () => {
    return (
        <>
            <div className="wrapper__cart-pay">
                <div className="block__cart-pay">
                    <input
                        type="text"
                        placeholder="Номер карты"
                        className="input-decor__cart"
                        required
                    />
                    <div className="inputs__cart-pay_bottom">
                        <input
                            type="date"
                            placeholder="Срок действия карты"
                            className="input-decor__cart"
                            required
                        />

                        <input
                            type="number"
                            placeholder="CVC"
                            className="input-decor__cart "
                            required
                            min={0}
                            maxLength={3}
                            max={999}
                        />
                        <img
                            src={card}
                            alt="Картинка карточки"
                            className="img-card__position"
                        />
                    </div>
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
