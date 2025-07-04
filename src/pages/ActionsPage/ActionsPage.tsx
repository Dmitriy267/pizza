import type { FC } from 'react';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { useActionsAllQuery } from '../../redux/services/actions';
import './ActionsPage.css';
import { ActionComponent } from '../../components/ActionComponent/ActionComponent';

export const ActionsPage: FC = () => {
    const { data, isError, isLoading } = useActionsAllQuery('actions');

    return (
        <>
            <Header />
            <section className="sections__actions">
                <div className="actions__container">
                    <h2 className="h2__actions">Акции</h2>
                    {isError ? (
                        <p>Ошибка в получении данных</p>
                    ) : isLoading ? (
                        <p>Loading...</p>
                    ) : data ? (
                        data.map((action) => (
                            <ActionComponent key={action.id} {...action} />
                        ))
                    ) : null}
                </div>
            </section>
            <Footer />
        </>
    );
};
