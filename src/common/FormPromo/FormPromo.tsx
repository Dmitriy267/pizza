import { useState, type FormEvent } from 'react';
import './FormPromo.css';
export const FormPromo = () => {
    const [promoText, setPromoText] = useState<string>('');
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };
    return (
        <>
            <form className="form__promo" onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="input__promo"
                    placeholder="Введите промокод"
                    value={promoText}
                    onChange={(e) => setPromoText(e.target.value)}
                />
                <button className="button__promo" type="submit">
                    Применить
                </button>
            </form>
        </>
    );
};
