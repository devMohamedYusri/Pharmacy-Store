import React from 'react'
// import images
import reactLogo from './assets/react.svg'
import testLogo from "./assets/after-sun-care-404974.jpg";
import logo from "./assets/bloom.png";
import bloomHome from "./assets/Bloom-22.jpg";
import category1 from "./assets/face.png";

import "./App.css";
// import components
import Button from "./design/Button";
import TitleLine from "./design/TitleLine";
import IconCategory from "./components/IconCategory";
import Ad from "./components/Ad";
import Brand from "./components/Brand";
import ProductCard from "./components/ProductCard";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Tail from './components/Tail';
import Login from './components/Login';
import LoginTitle from './design/LoginTitle';
import LoginP from './design/LoginP';
import Hint from './design/Hint';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import RecoverPassword from './components/RecoverPassword';

function App() {
  return (
    <>
        <BrowserRouter>
          <NavBar logo={logo}/>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/recover-password' element={<RecoverPassword />} />
          </Routes>
          <Footer />
        </BrowserRouter>
    </>
  );
}

export default App;
