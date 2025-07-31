import './App.css';
import { HomePage } from '../src/pages/HomePage/HomePage';
import { Routes, Route } from 'react-router-dom';
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
import { ErrorPage } from './pages/errorPage/ErrorPage.tsx';
function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/Контакты" element={<Contacts />} />
                <Route path="/Акции" element={<ActionsPage />} />
                <Route path="/Напитки" element={<DrinksPage />} />
                <Route path="/Пицца" element={<PizzaPage />} />
                <Route path="/Корзина" element={<ShopPage />} />
                <Route path="/Оформление заказа" element={<OrderPage />} />
                <Route path="/оплата" element={<PayPage />} />
                <Route path="/Завершение заказа" element={<PayFinishPage />} />
                <Route path="/Войти" element={<Avtorization />} />
                <Route path="/Регистрация" element={<Registration />} />
                <Route
                    path="/Завершение регистрации"
                    element={<RegistrationEnd />}
                />

                <Route errorElement={<ErrorPage />} />
            </Routes>
        </>
    );
}

export default App;
