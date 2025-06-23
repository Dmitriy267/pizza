import { type FunctionComponent } from 'react';
import './MapAdd.css';
interface MapAddProps {
    backgroundColor: string;
    width: string;
    height: string;
}
export const MapAdd: FunctionComponent<MapAddProps> = ({
    backgroundColor,
    width,
    height,
}) => {
    return (
        <>
            <section className="map__section" style={{ backgroundColor }}>
                <div className="map__container">
                    <div className="map__local" style={{ width, height }}>
                        <iframe src="https://yandex.ru/map-widget/v1/?ll=50.100199%2C53.195876&z=12"></iframe>
                    </div>
                </div>
            </section>
        </>
    );
};
