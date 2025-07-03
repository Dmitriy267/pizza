import { type ProdTotalPrice } from './drinkSelect/drinkSelectSlice';

export const getTotalPrice = (items: ProdTotalPrice[]) =>
    items.reduce(
        (total, val) => total + val.product.price * val.product.count,
        0
    );
