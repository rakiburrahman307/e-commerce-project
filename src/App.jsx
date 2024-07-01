import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Components/Layout/UserLayout/Home/Navbar/Navbar";
import { Suspense } from "react";
import RightFloatingButton from "./Components/Layout/UserLayout/Utilities/RightFloatingButton/RightFloatingButton";
import BigSpinner from "./Components/Layout/BigSpinner/BigSpinner";
import TopScroll from "./Components/Layout/UserLayout/Utilities/TopScroll/TopScroll";
import offlineImg from "../src/assets/svg/internet.svg";
import useOffline from "./Components/Layout/UserLayout/Hooks/useOffline";
import HelmetTitle from "./Components/Layout/UserLayout/Utilities/Helmet/HelmetTitle";


const App = () => {
  const isOffline = useOffline();
  const location = useLocation();

  if (isOffline) {
    return (
      <div className='bg-root-bg dark:bg-primary-dark min-h-screen'>
        <Navbar />
        <div className='flex flex-col md:flex-row justify-center items-center h-full my-20'>
          <img
            src={offlineImg}
            alt='No internet connection'
            className='w-52 h-52'
          />
          <h2 className="text-2xl">You are offline. Please check your connection.</h2>
        </div>
      </div>
    );
  }

  return (
    <div className='bg-root-bg dark:bg-primary-dark min-h-screen'>
      <HelmetTitle />
      <Navbar />
      <RightFloatingButton />
      <TopScroll />
      <Suspense fallback={<BigSpinner />}>
        {isOffline ? (
          <Navigate to='/' state={{ from: location }} replace />
        ) : (
          <Outlet />
        )}
      </Suspense>
    </div>
  );
};

export default App;
