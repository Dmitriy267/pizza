import type { FC } from 'react';
import './BlockBtnShop.css';

export const BlockBtnShop: FC = () => {
    return (
        <>
            <div className="block-btn__shop">
                <button onClick={() => {}}>
                    Оформить заказ <span>&gt;</span>
                </button>

                <button
                    onClick={() => console.log('click')}
                    className="btn__left"
                >
                    <span>&lt;</span> Вернуться в магазин
                </button>
            </div>
        </>
    );
};
