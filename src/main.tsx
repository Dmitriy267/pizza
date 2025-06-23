import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ErrorPage } from './pages/errorPage/ErrorPage.tsx';
import { store } from './redux/store.ts';
import { Provider } from 'react-redux';
import { Contacts } from './pages/Contacts/Contacts.tsx';
import { ActionsPage } from './pages/ActionsPage/ActionsPage.tsx';
import { DrinksPage } from './pages/DrinksPage/DrinksPage.tsx';
import { ShopPage } from './pages/ShopPage/ShopPage.tsx';
import { Avtorization } from './pages/Avtorization/Avtorization.tsx';
import { Registration } from './pages/Registration/Registration.tsx';
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: 'Контакты',

                element: <Contacts />,
            },
        ],
    },
    {
        path: 'Контакты',
        element: <Contacts />,
    },
    {
        path: 'Акции',
        element: <ActionsPage />,
    },
    {
        path: 'Напитки',
        element: <DrinksPage />,
    },
    {
        path: 'Корзина',
        element: <ShopPage />,
    },
    {
        path: 'Войти',
        element: <Avtorization />,
    },
    {
        path: 'Регистрация',
        element: <Registration />,
    },
]);
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </StrictMode>
);
