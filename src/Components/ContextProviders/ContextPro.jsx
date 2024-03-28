import { createContext, useState } from "react";
import PropTypes from 'prop-types';
import { twMerge } from "tailwind-merge";
export const ContextProvider = createContext();
const ContextPro = ({ children }) => {
    //------------- Get The Local Storage Text Color ----------------
    const [textColor, setTextColor] = useState(() => {
        const storedTextColor = localStorage.getItem("PreferenceTextColor");
        let updateTextColor =
            storedTextColor === null || JSON.parse(storedTextColor)?.textColor === ""
                ? "text-secondary-text"
                : JSON.parse(storedTextColor)?.textColor;
        return twMerge(updateTextColor);
    });
    //------------- Get The Local Storage Background Color ----------------
    const [selectedColor, setSelectedColor] = useState(() => {
        const storedColor = localStorage.getItem("Preference");
        let updateColor =
            storedColor === null || JSON.parse(storedColor)?.preferenceColor === ""
                ? "bg-primary"
                : JSON.parse(storedColor)?.preferenceColor;
        return updateColor;
    });
    //------------- Get The Local Storage Border Color ----------------
    const [borderColor, setBorderColor] = useState(() => {
        const storedColor = localStorage.getItem("PreferenceBorderColor");
        let updateColor =
            storedColor === null || JSON.parse(storedColor)?.borderColor === ""
                ? "border-orange-400"
                : JSON.parse(storedColor)?.borderColor;
        return updateColor;
    });



    const providerInfo = {
        textColor,
        selectedColor,
        setSelectedColor,
        setTextColor,
        setBorderColor,
        borderColor
    }
    return (
        <ContextProvider.Provider value={providerInfo}>
            {children}
        </ContextProvider.Provider>
    );
};

ContextPro.propTypes = {
    children: PropTypes.node
};
export default ContextPro;