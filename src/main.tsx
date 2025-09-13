import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import {
    createBrowserRouter,
    RouterProvider,
    BrowserRouter,
} from 'react-router-dom';
import { ErrorPage } from './pages/errorPage/ErrorPage.tsx';
import { store } from './redux/store.ts';
import { Provider } from 'react-redux';
import { Contacts } from './pages/Contacts/Contacts.tsx';
import { ActionsPage } from './pages/ActionsPage/ActionsPage.tsx';
import { DrinksPage } from './pages/DrinksPage/DrinksPage.tsx';
import { ShopPage } from './pages/ShopPage/ShopPage.tsx';
import { Avtorization } from './pages/Avtorization/Avtorization.tsx';
import { Registration } from './pages/Registration/Registration.tsx';
import { RegistrationEnd } from './pages/RegistrationEnd/RegistrationEnd.tsx';
import { OrderPage } from './pages/OrderPage/OrderPage.tsx';
import { PayPage } from './pages/PayPage/PayPage.tsx';
import { PayFinishPage } from './pages/PayFinishPage/PayFinishPage.tsx';
import { PizzaPage } from './pages/PizzaPage/PizzaPage.tsx';
import { HomePage } from './pages/HomePage/HomePage.tsx';
import { Profile } from './pages/Profile/Profile.tsx';
const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <App />,
            children: [
                {
                    path: '/',
                    element: <HomePage />,
                },
                {
                    path: '/Контакты',
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
                    path: 'Пицца',
                    element: <PizzaPage />,
                },
                {
                    path: 'Корзина',
                    element: <ShopPage />,
                },
                {
                    path: 'Войти/Корзина',
                    element: <ShopPage />,
                },
                {
                    path: 'Пицца/Корзина',
                    element: <ShopPage />,
                },
                {
                    path: 'Напитки/Корзина',
                    element: <ShopPage />,
                },
                {
                    path: 'Акции/Корзина',
                    element: <ShopPage />,
                },
                {
                    path: 'Контакты/Корзина',
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
                {
                    path: 'Завершение регистрации',
                    element: <RegistrationEnd />,
                },
                {
                    path: '/Корзина/Оформление заказа',
                    element: <OrderPage />,
                },
                {
                    path: '/оплата',
                    element: <PayPage />,
                },
                {
                    path: '/Завершение заказа',
                    element: <PayFinishPage />,
                },
                {
                    path: '/Профиль',
                    element: <Profile />,
                },
            ],
            errorElement: <ErrorPage />,
        },
    ],
    {
        basename: '/pizza',
    }
);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <BrowserRouter
                basename={
                    process.env.NODE_ENV === 'production' ? '/pizza' : '/'
                }
            >
                <RouterProvider router={router} />
            </BrowserRouter>
        </Provider>
    </StrictMode>
);
