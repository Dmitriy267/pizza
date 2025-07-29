import type { FC } from 'react';
import { useSelectContext } from '../../hooks/useSelectContext';
import './Option.css';

interface OptionProps {
    children: React.ReactNode | React.ReactNode[];
    value: string;
}
export const Option: FC<OptionProps> = ({ children, value }) => {
    const { changeSelectedOption } = useSelectContext();
    const handeClickOption = () => {
        changeSelectedOption(value);
    };
    return (
        <li className="select-option" onClick={handeClickOption}>
            {children}
        </li>
    );
};
