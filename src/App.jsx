import { Outlet } from 'react-router-dom'
import Navbar from './Components/Layout/UserLayout/Navber/Navbar'
import { Suspense } from 'react'

function App() {
  return (
    <div className='dark:bg-dark'>
      <Suspense fallback={
        <div className="flex items-center justify-center h-screen">
          <div className="relative">
            <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
            <div className="absolute top-0 left-0 h-20 w-20 rounded-full border-t-8 border-b-8 border-orange-500 animate-spin">
            </div>
          </div>
        </div>
      }>
        <Navbar />
        <Outlet />
      </Suspense>

    </div>
  )
}

export default App
