import { type FC } from 'react';
import { Button } from '../../common/Button/Button';
import './MailAccaunt.css';
import { useNavigate } from 'react-router-dom';

export const MailAccaunt: FC = () => {
    const navigate = useNavigate();
    const handeClick = () => {
        navigate('/Завершение регистрации');
    };

    return (
        <>
            <div className="mail-accaunt">
                <h2 className="h2__mail-accaunt">Подтвердите регистрацию</h2>
                <p>
                    Письмо для подтверждения аккаунта отправлено почту.
                    Перейдите по ссылке, указанной в письме. Если письма нет, то
                    проверьте спам.
                </p>
                <Button unicClass="btn__mail-accaunt" onClick={handeClick}>
                    Понятно
                </Button>
            </div>
        </>
    );
};
