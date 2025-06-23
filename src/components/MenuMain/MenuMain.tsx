import { useState } from 'react';
import { Product } from '../Product/Product';
import './MenuMain.css';
import { useGetProductQuery } from '../../redux/services/product';
import { useNavigate } from 'react-router-dom';

export function MenuMain() {
    const [shop, setShop] = useState<number>(0);
    const handeClick = () => {
        setShop((prev) => prev + 1);
    };
    const { data: pizza, error, isLoading } = useGetProductQuery('pizza');
    const { data: drinks } = useGetProductQuery('drinks');
    const navigate = useNavigate();
    const handeClickNavigate = () => {
        navigate('/Корзина');
    };

    return (
        <menu className="section__menu_main">
            <div className="menu__container">
                <h1 className="h1">Пицца</h1>
                <div className="menu_table">
                    {error ? (
                        <h2>Ошибка в получении данных</h2>
                    ) : isLoading ? (
                        <p>Loading...</p>
                    ) : pizza ? (
                        pizza.map((p) => (
                            <Product
                                key={p.id}
                                srcImage={`/public/images/paste/${p.image}`}
                                name={p.name}
                                description={p.description}
                                price={p.price}
                                onClick={handeClick}
                            />
                        ))
                    ) : null}

                    {shop === 0 ? null : (
                        <button
                            className="btn__shop_fixed"
                            onClick={handeClickNavigate}
                        >
                            Корзина | {shop}
                        </button>
                    )}
                </div>
                <h2 className="title__h2">Напитки</h2>
                {drinks
                    ? drinks
                          .map((p) => (
                              <Product
                                  srcImage={`/public/images/drink/${p.image}`}
                                  name={p.name}
                                  price={p.price}
                                  key={p.id}
                                  onClick={handeClick}
                                  description={p.description}
                              />
                          ))
                          .slice(0, 2)
                    : null}
            </div>
        </menu>
    );
}
