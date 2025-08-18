import type { FC } from 'react';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { getCookie } from '../../redux/features/User/userCookie';
import './RegistrationEnd.css';

import { useNavigate } from 'react-router-dom';
const cookieLogin = getCookie('userLogin');
export const RegistrationEnd: FC = () => {
    const navigate = useNavigate();
    const handeClick = () => {
        navigate('/Профиль');
    };
    return (
        <>
            <Header />
            <section className="section__registrationEnd">
                <div className="block-registrationEnd__container">
                    <h1 className="h1__registrationEnd">
                        Добро пожаловать, {cookieLogin}
                    </h1>
                    <h2>Вы успешно зарегистрировались на сайте "ПиццаБум"</h2>
                    <button onClick={handeClick}>Посмотреть профиль</button>
                </div>
            </section>
            <Footer />
        </>
    );
};
