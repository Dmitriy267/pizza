import { type FunctionComponent } from 'react';
import './Product.css';

interface ProductProps {
    srcImage: string;
    name: string;
    description: string;
    price: number;
    onClick: () => void;
}
export const Product: FunctionComponent<ProductProps> = ({
    srcImage,
    onClick,
    name,
    price,
    description,
}) => {
    return (
        <>
            <div className="block__descriptionProduct">
                <div className="block__description_top">
                    <img src={srcImage} alt="Фото продукта" />
                    <div className="descript">
                        <p>{name}</p>
                        <p>{description}</p>
                    </div>
                </div>
                <div className="block__shop">
                    <p>от {price} ₽</p>
                    <button className="btn__shop btn_color" onClick={onClick}>
                        В корзину
                    </button>
                </div>
            </div>
        </>
    );
};
