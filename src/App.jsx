import { Outlet } from "react-router-dom";
import Navbar from "./Components/Layout/UserLayout/Home/Navbar/Navbar";
import { Suspense, useEffect } from "react";
import RightFloatingButton from "./Components/Layout/UserLayout/Utilities/RightFloatingButton/RightFloatingButton";
import BigSpinner from "./Components/Layout/BigSpinner/BigSpinner";
import TopScroll from './Components/Layout/UserLayout/Utilities/TopScroll/TopScroll';
import Swal from "sweetalert2";

function App() {
  useEffect(() => {
    const handleOffline = () => {
      Swal.fire({
        title: "Oops, No Internet!",
        text: "It looks like you're offline. Check your connection.",
        icon: "warning",
        confirmButtonText: "Okay",
      });
    };

    const handleOnline = () => {
      Swal.fire({
        title: "You're Back Online!",
        text: "Great! You have reconnected to the internet.",
        icon: "success",
        confirmButtonText: "Awesome!",
      });
    };

    window.addEventListener('offline', handleOffline);
    window.addEventListener('online', handleOnline);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('online', handleOnline);
    };
  }, []);

  return (
    <div className='dark:bg-primary-dark'>
      <Navbar />
      <RightFloatingButton />
      <TopScroll />
      <Suspense fallback={<BigSpinner />}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default App;
