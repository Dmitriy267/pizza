import { useState, type FC } from 'react';
import { Product } from '../Product/Product';
import './MenuMain.css';
import { useGetProductQuery } from '../../redux/services/product';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../redux/hooks/hooks';
import { getPizza } from '../../redux/features/Pizza/pizzaSlice';
import { getProduct } from '../../redux/features/drinkSelect/drinkSelectSlice';

export const MenuMain: FC = () => {
    const [shop, setShop] = useState<number>(0);
    const dispatch = useAppDispatch();
    const { data: pizza, error, isLoading } = useGetProductQuery('pizza');
    const handeClick = () => {
        setShop((prev) => prev + 1);
    };

    const { data: drinks } = useGetProductQuery('drinks');
    const navigate = useNavigate();
    const handeClickNavigate = () => {
        navigate('/Корзина');
    };

    return (
        <menu className="section__menu_main">
            <div className="menu__container">
                <h1 className="h1">Пицца</h1>
                {error && <h2>Ошибка в получении данных</h2>}
                {isLoading && <p>Loading...</p>}

                <div className="menu_table">
                    {pizza
                        ? pizza.map((p) => (
                              <Product
                                  key={p.id}
                                  srcImage={`/public/images/paste/${p.image}`}
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
                                      handeClick();
                                  }}
                              />
                          ))
                        : null}

                    {shop === 0 ? null : (
                        <button
                            className="btn__shop btn_fixed btn_grey"
                            onClick={handeClickNavigate}
                        >
                            Корзина | {shop}
                        </button>
                    )}
                </div>
                <h2 className="title__h2">Напитки</h2>

                <div className="menu_table_drinks">
                    {drinks
                        ? drinks
                              .map((p) => (
                                  <Product
                                      srcImage={`/public/images/drink/${p.image}`}
                                      name={p.name}
                                      price={p.price}
                                      key={p.id}
                                      onClick={() => {
                                          dispatch(getProduct({ ...p }));
                                          handeClick();
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
