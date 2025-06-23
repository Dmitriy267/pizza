import pay1 from '../../../public/images/pay/image 15.svg';
import pay2 from '../../../public/images/pay/image 15 (1).svg';
import pay3 from '../../../public/images/pay/image 15 (2).svg';
import pay4 from '../../../public/images/pay/image 15 (3).svg';
import './PayAdd.css';
export function PayAdd() {
    return (
        <section className="pay__section">
            <div className="pay__container">
                <h2 className="pay-title__h2">Оплата и доставка</h2>
                <div className="block-pay__info_all">
                    <div className="block-pay__info">
                        <div className="div__decoration">
                            <img
                                src={pay1}
                                alt="Картинка для оплаты"
                                className="image__decor"
                            />
                        </div>
                        <div className="decoration__text">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit
                            </p>
                        </div>
                    </div>
                    <div className="block-pay__info">
                        <div className="div__decoration">
                            <img src={pay2} alt="Картинка для оплаты" />
                        </div>
                        <div className="decoration__text">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit
                            </p>
                        </div>
                    </div>
                    <div className="block-pay__info">
                        <div className="div__decoration">
                            <img src={pay3} alt="Картинка для оплаты" />
                        </div>
                        <div className="decoration__text">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit
                            </p>
                        </div>
                    </div>
                    <div className="block-pay__info">
                        <div className="div__decoration">
                            <img src={pay4} alt="Картинка для оплаты" />
                        </div>
                        <div className="decoration__text">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
