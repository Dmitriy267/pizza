import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { ProductItem } from '../../components/ProductItem/ProductItem';
import { useGetProductQuery } from '../../redux/services/product';
import { SauceItem } from '../../components/SauceItem/SauceItem';
import { ShopSteps } from '../../components/ShopSteps/ShopSteps';
import { FormPromo } from '../../common/FormPromo/FormPromo';
import { useNavigate } from 'react-router-dom';
import './ShopPage.css';
import type { FC } from 'react';
import { getSummaProducts } from '../../redux/features/summaProducts/summaProductsSlice';

export const ShopPage: FC = () => {
    const dispatch = useAppDispatch();
    const drink = useAppSelector((state) => state.drinkSelect.product);
    const priceSouce = useAppSelector((state) => state.sauces);

    const filterIdSauce = priceSouce.sauces.filter(
        (obj, index, prod) =>
            index === prod.findIndex((item) => item.id === obj.id)
    );
    const filterId = drink.filter(
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

    const { data: sauces, isLoading, error } = useGetProductQuery('sauces');
    const navigate = useNavigate();

    const summ = totalPrice + totalPriceSauce;
    const handeClickNavOrder = () => {
        if (summ !== 0) {
            navigate('/Корзина/Оформление заказа');
            dispatch(getSummaProducts(summ));
        }
    };
    return (
        <>
            <Header />
            <section className="shop__wrapper">
                <div className="shop__container">
                    <ShopSteps step1={true} step2={false} step3={false} />

                    <h2 className="shop__h2">Корзина</h2>

                    {drink &&
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
                    <FormPromo />

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
