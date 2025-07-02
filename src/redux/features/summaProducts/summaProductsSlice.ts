import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface SummaProductsState {
    summa: number;
}
const initialState: SummaProductsState = {
    summa: 0,
};
export const summaProductsSlice = createSlice({
    name: 'summaProducts',
    initialState,
    reducers: {
        getSummaProducts: (state, action: PayloadAction<number>) => {
            state.summa = action.payload;
        },
    },
});

export const { getSummaProducts } = summaProductsSlice.actions;
export default summaProductsSlice.reducer;
