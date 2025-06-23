import {
    useRef,
    useState,
    type FunctionComponent,
    type MouseEvent,
} from 'react';
import './Modal.css';

interface ModalProps {
    title: string;
    children: React.ReactNode;
    myClass?: string;
    backgroundColorModal?: string;
}
export const Modal: FunctionComponent<ModalProps> = ({
    title,
    children,
    myClass,
    backgroundColorModal,
}) => {
    const [isModalOpen, setIsOpenModal] = useState<boolean>(false);
    const ref = useRef<HTMLDivElement>(null);
    const toggleModalOpen = () => {
        setIsOpenModal((prev) => !prev);
    };
    const closeModal = (e: MouseEvent<HTMLDivElement>) => {
        if (ref.current === e.target) {
            setIsOpenModal(false);
        }
    };
    return (
        <>
            <button onClick={toggleModalOpen} className={myClass}>
                {title}
            </button>
            <div
                className="modal_background"
                onClick={closeModal}
                style={{
                    backgroundColor: backgroundColorModal,
                    display: `${isModalOpen ? 'block' : 'none'}`,
                }}
            >
                <div className="modal__body" ref={ref}>
                    <div className="modal__content">
                        <button
                            className="modal__close"
                            onClick={toggleModalOpen}
                        >
                            {' '}
                            X
                        </button>
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
};
