import {
    useState,
    type ChangeEvent,
    type FC,
    type FormEvent,
    useEffect,
} from 'react';
import './FormOrder.css';
import { validateFormOrder } from './validateFormOrder';
export interface FormOrderObj {
    lastName: string;
    firstName: string;
    patron: string;
    tel: string;
    email: string;
    deliver: string;
    comment: string;
    adress: string;
}
export const FormOrder: FC = () => {
    const [formOrder, setFormOrder] = useState<FormOrderObj>({
        lastName: '',
        firstName: '',
        patron: '',
        tel: '',
        email: '',
        deliver: '',
        comment: '',
        adress: '',
    });
    const [errors, setErrors] = useState({});
    const [sub, setSub] = useState<boolean>(false);
    const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormOrder({ ...formOrder, [name]: value });
    };
    const handleChangeLastName = (e: ChangeEvent<HTMLInputElement>) => {
        setFormOrder({ ...formOrder, lastName: e.target.value });
    };
    const handleChangeTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setFormOrder({ ...formOrder, comment: e.target.value });
    };

    const handleSubmitOrder = (e: FormEvent) => {
        e.preventDefault();
        setErrors(validateFormOrder(formOrder));
        setSub(true);
        console.log(`formOrder`, formOrder);
    };
    const finishSubmit = () => {
        console.log(formOrder);
    };
    useEffect(() => {
        if (Object.keys(errors).length === 0 && sub) {
            finishSubmit();
        }
    }, [errors]);
    return (
        <>
            <form
                className="form__order"
                onSubmit={handleSubmitOrder}
                noValidate
            >
                <label>
                    Фамилия{' '}
                    <input
                        type="text"
                        placeholder="Ваша фамилия"
                        name="lastName"
                        value={formOrder.lastName}
                        onChange={handleChangeLastName}
                        required
                    />
                </label>

                <label>
                    Имя{' '}
                    <input
                        type="text"
                        placeholder="Ваше имя"
                        name="firstName"
                        value={formOrder.firstName}
                        onChange={handleChangeInput}
                        required
                    />
                </label>

                <label>
                    Отчество{' '}
                    <input
                        type="text"
                        placeholder="Ваше отчество"
                        name="patron"
                        value={formOrder.patron}
                        onChange={handleChangeInput}
                        required
                    />
                </label>

                <label>
                    Телефон{' '}
                    <input
                        type="tel"
                        placeholder="Ваш телефон"
                        name="tel"
                        value={formOrder.tel}
                        onChange={handleChangeInput}
                        required
                    />{' '}
                </label>

                <label>
                    Email{' '}
                    <input
                        type="email"
                        placeholder="Ваша эл.почта"
                        name="email"
                        value={formOrder.email}
                        onChange={handleChangeInput}
                        required
                    />
                </label>

                <p>Доставка</p>
                <div className="block-deliver__order">
                    <div className="div__order_flex">
                        <label>
                            <input
                                type="radio"
                                name="deliver"
                                value="Постамат"
                                checked={formOrder.deliver === 'Постамат'}
                                onChange={handleChangeInput}
                                required
                            />
                            Постамат
                        </label>
                    </div>
                    <div className="div__order_flex">
                        <label>
                            <input
                                type="radio"
                                name="deliver"
                                value="Курьер"
                                checked={formOrder.deliver === 'Курьер'}
                                onChange={handleChangeInput}
                            />
                            Курьер
                        </label>
                    </div>
                    <div className="div__order_flex">
                        <label>
                            <input
                                type="radio"
                                name="deliver"
                                value="Самовывоз"
                                checked={formOrder.deliver === 'Самовывоз'}
                                onChange={handleChangeInput}
                            />
                            Самовывоз
                        </label>
                    </div>
                </div>

                <label htmlFor="adress">Адрес доставки</label>
                <input
                    type="text"
                    placeholder="Введите свой адрес"
                    id="adress"
                    name="adress"
                    value={formOrder.adress}
                    onChange={handleChangeInput}
                    required
                />
                <label>
                    Коментарий к заказу
                    <textarea
                        name="comment"
                        placeholder="Ваш комментарий"
                        className="textarea_resize"
                        rows={5}
                        cols={26}
                        value={formOrder.comment}
                        onChange={handleChangeTextArea}
                    />
                </label>
                <button type="submit" className="btn__order_submit">
                    Подтвердить
                </button>
            </form>
            {Object.keys(errors).length === 0 && sub ? (
                <span className="success">Successfully submitted ✓</span>
            ) : null}
        </>
    );
};
