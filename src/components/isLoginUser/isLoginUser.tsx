import { type FC } from 'react';
import { useNavigate } from 'react-router-dom';
import './isLoginUser.css';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { logout } from '../../redux/features/authReducer/authSlice';

export const IsLogin: FC = () => {
    const auth = useAppSelector((state) => state.auth);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handeClickisLogin = () => {
        if (auth.isLoggedIn) {
            navigate('/');
            dispatch(logout());
        } else {
            navigate('/Войти');
        }
    };

    return (
        <>
            <button onClick={handeClickisLogin} className="btn-enter__header">
                {' '}
                {auth.isLoggedIn ? 'Выйти' : 'Войти'}
            </button>
        </>
    );
};
