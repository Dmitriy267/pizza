import { createSlice } from '@reduxjs/toolkit';

interface UserRegistrationState {
    isLoggedIn: boolean;
}
const initialState: UserRegistrationState = {
    isLoggedIn: false,
};
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        isLoginIn: (state) => {
            state.isLoggedIn = true;
        },
        logout: (state) => {
            state.isLoggedIn = false;
        },
    },
});

export const { isLoginIn, logout } = authSlice.actions;
export default authSlice.reducer;
