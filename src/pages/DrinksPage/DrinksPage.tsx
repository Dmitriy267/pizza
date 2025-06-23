import { Actions } from '../../components/Actions/Actions';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { NewPizza } from '../../components/NewPizza/NewPizza';
import { PayAdd } from '../../components/PayAdd/PayAdd';
import { ProductDiscript } from '../../components/ProductDiscript/ProductDiscript';
import { Slider } from '../../components/Slider/Slider';
import { SliderData } from '../../components/Slider/sliderData';
export function DrinksPage() {
    return (
        <>
            <Header />
            <Slider slides={SliderData} />
            <NewPizza />
            <ProductDiscript />
            <Actions />
            <PayAdd />
            <Footer />
        </>
    );
}
