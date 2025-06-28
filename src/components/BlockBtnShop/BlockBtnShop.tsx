import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks/hooks';
import './BlockBtnShop.css';
export const BlockBtnShop = () => {
    const navigate = useNavigate();
    const productSelect = useAppSelector(
        (state) => state.productSelect.product
    );
    const priceSouce = useAppSelector((state) => state.sauces);
    const filterIdSauce = priceSouce.sauces.filter(
        (obj, index, prod) =>
            index === prod.findIndex((item) => item.id === obj.id)
    );
    const filterId = productSelect.filter(
        (obj, index, prod) =>
            index === prod.findIndex((item) => item.id === obj.id)
    );
    const totalPrice = filterId.reduce(
        (total, val) => total + val.price * val.count,
        0
    );
    const totalPriceSauce = filterIdSauce.reduce(
        (total, val) => total + val.price * val.count,
        0
    );
    const summ = totalPrice + totalPriceSauce;
    const handeClickNavOrder = () => {
        if (summ !== 0) {
            navigate('/Корзина/Оформление заказа');
        }
    };
    return (
        <>
            <div className="block-btn__shop">
                <button onClick={handeClickNavOrder}>
                    Оформить заказ <span>&gt;</span>
                </button>

                <button
                    onClick={() => console.log('click')}
                    className="btn__left"
                >
                    <span>&lt;</span> Вернуться в магазин
                </button>
            </div>
        </>
    );
};
