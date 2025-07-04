import type { FC } from 'react';
//import { useState, type FormEvent, type ChangeEvent, useEffect } from 'react';
//import { FormPromo } from '../../common/FormPromo/FormPromo';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { ShopSteps } from '../../components/ShopSteps/ShopSteps';
import { ViewPay } from '../../components/ViewPay/ViewPay';
import Group425 from '../../../public/images/decors/Group425.jpg';
import { MenuPagePay } from '../../components/MenuPagePay/MenuPagePay';
import './PayPage.css';
import { useAppSelector } from '../../redux/hooks/hooks';
import { useNavigate } from 'react-router-dom';
//import { getPercent } from '../../redux/features/summaProducts/summaProductsSlice';
//import { useAppDispatch } from '../../redux/hooks/hooks';

export const PayPage: FC = () => {
    const userOrder = useAppSelector((state) => state.userOrderProduct);
    // const [text, setText] = useState<string>('');
    // const [promo, setPromo] = useState<boolean>(false);
    const navigate = useNavigate();
    //const dispatch = useAppDispatch();
    const PrevMainClick = () => {
        navigate('/');
    };
    const summa = useAppSelector((state) => state.summaProducts.summa);
    const NextOrderClick = () => {
        if (summa !== 0) {
            navigate('/Завершение заказа');
        }
    };
    // useEffect(() => {
    //     if (promo) {
    //         dispatch(getPercent(10));
    //     }
    // }, [promo, dispatch]);
    // const handleChangePromo = (e: ChangeEvent<HTMLInputElement>) => {
    //     setText(e.target.value);
    // };
    // const handleSubmitPromo = (e: FormEvent) => {
    //     e.preventDefault();
    //     if (text === 'firstShop') {
    //         setPromo(true);
    //     } else {
    //         setPromo(false);
    //     }
    //     setText('');
    // };
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
                        {/* <h3 className="h3__pay">Промокод</h3> */}
                        {/* {promo ? (
                            <p className="text__promo_active">
                                Промокод активирован, скидка 10%
                            </p>
                        ) : null}
                        <FormPromo
                            value={text}
                            onSubmit={handleSubmitPromo}
                            onChange={handleChangePromo}
                        /> */}
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
