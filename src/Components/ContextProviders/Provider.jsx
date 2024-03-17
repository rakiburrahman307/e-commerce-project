import { createContext, useState } from "react";
import PropTypes from 'prop-types';
export const ContextProvider = createContext();
const Provider = ({ children }) => {
    const [selectedColor, setSelectedColor] = useState(() => {
        const storedColor = localStorage.getItem("Preference");

        let updateColor =
            storedColor === null || JSON.parse(storedColor)?.preferenceColor === ""
                ? "bg-bg-primary"
                : JSON.parse(storedColor)?.preferenceColor;
        return updateColor;
    });

    const providerInfo = {
        selectedColor,
        setSelectedColor
    }
    return (
        <ContextProvider.Provider value={providerInfo}>
            {children}
        </ContextProvider.Provider>
    );
};

Provider.propTypes = {
    children: PropTypes.node
};
export default Provider;