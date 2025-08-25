import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import pizzaReducer from './features/Pizza/pizzaSlice';
import actionsReducer from './features/actions/actionsSlice';
import drinkSelectReducer from './features/drinkSelect/drinkSelectSlice';
import saucesReducer from './features/sauces/saucesSlice';
import userReducer from './features/User/userSlice';
import userOrderProducReducer from './features/userOrderProduct/userOrderProductSlice';
import summaProductsReducer from './features/summaProducts/summaProductsSlice';
import authReducer from './features/authReducer/authSlice';

export const store = configureStore({
    reducer: {
        pizza: pizzaReducer,
        actions: actionsReducer,
        drinkSelect: drinkSelectReducer,
        sauces: saucesReducer,
        summaProducts: summaProductsReducer,
        user: userReducer,
        userOrderProduct: userOrderProducReducer,
        auth: authReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch);
