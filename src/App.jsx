import { Outlet } from 'react-router-dom'
import Navbar from './Components/Layout/UserLayout/Home/Navber/Navbar'


function App() {
  return (
    <div className='dark:bg-primary-dark'>

        <Navbar />
        <Outlet />


    </div>
  )
}

export default App
