import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface UserOrderProduct {
    lastName: string;
    firstName: string;
    patron: string;
    tel: string;
    email: string;
    deliver: string;
    comment?: string;
    adress: string;
}
interface UserOrderProductState {
    userOrderProduct: UserOrderProduct;
}
const initialState: UserOrderProductState = {
    userOrderProduct: {
        lastName: '',
        firstName: '',
        patron: '',
        tel: '',
        email: '',
        deliver: '',
        comment: '',
        adress: '',
    },
};
export const userOrderProductSlice = createSlice({
    name: 'userOrderProduct',
    initialState,
    reducers: {
        getUserOrder: (state, action: PayloadAction<UserOrderProduct>) => {
            state.userOrderProduct = {
                ...state.userOrderProduct,
                ...action.payload,
            };
        },
    },
});

export const { getUserOrder } = userOrderProductSlice.actions;
export default userOrderProductSlice.reducer;
