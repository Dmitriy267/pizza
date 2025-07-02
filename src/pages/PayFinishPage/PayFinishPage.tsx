import type { FC } from 'react';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { ShopSteps } from '../../components/ShopSteps/ShopSteps';
import './PayFinishPage.css';

export const PayFinishPage: FC = () => {
    return (
        <>
            <Header />
            <section className="section__pay-finish">
                <div className="block-finish-order__container">
                    <ShopSteps step1={true} step2={true} step3={true} />
                    <div className="block-info__pay-finish">
                        <h1 className="h1__pay-finish">Покупка завершена!</h1>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};
