import './NewPizza.css';
import { DemoNewPizza } from '../DemoNewPizza/DemoNewPizza';
import svgPicter from '../../../public/images/demoPizza/image 14.png';

const demo = Array(5).fill({
    image: '../../../public/images/demoPizza/image 8.jpg',
    name: 'Карбонара',
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
                            <div key={index}>
                                <DemoNewPizza
                                    name={d.name}
                                    price={d.price}
                                    srcImage={d.image}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
