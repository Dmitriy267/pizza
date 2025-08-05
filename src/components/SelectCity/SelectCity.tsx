import { useRef, useState, type FC } from 'react';
import { useOnclickOutside } from '../../hooks/useOnClickOutside';
import { SelectContext } from '../../hooks/useSelectContext';
import './SelectCity.css';
interface SelectCityProps {
    children: React.ReactNode | React.ReactNode[];
    defaultValue?: string;
    placeholder?: string;
}
export const SelectCity: FC<SelectCityProps> = ({
    children,
    defaultValue,
    placeholder,
}) => {
    const [selectedOption, setSelectedOption] = useState(
        defaultValue || localStorage.getItem('city') || ''
    );
    const [shopDropDown, setShopDropDown] = useState(false);
    const selectContainerRef = useRef(null);
    const showDropdownHandler = () => setShopDropDown((prev) => !prev);
    const selectPlaceholder = placeholder || 'Выберите опцию';
    const clickOutsideHandler = () => {
        setShopDropDown(false);
    };
    // @ts-ignore
    useOnclickOutside(selectContainerRef, clickOutsideHandler);
    const updateSelectedOption = (option: string) => {
        setSelectedOption(option);
        localStorage.setItem('city', option);
        setShopDropDown(false);
    };

    return (
        <>
            <SelectContext.Provider
                value={{
                    selectedOption,
                    changeSelectedOption: updateSelectedOption,
                }}
            >
                <div className="select-container" ref={selectContainerRef}>
                    <div
                        className={
                            shopDropDown
                                ? 'selected-text active'
                                : 'selected-text'
                        }
                        onClick={showDropdownHandler}
                    >
                        {selectedOption.length > 0
                            ? selectedOption
                            : selectPlaceholder}
                    </div>
                    <ul
                        className={
                            shopDropDown
                                ? 'select-options show-dropdown-options'
                                : 'select-options hide-dropdown-options'
                        }
                    >
                        {children}
                    </ul>
                </div>
            </SelectContext.Provider>
        </>
    );
};
