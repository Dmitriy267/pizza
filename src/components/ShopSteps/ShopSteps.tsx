import type { FC } from 'react';
import './ShopSteps.css';
type ShopStepsProps = {
    step1: boolean;
    step2: boolean;
    step3: boolean;
};
export const ShopSteps: FC<ShopStepsProps> = ({ step1, step2, step3 }) => {
    return (
        <>
            <div className="shop__steps">
                <div className="shop__step">
                    <span className={step1 ? 'step_active' : 'step_default'}>
                        1
                    </span>
                    <p>Корзина</p>
                </div>
                <hr className="hr_dashed" />
                <div className="shop__step ">
                    <span className={step2 ? 'step_active' : 'step_default'}>
                        2
                    </span>
                    <p className="text__step_second">Оформление заказа</p>
                </div>
                <hr className="hr_dashed" />
                <div className="shop__step">
                    <span className={step3 ? 'step_active' : 'step_default'}>
                        3
                    </span>
                    <p className="text__step_threed">Заказ принят</p>
                </div>
            </div>
        </>
    );
};
