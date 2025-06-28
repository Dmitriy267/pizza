import { FormPromo } from '../../common/FormPromo/FormPromo';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { ShopSteps } from '../../components/ShopSteps/ShopSteps';

export const PayPage = () => {
    return (
        <>
            <Header />
            <section className="section__pay">
                <div className="block-payPage__container">
                    <ShopSteps step1={true} step2={true} step3={false} />
                </div>
                <div className="data-user__pay">
                    <h1>Заказ на доставку</h1>
                    <p>Имя </p>
                    <p>Номер телефона</p>
                    <p>Aдрес доставки</p>
                    <h3>Промокод</h3>
                    <FormPromo />
                </div>
                <div className="viev__pay">
                    <h2>Способы оплаты</h2>
                    <label>
                        <input type="radio" name="cartMoney" /> Картой на сайте
                    </label>
                    <label>
                        <input type="radio" name="handMoney" /> Наличными
                    </label>
                </div>
                <div className="sms__actions">
                    <label>
                        <input type="checkbox" name="smsActions" />
                        Сообщать о бонусах, акциях и новых продуктах
                    </label>
                </div>
                <div className="menu-page__pay">
                    <h4>Состов заказа</h4>
                    <p>Сумма заказа </p>
                </div>
            </section>

            <Footer />
        </>
    );
};
