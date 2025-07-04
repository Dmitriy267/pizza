import { type FC } from 'react';
import './ActionComponent.css';
import { useAppDispatch } from '../../redux/hooks/hooks';
import { getActionsAll } from '../../redux/features/actions/actionsSlice';

interface ActionComponentProps {
    id: number;
    title: string;
    description: string;
    image: string;
    percent: number;
    promocode: string;
}
export const ActionComponent: FC<ActionComponentProps> = ({
    id,
    image,
    description,
    title,
    percent,
    promocode,
}) => {
    const dispatch = useAppDispatch();

    return (
        <>
            <div key={id} className="block__actions-component">
                <img
                    src={`../../public/images/actions/${image}`}
                    alt="Изображение акции"
                />

                <h3 className="h3__actions-component">{title}</h3>

                <p className="text-description__actions-component">
                    {description}
                </p>
                <p className="text-info__actions-component">
                    Скидка: <span>{percent}%</span>
                </p>
                <p className="text-info__actions-component">
                    Промокод: <span>{promocode}</span>
                </p>

                <button
                    onClick={() =>
                        dispatch(
                            getActionsAll({
                                id: id,
                                description: description,
                                image: image,
                                title: title,
                                percent: percent,
                                promocode: promocode,
                            })
                        )
                    }
                    className="btn__actions-component"
                >
                    Выбрать акцию
                </button>
            </div>
        </>
    );
};
