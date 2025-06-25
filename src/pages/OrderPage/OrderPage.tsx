import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { ShopSteps } from '../../components/ShopSteps/ShopSteps';
import { Modal } from '../../common/Modal/Modal';
import './OrderPage.css';
export const OrderPage = () => {
    return (
        <>
            <Header />
            <div className="order__container">
                <ShopSteps step1={true} step2={true} step3={false} />
                <h2 className="h2-order">
                    Заполните необходимые поля для заказа
                </h2>
                <Modal
                    title="Заполнить"
                    myClass="btn-order"
                    backgroundColorModal=" rgba(33, 49, 52, 0.2)"
                >
                    <h2 className="title-order">Куда доставить?</h2>
                    <form action="" className="form__order">
                        <label htmlFor="lastName">Фамилия</label>
                        <input
                            type="text"
                            placeholder="Ваша фамилия"
                            id="lastName"
                            name="lastName"
                        />
                        <label htmlFor="firstName">Имя</label>
                        <input
                            type="text"
                            placeholder="Ваше имя"
                            id="firstName"
                            name="firstName"
                        />
                        <label htmlFor="patron">Отчество</label>
                        <input
                            type="text"
                            placeholder="Ваше отчество"
                            id="patron"
                            name="patron"
                        />
                        <label htmlFor="tel">Телефон</label>
                        <input
                            type="tel"
                            placeholder="Ваш телефон"
                            id="tel"
                            name="tel"
                        />
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            placeholder="Ваша эл.почта"
                            id="email"
                            name="email"
                        />
                        <p>Доставка</p>
                        <div className="block-deliver__order">
                            <div className="div__order_flex">
                                <input
                                    type="radio"
                                    id="postOffice"
                                    name="postOffice"
                                />
                                <label htmlFor="postOffice">Постамат</label>
                            </div>
                            <div className="div__order_flex">
                                <input type="radio" id="clerk" name="clerk" />
                                <label htmlFor="clerk">Курьер</label>
                            </div>
                            <div className="div__order_flex">
                                <input type="radio" id="self" name="self" />
                                <label htmlFor="self">Самовывоз</label>
                            </div>
                        </div>

                        <label htmlFor="adress">Адрес доставки</label>
                        <input
                            type="text"
                            placeholder="Введите свой адрес"
                            id="adress"
                            name="adress"
                        />
                        <label>
                            Коментарий к заказу
                            <textarea
                                name="comment"
                                id="comment"
                                placeholder="Ваш комментарий"
                                className="textarea_resize"
                                rows={5}
                                cols={26}
                            />
                        </label>
                        <button type="submit" className="btn__order_submit">
                            Подтвердить
                        </button>
                    </form>
                </Modal>
            </div>

            <Footer />
        </>
    );
};
