import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { MapAdd } from '../../components/MapAdd/MapAdd';
import './Contacts.css';
import Icons34 from '../../../public/images/cake/image 34.svg';
import type { FC } from 'react';
export const Contacts: FC = () => {
    return (
        <>
            <Header />
            <MapAdd backgroundColor={'#fff'} width={'100%'} height={'322px'} />
            <address className="adress__contacts adress__container">
                <div className="block__contacts_middle">
                    <a href="tel:88003333662" className="tel__contacts">
                        8 800 333-36-62
                    </a>
                    <div className="image_position">
                        <img
                            src={Icons34}
                            alt="Изображение"
                            className="img__contacts"
                        />
                    </div>
                </div>
                <p>ул. Проспект Вернадского 86В</p>
                <p>Доставка и самовывоз 10:00 — 23:00</p>
            </address>
            <Footer />
        </>
    );
};
