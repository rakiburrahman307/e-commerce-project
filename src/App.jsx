import { Outlet } from "react-router-dom";
import Navbar from "./Components/Layout/UserLayout/Home/Navbar/Navbar";
import { Suspense } from "react";
import BigSpinner from "./Components/Layout/BigSpinner/BigSpinner";

function App() {
  return (
    <div className='dark:bg-primary-dark'>
      <Navbar />
      <Suspense fallback={<BigSpinner />}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default App;
