import type { FC } from 'react';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { ShopSteps } from '../../components/ShopSteps/ShopSteps';
import { ViewPay } from '../../components/ViewPay/ViewPay';
import Group425 from '../../../public/images/decors/Group425.jpg';
import { MenuPagePay } from '../../components/MenuPagePay/MenuPagePay';
import './PayPage.css';
import { useAppSelector } from '../../redux/hooks/hooks';
import { useNavigate } from 'react-router-dom';

export const PayPage: FC = () => {
    const userOrder = useAppSelector((state) => state.userOrderProduct);

    const navigate = useNavigate();

    const PrevMainClick = () => {
        navigate('/');
    };
    const summa = useAppSelector((state) => state.summaProducts.summa);
    const NextOrderClick = () => {
        if (summa !== 0) {
            navigate('/Завершение заказа');
        }
    };

    return (
        <>
            <Header />
            <section className="section__pay">
                <div className="block-payPage__container">
                    <ShopSteps step1={true} step2={true} step3={false} />

                    <div className="data-user__pay">
                        <h1 className="title__pay">Заказ на доставку</h1>
                        <p className="text-user__pay_first text__pay_gap-first">
                            Имя{' '}
                        </p>
                        <div className="div__pay div_first">
                            {userOrder.userOrderProduct.firstName}
                        </div>
                        <p className="text-user__pay_first text__pay_gap-second">
                            Номер телефона
                        </p>
                        <div className="div__pay div_second">
                            {userOrder.userOrderProduct.tel}
                        </div>
                        <p className="text-user__pay_first text__pay_gap-three">
                            Aдрес доставки
                        </p>
                        <div className="div__pay div_three">
                            {userOrder.userOrderProduct.adress}
                        </div>
                        <p className="text-user__pay_first text__pay_gap-fourth">
                            Вид доставки
                        </p>
                        <div className="div__pay div_fourth">
                            {userOrder.userOrderProduct.deliver}
                        </div>
                    </div>
                    <ViewPay />

                    <div className="div-sms__actions">
                        <label>
                            <input
                                type="checkbox"
                                name="smsActions"
                                className="input-decor__actions"
                            />
                            Сообщать о бонусах, акциях и{' '}
                            <span>новых продуктах</span>
                            <span>
                                <img
                                    src={Group425}
                                    alt="Знак подписки на акции"
                                />
                            </span>
                        </label>
                    </div>

                    <MenuPagePay />

                    <div className="block-btn__shop">
                        <button onClick={NextOrderClick}>
                            Оформить заказ <span>&gt;</span>
                        </button>

                        <button onClick={PrevMainClick} className="btn__left">
                            <span>&lt;</span> Вернуться в магазин
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};
