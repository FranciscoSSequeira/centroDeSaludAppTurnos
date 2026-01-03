import { useContext, useEffect } from 'react';
import './App.css'
import Navbar from './components/Navbar/Navbar';
import AboutUs from './views/AboutUs/AboutUs';
import Home from './views/Home/Home';
import Login from './views/Login/Login';
import MisTurnos from './views/MisTurnos/MisTurnos';
import Register from './views/Register/Register';
import {Routes, Route, useNavigate} from "react-router-dom"


function App() {
 
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/appointments" element={<MisTurnos/>}/>
      <Route path="/aboutUs" element={<AboutUs/>}/> 
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="*" element={<h2>ruta no encontrada</h2>}/>
    </Routes> 
    <Footer />  
    </>
  )
}

export default App;
