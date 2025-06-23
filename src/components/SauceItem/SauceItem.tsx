import type { FunctionComponent } from 'react';
import './SauseItem.css';
import { useAppDispatch } from '../../redux/hooks/hooks';
import { getSumms } from '../../redux/features/sauces/saucesSlice';

interface SauceItemProps {
    id: number;
    name: string;
    price: number;
    image: string;
}
export const SauceItem: FunctionComponent<SauceItemProps> = ({
    id,
    name,
    price,
    image,
}) => {
    const dispatch = useAppDispatch();
    const handeClickAdd = () => {
        console.log('click');
        dispatch(getSumms(id));
        console.log(dispatch(getSumms(id)));
    };

    return (
        <>
            <div className="sauce-wrapper" key={id} onClick={handeClickAdd}>
                <div className="sauce_flex">
                    <img
                        src={`../../public/images/sauces/${image}`}
                        alt="Фото соуса"
                    />
                    <p>{name}</p>
                    <span>{price} ₽</span>
                    {/* <Button onClick={() => console.log('click')}>
                        Добавить к заказу
                    </Button> */}
                </div>
            </div>
        </>
    );
};
