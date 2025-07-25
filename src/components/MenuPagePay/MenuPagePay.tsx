import { useAppSelector } from '../../redux/hooks/hooks';
import { DescriptMemuOrder } from '../DescriptMemuOrder/DescriptMemuOrder';
import './MenuPagePay.css';
import type { FC } from 'react';
export const MenuPagePay: FC = () => {
    const drink = useAppSelector((state) => state.drinkSelect.product);
    const sauces = useAppSelector((state) => state.sauces.sauces);
    const pizza = useAppSelector((state) => state.pizza.pizza);
    const summa = useAppSelector((state) => state.summaProducts);
    const percent = useAppSelector((state) => state.summaProducts.percent);
    return (
        <>
            <div className="menu-page__pay">
                <h4 className="h4__pay_yellow">Состав заказа</h4>
                {drink
                    ? drink.map((d) => (
                          <DescriptMemuOrder
                              key={d.id}
                              title={d.name}
                              descript={d.description}
                              price={d.price}
                              count={d.count}
                          />
                      ))
                    : null}
                {sauces
                    ? sauces.map((s) => (
                          <DescriptMemuOrder
                              key={s.id}
                              title={s.name}
                              descript={s.description}
                              price={s.price}
                              count={s.count}
                          />
                      ))
                    : null}
                {pizza
                    ? pizza.map((s) => (
                          <DescriptMemuOrder
                              key={s.id}
                              title={s.name}
                              descript={s.description}
                              price={s.price}
                              count={s.count}
                          />
                      ))
                    : null}
                {percent === 0 ? (
                    <p className="text-summa__pay">
                        Сумма заказа{' '}
                        <span className="span-summa__pay_black">
                            {summa.summa} ₽
                        </span>
                    </p>
                ) : (
                    <p className="text-summa__pay">
                        Сумма заказа co скидкой {percent}%{' '}
                        <span className="span-summa__pay_black">
                            {summa.summa} ₽
                        </span>
                    </p>
                )}
            </div>
        </>
    );
};
