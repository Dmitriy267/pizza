import { type FC, type FormEvent, type ChangeEvent } from 'react';
import './FormPromo.css';
interface FormPromoProps {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (e: FormEvent) => void;
}
export const FormPromo: FC<FormPromoProps> = ({
    value,
    onChange,
    onSubmit,
}) => {
    return (
        <>
            <form className="form__promo" onSubmit={onSubmit}>
                <input
                    type="text"
                    className="input__promo"
                    placeholder="Введите промокод"
                    value={value}
                    onChange={onChange}
                />
                <button className="button__promo" type="submit">
                    Применить
                </button>
            </form>
        </>
    );
};
