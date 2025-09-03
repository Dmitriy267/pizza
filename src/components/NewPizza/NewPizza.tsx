import './NewPizza.css';
import { DemoNewPizza } from '../DemoNewPizza/DemoNewPizza';
import svgPicter from '/images/demoPizza/image 14.png';

const demo = Array(6).fill({
    image: '/images/demoPizza/image 8.jpg',
    name: 'Комбо-пицца',
    price: 'от 120 ₽',
});
export function NewPizza() {
    return (
        <>
            <section className="section__newMenu">
                <div className="newMenu__container">
                    <h2 className="h2">Новинки</h2>
                    <img
                        src={svgPicter}
                        alt="Картинка"
                        className="img__position"
                    />
                    <div className="block__newMenu">
                        {demo.map((d, index) => (
                            <DemoNewPizza
                                key={index}
                                name={d.name}
                                price={d.price}
                                srcImage={d.image}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
