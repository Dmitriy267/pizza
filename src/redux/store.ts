import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { productApi } from './services/product';
import drinkSelectReducer from './features/drinkSelect/drinkSelectSlice';
import saucesReducer from './features/sauces/saucesSlice';
import userReducer from './features/User/userSlice';
import userOrderProducReducer from './features/userOrderProduct/userOrderProductSlice';
import summaProductsReducer from './features/summaProducts/summaProductsSlice';
export const store = configureStore({
    reducer: {
        [productApi.reducerPath]: productApi.reducer,
        drinkSelect: drinkSelectReducer,
        sauces: saucesReducer,
        summaProducts: summaProductsReducer,
        user: userReducer,
        userOrderProduct: userOrderProducReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch);
