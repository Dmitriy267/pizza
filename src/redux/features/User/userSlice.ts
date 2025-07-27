import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface User {
    login: string;
    email: string;
    password: string;
    passwordLast: string;
    checkboxRegistr: boolean;
}
interface UserState {
    user: User;
}
const initialState: UserState = {
    user: {
        login: '',
        email: '',
        password: '',
        passwordLast: '',
        checkboxRegistr: false,
    },
};
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<User>) => {
            state.user = { ...state.user, ...action.payload };
            document.cookie = `userLogin=${state.user.login}`;
            document.cookie = `userPassword=${state.user.password}`;
        },
    },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
