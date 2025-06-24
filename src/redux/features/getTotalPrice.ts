import { type ProdTotalPrice } from '../features/productSelect/productSelectSlice';

export const getTotalPrice = (items: ProdTotalPrice[]) =>
    items.reduce(
        (total, val) => total + val.product.price * val.product.count,
        0
    );
