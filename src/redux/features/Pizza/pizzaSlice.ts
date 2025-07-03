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
    pizza: Product[];
    maxLimit: number;
    minLimit: number;
}
const initialState: ProductState = {
    pizza: [],
    maxLimit: 10,
    minLimit: 0,
};
export const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        getPizza: (state, action: PayloadAction<Product>) => {
            state.pizza.push({
                id: action.payload.id,
                image: action.payload.image,
                name: action.payload.name,
                count: action.payload.count,
                description: action.payload.description,
                price: action.payload.price,
            });
        },

        deleteProduct: (state, action: PayloadAction<number>) => {
            const findItem = state.pizza.findIndex(
                (item) => item.id === action.payload
            );
            state.pizza.splice(findItem, 1);
        },
        decrementPrice: (state, action: PayloadAction<number>) => {
            const finndItemDecrement = state.pizza.find(
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
            const finndItemDecrement = state.pizza.find(
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

export const { getPizza, deleteProduct, decrementPrice, incrementPrice } =
    pizzaSlice.actions;
export default pizzaSlice.reducer;
