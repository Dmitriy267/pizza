import { useState, type FunctionComponent } from 'react';
import Arrow from '../../../public/images/slider/.svg';
import './Slider.css';
import { SliderData } from './sliderData';

interface Slide {
    image: string;
}
interface SliderProps {
    slides: Slide[];
}
export const Slider: FunctionComponent<SliderProps> = ({ slides }) => {
    const [current, setCurrent] = useState<number>(0);
    const length = slides.length;
    const nextSlide = () => {
        setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    };
    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
    };
    if (!Array.isArray(slides) || slides.length < 0) {
        return null;
    }
    return (
        <section className="slider">
            <div className="slider__container">
                <div className="block__arrow">
                    <div className="arrow " onClick={prevSlide}>
                        <img src={Arrow} alt="Стрелка влево" />
                    </div>
                    <div className="arrow arrow_right" onClick={nextSlide}>
                        <img src={Arrow} alt="Стрелка вправо" />
                    </div>
                </div>
                {SliderData.map((slide, index) => {
                    return (
                        <div
                            className={
                                index === current ? 'slide active' : 'slide'
                            }
                            key={index}
                        >
                            {index === current && (
                                <img
                                    src={slide.image}
                                    alt="Слайд"
                                    className="image__slide"
                                />
                            )}
                        </div>
                    );
                })}
            </div>
        </section>
    );
};
