import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface SummaProductsState {
    summa: number;
    percent: number;
}
const initialState: SummaProductsState = {
    summa: 0,
    percent: 0,
};
export const summaProductsSlice = createSlice({
    name: 'summaProducts',
    initialState,
    reducers: {
        getSummaProducts: (state, action: PayloadAction<number>) => {
            state.summa = action.payload;
        },
        getPercent: (state, action: PayloadAction<number>) => {
            state.percent = action.payload;
        },
    },
});

export const { getSummaProducts, getPercent } = summaProductsSlice.actions;
export default summaProductsSlice.reducer;
