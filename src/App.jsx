import { useNavigation, Outlet } from 'react-router-dom'
import Navbar from './Components/Layout/UserLayout/Home/Navber/Navbar'
import BigSpinner from './Components/Layout/Reuseable/BigSpinner/BigSpinner';
import { Suspense } from 'react';

function App() {
  const navigation = useNavigation();
  return (
    <div className='dark:bg-primary-dark'>
      {navigation?.state === 'loading' && <BigSpinner></BigSpinner>}
      
        <Suspense fallback={<BigSpinner></BigSpinner>}>
        <Navbar />
        <Outlet />
        </Suspense>
    </div>
  )
}

export default App
