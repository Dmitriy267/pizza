import type { FunctionComponent } from 'react';
import './DemoNewPizza.css';
interface DemoNewPizzaProps {
    name: string;
    price: string;
    srcImage: string;
}
export const DemoNewPizza: FunctionComponent<DemoNewPizzaProps> = ({
    name,
    price,
    srcImage,
}) => {
    return (
        <>
            <div className="block__demoPizza block__demoPizza_white">
                <img
                    src={srcImage}
                    alt="Демо пиццы"
                    className="img__pizzaDemo"
                />
                <div className="block-info__newPizza">
                    <p>{name}</p>
                    <p>{price}</p>
                </div>
            </div>
        </>
    );
};
