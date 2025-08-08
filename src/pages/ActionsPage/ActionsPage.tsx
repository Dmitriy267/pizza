import type { FC } from 'react';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import './ActionsPage.css';
import { ActionComponent } from '../../components/ActionComponent/ActionComponent';
import { actions as data } from '../../data';

export const ActionsPage: FC = () => {
    return (
        <>
            <Header />
            <section className="sections__actions">
                <div className="actions__container">
                    <h2 className="h2__actions">Акции</h2>
                    {data
                        ? data.map((action) => (
                              <ActionComponent key={action.id} {...action} />
                          ))
                        : null}
                </div>
            </section>
            <Footer />
        </>
    );
};
