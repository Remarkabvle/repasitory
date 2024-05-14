import React from 'react'
import "./App.scss"
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import NotFound from './pages/not-found/NotFound'
import DetailsProduct from './pages/details-product/DetailsProduct'
import Admin from './pages/admin/Admin'
import Auth from './pages/auth/Auth'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Login />} />
        <Route path='/product/:id' element={<DetailsProduct />} />
        <Route path='/' element={<Auth />}>
          <Route path='admin' element={<Admin />} />
        </Route>

        <Route path='*' element={<NotFound />} />
      </Routes>
      {/* <Footer/> */}
      <ToastContainer/>
      <Footer/>
    </>
  )
}

export default App