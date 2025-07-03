import type { FC } from 'react';
import './DescriptMemuOrder.css';

interface DescriptMemuOrderProps {
    title: string;
    descript: string;
    price: number;
    count: number;
}
export const DescriptMemuOrder: FC<DescriptMemuOrderProps> = ({
    title,
    descript,
    price,
    count,
}) => {
    return (
        <>
            <div className="block-products__menu-order_wrapper">
                <div className="descript-product__menu-order_row">
                    <p>{title}</p>
                    <p>{descript}</p>
                </div>

                <p>{count} шт</p>
                <span>{price * count} ₽</span>
            </div>
        </>
    );
};
