import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface Sauces {
    id: number;
    name: string;
    price: number;
    image?: string;
    count: number;
    description: string;
}
interface SaucesState {
    sauces: Sauces[];
    totalPrice: number;
}
const initialState: SaucesState = {
    sauces: [],
    totalPrice: 0,
};

export const saucesSlice = createSlice({
    name: 'sauces',
    initialState,
    reducers: {
        getProductSauces: (state, action: PayloadAction<Sauces>) => {
            state.sauces.push({
                id: action.payload.id,
                image: action.payload.image,
                name: action.payload.name,
                price: action.payload.price,
                count: action.payload.count,
                description: action.payload.description,
            });
        },
    },
});

export const { getProductSauces } = saucesSlice.actions;
export default saucesSlice.reducer;
