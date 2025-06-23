import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { Modal } from '../../common/Modal/Modal';
import './Avtorization.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
export function Avtorization() {
    const [range, setRange] = useState<boolean>(false);
    const handleChangeRange = () => {
        setRange((prev) => !prev);
    };

    return (
        <>
            <Header />
            <section className="avtorization">
                <div className="avtorization__container">
                    <div className="block-avtorization">
                        <h1 className="title-avtorization__h1">Вход на сайт</h1>

                        <Modal
                            title="Войти"
                            myClass="model__button"
                            backgroundColorModal="rgba(33, 49, 52, 0.2), rgba(247, 210, 45, 0.4)"
                        >
                            <div className="avtorization_flex">
                                <h2 className="avtorization__title">
                                    Авторизация
                                </h2>
                                <p>
                                    Авторизируйтесь, чтобы получить приятные
                                    бонусы к заказам
                                </p>
                                <form className="form-avtorization">
                                    <input
                                        type="text"
                                        placeholder="Логин"
                                        className="input__avtorization login"
                                    />
                                    <svg className="svg-user">
                                        <use href="../../public/images/decors/sprite-svg.svg#svg-user"></use>
                                    </svg>
                                    <input
                                        type="password"
                                        placeholder="Пароль"
                                        className="input__avtorization password"
                                    />
                                    <svg className="svg-password">
                                        <use href="../../public/images/decors/sprite-svg.svg#svg-password"></use>
                                    </svg>
                                    <div className="avtorization-memory_flex">
                                        <input
                                            type="range"
                                            className="range__avtorization"
                                            min="1"
                                            max="2"
                                            onChange={handleChangeRange}
                                        />{' '}
                                        {range ? (
                                            <span className="memory__span">
                                                Запомнить меня
                                            </span>
                                        ) : null}
                                        <a
                                            href="#"
                                            className="link__avtorization-password"
                                        >
                                            Забыли пароль?
                                        </a>
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn-submit__avtorization"
                                    >
                                        {' '}
                                        Войти
                                    </button>
                                    <p className="text-link__registration">
                                        Еще нет аккаунта?{' '}
                                        <Link
                                            to="/Регистрация"
                                            className="link__registration"
                                        >
                                            Создайте акканут
                                        </Link>
                                    </p>
                                </form>
                            </div>
                        </Modal>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
