import { useNavigate } from 'react-router-dom';
import Cake from '/images/cake/image 26.jpg';
import picter from '/images/cake/image 34.svg';
import './Actions.css';
export function Actions() {
    const navigate = useNavigate();
    const handeClick = () => {
        navigate('/Акции');
    };
    return (
        <>
            <section className="actions__section">
                <div className="actions__container">
                    <h2 className="cake__h2">
                        Наши <span>акции</span>
                    </h2>
                    <div className="block__actions">
                        <div className="block__actions_top">
                            <img
                                src={Cake}
                                alt="Фото торта"
                                className="cake__image_top"
                            />
                        </div>
                        <div className="block__actions_bottom">
                            <img src={Cake} alt="Фото торта" />
                            <img src={Cake} alt="Фото торта" />
                            <img src={Cake} alt="Фото торта" />
                            <img src={Cake} alt="Фото торта" />
                        </div>
                    </div>
                    <div className="actions_all">
                        <button
                            className="btn__actions_all"
                            onClick={handeClick}
                        >
                            Все акции
                        </button>

                        <div className="wrap__img_position">
                            <img
                                src={picter}
                                alt="Картинка"
                                className="actions__image_right"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
