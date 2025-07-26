import type { FunctionComponent } from 'react';
import logo from '../../../public/images/logo/Rectangle 76.png';
import icon1 from '../../../public/images/social/image 17.svg';
import icon2 from '../../../public/images/social/image 18.svg';
import icon3 from '../../../public/images/social/image 19.svg';
import icon4 from '../../../public/images/social/image 20.svg';
import icon5 from '../../../public/images/social/image 21.svg';
import icon6 from '../../../public/images/social/image 22.svg';
import cardIcon1 from '../../../public/images/pay/Group 328.svg';
import cardIcon2 from '../../../public/images/pay/Group 327.svg';
import cardIcon3 from '../../../public/images/pay/Group 326.svg';
import imgGroup from '../../../public/images/decors/Group 330.svg';
import './Footer.css';
export const Footer: FunctionComponent = () => {
    const callClick = () => {
        alert('Вы позвонили!');
    };
    return (
        <>
            <footer className="footer ">
                <div className="footer__container">
                    <div className="block__footer_flex">
                        <div className="block-logo__footer">
                            <a href="#" className="link-logo__footer">
                                <img
                                    src={logo}
                                    alt="Логотип сайта"
                                    className="logo-img__footer"
                                />
                            </a>
                            <div className="call">
                                <a href="tel:+74993918449">8 499 391-84-49</a>
                                <button
                                    className="btn__call"
                                    onClick={callClick}
                                >
                                    Заказать звонок
                                </button>
                            </div>
                        </div>

                        <div className="footer__info">
                            <p>Калорийность и состав</p>
                            <p>Правовая информация</p>
                        </div>
                        <div className="social">
                            <p className="title__social">Мы в соцсетях</p>
                            <div className="block__list">
                                <ul className="list__social_left">
                                    <li>
                                        <a
                                            href="#"
                                            className="link__sosial_line"
                                        >
                                            YouTube
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="link__sosial_line"
                                        >
                                            Instagram
                                        </a>
                                    </li>
                                </ul>
                                <ul className="list__social_middle">
                                    <li>
                                        <a
                                            href="#"
                                            className="link__sosial_line"
                                        >
                                            Facebook
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="link__sosial_line"
                                        >
                                            ВКонтакте
                                        </a>
                                    </li>
                                </ul>
                                <p>Москва ул. Проспект Вернадского 86В</p>
                            </div>
                        </div>
                        <div className="message">
                            <p>Остались вопросы? А мы всегда на связи:</p>

                            <ul className="icons">
                                <li>
                                    <div className="decor__border">
                                        <a href="#">
                                            <img src={icon1} alt="Соц.иконка" />
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div className="decor__border">
                                        <a href="#">
                                            <img src={icon2} alt="Соц.иконка" />
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div className="decor__border">
                                        <a href="#">
                                            <img src={icon3} alt="Соц.иконка" />
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div className="decor__border">
                                        <a href="#">
                                            <img src={icon4} alt="Соц.иконка" />
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div className="decor__border">
                                        <a href="#">
                                            <img src={icon5} alt="Соц.иконка" />
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div className="decor__border">
                                        <a href="#">
                                            <img src={icon6} alt="Соц.иконка" />
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <button className="btn__email">
                                        {' '}
                                        Написать нам
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="block__footer_bottom">
                        <p className="last__text">
                            {' '}
                            YaBao Все права защищены © 2021
                        </p>
                        <div className="block__footer_bottom-right">
                            <img src={cardIcon1} alt="Иконка карты" />
                            <img src={cardIcon2} alt="Иконка карты" />
                            <img src={cardIcon3} alt="Иконка карты" />
                        </div>
                    </div>
                </div>
                <img
                    src={imgGroup}
                    alt="Эмблема пиццы"
                    className="img__footer_position"
                />
            </footer>
        </>
    );
};
