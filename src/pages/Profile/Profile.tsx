import type { FC } from 'react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { useAppSelector } from '../../redux/hooks/hooks';
import { Link } from 'react-router-dom';
import { getCookie } from '../../redux/features/User/userCookie';
export const Profile: FC = () => {
    const auth = useAppSelector((state) => state.auth);
    const cookieLogin = getCookie('userLogin');
    const cookiePassword = getCookie('userPassword');
    const cookieEmail = getCookie('userEmail');

    return (
        <>
            <Header />
            <section className="section__profile">
                <div className="profile__container">
                    {auth.isLoggedIn ? (
                        <div className="block__profile">
                            <div className="block-photo__profile">
                                <div className="photo"></div>
                                <p>Загрузите фото</p>
                            </div>
                            <div className="private-data">
                                <h2>Ваши учетные данные:</h2>
                                <p>Ваш логин: {cookieLogin}</p>
                                <p>Ваш пароль: {cookiePassword}</p>
                                <p>Электронная почта: {cookieEmail}</p>
                            </div>
                        </div>
                    ) : (
                        <p>
                            Пройдите <Link to="/Регистрация">регистрацию</Link>
                        </p>
                    )}
                </div>
            </section>
            <Footer />
        </>
    );
};
