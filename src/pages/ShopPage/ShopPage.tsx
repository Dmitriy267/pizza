import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { ProductItem } from '../../components/ProductItem/ProductItem';
import { PizzaItem } from '../../components/PizzaItem/PizzaItem';
import { useGetProductQuery } from '../../redux/services/product';
import { SauceItem } from '../../components/SauceItem/SauceItem';
import { ShopSteps } from '../../components/ShopSteps/ShopSteps';
import { FormPromo } from '../../common/FormPromo/FormPromo';
import { useNavigate } from 'react-router-dom';
import './ShopPage.css';
import { useState, type ChangeEvent, type FC, type FormEvent } from 'react';
import {
    getPercent,
    getSummaProducts,
} from '../../redux/features/summaProducts/summaProductsSlice';

export const ShopPage: FC = () => {
    const dispatch = useAppDispatch();
    const drink = useAppSelector((state) => state.drinkSelect.product);
    const pizza = useAppSelector((state) => state.pizza.pizza);
    const priceSouce = useAppSelector((state) => state.sauces);
    const idPromo = useAppSelector((state) => state.actions.actions);
    const filterIdSauce = priceSouce.sauces.filter(
        (obj, index, prod) =>
            index === prod.findIndex((item) => item.id === obj.id)
    );
    const filterPizzaId = pizza.filter(
        (obj, index, prod) =>
            index === prod.findIndex((item) => item.id === obj.id)
    );
    const filterId = drink.filter(
        (obj, index, prod) =>
            index === prod.findIndex((item) => item.id === obj.id)
    );
    /* Общая цена с напитками*/
    const totalPrice = filterId.reduce(
        (total, val) => total + val.price * val.count,
        0
    );
    /* Общая цена с соусами*/
    const totalPriceSauce = filterIdSauce.reduce(
        (total, val) => total + val.price * val.count,
        0
    );
    /* Общая цена с пиццами*/
    const totalPizza = filterPizzaId.reduce(
        (total, val) => total + val.price * val.count,
        0
    );

    const { data: sauces, isLoading, error } = useGetProductQuery('sauces');

    let numPercent = 0;
    if (idPromo.length !== 0) {
        const percent: number[] = idPromo.map((item) => item.percent);
        numPercent = numPercent + Number(percent.join(''));
    }
    const navigate = useNavigate();

    const summ = totalPrice + totalPriceSauce + totalPizza;

    const handeClickNavOrder = () => {
        if (summ !== 0) {
            if (idPromo.length !== 0) {
                dispatch(getSummaProducts(summ - (summ * numPercent) / 100));
                dispatch(getPercent(numPercent));
                navigate('/Корзина/Оформление заказа');
            } else if (promo) {
                navigate('/Корзина/Оформление заказа');
                dispatch(getSummaProducts(summ - (summ * 10) / 100));
                dispatch(getPercent(10));
            } else {
                navigate('/Корзина/Оформление заказа');
                dispatch(getSummaProducts(summ));
            }
        }
    };
    const [text, setText] = useState<string>('');
    const [promo, setPromo] = useState<boolean>(false);
    const handleChangePromo = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };
    const handleSubmitPromo = (e: FormEvent) => {
        e.preventDefault();
        if (text === 'firstShop') {
            setPromo(true);
        } else {
            setPromo(false);
        }
        setText('');
    };
    const backClickPage = () => {
        navigate('/');
    };
    return (
        <>
            <Header />
            <section className="shop__wrapper">
                <div className="shop__container">
                    <ShopSteps step1={true} step2={false} step3={false} />

                    <h2 className="shop__h2">Корзина</h2>
                    {pizza
                        ? filterPizzaId.map((p) => (
                              <PizzaItem key={p.id} {...p} />
                          ))
                        : null}

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
                    {promo ? (
                        <p className="text__promo_active">
                            Промокод активирован, скидка 10%
                        </p>
                    ) : null}

                    <FormPromo
                        value={text}
                        onChange={handleChangePromo}
                        onSubmit={handleSubmitPromo}
                    />
                    <p className="summa__shop">
                        Сумма заказа:{' '}
                        <span>
                            {idPromo.length !== 0
                                ? `${summ - (summ * numPercent) / 100}`
                                : promo
                                ? `${summ - (summ * 10) / 100}`
                                : summ}
                            ₽
                        </span>
                    </p>
                    {idPromo.length !== 0 ? (
                        <p className="text-percent">
                            Скидка:{' '}
                            <span>{idPromo.map((item) => item.percent)} %</span>
                        </p>
                    ) : promo ? (
                        <p className="text-percent">
                            Скидка по промокоду: <span>10 %</span>
                        </p>
                    ) : null}

                    <div className="block-btn__shop">
                        <button onClick={handeClickNavOrder}>
                            Оформить заказ <span>&gt;</span>
                        </button>

                        <button onClick={backClickPage} className="btn__left">
                            <span>&lt;</span> Вернуться в магазин
                        </button>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};
