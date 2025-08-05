import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { Modal } from '../../common/Modal/Modal';
import './Avtorization.css';
import { useState, type ChangeEvent, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getCookie } from '../../redux/features/User/userCookie';
interface AvtorisationForm {
    login: string;
    password: string;
}

const cookieLogin = getCookie('userLogin');
const cookiePassword = getCookie('userPassword');

export function Avtorization() {
    const [range, setRange] = useState<boolean>(false);
    const [avtoForm, setAvtoForm] = useState<AvtorisationForm>({
        login: '',
        password: '',
    });
    const [errorLogin, setErrorLogin] = useState<string>('');
    const [errorPassword, setErrorPassword] = useState<string>('');

    const handleChangeRange = () => {
        setRange((prev) => !prev);
    };
    const onChangeInputLogin = (e: ChangeEvent<HTMLInputElement>) => {
        setAvtoForm({ ...avtoForm, login: e.target.value });
    };
    const onChangeInputPassword = (e: ChangeEvent<HTMLInputElement>) => {
        setAvtoForm({ ...avtoForm, password: e.target.value });
    };
    let flag = false;

    function avtorizationData(str1: string, str2: string): boolean {
        if (avtoForm.login.length === 0) {
            setErrorLogin('Не заполнено поле!');
            flag = false;
        } else if (avtoForm.login !== str1) {
            setErrorLogin('Неверный логин');
            flag = false;
        } else {
            setErrorLogin('');
            flag = true;
        }
        if (avtoForm.password.length === 0) {
            setErrorPassword('Не заполнено поле!');
            flag = false;
        } else if (avtoForm.password !== str2) {
            setErrorPassword('Неверный пароль');
            flag = false;
        } else {
            setErrorPassword('');
            flag = true;
        }
        if (avtoForm.login !== str1 || avtoForm.password !== str2) {
            flag = false;
        }
        return flag;
    }
    const navigate = useNavigate();
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const mark = avtorizationData(cookieLogin, cookiePassword);
        if (mark === true) {
            console.log(avtoForm);
            navigate('/');
        }
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
                                <form
                                    className="form-avtorization"
                                    onSubmit={handleSubmit}
                                    noValidate
                                    method="post"
                                >
                                    <div className="div__avtorisation_relative">
                                        <input
                                            type="text"
                                            placeholder="Логин"
                                            className="input__avtorization login"
                                            name="avtorisationLogin"
                                            value={avtoForm.login}
                                            onChange={onChangeInputLogin}
                                        />
                                        <svg className="svg-user">
                                            <use href="../../public/images/decors/sprite-svg.svg#svg-user"></use>
                                        </svg>
                                        {errorLogin ? (
                                            <span className="error">
                                                {errorLogin}
                                            </span>
                                        ) : null}
                                    </div>

                                    <div className="div__avtorisation_relative">
                                        <input
                                            type="password"
                                            placeholder="Пароль"
                                            className="input__avtorization password"
                                            name="avtorisationPassword"
                                            value={avtoForm.password}
                                            onChange={onChangeInputPassword}
                                        />
                                        <svg className="svg-password">
                                            <use href="../../public/images/decors/sprite-svg.svg#svg-password"></use>
                                        </svg>
                                        {errorPassword ? (
                                            <span className="error">
                                                {errorPassword}
                                            </span>
                                        ) : null}
                                    </div>
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
