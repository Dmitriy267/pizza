import logo from '../../../public/images/logo/Rectangle 76.png';
import './Header.css';
import { HamburgerMenu } from '../../components/HamburgerMenu/Hamburger';
import { useEffect, useState, type FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SelectCity } from '../SelectCity/SelectCity';
import { Option } from '../../common/Option/Option';

const menu = [
    { id: 1, name: 'Пицца' },
    { id: 2, name: 'Напитки' },
    { id: 3, name: 'Акции' },
    { id: 4, name: 'Контакты' },
    { id: 5, name: 'Войти' },
];

export const Header: FC = () => {
    const [isActive, setIsActive] = useState<boolean>(false);

    const handeClickToggle = () => {
        setIsActive((prev) => !prev);
    };
    const navigate = useNavigate();

    const handeClickNavigate = () => {
        navigate('Корзина');
    };
    const menuList = menu.map((m) => (
        <li key={m.id} className="menu__item">
            {' '}
            <Link to={`/${m.name}`} className="menu__link">
                {m.name}
            </Link>
        </li>
    ));

    const callClick = () => {
        alert('Вы позвонили!');
    };
    const [theme, setTheme] = useState(
        localStorage.getItem('theme') || 'light'
    );
    const onClickTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };
    useEffect(() => {
        document.documentElement.className = theme;
        localStorage.setItem('theme', theme);
    }, [theme]);
    return (
        <>
            <header className="header">
                <div className="header__container">
                    <div className="header_top">
                        <a href="#">
                            <img
                                src={logo}
                                alt="Логотип сайта"
                                className="img-logo"
                            />
                        </a>
                        <div className="adress__paste">
                            <div className="option-deliver-city__paste">
                                <p>Доставка еды </p>
                                <SelectCity placeholder="Выберите город ">
                                    <Option value="Москва">Москва</Option>
                                    <Option value="Санкт-Петербург">
                                        Санкт-Петербург
                                    </Option>
                                    <Option value="Новосибирск">
                                        Новосибирск
                                    </Option>
                                    <Option value="Екатеринбург">
                                        Екатеринбург
                                    </Option>
                                    <Option value="Казань">Казань</Option>
                                    <Option value="Красноярск">
                                        Красноярск
                                    </Option>
                                    <Option value="Нижний Новгород">
                                        Нижний Новгород
                                    </Option>
                                    <Option value="Челябинск">Челябинск</Option>
                                    <Option value="Уфа">Уфа</Option>
                                    <Option value="Краснодар">Краснодар</Option>
                                    <Option value="Самара">Самара</Option>
                                    <Option value="	Ростов-на-Дону">
                                        Ростов-на-Дону
                                    </Option>
                                    <Option value="Омск">Омск</Option>
                                    <Option value="Воронеж">Воронеж</Option>
                                    <Option value="Пермь">Пермь</Option>
                                    <Option value="Волгоград">Волгоград</Option>
                                </SelectCity>
                            </div>

                            <div className="time">
                                <p className="name-company__time">Яндекс еда</p>
                                <span className="span-reiting__time">4.8</span>

                                <p className="text-delivery__time">
                                    Время доставки
                                </p>
                                <p className="text-minut__time">от 31 мин</p>
                            </div>
                        </div>
                        <div className="block-call__header">
                            <button
                                className="btn-call__header"
                                onClick={callClick}
                            >
                                Заказать звонок
                            </button>
                            <a
                                href="tel:84993918449"
                                className="link-tel__header_top_yellow "
                            >
                                8 499 391-84-49
                            </a>
                        </div>
                    </div>
                    <button
                        onClick={onClickTheme}
                        className="btn-theme__header"
                    >
                        Cменить фон
                    </button>
                    <div className="header_bottom">
                        <nav className="menu-nav__header_bottom">
                            <ul className="menu-list__header_bottom">
                                {menuList}
                            </ul>

                            <button
                                className="btn-menu__header_bottom"
                                onClick={() => navigate('Корзина')}
                            >
                                Корзина
                            </button>
                        </nav>
                    </div>
                    <a href="#">
                        <img
                            src={logo}
                            alt="Логотип сайта"
                            className="img-logo img-logo_display"
                        />
                    </a>

                    <a href="tel:84993918449" className="link-tel_yellow">
                        8 499 391-84-49
                    </a>
                    <button
                        className="btn-shop__header"
                        onClick={handeClickNavigate}
                    >
                        Корзина
                    </button>

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
                </div>
            </header>
        </>
    );
};
