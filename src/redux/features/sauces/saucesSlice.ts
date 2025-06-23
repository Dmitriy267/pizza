import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface Sauces {
    id: number;
    name: string;
    price: number;
    image: string;
    count: number;
}
interface SaucesState {
    sauces: Sauces[];
    totalPrice: number;
}
const initialState: SaucesState = {
    sauces: [],
    totalPrice: 0,
};
// function calcPrice(items: Sauces[]) {
//     const summ: number = 0;
//     //  items.reduce((total, val) => total.price * total.count + val, 0);
//     const total = items.map((item) => item.count * item.price);
//     console.log(`total`, total);
//     return total.forEach(function (t) {
//         summ + t;
//     });
// }
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
            });
            // state.totalPrice = calcPrice(state.sauces);
        },
        getSumms: (state, action: PayloadAction<number>) => {
            const findItem = state.sauces.find(
                (item) => item.id === action.payload
            );
            console.log(findItem);
            // state.totalPrice = calcPrice(state.sauces);
        },
    },
});

export const { getProductSauces, getSumms } = saucesSlice.actions;
export default saucesSlice.reducer;
