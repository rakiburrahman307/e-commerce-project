import { Outlet } from "react-router-dom";
import Navbar from "./Components/Layout/UserLayout/Home/Navbar/Navbar";
import { Suspense } from "react";
import RightFloatingButton from "./Components/Layout/UserLayout/Utilities/RightFloatingButton/RightFloatingButton";
import BigSpinner from "./Components/Layout/BigSpinner/BigSpinner";
import TopScroll from './Components/Layout/UserLayout/Utilities/TopScroll/TopScroll';

function App() {
  return (
    <div className='dark:bg-primary-dark'>
      <Navbar />
      <RightFloatingButton />
      <TopScroll></TopScroll>
      <Suspense fallback={<BigSpinner />}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default App;
