import { useRef, useState, type ChangeEvent, type FC } from 'react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { useAppSelector } from '../../redux/hooks/hooks';
import { Link } from 'react-router-dom';
import { getCookie } from '../../redux/features/User/userCookie';
import './Profile.css';

interface File {
    name: string;
}
export const Profile: FC = () => {
    const auth = useAppSelector((state) => state.auth);
    console.log(auth);
    const cookieLogin = getCookie('userLogin');
    const cookiePassword = getCookie('userPassword');
    const cookieEmail = getCookie('userEmail');

    const uploadRef = useRef<HTMLInputElement>(null);

    const [text, setText] = useState<string>('');

    const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files === null) {
            return;
        }

        const files = e.target.files;

        for (const file of files) {
            const fileReader = new FileReader();
            fileReader.onload = (function (fileData: File) {
                return function () {
                    setText(fileData.name);

                    const contents = fileReader.result;

                    if (contents) {
                        localStorage.setItem('imgProfile', contents as string);
                    }
                };
            })(file);

            fileReader.readAsDataURL(file);
        }
    };

    return (
        <>
            <Header />
            <section className="section__profile">
                <div className="profile__container">
                    {auth.isLoggedIn ? (
                        <div className="block__profile">
                            <div className="block-photo__profile">
                                <div className="photo"></div>
                                {localStorage.getItem('imgProfile') ? (
                                    <>
                                        <img
                                            src={`${localStorage.getItem(
                                                'imgProfile'
                                            )}`}
                                            id="image"
                                            alt="Выбранное фото"
                                            className="img__profile_upload"
                                        />
                                        <p>{text}</p>
                                    </>
                                ) : null}

                                <button
                                    onClick={() => uploadRef.current?.click()}
                                >
                                    Загрузить фото
                                </button>

                                <input
                                    type="file"
                                    ref={uploadRef}
                                    accept="image/png, image/jpeg, image/jpg"
                                    onChange={handleChangeFile}
                                    style={{ display: 'none' }}
                                />
                            </div>
                            <div className="private-data">
                                <h2>Ваши учетные данные:</h2>
                                <p>Ваш логин: {cookieLogin}</p>
                                <p>Ваш пароль: {cookiePassword}</p>
                                <p>Электронная почта: {cookieEmail}</p>
                            </div>
                        </div>
                    ) : (
                        <p>
                            Пройдите <Link to="/Регистрация">регистрацию</Link>
                        </p>
                    )}
                </div>
            </section>
            <Footer />
        </>
    );
};
