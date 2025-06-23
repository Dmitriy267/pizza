import { Link } from 'react-router-dom';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Modal } from '../../common/Modal/Modal';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import './Registration.css';
import { useState } from 'react';
import { MailAccaunt } from '../../components/MailAccaunt/MailAccaunt';
import { useDispatch } from 'react-redux';
import { addUser } from '../../redux/features/User/userSlice';
const shema = yup
    .object({
        login: yup.string().required('Не задан логин'),
        email: yup
            .string()
            .required('Введите адрес электронной почты')
            .email('Не правильный формат эл.почты'),
        password: yup
            .string()
            .required('Введите пароль')
            .min(6, 'Пароль должен содержать не менее 6 символов '),
        passwordLast: yup
            .string()
            .required('Повторите пароль')
            .oneOf([yup.ref('password')], 'Пароль не верный'),
        checkboxRegistr: yup
            .boolean()
            .required()
            .oneOf([true], 'Отметьте галочкой, что вы не робот'),
    })
    .required();
interface IFormInput extends yup.InferType<typeof shema> {
    login: string;
    email: string;
    password: string;
    passwordLast: string;
    checkboxRegistr: boolean;
}

export function Registration() {
    const dispatch = useDispatch();
    const [mailShow, setMailShow] = useState<boolean>(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormInput>({ resolver: yupResolver(shema) });
    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        if (data) {
            setMailShow((prev) => !prev);
        }
        dispatch(addUser(data));
        console.log(data);
    };

    return (
        <>
            <Header />
            <section className="registration__section">
                <div className="registration__container">
                    {mailShow ? (
                        <MailAccaunt />
                    ) : (
                        <Modal
                            title={'Регистрация'}
                            myClass="btn__registration"
                            backgroundColorModal="rgba(33, 49, 52, 0.2), rgba(247, 210, 45, 0.4)"
                        >
                            <h2 className="title__registration">Регистрация</h2>
                            <div className="block-form__registration">
                                <form
                                    noValidate
                                    className="form__registration"
                                    onSubmit={handleSubmit(onSubmit)}
                                >
                                    <div className="block-valid__form_position">
                                        <input
                                            className="input__registration"
                                            placeholder="Логин"
                                            {...register('login')}
                                        />
                                        {<span>{errors.login?.message}</span>}

                                        <svg className="login__registration">
                                            <use href="../../public/images/decors/sprite-svg.svg#svg-user"></use>
                                        </svg>
                                    </div>
                                    <div className="block-valid__form_position">
                                        <input
                                            type="email"
                                            className="input__registration"
                                            placeholder="Электронная почта"
                                            {...register('email')}
                                        />
                                        {<span>{errors.email?.message}</span>}

                                        <svg className="email__registration">
                                            <use href="../../public/images/decors/sprite-svg.svg#svg-email"></use>
                                        </svg>
                                    </div>
                                    <div className="block-valid__form_position">
                                        <input
                                            type="password"
                                            className="input__registration"
                                            placeholder="Пароль"
                                            {...register('password')}
                                        />
                                        {
                                            <span>
                                                {errors.password?.message}
                                            </span>
                                        }

                                        <svg className="password__registration">
                                            <use href="../../public/images/decors/sprite-svg.svg#svg-password"></use>
                                        </svg>
                                    </div>
                                    <div className="block-valid__form_position">
                                        <input
                                            type="password"
                                            className="input__registration"
                                            placeholder="Повторите пароль"
                                            {...register('passwordLast')}
                                        />
                                        {
                                            <span>
                                                {errors.passwordLast?.message}
                                            </span>
                                        }

                                        <svg className="password__registration_add">
                                            <use href="../../public/images/decors/sprite-svg.svg#svg-password"></use>
                                        </svg>
                                    </div>
                                    <div className="castom-checkbox__registration">
                                        <input
                                            type="checkbox"
                                            {...register('checkboxRegistr')}
                                        />

                                        <span>Я не робот</span>
                                    </div>
                                    {
                                        <span className="error-text__registration_checked">
                                            {errors.checkboxRegistr?.message}
                                        </span>
                                    }
                                    <button
                                        type="submit"
                                        className="btn__registration-submit"
                                    >
                                        Зарегистрироваться
                                    </button>
                                </form>
                                <div className="info__registration">
                                    <p>Пользователь обязуется:</p>
                                    <p>
                                        {' '}
                                        Предоставлять достоверную и актуальную
                                        информацию при регистрации
                                    </p>
                                    <p>
                                        Уже есть аккаунт?{' '}
                                        <Link to="/Войти" className="link_prev">
                                            Войдите
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </Modal>
                    )}
                </div>
            </section>
            <Footer />
        </>
    );
}
