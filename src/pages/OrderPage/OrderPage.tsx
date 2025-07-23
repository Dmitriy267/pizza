import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { ShopSteps } from '../../components/ShopSteps/ShopSteps';
import { Modal } from '../../common/Modal/Modal';
import { FormOrder } from '../../components/FormOrder/FormOrder';
import './OrderPage.css';
import { type FC } from 'react';
export const OrderPage: FC = () => {
    return (
        <>
            <Header />
            <section className="section__order">
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
                        <FormOrder />
                    </Modal>
                </div>
            </section>

            <Footer />
        </>
    );
};
