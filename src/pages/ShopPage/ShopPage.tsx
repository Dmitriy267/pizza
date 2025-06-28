import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { useAppSelector } from '../../redux/hooks/hooks';
import { ProductItem } from '../../components/ProductItem/ProductItem';
import { useGetProductQuery } from '../../redux/services/product';
import { SauceItem } from '../../components/SauceItem/SauceItem';
import { ShopSteps } from '../../components/ShopSteps/ShopSteps';
import { FormPromo } from '../../common/FormPromo/FormPromo';
import { BlockBtnShop } from '../../components/BlockBtnShop/BlockBtnShop';
import './ShopPage.css';

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

    const { data: sauces, isLoading, error } = useGetProductQuery('sauces');

    return (
        <>
            <Header />
            <section className="shop__wrapper">
                <div className="shop__container">
                    <ShopSteps step1={true} step2={false} step3={false} />

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
                    <FormPromo />

                    <p className="summa__shop">
                        Сумма заказа:{' '}
                        <span>{totalPrice + totalPriceSauce}₽</span>
                    </p>
                    <BlockBtnShop />
                </div>
            </section>
            <Footer />
        </>
    );
};
