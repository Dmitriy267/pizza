import type { FunctionComponent } from 'react';
import classNames from 'classnames';
import './HamburgerMenu.css';
interface HamburgerMenuProps {
    isActive?: boolean;
    onClick?: (e: React.MouseEvent) => void;
    className?: string;
}

export const HamburgerMenu: FunctionComponent<HamburgerMenuProps> = ({
    onClick,
    className,
    isActive,
}) => {
    return (
        <div onClick={onClick} className={classNames('Hamburger', className)}>
            <div
                className={classNames('Burger', {
                    Burger__active: isActive,
                })}
            ></div>
        </div>
    );
};
