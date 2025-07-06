import logo from '../../../public/images/logo/Rectangle 76.png';
import './Header.css';
import { HamburgerMenu } from '../../components/HamburgerMenu/Hamburger';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
const menu = [
    { id: 1, name: 'Пицца' },
    { id: 2, name: 'Напитки' },
    { id: 3, name: 'Акции' },
    { id: 4, name: 'Контакты' },
    { id: 5, name: 'Войти' },
];
export function Header() {
    const [isActive, setIsActive] = useState<boolean>(false);
    const handeClickToggle = () => {
        setIsActive((prev) => !prev);
    };
    const navigate = useNavigate();
    const menuList = menu.map((m) => (
        <li key={m.id} className="menu__item">
            {' '}
            <Link to={m.name} className="menu__link">
                {m.name}
            </Link>
        </li>
    ));
    return (
        <>
            <header className="header">
                <div className="header__container">
                    <a href="#">
                        <img
                            src={logo}
                            alt="Логотип сайта"
                            className="img-logo"
                        />
                    </a>
                    <a href="tel:84993918449" className="link-tel_yellow">
                        8 499 391-84-49
                    </a>
                    <button className="btn-shop__header">Корзина|1</button>
                    {/* <div className="header_top">
                        <div className="adress__paste">
                            <p>
                                Доставка еды <span>Москва</span>
                            </p>
                            <div className="time">
                                <img src="" alt="Значок яндекса" />
                                <span>4.8</span>
                                <p>Время доставки</p>
                                <p>от 31 мин</p>
                            </div>
                        </div>
                    </div> */}
                    <HamburgerMenu
                        isActive={isActive}
                        onClick={handeClickToggle}
                    />
                    {isActive ? (
                        <div className="header__menu header_border">
                            <nav className="menu__body">
                                <ul className="menu__list">{menuList}</ul>
                                <a
                                    href="tel:84993918449"
                                    className="menu__tel link-menu__tel_display"
                                >
                                    8 499 391-84-49
                                </a>
                                <button
                                    className="btn__menu btn__menu_display"
                                    onClick={() => navigate('Корзина')}
                                >
                                    Корзина
                                </button>
                            </nav>
                        </div>
                    ) : null}

                    {/* <div className="header_bottom">
                        <div className="header__menu">
                            <nav className="menu__body">
                                <ul className="menu__list">{menuList}</ul>

                                <button
                                    className="btn__menu"
                                    onClick={() => navigate('Корзина')}
                                >
                                    Корзина
                                </button>
                            </nav>
                        </div>
                    </div> */}
                </div>
            </header>
        </>
    );
}
