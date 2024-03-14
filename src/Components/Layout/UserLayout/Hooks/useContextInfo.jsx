import { useContext } from "react";
import { ContextProvider } from "../../../ContextProviders/Provider";
const useContextInfo = () => {
    const context = useContext(ContextProvider)
    return context;
};
export default useContextInfo;