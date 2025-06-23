import { useState } from 'react';
import { Button } from '../../common/Button/Button';
import './MailAccaunt.css';
import { useAppSelector } from '../../redux/hooks/hooks';

export const MailAccaunt = () => {
    const [value, setValue] = useState<boolean>(false);
    const handeClick = () => {
        console.log('click');
        setValue((prev) => !prev);
    };
    const user = useAppSelector((state) => state.user);
    return (
        <>
            {value ? (
                <h1>Добро пожаловать, {user.user.login}!</h1>
            ) : (
                <div className="mail-accaunt">
                    <h2 className="h2__mail-accaunt">
                        Подтвердите регистрацию
                    </h2>
                    <p>
                        Письмо для подтверждения аккаунта отправлено почту.
                        Перейдите по ссылке, указанной в письме. Если письма
                        нет, то проверьте спам.
                    </p>
                    <Button unicClass="btn__mail-accaunt" onClick={handeClick}>
                        Понятно
                    </Button>
                </div>
            )}
        </>
    );
};
