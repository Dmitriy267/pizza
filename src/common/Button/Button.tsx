import type { FunctionComponent } from 'react';
import './Button.css';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    unicClass: string;
}
export const Button: FunctionComponent<ButtonProps> = ({
    children,
    onClick,

    unicClass,
}) => (
    <button onClick={onClick} className={`btn_common ${unicClass}`}>
        {children}
    </button>
);
