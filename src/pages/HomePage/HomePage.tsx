import { Header } from '../../components/Header/Header';
import { Slider } from '../../components/Slider/Slider';
import { SliderData } from '../../components/Slider/sliderData';
import { NewPizza } from '../../components/NewPizza/NewPizza';
import { MenuMain } from '../../components/MenuMain/MenuMain';
import { Actions } from '../../components/Actions/Actions';
import { PayAdd } from '../../components/PayAdd/PayAdd';
import { MapAdd } from '../../components/MapAdd/MapAdd';
import { Footer } from '../../components/Footer/Footer';

export function HomePage() {
    return (
        <>
            <Header />
            <Slider slides={SliderData} />
            <NewPizza />
            <MenuMain />
            <Actions />
            <PayAdd />
            <MapAdd
                backgroundColor={`#e3ecf5`}
                width={'100%'}
                height={'322px'}
            />
            <Footer />
        </>
    );
}
