import type { FunctionComponent } from 'react';
import { useGetProductQuery } from '../../redux/services/product';
import { Button } from '../../common/Button/Button';
import '../ProductDiscript/ProductDiscript.css';
import { useAppDispatch } from '../../redux/hooks/hooks';
import { getPizza } from '../../redux/features/Pizza/pizzaSlice';

export const PizzaDiscript: FunctionComponent = () => {
    const { data, isLoading, error } = useGetProductQuery('pizza');

    const dispatch = useAppDispatch();

    return (
        <section className="section__productDesc">
            <div className="block-productDesc__container">
                {error ? (
                    <p>Ошибка в получении данных</p>
                ) : isLoading ? (
                    <p>Loading...</p>
                ) : data ? (
                    data.map((p) => (
                        <div key={p.id} className="block-wrapper__productDesc">
                            <div className="productDesc_top">
                                <img
                                    src={`../../public/images/paste/${p.image}`}
                                    alt="Фото продукта"
                                />
                            </div>
                            <div className="productDesc_middle">
                                <p>{p.name}</p>
                                <p>{p.description}</p>
                            </div>
                            <div className="productDesc_bottom">
                                <p>от {p.price} ₽</p>
                                <Button
                                    unicClass="btn__productDesc"
                                    onClick={() => {
                                        dispatch(
                                            getPizza({
                                                id: p.id,
                                                name: p.name,
                                                description: p.description,
                                                image: p.image,
                                                price: p.price,
                                                count: p.count,
                                            })
                                        );
                                    }}
                                >
                                    В корзину
                                </Button>
                            </div>
                        </div>
                    ))
                ) : null}
            </div>
        </section>
    );
};
