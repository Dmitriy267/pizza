import { useState, type ChangeEvent, type FC } from 'react';
import './ViewPay.css';
export const ViewPay: FC = () => {
    const [hand, setHand] = useState<boolean>(false);
    const [selectHand, setSelectHand] = useState<string>(' ');
    const handleChangeView = (e: ChangeEvent<HTMLInputElement>) => {
        setSelectHand(e.target.value);
        setHand((prev) => !prev);
    };
    return (
        <>
            <div className="view__pay">
                <h2 className="h2__view">Способы оплаты</h2>
                <label>
                    <input
                        type="radio"
                        name="cartMoney"
                        className="input__view_yellow-first "
                    />{' '}
                    Картой на сайте
                </label>
                <label>
                    <input
                        type="radio"
                        name="handMoney"
                        className="input__view_yellow-second "
                        value="Наличными"
                        checked={selectHand === 'Наличными'}
                        onChange={handleChangeView}
                    />{' '}
                    Наличными
                </label>
                {hand ? (
                    <div className="block__nal">
                        <p>С какой сыммы подготовить сдачу?</p>
                        <input type="text" />
                        <label>
                            <input type="checkbox" />
                            Без сдачи
                        </label>
                    </div>
                ) : null}
            </div>
        </>
    );
};
