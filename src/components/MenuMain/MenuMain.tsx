import { type FC } from 'react';
import { Product } from '../Product/Product';
import './MenuMain.css';
import { useAppDispatch } from '../../redux/hooks/hooks';
import { getPizza } from '../../redux/features/Pizza/pizzaSlice';
import { getProduct } from '../../redux/features/drinkSelect/drinkSelectSlice';
import { drinks, pizza } from '../../../src/data';

export const MenuMain: FC = () => {
    const dispatch = useAppDispatch();

    return (
        <menu className="section__menu_main">
            <div className="menu__container">
                <h1 className="h1">Пицца</h1>

                <div className="menu_table">
                    {pizza
                        ? pizza.map((p) => (
                              <Product
                                  key={p.id}
                                  srcImage={`/pizza/images/paste/${p.image}`}
                                  name={p.name}
                                  description={p.description}
                                  price={p.price}
                                  onClick={() => {
                                      dispatch(
                                          getPizza({
                                              id: p.id,
                                              name: p.name,
                                              image: p.image,
                                              count: p.count,
                                              description: p.description,
                                              price: p.price,
                                          })
                                      );
                                  }}
                              />
                          ))
                        : null}
                </div>
                <h2 className="title__h2">Напитки</h2>

                <div className="menu_table_drinks">
                    {drinks
                        ? drinks
                              .map((p) => (
                                  <Product
                                      srcImage={`/pizza/images/drink/${p.image}`}
                                      name={p.name}
                                      price={p.price}
                                      key={p.id}
                                      onClick={() => {
                                          dispatch(getProduct({ ...p }));
                                      }}
                                      description={p.description}
                                  />
                              ))
                              .slice(0, 2)
                        : null}
                </div>
            </div>
        </menu>
    );
};
