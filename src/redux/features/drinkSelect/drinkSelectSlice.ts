import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    count: number;
}
export type ProdTotalPrice = {
    product: Product;
    quentity: number;
};
interface ProductState {
    product: Product[];
    maxLimit: number;
    minLimit: number;
}
const initialState: ProductState = {
    product: [],
    maxLimit: 10,
    minLimit: 0,
};
export const drinkSelectSlice = createSlice({
    name: 'drinkSelect',
    initialState,
    reducers: {
        getProduct: (state, action: PayloadAction<Product>) => {
            state.product.push({
                id: action.payload.id,
                image: action.payload.image,
                name: action.payload.name,
                count: action.payload.count,
                description: action.payload.description,
                price: action.payload.price,
            });
        },

        deleteProduct: (state, action: PayloadAction<number>) => {
            const findItem = state.product.findIndex(
                (item) => item.id === action.payload
            );
            state.product.splice(findItem, 1);
        },
        decrementPrice: (state, action: PayloadAction<number>) => {
            const finndItemDecrement = state.product.find(
                (item) => item.id === action.payload
            );

            if (
                finndItemDecrement &&
                finndItemDecrement.count !== state.minLimit
            ) {
                finndItemDecrement.count = finndItemDecrement.count - 1;
            }
        },
        incrementPrice: (state, action: PayloadAction<number>) => {
            const finndItemDecrement = state.product.find(
                (item) => item.id === action.payload
            );

            if (
                finndItemDecrement &&
                finndItemDecrement.count !== state.maxLimit
            ) {
                finndItemDecrement.count = finndItemDecrement.count + 1;
            }
        },
    },
});

export const { getProduct, deleteProduct, decrementPrice, incrementPrice } =
    drinkSelectSlice.actions;
export default drinkSelectSlice.reducer;
