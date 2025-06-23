import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { productApi } from './services/product';
import productSelectReducer from './features/productSelect/productSelectSlice';
import saucesReducer from './features/sauces/saucesSlice';
import userReducer from './features/User/userSlice';
export const store = configureStore({
    reducer: {
        [productApi.reducerPath]: productApi.reducer,
        productSelect: productSelectReducer,
        sauces: saucesReducer,
        user: userReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch);
