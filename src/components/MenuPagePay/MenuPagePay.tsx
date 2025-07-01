import { useAppSelector } from '../../redux/hooks/hooks';

export const MenuPagePay = () => {
    const product = useAppSelector((state) => state.productSelect.product);
    const sauces = useAppSelector((state) => state.sauces.sauces);
    console.log(`product в меню`, product);
    console.log(`sauces в меню`, sauces);

    return (
        <>
            <div className="menu-page__pay">
                <h4>Состов заказа</h4>

                <p>Сумма заказа </p>
            </div>
        </>
    );
};
