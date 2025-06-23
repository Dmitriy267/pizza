import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import './ActionsPage.css';
const actionsData = [
    {
        title: 'Дарим кибер-призы',
        image: 'image 5.jpg',
        descript:
            'Вот так ачивка! Закажите Кибер-комбо и получите доступ к играм от MY.GAMES, а еще кокосовый батончик и шоколадное печенье «Cyber» от Bite. А также станьте автоматическим участником розыгрыша игровых ключей и больших пицц 29 июня.',
    },
];

export function ActionsPage() {
    const handeClickAction = () => console.log('click');
    return (
        <>
            <Header />
            <section className="sections__actions">
                <div className="actions__container">
                    <h2 className="h2__actions">Акции</h2>
                    {actionsData.map((action, index) => (
                        <div key={index} className="block__actions">
                            <img
                                src={`../../public/images/slider/${action.image}`}
                                alt="Изображение акции"
                            />
                            <div className="block-info__actions">
                                <div className="block-figure__actions_wite"></div>
                                <h3 className="h3__actions">{action.title}</h3>
                                <p>{action.descript}</p>
                                <button onClick={handeClickAction}>
                                    Посмотреть
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <Footer />
        </>
    );
}
