import { Navigate, useLocation } from "react-router-dom";
import { useGetUserQuery } from "../Components/Features/authApiSlice";
import BigSpinner from "../Components/Layout/BigSpinner/BigSpinner";

const ProtectedRoutes = ({ children }) => {
  const { data: user, isLoading } = useGetUserQuery();
  const location = useLocation();

  if (isLoading) {
    return <BigSpinner />;
  } else if (user) {
    return children;
  }else {
    return <Navigate state={location?.pathname} to='/login' />;
  }
};

export default ProtectedRoutes;
