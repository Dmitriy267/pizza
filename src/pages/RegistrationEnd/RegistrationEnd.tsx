import type { FC } from 'react';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { getCookie } from '../../redux/features/User/userCookie';
import './RegistrationEnd.css';
const cookieLogin = getCookie('userLogin');
export const RegistrationEnd: FC = () => {
    return (
        <>
            <Header />
            <section className="section__registrationEnd">
                <div className="block-registrationEnd__container">
                    <h1 className="h1__registrationEnd">
                        Добро пожаловать, {cookieLogin}
                    </h1>
                </div>
            </section>
            <Footer />
        </>
    );
};
