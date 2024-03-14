import { createContext } from "react";
import PropTypes from 'prop-types';
export const ContextProvider = createContext();
const Provider = ({ children }) => {

    const selectedColor = JSON.parse(localStorage.getItem('Preference'));

    const providerInfo = {
        selectedColor,
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