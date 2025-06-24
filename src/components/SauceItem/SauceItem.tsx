import type { FunctionComponent } from 'react';
import './SauseItem.css';
import { useAppDispatch } from '../../redux/hooks/hooks';
import { getProductSauces } from '../../redux/features/sauces/saucesSlice';

interface SauceItemProps {
    id: number;
    name: string;
    price: number;
    image: string;
    count: number;
}
export const SauceItem: FunctionComponent<SauceItemProps> = ({
    id,
    name,
    price,
    image,
    count,
}) => {
    const dispatch = useAppDispatch();

    return (
        <>
            <div
                className="sauce-wrapper"
                key={id}
                onClick={() =>
                    dispatch(
                        getProductSauces({
                            id: id,
                            name: name,
                            price: price,
                            image: image,
                            count: count,
                        })
                    )
                }
            >
                <div className="sauce_flex">
                    <img
                        src={`../../public/images/sauces/${image}`}
                        alt="Фото соуса"
                    />
                    <p>{name}</p>
                    <span>{price} ₽</span>
                    <span className="span_hidden">{count} </span>
                </div>
            </div>
        </>
    );
};
