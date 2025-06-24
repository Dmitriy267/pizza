import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { useAppSelector } from '../../redux/hooks/hooks';
import { ProductItem } from '../../components/ProductItem/ProductItem';
import { useGetProductQuery } from '../../redux/services/product';
import { SauceItem } from '../../components/SauceItem/SauceItem';
import './ShopPage.css';
import { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

export const ShopPage = () => {
    const productSelect = useAppSelector(
        (state) => state.productSelect.product
    );
    const priceSouce = useAppSelector((state) => state.sauces);
    console.log(`priceSouce`, priceSouce);
    const filterIdSauce = priceSouce.sauces.filter(
        (obj, index, prod) =>
            index === prod.findIndex((item) => item.id === obj.id)
    );
    const filterId = productSelect.filter(
        (obj, index, prod) =>
            index === prod.findIndex((item) => item.id === obj.id)
    );

    const totalPrice = filterId.reduce(
        (total, val) => total + val.price * val.count,
        0
    );
    const totalPriceSauce = filterIdSauce.reduce(
        (total, val) => total + val.price * val.count,
        0
    );
    console.log(`totalPrice`, totalPrice);
    console.log(`totalPriceSauce`, totalPriceSauce);
    const navigate = useNavigate();

    const { data: sauces, isLoading, error } = useGetProductQuery('sauces');
    const [promoText, setPromoText] = useState<string>('');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };
    const handeClickNavOrder = () => {
        navigate('/Оформление заказа');
    };

    return (
        <>
            <Header />
            <section className="shop__wrapper">
                <div className="shop__container">
                    <div className="shop__steps">
                        <div className="shop__step">
                            <span className="step_active">1</span>
                            <p>Корзина</p>
                        </div>
                        <hr className="hr_dashed" />
                        <div className="shop__step ">
                            <span className="step_default">2</span>
                            <p className="text__step_second">
                                Оформление заказа
                            </p>
                        </div>
                        <hr className="hr_dashed" />
                        <div className="shop__step">
                            <span className="step_default">3</span>
                            <p className="text__step_threed">Заказ принят</p>
                        </div>
                    </div>

                    <h2 className="shop__h2">Корзина</h2>

                    {productSelect &&
                        filterId.map((p) => <ProductItem key={p.id} {...p} />)}

                    <h2 className="h2__shop_add">Добавить к заказу?</h2>
                    <h3 className="h3__shop">Соусы</h3>
                    {error ? (
                        <p>Ошибка в запросе</p>
                    ) : isLoading ? (
                        <p>Loading...</p>
                    ) : sauces ? (
                        <div className="block__sauce_table">
                            {sauces.map((s) => (
                                <SauceItem key={s.id} {...s} />
                            ))}
                        </div>
                    ) : null}
                    <h3 className="h3__promo">Промокод</h3>
                    <form className="form__promo" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            className="input__promo"
                            placeholder="Введите промокод"
                            value={promoText}
                            onChange={(e) => setPromoText(e.target.value)}
                        />
                        <button className="button__promo" type="submit">
                            Применить
                        </button>
                    </form>

                    <p className="summa__shop">
                        Сумма заказа:{' '}
                        <span>{totalPrice + totalPriceSauce}₽</span>
                    </p>
                    <div className="block-btn__shop">
                        <button onClick={handeClickNavOrder}>
                            Оформить заказ <span>&gt;</span>
                        </button>

                        <button
                            onClick={() => console.log('click')}
                            className="btn__left"
                        >
                            <span>&lt;</span> Вернуться в магазин
                        </button>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};
