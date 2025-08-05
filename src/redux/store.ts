import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { productApi } from './services/product';
import { actionsApi } from './services/actions';
import pizzaReducer from './features/Pizza/pizzaSlice';
import actionsReducer from './features/actions/actionsSlice';
import drinkSelectReducer from './features/drinkSelect/drinkSelectSlice';
import saucesReducer from './features/sauces/saucesSlice';
import userReducer from './features/User/userSlice';
import userOrderProducReducer from './features/userOrderProduct/userOrderProductSlice';
import summaProductsReducer from './features/summaProducts/summaProductsSlice';

export const store = configureStore({
    reducer: {
        [productApi.reducerPath]: productApi.reducer,
        [actionsApi.reducerPath]: actionsApi.reducer,
        pizza: pizzaReducer,
        actions: actionsReducer,
        drinkSelect: drinkSelectReducer,
        sauces: saucesReducer,
        summaProducts: summaProductsReducer,
        user: userReducer,
        userOrderProduct: userOrderProducReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(productApi.middleware)
            .concat(actionsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch);
