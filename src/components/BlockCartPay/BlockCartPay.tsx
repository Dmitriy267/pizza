import type { FC } from 'react';
import infoCartPay from '../../../public/images/decors/image40.png';
import './BlockCartPay.css';

export const BlockCartPay: FC = () => {
    return (
        <>
            <div className="block__cart-pay">
                <input
                    type="text"
                    placeholder="Номер карты"
                    className="input-decor__cart"
                />
                <div className="inputs__cart-pay_bottom">
                    <input
                        type="date"
                        placeholder="Срок действия карты"
                        className="input-decor__cart"
                    />
                    <input
                        type="number"
                        placeholder="CVC"
                        className="input-decor__cart"
                    />
                </div>

                <img src={infoCartPay} alt="Рисунок с информацией по карте" />
            </div>
        </>
    );
};
