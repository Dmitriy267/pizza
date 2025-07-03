import { Actions } from '../../components/Actions/Actions';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { NewPizza } from '../../components/NewPizza/NewPizza';
import { PayAdd } from '../../components/PayAdd/PayAdd';
import { PizzaDiscript } from '../../components/PizzaDiscript/PizzaDiscript';
import { Slider } from '../../components/Slider/Slider';
import { SliderData } from '../../components/Slider/sliderData';
export function PizzaPage() {
    return (
        <>
            <Header />
            <Slider slides={SliderData} />
            <NewPizza />
            <PizzaDiscript />
            <Actions />
            <PayAdd />
            <Footer />
        </>
    );
}
