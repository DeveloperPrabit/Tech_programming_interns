import React from 'react'
// import Home from '../pages/Home'
import ErrorPage from './pages/ErrorPage'
import AdminSidebar from './layouts/adminLayouts/AdminSidebar'
import Profile from './pages/Profile'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
   <>
   <div className='flex justify-items-center text-30 bg-purple-500'>Welcome News Portal App :) 
   </div>
   {/* <ErrorPage /> */}
   <Header />
   <Footer />
   {/* <AdminSidebar /> */}
   {/* <Profile /> */}
   </>
  )
}

export default App