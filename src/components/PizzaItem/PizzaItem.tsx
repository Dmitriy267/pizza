import type { FC } from 'react';
import decor from '../../../public/images/decors/image 41.jpg';
import { useAppDispatch } from '../../redux/hooks/hooks';
import {
    decrementPrice,
    deleteProduct,
    incrementPrice,
} from '../../redux/features/Pizza/pizzaSlice';

import '../ProductItem/ProductItem.css';
interface ProductItemProps {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    count: number;
}
export const PizzaItem: FC<ProductItemProps> = ({
    id,
    name,
    price,
    image,
    description,
    count,
}) => {
    const dispatch = useAppDispatch();
    const handeClickMinus = () => {
        dispatch(decrementPrice(id));
    };
    const handeClickPlus = () => {
        dispatch(incrementPrice(id));
    };
    const handeClickRemove = () => {
        dispatch(deleteProduct(id));
    };
    return (
        <>
            <div className="block__shop-prod" key={id}>
                <div className="block__shop_common">
                    <div className="shop-prod_top">
                        <img
                            src={`../../public/images/paste/${image}`}
                            alt="Фото товара"
                            className="img__shop-prod_first"
                        />
                        <div className="buttons__shop">
                            <button onClick={handeClickMinus}>-</button>
                            <p>{count}</p>

                            <button onClick={handeClickPlus}>+</button>
                        </div>
                        <span className="price__span_yellow">
                            {`${price * count}`} ₽
                        </span>
                        <button
                            onClick={handeClickRemove}
                            className="btn__shop_order"
                        >
                            <img
                                src={decor}
                                alt="Значок кнопки"
                                className="img__shop-prod_second"
                            />
                        </button>
                    </div>
                    <div className="shop-prod_bottom">
                        <h2 className="h2__shop-prod">{name}</h2>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </>
    );
};
